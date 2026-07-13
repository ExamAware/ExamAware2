import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

const writeFile = vi.fn()

vi.mock('electron', () => ({
  app: { getPath: () => '/tmp/examaware-test' },
  BrowserWindow: { getAllWindows: () => [] }
}))

vi.mock('fs', () => ({
  existsSync: () => false,
  readFileSync: vi.fn(),
  promises: {
    mkdir: vi.fn().mockResolvedValue(undefined),
    writeFile
  }
}))

vi.mock('../../src/main/logging/winstonLogger', () => ({
  appLogger: { error: vi.fn() }
}))

describe('config persistence', () => {
  beforeEach(() => {
    vi.useFakeTimers()
    vi.resetModules()
    writeFile.mockReset()
  })

  afterEach(() => {
    vi.useRealTimers()
    vi.restoreAllMocks()
  })

  it('serializes writes and flushes a mutation made during an active write', async () => {
    let releaseFirstWrite!: () => void
    writeFile
      .mockImplementationOnce(() => new Promise<void>((resolve) => (releaseFirstWrite = resolve)))
      .mockResolvedValueOnce(undefined)
    const { flushConfig, setConfig } = await import('../../src/main/configStore')

    setConfig('value', 'value1')
    await vi.advanceTimersByTimeAsync(100)
    expect(writeFile).toHaveBeenCalledTimes(1)
    expect(writeFile.mock.calls[0][1]).toContain('value1')

    setConfig('value', 'value2')
    const flushed = flushConfig()
    releaseFirstWrite()
    await flushed

    expect(writeFile).toHaveBeenCalledTimes(2)
    expect(writeFile.mock.calls[1][1]).toContain('value2')
  })

  it('rejects a failed flush without retrying until a later explicit flush', async () => {
    const diskError = new Error('disk error')
    writeFile.mockRejectedValueOnce(diskError).mockResolvedValueOnce(undefined)
    const { flushConfig, setConfig } = await import('../../src/main/configStore')

    setConfig('value', 'latest')
    const failedFlush = flushConfig()
    await expect(failedFlush).rejects.toBe(diskError)
    expect(writeFile).toHaveBeenCalledTimes(1)

    await vi.advanceTimersByTimeAsync(1_000)
    expect(writeFile).toHaveBeenCalledTimes(1)

    await flushConfig()
    expect(writeFile).toHaveBeenCalledTimes(2)
    expect(writeFile.mock.calls[1][1]).toContain('latest')
  })

  it('cancels a debounce scheduled during an active write when that write fails', async () => {
    const diskError = new Error('disk error')
    let rejectFirstWrite!: (error: Error) => void
    writeFile
      .mockImplementationOnce(
        () => new Promise<void>((_resolve, reject) => (rejectFirstWrite = reject))
      )
      .mockResolvedValueOnce(undefined)
    const { flushConfig, setConfig } = await import('../../src/main/configStore')

    setConfig('value', 'value1')
    await vi.advanceTimersByTimeAsync(100)
    setConfig('value', 'value2')
    rejectFirstWrite(diskError)
    await Promise.resolve()
    await Promise.resolve()

    await vi.advanceTimersByTimeAsync(1_000)
    expect(writeFile).toHaveBeenCalledTimes(1)

    await flushConfig()
    expect(writeFile).toHaveBeenCalledTimes(2)
    expect(writeFile.mock.calls[1][1]).toContain('value2')
  })
})
