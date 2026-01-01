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
  // Build attempt list for pnpm on Windows to avoid ENOENT from missing shim/binary.
  const attempts = []

  if (cmd === 'pnpm') {
    const execPath = process.env.npm_execpath
    const pnpmHome = process.env.PNPM_HOME
    const candidates = []
    if (execPath) {
      candidates.push(execPath, `${execPath}.cmd`, `${execPath}.exe`)
    }
    if (pnpmHome) {
      candidates.push(
        join(pnpmHome, 'pnpm.cjs'),
        join(pnpmHome, 'pnpm.cmd'),
        join(pnpmHome, 'pnpm.exe')
      )
    }

    for (const candidate of candidates) {
      if (!candidate || !fs.existsSync(candidate)) continue
      const ext = extname(candidate).toLowerCase()
      if (ext === '.js' || ext === '.cjs' || ext === '.mjs') {
        attempts.push({ spawnCmd: process.execPath, spawnArgs: [candidate, ...args], shell: false })
      } else {
        attempts.push({ spawnCmd: candidate, spawnArgs: args, shell: false })
      }
    }

    // Fallbacks: PATH-resolved pnpm executables
    attempts.push({ spawnCmd: 'pnpm.exe', spawnArgs: args, shell: false })
    attempts.push({ spawnCmd: 'pnpm.cmd', spawnArgs: args, shell: false })
    attempts.push({ spawnCmd: 'pnpm', spawnArgs: args, shell: process.platform === 'win32' })
  } else {
    attempts.push({ spawnCmd: cmd, spawnArgs: args, shell: false })
  }

  let lastError
  for (const attempt of attempts) {
    try {
      await new Promise((resolvePromise, reject) => {
        const child = spawn(attempt.spawnCmd, attempt.spawnArgs, {
          stdio: 'inherit',
          shell: attempt.shell,
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
        child.on('error', reject)
        child.on('exit', (code) => {
          if (code === 0) return resolvePromise()
          reject(new Error(`${attempt.spawnCmd} ${attempt.spawnArgs.join(' ')} exited with code ${code}`))
        })
      })
      return
    } catch (err) {
      lastError = err
    }
  }

  throw lastError ?? new Error('Failed to run command')
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
