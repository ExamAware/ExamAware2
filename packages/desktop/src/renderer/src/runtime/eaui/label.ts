import type { EauiLabel } from '@dsz-examaware/plugin-sdk'
import { EauiWidgetBase } from './widgetBase'

export class EauiLabelImpl extends EauiWidgetBase implements EauiLabel {
  constructor(text?: string) {
    const el = document.createElement('div')
    el.textContent = text ?? ''
    super(el)
  }

  setText(text: string) {
    this.element.textContent = text
  }
}
