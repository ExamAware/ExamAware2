import { dialog, type OpenDialogOptions } from 'electron'
import { promises as fs } from 'node:fs'
import { ipcChannels } from '../../../shared/ipc/channels'
import { fileApi } from '../../fileSystem/fileApi'
import { appLogger } from '../../logging/logger'
import type { IpcRegistrar } from '../ipcRegistrar'

const EXAM_FILE_FILTERS = [
  { name: 'ExamAware 档案文件', extensions: ['ea2'] },
  { name: 'JSON 文件', extensions: ['json'] },
  { name: '所有文件', extensions: ['*'] }
]

export function registerFileHandlers(ipc: IpcRegistrar) {
  ipc.handle(ipcChannels.files.selectExam, () => openFile())
  ipc.handle(ipcChannels.files.open, (_event, options?: OpenDialogOptions) => openFile(options))
  ipc.handle(ipcChannels.files.read, async (_event, filePath) => {
    try {
      return await fileApi.readFile(filePath)
    } catch (error) {
      appLogger.error('Error reading file', error as Error)
      return null
    }
  })
  ipc.handle(ipcChannels.files.write, async (_event, filePath, content) => {
    try {
      await fileApi.writeFile(filePath, content)
      return true
    } catch (error) {
      appLogger.error('Error saving file', error as Error)
      return false
    }
  })
  ipc.handle(ipcChannels.files.saveAs, async () => {
    const result = await dialog.showSaveDialog({
      filters: EXAM_FILE_FILTERS,
      defaultPath: 'untitled.ea2'
    })
    return result.canceled ? null : result.filePath
  })
  ipc.handle(ipcChannels.files.openMany, async (_event, options) => {
    const result = await dialog.showOpenDialog({
      ...options,
      properties: options?.properties ?? ['openFile'],
      filters: options?.filters ?? EXAM_FILE_FILTERS
    })
    return result.canceled ? [] : result.filePaths
  })
  ipc.handle(ipcChannels.files.save, async (_event, options) => {
    const result = await dialog.showSaveDialog(options ?? {})
    return result.canceled ? undefined : result.filePath
  })
  ipc.handle(ipcChannels.files.readText, (_event, filePath) => fs.readFile(filePath, 'utf8'))
  ipc.handle(
    ipcChannels.files.readBytes,
    async (_event, filePath) => new Uint8Array(await fs.readFile(filePath))
  )
  ipc.handle(ipcChannels.files.writeText, async (_event, filePath, content) => {
    await fs.writeFile(filePath, content, 'utf8')
  })
  ipc.handle(ipcChannels.files.writeBytes, async (_event, filePath, content) => {
    await fs.writeFile(filePath, content)
  })
  ipc.handle(ipcChannels.files.exists, async (_event, filePath) =>
    fs.access(filePath).then(
      () => true,
      () => false
    )
  )
  ipc.handle(ipcChannels.files.stat, async (_event, filePath) => {
    const value = await fs.stat(filePath).catch(() => undefined)
    if (!value) return undefined
    return {
      path: filePath,
      size: value.size,
      modifiedAt: value.mtimeMs,
      kind: value.isFile()
        ? ('file' as const)
        : value.isDirectory()
          ? ('directory' as const)
          : ('other' as const)
    }
  })
}

async function openFile(options?: OpenDialogOptions) {
  const result = await dialog.showOpenDialog({
    ...options,
    properties: options?.properties ?? ['openFile'],
    filters: options?.filters ?? EXAM_FILE_FILTERS
  })
  return result.canceled ? null : result.filePaths[0]
}
