import fs, { chmodSync, mkdtempSync, writeFileSync } from 'node:fs'
import { rm } from 'node:fs/promises'
import { tmpdir } from 'node:os'
import { extname, join, resolve, delimiter } from 'node:path'
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

function findPnpmExecutable(args) {
  const execPath = process.env.npm_execpath
  const pnpmHome =
    process.env.PNPM_HOME ||
    (process.platform === 'win32' ? 'C:/Users/runneradmin/setup-pnpm/node_modules/.bin' : undefined)

  const searchDirs = [pnpmHome, ...String(process.env.PATH || '').split(delimiter).filter(Boolean)].filter(Boolean)
  const candidateFiles = ['pnpm.cjs', 'pnpm.mjs', 'pnpm.js', 'pnpm.exe', 'pnpm.cmd', 'pnpm.ps1', 'pnpm']

  // Priority: explicit execPath candidates
  const directCandidates = []
  if (execPath) {
    directCandidates.push(execPath, `${execPath}.cmd`, `${execPath}.exe`)
  }

  const tryPaths = [
    ...directCandidates,
    ...searchDirs.flatMap((dir) => candidateFiles.map((f) => join(dir, f))),
    ...candidateFiles // bare names for PATH resolution
  ].filter(Boolean)

  for (const candidate of tryPaths) {
    if (!candidate) continue
    if (candidate.includes(delimiter)) continue
    if (candidate.includes('/') || candidate.includes('\\')) {
      if (!fs.existsSync(candidate)) continue
    }
    return { path: candidate, pnpmHome, tried: tryPaths }
  }
  return { path: null, pnpmHome, tried: tryPaths }
}

async function run(cmd, args, options = {}) {
  // Build attempt list for pnpm on Windows to avoid ENOENT from missing shim/binary.
  const attempts = []

  if (cmd === 'pnpm') {
    const { path: resolved, pnpmHome, tried } = findPnpmExecutable(args)
    console.error('[prepare-packdeps] resolved pnpm', { resolved, pnpmHome, tried })
    if (resolved) {
      const ext = extname(resolved).toLowerCase()
      if (ext === '.js' || ext === '.cjs' || ext === '.mjs') {
        attempts.push({ spawnCmd: process.execPath, spawnArgs: [resolved, ...args], shell: false, pnpmHome })
      } else if (ext === '.ps1') {
        attempts.push({
          spawnCmd: 'powershell.exe',
          spawnArgs: ['-ExecutionPolicy', 'Bypass', '-File', resolved, ...args],
          shell: false,
          pnpmHome
        })
      } else {
        attempts.push({ spawnCmd: resolved, spawnArgs: args, shell: false, pnpmHome })
      }
    }

    // Fallbacks: PATH-resolved pnpm executables (never through cmd.exe)
    attempts.push({ spawnCmd: 'pnpm.exe', spawnArgs: args, shell: false, pnpmHome })
    attempts.push({ spawnCmd: 'pnpm.cmd', spawnArgs: args, shell: false, pnpmHome })
    attempts.push({
      spawnCmd: 'powershell.exe',
      spawnArgs: ['-ExecutionPolicy', 'Bypass', '-File', 'pnpm.ps1', ...args],
      shell: false,
      pnpmHome
    })
    attempts.push({ spawnCmd: 'pnpm', spawnArgs: args, shell: false, pnpmHome })
    attempts.push({
      spawnCmd: 'powershell.exe',
      spawnArgs: ['-ExecutionPolicy', 'Bypass', '-Command', 'pnpm', ...args],
      shell: false,
      pnpmHome
    })
  } else {
    attempts.push({ spawnCmd: cmd, spawnArgs: args, shell: false, pnpmHome: process.env.PNPM_HOME })
  }

  let lastError
  for (const attempt of attempts) {
    try {
      await new Promise((resolvePromise, reject) => {
        console.error('[prepare-packdeps] trying pnpm spawn', {
          cmd: attempt.spawnCmd,
          args: attempt.spawnArgs,
          shell: attempt.shell,
          npm_execpath: process.env.npm_execpath,
          pnpm_home: attempt.pnpmHome,
          path: process.env.PATH
        })
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
            PNPM_HOME: attempt.pnpmHome,
            PATH: [huskyStubDir, attempt.pnpmHome, process.env.PATH].filter(Boolean).join(delimiter)
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
      console.error('[prepare-packdeps] pnpm spawn failed', err)
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
