import { Dropdown as TDropdown, type DropdownOption, type DropdownProps } from 'tdesign-vue-next'
import { createApp, h, reactive } from 'vue'
import type {
  TDesignDropdown,
  TDesignDropdownItem,
  TDesignDropdownOptions
} from '@dsz-examaware/plugin-sdk'
import { EauiWidgetBase } from '../widgetBase'
import { EauiSignalImpl } from '../signal'

type DropdownPlacement = NonNullable<DropdownProps['placement']>
type DropdownTrigger = NonNullable<DropdownProps['trigger']>

const DROPDOWN_PLACEMENTS = new Set<DropdownPlacement>([
  'top',
  'left',
  'right',
  'bottom',
  'top-left',
  'top-right',
  'bottom-left',
  'bottom-right',
  'left-top',
  'left-bottom',
  'right-top',
  'right-bottom'
])

const normalizePlacement = (placement: string | undefined): DropdownPlacement =>
  placement && DROPDOWN_PLACEMENTS.has(placement as DropdownPlacement)
    ? (placement as DropdownPlacement)
    : 'bottom-left'

export class TDesignDropdownImpl extends EauiWidgetBase implements TDesignDropdown {
  readonly clicked = new EauiSignalImpl<[unknown]>()
  private app: ReturnType<typeof createApp> | null = null
  private state = reactive({
    label: 'Dropdown',
    options: [] as TDesignDropdownItem[],
    trigger: 'hover' as DropdownTrigger,
    placement: 'bottom-left' as DropdownPlacement,
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
    if (options?.placement) this.state.placement = normalizePlacement(options.placement)
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
              value: o.value as DropdownOption['value'],
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
    this.state.placement = normalizePlacement(placement)
  }

  setHideAfterItemClick(hide: boolean) {
    this.state.hideAfterItemClick = !!hide
  }

  setDisabled(disabled: boolean) {
    this.state.disabled = !!disabled
  }
}
