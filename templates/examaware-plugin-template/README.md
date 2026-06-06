# ExamAware Demo Plugin

A ready-to-run ExamAware plugin showcasing both main and renderer entries, a hosted service, and a settings page.

## Quickstart

```bash
pnpm install
pnpm dev   # build main + renderer in watch mode
# or
pnpm build
pnpm pack  # builds then packs into .ea2x
```

In ExamAware desktop, choose "解压缩插件" and select this folder (the one containing `package.json`).

## What it demonstrates

- Main process: exposes `hello.message` service and logs a heartbeat.
- Renderer: registers a settings page with a counter that persists via plugin settings API.
- Settings schema: `schema.json` declares the `demo.clicks` and `demo.message` fields.

## Customize

- Update `package.json` `name`, `examaware.displayName`, and `examaware.settings.namespace` to your plugin's ID.
- Tweak `src/main/index.ts` heartbeat message or wire new services.
- Adjust the settings UI in `src/renderer/components/PluginSettingsPage.vue`.
