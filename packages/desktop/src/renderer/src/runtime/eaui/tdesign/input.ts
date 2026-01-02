import { Input as TInput } from 'tdesign-vue-next'
import { createApp, h, reactive } from 'vue'
import type { TDesignInput, TDesignInputOptions } from '@dsz-examaware/plugin-sdk'
import { EauiWidgetBase } from '../widgetBase'
import { EauiSignalImpl } from '../signal'

export class TDesignInputImpl extends EauiWidgetBase implements TDesignInput {
  readonly changed = new EauiSignalImpl<[unknown]>()
  readonly entered = new EauiSignalImpl<[unknown]>()
  private app: ReturnType<typeof createApp> | null = null
  private state = reactive({
    value: '' as string | number,
    placeholder: '',
    status: 'default' as TDesignInputOptions['status'],
    size: 'medium' as TDesignInputOptions['size'],
    type: 'text' as TDesignInputOptions['type'],
    clearable: false,
    disabled: false
  })

  constructor(options?: TDesignInputOptions) {
    const el = document.createElement('div')
    el.style.display = 'block'
    super(el)

    if (typeof options?.value !== 'undefined') this.state.value = options.value
    if (options?.placeholder) this.state.placeholder = options.placeholder
    if (options?.status) this.state.status = options.status
    if (options?.size) this.state.size = options.size
    if (options?.type) this.state.type = options.type
    if (typeof options?.clearable === 'boolean') this.state.clearable = options.clearable
    if (typeof options?.disabled === 'boolean') this.state.disabled = options.disabled

    this.app = createApp({
      name: 'TDesignInputHost',
      setup: () => () =>
        h(TInput, {
          modelValue: this.state.value,
          placeholder: this.state.placeholder,
          status: this.state.status,
          size: this.state.size,
          type: this.state.type,
          clearable: this.state.clearable,
          disabled: this.state.disabled,
          'onUpdate:modelValue': (val: unknown) => {
            this.state.value = val as any
            this.changed.emit(val)
          },
          onEnter: (val: unknown) => {
            this.entered.emit(val)
          }
        })
    })

    this.app.component(TInput.name || 'TInput', TInput)
    this.app.mount(el)
    this.track(() => {
      this.app?.unmount()
      this.app = null
    })
  }

  setValue(value: string | number) {
    this.state.value = value ?? ''
  }

  value(): string | number {
    return this.state.value
  }

  setPlaceholder(text: string) {
    this.state.placeholder = text ?? ''
  }

  setStatus(status: 'default' | 'success' | 'warning' | 'error') {
    this.state.status = status ?? 'default'
  }

  setSize(size: 'small' | 'medium' | 'large') {
    this.state.size = size ?? 'medium'
  }

  setType(type: 'text' | 'number' | 'url' | 'tel' | 'password' | 'search' | 'submit' | 'hidden') {
    this.state.type = type ?? 'text'
  }

  setClearable(clearable: boolean) {
    this.state.clearable = !!clearable
  }

  setEnabled(enabled: boolean) {
    this.state.disabled = !enabled
  }
}
