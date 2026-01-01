import type { EauiLayout, EauiWindow, EauiWindowOptions } from '@dsz-examaware/plugin-sdk'
import { EauiWidgetBase } from './widgetBase'
import { ensureOverlay, releaseOverlayIfEmpty } from './overlay'

export class EauiWindowImpl extends EauiWidgetBase implements EauiWindow {
  private layout?: EauiLayout
  private body: HTMLDivElement

  constructor(options?: EauiWindowOptions) {
    const shell = document.createElement('div')
    shell.style.position = 'absolute'
    shell.style.top = '0'
    shell.style.left = '0'
    shell.style.pointerEvents = 'auto'
    if (options?.width) shell.style.width = `${options.width}px`
    if (options?.height) shell.style.height = `${options.height}px`

    const header = document.createElement('div')
    header.textContent = options?.title ?? ''

    const body = document.createElement('div')

    shell.appendChild(header)
    shell.appendChild(body)

    const overlay = ensureOverlay()
    overlay.appendChild(shell)

    super(shell)
    this.body = body
  }

  setLayout(layout: EauiLayout) {
    this.layout?.dispose()
    this.layout = layout
    this.body.innerHTML = ''
    this.body.appendChild(layout.element)
  }

  show() {
    this.setVisible(true)
  }

  hide() {
    this.setVisible(false)
  }

  dispose() {
    this.layout?.dispose()
    super.dispose()
    releaseOverlayIfEmpty()
  }
}
