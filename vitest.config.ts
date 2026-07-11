import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'node',
    clearMocks: true,
    restoreMocks: true,
    passWithNoTests: true,
    include: ['packages/**/*.test.ts'],
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
