import { mkdtemp, mkdir, readFile, rm, writeFile } from 'node:fs/promises'
import { tmpdir } from 'node:os'
import path from 'node:path'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

const state = vi.hoisted(() => ({
  directory: '',
  watch: vi.fn(),
  watchCallback: undefined as ((eventType: string, fileName: string) => void) | undefined,
  close: vi.fn(),
  getConfig: vi.fn(),
  setConfig: vi.fn(),
  warn: vi.fn()
}))

vi.mock('electron', () => ({
  app: { getPath: () => state.directory }
}))

vi.mock('node:fs', async (importOriginal) => ({
  ...(await importOriginal<typeof import('node:fs')>()),
  watch: state.watch
}))

vi.mock('../../../src/main/config/configStore', () => ({
  getConfig: state.getConfig,
  setConfig: state.setConfig
}))

vi.mock('../../../src/main/logging/logger', () => ({
  appLogger: { warn: state.warn }
}))

import {
  loadManagedValues,
  saveManagedValues,
  startManagedConfigWatch
} from '../../../src/main/control/managedControlStore'

async function waitForDebounce(): Promise<void> {
  await new Promise((resolve) => setTimeout(resolve, 350))
}

describe('managedControlStore', () => {
  beforeEach(async () => {
    vi.clearAllMocks()
    state.directory = await mkdtemp(path.join(tmpdir(), 'examaware-managed-control-'))
    state.watchCallback = undefined
    state.watch.mockImplementation(
      (_directory: string, callback: (eventType: string, fileName: string) => void) => {
        state.watchCallback = callback
        return { on: vi.fn().mockReturnThis(), close: state.close }
      }
    )
    state.getConfig.mockReturnValue(undefined)
  })

  afterEach(async () => {
    await rm(state.directory, { recursive: true, force: true })
  })

  it('saves and loads managed values atomically', async () => {
    const values = { 'control.preventUnbind': true, 'control.preventQuit': false }

    await saveManagedValues(values)

    await expect(loadManagedValues()).resolves.toEqual(values)
  })

  it('removes persisted managed values when the replacement snapshot is empty', async () => {
    await saveManagedValues({ 'control.preventUnbind': true })

    await saveManagedValues({})

    await expect(loadManagedValues()).resolves.toEqual({})
    await expect(
      readFile(path.join(state.directory, 'managed-control.json'), 'utf8')
    ).rejects.toMatchObject({
      code: 'ENOENT'
    })
  })

  it('repairs externally changed managed config values', async () => {
    await saveManagedValues({ 'control.preventUnbind': true })
    await writeFile(
      path.join(state.directory, 'config.json'),
      JSON.stringify({ control: { preventUnbind: false } }),
      'utf8'
    )
    const onTamper = vi.fn()
    const dispose = startManagedConfigWatch(onTamper)

    state.watchCallback?.('change', 'config.json')
    await waitForDebounce()
    await vi.waitFor(() => {
      expect(state.setConfig).toHaveBeenCalledWith('control.preventUnbind', true)
    })
    expect(onTamper).toHaveBeenCalledWith('config.json 受管键被篡改')
    dispose()
  })

  it('rebuilds a deleted managed file from the last authoritative values', async () => {
    await saveManagedValues({ 'control.preventQuit': true })
    await rm(path.join(state.directory, 'managed-control.json'))
    const onTamper = vi.fn()
    const dispose = startManagedConfigWatch(onTamper)

    state.watchCallback?.('rename', 'managed-control.json')
    await waitForDebounce()
    await vi.waitFor(async () => {
      const restored = JSON.parse(
        await readFile(path.join(state.directory, 'managed-control.json'), 'utf8')
      )
      expect(restored).toEqual({ 'control.preventQuit': true })
    })
    expect(onTamper).toHaveBeenCalledWith('managed-control.json 被删除')
    dispose()
  })
})
