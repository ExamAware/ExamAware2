import { describe, expect, it, vi } from 'vitest';
import type { AuditService } from '../src/audit/audit.service.js';
import { UsersService } from '../src/auth/users.service.js';
import { account, user } from '../src/database/auth-schema.js';
import type { DatabaseService } from '../src/database/database.service.js';

const context = {
  actorUserId: 'admin-user',
  requestId: '760d425b-57df-497b-af47-b8fc7fd574bb'
};
const now = new Date('2026-08-05T00:00:00Z');
const existingUser = {
  id: 'existing-user',
  name: 'Existing User',
  email: 'existing@local.examaware.invalid',
  username: 'existing',
  displayUsername: 'existing',
  emailVerified: true,
  image: null,
  createdAt: now,
  updatedAt: now,
  role: 'viewer',
  banned: false,
  banReason: null,
  banExpires: null
} satisfies typeof user.$inferSelect;

function createService(transaction: object) {
  const databaseService = {
    transaction: vi.fn(async (work) => work(transaction))
  } as unknown as DatabaseService;
  const auditService = {
    record: vi.fn().mockResolvedValue(undefined)
  } as unknown as AuditService;
  return {
    auditService,
    service: new UsersService(databaseService, auditService)
  };
}

function selectExisting(records = [existingUser]) {
  return {
    from: vi.fn(() => ({
      where: vi.fn().mockResolvedValue(records)
    }))
  };
}

describe('UsersService batch processing', () => {
  it('skips invalid, duplicate, and existing usernames and reports every skipped item', async () => {
    const transaction = {
      select: vi.fn(() => selectExisting()),
      update: vi.fn(),
      insert: vi.fn()
    };
    const { service } = createService(transaction);

    const result = await service.createMany(
      ['bad name', 'EXISTING', 'existing', 'x'],
      'viewer',
      'skip',
      context
    );

    expect(result).toEqual({
      credentials: [],
      created: [],
      replaced: [],
      skipped: [
        { username: 'bad name', reason: 'invalid' },
        { username: 'existing', reason: 'duplicate' },
        { username: 'x', reason: 'invalid' },
        { username: 'existing', reason: 'exists' }
      ]
    });
    expect(transaction.update).not.toHaveBeenCalled();
    expect(transaction.insert).not.toHaveBeenCalled();
  });

  it('replaces an existing local account by resetting its role, state, and password', async () => {
    const updatedUser = { ...existingUser, role: 'operator', updatedAt: new Date() };
    const userSet = vi.fn(() => ({
      where: vi.fn(() => ({ returning: vi.fn().mockResolvedValue([updatedUser]) }))
    }));
    const accountSet = vi.fn(() => ({
      where: vi.fn(() => ({ returning: vi.fn().mockResolvedValue([{ id: 'account-id' }]) }))
    }));
    const transaction = {
      select: vi.fn(() => selectExisting()),
      update: vi.fn((table) => ({ set: table === user ? userSet : accountSet })),
      insert: vi.fn()
    };
    const { service, auditService } = createService(transaction);

    const result = await service.createMany(['existing'], 'operator', 'replace', context);

    expect(result.created).toEqual([]);
    expect(result.replaced).toEqual(['existing']);
    expect(result.skipped).toEqual([]);
    expect(result.credentials).toEqual([
      expect.objectContaining({
        username: 'existing',
        role: 'operator',
        password: expect.stringMatching(/^Ea2-/)
      })
    ]);
    expect(userSet).toHaveBeenCalledWith(
      expect.objectContaining({
        role: 'operator',
        banned: false,
        banReason: null,
        banExpires: null
      })
    );
    expect(transaction.update).toHaveBeenCalledWith(account);
    expect(transaction.insert).not.toHaveBeenCalled();
    expect(auditService.record).toHaveBeenCalledWith(
      transaction,
      expect.objectContaining({
        action: 'user.batch-processed',
        metadata: expect.objectContaining({ replaced: ['existing'] })
      })
    );
  });
});
