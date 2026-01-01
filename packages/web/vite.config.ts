import { defineConfig } from 'vite';
import path from 'node:path';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import vueDevTools from 'vite-plugin-vue-devtools';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { TDesignResolver } from 'unplugin-vue-components/resolvers';

export default defineConfig(({ mode }) => ({
  plugins: [
    vue(),
    vueJsx(),
    vueDevTools(),
    AutoImport({
      imports: ['vue', 'vue-router'],
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
  ],
  resolve: {
    alias:
      mode === 'development'
        ? {
            '@dsz-examaware/player': path.resolve(__dirname, '../player/src/index.ts')
          }
        : undefined
  },
  server: {
    port: 5173
  }
}));
