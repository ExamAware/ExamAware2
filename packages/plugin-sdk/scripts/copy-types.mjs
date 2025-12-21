#!/usr/bin/env node

import { copyFile, mkdir, readdir, rm, stat } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const projectRoot = path.resolve(__dirname, '..')
const distDir = path.join(projectRoot, 'dist')
const typeSourceDir = path.join(projectRoot, 'dist-types', 'src')

async function directoryExists(dir) {
  try {
    await stat(dir)
    return true
  } catch {
    return false
  }
}

async function removeDeclarations(dir) {
  if (!(await directoryExists(dir))) return
  const entries = await readdir(dir, { withFileTypes: true })
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      await removeDeclarations(fullPath)
      const remaining = await readdir(fullPath)
      if (!remaining.length) {
        await rm(fullPath, { recursive: true, force: true })
      }
      continue
    }
    if (entry.name.endsWith('.d.ts') || entry.name.endsWith('.d.ts.map')) {
      await rm(fullPath, { force: true })
    }
  }
}

async function copyTree(src, dest) {
  const entries = await readdir(src, { withFileTypes: true })
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name)
    const destPath = path.join(dest, entry.name)
    if (entry.isDirectory()) {
      await mkdir(destPath, { recursive: true })
      await copyTree(srcPath, destPath)
      continue
    }
    await mkdir(path.dirname(destPath), { recursive: true })
    await copyFile(srcPath, destPath)
  }
}

async function main() {
  if (!(await directoryExists(typeSourceDir))) {
    console.warn('[copy-types] No generated declarations found, skipping copy step.')
    return
  }
  await mkdir(distDir, { recursive: true })
  await removeDeclarations(distDir)
  await copyTree(typeSourceDir, distDir)
}

main().catch((err) => {
  console.error('[copy-types] Failed to copy declaration files:', err)
  process.exitCode = 1
})
