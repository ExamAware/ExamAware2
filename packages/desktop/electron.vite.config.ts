import { resolve } from 'path'
import { defineConfig, externalizeDepsPlugin } from 'electron-vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { TDesignResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
  main: {
    plugins: [externalizeDepsPlugin()],
    build: {
      outDir: 'dist/main',
      lib: {
        entry: resolve(__dirname, 'src/main/index.ts')
      }
    }
  },
  preload: {
    plugins: [externalizeDepsPlugin()],
    build: {
      outDir: 'dist/preload',
      lib: {
        entry: resolve(__dirname, 'src/preload/index.ts')
      }
    }
  },
  renderer: {
    root: 'src/renderer',
    build: {
      outDir: '../../dist/renderer'
    },
    resolve: {
      alias: {
        '@renderer': resolve('src/renderer/src'),
        '@': resolve('src/renderer/src')
      }
    },
    assetsInclude: ['**/*.ttf', '**/*.woff', '**/*.woff2', '**/*.otf'],
    plugins: [
      vue(),
      vueJsx(),
      vueDevTools(),
      AutoImport({
        resolvers: [
          TDesignResolver({
            library: 'vue-next'
          })
        ]
      }),
      Components({
        resolvers: [
          TDesignResolver({
            library: 'vue-next'
          })
        ]
      })
    ]
  }
})
