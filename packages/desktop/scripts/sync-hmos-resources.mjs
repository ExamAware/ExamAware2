import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const scriptDir = path.dirname(fileURLToPath(import.meta.url))
const desktopRoot = path.resolve(scriptDir, '..')
const workspaceRoot = path.resolve(desktopRoot, '..', '..')
const hapRoot = process.env.OHOS_HAP_PATH
  ? path.resolve(process.env.OHOS_HAP_PATH)
  : path.join(workspaceRoot, 'harmony', 'electron-harmonyos-pc', 'ohos_hap')
const outputRoot = path.join(desktopRoot, 'out', 'hmos')
const destination = path.join(
  hapRoot,
  'web_engine',
  'src',
  'main',
  'resources',
  'resfile',
  'resources',
  'app'
)

async function findPackagedApp(dir, depth = 0) {
  if (depth > 7) return null
  const entries = await fs.readdir(dir, { withFileTypes: true })
  for (const entry of entries) {
    if (!entry.isDirectory()) continue
    const child = path.join(dir, entry.name)
    if (entry.name === 'app' && path.basename(dir) === 'Resources') return child
    const found = await findPackagedApp(child, depth + 1)
    if (found) return found
  }
  return null
}

async function requirePath(target) {
  try {
    await fs.access(target)
  } catch {
    throw new Error(`Required HarmonyOS resource is missing: ${target}`)
  }
}

const source = await findPackagedApp(outputRoot)
if (!source) {
  throw new Error(`Unpacked Electron app not found below ${outputRoot}`)
}

await Promise.all([
  requirePath(path.join(source, 'package.json')),
  requirePath(path.join(source, 'dist', 'main', 'index.js')),
  requirePath(path.join(source, 'dist', 'preload', 'index.mjs')),
  requirePath(path.join(source, 'dist', 'renderer', 'index.html'))
])

await fs.rm(destination, { recursive: true, force: true })
await fs.mkdir(path.dirname(destination), { recursive: true })
await fs.cp(source, destination, { recursive: true, force: true })

console.log(`[sync-hmos-resources] ${source}`)
console.log(`[sync-hmos-resources] -> ${destination}`)
