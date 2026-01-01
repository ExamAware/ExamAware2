import type { EauiButton } from '@dsz-examaware/plugin-sdk'
import { EauiWidgetBase } from './widgetBase'
import { EauiSignalImpl } from './signal'

export class EauiButtonImpl extends EauiWidgetBase implements EauiButton {
  readonly clicked = new EauiSignalImpl<[]>()

  constructor(text?: string) {
    const el = document.createElement('button')
    el.type = 'button'
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
