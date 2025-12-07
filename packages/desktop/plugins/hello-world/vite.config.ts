import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    emptyOutDir: false,
    outDir: 'dist/renderer',
    lib: {
      entry: resolve(__dirname, 'src/renderer/main.ts'),
      fileName: () => 'index.mjs',
      formats: ['es'],
      name: 'HelloWorldRendererPlugin'
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
})
