import { resolve } from 'node:path';
import { defineConfig } from 'vite';

const entry = resolve(__dirname, 'src/index.ts');

export default defineConfig(() => ({
  resolve: {
    preserveSymlinks: true,
    alias: [
      {
        find: '@app/package.json',
        replacement: resolve(__dirname, 'package.json')
      }
    ]
  },
  build: {
    lib: {
      entry
    },
    emptyOutDir: true,
    outDir: 'dist',
    sourcemap: true,
    minify: false,
    target: 'es2020',
    rollupOptions: {
      external: [],
      output: [
        {
          format: 'es',
          entryFileNames: 'index.mjs',
          dir: 'dist',
          exports: 'named'
        },
        {
          format: 'cjs',
          entryFileNames: 'index.cjs',
          dir: 'dist',
          exports: 'named'
        }
      ]
    }
  }
}));
