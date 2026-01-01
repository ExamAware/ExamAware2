import type { Disposer, EauiSignal } from '@dsz-examaware/plugin-sdk'

export class EauiSignalImpl<TArgs extends any[]> implements EauiSignal<TArgs> {
  private listeners = new Set<(...args: TArgs) => void>()

  connect(fn: (...args: TArgs) => void): Disposer {
    this.listeners.add(fn)
    return () => this.disconnect(fn)
  }

  disconnect(fn: (...args: TArgs) => void) {
    this.listeners.delete(fn)
  }

  emit(...args: TArgs) {
    Array.from(this.listeners).forEach((fn) => {
      try {
        fn(...args)
      } catch (err) {
        console.warn('[eaui] signal handler failed', err)
      }
    })
  }
}
