import { spawn } from 'node:child_process'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const scriptDir = path.dirname(fileURLToPath(import.meta.url))
const desktopRoot = path.resolve(scriptDir, '..')
const workspaceRoot = path.resolve(desktopRoot, '..', '..')
const hapRoot = process.env.OHOS_HAP_PATH
  ? path.resolve(process.env.OHOS_HAP_PATH)
  : path.join(workspaceRoot, 'harmony', 'electron-harmonyos-pc', 'ohos_hap')
const studioHome = process.env.DEVECO_STUDIO_HOME || '/Applications/DevEco-Studio.app/Contents'
const sdkHome = process.env.DEVECO_SDK_HOME || path.join(studioHome, 'sdk')
const hvigor = path.join(studioHome, 'tools', 'hvigor', 'bin', 'hvigorw')
const hapOutputDir = path.join(hapRoot, 'electron', 'build', 'default', 'outputs', 'default')
const generatedHap = path.join(hapOutputDir, 'electron-default-unsigned.hap')
const releaseHap = path.join(hapOutputDir, 'examaware-harmonyos-pc-unsigned.hap')

for (const target of [hapRoot, sdkHome, hvigor]) {
  if (!fs.existsSync(target)) throw new Error(`Required HarmonyOS build path is missing: ${target}`)
}

const args = [
  '--mode',
  'module',
  '-p',
  'module=electron@default',
  '-p',
  'product=default',
  '-p',
  'requiredDeviceType=2in1',
  'assembleHap',
  '--analyze=normal',
  '--parallel',
  '--incremental',
  '--no-daemon'
]

const child = spawn(hvigor, args, {
  cwd: hapRoot,
  env: { ...process.env, DEVECO_SDK_HOME: sdkHome },
  stdio: 'inherit',
  shell: false
})

child.on('error', (error) => {
  throw error
})

child.on('exit', (code, signal) => {
  if (signal) {
    process.kill(process.pid, signal)
    return
  }
  if (code !== 0) {
    process.exitCode = code ?? 1
    return
  }

  try {
    if (!fs.existsSync(generatedHap)) {
      throw new Error(`Generated HAP is missing: ${generatedHap}`)
    }
    fs.rmSync(releaseHap, { force: true })
    fs.renameSync(generatedHap, releaseHap)
    console.log(`[build-hmos-hap] ${releaseHap}`)
  } catch (error) {
    console.error(error)
    process.exitCode = 1
  }
})
