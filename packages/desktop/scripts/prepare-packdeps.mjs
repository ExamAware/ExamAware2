import { rm } from 'node:fs/promises'
import { resolve } from 'node:path'
import { spawn } from 'node:child_process'

const cwd = resolve(new URL('.', import.meta.url).pathname, '..')

async function run(cmd, args, options = {}) {
  return await new Promise((resolvePromise, reject) => {
    const child = spawn(cmd, args, { stdio: 'inherit', shell: process.platform === 'win32', cwd, ...options })
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
    '--prod',
    '--frozen-lockfile',
    '--config.node-linker=hoisted',
    '--config.package-import-method=copy',
    '--config.hoist-pattern=*',
    '--config.shamefully-hoist=true',
    '--config.save-workspace-protocol=false'
  ]

  await run('pnpm', installArgs)
}

main().catch((err) => {
  console.error('[prepare-packdeps] failed:', err)
  process.exitCode = 1
})
