import { effectScope, type EffectScope } from 'vue'
import type { Disposer, EauiWidget } from '@dsz-examaware/plugin-sdk'

export function runDisposers(disposers: Set<Disposer>) {
  Array.from(disposers).forEach((fn) => {
    try {
      fn()
    } catch (err) {
      console.warn('[eaui] dispose failed', err)
    }
  })
  disposers.clear()
}

export class EauiWidgetBase implements EauiWidget {
  readonly element: HTMLElement
  private disposers = new Set<Disposer>()
  protected scope: EffectScope

  constructor(element: HTMLElement) {
    this.element = element
    this.scope = effectScope()
  }

  setVisible(visible: boolean) {
    if (visible) {
      this.element.removeAttribute('hidden')
    } else {
      this.element.setAttribute('hidden', 'true')
    }
  }

  setEnabled(enabled: boolean) {
    if ('disabled' in (this.element as any)) {
      ;(this.element as any).disabled = !enabled
    }
    if (enabled) {
      this.element.removeAttribute('aria-disabled')
    } else {
      this.element.setAttribute('aria-disabled', 'true')
    }
  }

  protected track(disposer: Disposer) {
    this.disposers.add(disposer)
  }

  protected runInScope(fn: () => void) {
    this.scope.run(fn)
  }

  dispose() {
    this.scope.stop()
    runDisposers(this.disposers)
    this.element.remove()
  }
}
