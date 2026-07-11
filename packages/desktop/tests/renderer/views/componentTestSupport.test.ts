/**
 * @vitest-environment jsdom
 */

import { mount } from '@vue/test-utils'
import { defineComponent } from 'vue'
import { describe, expect, it } from 'vitest'

import MainpageView from '@renderer/views/home/MainpageView.vue'

describe('renderer component test support', () => {
  it('loads renderer SFCs and mounts Vue components in the DOM', () => {
    expect(MainpageView).toBeDefined()

    const wrapper = mount(
      defineComponent({
        template: '<p data-testid="message">component tests are ready</p>'
      })
    )

    expect(wrapper.get('[data-testid="message"]').text()).toBe('component tests are ready')
  })
})
