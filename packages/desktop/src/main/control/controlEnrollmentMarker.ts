import { execFile } from 'node:child_process'
import { mkdir, rm, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { promisify } from 'node:util'
import { appLogger } from '../logging/logger'

const execFileAsync = promisify(execFile)
const REGISTRY_KEY = 'HKCU\\Software\\ExamAware\\ControlEnrolled'
const MARKER_DIRECTORY = path.join(process.env.ProgramData ?? 'C:\\ProgramData', 'ExamAware')
const MARKER_PATH = path.join(MARKER_DIRECTORY, 'control-device.json')

interface EnrollmentMarkerRegistration {
  deviceId: string
  serverUrl: string
  enrolledAt: string
}

export async function writeEnrollmentMarker(
  registration: EnrollmentMarkerRegistration
): Promise<void> {
  if (process.platform !== 'win32') return
  const record = {
    deviceId: registration.deviceId,
    serverUrl: registration.serverUrl,
    enrolledAt: registration.enrolledAt
  }
  const serialized = JSON.stringify(record)

  // Windows permits standard users to create application subdirectories under ProgramData;
  // the elevated uninstaller can then read this machine-visible marker.
  try {
    await mkdir(MARKER_DIRECTORY, { recursive: true })
    await writeFile(MARKER_PATH, serialized, { encoding: 'utf8', mode: 0o600 })
  } catch (error) {
    appLogger.warn('[control] failed to write ProgramData enrollment marker', error)
  }

  try {
    await execFileAsync('reg.exe', [
      'add',
      REGISTRY_KEY,
      '/v',
      'data',
      '/t',
      'REG_SZ',
      '/d',
      serialized,
      '/f'
    ])
  } catch (error) {
    appLogger.warn('[control] failed to write enrollment registry marker', error)
  }
}

export async function clearEnrollmentMarker(): Promise<void> {
  if (process.platform !== 'win32') return
  try {
    await rm(MARKER_PATH, { force: true })
  } catch (error) {
    appLogger.warn('[control] failed to clear ProgramData enrollment marker', error)
  }
  try {
    await execFileAsync('reg.exe', ['delete', REGISTRY_KEY, '/f'])
  } catch (error) {
    appLogger.warn('[control] failed to clear enrollment registry marker', error)
  }
}
