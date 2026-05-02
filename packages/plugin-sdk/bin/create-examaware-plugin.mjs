#!/usr/bin/env node
import { existsSync, mkdtempSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { join, resolve, dirname } from 'node:path';
import { tmpdir } from 'node:os';
import { spawnSync } from 'node:child_process';
import readline from 'node:readline/promises';
import * as tar from 'tar';

const args = process.argv.slice(2);
const { inputDir, flags } = parseArgs(args);
const targetDir = resolve(process.cwd(), inputDir ?? 'examaware-plugin');
const templatePackage = process.env.EXAMAWARE_PLUGIN_TEMPLATE || '@dsz-examaware/plugin-template';
const templateRef = process.env.EXAMAWARE_PLUGIN_TEMPLATE_REF || 'latest';

await main();

async function main() {
  if (existsSync(targetDir)) {
    console.error(`Target directory already exists: ${targetDir}`);
    process.exit(1);
  }

  const defaults = getDefaults(targetDir);
  const interactive = !flags.yes && !process.env.CI;
  const answers = interactive
    ? await promptAnswers(defaults)
    : {
        packageName: flags.name ?? defaults.packageName,
        displayName: flags.displayName ?? defaults.displayName,
        description: flags.description ?? defaults.description,
        namespace: flags.namespace ?? defaults.namespace
      };

  const sdkVersion = resolveSdkVersion(targetDir);
  const settingsPageId = `${answers.namespace}-settings`;

  downloadTemplate(templatePackage, templateRef, targetDir);
  postProcessTemplate(targetDir, {
    packageName: answers.packageName,
    displayName: answers.displayName,
    description: answers.description,
    namespace: answers.namespace,
    settingsPageId,
    sdkVersion
  });

  console.log(`✔ Created ExamAware plugin scaffold at ${targetDir}`);
  console.log('Next steps:');
  console.log(`  cd ${targetDir}`);
  console.log('  pnpm install');
  console.log('  pnpm dev # or pnpm build');
}

function parseArgs(argv) {
  const flags = {
    yes: false,
    name: null,
    displayName: null,
    description: null,
    namespace: null
  };
  const positional = [];

  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    if (!arg.startsWith('-')) {
      positional.push(arg);
      continue;
    }
    if (arg === '--yes' || arg === '-y') {
      flags.yes = true;
      continue;
    }
    if (arg === '--name') {
      flags.name = argv[i + 1] ?? null;
      i += 1;
      continue;
    }
    if (arg === '--display-name') {
      flags.displayName = argv[i + 1] ?? null;
      i += 1;
      continue;
    }
    if (arg === '--description') {
      flags.description = argv[i + 1] ?? null;
      i += 1;
      continue;
    }
    if (arg === '--namespace') {
      flags.namespace = argv[i + 1] ?? null;
      i += 1;
      continue;
    }
  }

  return { inputDir: positional[0], flags };
}

function getDefaults(dir) {
  const packageName = createPackageName(dir);
  const displayName = toDisplayName(packageName);
  return {
    packageName,
    displayName,
    description: `ExamAware plugin: ${displayName}`,
    namespace: packageName
  };
}

async function promptAnswers(defaults) {
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
  try {
    const packageName = await promptValue(rl, 'Package name', defaults.packageName);
    const displayName = await promptValue(rl, 'Display name', defaults.displayName);
    const description = await promptValue(rl, 'Description', defaults.description);
    const namespace = await promptValue(rl, 'Settings namespace', defaults.namespace);
    return { packageName, displayName, description, namespace };
  } finally {
    rl.close();
  }
}

async function promptValue(rl, label, fallback) {
  const answer = (await rl.question(`${label} (${fallback}): `)).trim();
  return answer || fallback;
}

function downloadTemplate(pkg, ref, destination) {
  const tempRoot = mkdtempSync(join(tmpdir(), 'examaware-plugin-template-'));
  const packTarget = isLocalPath(pkg) ? pkg : `${pkg}@${ref}`;
  const packResult = spawnSync('npm', ['pack', packTarget], {
    cwd: tempRoot,
    encoding: 'utf8'
  });

  if (packResult.status !== 0) {
    console.error('Failed to download template from npm.');
    console.error(packResult.stderr || packResult.stdout || '');
    rmSync(tempRoot, { recursive: true, force: true });
    process.exit(packResult.status ?? 1);
  }

  const tarballName = extractTarballName(packResult.stdout);
  const tarballPath = join(tempRoot, tarballName);

  if (!existsSync(tarballPath)) {
    console.error('Template tarball not found after npm pack.');
    rmSync(tempRoot, { recursive: true, force: true });
    process.exit(1);
  }

  mkdirSync(destination, { recursive: true });
  tar.x({
    file: tarballPath,
    cwd: destination,
    strip: 2,
    sync: true,
    filter: (entryPath) => entryPath.startsWith('package/template/')
  });

  rmSync(tempRoot, { recursive: true, force: true });
}

function isLocalPath(value) {
  return value.startsWith('/') || value.startsWith('./') || value.startsWith('../');
}

function extractTarballName(stdout) {
  const lines = (stdout || '').trim().split(/\r?\n/).filter(Boolean);
  const last = lines[lines.length - 1] || '';
  const parts = last.split(/\s+/).filter((part) => part.endsWith('.tgz'));
  if (parts.length > 0) {
    return parts[parts.length - 1];
  }
  if (last.endsWith('.tgz')) {
    return last;
  }
  console.error('Unable to parse npm pack output.');
  process.exit(1);
}

function resolveSdkVersion(startDir) {
  if (findWorkspaceRoot(startDir)) {
    return 'workspace:*';
  }
  const result = spawnSync('npm', ['view', '@dsz-examaware/plugin-sdk', 'version'], {
    encoding: 'utf8'
  });
  if (result.status === 0) {
    const version = (result.stdout || '').trim();
    if (version) {
      return `^${version}`;
    }
  }
  return '^1.0.0';
}

function findWorkspaceRoot(startDir) {
  let current = resolve(startDir);
  while (current && current !== dirname(current)) {
    const marker = join(current, 'pnpm-workspace.yaml');
    const sdkPkg = join(current, 'packages', 'plugin-sdk', 'package.json');
    if (existsSync(marker) && existsSync(sdkPkg)) {
      return current;
    }
    current = dirname(current);
  }
  return null;
}

function postProcessTemplate(destination, options) {
  const {
    packageName,
    displayName,
    description,
    namespace,
    settingsPageId,
    sdkVersion
  } = options;

  const pkgPath = join(destination, 'package.json');
  if (existsSync(pkgPath)) {
    const pkg = JSON.parse(readFileSync(pkgPath, 'utf8'));
    pkg.name = packageName;
    pkg.description = description;
    pkg.examaware = pkg.examaware || {};
    pkg.examaware.displayName = displayName;
    pkg.examaware.description = description;
    pkg.examaware.settings = pkg.examaware.settings || {};
    pkg.examaware.settings.namespace = namespace;
    if (pkg.examaware.services?.provide?.length) {
      pkg.examaware.services.provide = [
        `${namespace}.hello.message`
      ];
    }
    pkg.dependencies = pkg.dependencies || {};
    pkg.dependencies['@dsz-examaware/plugin-sdk'] = sdkVersion;
    writeFileSync(pkgPath, `${JSON.stringify(pkg, null, 2)}\n`, 'utf8');
  }

  const rendererMain = join(destination, 'src/renderer/main.ts');
  if (existsSync(rendererMain)) {
    const content = readFileSync(rendererMain, 'utf8');
    const replaced = content.replace(
      /['"]examaware-plugin-template-settings['"]/g,
      `'${settingsPageId}'`
    );
    const replacedNamespace = replaced.replace(/__PLUGIN_NAMESPACE__/g, namespace);
    writeFileSync(rendererMain, replacedNamespace, 'utf8');
  }

  const readmePath = join(destination, 'README.md');
  if (existsSync(readmePath)) {
    const readme = readFileSync(readmePath, 'utf8');
    const updated = readme.replace(/^#\s+.*$/m, `# ${displayName}`);
    writeFileSync(readmePath, updated, 'utf8');
  }

  const mainEntry = join(destination, 'src/main/index.ts');
  if (existsSync(mainEntry)) {
    const content = readFileSync(mainEntry, 'utf8');
    const replaced = content.replace(/__PLUGIN_NAMESPACE__/g, namespace);
    writeFileSync(mainEntry, replaced, 'utf8');
  }
}

function createPackageName(dir) {
  const base = dir.split(/[\\/]/).filter(Boolean).pop() ?? 'examaware-plugin';
  return (
    base
          if (pkg.examaware.services?.provide?.length) {
            pkg.examaware.services.provide = [
              `${namespace}.hello.message`
            ];
          }
      .toLowerCase()
      .replace(/[^a-z0-9-]/g, '-')
      .replace(/^-+|(?<=-)-+/g, '') || 'examaware-plugin'
  );
}

function toDisplayName(name) {
  return name
    .split('-')
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');
}
