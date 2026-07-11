import { resolve } from 'node:path';
import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: [
      { find: '@renderer', replacement: resolve(__dirname, 'packages/desktop/src/renderer/src') }
    ]
  },
  test: {
    environment: 'node',
    clearMocks: true,
    restoreMocks: true,
    passWithNoTests: true,
    include: ['packages/*/tests/**/*.test.ts'],
    exclude: [
      '**/node_modules/**',
      '**/dist/**',
      '**/out/**',
      'templates/**',
      'packages/plugin-template/template/**',
      'packages/desktop/plugins/examaware-plugin-doom/wasm-doom/**'
    ]
  }
});
