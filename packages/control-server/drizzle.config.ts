import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  dialect: 'postgresql',
  schema: ['./src/database/auth-schema.ts', './src/**/*.schema.ts'],
  out: './drizzle',
  dbCredentials: {
    url:
      process.env.DATABASE_URL ?? 'postgres://examaware:examaware@127.0.0.1:5432/examaware_control'
  },
  strict: true,
  verbose: true
});
