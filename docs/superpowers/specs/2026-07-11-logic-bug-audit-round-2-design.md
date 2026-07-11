# Logic Bug Audit Round 2 Design

## Goal

Continue the non-security logic audit after the first repair pass, add regression coverage for confirmed edge cases, preserve unfinished reminder-sound work, and merge the verified branch into `develop`.

## Scope

- Audit registries, lifecycle collectors, task schedulers, renderer state managers, parsers, and persistence helpers.
- Fix only defects with a reproducible behavioral test and a traced root cause.
- Keep public APIs compatible unless the existing behavior is intrinsically incorrect.
- Exclude reminder-sound implementation and Electron/plugin/HTTP/Cast security-boundary changes.

## Confirmed Repair Units

1. Toolbar registrations retain a registration token so an older disposer cannot remove a newer replacement, while the current disposer reliably unregisters its own cloned entry.
2. Service watchers retain one cleanup per provider invocation. Provider changes, revocation, watcher disposal, and callback failures clean every active resource exactly once.
3. Player exam tasks use collision-free task identities. Repeated names and timestamps must not overwrite tasks or orphan timers.
4. Renderer task scheduling validates finite timestamps, chunks delays beyond the JavaScript timer maximum, and continues scheduling after a task callback throws.

## Testing

Each production change starts with a focused failing Vitest case. Tests cover replacement races, idempotent disposers, multiple providers, cleanup exceptions, duplicate task coordinates, stopped/restarted queues, invalid times, overdue tasks, timer overflow boundaries, same-time ordering, and throwing callbacks. Focused tests run after each fix, followed by the complete test, type-check, lint, and production-build suite.

## Integration

Existing user changes are recorded before work and remain unstaged. After verification, committed fixes are merged into `develop`; user changes are preserved across the branch switch and merge.
