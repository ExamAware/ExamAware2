import { builtinModules } from 'node:module';
import { resolve } from 'node:path';
import { defineConfig } from 'vite';

const builtins = new Set<string>([
  ...builtinModules,
  ...builtinModules.map((mod) => `node:${mod}`)
]);
// Bundle plugin-sdk; only externalize Electron + Node builtins so the plugin is self-contained.
const externalDeps = ['electron', 'electron/main', ...builtins];

export default defineConfig(({ mode }) => {
  const isProd = mode === 'production';

  return {
    build: {
      lib: {
        entry: resolve(__dirname, 'src/main/index.ts'),
        fileName: () => 'index.cjs',
        formats: ['cjs']
      },
      emptyOutDir: false,
      outDir: 'dist/main',
      target: 'node20',
      sourcemap: !isProd,
      minify: false,
      rollupOptions: {
        external: (source) =>
          externalDeps.some((dep) => source === dep || source.startsWith(`${dep}/`)),
        output: {
          exports: 'default',
          esModule: false
        }
      }
    }
  };
});
