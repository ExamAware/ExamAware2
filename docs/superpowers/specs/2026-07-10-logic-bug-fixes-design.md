# Logic Bug Fixes Design

## Goal

Repair the confirmed correctness, lifecycle, persistence, RPC, time-configuration, and lint-tooling defects without completing the unfinished reminder-sound feature or changing Electron security boundaries.

## Scope

### Included

1. Keep the player’s current exam, sorted exam list, manual switching, status, and emitted events on the same sorted data source.
2. Reject invalid exam timestamps and time ranges before they reach the player or task queue.
3. Register and unregister the exact same time-provider callback, without accumulating callbacks across repeated starts.
4. Treat `alertTime` consistently as minutes and display the correct “minutes before exam end” message.
5. Remove IPC configuration listeners and timers when a load succeeds, fails, times out, or is superseded.
6. Make configuration persistence retain changes made while a write is in flight and provide an explicit flush operation for orderly application shutdown.
7. Remove an RPC request from the pending map immediately if transport sending throws synchronously.
8. Validate NTP interval and numeric configuration before scheduling timers, preventing zero-delay or invalid intervals.
9. Migrate the repository’s ESLint configuration to an ESLint 9-compatible flat configuration and make lint commands check-only rather than silently rewriting source.

### Explicitly excluded

- Do not add, synthesize, download, or validate reminder-sound audio assets.
- Do not redesign or finish the reminder-sound feature. Preserve the user’s current sound-related source changes.
- Do not change `nodeIntegration`, sandboxing, context isolation, preload exposure, arbitrary-path file APIs, window security preferences, or plugin execution boundaries.
- Do not add authentication or authorization changes to HTTP, WebSocket, Cast, or plugin routes in this pass.
- Do not perform unrelated refactors or formatting sweeps.

## Architecture and Changes

### 1. Exam configuration validation

`packages/core/src/parser.ts` remains the single basic validation boundary. Validation will parse every start and end timestamp, require both timestamps to be finite, require start to precede end, and require `alertTime` to be finite and non-negative. Overlap detection will use the shared parser rather than a different date-parsing path.

The player’s detailed validation helper will follow the same rules so user-facing diagnostics and the core boolean validator cannot disagree.

### 2. Player state consistency

`ExamPlayerCore` will expose and consume one sorted exam sequence for index-based operations. `currentExam`, `updateCurrentExam`, `switchToExam`, status computations, and switch events will all resolve indices against that sequence. The original configuration object may remain available for serialization, but it must not be indexed with a sorted index.

The time-provider change callback will be stored as a class member. `start()` will register it once, and `stop()` will unregister that same function. Repeated `start()` calls remain idempotent.

`PlayerView.vue` will interpret the event’s `alertTime` argument as minutes and display that the exam will end after the specified number of minutes. Reminder-sound event handling and settings remain untouched.

### 3. Configuration loading lifecycle

`ConfigLoader.loadFromIPC()` will use one cleanup function that clears the timeout and unregisters the `load-config` listener. Every terminal path calls cleanup. Starting a new IPC load will cancel the previous pending load so stale listeners cannot later update state.

### 4. Configuration persistence

The configuration store will distinguish scheduled, active, and dirty writes. A mutation during an active write marks the store dirty; completion schedules or performs another write using the latest cache. `flushConfig()` will cancel the debounce timer and continue until no dirty changes remain.

Application shutdown will await or otherwise gate final termination on this explicit flush without changing window or renderer security settings. Write failures remain logged and do not falsely report persistence success.

### 5. RPC cleanup

`JsonRpcClient.request()` will wrap `transport.send()` so a synchronous send failure clears the request timeout, removes the pending entry, and rejects with the original transport error. Normal response, timeout, and disposal behavior remains unchanged.

### 6. NTP scheduling validation

Time configuration normalization will require a finite positive synchronization interval and finite numeric offsets. Invalid values fall back to safe defaults before `setInterval()` or offset calculations. This is configuration correctness work only; network protocol and Electron security behavior are unchanged.

### 7. ESLint 9 migration

Replace the obsolete `.eslintrc.cjs`/`.eslintignore` setup with a flat `eslint.config` using the installed Vue, TypeScript, Electron Toolkit, and Prettier-compatible configurations. Package lint scripts will be non-mutating. Generated output and dependency directories remain ignored.

## Error Handling

- Invalid exam dates produce validation failure instead of an incorrect completed status.
- IPC load timeouts reject once and leave no active listener or timer.
- Configuration write failures are logged; dirty state remains eligible for a later flush rather than being silently discarded.
- RPC send failures preserve the original error and leave no pending request.
- Invalid time-sync values use documented safe defaults and never create a zero-delay interval.

## Testing Strategy

Add a small Vitest-based test setup because the repository currently has no automated tests.

- Core tests cover invalid timestamps, reversed ranges, negative or non-finite alert values, and overlap behavior.
- Player-core tests cover unsorted configurations, manual switching, emitted switch targets, and time-listener registration/unregistration.
- Config-loader tests use a fake IPC emitter to verify listener cleanup on success, parse failure, timeout, and replacement.
- Config-store tests mock Electron and filesystem boundaries to reproduce mutation-during-write and explicit-flush behavior.
- RPC tests use a throwing transport and verify immediate rejection and cleanup through observable behavior.
- Time-service tests cover zero, negative, `NaN`, and valid synchronization intervals through extracted normalization logic.
- Tooling verification runs workspace type checks, lint, relevant tests, and the production build.

Every production fix follows a red-green cycle: add the smallest regression test, confirm it fails for the expected reason, implement one fix, then rerun the focused and broader suites.

## Compatibility and Change Control

- Existing configuration shapes and public APIs remain compatible, except that invalid configurations are now rejected.
- No reminder-sound file or sound behavior is added.
- Existing uncommitted user changes are preserved; overlapping edits are limited to the alert text/unit bug and are reviewed line by line.
- Security findings excluded above will be reported separately and left unchanged.
