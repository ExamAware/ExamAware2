#!/usr/bin/env node
import fs from 'node:fs'
import { promises as fsp } from 'node:fs'
import path from 'node:path'
import process from 'node:process'
import archiver from 'archiver'

async function main() {
  const cwd = process.cwd()
  const packageJsonPath = path.join(cwd, 'package.json')

  if (!fs.existsSync(packageJsonPath)) {
    console.error('未找到 package.json，请在插件根目录运行该命令')
    process.exit(1)
  }

  const pkg = JSON.parse(await fsp.readFile(packageJsonPath, 'utf-8'))
  const pluginName = String(pkg.name ?? 'examaware-plugin').split('/').pop()
  const version = pkg.version ?? '0.0.0'

  if (!pkg.examaware) {
    console.error('package.json 中缺少 examaware 字段，无法打包插件')
    process.exit(1)
  }

  const distDir = path.join(cwd, 'dist')
  if (!fs.existsSync(distDir)) {
    console.error('未找到 dist 目录，请先执行构建命令')
    process.exit(1)
  }

  const outDir = distDir
  await fsp.mkdir(outDir, { recursive: true })
  const outputPath = path.join(outDir, `${pluginName}-${version}.ea2x`)
  const output = fs.createWriteStream(outputPath)
  const archive = archiver('zip', { zlib: { level: 9 } })

  archive.on('warning', (err) => {
    console.warn('[pack-examaware-plugin] warning', err)
  })

  const finalize = new Promise((resolve, reject) => {
    output.on('close', resolve)
    output.on('error', reject)
    archive.on('error', reject)
  })

  archive.pipe(output)
  archive.file(packageJsonPath, { name: 'package.json' })

  const readmePath = findReadme(cwd)
  if (readmePath) {
    archive.file(readmePath, { name: 'README.md' })
  }

  const schemaPath = resolveSchemaPath(cwd, pkg.examaware)
  if (schemaPath) {
    archive.file(schemaPath, { name: path.relative(cwd, schemaPath) })
  }

  archive.directory(distDir, 'dist')

  await archive.finalize()
  await finalize
  console.log(`✔ 打包完成：${outputPath}`)
}

function findReadme(cwd) {
  const candidates = ['README.md', 'Readme.md', 'readme.md']
  for (const candidate of candidates) {
    const full = path.join(cwd, candidate)
    if (fs.existsSync(full)) return full
  }
  return null
}

function resolveSchemaPath(cwd, manifest) {
  const schemaRel = manifest?.settings?.schema
  if (!schemaRel) return null
  const schemaPath = path.resolve(cwd, schemaRel)
  if (!schemaPath.startsWith(path.resolve(cwd))) return null
  if (!fs.existsSync(schemaPath)) return null
  return schemaPath
}

main().catch((error) => {
  console.error('[pack-examaware-plugin] failed', error)
  process.exit(1)
})
