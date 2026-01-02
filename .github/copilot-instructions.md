# Copilot Instructions for ExamAware Workspace

- Monorepo managed with pnpm workspaces; key packages: desktop (Electron + Vue 3 app), core (exam config parsing/validation), player (Vue player UI/logic), plugin-sdk (plugin host builder/DI + CLI), web (browser UI), and templates under templates/.
- Primary app is the desktop client in [packages/desktop](packages/desktop); Electron main/preload/renderer live under src/main, src/preload, src/renderer. Uses electron-vite for dev/build and electron-builder for distribution.
- UI stack: Vue 3 + TypeScript + Pinia + tdesign-vue-next (see components like CastWindow in renderer). Keep styles scoped and rely on theme variables (var(--td-\*)); avoid introducing non-ASCII.
- Core domain logic: exam config parsing/validation/time utilities in [packages/core](packages/core). Player rendering/logic lives in [packages/player](packages/player) and is consumed by desktop/web and plugins.
- Plugin system: documented design in [packages/desktop/docs/plugin-system-plan.md](packages/desktop/docs/plugin-system-plan.md). Plugins declare examaware manifest fields (targets main/renderer, services provide/inject, settings schema) and must be reversible (every effect returns a disposer). Host builds a service graph and loads in topo order; unload reverses.
- Plugin runtime API (ctx.desktopApi/ui/services/settings/ipc) mirrors that plan; renderer plugins can register settings pages and toolbar/actions; main plugins can register IPC/services. Follow disposables to avoid residual side effects.
- Plugin SDK & scaffolding: [packages/plugin-sdk](packages/plugin-sdk) exports defineExamAwarePlugin, HostBuilder/ServiceCollection, and CLI bins create-examaware-plugin / pack-examaware-plugin. Template sources under [templates/examaware-plugin-template](templates/examaware-plugin-template); demo plugin in [packages/desktop/plugins/examaware-plugin-doom](packages/desktop/plugins/examaware-plugin-doom).
- Player usage patterns: main component `ExamPlayer` and hook `useExamPlayer` (see [packages/player/README.md](packages/player/README.md)) expect ExamConfig from @dsz-examaware/core. Toolbar registration uses providePlayerToolbar/usePlayerToolbar APIs.
- Build/dev workflows:
  - Install deps: `pnpm i`.
  - Desktop dev: `pnpm dev` (runs desktop via electron-vite). If core/player changes needed, run `pnpm dev:prebuild` then `pnpm dev:watch` in another shell.
  - Desktop build: `pnpm build` or `pnpm desktop:build:win|mac|linux*` from root; these run electron-vite build then prepare:packdeps + prepare:workspace-deps before electron-builder.
  - Docs: `pnpm docs:dev` / `pnpm docs:build` for VuePress site in [docs](docs).
- Lint/type-check: `pnpm lint` (workspace), desktop uses `eslint src --ext .ts,.vue --fix`; `vue-tsc --noEmit` via `pnpm --filter @dsz-examaware/desktop type-check`.
- Packaging plugins: inside a plugin repo/template, use `pnpm dev` for watch, `pnpm build` for dist, `pnpm pack` to emit .ea2x. In desktop app, choose “解压缩插件” and point to the plugin folder.
- Config/manifest conventions: examaware package.json field defines displayName/description, targets.main/renderer, services.provide/inject, settings.schema. Keep settings namespace defaulting to package name; schema-driven forms in settings page.
- Desktop API notes: renderer and plugins communicate via IPC; prefer using window.api cast/player/editor abstractions rather than raw IPC. When following config streams (e.g., Cast follow), ensure timers are cleared on unmount and hash changes trigger reloads.
- Fonts/assets: misans bundled; avoid adding heavy assets to renderer; electron-builder configs live in [packages/desktop/electron-builder.yml](packages/desktop/electron-builder.yml).
- When adding new features, respect reversibility and service graph: register disposables, avoid global mutations without cleanup, and align with host/plugin lifecycle documented in plugin-system plan.

## 注意

plugin-sdk 包的 hosting 和 shared 目录为 symlink到 desktop 内的对应代码目录，目的是为了同步代码。修改时请修改 desktop 内代码。
