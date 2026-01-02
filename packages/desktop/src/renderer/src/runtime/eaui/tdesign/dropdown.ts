import { Dropdown as TDropdown } from 'tdesign-vue-next'
import { createApp, h, reactive } from 'vue'
import type {
  TDesignDropdown,
  TDesignDropdownItem,
  TDesignDropdownOptions
} from '@dsz-examaware/plugin-sdk'
import { EauiWidgetBase } from '../widgetBase'
import { EauiSignalImpl } from '../signal'

export class TDesignDropdownImpl extends EauiWidgetBase implements TDesignDropdown {
  readonly clicked = new EauiSignalImpl<[unknown]>()
  private app: ReturnType<typeof createApp> | null = null
  private state = reactive({
    label: 'Dropdown',
    options: [] as TDesignDropdownItem[],
    trigger: 'hover' as TDesignDropdownOptions['trigger'],
    placement: 'bottom-left' as string,
    hideAfterItemClick: true,
    disabled: false
  })

  constructor(options?: TDesignDropdownOptions) {
    const el = document.createElement('div')
    el.style.display = 'inline-block'
    super(el)

    if (options?.label) this.state.label = options.label
    if (options?.options) this.state.options = options.options
    if (options?.trigger) this.state.trigger = options.trigger
    if (options?.placement) this.state.placement = options.placement
    if (typeof options?.hideAfterItemClick === 'boolean')
      this.state.hideAfterItemClick = options.hideAfterItemClick
    if (typeof options?.disabled === 'boolean') this.state.disabled = options.disabled

    this.app = createApp({
      name: 'TDesignDropdownHost',
      setup: () => () =>
        h(
          TDropdown,
          {
            options: this.state.options.map((o) => ({
              content: o.label,
              value: o.value,
              disabled: o.disabled,
              divider: o.divider,
              theme: o.theme
            })),
            trigger: this.state.trigger,
            placement: this.state.placement,
            hideAfterItemClick: this.state.hideAfterItemClick,
            disabled: this.state.disabled,
            onClick: (item: unknown, ctx: unknown) => this.clicked.emit({ item, ctx })
          },
          {
            default: () => h('span', { style: { cursor: 'pointer' } }, this.state.label)
          }
        )
    })

    this.app.component(TDropdown.name || 'TDropdown', TDropdown)
    this.app.mount(el)
    this.track(() => {
      this.app?.unmount()
      this.app = null
    })
  }

  setOptions(options: TDesignDropdownItem[]) {
    this.state.options = options ?? []
  }

  setLabel(label: string) {
    this.state.label = label ?? ''
  }

  setTrigger(trigger: 'hover' | 'click' | 'focus' | 'context-menu') {
    this.state.trigger = trigger ?? 'hover'
  }

  setPlacement(placement: string) {
    this.state.placement = placement ?? 'bottom-left'
  }

  setHideAfterItemClick(hide: boolean) {
    this.state.hideAfterItemClick = !!hide
  }

  setDisabled(disabled: boolean) {
    this.state.disabled = !!disabled
  }
}
