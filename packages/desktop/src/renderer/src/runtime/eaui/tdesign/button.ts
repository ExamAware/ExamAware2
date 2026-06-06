import { Button as TButton } from 'tdesign-vue-next'
import { createApp, h, reactive } from 'vue'
import type { TDesignButton, TDesignButtonOptions } from '@dsz-examaware/plugin-sdk'
import { EauiWidgetBase } from '../widgetBase'
import { EauiSignalImpl } from '../signal'

export class TDesignButtonImpl extends EauiWidgetBase implements TDesignButton {
  readonly clicked = new EauiSignalImpl<[MouseEvent]>()
  private app: ReturnType<typeof createApp> | null = null
  private state = reactive({
    text: 'Button',
    theme: 'default' as TDesignButtonOptions['theme'],
    variant: 'base' as TDesignButtonOptions['variant'],
    size: 'medium' as TDesignButtonOptions['size'],
    shape: 'rectangle' as TDesignButtonOptions['shape'],
    ghost: false,
    block: false,
    loading: false,
    disabled: false
  })

  constructor(options?: TDesignButtonOptions) {
    const el = document.createElement('div')
    el.style.display = 'inline-flex'
    super(el)

    if (options?.text) this.state.text = options.text
    if (options?.theme) this.state.theme = options.theme
    if (options?.variant) this.state.variant = options.variant
    if (options?.size) this.state.size = options.size
    if (options?.shape) this.state.shape = options.shape
    if (typeof options?.ghost === 'boolean') this.state.ghost = options.ghost
    if (typeof options?.block === 'boolean') this.state.block = options.block
    if (typeof options?.loading === 'boolean') this.state.loading = options.loading
    if (typeof options?.disabled === 'boolean') this.state.disabled = options.disabled

    // Render directly with reactive state so prop values stay in sync and remain primitives.
    this.app = createApp({
      name: 'TDesignButtonHost',
      setup: () => () =>
        h(
          TButton,
          {
            theme: this.state.theme,
            variant: this.state.variant,
            size: this.state.size,
            shape: this.state.shape,
            ghost: this.state.ghost,
            block: this.state.block,
            loading: this.state.loading,
            disabled: this.state.disabled,
            onClick: (e: unknown) => this.clicked.emit(e)
          },
          { default: () => this.state.text }
        )
    })
    this.app.component(TButton.name || 'TButton', TButton)
    this.app.mount(el)
    this.track(() => {
      this.app?.unmount()
      this.app = null
    })
  }

  setText(text: string) {
    this.state.text = text
  }

  setTheme(theme: TDesignButtonOptions['theme']) {
    this.state.theme = theme ?? 'default'
  }

  setVariant(variant: TDesignButtonOptions['variant']) {
    this.state.variant = variant ?? 'base'
  }

  setSize(size: TDesignButtonOptions['size']) {
    this.state.size = size ?? 'medium'
  }

  setShape(shape: TDesignButtonOptions['shape']) {
    this.state.shape = shape ?? 'rectangle'
  }

  setGhost(ghost: boolean) {
    this.state.ghost = !!ghost
  }

  setBlock(block: boolean) {
    this.state.block = !!block
  }

  setLoading(loading: boolean) {
    this.state.loading = !!loading
  }

  setEnabled(enabled: boolean) {
    this.state.disabled = !enabled
  }
}
