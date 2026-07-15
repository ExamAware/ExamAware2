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

  it('builds workspace packages before running publish tests', () => {
    const publishWorkflow = readFileSync(
      resolve(workflowsDirectory, 'publish-packages.yml'),
      'utf8'
    );
    const testCommandIndex = publishWorkflow.indexOf('run: pnpm test');
    const mediaDependenciesIndex = publishWorkflow.indexOf('sudo apt-get install -y ffmpeg');
    const trustedPublishingClientIndex = publishWorkflow.indexOf(
      'npm install --global npm@11.13.0'
    );
    const buildCommands = [
      'run: pnpm rpc:build',
      'run: pnpm core:build',
      'run: pnpm player:build',
      'run: pnpm --filter @dsz-examaware/plugin-sdk build'
    ];

    expect(testCommandIndex).toBeGreaterThanOrEqual(0);
    expect(mediaDependenciesIndex).toBeGreaterThanOrEqual(0);
    expect(mediaDependenciesIndex).toBeLessThan(testCommandIndex);
    expect(trustedPublishingClientIndex).toBeGreaterThanOrEqual(0);
    expect(publishWorkflow).toContain('exec npm publish --access public --provenance');
    for (const buildCommand of buildCommands) {
      expect(publishWorkflow.indexOf(buildCommand), buildCommand).toBeGreaterThanOrEqual(0);
      expect(publishWorkflow.indexOf(buildCommand), buildCommand).toBeLessThan(testCommandIndex);
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
