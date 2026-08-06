import { access } from 'node:fs/promises'
import path from 'node:path'
import { extractFile, listPackage } from '@electron/asar'

export function normalizeArchiveEntryPath(entry) {
  return entry.replaceAll('\\', '/').replace(/^\/+/, '')
}

function createArchiveReader(archivePath, archiveApi) {
  const entryPaths = new Map(
    archiveApi
      .listPackage(archivePath)
      .map((entry) => [normalizeArchiveEntryPath(entry), entry.replace(/^[/\\]+/, '')])
  )

  function hasManifest(packageDir) {
    return entryPaths.has(path.posix.join(packageDir, 'package.json'))
  }

  function readManifest(packageDir) {
    const manifestPath = path.posix.join(packageDir, 'package.json')
    const archiveEntryPath = entryPaths.get(manifestPath)
    if (!archiveEntryPath) throw new Error(`Manifest is missing from archive: ${manifestPath}`)
    return JSON.parse(archiveApi.extractFile(archivePath, archiveEntryPath).toString('utf8'))
  }

  function findPackageDir(name, fromDir) {
    let current = fromDir

    while (true) {
      const candidate = path.posix.join(current, 'node_modules', name)
      if (hasManifest(candidate)) return candidate
      if (current === '') return null

      const parent = path.posix.dirname(current)
      current = parent === '.' ? '' : parent
    }
  }

  return { findPackageDir, readManifest }
}

export function verifyArchiveDependencyClosure(
  archivePath,
  archiveApi = { extractFile, listPackage }
) {
  const archive = createArchiveReader(archivePath, archiveApi)
  const rootManifest = archive.readManifest('')
  const queue = Object.keys(rootManifest.dependencies || {}).map((name) => ({
    name,
    fromDir: '',
    requiredBy: rootManifest.name || 'application'
  }))
  const visited = new Set()
  const missing = []

  while (queue.length > 0) {
    const request = queue.shift()
    const packageDir = archive.findPackageDir(request.name, request.fromDir)
    if (!packageDir) {
      missing.push(`${request.name} (required by ${request.requiredBy})`)
      continue
    }
    if (visited.has(packageDir)) continue

    visited.add(packageDir)
    const manifest = archive.readManifest(packageDir)
    for (const name of Object.keys(manifest.dependencies || {})) {
      queue.push({ name, fromDir: packageDir, requiredBy: manifest.name || packageDir })
    }
    for (const name of Object.keys(manifest.optionalDependencies || {})) {
      if (archive.findPackageDir(name, packageDir)) {
        queue.push({ name, fromDir: packageDir, requiredBy: manifest.name || packageDir })
      }
    }
  }

  if (missing.length > 0) {
    throw new Error(`Packaged dependency closure is incomplete:\n- ${missing.join('\n- ')}`)
  }

  return visited.size
}

export default async function verifyPackagedApp(context) {
  const resourcesDir =
    context.electronPlatformName === 'darwin'
      ? path.join(
          context.appOutDir,
          `${context.packager.appInfo.productFilename}.app`,
          'Contents',
          'Resources'
        )
      : path.join(context.appOutDir, 'resources')
  const archivePath = path.join(resourcesDir, 'app.asar')

  await access(archivePath)
  const count = verifyArchiveDependencyClosure(archivePath)
  console.log(`[verify-packaged-app] verified ${count} packages in ${archivePath}`)
}
