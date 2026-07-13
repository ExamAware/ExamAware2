# Logic Bug Fixes Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Repair the confirmed non-security logic, lifecycle, persistence, RPC, NTP, and lint defects while preserving the unfinished reminder-sound work.

**Architecture:** Add a root Vitest harness, then fix each defect at its owning boundary with focused regression tests. Keep canonical player ordering in the player core, lifecycle cleanup in loaders/providers, persistence serialization in the config store, and input normalization in a pure time-config helper.

**Tech Stack:** TypeScript 5.9, Vue 3, Electron, Vitest, ESLint 9 flat config, pnpm workspace

---

## Chunk 1: Test Foundation and Player Correctness

### Execution preflight: Record baselines

- [ ] **Step 1: Record implementation and user-change baselines before Task 1**

```bash
git rev-parse HEAD > /tmp/examaware-implementation-base
git status --short > /tmp/examaware-initial-status
```

The initial status must record the pre-existing user paths: desktop generated declarations, `PlayerView.vue`, `PlayerSettings.vue`, `ExamPlayer.vue`, and `packages/desktop/src/renderer/public/`. It must not contain any `tsconfig.tsbuildinfo` path.

### Task 1: Add the test harness

**Files:**

- Modify: `package.json`
- Modify: `pnpm-lock.yaml`
- Create: `vitest.config.ts`

- [ ] **Step 1: Add Vitest without changing production dependencies**

Run: `pnpm add -Dw vitest`

Expected: `vitest` appears in root `devDependencies`; the lockfile changes only for test dependencies.

- [ ] **Step 2: Add deterministic root test scripts**

Add to `package.json`:

```json
"test": "vitest run",
"test:watch": "vitest"
```

- [ ] **Step 3: Add the root configuration**

Create `vitest.config.ts` exactly as follows:

```ts
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'node',
    clearMocks: true,
    restoreMocks: true,
    include: ['packages/**/*.test.ts'],
    exclude: [
      '**/node_modules/**',
      '**/dist/**',
      '**/out/**',
      'templates/**',
      'packages/plugin-template/template/**',
      'packages/desktop/plugins/examaware-plugin-doom/wasm-doom/**'
    ]
  }
});
```

- [ ] **Step 4: Verify the empty harness**

Run: `pnpm test -- --passWithNoTests`

Expected: exit 0 with no tests found.

- [ ] **Step 5: Commit the harness**

```bash
git add package.json pnpm-lock.yaml vitest.config.ts
git commit -m "test: add workspace vitest harness"
```

### Task 2: Reject invalid exam time data

**Files:**

- Create: `packages/core/src/parser.test.ts`
- Modify: `packages/core/src/parser.ts`
- Create: `packages/player/src/utils/dataProcessor.test.ts`
- Modify: `packages/player/src/utils/dataProcessor.ts`

- [ ] **Step 1: Write failing core validation tests**

Use a `makeConfig(examOverrides)` helper and exact assertions equivalent to:

```ts
expect(validateExamConfig(makeConfig({ start: 'bad' }))).toBe(false);
expect(validateExamConfig(makeConfig({ end: 'bad' }))).toBe(false);
expect(validateExamConfig(makeConfig({ start: END, end: START }))).toBe(false);
expect(validateExamConfig(makeConfig({ start: START, end: START }))).toBe(false);
expect(validateExamConfig(makeConfig({ alertTime: -1 }))).toBe(false);
expect(validateExamConfig(makeConfig({ alertTime: Number.NaN }))).toBe(false);
expect(validateExamConfig(makeConfig({ alertTime: Number.POSITIVE_INFINITY }))).toBe(false);
expect(validateExamConfig(makeConfig({ alertTime: 0 }))).toBe(true);
expect(validateExamConfig({ examName: '', message: '', examInfos: [] })).toBe(true);
expect(hasExamTimeOverlap(configWithAdjacentExams)).toBe(false);
expect(hasExamTimeOverlap(makeConfig({ start: 'bad' }))).toBe(false);
expect(hasExamTimeOverlap(configWithOverlappingExams)).toBe(true);
```

- [ ] **Step 2: Verify the core tests fail for validation gaps**

Run: `pnpm test -- packages/core/src/parser.test.ts`

Expected: invalid dates/ranges and invalid alert values are currently accepted.

- [ ] **Step 3: Implement shared temporal validation**

Add a private `getValidTimeRange(info)` returning `{ startMs, endMs } | null`. `validateExamConfig` requires a non-null range and `Number.isFinite(alertTime) && alertTime >= 0`. `hasExamTimeOverlap` returns `false` immediately when any range is invalid, otherwise sorts the numeric ranges and compares `current.endMs > next.startMs`. Preserve empty-list and optional display-string behavior.

- [ ] **Step 4: Verify core validation passes**

Run: `pnpm test -- packages/core/src/parser.test.ts`

Expected: all parser tests pass.

- [ ] **Step 5: Write failing detailed-validation tests**

Assert error arrays contain the existing time-format/time-order messages for invalid, equal, and reversed timestamps; contain an alert error for `-1`, `NaN`, and infinity; contain no alert error for `0`; still reject an empty list; and still emit only a warning for a finite value over 300.

- [ ] **Step 6: Verify detailed validation fails for the expected gaps**

Run: `pnpm test -- packages/player/src/utils/dataProcessor.test.ts`

Expected: invalid `Date` values currently escape the `try/catch` and non-finite alerts are missed.

- [ ] **Step 7: Implement matching temporal diagnostics**

Replace the ineffective `try/catch` with explicit `Number.isFinite(start.getTime())` and `Number.isFinite(end.getTime())` checks. Add an error when `!Number.isFinite(exam.alertTime) || exam.alertTime < 0`; keep the existing over-300 warning for otherwise valid values. Do not merge all validation policies or change unrelated messages.

- [ ] **Step 8: Verify both validation suites**

Run: `pnpm test -- packages/core/src/parser.test.ts packages/player/src/utils/dataProcessor.test.ts`

Expected: both files pass.

- [ ] **Step 9: Commit validation fixes**

```bash
git add packages/core/src/parser.ts packages/core/src/parser.test.ts packages/player/src/utils/dataProcessor.ts packages/player/src/utils/dataProcessor.test.ts
git commit -m "fix: reject invalid exam time data"
```

### Task 3: Keep player indices and time listeners consistent

**Files:**

- Create: `packages/player/src/core/ExamPlayerCore.test.ts`
- Modify: `packages/player/src/core/ExamPlayerCore.ts`

- [ ] **Step 1: Write failing ordering tests**

Construct an unsorted two-exam configuration at 09:30 inside `early` (09:00–10:00), with `late` (11:00–12:00) listed first. Assert:

```ts
expect(core.sortedExamInfos.value.map(({ name }) => name)).toEqual(['early', 'late']);
expect(core.state.value.currentExamIndex).toBe(0);
expect(core.currentExam.value?.name).toBe('early');
expect(core.examStatus.value.status).toBe('inProgress');
expect(core.switchToExam(1)).toBe(true);
expect(core.currentExam.value?.name).toBe('late');
expect(onExamSwitch).toHaveBeenLastCalledWith(earlyExam, lateExam);
```

Use a separate fresh core instance for the automatic transition. Clear its event spy, set `currentTime.value` to 11:30, call `updateCurrentExam()`, and assert index 1, current exam `late`, status `inProgress`, and exactly one automatic switch event from `earlyExam` to `lateExam`.

- [ ] **Step 2: Verify ordering tests fail**

Run: `pnpm test -- packages/player/src/core/ExamPlayerCore.test.ts`

Expected: `currentExam` reads `late` at sorted index 0.

- [ ] **Step 3: Implement one canonical sorted sequence**

Add `readonly sortedExamInfos = ref<ExamInfo[]>([])`. In the constructor initialize it from a non-null initial config; in `updateConfig` replace it with `configSvc.getSortedConfig(newConfig).examInfos`. Make `currentExam` index `sortedExamInfos.value`, make `updateCurrentExam` and `switchToExam` read old/new exams from it, and keep `examConfig` for serialization. Do not call `getSortedConfig` from a computed getter.

- [ ] **Step 4: Verify ordering tests pass**

Run: `pnpm test -- packages/player/src/core/ExamPlayerCore.test.ts`

Expected: ordering and event assertions pass.

- [ ] **Step 5: Add failing listener lifecycle tests**

Use `const callbacks = new Set<() => void>()` and spies whose `onTimeChange` adds and `offTimeChange` deletes. With fake timers, assert callback-set sizes `0 → 1 → 1 → 0 → 1` across `start`, repeated `start`, `stop`, and restart; assert the callback passed to `offTimeChange` is strictly equal to the one passed to `onTimeChange`.

- [ ] **Step 6: Verify listener tests fail**

Run: `pnpm test -- packages/player/src/core/ExamPlayerCore.test.ts`

Expected: stop cannot remove the anonymous callback currently registered by start.

- [ ] **Step 7: Store and reuse the time-change callback**

Add `private readonly handleTimeChange = () => { ... }` and `private timeChangeSubscribed = false`. Register it only when false, set true after registration, and in `stop()` pass `handleTimeChange` to `offTimeChange` then reset the flag. The callback updates `currentTime` and the queue time provider exactly as today.

- [ ] **Step 8: Verify player-core tests pass**

Run: `pnpm test -- packages/player/src/core/ExamPlayerCore.test.ts`

Expected: all player-core tests pass with fake timers restored.

- [ ] **Step 9: Commit player-core fixes**

```bash
git add packages/player/src/core/ExamPlayerCore.ts packages/player/src/core/ExamPlayerCore.test.ts
git commit -m "fix: keep player state and time listeners consistent"
```

### Task 4: Correct desktop alert units without touching sound behavior

**Files:**

- Create: `packages/desktop/src/renderer/src/utils/playerAlerts.ts`
- Create: `packages/desktop/src/renderer/src/utils/playerAlerts.test.ts`
- Modify: `packages/desktop/src/renderer/src/views/PlayerView.vue`

- [ ] **Step 1: Write a failing source regression test against the existing behavior**

Read `PlayerView.vue` with `fs.readFileSync` and assert the source does not match `/alertTime\s*\/\s*60000/`, does not contain the positive-value “开始” ternary, and calls `formatExamAlertMessage(exam, alertTime)`. This directly exercises the confirmed inline defect before any helper exists.

- [ ] **Step 2: Verify the helper is missing**

Run: `pnpm test -- packages/desktop/src/renderer/src/utils/playerAlerts.test.ts`

Expected: fail because the current source divides the minutes value by `60000`, contains the positive-value “开始” branch, and does not call the formatter.

- [ ] **Step 3: Implement the pure formatter and use it in PlayerView**

Add behavioral assertions that `formatExamAlertMessage({ name: 'Math' }, 15)` returns `Math 将在 15 分钟后结束` and the `15.5` case preserves `15.5`. Implement exactly:

```ts
export function formatExamAlertMessage(exam: { name: string }, alertMinutes: number) {
  return `${exam.name} 将在 ${alertMinutes} 分钟后结束`;
}
```

Import it in the desktop `PlayerView.vue` and use `content: formatExamAlertMessage(exam, alertTime)`. The Step 1 source assertions now prove the tested helper is the path used by the view. Do not edit reminder-sound sources, settings, audio maps, event wiring, or assets.

- [ ] **Step 4: Verify the focused test**

Run: `pnpm test -- packages/desktop/src/renderer/src/utils/playerAlerts.test.ts`

Expected: pass.

- [ ] **Step 5: Preserve the pre-existing sound hunks while recording the alert fix**

Stage the new helper/test files normally, then interactively stage only the two `PlayerView.vue` hunks that add the formatter import and replace the alert body. Answer `n` to every reminder-sound hunk and `y` only to those two alert hunks:

```bash
git add packages/desktop/src/renderer/src/utils/playerAlerts.ts packages/desktop/src/renderer/src/utils/playerAlerts.test.ts
git add -p packages/desktop/src/renderer/src/views/PlayerView.vue
git diff --cached -- packages/desktop/src/renderer/src/views/PlayerView.vue
git diff -- packages/desktop/src/renderer/src/views/PlayerView.vue
```

The cached diff must contain only the formatter import/call, while the uncached diff must still contain the user’s reminder-sound work. Then run the focused test from the staged tree state and commit:

```bash
pnpm test -- packages/desktop/src/renderer/src/utils/playerAlerts.test.ts
git commit -m "fix: display exam alert minutes correctly"
```

## Chunk 2: Lifecycle, Persistence, RPC, and Time Configuration

### Task 5: Clean up superseded IPC config loads

**Files:**

- Create: `packages/desktop/src/renderer/src/core/configLoader.test.ts`
- Modify: `packages/desktop/src/renderer/src/core/configLoader.ts`

- [ ] **Step 1: Write fake-IPC lifecycle tests**

Use a fake IPC emitter with inspectable `on`/`off` listener sets and deferred `invoke()` promises. Assert exactly:

- successful event resolution returns the parsed config and leaves zero `load-config` listeners;
- parse failure rejects, sets the parse error, and leaves zero listeners;
- after fake timers advance past the timeout, the promise rejects once and leaves zero listeners;
- starting `second = loadFromIPC()` rejects `first` with `ConfigLoadCancelledError`, removes the first listener before adding the second, and leaves exactly one listener;
- resolving the first deferred `invoke()` after replacement neither settles `second` nor mutates `getState()`;
- delivering the second event resolves `second`, leaves zero listeners, and its config remains current after all late first-request continuations run.

Assert `vi.getTimerCount() === 0` after success, parse failure, timeout, and final replacement success. Immediately after replacement cancellation, assert the count is exactly `1`, proving the cancelled first timer is gone while the active second request retains its timer. Use `afterEach(() => { vi.useRealTimers(); vi.restoreAllMocks() })`.

- [ ] **Step 2: Verify cleanup and cancellation tests fail**

Run: `pnpm test -- packages/desktop/src/renderer/src/core/configLoader.test.ts`

Expected: listeners remain installed and replaced promises remain pending.

- [ ] **Step 3: Implement request-scoped cleanup**

Export `ConfigLoadCancelledError`, track the active request token and reject function, clean the old request before installing a new listener, and guard all event/invoke continuations by identity.

- [ ] **Step 4: Verify loader tests pass**

Run: `pnpm test -- packages/desktop/src/renderer/src/core/configLoader.test.ts`

Expected: all terminal paths leave zero listeners and replacement behavior is deterministic.

- [ ] **Step 5: Commit loader cleanup**

```bash
git add packages/desktop/src/renderer/src/core/configLoader.ts packages/desktop/src/renderer/src/core/configLoader.test.ts
git commit -m "fix: clean up config loader requests"
```

### Task 6: Serialize config writes and flush before quit

**Files:**

- Create: `packages/desktop/src/main/configStore.test.ts`
- Modify: `packages/desktop/src/main/configStore.ts`
- Create: `packages/desktop/src/main/shutdownCoordinator.ts`
- Create: `packages/desktop/src/main/shutdownCoordinator.test.ts`
- Modify: `packages/desktop/src/main/index.ts`

- [ ] **Step 1: Write failing persistence tests**

Mock Electron app/window APIs and `fs.promises.writeFile`. For mutation during an active write: set value `1`, advance the debounce timer, hold write call 1 open, set value `2`, release call 1, then assert call 2 writes JSON containing `2` and `flushConfig()` resolves after exactly two writes.

For failure: make write call 1 reject with `diskError`; assert `flushConfig()` rejects with that same error after exactly one attempt, advance all timers and assert the call count remains 1, replace the mock with a successful implementation, call `flushConfig()` again, and assert exactly one new attempt writes the latest cache and resolves. Restore real timers after each test.

- [ ] **Step 2: Verify persistence tests fail**

Run: `pnpm test -- packages/desktop/src/main/configStore.test.ts`

Expected: a mutation while `writePromise` is active can be dropped and no public flush exists.

- [ ] **Step 3: Implement scheduled/active/dirty write state**

Export `flushConfig(): Promise<void>`. Snapshot cache for each write, preserve dirty state on failure without scheduling a retry, immediately drain a newer generation only after success, and make `setConfig`/`patchConfig` mark dirty only when a safe mutation is accepted.

- [ ] **Step 4: Verify persistence tests pass**

Run: `pnpm test -- packages/desktop/src/main/configStore.test.ts`

Expected: latest state is persisted, failure does not loop, and retry remains possible.

- [ ] **Step 5: Write failing shutdown-coordinator tests**

First add a source regression assertion against `index.ts`: the existing `before-quit` handler does not call `preventDefault` or `flushConfig`. Then specify behavioral coordinator tests with a fake event/app: the first quit calls `preventDefault` once and invokes flush once; a duplicate quit while flush is pending is also prevented but does not start another flush; both resolved and rejected flushes cause exactly one `app.quit()`; the re-entered event after the guard is set is not prevented and does not flush again.

- [ ] **Step 6: Verify shutdown tests fail because the coordinator is absent**

Run: `pnpm test -- packages/desktop/src/main/shutdownCoordinator.test.ts`

Expected: the source regression fails on the current non-gating handler before the coordinator is added.

- [ ] **Step 7: Implement and integrate guarded shutdown**

Create a focused coordinator that owns only flush gating/re-entry. Call it from the existing `before-quit` handler while preserving all current service cleanup calls and security/window behavior.

- [ ] **Step 8: Verify persistence and shutdown tests**

Run: `pnpm test -- packages/desktop/src/main/configStore.test.ts packages/desktop/src/main/shutdownCoordinator.test.ts`

Expected: both suites pass.

- [ ] **Step 9: Commit persistence and shutdown fixes**

```bash
git add packages/desktop/src/main/configStore.ts packages/desktop/src/main/configStore.test.ts packages/desktop/src/main/shutdownCoordinator.ts packages/desktop/src/main/shutdownCoordinator.test.ts packages/desktop/src/main/index.ts
git commit -m "fix: flush configuration reliably on shutdown"
```

### Task 7: Clean pending RPC state when send throws

**Files:**

- Create: `packages/rpc/src/index.test.ts`
- Modify: `packages/rpc/src/index.ts`

- [ ] **Step 1: Write a failing synchronous-send test**

Use a transport whose `send()` throws `const thrownValue = { code: 'send-failed' }`. Assert `await expect(request).rejects.toBe(thrownValue)`, disposal does not settle it again, and `vi.getTimerCount()` is zero after immediate rejection.

- [ ] **Step 2: Verify the RPC test fails on timer/pending cleanup**

Run: `pnpm test -- packages/rpc/src/index.test.ts`

Expected: request rejects but its timeout/pending entry survives until timeout or dispose.

- [ ] **Step 3: Implement synchronous-send cleanup**

Change the stored pending-entry reject callback type from `(error: Error) => void` to `(reason?: unknown) => void`. Wrap `transport.send(message)` inside the promise executor. On throw, clear the timeout, delete the ID from `pending`, reject with the exact original thrown value without normalization, and return.

- [ ] **Step 4: Verify RPC tests pass**

Run: `pnpm test -- packages/rpc/src/index.test.ts && pnpm --filter @dsz-examaware/rpc type-check`

Expected: immediate identity-preserving rejection, no remaining timer, and a passing RPC type check.

- [ ] **Step 5: Commit RPC cleanup**

```bash
git add packages/rpc/src/index.ts packages/rpc/src/index.test.ts
git commit -m "fix: clean up failed rpc sends"
```

### Task 8: Normalize NTP timer configuration

**Files:**

- Create: `packages/desktop/src/main/ntpService/timeConfig.ts`
- Create: `packages/desktop/src/main/ntpService/timeConfig.test.ts`
- Modify: `packages/desktop/src/main/ntpService/timeService.ts`

- [ ] **Step 1: Write failing pure normalization tests**

Assert valid positive intervals are preserved, while zero/negative/`NaN`/infinities/numeric strings use `60` for `syncIntervalMinutes`. For `manualOffsetSeconds` and `autoIncrementSeconds`, assert every finite number including zero and negatives is preserved, while `NaN`, infinities, and numeric strings use `0`. Unrelated fields and valid `lastIncrementDate` remain intact.

Also test `mergeTimeSyncConfig(current, partial)`: omitted partial fields retain current normalized values; a present invalid interval falls back to `60`; a present invalid offset falls back to `0`. In the same red phase, add source-integration assertions that unified-config load, legacy-file load, `applyTimeConfig`, and `saveTimeSyncConfig` call the required normalization/merge helper before offsets or timers are used.

- [ ] **Step 2: Verify the normalizer is missing**

Run: `pnpm test -- packages/desktop/src/main/ntpService/timeConfig.test.ts`

Expected: fail because `normalizeTimeSyncConfig` does not exist and the four entry points do not call the normalization helpers.

- [ ] **Step 3: Implement the pure normalizer**

Keep the helper Electron-free. Export the config interface/defaults, `normalizeTimeSyncConfig(candidate)`, and `mergeTimeSyncConfig(current, partial)`. The merge helper forms `{ ...current, ...partial }` before normalizing and never mutates either input.

- [ ] **Step 4: Integrate all configuration entry points**

Use `normalizeTimeSyncConfig` after merging defaults with unified-config or legacy-file data. Use `mergeTimeSyncConfig(timeSyncConfig, partial)` in `applyTimeConfig` and `saveTimeSyncConfig`, satisfying the already-failing source-integration assertions. Preserve existing persistence and event behavior.

- [ ] **Step 5: Verify NTP tests and type checks**

Run: `pnpm test -- packages/desktop/src/main/ntpService/timeConfig.test.ts && pnpm --filter @dsz-examaware/desktop type-check`

Expected: normalization tests and desktop type check pass.

- [ ] **Step 6: Commit NTP normalization**

```bash
git add packages/desktop/src/main/ntpService/timeConfig.ts packages/desktop/src/main/ntpService/timeConfig.test.ts packages/desktop/src/main/ntpService/timeService.ts
git commit -m "fix: normalize time sync configuration"
```

## Chunk 3: Tooling and Final Verification

### Task 9: Migrate linting to ESLint 9 flat config

**Files:**

- Delete: `.eslintrc.cjs`
- Delete: `.eslintignore`
- Delete: `packages/desktop/.eslintrc.cjs`
- Create: `eslint.config.mjs`
- Modify: `packages/desktop/package.json`

- [ ] **Step 1: Capture the current failing lint command**

Run: `pnpm --filter @dsz-examaware/core lint`

Expected: exit 2 because ESLint 9 cannot find `eslint.config.*`.

- [ ] **Step 2: Build a flat config from installed config exports**

Use this exact flat-config composition; do not use guarded config objects outside `defineConfigWithVueTs`:

```js
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
      /* exact Step 3 list */
    ]
  },
  { name: 'examaware/electron-base', ...electronConfig },
  ...pluginVue.configs['flat/recommended'],
  vueTsConfigs.recommended,
  prettierConfig,
  {
    name: 'examaware/overrides',
    rules: {
      'vue/require-default-prop': 'off',
      'vue/multi-word-component-names': 'off'
    }
  }
);
```

Do not also compose `@electron-toolkit/eslint-config-ts`; `vueTsConfigs.recommended` owns TypeScript parsing/rules for both `.ts` and `.vue`, avoiding duplicate/conflicting parser layers.

- [ ] **Step 3: Add explicit ignores**

Use this exact ignore list:

```js
[
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
];
```

Do not ignore authored declarations such as shims, preload typings, or environment typings.

- [ ] **Step 4: Make desktop lint check-only**

Remove `--fix` from `packages/desktop/package.json`. Keep root `format` as the explicit write command.

- [ ] **Step 5: Run lint and address only real in-scope errors**

Run: `pnpm lint`

Expected: exit 0. The migration itself must not change application source. If the exact legacy-equivalent configuration reveals existing source violations, record their paths and resolve them in a separately reviewed follow-up task rather than silently including them in this tooling commit.

- [ ] **Step 6: Commit lint migration**

```bash
git add .eslintrc.cjs .eslintignore packages/desktop/.eslintrc.cjs eslint.config.mjs packages/desktop/package.json
git commit -m "fix: migrate linting to eslint flat config"
```

### Task 10: Full verification and scope audit

**Files:**

- Review only: all files changed by Tasks 1–9

- [ ] **Step 1: Run all tests**

Run: `pnpm test`

Expected: all tests pass with zero unhandled errors.

- [ ] **Step 2: Run workspace type checks**

Run: `pnpm -r --if-present type-check`

Expected: exit 0.

- [ ] **Step 3: Run lint**

Run: `pnpm lint`

Expected: exit 0 without modifying source files.

- [ ] **Step 4: Run the production build**

Run: `pnpm build`

Expected: exit 0; existing bundle-size/dynamic-import warnings may remain.

- [ ] **Step 5: Audit committed, staged, and working-tree scope**

Run:

```bash
BASE=$(cat /tmp/examaware-implementation-base)
git diff --name-status "$BASE"..HEAD
git diff --cached --name-status
git status --short
git diff --check
diff -u /tmp/examaware-initial-status <(git status --short | rg 'auto-imports.d.ts|components.d.ts|PlayerView.vue|PlayerSettings.vue|ExamPlayer.vue|renderer/public')
```

Expected: committed changes match Tasks 1–9, the cached diff is empty, and the original user-owned sound paths remain modified/untracked as recorded. Reminder-sound assets/logic and Electron security/auth behavior have no task-generated changes. If verification creates a `tsconfig.tsbuildinfo` diff that was absent from `/tmp/examaware-initial-status`, reverse only that generated file’s fresh diff; never restore a path present in the initial baseline.
