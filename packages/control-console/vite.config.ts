import path from 'node:path';
import { fileURLToPath, URL } from 'node:url';
import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { TDesignResolver } from 'unplugin-vue-components/resolvers';
import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), 'VITE_');
  const controlServerUrl = env.VITE_CONTROL_SERVER_URL || 'http://127.0.0.1:3100';

  return {
    base: env.VITE_BASE_URL || '/',
    plugins: [
      vue(),
      AutoImport({
        imports: ['vue', 'vue-router'],
        resolvers: [TDesignResolver({ library: 'vue-next' })]
      }),
      Components({
        resolvers: [TDesignResolver({ library: 'vue-next' })]
      })
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    server: {
      host: '127.0.0.1',
      port: 5174,
      proxy: {
        '/api': {
          target: controlServerUrl,
          ws: true
        },
        '/device': {
          target: controlServerUrl,
          ws: true
        }
      }
    },
    build: {
      outDir: path.resolve(import.meta.dirname, 'dist')
    }
  };
});
