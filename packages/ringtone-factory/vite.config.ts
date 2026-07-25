import { resolve } from 'node:path';
import vue from '@vitejs/plugin-vue';
import { defineConfig, type ResolvedConfig } from 'vite';

const inlineAllDeps = () => ({
  name: 'inline-all-deps',
  configResolved(config: ResolvedConfig) {
    if (!config.build.rollupOptions) return;
    config.build.rollupOptions.external = undefined;
  }
});

export default defineConfig(({ mode }) => {
  const isProd = mode === 'production';

  return {
    define: {
      __DEV__: !isProd,
      'process.env.NODE_ENV': JSON.stringify(isProd ? 'production' : 'development'),
      'process.env': JSON.stringify({ NODE_ENV: isProd ? 'production' : 'development' }),
      process: JSON.stringify({ env: { NODE_ENV: isProd ? 'production' : 'development' } })
    },
    plugins: [vue(), inlineAllDeps()],
    base: './',
    build: {
      emptyOutDir: true,
      outDir: 'dist/renderer',
      sourcemap: !isProd,
      minify: isProd ? 'esbuild' : false,
      cssCodeSplit: false,
      target: 'esnext',
      lib: {
        entry: resolve(__dirname, 'src/renderer/main.ts'),
        fileName: () => 'index.mjs',
        formats: ['es'],
        name: 'ExamAwareRingtoneFactory'
      },
      rollupOptions: {
        output: {
          format: 'es',
          entryFileNames: 'index.mjs',
          inlineDynamicImports: true,
          assetFileNames: 'assets/[name][extname]'
        }
      }
    }
  };
});
