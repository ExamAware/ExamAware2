import { resolve } from 'path'
import { defineConfig, externalizeDepsPlugin } from 'electron-vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { TDesignResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig(({ mode }) => {
  const isProduction = mode === 'production'

  return {
    main: {
      plugins: [externalizeDepsPlugin()],
      build: {
        outDir: 'dist/main',
        lib: {
          entry: resolve(__dirname, 'src/main/index.ts')
        },
        minify: isProduction,
        sourcemap: !isProduction
      }
    },
    preload: {
      plugins: [externalizeDepsPlugin()],
      build: {
        outDir: 'dist/preload',
        lib: {
          entry: resolve(__dirname, 'src/preload/index.ts')
        },
        minify: isProduction,
        sourcemap: !isProduction
      }
    },
    renderer: {
      root: 'src/renderer',
      build: {
        outDir: resolve(__dirname, 'dist/renderer'),
        minify: isProduction,
        sourcemap: !isProduction
      },
      resolve: {
        alias: {
          '@renderer': resolve('src/renderer/src'),
          '@': resolve('src/renderer/src')
        }
      },
      assetsInclude: ['**/*.ttf', '**/*.woff', '**/*.woff2', '**/*.otf'],
      plugins: [
        vue({
          script: {
            // 在生产模式下禁用类型检查以加快构建速度
            defineModel: true,
            propsDestructure: true
          }
        }),
        vueJsx(),
        // 只在开发模式下启用 vueDevTools
        !isProduction && vueDevTools(),
        AutoImport({
          resolvers: [
            TDesignResolver({
              library: 'vue-next'
            })
          ],
          // 在生产模式下禁用类型生成
          dts: !isProduction
        }),
        Components({
          resolvers: [
            TDesignResolver({
              library: 'vue-next'
            })
          ],
          // 在生产模式下禁用类型生成
          dts: !isProduction
        })
      ].filter(Boolean)
    }
  }
})
