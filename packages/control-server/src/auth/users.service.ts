import { randomBytes, randomUUID } from 'node:crypto';
import { hashPassword } from 'better-auth/crypto';
import {
  BadRequestException,
  ConflictException,
  ForbiddenException,
  Injectable,
  NotFoundException
} from '@nestjs/common';
import { and, count, desc, eq, ilike, inArray, or, type SQL } from 'drizzle-orm';
import type { Page } from '../api/pagination.dto.js';
import type { WriteContext } from '../api/write-context.js';
import { AuditService } from '../audit/audit.service.js';
import { account, user } from '../database/auth-schema.js';
import { DatabaseService } from '../database/database.service.js';
import type { AuthRole } from './access-control.js';

export interface UserView {
  id: string;
  username: string;
  name: string;
  role: AuthRole;
  banned: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateLocalUserInput {
  username: string;
  name?: string;
  password?: string;
  role: AuthRole;
}

export interface UpdateLocalUserInput {
  username?: string;
  name?: string;
  role?: AuthRole;
  banned?: boolean;
}

export interface CreatedCredential extends UserView {
  password: string;
}

export interface BatchUsersResult {
  credentials: CreatedCredential[];
  created: string[];
  replaced: string[];
  skipped: Array<{
    username: string;
    reason: 'invalid' | 'duplicate' | 'exists' | 'protected';
  }>;
}

@Injectable()
export class UsersService {
  constructor(
    private readonly databaseService: DatabaseService,
    private readonly auditService: AuditService
  ) {}

  async list(
    page: number,
    pageSize: number,
    search?: string,
    role?: AuthRole
  ): Promise<Page<UserView>> {
    const filters: SQL[] = [];
    if (search?.trim()) {
      const pattern = `%${search.trim()}%`;
      filters.push(or(ilike(user.username, pattern), ilike(user.name, pattern))!);
    }
    if (role) filters.push(eq(user.role, role));
    const where = filters.length ? and(...filters) : undefined;
    const [records, totals] = await Promise.all([
      this.databaseService.db
        .select()
        .from(user)
        .where(where)
        .orderBy(desc(user.createdAt), desc(user.id))
        .limit(pageSize)
        .offset((page - 1) * pageSize),
      this.databaseService.db.select({ value: count() }).from(user).where(where)
    ]);
    return {
      items: records.map(toUserView),
      page,
      pageSize,
      total: totals[0]?.value ?? 0
    };
  }

  async get(id: string): Promise<UserView> {
    const records = await this.databaseService.db
      .select()
      .from(user)
      .where(eq(user.id, id))
      .limit(1);
    if (!records[0]) throw userNotFound();
    return toUserView(records[0]);
  }

  async create(input: CreateLocalUserInput, context: WriteContext): Promise<CreatedCredential> {
    const password = input.password || generatePassword();
    return this.databaseService.transaction(async (transaction) => {
      try {
        const created = await this.insertUser(transaction, input, password);
        await this.auditService.record(transaction, {
          actorUserId: context.actorUserId,
          action: 'user.created',
          resourceType: 'user',
          resourceId: created.id,
          requestId: context.requestId,
          metadata: { username: created.username, role: created.role }
        });
        return { ...created, password };
      } catch (error) {
        this.rethrowConstraint(error, input.username);
      }
    });
  }

  async createMany(
    usernames: string[],
    role: AuthRole,
    existingUserMode: 'skip' | 'replace',
    context: WriteContext
  ): Promise<BatchUsersResult> {
    const skipped: BatchUsersResult['skipped'] = [];
    const normalized: string[] = [];
    const seen = new Set<string>();
    for (const value of usernames) {
      const username = tryNormalizeUsername(value);
      if (!username) {
        skipped.push({ username: value.trim() || value, reason: 'invalid' });
      } else if (seen.has(username)) {
        skipped.push({ username, reason: 'duplicate' });
      } else {
        seen.add(username);
        normalized.push(username);
      }
    }

    return this.databaseService.transaction(async (transaction) => {
      const existingRecords = normalized.length
        ? await transaction.select().from(user).where(inArray(user.username, normalized))
        : [];
      const existingByUsername = new Map(
        existingRecords.flatMap((record) => (record.username ? [[record.username, record]] : []))
      );
      const credentials: CreatedCredential[] = [];
      const created: string[] = [];
      const replaced: string[] = [];

      for (const username of normalized) {
        const existing = existingByUsername.get(username);
        if (existing && existingUserMode === 'skip') {
          skipped.push({ username, reason: 'exists' });
          continue;
        }
        if (existing?.id === context.actorUserId) {
          skipped.push({ username, reason: 'protected' });
          continue;
        }

        const password = generatePassword();
        if (!existing) {
          const record = await this.insertUser(transaction, { username, role }, password);
          credentials.push({ ...record, password });
          created.push(username);
          continue;
        }

        const now = new Date();
        const records = await transaction
          .update(user)
          .set({ role, banned: false, banReason: null, banExpires: null, updatedAt: now })
          .where(eq(user.id, existing.id))
          .returning();
        const passwordHash = await hashPassword(password);
        const accounts = await transaction
          .update(account)
          .set({ password: passwordHash, updatedAt: now })
          .where(and(eq(account.userId, existing.id), eq(account.providerId, 'credential')))
          .returning({ id: account.id });
        if (!accounts.length) {
          await transaction.insert(account).values({
            id: randomUUID(),
            accountId: existing.id,
            providerId: 'credential',
            userId: existing.id,
            password: passwordHash,
            createdAt: now,
            updatedAt: now
          });
        }
        credentials.push({ ...toUserView(records[0]!), password });
        replaced.push(username);
      }

      await this.auditService.record(transaction, {
        actorUserId: context.actorUserId,
        action: 'user.batch-processed',
        resourceType: 'user',
        requestId: context.requestId,
        metadata: {
          existingUserMode,
          created,
          replaced,
          skipped
        }
      });
      return { credentials, created, replaced, skipped };
    });
  }

  async update(id: string, input: UpdateLocalUserInput, context: WriteContext): Promise<UserView> {
    if (id === context.actorUserId && input.banned === true) {
      throw new ForbiddenException({
        code: 'cannot_ban_self',
        message: 'You cannot disable yourself'
      });
    }
    return this.databaseService.transaction(async (transaction) => {
      const current = await transaction.select().from(user).where(eq(user.id, id)).limit(1);
      if (!current[0]) throw userNotFound();
      const patch = {
        ...(input.username
          ? {
              username: normalizeUsername(input.username),
              displayUsername: input.username.trim(),
              email: internalEmail(normalizeUsername(input.username))
            }
          : {}),
        ...(input.name ? { name: input.name.trim() } : {}),
        ...(input.role ? { role: input.role } : {}),
        ...(input.banned !== undefined ? { banned: input.banned } : {}),
        updatedAt: new Date()
      };
      try {
        const records = await transaction
          .update(user)
          .set(patch)
          .where(eq(user.id, id))
          .returning();
        const updated = toUserView(records[0]!);
        await this.auditService.record(transaction, {
          actorUserId: context.actorUserId,
          action: 'user.updated',
          resourceType: 'user',
          resourceId: id,
          requestId: context.requestId,
          metadata: { fields: Object.keys(input) }
        });
        return updated;
      } catch (error) {
        this.rethrowConstraint(error, input.username ?? current[0].username ?? id);
      }
    });
  }

  async resetPassword(
    id: string,
    context: WriteContext
  ): Promise<{ username: string; password: string }> {
    const password = generatePassword();
    const passwordHash = await hashPassword(password);
    return this.databaseService.transaction(async (transaction) => {
      const records = await transaction.select().from(user).where(eq(user.id, id)).limit(1);
      if (!records[0]) throw userNotFound();
      await transaction
        .update(account)
        .set({ password: passwordHash, updatedAt: new Date() })
        .where(and(eq(account.userId, id), eq(account.providerId, 'credential')));
      await this.auditService.record(transaction, {
        actorUserId: context.actorUserId,
        action: 'user.password-reset',
        resourceType: 'user',
        resourceId: id,
        requestId: context.requestId
      });
      return { username: records[0].username!, password };
    });
  }

  async remove(id: string, context: WriteContext): Promise<void> {
    if (id === context.actorUserId) {
      throw new ForbiddenException({
        code: 'cannot_delete_self',
        message: 'You cannot delete yourself'
      });
    }
    await this.databaseService.transaction(async (transaction) => {
      const records = await transaction.select().from(user).where(eq(user.id, id)).limit(1);
      if (!records[0]) throw userNotFound();
      await transaction.delete(user).where(eq(user.id, id));
      await this.auditService.record(transaction, {
        actorUserId: context.actorUserId,
        action: 'user.deleted',
        resourceType: 'user',
        resourceId: id,
        requestId: context.requestId,
        metadata: { username: records[0].username }
      });
    });
  }

  private async insertUser(
    transaction: Parameters<Parameters<DatabaseService['transaction']>[0]>[0],
    input: CreateLocalUserInput,
    password: string
  ): Promise<UserView> {
    const username = normalizeUsername(input.username);

    const id = randomUUID();
    const now = new Date();
    const records = await transaction
      .insert(user)
      .values({
        id,
        name: input.name?.trim() || username,
        email: internalEmail(username),
        emailVerified: true,
        username,
        displayUsername: input.username.trim(),
        role: input.role,
        banned: false,
        createdAt: now,
        updatedAt: now
      })
      .returning();
    await transaction.insert(account).values({
      id: randomUUID(),
      accountId: id,
      providerId: 'credential',
      userId: id,
      password: await hashPassword(password),
      createdAt: now,
      updatedAt: now
    });
    return toUserView(records[0]!);
  }

  private rethrowConstraint(error: unknown, username: string): never {
    if (isPostgresError(error) && error.code === '23505') {
      throw new ConflictException({
        code: 'username_exists',
        message: `Username ${username} already exists`
      });
    }
    throw error;
  }
}

function tryNormalizeUsername(value: string): string | undefined {
  const username = value.trim().toLowerCase();
  return /^[a-zA-Z0-9_.]{3,32}$/.test(username) ? username : undefined;
}
function normalizeUsername(value: string): string {
  const username = value.trim().toLowerCase();
  if (!/^[a-zA-Z0-9_.]{3,32}$/.test(username)) {
    throw new BadRequestException({
      code: 'invalid_username',
      message: 'Username must contain 3-32 letters, digits, underscores or dots'
    });
  }
  return username;
}

function internalEmail(username: string): string {
  return `${username}@local.examaware.invalid`;
}

function generatePassword(): string {
  return `Ea2-${randomBytes(12).toString('base64url')}`;
}

function toUserView(record: typeof user.$inferSelect): UserView {
  return {
    id: record.id,
    username: record.username!,
    name: record.name,
    role: (record.role ?? 'viewer') as AuthRole,
    banned: record.banned ?? false,
    createdAt: record.createdAt,
    updatedAt: record.updatedAt
  };
}

function userNotFound() {
  return new NotFoundException({ code: 'user_not_found', message: 'User not found' });
}

function isPostgresError(error: unknown): error is { code: string } {
  return typeof error === 'object' && error !== null && 'code' in error;
}
