import type { MissingServiceDependency, PluginGraphNode, PluginGraphResult } from './types'

/**
 * 使用拓扑排序（Kahn 算法）构建插件依赖图。
 * 可以确保插件根据服务依赖关系按正确顺序加载。
 *
 * @param nodes - 包含提供和注入服务的插件节点数组
 * @returns 包含加载顺序、缺失服务和检测到的循环的对象
 */
export function buildPluginGraph(nodes: PluginGraphNode[]): PluginGraphResult {
  // 将服务名称映射到提供该服务的插件
  const provides = new Map<string, string>()
  // 缺失服务依赖列表
  const missingServices: MissingServiceDependency[] = []
  // 邻接列表：提供者 -> 消费者
  const adjacency = new Map<string, Set<string>>()
  // 每个插件的入度计数（依赖数量）
  const indegree = new Map<string, number>()

  // 为所有节点初始化数据结构
  for (const node of nodes) {
    indegree.set(node.name, 0)
    adjacency.set(node.name, new Set())
  }

  // 构建提供映射并检查冲突
  for (const node of nodes) {
    for (const service of node.provides) {
      if (provides.has(service)) {
        throw new Error(
          `Service conflict: ${service} provided by both ${provides.get(service)} and ${node.name}`
        )
      }
      provides.set(service, node.name)
    }
  }

  // 构建依赖图
  for (const node of nodes) {
    for (const service of node.injects) {
      const provider = provides.get(service)
      if (!provider) {
        missingServices.push({ plugin: node.name, service })
        continue
      }
      // 添加边：提供者 -> 消费者
      if (!adjacency.has(provider)) adjacency.set(provider, new Set())
      if (!adjacency.get(provider)!.has(node.name)) {
        adjacency.get(provider)!.add(node.name)
        indegree.set(node.name, (indegree.get(node.name) ?? 0) + 1)
      }
    }
  }

  // Kahn 算法：从没有依赖的节点开始
  const queue: string[] = []
  for (const [name, degree] of indegree.entries()) {
    if (degree === 0) queue.push(name)
  }

  // 处理队列以构建拓扑顺序
  const order: string[] = []
  while (queue.length) {
    const current = queue.shift()!
    order.push(current)
    const neighbors = adjacency.get(current)
    if (!neighbors) continue
    for (const neighbor of neighbors) {
      const nextDegree = (indegree.get(neighbor) ?? 0) - 1
      indegree.set(neighbor, nextDegree)
      if (nextDegree === 0) {
        queue.push(neighbor)
      }
    }
  }

  // 检测循环：未在顺序中的节点表示循环
  const cycles: string[][] = []
  const unresolved = nodes.map((n) => n.name).filter((name) => !order.includes(name))
  if (unresolved.length) {
    cycles.push(unresolved)
  }

  return {
    order,
    missingServices,
    cycles
  }
}
