import { describe, expect, it } from 'vitest'
import {
  PluginPermissions,
  definePluginApiModule,
  definePluginApiModuleToken
} from '@dsz-examaware/plugin-sdk'
import {
  AsyncDisposableScope,
  PluginApiModuleRegistry,
  createPermissionApi
} from '../../../src/shared/pluginApi/runtime'

const options = (
  scope = new AsyncDisposableScope(),
  permissions = createPermissionApi('test', [])
) => ({
  pluginName: 'test',
  process: 'main' as const,
  permissions,
  scope
})

describe('plugin API runtime', () => {
  it('grants defaults but rejects undeclared capabilities', () => {
    const permissions = createPermissionApi('example', [])
    expect(permissions.has(PluginPermissions.Time.Read)).toBe(true)
    expect(() => permissions.require(PluginPermissions.Files.Read)).toThrow(/files\.read/)
  })

  it('creates dependencies first and releases module resources in reverse order', async () => {
    const calls: string[] = []
    const dependencyToken = definePluginApiModuleToken<{ dependency: { value: number } }>(
      'test.dep'
    )
    const consumerToken = definePluginApiModuleToken<{ consumer: { value: number } }>(
      'test.consumer'
    )
    const dependency = definePluginApiModule({
      token: dependencyToken,
      scope: 'both',
      create(context) {
        calls.push('create-dependency')
        context.own(() => calls.push('dispose-dependency'))
        return { dependency: { value: 2 } }
      }
    })
    const consumer = definePluginApiModule({
      token: consumerToken,
      scope: 'main',
      dependencies: [dependencyToken],
      create(context) {
        calls.push('create-consumer')
        context.own(() => calls.push('dispose-consumer'))
        return { consumer: { value: context.resolve(dependencyToken).dependency.value + 1 } }
      }
    })
    const scope = new AsyncDisposableScope()
    const api = await new PluginApiModuleRegistry([consumer, dependency]).create(options(scope))

    expect(api).toMatchObject({ dependency: { value: 2 }, consumer: { value: 3 } })
    await scope.dispose()
    expect(calls).toEqual([
      'create-dependency',
      'create-consumer',
      'dispose-consumer',
      'dispose-dependency'
    ])
  })

  it('checks declared module permissions before creating dependencies', async () => {
    const dependencyToken = definePluginApiModuleToken<{ dependency: object }>('permission.dep')
    const restrictedToken = definePluginApiModuleToken<{ restricted: object }>('permission.api')
    const calls: string[] = []
    const dependency = definePluginApiModule({
      token: dependencyToken,
      scope: 'both',
      create: () => {
        calls.push('dependency')
        return { dependency: {} }
      }
    })
    const restricted = definePluginApiModule({
      token: restrictedToken,
      scope: 'main',
      dependencies: [dependencyToken],
      permissions: [PluginPermissions.Files.Read],
      create: () => ({ restricted: {} })
    })

    await expect(
      new PluginApiModuleRegistry([restricted, dependency]).create(options())
    ).rejects.toMatchObject({ code: 'permission-denied' })
    expect(calls).toEqual([])
  })

  it('rejects cycles, duplicate tokens and overlapping public fields', async () => {
    const leftToken = definePluginApiModuleToken<{ shared: object }>('cycle.left')
    const rightToken = definePluginApiModuleToken<{ shared: object }>('cycle.right')
    const left = definePluginApiModule({
      token: leftToken,
      scope: 'both',
      dependencies: [rightToken],
      create: () => ({ shared: {} })
    })
    const right = definePluginApiModule({
      token: rightToken,
      scope: 'both',
      dependencies: [leftToken],
      create: () => ({ shared: {} })
    })

    expect(() => new PluginApiModuleRegistry([left, left])).toThrow(/重复/)
    await expect(
      new PluginApiModuleRegistry([left, right]).create(options())
    ).rejects.toMatchObject({
      code: 'conflict'
    })

    const standaloneRight = definePluginApiModule({
      token: rightToken,
      scope: 'both',
      create: () => ({ shared: {} })
    })
    const standaloneLeft = definePluginApiModule({
      token: leftToken,
      scope: 'both',
      create: () => ({ shared: {} })
    })
    await expect(
      new PluginApiModuleRegistry([standaloneLeft, standaloneRight]).create(options())
    ).rejects.toMatchObject({ code: 'conflict' })
  })
})
