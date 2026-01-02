import type {
  TDesignButtonOptions,
  TDesignDropdownOptions,
  TDesignTabsOptions,
  TDesignInputOptions,
  TDesignUI,
  TDesignRadioGroupOptions,
  TDesignCheckboxGroupOptions
} from '@dsz-examaware/plugin-sdk'
import { TDesignButtonImpl } from './button'
import { TDesignDropdownImpl } from './dropdown'
import { TDesignTabsImpl } from './tabs'
import { TDesignInputImpl } from './input'
import { TDesignRadioGroupImpl } from './radio'
import { TDesignCheckboxGroupImpl } from './checkbox'

export function createTDesignApi(): TDesignUI {
  return {
    createButton: (options?: TDesignButtonOptions) => new TDesignButtonImpl(options),
    createDropdown: (options?: TDesignDropdownOptions) => new TDesignDropdownImpl(options),
    createTabs: (options?: TDesignTabsOptions) => new TDesignTabsImpl(options),
    createInput: (options?: TDesignInputOptions) => new TDesignInputImpl(options),
    createRadioGroup: (options?: TDesignRadioGroupOptions) => new TDesignRadioGroupImpl(options),
    createCheckboxGroup: (options?: TDesignCheckboxGroupOptions) =>
      new TDesignCheckboxGroupImpl(options)
  }
}
