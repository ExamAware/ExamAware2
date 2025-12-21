{
  "name": "{{PACKAGE_NAME}}",
  "version": "0.1.0",
  "private": false,
  "type": "module",
  "main": "./dist/main/index.cjs",
  "module": "./dist/renderer/index.mjs",
  "types": "./dist/main/index.d.ts",
  "scripts": {
    "dev": "run-p dev:renderer dev:main",
    "dev:renderer": "vite build --watch --mode development --config vite.config.ts",
    "dev:main": "vite build --watch --mode development --config vite.main.config.ts",
    "build": "pnpm run build:renderer && pnpm run build:main && pnpm run build:types",
    "build:renderer": "vite build --config vite.config.ts",
    "build:main": "vite build --config vite.main.config.ts",
    "build:types": "vue-tsc --declaration --emitDeclarationOnly --outDir dist",
    "lint": "vue-tsc --noEmit"
  },
  "examaware": {
    "displayName": "ExamAware Plugin",
    "description": "Generated with @examaware/plugin-sdk",
    "targets": {
      "main": "./dist/main/index.cjs",
      "renderer": "./dist/renderer/index.mjs"
    },
    "services": {
      "provide": ["hello.message"],
      "inject": []
    },
    "settings": {
      "namespace": "{{PACKAGE_NAME}}",
      "schema": "./schema.json"
    }
  },
  "dependencies": {
    "@examaware/plugin-sdk": "{{PLUGIN_SDK_VERSION}}",
    "vue": "{{VUE_VERSION}}"
  },
  "devDependencies": {
    "@types/node": "{{NODE_TYPES_VERSION}}",
    "@vitejs/plugin-vue": "{{VITE_PLUGIN_VUE_VERSION}}",
    "npm-run-all2": "{{NPM_RUN_ALL_VERSION}}",
    "typescript": "{{TYPESCRIPT_VERSION}}",
    "vite": "{{VITE_VERSION}}",
    "vue-tsc": "{{VUE_TSC_VERSION}}"
  }
}
