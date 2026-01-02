import { RadioGroup as TRadioGroup } from 'tdesign-vue-next'
import { createApp, h, reactive } from 'vue'
import type {
  TDesignRadioGroup,
  TDesignRadioGroupOptions,
  TDesignRadioOption
} from '@dsz-examaware/plugin-sdk'
import { EauiWidgetBase } from '../widgetBase'
import { EauiSignalImpl } from '../signal'

export class TDesignRadioGroupImpl extends EauiWidgetBase implements TDesignRadioGroup {
  readonly changed = new EauiSignalImpl<[unknown]>()
  private app: ReturnType<typeof createApp> | null = null
  private state = reactive({
    options: [] as TDesignRadioOption[],
    value: undefined as string | number | boolean | undefined,
    allowUncheck: false,
    disabled: false
  })

  constructor(options?: TDesignRadioGroupOptions) {
    const el = document.createElement('div')
    el.style.display = 'block'
    super(el)

    if (options?.options) this.state.options = options.options
    if (typeof options?.value !== 'undefined') this.state.value = options.value
    if (typeof options?.allowUncheck === 'boolean') this.state.allowUncheck = options.allowUncheck
    if (typeof options?.disabled === 'boolean') this.state.disabled = options.disabled

    this.app = createApp({
      name: 'TDesignRadioGroupHost',
      setup: () => () =>
        h(TRadioGroup, {
          options: this.state.options.map((o) => ({
            label: o.label,
            value: o.value,
            disabled: o.disabled
          })),
          value: this.state.value,
          allowUncheck: this.state.allowUncheck,
          disabled: this.state.disabled,
          onChange: (val: unknown) => {
            this.state.value = val as any
            this.changed.emit(val)
          }
        })
    })

    this.app.component(TRadioGroup.name || 'TRadioGroup', TRadioGroup)
    this.app.mount(el)
    this.track(() => {
      this.app?.unmount()
      this.app = null
    })
  }

  setOptions(options: TDesignRadioOption[]) {
    this.state.options = options ?? []
    if (typeof this.state.value === 'undefined' && options && options.length > 0) {
      this.state.value = options[0].value as any
    }
  }

  setValue(value: string | number | boolean) {
    this.state.value = value as any
  }

  setAllowUncheck(allow: boolean) {
    this.state.allowUncheck = !!allow
  }

  setDisabled(disabled: boolean) {
    this.state.disabled = !!disabled
  }
}
