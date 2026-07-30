import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { mkdtemp, rm, writeFile } from 'node:fs/promises'
import { join } from 'node:path'
import { tmpdir } from 'node:os'
import { PluginPermissions } from '@dsz-examaware/plugin-sdk'
import { loadManifestFromPackage } from '../../../src/main/plugins/manifest'

vi.mock('../../../src/main/logging/logger', () => ({
  appLogger: { warn: vi.fn() }
}))

let directory: string

async function writePackage(examaware: unknown) {
  await writeFile(
    join(directory, 'package.json'),
    JSON.stringify({ name: 'test-plugin', version: '1.0.0', examaware }),
    'utf8'
  )
}

describe('plugin manifest V2', () => {
  beforeEach(async () => {
    directory = await mkdtemp(join(tmpdir(), 'examaware-manifest-'))
  })

  afterEach(async () => {
    await rm(directory, { recursive: true, force: true })
  })

  it('normalizes permissions, activation and contained entry paths', async () => {
    await writePackage({
      apiVersion: 2,
      targets: { main: 'dist/main.mjs', renderer: 'dist/renderer.js' },
      permissions: [PluginPermissions.Player.Start, PluginPermissions.Player.Start],
      activation: { rendererWindows: ['main', 'plugin', 'main'] },
      services: { provide: ['clock', 'clock'], inject: ['settings'] },
      settings: { schema: 'schema/settings.json' }
    })

    const manifest = await loadManifestFromPackage(directory)

    expect(manifest).toMatchObject({
      apiVersion: 2,
      permissions: [PluginPermissions.Player.Start],
      activation: { rendererWindows: ['main', 'plugin'] },
      services: { provide: ['clock'], inject: ['settings'] }
    })
    expect(manifest?.targets.main?.file).toBe(join(directory, 'dist/main.mjs'))
    expect(manifest?.settings.schema).toBe(join(directory, 'schema/settings.json'))
  })

  it('defaults V2 renderer activation to the main window', async () => {
    await writePackage({ apiVersion: 2, targets: { renderer: 'renderer.mjs' } })

    await expect(loadManifestFromPackage(directory)).resolves.toMatchObject({
      activation: { rendererWindows: ['main'] }
    })
  })

  it.each([
    ['an unsupported API version', { apiVersion: 3 }, /apiVersion/],
    [
      'an unknown permission',
      { apiVersion: 2, permissions: ['files.superuser'] },
      /Unknown plugin permission/
    ],
    [
      'an invalid window kind',
      { apiVersion: 2, activation: { rendererWindows: ['dashboard'] } },
      /Invalid renderer window kind/
    ],
    [
      'a target escaping the package',
      { apiVersion: 2, targets: { main: '../outside.mjs' } },
      /escapes the plugin root/
    ]
  ])('rejects %s', async (_description, manifest, error) => {
    await writePackage(manifest)

    await expect(loadManifestFromPackage(directory)).rejects.toThrow(error)
  })

  it('keeps V1 compatibility by filtering unknown permission values', async () => {
    await writePackage({ apiVersion: 1, permissions: ['files.read', 'unknown.permission'] })

    const manifest = await loadManifestFromPackage(directory)

    expect(manifest?.permissions).toEqual([PluginPermissions.Files.Read])
    expect(manifest?.activation.rendererWindows).toContain('player')
  })
})
