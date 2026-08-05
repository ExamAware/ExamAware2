import { execFile } from 'node:child_process'
import { promisify } from 'node:util'
import type { StoredControlRegistration } from './controlCredentialStore'

const execFileAsync = promisify(execFile)
const REGISTRY_KEY = 'HKCU\\Software\\ExamAware\\ControlDevice'
const REGISTRY_VALUE = 'data'

export async function writeControlRegistry(record: StoredControlRegistration): Promise<void> {
  if (process.platform !== 'win32') return
  try {
    await execFileAsync('reg.exe', [
      'add',
      REGISTRY_KEY,
      '/v',
      REGISTRY_VALUE,
      '/t',
      'REG_SZ',
      '/d',
      JSON.stringify(record),
      '/f'
    ])
  } catch {}
}

export async function readControlRegistry(): Promise<StoredControlRegistration | null> {
  if (process.platform !== 'win32') return null
  try {
    const { stdout } = await execFileAsync('reg.exe', ['query', REGISTRY_KEY, '/v', REGISTRY_VALUE])
    const match = String(stdout).match(/^\s*data\s+REG_SZ\s+(.+)$/im)
    if (!match) return null
    const parsed = JSON.parse(match[1]) as unknown
    return parsed && typeof parsed === 'object' && !Array.isArray(parsed)
      ? (parsed as StoredControlRegistration)
      : null
  } catch {
    return null
  }
}

export async function deleteControlRegistry(): Promise<void> {
  if (process.platform !== 'win32') return
  try {
    await execFileAsync('reg.exe', ['delete', REGISTRY_KEY, '/f'])
  } catch {}
}
