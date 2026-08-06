'use strict'

const fs = require('node:fs')
const path = require('node:path')

function readManifest(packageDir) {
  const manifestPath = path.join(packageDir, 'package.json')
  return JSON.parse(fs.readFileSync(manifestPath, 'utf8'))
}

function findPackageDir(name, fromDir, appRoot) {
  let current = fromDir

  while (true) {
    const candidate = path.join(current, 'node_modules', ...name.split('/'))
    if (fs.existsSync(path.join(candidate, 'package.json'))) return candidate
    if (current === appRoot) return null

    const parent = path.dirname(current)
    if (parent === current || !parent.startsWith(appRoot)) return null
    current = parent
  }
}

function verifyDependencyClosure(appRoot) {
  const root = path.resolve(appRoot)
  const rootManifest = readManifest(root)
  const queue = Object.keys(rootManifest.dependencies || {}).map((name) => ({
    name,
    fromDir: root,
    requiredBy: rootManifest.name || root
  }))
  const visited = new Set()
  const missing = []

  while (queue.length > 0) {
    const request = queue.shift()
    const packageDir = findPackageDir(request.name, request.fromDir, root)
    if (!packageDir) {
      missing.push(`${request.name} (required by ${request.requiredBy})`)
      continue
    }
    if (visited.has(packageDir)) continue

    visited.add(packageDir)
    const manifest = readManifest(packageDir)
    for (const name of Object.keys(manifest.dependencies || {})) {
      queue.push({ name, fromDir: packageDir, requiredBy: manifest.name || packageDir })
    }
    for (const name of Object.keys(manifest.optionalDependencies || {})) {
      if (findPackageDir(name, packageDir, root)) {
        queue.push({ name, fromDir: packageDir, requiredBy: manifest.name || packageDir })
      }
    }
  }

  if (missing.length > 0) {
    throw new Error(`Production dependency closure is incomplete:\n- ${missing.join('\n- ')}`)
  }

  return visited.size
}

module.exports = { verifyDependencyClosure }

if (require.main === module) {
  try {
    const appRoot = process.argv[2] || process.cwd()
    const count = verifyDependencyClosure(appRoot)
    console.log(`[verify-packdeps] verified ${count} production packages`)
  } catch (error) {
    console.error(`[verify-packdeps] failed: ${error.stack || error}`)
    process.exitCode = 1
  }
}
