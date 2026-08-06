import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  use: {
    baseURL: process.env.CONTROL_CONSOLE_BASE_URL || 'http://127.0.0.1:18080',
    browserName: 'chromium',
    colorScheme: 'light'
  }
});
