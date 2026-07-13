# Reminder Sound Design

## Goal

Finish the existing reminder-sound direction with three bundled event sounds, settings that match the current player settings UI, deterministic playback behavior, and thorough regression coverage.

## Existing Direction Preserved

- `ExamPlayer` emits `colorfulAlert` only when a start, ending-soon, or end overlay is actually shown for the first time.
- Desktop settings use `player.reminderSound.*` and expose a master switch plus per-event switches.
- The desktop renderer owns audio playback; the reusable player package only emits the semantic reminder event.
- Three local assets remain named `exam-start.mp3`, `exam-alert.mp3`, and `exam-end.mp3` under the renderer public directory.

## Interaction Design

The existing “提醒铃声” settings row remains in the “默认参数” card. Enabling it reveals a restrained subgroup consistent with the rest of the settings page:

- A volume row with a slider and numeric percentage.
- Three event rows: 开考铃声, 即将结束铃声, and 结束铃声.
- Each event row has an enable switch and an icon-only preview button with a tooltip.
- Each preview is a real focusable button with a per-sound `aria-label`; its tooltip opens on hover
  and focus. Starting playback sets `aria-busy`, and the button is disabled only for its current
  start operation. The volume slider has an explicit accessible label and numeric value text.
- Preview is available whenever the master sound switch is enabled, even when that individual event is disabled, so users can evaluate a sound before enabling it.
- Preview buttons have stable dimensions and a loading state while playback starts; only one preview or reminder sound plays at a time.

No custom file picker, per-event volume, looping, or external sound download is added. Those controls would add storage and validation complexity without supporting the current design direction.

## Audio Character

Bundle three short, copyright-free generated cues:

- Start: a clean ascending two-note chime, positive but not celebratory.
- Ending soon: a gentle repeated attention chime, distinct without sounding alarming.
- End: a concise descending resolution.

All assets use consistent loudness and short tails. Default playback volume is 70 percent.

## Architecture

Create a renderer-owned `reminderSound` module with:

- `ReminderSoundKind` and the canonical source map. Sources use renderer-base-relative `./audio/...`
  paths resolved with `new URL(source, document.baseURI)`, so HTTP development and packaged Electron
  `file://` loading both resolve inside the renderer output.
- Settings normalization for master enabled, per-kind enabled flags, and volume. Booleans accept only
  actual booleans; absent or invalid values use documented defaults. Finite numeric volumes clamp to
  `0..1`; strings, `NaN`, and infinities fall back to `0.7`.
- A controller around an injected audio factory. It lazily creates one audio element per kind, applies current volume before every play, pauses other kinds to prevent overlap, rewinds repeated playback, and exposes `play`, `preview`, `stop`, and `dispose`.
- `play(kind, settings)` respects master/per-kind settings. `preview(kind, volume)` intentionally bypasses the per-kind switch but still uses the selected volume.
- `play` and `preview` return `Promise<ReminderSoundResult>`. Results are `{ ok: true, kind }` or
  `{ ok: false, kind, reason }`, where reason is `disabled`, `superseded`, `playback-error`, or
  `disposed`. They never throw into the exam event path.
- The optional reporter receives `{ kind, phase: 'load' | 'play', error }`. The controller installs one
  media `error` listener per cached element and removes it on disposal. Autoplay rejection uses phase
  `play` and is logged by the view-level reporter.
- Failure settlement is deduplicated per generation. The first media `error` event or `play()` rejection
  settles that attempt as `playback-error` and reports once; the other signal is ignored. Error events
  belonging to stale generations neither settle nor report against the current request.
- Every request increments a monotonic generation. New requests, `stop`, and `dispose` invalidate older
  generations. Stale play-promise settlements pause and rewind their audio and cannot clear or replace
  the current loading state.

`PlayerView` owns one controller instance, derives normalized settings reactively, forwards `colorfulAlert` to `play`, and disposes the controller on unmount. `PlayerSettings` owns a separate preview controller and disposes it on unmount.

## Event Semantics

Sound follows the colorful reminder, not the raw exam event. The existing `showExamReminder` boolean is the single deduplication gate. A sound event is emitted only when the overlay was accepted, so duplicate raw handlers, threshold watches, and status watches cannot produce duplicate sound for the same exam and kind.

Deduplication is per loaded schedule and exam occurrence. Its key contains kind, stable ID/name, start,
and end timestamps. Reused names at different times remain distinct. Replacing the exam configuration
clears the deduplication set so reopening a schedule in the same component can notify again.

## Failure Handling

- Missing/corrupt asset: report once per failed play attempt, reset the preview loading state, and keep the player functional.
- Browser autoplay rejection: report phase `play`, log a warning, and continue silently.
- Rapid preview clicks: generation cancellation guarantees only the newest request controls state,
  including when deferred `play()` promises settle out of order.
- Component unmount: pause and rewind every cached audio element and release event handlers.
- Invalid persisted volume follows the explicit numeric rules above.

## Testing

Unit tests cover:

- Source mapping and settings normalization, including `0`, `1`, fractional, negative, overflow, strings, `NaN`, and infinities.
- Master and per-kind enable decisions.
- Lazy audio creation, caching, volume application, rewind, single-channel behavior, and preview bypass semantics.
- Deferred play promises resolved out of order, rejected play promises, synchronous throws, media
  `error` events, stale loading-state protection, stop/dispose invalidation, listener removal, and
  idempotent disposal. A dedicated test fires media `error` and play rejection for one generation and
  asserts one settlement/report, then fires a stale error during a newer request and asserts no effect.
- Mounted component behavior where practical: settings changes react without remount, loading clears
  on success/failure/stale completion, preview bypasses only the per-kind switch, and unmount disposes
  controllers. Duplicate player event paths produce one semantic event per occurrence. Source checks
  may supplement but do not replace observable tests.
- Asset validation with `ffprobe`: MP3 codec/container, duration from 0.3 to 4 seconds, a nonzero audio
  stream, and packaged inclusion under `dist/renderer/audio`. The README records local generation and
  repository-license provenance.

Run the complete unit suite, workspace type checks, lint, and production build. Start the desktop development server and use Playwright against the renderer settings route when technically available; otherwise verify the built renderer route in a browser-compatible preview and report any Electron-only limitation explicitly.

## Compatibility

- Existing persisted boolean keys retain their meaning and defaults.
- New `player.reminderSound.volume` defaults to `0.7`.
- Existing unfinished source changes are refined in place rather than discarded.
- No Electron sandbox, preload, IPC security, plugin execution, HTTP, or Cast security behavior changes.
