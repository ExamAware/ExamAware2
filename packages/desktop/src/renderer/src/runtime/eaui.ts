import type {
  Disposer,
  EauiAPI,
  EauiButton,
  EauiButtonCtor,
  EauiCheckBox,
  EauiCheckBoxCtor,
  EauiLabel,
  EauiLabelCtor,
  EauiLayout,
  EauiLineEdit,
  EauiLineEditCtor,
  EauiSignal,
  EauiVBoxLayoutCtor,
  EauiHBoxLayoutCtor,
  EauiWindow,
  EauiWindowCtor,
  EauiWindowOptions,
  EauiWidget
} from '@dsz-examaware/plugin-sdk'

const STYLE_ID = 'examaware-eaui-style'
let overlayEl: HTMLDivElement | null = null

function ensureStyleSheet() {
  if (document.getElementById(STYLE_ID)) return
  const style = document.createElement('style')
  style.id = STYLE_ID
  style.textContent = `
.eaui-overlay { position: fixed; inset: 0; z-index: 2200; pointer-events: none; }
.eaui-window { position: absolute; background: var(--td-bg-color-container, #fff); color: var(--td-font-white-1, #1f1f1f); border: 1px solid var(--td-border-level-1-color, #e7e7e7); border-radius: 12px; min-width: 260px; min-height: 120px; box-shadow: var(--td-shadow-3, 0 8px 24px rgba(0,0,0,0.12)); overflow: hidden; pointer-events: auto; display: flex; flex-direction: column; }
.eaui-window[hidden] { display: none !important; }
.eaui-header { display: flex; align-items: center; justify-content: space-between; padding: 10px 14px; font-weight: 600; font-size: 14px; border-bottom: 1px solid var(--td-component-stroke, #f0f0f0); background: var(--td-bg-color-secondarycontainer, #fafafa); }
.eaui-body { padding: 12px 14px 14px; flex: 1; overflow: auto; }
.eaui-layout { display: flex; gap: 10px; width: 100%; }
.eaui-layout.vbox { flex-direction: column; align-items: stretch; }
.eaui-layout.hbox { flex-direction: row; align-items: center; }
.eaui-label { font-size: 14px; line-height: 20px; }
.eaui-button { padding: 8px 14px; border: 1px solid var(--td-component-stroke, #dcdcdc); background: var(--td-bg-color-container, #fff); border-radius: 8px; cursor: pointer; font-size: 14px; transition: background 120ms ease, border-color 120ms ease, box-shadow 120ms ease; }
.eaui-button:hover { border-color: var(--td-brand-color, #0052d9); box-shadow: 0 2px 8px rgba(0,0,0,0.06); }
.eaui-button:active { background: var(--td-bg-color-component-hover, #f3f3f3); }
.eaui-button:disabled { cursor: not-allowed; opacity: 0.6; box-shadow: none; }
.eaui-lineedit { width: 100%; padding: 8px 10px; border: 1px solid var(--td-component-stroke, #dcdcdc); border-radius: 8px; font-size: 14px; outline: none; transition: border-color 120ms ease, box-shadow 120ms ease; }
.eaui-lineedit:focus { border-color: var(--td-brand-color, #0052d9); box-shadow: 0 0 0 2px rgba(0,82,217,0.12); }
.eaui-checkbox { display: inline-flex; align-items: center; gap: 8px; font-size: 14px; }
.eaui-checkbox input { width: 16px; height: 16px; }
`
  document.head.appendChild(style)
}

function ensureOverlay(): HTMLDivElement {
  ensureStyleSheet()
  if (!overlayEl) {
    overlayEl = document.createElement('div')
    overlayEl.className = 'eaui-overlay'
    document.body.appendChild(overlayEl)
  }
  return overlayEl
}

function runDisposers(disposers: Set<Disposer>) {
  Array.from(disposers).forEach((fn) => {
    try {
      fn()
    } catch (err) {
      console.warn('[eaui] dispose failed', err)
    }
  })
  disposers.clear()
}

class EauiSignalImpl<TArgs extends any[]> implements EauiSignal<TArgs> {
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

class EauiWidgetBase implements EauiWidget {
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

class EauiVBoxLayout extends EauiWidgetBase implements EauiLayout {
  constructor() {
    const el = document.createElement('div')
    el.className = 'eaui-layout vbox'
    super(el)
  }

  addWidget(widget: EauiWidget) {
    if (widget?.element instanceof HTMLElement) {
      this.element.appendChild(widget.element)
    }
  }

  removeWidget(widget: EauiWidget) {
    if (widget?.element instanceof HTMLElement && widget.element.parentElement === this.element) {
      widget.element.remove()
    }
  }
}

class EauiHBoxLayout extends EauiWidgetBase implements EauiLayout {
  constructor() {
    const el = document.createElement('div')
    el.className = 'eaui-layout hbox'
    super(el)
  }

  addWidget(widget: EauiWidget) {
    if (widget?.element instanceof HTMLElement) {
      this.element.appendChild(widget.element)
    }
  }

  removeWidget(widget: EauiWidget) {
    if (widget?.element instanceof HTMLElement && widget.element.parentElement === this.element) {
      widget.element.remove()
    }
  }
}

class EauiWindowImpl extends EauiWidgetBase implements EauiWindow {
  private layout?: EauiLayout
  private body: HTMLDivElement

  constructor(options?: EauiWindowOptions) {
    const shell = document.createElement('div')
    shell.className = 'eaui-window'
    shell.style.top = '15%'
    shell.style.left = '50%'
    shell.style.transform = 'translateX(-50%)'
    if (options?.width) shell.style.width = `${options.width}px`
    if (options?.height) shell.style.height = `${options.height}px`

    const header = document.createElement('div')
    header.className = 'eaui-header'
    header.textContent = options?.title ?? ''

    const body = document.createElement('div')
    body.className = 'eaui-body'

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
    if (overlayEl && overlayEl.childElementCount === 0) {
      overlayEl.remove()
      overlayEl = null
    }
  }
}

class EauiLabelImpl extends EauiWidgetBase implements EauiLabel {
  constructor(text?: string) {
    const el = document.createElement('div')
    el.className = 'eaui-label'
    el.textContent = text ?? ''
    super(el)
  }

  setText(text: string) {
    this.element.textContent = text
  }
}

class EauiButtonImpl extends EauiWidgetBase implements EauiButton {
  readonly clicked = new EauiSignalImpl<[]>()

  constructor(text?: string) {
    const el = document.createElement('button')
    el.type = 'button'
    el.className = 'eaui-button'
    el.textContent = text ?? 'Button'
    super(el)
    const handler = () => this.clicked.emit()
    el.addEventListener('click', handler)
    this.track(() => el.removeEventListener('click', handler))
  }

  setText(text: string) {
    this.element.textContent = text
  }
}

class EauiLineEditImpl extends EauiWidgetBase implements EauiLineEdit {
  readonly textChanged = new EauiSignalImpl<[string]>()
  private input: HTMLInputElement

  constructor(text?: string) {
    const el = document.createElement('input')
    el.type = 'text'
    el.className = 'eaui-lineedit'
    el.value = text ?? ''
    super(el)
    this.input = el
    const handler = () => this.textChanged.emit(this.text())
    el.addEventListener('input', handler)
    this.track(() => el.removeEventListener('input', handler))
  }

  text(): string {
    return this.input.value
  }

  setText(text: string) {
    this.input.value = text
    this.textChanged.emit(text)
  }
}

class EauiCheckBoxImpl extends EauiWidgetBase implements EauiCheckBox {
  readonly stateChanged = new EauiSignalImpl<[boolean]>()
  private input: HTMLInputElement
  private label: HTMLSpanElement

  constructor(label?: string, checked = false) {
    const wrapper = document.createElement('label')
    wrapper.className = 'eaui-checkbox'

    const checkbox = document.createElement('input')
    checkbox.type = 'checkbox'
    checkbox.checked = checked

    const text = document.createElement('span')
    text.textContent = label ?? ''

    wrapper.appendChild(checkbox)
    wrapper.appendChild(text)

    super(wrapper)
    this.input = checkbox
    this.label = text

    const handler = () => this.stateChanged.emit(this.isChecked())
    checkbox.addEventListener('change', handler)
    this.track(() => checkbox.removeEventListener('change', handler))
  }

  isChecked(): boolean {
    return this.input.checked
  }

  setChecked(checked: boolean) {
    this.input.checked = checked
    this.stateChanged.emit(checked)
  }

  setEnabled(enabled: boolean) {
    super.setEnabled(enabled)
    this.input.disabled = !enabled
  }

  setText(text: string) {
    this.label.textContent = text
  }
}

export function createEauiApi(): EauiAPI {
  return {
    Window: EauiWindowImpl as unknown as EauiWindowCtor,
    Label: EauiLabelImpl as unknown as EauiLabelCtor,
    Button: EauiButtonImpl as unknown as EauiButtonCtor,
    LineEdit: EauiLineEditImpl as unknown as EauiLineEditCtor,
    CheckBox: EauiCheckBoxImpl as unknown as EauiCheckBoxCtor,
    VBoxLayout: EauiVBoxLayout as unknown as EauiVBoxLayoutCtor,
    HBoxLayout: EauiHBoxLayout as unknown as EauiHBoxLayoutCtor,
    createWindow: (options?: EauiWindowOptions) => new EauiWindowImpl(options),
    createLabel: (text?: string) => new EauiLabelImpl(text),
    createButton: (text?: string) => new EauiButtonImpl(text),
    createLineEdit: (text?: string) => new EauiLineEditImpl(text),
    createCheckBox: (label?: string, checked?: boolean) => new EauiCheckBoxImpl(label, checked),
    createVBoxLayout: () => new EauiVBoxLayout(),
    createHBoxLayout: () => new EauiHBoxLayout()
  }
}
