import { access } from 'node:fs/promises'
import path from 'node:path'
import { extractFile, listPackage } from '@electron/asar'

function createArchiveReader(archivePath) {
  const files = new Set(listPackage(archivePath).map((entry) => entry.replace(/^[/\\]+/, '')))

  function hasManifest(packageDir) {
    return files.has(path.posix.join(packageDir, 'package.json'))
  }

  function readManifest(packageDir) {
    const manifestPath = path.posix.join(packageDir, 'package.json')
    return JSON.parse(extractFile(archivePath, manifestPath).toString('utf8'))
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

export function verifyArchiveDependencyClosure(archivePath) {
  const archive = createArchiveReader(archivePath)
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
