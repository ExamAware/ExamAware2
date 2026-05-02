import { ref, watchEffect, type Ref } from 'vue'
import type { EauiCheckBox } from '@dsz-examaware/plugin-sdk'
import { EauiWidgetBase } from './widgetBase'
import { EauiSignalImpl } from './signal'

export class EauiCheckBoxImpl extends EauiWidgetBase implements EauiCheckBox {
  readonly stateChanged = new EauiSignalImpl<[boolean]>()
  private valueRef: Ref<boolean>
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
    this.valueRef = ref(checked)
    this.input = checkbox
    this.textEl = text

    const handler = () => {
      const next = this.input.checked
      if (this.valueRef.value !== next) {
        this.valueRef.value = next
      }
      this.stateChanged.emit(this.valueRef.value)
    }
    checkbox.addEventListener('change', handler)
    this.track(() => checkbox.removeEventListener('change', handler))

    this.runInScope(() => {
      watchEffect(() => {
        if (this.input.checked !== this.valueRef.value) {
          this.input.checked = this.valueRef.value
        }
      })
    })
  }

  isChecked(): boolean {
    return this.valueRef.value
  }

  setChecked(checked: boolean) {
    if (this.valueRef.value !== checked) {
      this.valueRef.value = checked
      this.stateChanged.emit(checked)
    }
  }

  setText(text: string) {
    this.textEl.textContent = text
  }

  setEnabled(enabled: boolean) {
    super.setEnabled(enabled)
    this.input.disabled = !enabled
  }

  bind(model: Ref<boolean>) {
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

  model(): Ref<boolean> {
    return this.valueRef
  }
}
