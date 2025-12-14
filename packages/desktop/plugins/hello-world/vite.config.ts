import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig(({ mode }) => {
  const isProd = mode === 'production'

  return {
    base: './',
    build: {
      emptyOutDir: false,
      outDir: 'dist/renderer',
      sourcemap: !isProd,
      minify: isProd ? 'esbuild' : false,
      cssCodeSplit: false,
      target: 'esnext',
      watch: isProd ? undefined : {},
      lib: {
        entry: resolve(__dirname, 'src/renderer/main.ts'),
        fileName: () => 'index.mjs',
        formats: ['es'],
        name: 'HelloWorldRendererPlugin'
      },
      rollupOptions: {
        external: [],
        output: {
          format: 'es',
          entryFileNames: 'index.mjs',
          inlineDynamicImports: true,
          chunkFileNames: 'chunks/[name].js',
          assetFileNames: 'assets/[name][extname]'
        }
      }
    }
  }
})
