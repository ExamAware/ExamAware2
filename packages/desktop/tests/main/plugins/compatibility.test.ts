import { describe, expect, it } from 'vitest'
import { collectPluginCompatibilityIssues } from '../../../src/main/plugins/compatibility'

const host = {
  hostVersion: '1.5.1',
  hostSdkVersion: '1.5.0',
  supportedPluginSdkRange: '>=1.0.0 <2.0.0'
}

describe('plugin SDK compatibility', () => {
  it('accepts a plugin built with an older exact SDK version', () => {
    expect(
      collectPluginCompatibilityIssues({
        ...host,
        pluginSdkDependency: '1.4.4'
      })
    ).toEqual([])
  })

  it('accepts a plugin built with an older SDK range', () => {
    expect(
      collectPluginCompatibilityIssues({
        ...host,
        pluginSdkDependency: '^1.4.0'
      })
    ).toEqual([])
  })

  it('treats a legacy exact host SDK declaration as same-major upward compatible', () => {
    expect(
      collectPluginCompatibilityIssues({
        ...host,
        pluginHostSdkRange: '1.4.4',
        pluginSdkDependency: '1.4.4'
      })
    ).toEqual([])
  })

  it('rejects a plugin that requires a newer SDK than the host provides', () => {
    expect(
      collectPluginCompatibilityIssues({
        ...host,
        pluginSdkDependency: '^1.6.0'
      })
    ).toContain('插件至少需要 SDK 1.6.0，宿主仅提供 1.5.0')
  })

  it('rejects a plugin SDK outside the client declared compatibility range', () => {
    const issues = collectPluginCompatibilityIssues({
      ...host,
      pluginSdkDependency: '^2.0.0'
    })

    expect(issues.some((issue) => issue.includes('不在客户端支持范围'))).toBe(true)
  })

  it('respects explicit plugin ranges for desktop and host SDK versions', () => {
    const issues = collectPluginCompatibilityIssues({
      ...host,
      pluginDesktopRange: '>=1.6.0',
      pluginHostSdkRange: '>=1.6.0'
    })

    expect(issues).toContain('宿主版本 1.5.1 不满足插件要求 >=1.6.0')
    expect(issues).toContain('宿主 SDK 1.5.0 不满足插件要求 >=1.6.0')
  })

  it('accepts workspace SDK declarations used by local plugins', () => {
    expect(
      collectPluginCompatibilityIssues({
        ...host,
        pluginSdkDependency: 'workspace:*'
      })
    ).toEqual([])
  })
})
