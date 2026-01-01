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

  constructor(element: HTMLElement) {
    this.element = element
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

  dispose() {
    runDisposers(this.disposers)
    this.element.remove()
  }
}
