import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import { env } from '../config/env.js';
import * as schema from './schema.js';

export const postgresClient = postgres(env.databaseUrl, {
  max: 10,
  idle_timeout: 20,
  connect_timeout: 5
});

export const database = drizzle(postgresClient, { schema });

export type DatabaseTransaction = Parameters<Parameters<typeof database.transaction>[0]>[0];
