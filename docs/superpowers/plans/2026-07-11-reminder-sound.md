# Reminder Sound Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Finish the existing three-event reminder-sound feature with deterministic playback, accessible preview controls, bundled audio assets, and comprehensive tests.

**Architecture:** Keep semantic reminder deduplication in `ExamPlayer`, but move all desktop media behavior into a renderer `reminderSound` controller. Both the player view and settings preview use the same controller and normalization contract; local generated MP3 files are resolved relative to the renderer base for packaged `file://` compatibility.

**Tech Stack:** TypeScript 5.9, Vue 3, Pinia, TDesign Vue Next, Vitest, Vue Test Utils, jsdom, ffmpeg/ffprobe, electron-vite

---

## Chunk 1: Playback Domain

### Task 0: Add renderer component test support

**Files:**

- Modify: `package.json`
- Modify: `pnpm-lock.yaml`
- Modify: `vitest.config.ts`
- Create: `packages/desktop/tests/renderer/views/componentTestSupport.test.ts`

- [ ] Add Vue Test Utils, jsdom, and `@vitejs/plugin-vue` as explicit root test dependencies.
- [ ] Add the Vue Vite plugin and the `@renderer` alias from electron-vite to Vitest while preserving
  all existing Node suites.
- [ ] Use per-file `@vitest-environment jsdom` directives for mounted tests so logic suites stay in Node.
- [ ] Add a minimal mounted smoke test under `packages/desktop/tests/renderer/views/` and verify alias,
  SFC, and DOM transforms work before feature tests depend on them.

### Task 1: Define sound settings and controller with TDD

**Files:**

- Create: `packages/desktop/src/renderer/src/services/reminderSound.ts`
- Create: `packages/desktop/tests/renderer/services/reminderSound.test.ts`

- [ ] Write failing normalization tests for strict booleans and volume values `0`, `1`, fractions, negative, overflow, strings, `NaN`, and infinities.
- [ ] Run `pnpm test -- packages/desktop/tests/renderer/services/reminderSound.test.ts` and verify the module/API is missing.
- [ ] Implement `ReminderSoundKind`, canonical relative sources, `normalizeReminderSoundSettings`, and `shouldPlayReminderSound` minimally.
- [ ] Run the focused test and verify GREEN.
- [ ] Add failing controller tests for lazy creation, URL resolution, cache reuse, volume, rewind, single-channel behavior, and per-kind/master disabling.
- [ ] Include a `file:///Applications/ExamAware.app/.../dist/renderer/index.html` base URI case and
  assert the exact sibling `file:///.../dist/renderer/audio/*.mp3` URL.
- [ ] Implement injected audio factory plus `play`, `preview`, `stop`, and `dispose`.
- [ ] Add deferred-promise RED tests for out-of-order completion and stop/dispose invalidation.
- [ ] Implement generation-based cancellation and discriminated `ReminderSoundResult`.
- [ ] Add RED tests for media error plus rejected play deduplication, stale error isolation, reporter phases, listener removal, and idempotent disposal.
- [ ] Add RED cases where `audio.play()` throws synchronously for both `play` and `preview`; each must
  resolve as `playback-error`, report phase `play` once, and never reject.
- [ ] Implement per-generation first-failure settlement and media listener cleanup.
- [ ] Run focused tests and commit controller/tests.

### Task 2: Generate and validate bundled audio

**Files:**

- Create: `packages/desktop/src/renderer/public/audio/exam-start.mp3`
- Create: `packages/desktop/src/renderer/public/audio/exam-alert.mp3`
- Create: `packages/desktop/src/renderer/public/audio/exam-end.mp3`
- Modify: `packages/desktop/src/renderer/public/audio/README.md`
- Create: `packages/desktop/tests/renderer/services/reminderSoundAssets.test.ts`

- [ ] Write failing asset tests for canonical filenames, ffprobe decoding, MP3 container, a nonzero MP3
  audio stream, duration `0.3..4` seconds, and generated provenance text.
- [ ] Verify RED because the three MP3 files are absent.
- [ ] Generate deterministic short cues with ffmpeg filters: ascending start, repeated alert, descending end; normalize loudness consistently.
- [ ] Document generation/provenance and repository-license status in the README.
- [ ] Run asset tests and commit.
- [ ] Support `VERIFY_BUILT_ASSETS=1` in the asset test to validate the same files under
  `packages/desktop/dist/renderer/audio` after production build.

## Chunk 2: Product Integration

### Task 3: Complete ExamPlayer reminder event semantics

**Files:**

- Modify: `packages/player/src/components/ExamPlayer.vue`
- Create: `packages/player/src/core/reminderEventGate.ts`
- Create: `packages/player/tests/core/reminderEventGate.test.ts`
- Create: `packages/player/tests/components/ExamPlayerReminderSound.test.ts`

- [ ] Extract the existing unfinished boolean gate into a pure occurrence-aware helper without changing overlay behavior.
- [ ] Write RED tests for duplicate handlers, reused names with different start/end times, three independent kinds, missing identities, and reset on configuration replacement.
- [ ] Implement occurrence keying and reset behavior.
- [ ] Wire `ExamPlayer` so `colorfulAlert` emits only when the helper accepts the overlay; preserve the existing payload shape.
- [ ] Add a mounted `ExamPlayer` test with controlled time/config proving handler, threshold-watch, and
  status-watch paths emit one semantic event per occurrence, distinct occurrences emit again, and
  configuration replacement resets the gate. Assert overlay acceptance and event emission stay coupled.
- [ ] Run player tests and commit.

### Task 4: Integrate runtime playback into PlayerView

**Files:**

- Modify: `packages/desktop/src/renderer/src/views/PlayerView.vue`
- Create: `packages/desktop/tests/renderer/views/PlayerViewSound.test.ts`

- [ ] Write failing integration assertions for shared controller construction, reactive normalized settings, semantic event forwarding, warning reporter, and unmount disposal.
- [ ] Replace the inline unfinished `Audio` map/functions with one `createReminderSoundController` instance.
- [ ] Resolve sources through `document.baseURI`, respect reactive master/per-kind/volume settings, and dispose on unmount.
- [ ] Run focused integration and controller tests and commit.

### Task 5: Finish accessible settings and preview interaction

**Files:**

- Modify: `packages/desktop/src/renderer/src/views/settings/PlayerSettings.vue`
- Create: `packages/desktop/tests/renderer/views/PlayerSettingsSound.test.ts`

- [ ] Write failing mounted tests for master visibility, volume normalization, all three persisted switches, focusable/labelled preview buttons, preview of a disabled kind, loading success/failure, stale completion, and unmount disposal.
- [ ] Assert tooltip content appears for hover and keyboard focus, the volume slider has an accessible
  label plus numeric value text, and only the currently-starting preview button is disabled/`aria-busy`.
- [ ] Add a shared preview controller, 0-100 percent volume slider/input, three stable icon buttons with tooltips, `aria-label`, and `aria-busy`.
- [ ] Keep existing TDesign settings rows, spacing, card structure, and responsive constraints.
- [ ] Run mounted tests and commit.

## Chunk 3: Verification

### Task 6: Validate packaged resources and UI

- [ ] Run `pnpm test`, workspace type checks, lint, and `pnpm build`.
- [ ] Run `VERIFY_BUILT_ASSETS=1 pnpm test -- packages/desktop/tests/renderer/services/reminderSoundAssets.test.ts`
  and assert no `/audio` root URL remains in source.
- [ ] Start the desktop dev server. Use the Playwright CLI prerequisite check and inspect the renderer settings route if browser-accessible; otherwise launch the Electron app and use the best available browser/desktop verification path.
- [ ] Capture desktop and narrow-viewport screenshots under `output/playwright/`, checking no overlap, stable control sizes, focus labels, toggles, volume, and preview loading.
- [ ] Request independent code review; fix all Critical/Important findings.
- [ ] Re-run full verification after review fixes.
- [ ] Commit final fixes on `develop`, preserving unrelated user changes.
