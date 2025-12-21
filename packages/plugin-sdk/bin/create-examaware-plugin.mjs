#!/usr/bin/env node
import { existsSync, mkdirSync, readFileSync, readdirSync, writeFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const [, , inputDir] = process.argv
const targetDir = resolve(process.cwd(), inputDir ?? 'examaware-plugin')

if (existsSync(targetDir)) {
  console.error(`Target directory already exists: ${targetDir}`)
  process.exit(1)
}

mkdirSync(targetDir, { recursive: true })

const packageName = createPackageName(targetDir)
const settingsPageId = `${packageName}-settings`
const templateDir = resolve(dirname(fileURLToPath(import.meta.url)), '../templates')
const templateContext = {
  PACKAGE_NAME: packageName,
  SETTINGS_PAGE_ID: settingsPageId,
  PLUGIN_SDK_VERSION: '^0.1.0',
  VUE_VERSION: '^3.5.19',
  TYPESCRIPT_VERSION: '~5.7.3',
  VITE_VERSION: '^6.3.5',
  VITE_PLUGIN_VUE_VERSION: '^5.1.4',
  VUE_TSC_VERSION: '^2.1.10',
  NPM_RUN_ALL_VERSION: '^7.0.2',
  NODE_TYPES_VERSION: '^20.17.6'
}

copyTemplateTree(templateDir)

console.log(`✔ Created ExamAware plugin scaffold at ${targetDir}`)
console.log('Next steps:')
console.log(`  cd ${targetDir}`)
console.log('  pnpm install')
console.log('  pnpm dev # or pnpm build')

function copyTemplateTree(currentDir, relative = '') {
  const entries = readdirSync(currentDir, { withFileTypes: true })
  for (const entry of entries) {
    const sourcePath = join(currentDir, entry.name)
    const relPath = relative ? join(relative, entry.name) : entry.name
    if (entry.isDirectory()) {
      copyTemplateTree(sourcePath, relPath)
      continue
    }
    const isTemplate = entry.name.endsWith('.tpl')
    const targetRelativePath = isTemplate ? relPath.replace(/\.tpl$/, '') : relPath
    const template = readFileSync(sourcePath, 'utf8')
    const rendered = isTemplate ? renderTemplate(template, templateContext) : template
    writeFile(targetRelativePath, rendered.endsWith('\n') ? rendered : `${rendered}\n`)
  }
}

function writeFile(relPath, content) {
  const fullPath = join(targetDir, relPath)
  mkdirSync(dirname(fullPath), { recursive: true })
  writeFileSync(fullPath, content, 'utf8')
}

function renderTemplate(template, ctx) {
  return template.replace(/\{\{(\w+)\}\}/g, (_, key) => {
    return ctx[key] ?? ''
  })
}

function createPackageName(dir) {
  const base = dir.split(/[\\/]/).filter(Boolean).pop() ?? 'examaware-plugin'
  return base
    .toLowerCase()
    .replace(/[^a-z0-9-]/g, '-')
    .replace(/^-+|(?<=-)-+/g, '') || 'examaware-plugin'
}

