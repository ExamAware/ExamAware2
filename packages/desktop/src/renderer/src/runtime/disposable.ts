export type Disposer = () => void

/**
 * A tiny collector to manage multiple disposers and dispose them safely (idempotent).
 */
export class DisposerGroup {
  private disposers: Disposer[] = []
  private disposed = false

  add(disposer?: Disposer | void | null) {
    if (!disposer) return
    if (this.disposed) {
      // If already disposed, run immediately to keep semantics simple
      try {
        disposer()
      } catch {}
      return
    }
    this.disposers.push(() => {
      try {
        disposer()
      } catch {}
    })
  }

  disposeAll() {
    if (this.disposed) return
    this.disposed = true
    for (let i = this.disposers.length - 1; i >= 0; i--) {
      const d = this.disposers[i]
      try {
        d()
      } catch {}
    }
    this.disposers = []
  }
}
