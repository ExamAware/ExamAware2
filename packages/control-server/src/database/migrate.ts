import { fileURLToPath } from 'node:url';
import { migrate } from 'drizzle-orm/postgres-js/migrator';
import { database, postgresClient } from './client.js';

const migrationsFolder =
  process.env.DRIZZLE_MIGRATIONS_DIR ?? fileURLToPath(new URL('../../drizzle/', import.meta.url));

async function main(): Promise<void> {
  await migrate(database, { migrationsFolder });
  console.log('Migrations applied');
  await postgresClient.end();
}

main().catch((error: unknown) => {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
});
