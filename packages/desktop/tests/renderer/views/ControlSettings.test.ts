/**
 * @vitest-environment jsdom
 */

import { flushPromises, mount } from '@vue/test-utils'
import { defineComponent, h } from 'vue'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import type { ControlStatusSnapshot } from '@dsz-examaware/plugin-sdk'

const snapshot: ControlStatusSnapshot = {
  state: 'incompatible',
  displayName: 'Room 101',
  deviceId: 'b3df3de8-2da0-4a62-8c4f-2ac4570946a4',
  serverUrl: 'https://control.example.edu/',
  lastError: {
    code: 'protocol_version_unsupported',
    message: '集控服务端协议版本与客户端不兼容'
  },
  managedSettingKeys: ['player.uiScale']
}

const PassThrough = defineComponent({
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h('div', attrs, [slots.default?.(), slots.footer?.()])
  }
})

const AlertStub = defineComponent({
  inheritAttrs: false,
  setup(_, { attrs }) {
    return () => h('div', attrs, [String(attrs.title ?? ''), String(attrs.message ?? '')])
  }
})

describe('ControlSettings', () => {
  beforeEach(() => {
    Object.assign(window, {
      api: {
        control: {
          getSnapshot: vi.fn().mockResolvedValue(snapshot),
          enroll: vi.fn(),
          clearEnrollment: vi.fn(),
          callProctor: vi.fn(),
          onEvent: vi.fn().mockReturnValue(() => {})
        },
        config: {
          get: vi.fn().mockResolvedValue(1.25)
        },
        windows: {
          openBindControl: vi.fn()
        }
      }
    })
  })

  it('shows incompatibility recovery and managed-setting guidance', async () => {
    const { default: ControlSettings } =
      await import('@renderer/views/settings/ControlSettings.vue')
    const wrapper = mount(ControlSettings, {
      global: {
        stubs: {
          't-space': PassThrough,
          't-card': PassThrough,
          't-alert': AlertStub,
          't-tag': PassThrough,
          't-divider': PassThrough,
          't-button': PassThrough,
          't-popconfirm': PassThrough,
          't-empty': PassThrough,
          't-switch': PassThrough,
          't-input-number': PassThrough,
          't-input': PassThrough
        }
      }
    })
    await flushPromises()

    expect(wrapper.text()).toContain(
      '集控服务端协议版本与客户端不兼容，请升级客户端或服务端后重试，或解绑后重新绑定。'
    )
    expect(wrapper.text()).toContain('界面缩放')
    expect(wrapper.text()).toContain('由集控中心管理，禁止编辑')
  })
})
