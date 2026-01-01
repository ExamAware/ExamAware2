import fs, { chmodSync, mkdtempSync, writeFileSync } from 'node:fs'
import { rm } from 'node:fs/promises'
import { tmpdir } from 'node:os'
import { extname, join, resolve } from 'node:path'
import { spawn } from 'node:child_process'

const cwd = resolve(new URL('.', import.meta.url).pathname, '..')
const huskyStubDir = createHuskyStub()

function createHuskyStub() {
  const dir = mkdtempSync(join(tmpdir(), 'examaware-packdeps-'))
  const bin = join(dir, 'husky')
  writeFileSync(bin, '#!/usr/bin/env node\nprocess.exit(0)\n')
  chmodSync(bin, 0o755)
  return dir
}

async function run(cmd, args, options = {}) {
  // On CI the PATH may not expose pnpm; reuse npm_execpath when available to locate the pnpm CLI.
  let spawnCmd = cmd
  let spawnArgs = args

  if (cmd === 'pnpm') {
    const execPath = process.env.npm_execpath
    const pnpmHome = process.env.PNPM_HOME
    const candidates = []
    if (execPath) {
      candidates.push(execPath, `${execPath}.cmd`)
    }
    if (pnpmHome) {
      candidates.push(join(pnpmHome, 'pnpm.cjs'), join(pnpmHome, 'pnpm.cmd'))
    }

    const found = candidates.find((p) => p && fs.existsSync(p))

    if (found) {
      const ext = extname(found).toLowerCase()
      if (ext === '.js' || ext === '.cjs' || ext === '.mjs') {
        spawnCmd = process.execPath
        spawnArgs = [found, ...args]
      } else {
        spawnCmd = found
        spawnArgs = args
      }
    }
  }

  return await new Promise((resolvePromise, reject) => {
    const child = spawn(spawnCmd, spawnArgs, {
      stdio: 'inherit',
      // Avoid relying on cmd.exe on Windows runners; run pnpm directly.
      shell: false,
      cwd,
      env: {
        ...process.env,
        CI: 'true',
        HUSKY: '0',
        HUSKY_SKIP_INSTALL: '1',
        HUSKY_SKIP_HOOKS: '1',
        PNPM_HOME: process.env.PNPM_HOME,
        PATH: `${huskyStubDir}:${process.env.PATH ?? ''}`
      },
      ...options
    })
    child.on('exit', (code) => {
      if (code === 0) return resolvePromise()
      reject(new Error(`${cmd} ${args.join(' ')} exited with code ${code}`))
    })
  })
}

async function main() {
  const nm = resolve(cwd, 'node_modules')
  await rm(nm, { recursive: true, force: true })

  const installArgs = [
    'install',
    '--filter=@dsz-examaware/desktop...',
    '--prod',
    '--frozen-lockfile',
    '--config.node-linker=isolated',
    '--config.package-import-method=copy',
    '--config.save-workspace-protocol=false'
  ]

  await run('pnpm', installArgs)
}

main().catch((err) => {
  console.error('[prepare-packdeps] failed:', err)
  process.exitCode = 1
})
