/**
 * @vitest-environment jsdom
 */

import { enableAutoUnmount, flushPromises, mount, type VueWrapper } from '@vue/test-utils'
import { computed, defineComponent, h, nextTick, reactive } from 'vue'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { Switch as TSwitch } from 'tdesign-vue-next'

const state = vi.hoisted(() => ({
  raw: {} as Record<string, unknown>,
  writes: new Map<string, number>(),
  mappings: new Map<
    string,
    { mapIn?: (value: unknown) => unknown; mapOut?: (value: unknown) => unknown }
  >(),
  preview: vi.fn(),
  stop: vi.fn(),
  dispose: vi.fn(),
  reporter: undefined as ((failure: unknown) => void) | undefined,
  controllerOptions: undefined as any,
  listPacks: vi.fn(),
  importPack: vi.fn()
}))

vi.mock('@renderer/composables/useSetting', () => ({
  useSettingsGroup: (prefix: string) => ({
    ref: (key: string, fallback: unknown, options?: any) => {
      const fullKey = `${prefix}.${key}`
      state.mappings.set(fullKey, options ?? {})
      return computed({
        get: () => {
          const value = fullKey in state.raw ? state.raw[fullKey] : fallback
          return options?.mapIn ? options.mapIn(value) : value
        },
        set: (value) => {
          state.writes.set(fullKey, (state.writes.get(fullKey) ?? 0) + 1)
          state.raw[fullKey] = options?.mapOut ? options.mapOut(value) : value
        }
      })
    }
  })
}))

vi.mock('@renderer/services/reminderSound', async (importOriginal) => {
  const original = await importOriginal<typeof import('@renderer/services/reminderSound')>()
  return {
    ...original,
    createReminderSoundController: vi.fn((options) => {
      state.reporter = options?.reporter
      state.controllerOptions = options
      return {
        play: vi.fn(),
        preview: state.preview,
        stop: state.stop,
        dispose: state.dispose
      }
    })
  }
})

import PlayerSettings from '@renderer/views/settings/PlayerSettings.vue'

enableAutoUnmount(afterEach)

const PassThrough = defineComponent({
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h('div', attrs, slots.default?.())
  }
})

const SwitchStub = defineComponent({
  inheritAttrs: false,
  props: { modelValue: { type: Boolean, default: false } },
  emits: ['update:modelValue'],
  setup(props, { attrs, emit }) {
    return () =>
      h('div', {
        ...attrs,
        'aria-checked': String(props.modelValue),
        onClick: () => emit('update:modelValue', !props.modelValue)
      })
  }
})

const SliderStub = defineComponent({
  inheritAttrs: false,
  props: { modelValue: { type: Number, default: 0 } },
  emits: ['update:modelValue'],
  setup(props, { attrs, emit }) {
    return () =>
      h('div', attrs, [
        h('input', {
          type: 'range',
          value: props.modelValue,
          onInput: (event: Event) =>
            emit('update:modelValue', Number((event.target as HTMLInputElement).value))
        })
      ])
  }
})

const InputNumberStub = defineComponent({
  inheritAttrs: false,
  props: { modelValue: { type: Number, default: 0 } },
  emits: ['update:modelValue'],
  setup(props, { attrs, emit }) {
    return () =>
      h('div', attrs, [
        h('input', {
          type: 'number',
          value: props.modelValue,
          onInput: (event: Event) =>
            emit('update:modelValue', Number((event.target as HTMLInputElement).value))
        })
      ])
  }
})

const deferred = <T>() => {
  let resolve!: (value: T) => void
  let reject!: (reason?: unknown) => void
  const promise = new Promise<T>((res, rej) => {
    resolve = res
    reject = rej
  })
  return { promise, resolve, reject }
}

const mountPage = (options: { realSwitch?: boolean } = {}) =>
  mount(PlayerSettings, {
    global: {
      components: options.realSwitch ? { TSwitch } : {},
      stubs: {
        TIcon: PassThrough,
        't-space': PassThrough,
        't-card': PassThrough,
        't-divider': PassThrough,
        't-input': PassThrough,
        ...(!options.realSwitch ? { 't-switch': SwitchStub } : {}),
        't-slider': SliderStub,
        't-input-number': InputNumberStub
      }
    }
  })

const soundSwitch = (wrapper: VueWrapper, title: string) => {
  const row = wrapper
    .findAll('.settings-item')
    .find((candidate) => candidate.find('.settings-item-title').text() === title)
  if (!row) throw new Error(`missing settings row: ${title}`)
  return row.get('[role="switch"]')
}

const previewButton = (wrapper: VueWrapper, label: string) =>
  wrapper.get(`button[aria-label="${label}"]`)

describe('PlayerSettings reminder sound settings', () => {
  beforeEach(() => {
    state.raw = reactive({})
    state.writes.clear()
    state.mappings.clear()
    state.preview.mockReset().mockResolvedValue({ ok: true, kind: 'start' })
    state.stop.mockReset()
    state.dispose.mockReset()
    state.reporter = undefined
    state.controllerOptions = undefined
    state.listPacks.mockReset().mockResolvedValue([
      {
        id: 'pond',
        name: 'Pond 池塘',
        builtIn: true,
        version: '1.0.0',
        author: 'ExamAware',
        sounds: {
          start: { name: 'Begin 开始', src: './audio/exam-start.mp3' },
          alert: { name: 'Pre-end 即将结束', src: './audio/exam-alert.mp3' },
          end: { name: 'End 结束', src: './audio/exam-end.mp3' }
        }
      },
      {
        id: 'lake-bells',
        name: 'Lake Bells 湖畔',
        builtIn: false,
        version: '1.2.0',
        author: 'Test',
        sounds: {
          start: { name: '晨光', src: 'examaware-sound://pack/lake-bells/start' },
          alert: { name: '涟漪', src: 'examaware-sound://pack/lake-bells/alert' },
          end: { name: '归岸', src: 'examaware-sound://pack/lake-bells/end' }
        }
      }
    ])
    state.importPack.mockReset()
    Object.defineProperty(window, 'api', {
      configurable: true,
      value: {
        reminderSounds: {
          list: state.listPacks,
          import: state.importPack
        }
      }
    })
  })

  afterEach(() => vi.restoreAllMocks())

  it('uses the exact player reminder keys, strict booleans, and master-controlled subgroup', async () => {
    state.raw['player.reminderSound.enabled'] = 'false'
    state.raw['player.reminderSound.start'] = false
    state.raw['player.reminderSound.alert'] = true
    state.raw['player.reminderSound.end'] = false
    const wrapper = mountPage()

    expect([...state.mappings.keys()]).toEqual(
      expect.arrayContaining([
        'player.reminderSound.enabled',
        'player.reminderSound.start',
        'player.reminderSound.alert',
        'player.reminderSound.end',
        'player.reminderSound.volume'
      ])
    )
    expect(wrapper.find('.settings-subgroup').exists()).toBe(true)
    expect(soundSwitch(wrapper, '开考铃声').attributes('aria-checked')).toBe('false')
    expect(soundSwitch(wrapper, '即将结束铃声').attributes('aria-checked')).toBe('true')
    expect(soundSwitch(wrapper, '结束铃声').attributes('aria-checked')).toBe('false')

    await soundSwitch(wrapper, '提醒铃声').trigger('click')
    expect(state.raw['player.reminderSound.enabled']).toBe(false)
    expect(wrapper.find('.settings-subgroup').exists()).toBe(false)
  })

  it('loads sound packs, persists selection, and exposes each sound name to the preview controller', async () => {
    const wrapper = mountPage()
    await flushPromises()

    const selector = wrapper.get<HTMLSelectElement>('select[aria-label="铃声方案"]')
    expect(selector.findAll('option').map((option) => option.text())).toEqual([
      'Pond 池塘',
      'Lake Bells 湖畔'
    ])
    await selector.setValue('lake-bells')
    expect(state.raw['player.reminderSound.packId']).toBe('lake-bells')
    expect(wrapper.get('[data-testid="reminder-sound-names"]').text()).toContain('晨光')
    expect(wrapper.get('[data-testid="reminder-sound-names"]').text()).toContain('涟漪')
    expect(wrapper.get('[data-testid="reminder-sound-names"]').text()).toContain('归岸')
    expect(state.controllerOptions.sourceProvider('start')).toBe(
      'examaware-sound://pack/lake-bells/start'
    )
  })

  it('falls back to Pond when a persisted package is missing', async () => {
    state.raw['player.reminderSound.packId'] = 'removed-pack'
    mountPage()
    await flushPromises()

    expect(state.raw['player.reminderSound.packId']).toBe('pond')
    expect(state.controllerOptions.sourceProvider('end')).toBe('./audio/exam-end.mp3')
  })

  it('imports and selects a package from the main-process picker', async () => {
    const imported = (await state.listPacks())[1]
    state.listPacks.mockClear()
    state.importPack.mockResolvedValue({
      canceled: false,
      pack: imported,
      packs: [
        {
          id: 'pond',
          name: 'Pond 池塘',
          builtIn: true,
          sounds: {
            start: { name: 'Begin 开始', src: './audio/exam-start.mp3' },
            alert: { name: 'Pre-end 即将结束', src: './audio/exam-alert.mp3' },
            end: { name: 'End 结束', src: './audio/exam-end.mp3' }
          }
        },
        imported
      ]
    })
    const wrapper = mountPage()
    await flushPromises()

    await wrapper.get('button[aria-label="导入铃声包"]').trigger('click')
    await flushPromises()

    expect(state.importPack).toHaveBeenCalledOnce()
    expect(state.raw['player.reminderSound.packId']).toBe('lake-bells')
    expect(state.stop).toHaveBeenCalledOnce()
  })

  it('does not let a stale initial list overwrite a completed import', async () => {
    const initialList = deferred<any[]>()
    const imported = {
      id: 'new-pack',
      name: 'New Pack',
      builtIn: false,
      version: '1.0.0',
      author: 'Test',
      sounds: {
        start: { name: 'New Start', src: 'examaware-sound://pack/new-pack/start' },
        alert: { name: 'New Alert', src: 'examaware-sound://pack/new-pack/alert' },
        end: { name: 'New End', src: 'examaware-sound://pack/new-pack/end' }
      }
    }
    const pond = (await state.listPacks())[0]
    state.listPacks.mockReset().mockReturnValueOnce(initialList.promise)
    state.importPack.mockResolvedValue({
      canceled: false,
      pack: imported,
      packs: [pond, imported]
    })
    const wrapper = mountPage()

    await wrapper.get('button[aria-label="导入铃声包"]').trigger('click')
    await flushPromises()
    expect(state.raw['player.reminderSound.packId']).toBe('new-pack')

    initialList.resolve([pond])
    await flushPromises()

    expect(state.raw['player.reminderSound.packId']).toBe('new-pack')
    expect(
      wrapper
        .get<HTMLSelectElement>('select[aria-label="铃声方案"]')
        .findAll('option')
        .map((item) => item.text())
    ).toEqual(['Pond 池塘', 'New Pack'])
  })

  it('keeps a pending initial list valid when an overlapping import fails', async () => {
    const initialList = deferred<any[]>()
    const importError = new Error('invalid package')
    const packs = await state.listPacks()
    state.listPacks.mockReset().mockReturnValueOnce(initialList.promise)
    state.importPack.mockRejectedValue(importError)
    const wrapper = mountPage()

    await wrapper.get('button[aria-label="导入铃声包"]').trigger('click')
    await flushPromises()
    expect(wrapper.get('[role="alert"]').text()).toContain(importError.message)

    initialList.resolve(packs)
    await flushPromises()

    expect(
      wrapper
        .get<HTMLSelectElement>('select[aria-label="铃声方案"]')
        .findAll('option')
        .map((item) => item.text())
    ).toEqual(['Pond 池塘', 'Lake Bells 湖畔'])
  })

  it('stops cached preview audio when replacing the currently selected package', async () => {
    state.raw['player.reminderSound.packId'] = 'lake-bells'
    const packs = await state.listPacks()
    state.importPack.mockResolvedValue({
      canceled: false,
      pack: packs[1],
      packs
    })
    const wrapper = mountPage()
    await flushPromises()
    state.stop.mockClear()

    await wrapper.get('button[aria-label="导入铃声包"]').trigger('click')
    await flushPromises()

    expect(state.raw['player.reminderSound.packId']).toBe('lake-bells')
    expect(state.stop).toHaveBeenCalledOnce()
  })

  it('keeps the current package when the import picker is canceled', async () => {
    state.raw['player.reminderSound.packId'] = 'lake-bells'
    state.importPack.mockResolvedValue({
      canceled: true,
      packs: await state.listPacks()
    })
    const wrapper = mountPage()
    await flushPromises()
    state.stop.mockClear()

    await wrapper.get('button[aria-label="导入铃声包"]').trigger('click')
    await flushPromises()

    expect(state.raw['player.reminderSound.packId']).toBe('lake-bells')
    expect(state.stop).not.toHaveBeenCalled()
  })

  it('shows an import validation error and keeps the selected package', async () => {
    const error = new Error('声音文件的 SHA-256 哈希不匹配')
    state.importPack.mockRejectedValue(error)
    const wrapper = mountPage()
    await flushPromises()

    await wrapper.get('button[aria-label="导入铃声包"]').trigger('click')
    await flushPromises()

    expect(wrapper.get('[role="alert"]').text()).toContain(error.message)
    expect(state.raw['player.reminderSound.packId']).toBeUndefined()
  })

  it.each([
    [undefined, 70],
    [0, 0],
    [1, 100],
    [0.325, 32.5],
    [-1, 0],
    [2, 100],
    ['0.4', 70],
    [Number.NaN, 70],
    [Number.POSITIVE_INFINITY, 70]
  ])('normalizes stored volume %p to %p percent', (stored, expected) => {
    if (stored !== undefined) state.raw['player.reminderSound.volume'] = stored
    const wrapper = mountPage()
    expect(wrapper.get('input[type="range"][aria-label="铃声音量百分比"]').element).toHaveProperty(
      'value',
      String(expected)
    )
    expect(wrapper.get('[data-testid="reminder-volume-value"]').text()).toBe(`${expected}%`)
  })

  it('persists slider edits as stable normalized 0..1 values', async () => {
    const wrapper = mountPage()
    const slider = wrapper.get('input[type="range"][aria-label="铃声音量百分比"]')

    await slider.setValue('33')
    expect(state.raw['player.reminderSound.volume']).toBe(0.33)
    expect(wrapper.get('[data-testid="reminder-volume-value"]').text()).toBe('33%')
    await slider.setValue('-5')
    expect(state.raw['player.reminderSound.volume']).toBe(0)
    await slider.setValue('120')
    expect(state.raw['player.reminderSound.volume']).toBe(1)
  })

  it('labels the actual native range and numeric inputs rather than component wrappers', () => {
    const wrapper = mountPage()
    const range = wrapper.get('input[type="range"][aria-label="铃声音量百分比"]')
    const number = wrapper.get('input[type="number"][aria-label="铃声音量数值"]')

    expect(range.attributes('min')).toBe('0')
    expect(range.attributes('max')).toBe('100')
    expect(number.attributes('min')).toBe('0')
    expect(number.attributes('max')).toBe('100')
  })

  it('uses a fractional step that keeps displayed and edited decimal percentages valid', async () => {
    state.raw['player.reminderSound.volume'] = 0.325
    const wrapper = mountPage()
    const range = wrapper.get<HTMLInputElement>('input[type="range"][aria-label="铃声音量百分比"]')
    const number = wrapper.get<HTMLInputElement>('input[type="number"][aria-label="铃声音量数值"]')

    expect(range.element.value).toBe('32.5')
    expect(range.element.validity.stepMismatch).toBe(false)
    expect(number.element.value).toBe('32.5')
    expect(number.element.validity.stepMismatch).toBe(false)

    number.element.value = '12.345'
    await number.trigger('change')
    expect(number.element.validity.stepMismatch).toBe(false)
    expect(state.raw['player.reminderSound.volume']).toBe(0.12345)
  })

  it('persists all three switches independently', async () => {
    const wrapper = mountPage()
    for (const [title, key] of [
      ['开考铃声', 'player.reminderSound.start'],
      ['即将结束铃声', 'player.reminderSound.alert'],
      ['结束铃声', 'player.reminderSound.end']
    ]) {
      await soundSwitch(wrapper, title).trigger('click')
      expect(state.raw[key]).toBe(false)
    }
  })

  it('gives every reminder switch a unique accessible name on the actual switch control', () => {
    const wrapper = mountPage()
    for (const label of ['启用提醒铃声', '启用开考铃声', '启用即将结束铃声', '启用结束铃声']) {
      expect(wrapper.get(`[role="switch"][aria-label="${label}"]`).exists()).toBe(true)
    }
  })

  it('makes reminder switches keyboard focusable and operable with Enter and Space', async () => {
    const wrapper = mountPage()
    const master = wrapper.get('[role="switch"][aria-label="启用提醒铃声"]')

    expect(master.attributes('tabindex')).toBe('0')
    await master.trigger('keydown', { key: 'Enter' })
    expect(state.raw['player.reminderSound.enabled']).toBe(false)
    await master.trigger('keydown', { key: ' ' })
    expect(state.raw['player.reminderSound.enabled']).toBe(true)
  })

  it('preserves semantics and single keyboard toggles with the real TDesign switch', async () => {
    const wrapper = mountPage({ realSwitch: true })
    for (const label of ['启用提醒铃声', '启用开考铃声', '启用即将结束铃声', '启用结束铃声']) {
      const control = wrapper.get(`[role="switch"][aria-label="${label}"]`)
      expect(control.classes()).toContain('t-switch')
      expect(control.attributes('tabindex')).toBe('0')
      expect(control.attributes('aria-checked')).toBe('true')
    }

    const master = wrapper.get('[role="switch"][aria-label="启用提醒铃声"]')
    await master.trigger('keydown', { key: 'Enter' })
    expect(state.raw['player.reminderSound.enabled']).toBe(false)
    expect(state.writes.get('player.reminderSound.enabled')).toBe(1)
    await master.trigger('keydown', { key: ' ' })
    expect(state.raw['player.reminderSound.enabled']).toBe(true)
    expect(state.writes.get('player.reminderSound.enabled')).toBe(2)
  })

  it('renders focusable labelled preview buttons and reveals tooltips on hover and focus', async () => {
    const wrapper = mountPage()
    for (const label of ['试听开考铃声', '试听即将结束铃声', '试听结束铃声']) {
      const button = previewButton(wrapper, label)
      expect(button.element.tagName).toBe('BUTTON')
      expect(button.attributes('type')).toBe('button')
      await button.trigger('mouseenter')
      expect(wrapper.get('[role="tooltip"]').text()).toBe(label)
      await button.trigger('mouseleave')
      expect(wrapper.find('[role="tooltip"]').exists()).toBe(false)
      await button.trigger('focus')
      expect(wrapper.get('[role="tooltip"]').text()).toBe(label)
      await button.trigger('blur')
    }
  })

  it('keeps the focused tooltip through hover interleavings and restores it after hovering another kind', async () => {
    const wrapper = mountPage()
    const start = previewButton(wrapper, '试听开考铃声')
    const end = previewButton(wrapper, '试听结束铃声')

    await start.trigger('focus')
    await start.trigger('mouseenter')
    await start.trigger('mouseleave')
    expect(wrapper.get('[role="tooltip"]').text()).toBe('试听开考铃声')
    expect(start.attributes('aria-describedby')).toBe('sound-preview-tooltip-start')

    await end.trigger('mouseenter')
    expect(wrapper.get('[role="tooltip"]').text()).toBe('试听结束铃声')
    expect(end.attributes('aria-describedby')).toBe('sound-preview-tooltip-end')
    expect(start.attributes('aria-describedby')).toBeUndefined()
    await end.trigger('mouseleave')
    expect(wrapper.get('[role="tooltip"]').text()).toBe('试听开考铃声')
    expect(start.attributes('aria-describedby')).toBe('sound-preview-tooltip-start')

    await start.trigger('blur')
    expect(wrapper.find('[role="tooltip"]').exists()).toBe(false)
    expect(start.attributes('aria-describedby')).toBeUndefined()
  })

  it.each([
    ['0', 0],
    ['100', 1],
    ['32.5', 0.325],
    ['-5', 0],
    ['120', 1]
  ])('commits numeric volume %s as normalized persisted value %p', async (input, persisted) => {
    const wrapper = mountPage()
    await flushPromises()
    const number = wrapper.get<HTMLInputElement>('input[type="number"][aria-label="铃声音量数值"]')

    number.element.value = input
    await number.trigger('input')
    expect(state.raw['player.reminderSound.volume']).toBeUndefined()
    await number.trigger('change')
    expect(state.raw['player.reminderSound.volume']).toBe(persisted)
    expect(number.element.value).toBe(String(persisted * 100))
  })

  it('keeps the last valid volume when numeric input is empty or invalid', async () => {
    state.raw['player.reminderSound.volume'] = 0.42
    const wrapper = mountPage()
    const number = wrapper.get<HTMLInputElement>('input[type="number"][aria-label="铃声音量数值"]')

    number.element.value = ''
    await number.trigger('input')
    await number.trigger('change')
    expect(state.raw['player.reminderSound.volume']).toBe(0.42)
    expect(number.element.value).toBe('42')

    number.element.value = 'not-a-number'
    await number.trigger('change')
    expect(state.raw['player.reminderSound.volume']).toBe(0.42)
    expect(number.element.value).toBe('42')
  })

  it('previews a disabled kind at the current normalized volume', async () => {
    state.raw['player.reminderSound.start'] = false
    state.raw['player.reminderSound.volume'] = 0.42
    const wrapper = mountPage()

    await previewButton(wrapper, '试听开考铃声').trigger('click')
    expect(state.preview).toHaveBeenCalledWith('start', { volume: 0.42 })
  })

  it('marks only the newest starting preview busy and clears terminal failure results', async () => {
    const first = deferred<any>()
    const second = deferred<any>()
    state.preview.mockReturnValueOnce(first.promise).mockReturnValueOnce(second.promise)
    const wrapper = mountPage()
    const start = previewButton(wrapper, '试听开考铃声')
    const end = previewButton(wrapper, '试听结束铃声')

    await start.trigger('click')
    expect(start.attributes('aria-busy')).toBe('true')
    expect(start.attributes('disabled')).toBeDefined()
    expect(end.attributes('disabled')).toBeUndefined()
    await end.trigger('click')
    expect(start.attributes('aria-busy')).toBe('false')
    expect(end.attributes('aria-busy')).toBe('true')

    first.resolve({ ok: false, kind: 'start', reason: 'superseded' })
    await first.promise
    await nextTick()
    expect(end.attributes('aria-busy')).toBe('true')
    second.resolve({ ok: false, kind: 'end', reason: 'playback-error' })
    await second.promise
    await nextTick()
    expect(end.attributes('aria-busy')).toBe('false')
  })

  it('does not let an older same-kind completion clear a newer request', async () => {
    const first = deferred<any>()
    const second = deferred<any>()
    state.preview.mockReturnValueOnce(first.promise).mockReturnValueOnce(second.promise)
    const wrapper = mountPage()
    const button = previewButton(wrapper, '试听开考铃声')

    await button.trigger('click')
    // Calling the handler directly models a new start arriving before the old promise settles.
    void (wrapper.vm as any).previewSound('start')
    first.resolve({ ok: false, kind: 'start', reason: 'superseded' })
    await first.promise
    await nextTick()
    expect(button.attributes('aria-busy')).toBe('true')
    second.resolve({ ok: true, kind: 'start' })
    await second.promise
    await nextTick()
    expect(button.attributes('aria-busy')).toBe('false')
  })

  it('stops and resets a pending preview exactly once when the master switch turns off', async () => {
    const pending = deferred<any>()
    state.preview.mockReturnValueOnce(pending.promise)
    const wrapper = mountPage()
    const start = previewButton(wrapper, '试听开考铃声')

    await start.trigger('focus')
    await start.trigger('mouseenter')
    await start.trigger('click')
    expect(start.attributes('aria-busy')).toBe('true')
    expect(wrapper.get('[role="tooltip"]').text()).toBe('试听开考铃声')

    await soundSwitch(wrapper, '提醒铃声').trigger('click')
    expect(state.stop).toHaveBeenCalledTimes(1)
    expect(wrapper.find('.settings-subgroup').exists()).toBe(false)

    await soundSwitch(wrapper, '提醒铃声').trigger('click')
    const cleanStart = previewButton(wrapper, '试听开考铃声')
    expect(cleanStart.attributes('aria-busy')).toBe('false')
    expect(wrapper.find('[role="tooltip"]').exists()).toBe(false)

    pending.resolve({ ok: true, kind: 'start' })
    await pending.promise
    await nextTick()
    expect(cleanStart.attributes('aria-busy')).toBe('false')
    expect(wrapper.find('[role="tooltip"]').exists()).toBe(false)
    expect(state.stop).toHaveBeenCalledTimes(1)
  })

  it('stops an already-started preview on disable without repeating for unrelated changes', async () => {
    state.preview.mockResolvedValueOnce({ ok: true, kind: 'end' })
    const wrapper = mountPage()

    await previewButton(wrapper, '试听结束铃声').trigger('click')
    await nextTick()
    expect(previewButton(wrapper, '试听结束铃声').attributes('aria-busy')).toBe('false')

    await soundSwitch(wrapper, '提醒铃声').trigger('click')
    expect(state.stop).toHaveBeenCalledTimes(1)
    state.raw['player.reminderSound.volume'] = 0.25
    await nextTick()
    expect(state.stop).toHaveBeenCalledTimes(1)

    await soundSwitch(wrapper, '提醒铃声').trigger('click')
    await previewButton(wrapper, '试听结束铃声').trigger('click')
    expect(state.preview).toHaveBeenCalledTimes(2)
    expect(state.stop).toHaveBeenCalledTimes(1)
  })

  it('does not stop on an initially disabled mount', () => {
    state.raw['player.reminderSound.enabled'] = false
    mountPage()
    expect(state.stop).not.toHaveBeenCalled()
  })

  it('clears loading and reports unexpected preview promise rejection without leaking it', async () => {
    const error = new Error('preview rejected unexpectedly')
    state.preview.mockRejectedValueOnce(error)
    const warn = vi.spyOn(console, 'warn').mockImplementation(() => undefined)
    const wrapper = mountPage()
    const button = previewButton(wrapper, '试听即将结束铃声')

    await button.trigger('click')
    await Promise.resolve()
    await nextTick()
    expect(button.attributes('aria-busy')).toBe('false')
    expect(warn).toHaveBeenCalledWith(
      '试听提醒铃声失败',
      expect.objectContaining({ kind: 'alert', error })
    )
  })

  it('forwards controller failures to a contextual reporter', () => {
    const warn = vi.spyOn(console, 'warn').mockImplementation(() => undefined)
    mountPage()
    const failure = { kind: 'end', phase: 'play', error: new Error('blocked') }

    state.reporter?.(failure)
    expect(warn).toHaveBeenCalledWith('提醒铃声试听播放失败', failure)
  })

  it('disposes the controller and invalidates pending UI completions on unmount', async () => {
    const pending = deferred<any>()
    state.preview.mockReturnValueOnce(pending.promise)
    const wrapper = mountPage()
    await previewButton(wrapper, '试听结束铃声').trigger('click')

    wrapper.unmount()
    expect(state.dispose).toHaveBeenCalledTimes(1)
    pending.resolve({ ok: true, kind: 'end' })
    await pending.promise
    await Promise.resolve()
    expect(state.dispose).toHaveBeenCalledTimes(1)
  })
})
