import { strToU8, zipSync } from 'fflate';

export const SOUND_KINDS = ['start', 'alert', 'end'] as const;
export const MAX_RINGTONE_PACK_BYTES = 32 * 1024 * 1024;

export type SoundKind = (typeof SOUND_KINDS)[number];

export interface RingtoneSoundAsset {
  name: string;
  fileName: string;
  bytes: Uint8Array;
}

export interface RingtonePackDraft {
  id: string;
  name: string;
  version: string;
  author: string;
  sounds: Record<SoundKind, RingtoneSoundAsset | null>;
}

export interface RingtonePackManifestEntry {
  name: string;
  path: string;
  sha256: string;
}

export interface RingtonePackManifest {
  schemaVersion: 1;
  id: string;
  name: string;
  version: string;
  author: string;
  sounds: Record<SoundKind, RingtonePackManifestEntry>;
}

const supportedExtensions = new Set(['.mp3', '.wav', '.ogg', '.m4a']);
const idPattern = /^[a-z0-9](?:[a-z0-9-]{0,62}[a-z0-9])?$/;

export class RingtonePackError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'RingtonePackError';
  }
}

const readText = (value: string, label: string, maxLength: number) => {
  const text = value.trim();
  if (!text || value.length > maxLength) {
    throw new RingtonePackError(`${label}必须是 1 到 ${maxLength} 个字符`);
  }
  return text;
};

export const getAudioExtension = (fileName: string) => {
  const dot = fileName.lastIndexOf('.');
  const extension = dot >= 0 ? fileName.slice(dot).toLowerCase() : '';
  if (!supportedExtensions.has(extension)) {
    throw new RingtonePackError('仅支持 MP3、WAV、OGG 和 M4A 音频');
  }
  return extension;
};

export const isAudioSignatureValid = (extension: string, bytes: Uint8Array) => {
  const ascii = (start: number, end: number) => String.fromCharCode(...bytes.subarray(start, end));

  switch (extension) {
    case '.wav':
      return bytes.length >= 12 && ascii(0, 4) === 'RIFF' && ascii(8, 12) === 'WAVE';
    case '.mp3':
      return (
        ascii(0, 3) === 'ID3' ||
        (bytes.length >= 2 && bytes[0] === 0xff && (bytes[1] & 0xe0) === 0xe0)
      );
    case '.ogg':
      return ascii(0, 4) === 'OggS';
    case '.m4a':
      return bytes.length >= 12 && ascii(4, 8) === 'ftyp';
    default:
      return false;
  }
};

export const validateAudioAsset = (fileName: string, bytes: Uint8Array) => {
  const extension = getAudioExtension(fileName);
  if (!isAudioSignatureValid(extension, bytes)) {
    throw new RingtonePackError('音频内容与文件扩展名不匹配');
  }
  return extension;
};

const sha256 = async (bytes: Uint8Array) => {
  const cryptoApi = globalThis.crypto;
  if (!cryptoApi?.subtle) throw new RingtonePackError('当前环境无法计算 SHA-256');
  const source = new Uint8Array(bytes).buffer;
  const hash = await cryptoApi.subtle.digest('SHA-256', source);
  return Array.from(new Uint8Array(hash), (byte) => byte.toString(16).padStart(2, '0')).join('');
};

export async function buildRingtonePack(draft: RingtonePackDraft) {
  const id = readText(draft.id, '铃声包 ID', 64);
  if (!idPattern.test(id) || id === 'pond') {
    throw new RingtonePackError('铃声包 ID 只能包含小写字母、数字和连字符，且不能使用 pond');
  }

  const name = readText(draft.name, '铃声包名称', 100);
  const version = readText(draft.version, '版本', 40);
  const author = readText(draft.author, '作者', 100);
  const entries: Record<string, Uint8Array> = {};
  const manifestSounds = {} as Record<SoundKind, RingtonePackManifestEntry>;

  let unpackedBytes = 0;
  for (const kind of SOUND_KINDS) {
    const sound = draft.sounds[kind];
    if (!sound) throw new RingtonePackError(`请选择${soundKindLabels[kind]}`);
    const extension = validateAudioAsset(sound.fileName, sound.bytes);
    const path = `audio/${kind}${extension}`;
    const soundName = readText(sound.name, `${soundKindLabels[kind]}名称`, 100);
    unpackedBytes += sound.bytes.byteLength;
    entries[path] = sound.bytes;
    manifestSounds[kind] = {
      name: soundName,
      path,
      sha256: await sha256(sound.bytes)
    };
  }

  const manifest: RingtonePackManifest = {
    schemaVersion: 1,
    id,
    name,
    version,
    author,
    sounds: manifestSounds
  };
  const manifestBytes = strToU8(`${JSON.stringify(manifest, null, 2)}\n`);
  unpackedBytes += manifestBytes.byteLength;
  if (unpackedBytes > MAX_RINGTONE_PACK_BYTES) {
    throw new RingtonePackError('铃声包解压后不能超过 32 MiB');
  }

  entries['manifest.json'] = manifestBytes;
  const archive = zipSync(entries, { level: 9 });
  if (archive.byteLength > MAX_RINGTONE_PACK_BYTES) {
    throw new RingtonePackError('铃声包文件不能超过 32 MiB');
  }
  return archive;
}

export const soundKindLabels: Record<SoundKind, string> = {
  start: '开考铃声',
  alert: '提醒铃声',
  end: '结束铃声'
};
