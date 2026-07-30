import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { describe, expect, it } from 'vitest'

const desktopRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../../..')
const workspaceRoot = path.resolve(desktopRoot, '../..')
const sourceRoot = path.join(desktopRoot, 'src')
const sourceExtensions = new Set(['.ts', '.vue'])

function sourceFiles(directory: string): string[] {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const fullPath = path.join(directory, entry.name)
    if (entry.isDirectory()) return sourceFiles(fullPath)
    return sourceExtensions.has(path.extname(entry.name)) ? [fullPath] : []
  })
}

function findViolations(files: string[], patterns: RegExp[]) {
  return files.flatMap((file) => {
    const source = fs.readFileSync(file, 'utf8')
    return patterns.some((pattern) => pattern.test(source))
      ? [path.relative(desktopRoot, file)]
      : []
  })
}

describe('desktop process boundaries', () => {
  it('keeps fixed IPC calls behind shared endpoint objects', () => {
    const violations = findViolations(sourceFiles(sourceRoot), [
      /ipcRenderer\.(?:invoke|send|on|off)\(\s*['"]/, // preload/renderer
      /ipcMain\.(?:handle|on)\(\s*['"]/, // main registrations
      /webContents\.send\(\s*['"]/, // main events
      /@Ipc(?:Handle|On)\(\s*['"]/, // decorated controllers
      /(?:window|\(window as any\))\.api(?:\?\.)?\.ipc\b/, // renderer escape hatch
      /window\.electron\b/, // generic Electron preload escape hatch
      /exposeInMainWorld\(\s*['"]electron['"]/, // generic Electron preload exposure
      /Object\.assign\(globalThis,\s*\{[^}]*\belectron\b/ // non-isolated fallback exposure
    ])

    expect(violations).toEqual([])
  })

  it('reports renderer readiness through the typed window bridge', () => {
    const source = fs.readFileSync(path.join(sourceRoot, 'renderer/src/main.ts'), 'utf8')

    expect(source).toContain('window.api.windows.rendererReady(windowId)')
    expect(source).not.toMatch(/\.api(?:\?\.)?\.ipc(?:\?\.)?\.send/)
  })

  it('prevents renderer and preload from importing main internals', () => {
    const boundaryFiles = [
      ...sourceFiles(path.join(sourceRoot, 'preload')),
      ...sourceFiles(path.join(sourceRoot, 'renderer'))
    ]
    const violations = findViolations(boundaryFiles, [/from\s+['"][^'"]*main\//])

    expect(violations).toEqual([])
  })

  it('uses typed Vue injection keys', () => {
    const rendererFiles = sourceFiles(path.join(sourceRoot, 'renderer'))
    const violations = findViolations(rendererFiles, [/(?:provide|inject)\(\s*['"]/])

    expect(violations).toEqual([])
  })
})

describe('plugin V2 boundaries', () => {
  const pluginRoots = [
    path.join(desktopRoot, 'plugins/examaware-plugin-example'),
    path.join(desktopRoot, 'plugins/examaware-plugin-doom'),
    path.join(workspaceRoot, 'packages/ringtone-factory'),
    path.join(workspaceRoot, 'packages/plugin-template/template')
  ]

  it('keeps V2 plugin source on lifecycle and public API contracts', () => {
    const patterns = [
      /desktopApi\s+as\b/,
      /ctx\.effect\b/,
      /createEauiWindowForPlugin\b/,
      /\bipcRenderer\b/,
      /\bipcMain\b/,
      /\bwindow\.api\b/,
      /from\s+['"]electron['"]/
    ]
    const violations = pluginRoots.flatMap((root) => {
      const manifest = JSON.parse(fs.readFileSync(path.join(root, 'package.json'), 'utf8'))
      expect(manifest.examaware.apiVersion).toBe(2)
      return findViolations(sourceFiles(path.join(root, 'src')), patterns)
    })

    expect(violations).toEqual([])
  })

  it('uses explicit V2 lifecycle declarations for every process entry', () => {
    for (const root of pluginRoots) {
      const main = fs.readFileSync(path.join(root, 'src/main/index.ts'), 'utf8')
      const renderer = fs.readFileSync(path.join(root, 'src/renderer/main.ts'), 'utf8')
      expect(main).toContain('defineMainPlugin')
      expect(renderer).toContain('defineRendererPlugin')
    }
  })
})
