import { createApp, type Component } from 'vue'
import type { EauiLayout, EauiWindow, EauiWindowOptions } from '@dsz-examaware/plugin-sdk'
import { EauiWidgetBase } from './widgetBase'
import { ensureOverlay, releaseOverlayIfEmpty } from './overlay'

export class EauiWindowImpl extends EauiWidgetBase implements EauiWindow {
  private layout?: EauiLayout
  private body: HTMLDivElement
  private vueApp?: ReturnType<typeof createApp>
  private vueRoot?: HTMLElement

  constructor(options?: EauiWindowOptions) {
    console.info('[eaui] createWindow called with options', options)
    const shell = document.createElement('div')
    shell.style.position = 'absolute'
    shell.style.top = `${options?.y ?? 0}px`
    shell.style.left = `${options?.x ?? 0}px`
    shell.style.pointerEvents = 'auto'
    shell.style.background = 'var(--td-bg-color-container, #fff)'
    shell.style.color = 'var(--td-text-color-primary, #1f2329)'
    shell.style.boxSizing = 'border-box'
    shell.style.padding = '0'
    shell.style.display = 'flex'
    shell.style.flexDirection = 'column'
    shell.style.gap = '0'
    shell.style.borderRadius = '0'
    shell.style.boxShadow = 'none'
    if (options?.width) shell.style.width = `${options.width}px`
    else shell.style.width = '100%'
    shell.style.maxWidth = '100%'
    if (options?.height) shell.style.height = `${options.height}px`
    else shell.style.height = '100%'
    shell.style.maxHeight = '100%'
    shell.style.zIndex = '10'

    const body = document.createElement('div')
    body.style.flex = '1'
    body.style.display = 'flex'
    body.style.flexDirection = 'column'
    body.style.gap = '10px'
    body.style.padding = '16px'
    body.style.boxSizing = 'border-box'

    const titleText = options?.title ?? ''
    if (titleText) {
      const header = document.createElement('div')
      header.textContent = titleText
      header.style.fontWeight = '600'
      header.style.fontSize = '16px'
      header.style.padding = '12px 16px'
      header.style.boxSizing = 'border-box'
      header.style.borderBottom = '1px solid var(--td-border-level-1-color, #e5e6eb)'
      shell.appendChild(header)
    }

    shell.appendChild(body)

    const overlay = ensureOverlay()
    overlay.appendChild(shell)
    console.info('[eaui] shell appended, overlay children:', overlay.childElementCount)
    // ensure overlay is visible even if parent has overflow hidden
    shell.style.position = 'absolute'

    super(shell)
    this.body = body
  }

  setLayout(layout: EauiLayout) {
    this.unmountVue()
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

  mountVue(component: Component, props?: Record<string, any>) {
    this.layout?.dispose()
    this.layout = undefined
    this.unmountVue()
    this.body.innerHTML = ''
    const mountPoint = document.createElement('div')
    this.body.appendChild(mountPoint)
    this.vueApp = createApp(component, props ?? {})
    this.vueRoot = mountPoint
    this.vueApp.mount(mountPoint)
    return () => this.unmountVue()
  }

  private unmountVue() {
    if (this.vueApp) {
      try {
        this.vueApp.unmount()
      } catch (err) {
        console.warn('[eaui] unmount vue failed', err)
      }
      this.vueApp = undefined
    }
    if (this.vueRoot) {
      this.vueRoot.remove()
      this.vueRoot = undefined
    }
  }

  dispose() {
    this.layout?.dispose()
    this.unmountVue()
    super.dispose()
    releaseOverlayIfEmpty()
  }
}
