<template>
  <div class="plugin-panel-host">
    <t-empty v-if="!panels.length" description="暂无插件扩展" />
    <t-collapse
      v-else
      :bordered="false"
      expand-icon="arrow-right"
      :value="defaultExpanded"
      @change="onCollapseChange"
    >
      <t-collapse-panel
        v-for="panel in panels"
        :key="panel.id"
        :value="panel.id"
        :header="panel.title"
        :header-right-content="panel.description"
      >
        <component :is="panel.renderer" />
      </t-collapse-panel>
    </t-collapse>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { useEditorPluginStore } from '@renderer/stores/editorPluginStore'

const store = useEditorPluginStore()
const panels = computed(() => store.panels)
const expanded = ref<string[]>([])

watch(
  panels,
  (list) => {
    if (!list.length) {
      expanded.value = []
      return
    }
    // 保持已展开的面板，新增的默认展开
    const ids = list.map((p) => p.id)
    const next = Array.from(new Set([...expanded.value, ...ids.slice(0, 1)]))
    expanded.value = next.filter((id) => ids.includes(id))
  },
  { immediate: true, deep: true }
)

const defaultExpanded = computed(() => expanded.value)
const onCollapseChange = (value: string[]) => {
  expanded.value = value
}
</script>

<style scoped>
.plugin-panel-host {
  height: 100%;
  overflow: auto;
  padding: 8px;
  box-sizing: border-box;
}
</style>
