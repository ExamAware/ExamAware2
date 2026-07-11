import { spawnSync } from 'node:child_process'
import { readFileSync, statSync } from 'node:fs'
import { resolve } from 'node:path'

import { describe, expect, it } from 'vitest'

import { REMINDER_SOUND_SOURCES } from '../../../src/renderer/src/services/reminderSound'

const desktopRoot = resolve(import.meta.dirname, '../../..')
const sourceAudioDirectory = resolve(desktopRoot, 'src/renderer/public/audio')
const audioDirectory = process.env.VERIFY_BUILT_ASSETS
  ? resolve(desktopRoot, 'dist/renderer/audio')
  : sourceAudioDirectory
const canonicalFilenames = {
  start: 'exam-start.mp3',
  alert: 'exam-alert.mp3',
  end: 'exam-end.mp3'
} as const

interface ProbeResult {
  format: { duration?: string; format_name?: string }
  streams: Array<{ codec_name?: string; codec_type?: string; duration?: string }>
}

function probe(file: string): ProbeResult {
  const result = spawnSync(
    'ffprobe',
    [
      '-v',
      'error',
      '-show_entries',
      'format=format_name,duration:stream=codec_name,codec_type,duration',
      '-of',
      'json',
      file
    ],
    { encoding: 'utf8' }
  )

  expect(
    result.error,
    'ffprobe must be installed to validate reminder sound assets'
  ).toBeUndefined()
  expect(result.status, result.stderr).toBe(0)
  return JSON.parse(result.stdout) as ProbeResult
}

function measureLoudness(file: string) {
  const result = spawnSync(
    'ffmpeg',
    [
      '-hide_banner',
      '-nostats',
      '-i',
      file,
      '-filter_complex',
      'ebur128=peak=true',
      '-f',
      'null',
      '-'
    ],
    { encoding: 'utf8' }
  )

  expect(
    result.error,
    'ffmpeg must be installed to validate reminder sound loudness'
  ).toBeUndefined()
  expect(result.status, result.stderr).toBe(0)
  const integratedMatches = [...result.stderr.matchAll(/^    I:\s+(-?[\d.]+) LUFS$/gm)]
  const peakMatches = [...result.stderr.matchAll(/^    Peak:\s+(-?[\d.]+) dBFS$/gm)]
  expect(integratedMatches.length).toBeGreaterThan(0)
  expect(peakMatches.length).toBeGreaterThan(0)
  return {
    integrated: Number(integratedMatches.at(-1)![1]),
    truePeak: Number(peakMatches.at(-1)![1])
  }
}

describe('reminder sound assets', () => {
  const filenames = Object.values(canonicalFilenames)

  it('maps every reminder kind to its canonical asset', () => {
    expect(REMINDER_SOUND_SOURCES).toEqual(
      Object.fromEntries(
        Object.entries(canonicalFilenames).map(([kind, filename]) => [kind, `./audio/${filename}`])
      )
    )
  })

  it.each(filenames)('%s is a short, nonempty MP3 with one audio stream', (filename) => {
    const file = resolve(audioDirectory, filename)
    expect(statSync(file).size).toBeGreaterThan(0)

    const metadata = probe(file)
    expect(metadata.format.format_name?.split(',')).toContain('mp3')
    const audioStreams = metadata.streams.filter((stream) => stream.codec_type === 'audio')
    expect(audioStreams).toHaveLength(1)
    expect(audioStreams[0].codec_name).toBe('mp3')

    const duration = Number(metadata.format.duration ?? audioStreams[0].duration)
    expect(duration).toBeGreaterThanOrEqual(0.3)
    expect(duration).toBeLessThanOrEqual(4)
  })

  it('keeps all cues at a consistent restrained loudness without clipping', () => {
    const measurements = filenames.map((filename) =>
      measureLoudness(resolve(audioDirectory, filename))
    )
    const integrated = measurements.map((measurement) => measurement.integrated)

    expect(Math.max(...integrated) - Math.min(...integrated)).toBeLessThanOrEqual(2)
    for (const measurement of measurements) {
      expect(measurement.integrated).toBeGreaterThanOrEqual(-31)
      expect(measurement.integrated).toBeLessThanOrEqual(-27)
      expect(measurement.truePeak).toBeLessThanOrEqual(-6)
    }
  })

  it('documents local generation, provenance, and repository licensing', () => {
    const readme = readFileSync(resolve(sourceAudioDirectory, 'README.md'), 'utf8')
    expect(readme).toMatch(/generated locally/i)
    expect(readme).toMatch(/ffmpeg/i)
    expect(readme).toMatch(/no third-party audio/i)
    expect(readme).toMatch(/same license as (?:this|the) repository/i)
  })
})
