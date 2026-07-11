import { beforeEach, describe, expect, it, vi } from 'vitest'

const readFileSync = vi.fn()
const writeFile = vi.fn()
const rename = vi.fn()

vi.mock('fs', () => ({
  default: { readFileSync },
  readFileSync,
  promises: {
    mkdir: vi.fn().mockResolvedValue(undefined),
    writeFile,
    rename
  }
}))

describe('FilePluginPreferenceStore', () => {
  beforeEach(() => {
    vi.resetModules()
    readFileSync.mockReset().mockImplementation(() => {
      throw new Error('missing')
    })
    writeFile.mockReset().mockResolvedValue(undefined)
    rename.mockReset().mockResolvedValue(undefined)
  })

  it('does not share default config objects between store instances', async () => {
    const { FilePluginPreferenceStore } = await import('../../../src/main/plugin/preferences')
    const first = new FilePluginPreferenceStore('/tmp/first/preferences.json')
    const second = new FilePluginPreferenceStore('/tmp/second/preferences.json')

    await first.setConfig('plugin-a', { value: 1 })

    expect(second.getConfig('plugin-a')).toBeUndefined()
    expect(second.isEnabled('plugin-a')).toBeUndefined()
  })

  it('persists a mutation made while another write is active', async () => {
    let releaseFirstWrite!: () => void
    writeFile
      .mockImplementationOnce(() => new Promise<void>((resolve) => (releaseFirstWrite = resolve)))
      .mockResolvedValueOnce(undefined)
    const { FilePluginPreferenceStore } = await import('../../../src/main/plugin/preferences')
    const store = new FilePluginPreferenceStore('/tmp/preferences.json')

    const firstWrite = store.setConfig('plugin-a', { value: 1 })
    await vi.waitFor(() => expect(writeFile).toHaveBeenCalledOnce())
    const secondWrite = store.setConfig('plugin-a', { value: 2 })
    releaseFirstWrite()
    await Promise.all([firstWrite, secondWrite])

    expect(writeFile).toHaveBeenCalledTimes(2)
    expect(writeFile.mock.calls[0][1]).toContain('"value": 1')
    expect(writeFile.mock.calls[1][1]).toContain('"value": 2')
  })

  it('serializes concurrent changes to enabled state and config', async () => {
    let releaseFirstWrite!: () => void
    writeFile
      .mockImplementationOnce(() => new Promise<void>((resolve) => (releaseFirstWrite = resolve)))
      .mockResolvedValueOnce(undefined)
    const { FilePluginPreferenceStore } = await import('../../../src/main/plugin/preferences')
    const store = new FilePluginPreferenceStore('/tmp/preferences.json')

    const enabledWrite = store.setEnabled('plugin-a', true)
    await vi.waitFor(() => expect(writeFile).toHaveBeenCalledOnce())
    const configWrite = store.setConfig('plugin-a', { nested: { enabled: true } })
    releaseFirstWrite()
    await Promise.all([enabledWrite, configWrite])

    const latest = writeFile.mock.calls.at(-1)?.[1] as string
    expect(latest).toContain('"plugin-a": true')
    expect(latest).toContain('"nested"')
  })
})
