import { readFileSync, writeFileSync } from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const root = path.resolve(__dirname, '..')
const desktopPkgPath = path.join(root, 'packages/desktop/package.json')
const sdkPkgPath = path.join(root, 'packages/plugin-sdk/package.json')

function readJson(filePath) {
  return JSON.parse(readFileSync(filePath, 'utf-8'))
}

const desktopPkg = readJson(desktopPkgPath)
const sdkPkg = readJson(sdkPkgPath)

if (sdkPkg.version !== desktopPkg.version) {
  sdkPkg.version = desktopPkg.version
  writeFileSync(sdkPkgPath, JSON.stringify(sdkPkg, null, 2) + '\n')
  console.log(`plugin-sdk version synced to ${sdkPkg.version}`)
} else {
  console.log('plugin-sdk version already in sync')
}
