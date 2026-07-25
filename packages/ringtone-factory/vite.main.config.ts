import { builtinModules } from 'node:module';
import { resolve } from 'node:path';
import { defineConfig } from 'vite';

const builtins = new Set([...builtinModules, ...builtinModules.map((mod) => `node:${mod}`)]);
const externalDeps = ['electron', 'electron/main', ...builtins];

export default defineConfig(({ mode }) => ({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/main/index.ts'),
      fileName: () => 'index.cjs',
      formats: ['cjs']
    },
    emptyOutDir: false,
    outDir: 'dist/main',
    target: 'node20',
    sourcemap: mode !== 'production',
    minify: false,
    rollupOptions: {
      external: (source) =>
        externalDeps.some(
          (dependency) => source === dependency || source.startsWith(`${dependency}/`)
        ),
      output: {
        exports: 'default',
        esModule: false
      }
    }
  }
}));
