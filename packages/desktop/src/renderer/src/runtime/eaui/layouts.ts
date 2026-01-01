import type { EauiLayout, EauiWidget } from '@dsz-examaware/plugin-sdk'
import { EauiWidgetBase } from './widgetBase'

export class EauiVBoxLayout extends EauiWidgetBase implements EauiLayout {
  constructor() {
    const el = document.createElement('div')
    el.style.display = 'flex'
    el.style.flexDirection = 'column'
    el.style.alignItems = 'stretch'
    super(el)
  }

  addWidget(widget: EauiWidget) {
    if (widget?.element instanceof HTMLElement) {
      this.element.appendChild(widget.element)
    }
  }

  removeWidget(widget: EauiWidget) {
    if (widget?.element instanceof HTMLElement && widget.element.parentElement === this.element) {
      widget.element.remove()
    }
  }
}

export class EauiHBoxLayout extends EauiWidgetBase implements EauiLayout {
  constructor() {
    const el = document.createElement('div')
    el.style.display = 'flex'
    el.style.flexDirection = 'row'
    el.style.alignItems = 'center'
    super(el)
  }

  addWidget(widget: EauiWidget) {
    if (widget?.element instanceof HTMLElement) {
      this.element.appendChild(widget.element)
    }
  }

  removeWidget(widget: EauiWidget) {
    if (widget?.element instanceof HTMLElement && widget.element.parentElement === this.element) {
      widget.element.remove()
    }
  }
}
