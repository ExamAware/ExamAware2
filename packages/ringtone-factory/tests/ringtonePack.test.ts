import { createHash } from 'node:crypto';
import { mkdtemp, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { strFromU8, unzipSync } from 'fflate';
import { describe, expect, it } from 'vitest';
import { ReminderSoundPackStore } from '../../desktop/src/main/reminderSoundPackStore';
import {
  buildRingtonePack,
  RingtonePackError,
  type RingtonePackDraft
} from '../src/shared/ringtonePack';

const wav = (marker: number) =>
  Uint8Array.from([0x52, 0x49, 0x46, 0x46, marker, 0, 0, 0, 0x57, 0x41, 0x56, 0x45, marker]);

const draft = (): RingtonePackDraft => ({
  id: 'school-bells',
  name: '校园广播铃声',
  version: '1.0.0',
  author: 'ExamAware',
  sounds: {
    start: { name: '开考', fileName: 'start.wav', bytes: wav(1) },
    alert: { name: '提醒', fileName: 'alert.wav', bytes: wav(2) },
    end: { name: '结束', fileName: 'end.wav', bytes: wav(3) }
  }
});

describe('buildRingtonePack', () => {
  it('creates a schemaVersion 1 archive with three hashed audio files', async () => {
    const archive = unzipSync(await buildRingtonePack(draft()));
    expect(Object.keys(archive).sort()).toEqual([
      'audio/alert.wav',
      'audio/end.wav',
      'audio/start.wav',
      'manifest.json'
    ]);

    const manifest = JSON.parse(strFromU8(archive['manifest.json']));
    expect(manifest).toMatchObject({
      schemaVersion: 1,
      id: 'school-bells',
      name: '校园广播铃声',
      version: '1.0.0',
      author: 'ExamAware',
      sounds: {
        start: { name: '开考', path: 'audio/start.wav' },
        alert: { name: '提醒', path: 'audio/alert.wav' },
        end: { name: '结束', path: 'audio/end.wav' }
      }
    });
    expect(manifest.sounds.start.sha256).toBe(
      createHash('sha256').update(archive['audio/start.wav']).digest('hex')
    );
  });

  it.each(['pond', 'School Bells', '-school', 'school_1'])(
    'rejects invalid pack id %s',
    async (id) => {
      const value = draft();
      value.id = id;
      await expect(buildRingtonePack(value)).rejects.toThrow(RingtonePackError);
    }
  );

  it('rejects a missing sound', async () => {
    const value = draft();
    value.sounds.alert = null;
    await expect(buildRingtonePack(value)).rejects.toThrow('请选择提醒铃声');
  });

  it('rejects audio whose content does not match its extension', async () => {
    const value = draft();
    value.sounds.end = {
      name: '结束',
      fileName: 'end.mp3',
      bytes: Uint8Array.from([1, 2, 3])
    };
    await expect(buildRingtonePack(value)).rejects.toThrow('音频内容与文件扩展名不匹配');
  });

  it('creates a pack accepted by the desktop sound pack store', async () => {
    const temporaryDirectory = await mkdtemp(join(tmpdir(), 'examaware-ringtone-factory-'));
    try {
      const archivePath = join(temporaryDirectory, 'school-bells.ea2r');
      await writeFile(archivePath, await buildRingtonePack(draft()));

      const store = new ReminderSoundPackStore(join(temporaryDirectory, 'packs'));
      const summary = await store.install(archivePath);
      expect(summary).toMatchObject({
        id: 'school-bells',
        name: '校园广播铃声',
        version: '1.0.0',
        author: 'ExamAware',
        builtIn: false
      });
      expect(await store.readAsset('school-bells', 'start')).toMatchObject({
        mimeType: 'audio/wav',
        data: Buffer.from(wav(1))
      });
    } finally {
      await rm(temporaryDirectory, { recursive: true, force: true });
    }
  });
});
