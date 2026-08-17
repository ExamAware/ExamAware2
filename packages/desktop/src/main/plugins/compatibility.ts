import semver from 'semver'

const SEMVER_OPTIONS = { includePrerelease: true } as const

export interface PluginCompatibilityInput {
  hostVersion?: string
  hostSdkVersion?: string
  supportedPluginSdkRange?: string
  pluginDesktopRange?: string
  pluginHostSdkRange?: string
  pluginSdkDependency?: string
}

function coerceVersion(input?: string | null): string | undefined {
  return semver.coerce(input ?? undefined)?.version
}

function validRange(input?: string): string | undefined {
  if (!input) return undefined
  return semver.validRange(input, SEMVER_OPTIONS) ?? undefined
}

function pluginDependencyRange(input?: string): string | undefined {
  if (!input) return undefined
  const trimmed = input.trim()
  const candidate = trimmed.startsWith('workspace:')
    ? trimmed.slice('workspace:'.length) || '*'
    : trimmed
  return validRange(candidate)
}

function pluginHostRange(input?: string): string | undefined {
  if (!input) return undefined
  const exact = semver.valid(input, SEMVER_OPTIONS)
  if (!exact) return validRange(input)

  const parsed = semver.parse(exact)
  if (!parsed) return undefined
  const upperBound = parsed.major === 0 ? `0.${parsed.minor + 1}.0` : `${parsed.major + 1}.0.0`
  return `>=${exact} <${upperBound}`
}

export function collectPluginCompatibilityIssues(input: PluginCompatibilityInput): string[] {
  const issues: string[] = []
  const hostVersion = coerceVersion(input.hostVersion)
  const hostSdkVersion = coerceVersion(input.hostSdkVersion)

  const desktopRange = validRange(input.pluginDesktopRange)
  if (desktopRange && hostVersion && !semver.satisfies(hostVersion, desktopRange, SEMVER_OPTIONS)) {
    issues.push(`宿主版本 ${hostVersion} 不满足插件要求 ${desktopRange}`)
  }

  const requiredHostSdkRange = pluginHostRange(input.pluginHostSdkRange)
  if (
    requiredHostSdkRange &&
    hostSdkVersion &&
    !semver.satisfies(hostSdkVersion, requiredHostSdkRange, SEMVER_OPTIONS)
  ) {
    issues.push(`宿主 SDK ${hostSdkVersion} 不满足插件要求 ${requiredHostSdkRange}`)
  }

  const supportedPluginSdkRange = validRange(input.supportedPluginSdkRange)
  const declaredPluginSdkRange = pluginDependencyRange(input.pluginSdkDependency)
  if (supportedPluginSdkRange && declaredPluginSdkRange) {
    if (!semver.intersects(supportedPluginSdkRange, declaredPluginSdkRange, SEMVER_OPTIONS)) {
      issues.push(
        `插件 SDK ${declaredPluginSdkRange} 不在客户端支持范围 ${supportedPluginSdkRange} 内`
      )
    }

    const minimumPluginSdk = semver.minVersion(declaredPluginSdkRange, SEMVER_OPTIONS)
    if (
      minimumPluginSdk &&
      hostSdkVersion &&
      semver.gt(minimumPluginSdk, hostSdkVersion, SEMVER_OPTIONS)
    ) {
      issues.push(`插件至少需要 SDK ${minimumPluginSdk.version}，宿主仅提供 ${hostSdkVersion}`)
    }
  }

  return issues
}
