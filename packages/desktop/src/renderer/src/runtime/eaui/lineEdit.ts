import type { EauiLineEdit } from '@dsz-examaware/plugin-sdk'
import { EauiWidgetBase } from './widgetBase'
import { EauiSignalImpl } from './signal'

export class EauiLineEditImpl extends EauiWidgetBase implements EauiLineEdit {
  readonly textChanged = new EauiSignalImpl<[string]>()
  private input: HTMLInputElement

  constructor(text?: string) {
    const el = document.createElement('input')
    el.type = 'text'
    el.value = text ?? ''
    super(el)
    this.input = el
    const handler = () => this.textChanged.emit(this.text())
    el.addEventListener('input', handler)
    this.track(() => el.removeEventListener('input', handler))
  }

  text(): string {
    return this.input.value
  }

  setText(text: string) {
    this.input.value = text
    this.textChanged.emit(text)
  }
}
