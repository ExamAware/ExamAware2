import { mkdtempSync, mkdirSync, rmSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join, win32 } from 'node:path'
import { createRequire } from 'node:module'
import { describe, expect, it } from 'vitest'
import { resolveDesktopRoot } from '../scripts/prepare-packdeps-path.mjs'
import {
  normalizeArchiveEntryPath,
  verifyArchiveDependencyClosure
} from '../scripts/verify-packaged-app.mjs'

const { verifyDependencyClosure } = createRequire(import.meta.url)(
  '../scripts/verify-dependency-closure.cjs'
) as { verifyDependencyClosure: (appRoot: string) => number }

function writeManifest(root: string, packagePath: string, manifest: object): void {
  const directory = join(root, packagePath)
  mkdirSync(directory, { recursive: true })
  writeFileSync(join(directory, 'package.json'), JSON.stringify(manifest))
}

describe('prepare-packdeps path resolution', () => {
  it('converts a Windows file URL into the desktop directory', () => {
    const scriptUrl =
      'file:///D:/a/ExamAware2/ExamAware2/packages/desktop/scripts/prepare-packdeps.mjs'

    const desktopRoot = resolveDesktopRoot(scriptUrl, { windows: true })

    expect(win32.resolve(desktopRoot)).toBe('D:\\a\\ExamAware2\\ExamAware2\\packages\\desktop')
  })
})

describe('production dependency closure verification', () => {
  it('reports a missing transitive dependency', () => {
    const root = mkdtempSync(join(tmpdir(), 'examaware-packdeps-test-'))
    try {
      writeManifest(root, '.', {
        name: 'app',
        dependencies: { 'side-channel-map': '1.0.1' }
      })
      writeManifest(root, 'node_modules/side-channel-map', {
        name: 'side-channel-map',
        dependencies: { 'call-bound': '1.0.4' }
      })

      expect(() => verifyDependencyClosure(root)).toThrow(
        'call-bound (required by side-channel-map)'
      )
    } finally {
      rmSync(root, { recursive: true, force: true })
    }
  })

  it('accepts a complete transitive dependency graph', () => {
    const root = mkdtempSync(join(tmpdir(), 'examaware-packdeps-test-'))
    try {
      writeManifest(root, '.', {
        name: 'app',
        dependencies: { 'side-channel-map': '1.0.1' }
      })
      writeManifest(root, 'node_modules/side-channel-map', {
        name: 'side-channel-map',
        dependencies: { 'call-bound': '1.0.4' }
      })
      writeManifest(root, 'node_modules/call-bound', { name: 'call-bound' })

      expect(verifyDependencyClosure(root)).toBe(2)
    } finally {
      rmSync(root, { recursive: true, force: true })
    }
  })
})

describe('packaged ASAR dependency closure verification', () => {
  it('reads Windows archive entries with backslash separators', () => {
    const manifests: Record<string, object> = {
      'package.json': {
        name: 'app',
        dependencies: { 'side-channel-map': '1.0.1' }
      },
      'node_modules\\side-channel-map\\package.json': {
        name: 'side-channel-map',
        dependencies: { 'call-bound': '1.0.4' }
      },
      'node_modules\\call-bound\\package.json': { name: 'call-bound' }
    }
    const archiveApi = {
      listPackage: () => Object.keys(manifests).map((entry) => `\\${entry}`),
      extractFile: (_archivePath: string, entry: string) => {
        const manifest = manifests[entry]
        if (!manifest) throw new Error(`Unexpected archive entry: ${entry}`)
        return Buffer.from(JSON.stringify(manifest))
      }
    }

    expect(normalizeArchiveEntryPath('\\node_modules\\call-bound\\package.json')).toBe(
      'node_modules/call-bound/package.json'
    )
    expect(verifyArchiveDependencyClosure('fixture.asar', archiveApi)).toBe(2)
  })
})
