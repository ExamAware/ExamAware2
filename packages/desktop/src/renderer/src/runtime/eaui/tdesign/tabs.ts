import { Tabs as TTabs } from 'tdesign-vue-next'
import { createApp, h, reactive } from 'vue'
import type { TDesignTabs, TDesignTabItem, TDesignTabsOptions } from '@dsz-examaware/plugin-sdk'
import { EauiWidgetBase } from '../widgetBase'
import { EauiSignalImpl } from '../signal'

export class TDesignTabsImpl extends EauiWidgetBase implements TDesignTabs {
  readonly changed = new EauiSignalImpl<[unknown]>()
  private app: ReturnType<typeof createApp> | null = null
  private state = reactive({
    tabs: [] as TDesignTabItem[],
    value: undefined as string | number | undefined,
    placement: 'top' as TDesignTabsOptions['placement'],
    theme: 'normal' as TDesignTabsOptions['theme'],
    size: 'medium' as TDesignTabsOptions['size'],
    disabled: false
  })

  constructor(options?: TDesignTabsOptions) {
    const el = document.createElement('div')
    el.style.display = 'block'
    el.style.width = '100%'
    super(el)

    if (options?.tabs) this.state.tabs = options.tabs
    if (typeof options?.value !== 'undefined') this.state.value = options.value
    if (options?.placement) this.state.placement = options.placement
    if (options?.theme) this.state.theme = options.theme
    if (options?.size) this.state.size = options.size
    if (typeof options?.disabled === 'boolean') this.state.disabled = options.disabled

    this.app = createApp({
      name: 'TDesignTabsHost',
      setup: () => () =>
        h(TTabs, {
          list: this.state.tabs.map((t) => ({
            label: t.label,
            value: t.value,
            disabled: t.disabled
          })),
          value: this.state.value,
          placement: this.state.placement,
          theme: this.state.theme,
          size: this.state.size,
          disabled: this.state.disabled,
          onChange: (val: unknown) => {
            this.state.value = val as any
            this.changed.emit(val)
          }
        })
    })

    this.app.component(TTabs.name || 'TTabs', TTabs)
    this.app.mount(el)
    this.track(() => {
      this.app?.unmount()
      this.app = null
    })
  }

  setTabs(tabs: TDesignTabItem[]) {
    this.state.tabs = tabs ?? []
    if (typeof this.state.value === 'undefined' && tabs && tabs.length > 0) {
      this.state.value = tabs[0].value as any
    }
  }

  setValue(value: string | number) {
    this.state.value = value as any
  }

  setPlacement(placement: 'left' | 'top' | 'bottom' | 'right') {
    this.state.placement = placement ?? 'top'
  }

  setTheme(theme: 'normal' | 'card') {
    this.state.theme = theme ?? 'normal'
  }

  setSize(size: 'medium' | 'large') {
    this.state.size = size ?? 'medium'
  }

  setDisabled(disabled: boolean) {
    this.state.disabled = !!disabled
  }
}
