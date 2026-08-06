import { randomUUID } from 'node:crypto';
import { hashPassword } from 'better-auth/crypto';
import { sql } from 'drizzle-orm';
import { database } from '../database/client.js';
import { account, user } from '../database/schema.js';

export interface BootstrapAdminInput {
  username: string;
  name: string;
  password: string;
}

export function readBootstrapAdminInput(source: NodeJS.ProcessEnv): BootstrapAdminInput {
  const username = source.CONTROL_ADMIN_USERNAME?.trim().toLowerCase() ?? '';
  const name = source.CONTROL_ADMIN_NAME?.trim() ?? '';
  const password = source.CONTROL_ADMIN_PASSWORD ?? '';

  if (!/^[a-zA-Z0-9_.]{3,32}$/.test(username)) {
    throw new Error(
      'CONTROL_ADMIN_USERNAME must contain 3-32 letters, digits, underscores or dots'
    );
  }
  if (!name) {
    throw new Error('CONTROL_ADMIN_NAME is required');
  }
  if (password.length < 12 || password.length > 128) {
    throw new Error('CONTROL_ADMIN_PASSWORD must contain between 12 and 128 characters');
  }

  return { username, name, password };
}

export async function bootstrapInitialAdmin(input: BootstrapAdminInput): Promise<string> {
  const userId = randomUUID();
  const now = new Date();
  const password = await hashPassword(input.password);

  await database.transaction(async (transaction) => {
    await transaction.execute(
      sql`select pg_advisory_xact_lock(hashtext('examaware-bootstrap-admin'))`
    );

    const existingUsers = await transaction.select({ id: user.id }).from(user).limit(1);
    if (existingUsers.length > 0) {
      throw new Error('Bootstrap refused because at least one account already exists');
    }

    await transaction.insert(user).values({
      id: userId,
      name: input.name,
      email: `${input.username}@local.examaware.invalid`,
      emailVerified: true,
      username: input.username,
      displayUsername: input.username,
      role: 'admin',
      banned: false,
      createdAt: now,
      updatedAt: now
    });

    await transaction.insert(account).values({
      id: randomUUID(),
      accountId: userId,
      providerId: 'credential',
      userId,
      password,
      createdAt: now,
      updatedAt: now
    });
  });

  return userId;
}
