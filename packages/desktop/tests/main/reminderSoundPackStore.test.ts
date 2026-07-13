import { createHash } from 'node:crypto'
import { mkdir, readFile, rm } from 'node:fs/promises'
import { join } from 'node:path'
import AdmZip from 'adm-zip'
import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import {
  MAX_REMINDER_SOUND_PACK_ENTRIES,
  ReminderSoundPackStore
} from '../../src/main/reminderSoundPackStore'

const tempRoot = join(process.cwd(), '.tmp', 'reminder-sound-pack-tests')
const packsRoot = join(tempRoot, 'packs')

const wav = (label: string) => {
  const payload = Buffer.from(label)
  const bytes = Buffer.alloc(44 + payload.length)
  bytes.write('RIFF', 0)
  bytes.writeUInt32LE(bytes.length - 8, 4)
  bytes.write('WAVEfmt ', 8)
  bytes.writeUInt32LE(16, 16)
  bytes.writeUInt16LE(1, 20)
  bytes.writeUInt16LE(1, 22)
  bytes.writeUInt32LE(8000, 24)
  bytes.writeUInt32LE(16000, 28)
  bytes.writeUInt16LE(2, 32)
  bytes.writeUInt16LE(16, 34)
  bytes.write('data', 36)
  bytes.writeUInt32LE(payload.length, 40)
  payload.copy(bytes, 44)
  return bytes
}

const sha256 = (value: Buffer) => createHash('sha256').update(value).digest('hex')

type PackageOverrides = {
  manifest?: Record<string, unknown>
  paths?: Partial<Record<'start' | 'alert' | 'end', string>>
  bytes?: Partial<Record<'start' | 'alert' | 'end', Buffer>>
  extraEntries?: Array<{ path: string; bytes?: Buffer }>
}

const writePackage = async (name: string, overrides: PackageOverrides = {}) => {
  await mkdir(tempRoot, { recursive: true })
  const filePath = join(tempRoot, name)
  const paths = {
    start: 'audio/start.wav',
    alert: 'audio/alert.wav',
    end: 'audio/end.wav',
    ...overrides.paths
  }
  const bytes = {
    start: wav('start'),
    alert: wav('alert'),
    end: wav('end'),
    ...overrides.bytes
  }
  const manifest = {
    schemaVersion: 1,
    id: 'lake-bells',
    name: 'Lake Bells 湖畔',
    version: '1.2.0',
    author: 'ExamAware Test',
    sounds: {
      start: { name: '晨光', path: paths.start, sha256: sha256(bytes.start) },
      alert: { name: '涟漪', path: paths.alert, sha256: sha256(bytes.alert) },
      end: { name: '归岸', path: paths.end, sha256: sha256(bytes.end) }
    },
    ...overrides.manifest
  }
  const zip = new AdmZip()
  zip.addFile('manifest.json', Buffer.from(JSON.stringify(manifest)))
  for (const kind of ['start', 'alert', 'end'] as const) {
    zip.addFile(paths[kind], bytes[kind])
  }
  for (const entry of overrides.extraEntries ?? []) {
    zip.addFile(entry.path, entry.bytes ?? Buffer.alloc(0))
  }
  zip.writeZip(filePath)
  return filePath
}

describe('ReminderSoundPackStore', () => {
  beforeEach(async () => {
    await rm(tempRoot, { recursive: true, force: true })
  })

  afterEach(async () => {
    await rm(tempRoot, { recursive: true, force: true })
  })

  it('installs a valid package atomically and lists it beside Pond', async () => {
    const filePath = await writePackage('lake-bells.ea2r')
    const store = new ReminderSoundPackStore(packsRoot)

    const installed = await store.install(filePath)

    expect(installed).toMatchObject({
      id: 'lake-bells',
      name: 'Lake Bells 湖畔',
      version: '1.2.0',
      author: 'ExamAware Test',
      builtIn: false,
      sounds: {
        start: { name: '晨光' },
        alert: { name: '涟漪' },
        end: { name: '归岸' }
      }
    })
    expect(installed.sounds.start.src).toBe('examaware-sound://pack/lake-bells/start')
    await expect(readFile(join(packsRoot, 'lake-bells', 'audio/start.wav'))).resolves.toEqual(
      wav('start')
    )
    await expect(store.list()).resolves.toEqual([
      expect.objectContaining({ id: 'pond', name: 'Pond 池塘', builtIn: true }),
      expect.objectContaining({ id: 'lake-bells', builtIn: false })
    ])
    expect(store.resolveAsset('lake-bells', 'alert')).toBe(
      join(packsRoot, 'lake-bells', 'audio/alert.wav')
    )
  })

  it('rejects a hash mismatch before creating an installed package', async () => {
    const filePath = await writePackage('bad-hash.ea2r', {
      manifest: {
        sounds: {
          start: { name: '晨光', path: 'audio/start.wav', sha256: '0'.repeat(64) },
          alert: { name: '涟漪', path: 'audio/alert.wav', sha256: sha256(wav('alert')) },
          end: { name: '归岸', path: 'audio/end.wav', sha256: sha256(wav('end')) }
        }
      }
    })
    const store = new ReminderSoundPackStore(packsRoot)

    await expect(store.install(filePath)).rejects.toThrow(/SHA-256|哈希/)
    await expect(store.list()).resolves.toEqual([
      expect.objectContaining({ id: 'pond', builtIn: true })
    ])
  })

  it.each(['../escape.wav', '/absolute.wav', 'audio\\escape.wav'])(
    'rejects unsafe archive entry %s',
    async (unsafePath) => {
      const filePath = await writePackage('unsafe.ea2r', {
        extraEntries: [{ path: unsafePath, bytes: wav('escape') }]
      })
      const store = new ReminderSoundPackStore(packsRoot)

      await expect(store.install(filePath)).rejects.toThrow(/路径|条目/)
      await expect(readFile(join(tempRoot, 'escape.wav'))).rejects.toThrow()
    }
  )

  it('rejects manifests that reuse one file for multiple sounds', async () => {
    const shared = wav('shared')
    const filePath = await writePackage('duplicate-reference.ea2r', {
      paths: { alert: 'audio/start.wav' },
      bytes: { start: shared, alert: shared }
    })
    const store = new ReminderSoundPackStore(packsRoot)

    await expect(store.install(filePath)).rejects.toThrow(/重复|不同的声音文件/)
  })

  it('rejects an audio extension whose bytes do not match the format', async () => {
    const fake = Buffer.from('this is not wave audio')
    const filePath = await writePackage('fake-audio.ea2r', { bytes: { start: fake } })
    const store = new ReminderSoundPackStore(packsRoot)

    await expect(store.install(filePath)).rejects.toThrow(/格式/)
  })

  it('rejects archives over the entry limit', async () => {
    const extraEntries = Array.from({ length: MAX_REMINDER_SOUND_PACK_ENTRIES }, (_, index) => ({
      path: `extra/${index}.txt`
    }))
    const filePath = await writePackage('too-many.ea2r', { extraEntries })
    const store = new ReminderSoundPackStore(packsRoot)

    await expect(store.install(filePath)).rejects.toThrow(/条目.*过多/)
  })

  it('keeps the previous installed package intact when a replacement is invalid', async () => {
    const store = new ReminderSoundPackStore(packsRoot)
    await store.install(await writePackage('valid.ea2r'))
    const previous = await readFile(join(packsRoot, 'lake-bells', 'audio/start.wav'))
    const invalid = await writePackage('invalid-update.ea2r', {
      bytes: { start: Buffer.from('invalid') }
    })

    await expect(store.install(invalid)).rejects.toThrow()
    await expect(readFile(join(packsRoot, 'lake-bells', 'audio/start.wav'))).resolves.toEqual(
      previous
    )
  })
})
