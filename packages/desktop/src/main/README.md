# Desktop Main Process

The main process is organized by domain first and technical role second. Keep `index.ts` as the
executable entry point; feature implementation does not belong at the root.

## Directory Boundaries

- `assets`: main-process static assets imported by the bundle.
- `cast`: local sharing service and its IPC controller.
- `config`: persisted application configuration and in-memory shared exam configuration.
- `deepLink`: deep-link parsing, dispatch, decorators, and application routes.
- `fileSystem`: reusable file-system APIs exposed to the preload or IPC layers.
- `httpApi`: HTTP API service, route types, path handling, and its IPC controller.
- `ipc`: IPC composition, registration primitives, and function-based handlers grouped by domain.
- `logging`: logger implementation, log storage, console capture, and logging IPC controller.
- `network`: transport-independent address and port utilities.
- `plugins`: plugin discovery, loading, hosting, preferences, and installation.
- `reminderSound`: reminder sound pack storage plus IPC/protocol integration.
- `runtime`: process lifetime, shared context, disposal, shutdown, and download coordination.
- `timeSync`: NTP client, time configuration, time service, and IPC handlers.
- `windows`: Electron window creation, window coordination, title-bar integration, and tray UI.

## Naming Rules

- Use `lowerCamelCase` for TypeScript files and directories.
- Use plural directory names only for collections such as `plugins`, `windows`, and `assets`.
- Use `*Service` for long-lived capabilities, `*Store` for state ownership, `*Controller` for
  decorator-based routes, `*Handlers` for function-based registration, and `*Manager` for resource
  coordination.
- Avoid generic root-level names such as `utils.ts`, `helpers.ts`, or `service.ts`. A generic name is
  acceptable only inside a narrowly scoped feature directory.
- Use `index.ts` only for the executable entry point or an intentional public barrel, such as the
  plugin API. Internal registrars and modules must have descriptive names.

## Dependency Direction

Feature modules may depend on `config`, `logging`, `network`, `runtime`, and `windows` where needed.
Cross-feature helpers must move to an explicitly named shared area instead of being imported from an
unrelated feature. IPC handler modules coordinate features but must not contain reusable domain logic.

When adding an IPC channel, place decorated controllers beside their feature and function-based
handlers under `ipc/handlers`. Register both through `ipc/registerIpcHandlers.ts` so disposal remains
centralized.

## Interprocess Calls

Fixed desktop APIs use the endpoint objects in `src/shared/ipc/channels.ts`. Do not repeat a channel
string in main, preload, or renderer code.

- Main handlers register with `IpcRegistrar` or `@IpcHandle(ipcChannels.*)`.
- Main-to-renderer events use `sendIpcEvent`.
- Preload is the only fixed IPC client and exposes the domain-oriented `DesktopBridge`.
- Renderer code calls `window.api.files`, `window.api.player`, `window.api.windows`, and the other
  domain groups. It must not import from `src/main` or access a generic IPC escape hatch.
- Runtime-generated plugin channels must be created by a named dynamic endpoint factory. Plugin
  JSON-RPC transport is exposed as `window.api.plugins.rpc(pluginName)`.

Electron's native invoke transport remains the request/response mechanism for fixed desktop APIs.
`@dsz-examaware/rpc` is reserved for dynamic plugin services, where service discovery and method
dispatch are genuinely runtime concerns.
