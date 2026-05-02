import { ref, watchEffect, type Ref } from 'vue'
import type { EauiLineEdit } from '@dsz-examaware/plugin-sdk'
import { EauiWidgetBase } from './widgetBase'
import { EauiSignalImpl } from './signal'

export class EauiLineEditImpl extends EauiWidgetBase implements EauiLineEdit {
  readonly textChanged = new EauiSignalImpl<[string]>()
  private valueRef: Ref<string>
  private input: HTMLInputElement

  constructor(text?: string) {
    const el = document.createElement('input')
    el.type = 'text'
    super(el)
    this.valueRef = ref(text ?? '')
    this.input = el
    const handler = () => {
      const next = this.input.value
      if (this.valueRef.value !== next) {
        this.valueRef.value = next
      }
      this.textChanged.emit(this.valueRef.value)
    }
    el.addEventListener('input', handler)
    this.track(() => el.removeEventListener('input', handler))
    this.runInScope(() => {
      watchEffect(() => {
        if (this.input.value !== this.valueRef.value) {
          this.input.value = this.valueRef.value
        }
      })
    })
  }

  text(): string {
    return this.valueRef.value
  }

  setText(text: string) {
    if (this.valueRef.value !== text) {
      this.valueRef.value = text
      this.textChanged.emit(text)
    }
  }

  bind(model: Ref<string>) {
    this.runInScope(() => {
      watchEffect(() => {
        if (model.value !== this.valueRef.value) {
          this.valueRef.value = model.value
        }
      })
      watchEffect(() => {
        if (model.value !== this.valueRef.value) {
          model.value = this.valueRef.value
        }
      })
    })
  }

  model(): Ref<string> {
    return this.valueRef
  }
}
