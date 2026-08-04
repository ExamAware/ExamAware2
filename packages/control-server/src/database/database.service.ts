import { Injectable, OnApplicationShutdown } from '@nestjs/common';
import { database, postgresClient } from './client.js';
import type { DatabaseTransaction } from './client.js';

@Injectable()
export class DatabaseService implements OnApplicationShutdown {
  readonly db = database;

  transaction<T>(work: (transaction: DatabaseTransaction) => Promise<T>): Promise<T> {
    return this.db.transaction(work);
  }

  async checkConnection(): Promise<void> {
    await postgresClient`select 1`;
  }

  async onApplicationShutdown(): Promise<void> {
    await postgresClient.end({ timeout: 5 });
  }
}
