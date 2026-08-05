import { postgresClient } from '../database/client.js';
import { bootstrapInitialAdmin, readBootstrapAdminInput } from './bootstrap.js';

async function main(): Promise<void> {
  try {
    const input = readBootstrapAdminInput(process.env);
    const userId = await bootstrapInitialAdmin(input);
    console.log(`Created initial administrator ${input.username} (${userId})`);
  } finally {
    await postgresClient.end();
  }
}

main().catch((error: unknown) => {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
});
