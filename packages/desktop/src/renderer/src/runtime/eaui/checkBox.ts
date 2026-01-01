import type { EauiCheckBox } from '@dsz-examaware/plugin-sdk'
import { EauiWidgetBase } from './widgetBase'
import { EauiSignalImpl } from './signal'

export class EauiCheckBoxImpl extends EauiWidgetBase implements EauiCheckBox {
  readonly stateChanged = new EauiSignalImpl<[boolean]>()
  private input: HTMLInputElement
  private textEl: HTMLSpanElement

  constructor(label?: string, checked = false) {
    const wrapper = document.createElement('label')

    const checkbox = document.createElement('input')
    checkbox.type = 'checkbox'
    checkbox.checked = checked

    const text = document.createElement('span')
    text.textContent = label ?? ''

    wrapper.appendChild(checkbox)
    wrapper.appendChild(text)

    super(wrapper)
    this.input = checkbox
    this.textEl = text

    const handler = () => this.stateChanged.emit(this.isChecked())
    checkbox.addEventListener('change', handler)
    this.track(() => checkbox.removeEventListener('change', handler))
  }

  isChecked(): boolean {
    return this.input.checked
  }

  setChecked(checked: boolean) {
    this.input.checked = checked
    this.stateChanged.emit(checked)
  }

  setText(text: string) {
    this.textEl.textContent = text
  }

  setEnabled(enabled: boolean) {
    super.setEnabled(enabled)
    this.input.disabled = !enabled
  }
}
