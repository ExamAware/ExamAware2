import { fileURLToPath } from 'node:url'
import path from 'node:path'
import fs from 'node:fs/promises'
import { constants as fsConstants } from 'node:fs'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const workspaceRoot = path.resolve(__dirname, '..', '..')
const desktopRoot = path.resolve(__dirname, '..')
const nodeModulesRoot = path.join(desktopRoot, 'node_modules')
const outputDir = path.join(desktopRoot, 'out')

const packagesToMirror = [
  {
    name: '@dsz-examaware/core',
    source: path.join(workspaceRoot, 'core')
  },
  {
    name: '@dsz-examaware/player',
    source: path.join(workspaceRoot, 'player')
  },
  {
    name: '@dsz-examaware/plugin-sdk',
    source: path.join(workspaceRoot, 'plugin-sdk'),
    optional: true
  }
]

async function pathExists(target) {
  try {
    await fs.access(target, fsConstants.F_OK)
    return true
  } catch {
    return false
  }
}

async function copyPackage(pkg) {
  const sourceDist = path.join(pkg.source, 'dist')
  const destDir = path.join(nodeModulesRoot, pkg.name)

  // Remove existing pnpm link/symlink to avoid electron-builder rejecting out-of-tree paths
  await fs.rm(destDir, { recursive: true, force: true })

  if (!(await pathExists(sourceDist))) {
    if (pkg.optional) {
      console.warn(`[prepare-workspace-deps] skip ${pkg.name}: dist not found at ${sourceDist}`)
      return
    }
    throw new Error(
      `Workspace package ${pkg.name} has no dist build at ${sourceDist}. Run its build before packaging.`
    )
  }

  await fs.rm(destDir, { recursive: true, force: true })
  await fs.mkdir(destDir, { recursive: true })

  const metadataFiles = ['package.json', 'README.md', 'LICENSE']
  for (const file of metadataFiles) {
    const sourceFile = path.join(pkg.source, file)
    if (await pathExists(sourceFile)) {
      await fs.copyFile(sourceFile, path.join(destDir, file))
    }
  }

  await fs.cp(sourceDist, path.join(destDir, 'dist'), {
    recursive: true,
    force: true
  })

  const sourceBin = path.join(pkg.source, 'bin')
  if (await pathExists(sourceBin)) {
    await fs.cp(sourceBin, path.join(destDir, 'bin'), {
      recursive: true,
      force: true
    })
  }
}

async function main() {
  await fs.rm(outputDir, { recursive: true, force: true })

  for (const pkg of packagesToMirror) {
    await copyPackage(pkg)
  }
}

main().catch((error) => {
  console.error('[prepare-workspace-deps] Failed to mirror workspace packages:', error)
  process.exitCode = 1
})
