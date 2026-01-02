import { CheckboxGroup as TCheckboxGroup } from 'tdesign-vue-next'
import { createApp, h, reactive } from 'vue'
import type {
  TDesignCheckboxGroup,
  TDesignCheckboxGroupOptions,
  TDesignCheckboxOption
} from '@dsz-examaware/plugin-sdk'
import { EauiWidgetBase } from '../widgetBase'
import { EauiSignalImpl } from '../signal'

export class TDesignCheckboxGroupImpl extends EauiWidgetBase implements TDesignCheckboxGroup {
  readonly changed = new EauiSignalImpl<[unknown]>()
  private app: ReturnType<typeof createApp> | null = null
  private state = reactive({
    options: [] as TDesignCheckboxOption[],
    values: [] as Array<string | number | boolean>,
    max: undefined as number | undefined,
    disabled: false
  })

  constructor(options?: TDesignCheckboxGroupOptions) {
    const el = document.createElement('div')
    el.style.display = 'block'
    super(el)

    if (options?.options) this.state.options = options.options
    if (options?.value) this.state.values = options.value
    if (typeof options?.max !== 'undefined') this.state.max = options.max
    if (typeof options?.disabled === 'boolean') this.state.disabled = options.disabled

    this.app = createApp({
      name: 'TDesignCheckboxGroupHost',
      setup: () => () =>
        h(TCheckboxGroup, {
          options: this.state.options.map((o) => ({
            label: o.label,
            value: o.value,
            disabled: o.disabled,
            checkAll: o.checkAll
          })),
          value: this.state.values,
          max: this.state.max,
          disabled: this.state.disabled,
          onChange: (vals: unknown) => {
            this.state.values = (vals as any[]) ?? []
            this.changed.emit(vals)
          }
        })
    })

    this.app.component(TCheckboxGroup.name || 'TCheckboxGroup', TCheckboxGroup)
    this.app.mount(el)
    this.track(() => {
      this.app?.unmount()
      this.app = null
    })
  }

  setOptions(options: TDesignCheckboxOption[]) {
    this.state.options = options ?? []
  }

  setValue(values: Array<string | number | boolean>) {
    this.state.values = values ?? []
  }

  setMax(max?: number) {
    this.state.max = max
  }

  setDisabled(disabled: boolean) {
    this.state.disabled = !!disabled
  }
}
