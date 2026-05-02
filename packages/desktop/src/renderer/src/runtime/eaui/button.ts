import { ref, watchEffect } from 'vue'
import type { EauiButton } from '@dsz-examaware/plugin-sdk'
import { EauiWidgetBase } from './widgetBase'
import { EauiSignalImpl } from './signal'

export class EauiButtonImpl extends EauiWidgetBase implements EauiButton {
  readonly clicked = new EauiSignalImpl<[]>()
  private label = ref('')

  constructor(text?: string) {
    const el = document.createElement('button')
    el.type = 'button'
    super(el)
    this.label.value = text ?? 'Button'
    this.runInScope(() => {
      watchEffect(() => {
        el.textContent = this.label.value
      })
    })
    const handler = () => this.clicked.emit()
    el.addEventListener('click', handler)
    this.track(() => el.removeEventListener('click', handler))
  }

  setText(text: string) {
    this.label.value = text
  }
}
