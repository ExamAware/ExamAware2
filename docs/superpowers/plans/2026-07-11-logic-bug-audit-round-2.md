# Logic Bug Audit Round 2 Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Repair the second-pass registry and scheduler defects with edge-case regression tests, then merge the verified result into `develop`.

**Architecture:** Keep fixes at their owning boundaries. Registries use per-registration identity and cleanup bookkeeping; schedulers validate inputs, use collision-free identities, and treat platform timer limits explicitly.

**Tech Stack:** TypeScript, Vue 3 reactivity, Vitest fake timers, pnpm workspace

---

## Chunk 1: Registries

### Task 1: Toolbar disposer correctness

**Files:** `packages/player/src/core/toolbarRegistry.ts`, `packages/player/src/core/toolbarRegistry.test.ts`

- [ ] Write failing tests for normal disposal, idempotency, replacement, and stale disposal.
- [ ] Run the focused test and confirm the identity-comparison failure.
- [ ] Store a registration-owned normalized value and compare against that value during disposal.
- [ ] Run focused tests and commit.

### Task 2: Service watcher cleanup correctness

**Files:** `packages/desktop/src/shared/services/registry.ts`, `packages/desktop/src/shared/services/registry.test.ts`

- [ ] Write failing tests for multiple providers and all cleanup paths.
- [ ] Confirm only the last cleanup currently runs.
- [ ] Track cleanups per provider invocation and drain them before every re-invocation/disposal.
- [ ] Run focused tests and commit.

## Chunk 2: Schedulers

### Task 3: Player exam task identity

**Files:** `packages/player/src/utils/taskQueue.ts`, `packages/player/src/utils/taskQueue.test.ts`

- [ ] Write failing tests for duplicate names/times, independent timers, restart, and callback failure.
- [ ] Confirm map-key collision drops or corrupts a task.
- [ ] Add an internal monotonic identity suffix and preserve observable task metadata.
- [ ] Run focused tests and commit.

### Task 4: Renderer task scheduler resilience

**Files:** `packages/desktop/src/renderer/src/core/taskQueue.ts`, `packages/desktop/src/renderer/src/core/taskQueue.test.ts`

- [ ] Write failing tests for invalid timestamps, overdue and equal-time tasks, throwing callbacks, and delays beyond `2^31 - 1`.
- [ ] Confirm thrown callbacks stop the queue and oversized timers execute prematurely.
- [ ] Reject non-finite timestamps, schedule long waits in bounded chunks, and reschedule in `finally`.
- [ ] Run focused tests and commit.

## Chunk 3: Verification and Integration

- [ ] Continue the source audit and add further TDD tasks for any newly confirmed defects.
- [ ] Run all tests, type checks, lint, build, and `git diff --check`.
- [ ] Confirm only baseline user changes remain uncommitted.
- [ ] Merge `codex/fix-bugs` into `develop` without discarding user changes.
- [ ] Re-run the full verification suite on `develop`.
