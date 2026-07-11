import pluginVue from 'eslint-plugin-vue';
import electronConfig from '@electron-toolkit/eslint-config';
import prettierConfig from '@vue/eslint-config-prettier';
import {
  configureVueProject,
  defineConfigWithVueTs,
  vueTsConfigs
} from '@vue/eslint-config-typescript';

configureVueProject({ rootDir: import.meta.dirname, scriptLangs: ['ts'] });

export default defineConfigWithVueTs(
  {
    name: 'examaware/ignores',
    ignores: [
      '**/node_modules/**',
      '**/dist/**',
      '**/out/**',
      'packages/desktop/src/renderer/auto-imports.d.ts',
      'packages/desktop/src/renderer/components.d.ts',
      'packages/web/auto-imports.d.ts',
      'packages/web/components.d.ts',
      'packages/plugin-template/template/dist/**',
      'templates/examaware-plugin-template/dist/**',
      'packages/desktop/plugins/examaware-plugin-doom/wasm-doom/**'
    ]
  },
  { name: 'examaware/electron-base', ...electronConfig },
  ...pluginVue.configs['flat/recommended'],
  vueTsConfigs.recommended,
  prettierConfig,
  {
    name: 'examaware/legacy-baseline',
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/no-empty-object-type': 'off',
      'no-empty': 'off',
      'vue/block-lang': 'off'
    }
  },
  {
    name: 'examaware/plugin-sdk-rpc-compatibility',
    files: ['packages/plugin-sdk/src/rpc.ts'],
    rules: {
      '@typescript-eslint/no-explicit-any': 'off'
    }
  },
  {
    name: 'examaware/overrides',
    rules: {
      'vue/require-default-prop': 'off',
      'vue/multi-word-component-names': 'off'
    }
  }
);
