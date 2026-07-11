import { describe, expect, it } from 'vitest'
import { buildPluginGraph } from './graph'

describe('buildPluginGraph', () => {
  it('orders providers before consumers and keeps independent insertion order', () => {
    const result = buildPluginGraph([
      { name: 'independent', provides: [], injects: [] },
      { name: 'consumer', provides: [], injects: ['clock'] },
      { name: 'provider', provides: ['clock'], injects: [] }
    ])

    expect(result.order.indexOf('provider')).toBeLessThan(result.order.indexOf('consumer'))
    expect(result.missingServices).toEqual([])
    expect(result.cycles).toEqual([])
  })

  it('reports each missing service without blocking unrelated ordering', () => {
    const result = buildPluginGraph([
      { name: 'missing', provides: [], injects: ['a', 'b'] },
      { name: 'healthy', provides: [], injects: [] }
    ])

    expect(result.missingServices).toEqual([
      { plugin: 'missing', service: 'a' },
      { plugin: 'missing', service: 'b' }
    ])
    expect(result.order).toEqual(['missing', 'healthy'])
  })

  it('rejects duplicate plugin names instead of silently collapsing nodes', () => {
    expect(() =>
      buildPluginGraph([
        { name: 'same', provides: [], injects: [] },
        { name: 'same', provides: [], injects: [] }
      ])
    ).toThrow(/duplicate plugin/i)
  })

  it('does not treat a plugin consuming its own service as a dependency cycle', () => {
    const result = buildPluginGraph([
      { name: 'self-contained', provides: ['clock'], injects: ['clock', 'clock'] }
    ])

    expect(result.order).toEqual(['self-contained'])
    expect(result.cycles).toEqual([])
  })

  it('reports only actual cycle members, excluding downstream consumers', () => {
    const result = buildPluginGraph([
      { name: 'a', provides: ['a-service'], injects: ['b-service'] },
      { name: 'b', provides: ['b-service'], injects: ['a-service'] },
      { name: 'downstream', provides: [], injects: ['a-service'] }
    ])

    expect(result.cycles).toEqual([['a', 'b']])
    expect(result.cycles.flat()).not.toContain('downstream')
  })

  it('reports disjoint cycles separately', () => {
    const result = buildPluginGraph([
      { name: 'a', provides: ['a'], injects: ['b'] },
      { name: 'b', provides: ['b'], injects: ['a'] },
      { name: 'x', provides: ['x'], injects: ['y'] },
      { name: 'y', provides: ['y'], injects: ['x'] }
    ])

    expect(result.cycles).toEqual([
      ['a', 'b'],
      ['x', 'y']
    ])
  })
})
