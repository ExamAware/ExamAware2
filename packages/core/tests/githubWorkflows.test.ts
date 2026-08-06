import { readdirSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { describe, expect, it } from 'vitest';

const workflowsDirectory = resolve(process.cwd(), '.github/workflows');
const frozenInstallCommand = 'pnpm install --frozen-lockfile';
const githubHttpsRewrite =
  'git config --global url."https://github.com/".insteadOf git@github.com:';
const publishedPackageDirectories = ['rpc', 'core', 'player', 'plugin-sdk', 'plugin-template'];
const repositoryUrl = 'https://github.com/ExamAware/ExamAware2';

describe('GitHub workflows', () => {
  it('configures GitHub HTTPS access before every frozen pnpm install', () => {
    const workflowsWithFrozenInstall = readdirSync(workflowsDirectory)
      .filter((fileName) => /\.ya?ml$/.test(fileName))
      .map((fileName) => ({
        fileName,
        contents: readFileSync(resolve(workflowsDirectory, fileName), 'utf8')
      }))
      .filter(({ contents }) => contents.includes(frozenInstallCommand));

    expect(workflowsWithFrozenInstall.length).toBeGreaterThan(0);

    for (const { fileName, contents } of workflowsWithFrozenInstall) {
      expect(contents.indexOf(githubHttpsRewrite), fileName).toBeGreaterThanOrEqual(0);
      expect(contents.indexOf(githubHttpsRewrite), fileName).toBeLessThan(
        contents.indexOf(frozenInstallCommand)
      );
    }
  });

  it('keeps type checks out of GitHub workflows', () => {
    const workflowContents = readdirSync(workflowsDirectory)
      .filter((fileName) => /\.ya?ml$/.test(fileName))
      .map((fileName) => readFileSync(resolve(workflowsDirectory, fileName), 'utf8'));

    for (const contents of workflowContents) {
      expect(contents).not.toMatch(/type[-_: ]?check|typecheck|vue-tsc|tsc .*--noEmit/i);
    }
  });

  it('builds desktop workspace dependencies before release packaging', () => {
    const releaseWorkflow = readFileSync(resolve(workflowsDirectory, 'release.yml'), 'utf8');
    const desktopBuildIndex = releaseWorkflow.indexOf('run: pnpm ${{ matrix.build_script }}');
    const buildCommands = [
      'run: pnpm rpc:build',
      'run: pnpm core:build',
      'run: pnpm player:build',
      'run: pnpm --filter @dsz-examaware/plugin-sdk build',
      'run: pnpm control:protocol:build'
    ];

    expect(desktopBuildIndex).toBeGreaterThanOrEqual(0);
    for (const buildCommand of buildCommands) {
      expect(releaseWorkflow.indexOf(buildCommand), buildCommand).toBeGreaterThanOrEqual(0);
      expect(releaseWorkflow.indexOf(buildCommand), buildCommand).toBeLessThan(desktopBuildIndex);
    }
  });

  it('builds publishable packages without running monorepo tests', () => {
    const publishWorkflow = readFileSync(
      resolve(workflowsDirectory, 'publish-packages.yml'),
      'utf8'
    );
    const publishCommandIndex = publishWorkflow.indexOf(
      'exec npm publish --access public --provenance'
    );
    const trustedPublishingClientIndex = publishWorkflow.indexOf(
      'npm install --global npm@11.13.0'
    );
    const buildCommands = [
      'run: pnpm rpc:build',
      'run: pnpm core:build',
      'run: pnpm player:build',
      'run: pnpm --filter @dsz-examaware/plugin-sdk build'
    ];

    expect(publishWorkflow).not.toContain('run: pnpm test');
    expect(publishWorkflow).not.toContain('sudo apt-get install -y ffmpeg');
    expect(trustedPublishingClientIndex).toBeGreaterThanOrEqual(0);
    expect(publishCommandIndex).toBeGreaterThanOrEqual(0);
    for (const buildCommand of buildCommands) {
      expect(publishWorkflow.indexOf(buildCommand), buildCommand).toBeGreaterThanOrEqual(0);
      expect(publishWorkflow.indexOf(buildCommand), buildCommand).toBeLessThan(publishCommandIndex);
    }
  });

  it('declares provenance repository metadata for published packages', () => {
    for (const directory of publishedPackageDirectories) {
      const packageJson = JSON.parse(
        readFileSync(resolve(process.cwd(), 'packages', directory, 'package.json'), 'utf8')
      );

      expect(packageJson.repository?.url, directory).toBe(repositoryUrl);
      expect(packageJson.repository?.directory, directory).toBe(`packages/${directory}`);
    }
  });
});
