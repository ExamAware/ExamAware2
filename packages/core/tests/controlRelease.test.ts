import { mkdtempSync, readFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { resolve } from 'node:path';
import { spawnSync } from 'node:child_process';
import { describe, expect, it } from 'vitest';

const repositoryRoot = process.cwd();
const workflow = readFileSync(
  resolve(repositoryRoot, '.github/workflows/release-control.yml'),
  'utf8'
);
const installer = resolve(repositoryRoot, 'deploy/install.sh');
const compose = readFileSync(resolve(repositoryRoot, 'deploy/compose.yml'), 'utf8');
const environmentExample = readFileSync(resolve(repositoryRoot, 'deploy/.env.example'), 'utf8');
const deploymentGuide = readFileSync(
  resolve(repositoryRoot, 'docs/usage/control-deploy.md'),
  'utf8'
);
const controlManifestPaths = [
  'packages/control-server/package.json',
  'packages/control-protocol/package.json',
  'packages/control-console/package.json'
];

function runInstallerLibrary(script: string, environment: NodeJS.ProcessEnv = {}) {
  return spawnSync('bash', ['-c', `source "$INSTALLER"; ${script}`], {
    cwd: repositoryRoot,
    env: {
      ...process.env,
      EXAMAWARE_INSTALL_LIB_ONLY: '1',
      INSTALLER: installer,
      ...environment
    },
    encoding: 'utf8'
  });
}

describe('control release contract', () => {
  it('keeps all control package and documentation versions at 0.1.2', () => {
    const versions = controlManifestPaths.map(
      (path) => JSON.parse(readFileSync(resolve(repositoryRoot, path), 'utf8')).version
    );

    expect(versions).toEqual(['0.1.2', '0.1.2', '0.1.2']);
    expect(environmentExample).toContain('CONTROL_VERSION=control-v0.1.2');
    expect(deploymentGuide).toContain('当前发布版本：`control-v0.1.2`');
    expect(deploymentGuide).not.toContain('control-v0.2.0');
  });

  it('uses domestic defaults while preserving official and private overrides', () => {
    const commonEnvironment = {
      EXAMAWARE_NONINTERACTIVE: '1',
      BETTER_AUTH_URL: 'http://192.0.2.8:65431',
      CONTROL_ADMIN_PASSWORD: 'ExamAwareReleaseTest',
      HTTP_PORT: '65431'
    };
    const script =
      'require_port_free() { return 0; }; prepare_new_install_settings; printf "%s|%s" "$POSTGRES_IMAGE" "$CONTROL_REGISTRY"';

    const defaults = runInstallerLibrary(script, commonEnvironment);
    expect(defaults.status, defaults.stderr).toBe(0);
    expect(defaults.stdout).toBe('docker.1ms.run/postgres:17-alpine|ghcr.1ms.run');

    const official = runInstallerLibrary(script, {
      ...commonEnvironment,
      DOCKER_ACCELERATE: '0'
    });
    expect(official.status, official.stderr).toBe(0);
    expect(official.stdout).toBe('postgres:17-alpine|ghcr.io');

    const privateRegistry = runInstallerLibrary(script, {
      ...commonEnvironment,
      POSTGRES_IMAGE: 'registry.example/postgres:17',
      CONTROL_REGISTRY: 'registry.example/control'
    });
    expect(privateRegistry.status, privateRegistry.stderr).toBe(0);
    expect(privateRegistry.stdout).toBe('registry.example/postgres:17|registry.example/control');
  });

  it('renders runtime Compose with domain-specific 443 behavior', () => {
    const directory = mkdtempSync(resolve(tmpdir(), 'examaware-compose-test-'));
    const noDomainPath = resolve(directory, 'no-domain.yml');
    const domainPath = resolve(directory, 'domain.yml');
    const result = runInstallerLibrary(
      `DOMAIN=''; generate_runtime_compose deploy/compose.yml '${noDomainPath}'; DOMAIN='control.example.com'; generate_runtime_compose deploy/compose.yml '${domainPath}'`
    );

    expect(result.status, result.stderr).toBe(0);
    expect(readFileSync(noDomainPath, 'utf8')).not.toContain("'443:443'");
    expect(readFileSync(domainPath, 'utf8')).toContain("'443:443'");
    expect(compose).toContain("'${HTTP_PORT:-8219}:80'");
    expect(compose).toContain('control-postgres-data:/var/lib/postgresql/data');
  });

  it('documents safe domestic-first installer acquisition and Docker-only first install', () => {
    const domesticInstaller =
      'https://ghproxy.cfd/https://github.com/ExamAware/ExamAware-Control/releases/latest/download/install.sh';
    const officialInstaller =
      'https://github.com/ExamAware/ExamAware-Control/releases/latest/download/install.sh';

    expect(deploymentGuide.indexOf(domesticInstaller)).toBeGreaterThanOrEqual(0);
    expect(deploymentGuide.indexOf(domesticInstaller)).toBeLessThan(
      deploymentGuide.indexOf(officialInstaller)
    );
    expect(deploymentGuide).toContain('bash /tmp/examaware-control-install.sh');
    expect(deploymentGuide).toContain('bash <(curl -sSL https://linuxmirrors.cn/docker.sh)');
    expect(deploymentGuide).toContain('新的原生 systemd 首次安装暂时关闭');
    expect(deploymentGuide).toContain('8219');
  });

  it('strictly matches the release tag to manifests and source main', () => {
    expect(workflow).toContain('^control-v[0-9]+\\.[0-9]+\\.[0-9]+$');
    expect(workflow).toContain('process.env.VERSION.replace(/^control-v/, "")');
    for (const path of controlManifestPaths) expect(workflow).toContain(path);
    expect(workflow).toContain('git fetch --no-tags origin main');
    expect(workflow).toContain('git merge-base --is-ancestor "$GITHUB_SHA" origin/main');
  });

  it('runs installer CSS Caddy and archive gates before either image push', () => {
    const firstPush = workflow.indexOf('push: true');
    expect(firstPush).toBeGreaterThanOrEqual(0);

    for (const marker of [
      'Installer and release contract gate',
      'Production CSS artifact gate',
      'Caddy and Chromium production gate',
      'Assemble and validate release archives',
      'sha256sum -c SHA256SUMS'
    ]) {
      const gate = workflow.indexOf(marker);
      expect(gate, marker).toBeGreaterThanOrEqual(0);
      expect(gate, marker).toBeLessThan(firstPush);
    }
  });

  it('publishes the legacy archive names, standalone installer, and checksums', () => {
    expect(workflow).toContain('examaware-control-${VERSION}.tar.gz');
    expect(workflow).toContain('examaware-control-docker-${VERSION}.tar.gz');
    expect(workflow).toContain('deploy/install.sh "$full_archive" "$docker_archive" > SHA256SUMS');
    expect(workflow).toContain('deploy/install.sh');
    expect(workflow).toContain('SHA256SUMS');
    expect(workflow).toContain("grep -Fx './compose.yml' /tmp/docker-members");
    expect(workflow).toContain("grep -Fx './deploy/compose.yml' /tmp/full-members");
  });
});
