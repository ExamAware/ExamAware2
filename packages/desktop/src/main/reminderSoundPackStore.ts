import { createHash, randomUUID } from 'node:crypto'
import { constants, existsSync } from 'node:fs'
import {
  lstat,
  mkdir,
  open,
  readdir,
  realpath,
  rename,
  rm,
  stat,
  writeFile
} from 'node:fs/promises'
import { dirname, extname, join, posix, resolve, sep } from 'node:path'
import AdmZip from 'adm-zip'
import {
  POND_REMINDER_SOUND_PACK,
  REMINDER_SOUND_KINDS,
  type ReminderSoundKind,
  type ReminderSoundPackManifest,
  type ReminderSoundPackManifestEntry,
  type ReminderSoundPackSummary
} from '../shared/reminderSoundPack'

export const MAX_REMINDER_SOUND_PACK_ENTRIES = 16
export const MAX_REMINDER_SOUND_PACK_BYTES = 32 * 1024 * 1024
const MAX_MANIFEST_BYTES = 64 * 1024
const SUPPORTED_AUDIO_EXTENSIONS = new Set(['.mp3', '.wav', '.ogg', '.m4a'])
const AUDIO_MIME_TYPES = new Map([
  ['.mp3', 'audio/mpeg'],
  ['.wav', 'audio/wav'],
  ['.ogg', 'audio/ogg'],
  ['.m4a', 'audio/mp4']
])
const ID_PATTERN = /^[a-z0-9](?:[a-z0-9-]{0,62}[a-z0-9])?$/
const SHA256_PATTERN = /^[a-fA-F0-9]{64}$/

interface ValidatedPack {
  manifest: ReminderSoundPackManifest
  files: Map<string, Buffer>
}

const fail = (message: string): never => {
  throw new Error(`无效的 .ea2r 铃声包：${message}`)
}

const isRecord = (value: unknown): value is Record<string, unknown> =>
  Boolean(value) && typeof value === 'object' && !Array.isArray(value)

const readShortText = (value: unknown, field: string, maxLength = 100) => {
  if (typeof value !== 'string' || !value.trim() || value.length > maxLength) {
    fail(`${field} 必须是 1 到 ${maxLength} 个字符的文本`)
  }
  return value.trim()
}

const validateEntryPath = (entryPath: unknown, field = '条目路径') => {
  if (typeof entryPath !== 'string' || !entryPath || entryPath.includes('\0')) {
    fail(`${field}无效`)
  }
  if (entryPath.includes('\\') || entryPath.startsWith('/') || /^[a-zA-Z]:/.test(entryPath)) {
    fail(`${field}不安全`)
  }
  const normalized = posix.normalize(entryPath)
  if (
    normalized === '.' ||
    normalized === '..' ||
    normalized.startsWith('../') ||
    normalized !== entryPath
  ) {
    fail(`${field}不安全`)
  }
  return normalized
}

const isPathInside = (parent: string, candidate: string) =>
  candidate.startsWith(`${parent.endsWith(sep) ? parent.slice(0, -1) : parent}${sep}`)

const isAudioFormatValid = (extension: string, bytes: Buffer) => {
  switch (extension) {
    case '.wav':
      return (
        bytes.length >= 12 &&
        bytes.subarray(0, 4).toString() === 'RIFF' &&
        bytes.subarray(8, 12).toString() === 'WAVE'
      )
    case '.mp3':
      return (
        bytes.subarray(0, 3).toString() === 'ID3' ||
        (bytes.length >= 2 && bytes[0] === 0xff && (bytes[1] & 0xe0) === 0xe0)
      )
    case '.ogg':
      return bytes.subarray(0, 4).toString() === 'OggS'
    case '.m4a':
      return bytes.length >= 12 && bytes.subarray(4, 8).toString() === 'ftyp'
    default:
      return false
  }
}

const validateSoundEntry = (
  value: unknown,
  kind: ReminderSoundKind
): ReminderSoundPackManifestEntry => {
  if (!isRecord(value)) fail(`sounds.${kind} 必须是对象`)
  const name = readShortText(value.name, `sounds.${kind}.name`)
  const path = validateEntryPath(value.path, `sounds.${kind}.path`)
  if (typeof value.sha256 !== 'string' || !SHA256_PATTERN.test(value.sha256)) {
    fail(`sounds.${kind}.sha256 必须是 SHA-256 哈希`)
  }
  return { name, path, sha256: value.sha256.toLowerCase() }
}

const validateManifest = (value: unknown): ReminderSoundPackManifest => {
  if (!isRecord(value)) fail('manifest.json 必须是对象')
  if (value.schemaVersion !== 1) fail('仅支持 schemaVersion 1')
  const id = readShortText(value.id, 'id', 64)
  if (!ID_PATTERN.test(id) || id === POND_REMINDER_SOUND_PACK.id) {
    fail('id 只能包含小写字母、数字和连字符，且不能使用 pond')
  }
  if (!isRecord(value.sounds)) fail('sounds 必须包含 start、alert 和 end')
  const sounds = Object.fromEntries(
    REMINDER_SOUND_KINDS.map((kind) => [kind, validateSoundEntry(value.sounds[kind], kind)])
  ) as Record<ReminderSoundKind, ReminderSoundPackManifestEntry>
  if (new Set(REMINDER_SOUND_KINDS.map((kind) => sounds[kind].path)).size !== 3) {
    fail('start、alert 和 end 必须使用不同的声音文件，不能重复')
  }
  return {
    schemaVersion: 1,
    id,
    name: readShortText(value.name, 'name'),
    version: readShortText(value.version, 'version', 40),
    author: readShortText(value.author, 'author'),
    sounds
  }
}

const validateFiles = (manifest: ReminderSoundPackManifest, files: Map<string, Buffer>) => {
  const expected = new Set(['manifest.json'])
  for (const kind of REMINDER_SOUND_KINDS) {
    const sound = manifest.sounds[kind]
    expected.add(sound.path)
    const bytes = files.get(sound.path)
    if (!bytes) fail(`缺少 ${kind} 声音文件 ${sound.path}`)
    const extension = extname(sound.path).toLowerCase()
    if (!SUPPORTED_AUDIO_EXTENSIONS.has(extension) || !isAudioFormatValid(extension, bytes)) {
      fail(`${sound.path} 的声音格式无效或与扩展名不匹配`)
    }
    const actualHash = createHash('sha256').update(bytes).digest('hex')
    if (actualHash !== sound.sha256) fail(`${sound.path} 的 SHA-256 哈希不匹配`)
  }
  for (const filePath of files.keys()) {
    if (!expected.has(filePath)) fail(`包含未在描述文件中声明的条目 ${filePath}`)
  }
}

const summaryFromManifest = (manifest: ReminderSoundPackManifest): ReminderSoundPackSummary => ({
  id: manifest.id,
  name: manifest.name,
  version: manifest.version,
  author: manifest.author,
  builtIn: false,
  sounds: Object.fromEntries(
    REMINDER_SOUND_KINDS.map((kind) => [
      kind,
      {
        name: manifest.sounds[kind].name,
        src: `examaware-sound://pack/${encodeURIComponent(manifest.id)}/${kind}`
      }
    ])
  ) as ReminderSoundPackSummary['sounds']
})

const parseArchive = async (filePath: string): Promise<ValidatedPack> => {
  if (extname(filePath).toLowerCase() !== '.ea2r') fail('文件扩展名必须是 .ea2r')
  const archiveStat = await stat(filePath)
  if (!archiveStat.isFile() || archiveStat.size > MAX_REMINDER_SOUND_PACK_BYTES) {
    fail('文件过大或不是普通文件')
  }

  let entries: ReturnType<AdmZip['getEntries']>
  try {
    entries = new AdmZip(filePath).getEntries()
  } catch {
    fail('ZIP 数据损坏')
  }
  if (entries.length > MAX_REMINDER_SOUND_PACK_ENTRIES) fail('压缩包条目过多')

  const files = new Map<string, Buffer>()
  let totalBytes = 0
  for (const entry of entries) {
    const entryPath = validateEntryPath(entry.entryName)
    if (entry.isDirectory) continue
    const duplicateKey = entryPath.toLocaleLowerCase('en-US')
    if ([...files.keys()].some((key) => key.toLocaleLowerCase('en-US') === duplicateKey)) {
      fail(`存在重复文件 ${entryPath}`)
    }
    const declaredSize = Number(entry.header.size)
    if (!Number.isSafeInteger(declaredSize) || declaredSize < 0) fail(`条目 ${entryPath} 大小无效`)
    totalBytes += declaredSize
    if (totalBytes > MAX_REMINDER_SOUND_PACK_BYTES) fail('解压后文件过大')
    let bytes: Buffer
    try {
      bytes = entry.getData()
    } catch {
      fail(`无法解压条目 ${entryPath}`)
    }
    if (bytes.length !== declaredSize) fail(`条目 ${entryPath} 大小不一致`)
    files.set(entryPath, bytes)
  }

  const manifestBytes = files.get('manifest.json')
  if (!manifestBytes || manifestBytes.length > MAX_MANIFEST_BYTES) {
    fail('缺少 manifest.json 或描述文件过大')
  }
  let manifestValue: unknown
  try {
    manifestValue = JSON.parse(manifestBytes.toString('utf8'))
  } catch {
    fail('manifest.json 不是有效 JSON')
  }
  const manifest = validateManifest(manifestValue)
  validateFiles(manifest, files)
  return { manifest, files }
}

const readInstalledFile = async (
  directory: string,
  filePath: string,
  maxBytes = MAX_REMINDER_SOUND_PACK_BYTES
) => {
  const fileStat = await lstat(filePath)
  if (!fileStat.isFile()) fail('已安装声音包包含非普通文件')
  const realDirectory = await realpath(directory)
  const realFilePath = await realpath(filePath)
  if (!isPathInside(realDirectory, realFilePath)) fail('已安装声音路径不安全')
  const handle = await open(realFilePath, constants.O_RDONLY | constants.O_NOFOLLOW)
  try {
    const openedStat = await handle.stat()
    if (!openedStat.isFile() || openedStat.size > maxBytes) fail('已安装声音文件过大或无效')
    return await handle.readFile()
  } finally {
    await handle.close()
  }
}

const loadInstalled = async (directory: string): Promise<ValidatedPack> => {
  const directoryStat = await lstat(directory)
  if (!directoryStat.isDirectory()) fail('已安装声音包不是普通目录')
  const manifestBytes = await readInstalledFile(
    directory,
    join(directory, 'manifest.json'),
    MAX_MANIFEST_BYTES
  )
  const manifest = validateManifest(JSON.parse(manifestBytes.toString('utf8')))
  const files = new Map<string, Buffer>([['manifest.json', manifestBytes]])
  for (const kind of REMINDER_SOUND_KINDS) {
    const relativePath = manifest.sounds[kind].path
    const absolutePath = resolve(directory, relativePath)
    if (!absolutePath.startsWith(`${resolve(directory)}${sep}`)) fail('已安装声音路径不安全')
    files.set(relativePath, await readInstalledFile(directory, absolutePath))
  }
  validateFiles(manifest, files)
  return { manifest, files }
}

export class ReminderSoundPackStore {
  private readonly installed = new Map<
    string,
    { manifest: ReminderSoundPackManifest; directory: string }
  >()
  private readonly installQueues = new Map<string, Promise<void>>()

  constructor(private readonly rootDirectory: string) {}

  async list(): Promise<ReminderSoundPackSummary[]> {
    await mkdir(this.rootDirectory, { recursive: true })
    const entries = await readdir(this.rootDirectory, { withFileTypes: true })
    this.installed.clear()
    const imported: ReminderSoundPackSummary[] = []
    for (const entry of entries.sort((a, b) => a.name.localeCompare(b.name))) {
      if (!entry.isDirectory() || entry.name.startsWith('.')) continue
      const directory = join(this.rootDirectory, entry.name)
      try {
        const { manifest } = await loadInstalled(directory)
        if (manifest.id !== entry.name || this.installed.has(manifest.id)) continue
        this.installed.set(manifest.id, { manifest, directory })
        imported.push(summaryFromManifest(manifest))
      } catch {
        // Corrupt packages are ignored and the caller can fall back to Pond.
      }
    }
    return [POND_REMINDER_SOUND_PACK, ...imported]
  }

  async install(filePath: string): Promise<ReminderSoundPackSummary> {
    const validated = await parseArchive(filePath)
    const packId = validated.manifest.id
    const previous = this.installQueues.get(packId) ?? Promise.resolve()
    let release!: () => void
    const current = new Promise<void>((resolve) => {
      release = resolve
    })
    this.installQueues.set(packId, current)
    await previous.catch(() => undefined)
    try {
      return await this.installValidated(validated)
    } finally {
      release()
      if (this.installQueues.get(packId) === current) this.installQueues.delete(packId)
    }
  }

  private async installValidated(validated: ValidatedPack): Promise<ReminderSoundPackSummary> {
    await mkdir(this.rootDirectory, { recursive: true })
    const target = join(this.rootDirectory, validated.manifest.id)
    const staging = join(this.rootDirectory, `.${validated.manifest.id}-${randomUUID()}.tmp`)
    const backup = join(this.rootDirectory, `.${validated.manifest.id}-${randomUUID()}.bak`)
    let movedExisting = false
    let installedReplacement = false
    try {
      await mkdir(staging)
      await writeFile(
        join(staging, 'manifest.json'),
        `${JSON.stringify(validated.manifest, null, 2)}\n`,
        'utf8'
      )
      for (const kind of REMINDER_SOUND_KINDS) {
        const relativePath = validated.manifest.sounds[kind].path
        const output = join(staging, relativePath)
        await mkdir(dirname(output), { recursive: true })
        await writeFile(output, validated.files.get(relativePath) as Buffer)
      }
      if (existsSync(target)) {
        await rename(target, backup)
        movedExisting = true
      }
      await rename(staging, target)
      installedReplacement = true
      if (movedExisting) await rm(backup, { recursive: true, force: true }).catch(() => undefined)
    } catch (error) {
      await rm(staging, { recursive: true, force: true }).catch(() => undefined)
      if (movedExisting && !existsSync(target)) {
        await rename(backup, target)
        movedExisting = false
      }
      throw error
    } finally {
      if (installedReplacement) {
        await rm(backup, { recursive: true, force: true }).catch(() => undefined)
      }
    }
    this.installed.set(validated.manifest.id, {
      manifest: validated.manifest,
      directory: target
    })
    return summaryFromManifest(validated.manifest)
  }

  async readAsset(
    packId: string,
    kind: ReminderSoundKind
  ): Promise<{ data: Buffer; mimeType: string } | undefined> {
    if (!REMINDER_SOUND_KINDS.includes(kind)) return undefined
    const pack = this.installed.get(packId)
    if (!pack) return undefined
    try {
      if (!(await lstat(pack.directory)).isDirectory()) return undefined
      const sound = pack.manifest.sounds[kind]
      const candidate = resolve(pack.directory, sound.path)
      const resolvedDirectory = resolve(pack.directory)
      if (!isPathInside(resolvedDirectory, candidate)) return undefined
      const data = await readInstalledFile(pack.directory, candidate)
      const actualHash = createHash('sha256').update(data).digest('hex')
      if (actualHash !== sound.sha256) return undefined
      const mimeType = AUDIO_MIME_TYPES.get(extname(sound.path).toLowerCase())
      return mimeType ? { data, mimeType } : undefined
    } catch {
      return undefined
    }
  }
}
