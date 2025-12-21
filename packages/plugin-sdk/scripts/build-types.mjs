#!/usr/bin/env node

import { spawn } from 'node:child_process'
import { rm } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const projectRoot = path.resolve(__dirname, '..')

function run(command, args, options = {}) {
  return new Promise((resolve, reject) => {
    const child = spawn(command, args, {
      stdio: 'inherit',
      shell: process.platform === 'win32',
      ...options
    })
    child.on('exit', (code) => {
      if (code === 0) {
        resolve()
      } else {
        reject(new Error(`${command} ${args.join(' ')} exited with code ${code}`))
      }
    })
  })
}

async function main() {
  await rm(path.join(projectRoot, 'dist-types'), { recursive: true, force: true })
  await run('pnpm', [
    'exec',
    'tsc',
    '--project',
    'tsconfig.json',
    '--emitDeclarationOnly',
    '--declaration',
    '--outDir',
    'dist-types'
  ], { cwd: projectRoot })
  await import('./copy-types.mjs')
}

main().catch((err) => {
  console.error('[build-types] Failed to generate declaration files:', err)
  process.exitCode = 1
})
