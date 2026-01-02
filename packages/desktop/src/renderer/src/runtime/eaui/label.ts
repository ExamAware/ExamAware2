import { ref, watchEffect } from 'vue'
import type { EauiLabel } from '@dsz-examaware/plugin-sdk'
import { EauiWidgetBase } from './widgetBase'

export class EauiLabelImpl extends EauiWidgetBase implements EauiLabel {
  private content = ref('')

  constructor(text?: string) {
    const el = document.createElement('div')
    super(el)
    this.content.value = text ?? ''
    this.runInScope(() => {
      watchEffect(() => {
        el.textContent = this.content.value
      })
    })
  }

  setText(text: string) {
    this.content.value = text
  }
}
