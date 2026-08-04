import { randomUUID } from 'node:crypto';
import { hashPassword } from 'better-auth/crypto';
import { sql } from 'drizzle-orm';
import { database } from '../database/client.js';
import { account, user } from '../database/schema.js';

export interface BootstrapAdminInput {
  email: string;
  name: string;
  password: string;
}

export function readBootstrapAdminInput(source: NodeJS.ProcessEnv): BootstrapAdminInput {
  const email = source.CONTROL_ADMIN_EMAIL?.trim().toLowerCase() ?? '';
  const name = source.CONTROL_ADMIN_NAME?.trim() ?? '';
  const password = source.CONTROL_ADMIN_PASSWORD ?? '';

  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
    throw new Error('CONTROL_ADMIN_EMAIL must be a valid email address');
  }
  if (!name) {
    throw new Error('CONTROL_ADMIN_NAME is required');
  }
  if (password.length < 12 || password.length > 128) {
    throw new Error('CONTROL_ADMIN_PASSWORD must contain between 12 and 128 characters');
  }

  return { email, name, password };
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
      email: input.email,
      emailVerified: true,
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
