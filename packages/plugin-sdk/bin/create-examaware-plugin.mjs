#!/usr/bin/env node
import { existsSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { spawnSync } from 'node:child_process'

const [, , inputDir] = process.argv
const targetDir = resolve(process.cwd(), inputDir ?? 'examaware-plugin')
const templateRepo = process.env.EXAMAWARE_PLUGIN_TEMPLATE || 'https://github.com/ExamAware/examaware-plugin-template.git'
const templateRef = process.env.EXAMAWARE_PLUGIN_TEMPLATE_REF || 'main'

if (existsSync(targetDir)) {
  console.error(`Target directory already exists: ${targetDir}`)
  process.exit(1)
}

const packageName = createPackageName(targetDir)
const settingsPageId = `${packageName}-settings`

cloneTemplate(templateRepo, templateRef, targetDir)
postProcessTemplate(targetDir, packageName, settingsPageId)

console.log(`✔ Created ExamAware plugin scaffold at ${targetDir}`)
console.log('Next steps:')
console.log(`  cd ${targetDir}`)
console.log('  pnpm install')
console.log('  pnpm dev # or pnpm build')

function cloneTemplate(repo, ref, destination) {
  const result = spawnSync('git', ['clone', '--depth', '1', '--branch', ref, repo, destination], {
    stdio: 'inherit'
  })

  if (result.status !== 0) {
    console.error('Failed to clone template. Make sure git is installed and the repo is reachable.')
    process.exit(result.status ?? 1)
  }

  rmSync(join(destination, '.git'), { recursive: true, force: true })
}

function postProcessTemplate(destination, pkgName, settingsId) {
  const pkgPath = join(destination, 'package.json')
  if (existsSync(pkgPath)) {
    const pkg = JSON.parse(readFileSync(pkgPath, 'utf8'))
    pkg.name = pkgName
    pkg.examaware = pkg.examaware || {}
    pkg.examaware.displayName = toDisplayName(pkgName)
    pkg.examaware.settings = pkg.examaware.settings || {}
    pkg.examaware.settings.namespace = pkgName
    writeFileSync(pkgPath, `${JSON.stringify(pkg, null, 2)}\n`, 'utf8')
  }

  const rendererMain = join(destination, 'src/renderer/main.ts')
  if (existsSync(rendererMain)) {
    const content = readFileSync(rendererMain, 'utf8')
    const replaced = content.replace(/['"]examaware-plugin-template-settings['"]/g, `'${settingsId}'`)
    writeFileSync(rendererMain, replaced, 'utf8')
  }
}

function createPackageName(dir) {
  const base = dir.split(/[\\/]/).filter(Boolean).pop() ?? 'examaware-plugin'
  return (
    base
      .toLowerCase()
      .replace(/[^a-z0-9-]/g, '-')
      .replace(/^-+|(?<=-)-+/g, '') || 'examaware-plugin'
  )
}

function toDisplayName(name) {
  return name
    .split('-')
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ')
}

