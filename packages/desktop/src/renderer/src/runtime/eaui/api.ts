import type {
  EauiAPI,
  EauiButtonCtor,
  EauiCheckBoxCtor,
  EauiLabelCtor,
  EauiLineEditCtor,
  EauiVBoxLayoutCtor,
  EauiHBoxLayoutCtor,
  EauiWindowCtor,
  EauiWindowOptions
} from '@dsz-examaware/plugin-sdk'
import { EauiWindowImpl } from './window'
import { EauiLabelImpl } from './label'
import { EauiButtonImpl } from './button'
import { EauiLineEditImpl } from './lineEdit'
import { EauiCheckBoxImpl } from './checkBox'
import { EauiVBoxLayout, EauiHBoxLayout } from './layouts'

export function createEauiApi(): EauiAPI {
  return {
    Window: EauiWindowImpl as unknown as EauiWindowCtor,
    Label: EauiLabelImpl as unknown as EauiLabelCtor,
    Button: EauiButtonImpl as unknown as EauiButtonCtor,
    LineEdit: EauiLineEditImpl as unknown as EauiLineEditCtor,
    CheckBox: EauiCheckBoxImpl as unknown as EauiCheckBoxCtor,
    VBoxLayout: EauiVBoxLayout as unknown as EauiVBoxLayoutCtor,
    HBoxLayout: EauiHBoxLayout as unknown as EauiHBoxLayoutCtor,
    createWindow: (options?: EauiWindowOptions) => new EauiWindowImpl(options),
    createLabel: (text?: string) => new EauiLabelImpl(text),
    createButton: (text?: string) => new EauiButtonImpl(text),
    createLineEdit: (text?: string) => new EauiLineEditImpl(text),
    createCheckBox: (label?: string, checked?: boolean) => new EauiCheckBoxImpl(label, checked),
    createVBoxLayout: () => new EauiVBoxLayout(),
    createHBoxLayout: () => new EauiHBoxLayout()
  }
}
