import { shallowRef, type ShallowRef } from 'vue'
import type { PlayerToolbarContribution } from '@dsz-examaware/plugin-sdk'

export interface PluginMenuContribution {
  id: string
  label: string
  order?: number
  action(): void | Promise<void>
}

class ContributionRegistry<T extends { id: string; order?: number }> {
  private readonly entries = new Map<string, T>()
  readonly items: ShallowRef<readonly T[]> = shallowRef([])

  register(entry: T) {
    if (this.entries.has(entry.id)) {
      throw new Error(`Contribution already registered: ${entry.id}`)
    }
    this.entries.set(entry.id, entry)
    this.publish()
    return () => {
      if (this.entries.get(entry.id) !== entry) return
      this.entries.delete(entry.id)
      this.publish()
    }
  }

  list() {
    return this.items.value
  }

  private publish() {
    this.items.value = Array.from(this.entries.values()).sort(
      (left, right) => (left.order ?? 0) - (right.order ?? 0)
    )
  }
}

export const playerToolbarContributions = new ContributionRegistry<PlayerToolbarContribution>()
export const pluginMenuContributions = new ContributionRegistry<PluginMenuContribution>()
