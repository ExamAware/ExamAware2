<template>
  <div class="settings-page plugin-source-settings">
    <h2>插件源</h2>
    <t-space direction="vertical" size="large" style="width: 100%">
      <t-card title="插件索引源" hover-shadow>
        <t-space direction="vertical" size="small" style="width: 100%">
          <t-text theme="secondary">商店与安装优先使用选中的索引源，支持添加备用。</t-text>
          <t-list split size="medium">
            <t-list-item v-for="(url, idx) in normalizedSources" :key="url || idx" class="list-row">
              <div class="row-main">
                <t-radio
                  :checked="activeSource === url"
                  @change="() => setActive(url)"
                  style="width: 100%"
                >
                  <t-space direction="vertical" size="small" style="width: 100%">
                    <t-input
                      class="full-input"
                      :model-value="url"
                      placeholder="https://.../index.json"
                      @change="(val) => updateSource(idx, String(val ?? ''))"
                    />
                    <t-space size="small">
                      <t-tag v-if="url === DEFAULT_PLUGIN_INDEX_URL" size="small" variant="light"
                        >默认</t-tag
                      >
                      <t-tag
                        v-if="activeSource === url"
                        size="small"
                        theme="success"
                        variant="light"
                        >正在使用</t-tag
                      >
                    </t-space>
                  </t-space>
                </t-radio>
              </div>
              <div class="row-actions">
                <t-button
                  shape="circle"
                  variant="text"
                  theme="danger"
                  :disabled="normalizedSources.length <= 1"
                  @click="removeSource(url)"
                >
                  <DeleteIcon />
                </t-button>
              </div>
            </t-list-item>
          </t-list>
          <t-space size="small" align="center" break-line style="width: 100%">
            <t-input
              class="full-input"
              v-model="pendingSource"
              placeholder="https://raw.githubusercontent.com/.../index.json"
            />
            <t-button
              size="small"
              theme="primary"
              :disabled="!pendingSource.trim()"
              @click="addSource"
            >
              添加
            </t-button>
            <t-button size="small" variant="text" @click="resetToDefault">重置默认</t-button>
          </t-space>
        </t-space>
      </t-card>

      <t-card title="npm Registry" hover-shadow>
        <t-space direction="vertical" size="small" style="width: 100%">
          <t-text theme="secondary">安装插件时使用的 registry，可测速选择更快线路。</t-text>
          <t-list split size="medium">
            <t-list-item
              v-for="(url, idx) in registryListNormalized"
              :key="url || idx"
              class="list-row"
            >
              <div class="row-main">
                <t-radio
                  :checked="activeRegistry === url"
                  @change="() => setActiveRegistry(url)"
                  style="width: 100%"
                >
                  <t-space direction="vertical" size="small" style="width: 100%">
                    <t-input
                      class="full-input"
                      :model-value="url"
                      placeholder="https://registry.npmjs.org"
                      @change="(val) => updateRegistry(idx, String(val ?? ''))"
                    />
                    <t-space size="small">
                      <t-tag v-if="presetRegistries.includes(url)" size="small" variant="light"
                        >预设</t-tag
                      >
                      <t-tag
                        v-if="activeRegistry === url"
                        size="small"
                        theme="success"
                        variant="light"
                        >正在使用</t-tag
                      >
                      <t-tag v-if="speedResult[url]" size="small" variant="outline">{{
                        speedResult[url]
                      }}</t-tag>
                    </t-space>
                  </t-space>
                </t-radio>
              </div>
              <div class="row-actions">
                <t-button
                  shape="circle"
                  variant="text"
                  theme="danger"
                  :disabled="registryListNormalized.length <= 1"
                  @click="removeRegistry(url)"
                >
                  <DeleteIcon />
                </t-button>
              </div>
            </t-list-item>
          </t-list>
          <t-space size="small" align="center" break-line style="width: 100%">
            <t-input
              class="full-input"
              v-model="pendingRegistry"
              placeholder="https://registry.npmjs.org"
            />
            <t-button
              size="small"
              theme="primary"
              :disabled="!pendingRegistry.trim()"
              @click="addRegistry"
            >
              添加
            </t-button>
            <t-button size="small" variant="outline" :loading="testing" @click="speedTest">
              一键测速
            </t-button>
            <t-button size="small" variant="text" @click="resetRegistryDefault">重置预设</t-button>
          </t-space>
        </t-space>
      </t-card>
    </t-space>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { DeleteIcon } from 'tdesign-icons-vue-next'
import { useSettingRef } from '@renderer/composables/useSetting'
import { DEFAULT_PLUGIN_INDEX_URL } from '../../../../shared/pluginSource'

const sources = useSettingRef<string[]>('plugins.source.list', [DEFAULT_PLUGIN_INDEX_URL], {
  mapIn: (raw) => (Array.isArray(raw) ? raw.filter(Boolean) : [DEFAULT_PLUGIN_INDEX_URL]),
  mapOut: (val) => (Array.isArray(val) ? val.filter(Boolean) : [DEFAULT_PLUGIN_INDEX_URL])
})
const activeSource = useSettingRef<string>('plugins.source.active', DEFAULT_PLUGIN_INDEX_URL)
const pendingSource = ref('')
const presetRegistries = ['https://registry.npmjs.org', 'https://registry.npmmirror.com']
const registryList = useSettingRef<string[]>('plugins.registry.list', presetRegistries, {
  mapIn: (raw) => (Array.isArray(raw) ? raw.filter(Boolean) : presetRegistries),
  mapOut: (val) => (Array.isArray(val) ? val.filter(Boolean) : presetRegistries)
})
const activeRegistry = useSettingRef<string>('plugins.registry.active', presetRegistries[0])
const pendingRegistry = ref('')
const testing = ref(false)
const speedResult = ref<Record<string, string>>({})

const normalizedSources = computed(() => {
  const list = Array.isArray(sources.value) ? sources.value : []
  const unique = Array.from(new Set(list.map((v) => v?.trim()).filter(Boolean)))
  return unique.length ? unique : [DEFAULT_PLUGIN_INDEX_URL]
})

const registryListNormalized = computed(() => {
  const list = Array.isArray(registryList.value) ? registryList.value : []
  const unique = Array.from(new Set(list.map((v) => v?.trim()).filter(Boolean)))
  return unique.length ? unique : presetRegistries
})

watch(
  normalizedSources,
  (list) => {
    if (!list.includes(activeSource.value)) {
      activeSource.value = list[0]
    }
    if (list.length !== sources.value.length || list.some((v, i) => v !== sources.value[i])) {
      sources.value = list
    }
  },
  { immediate: true }
)

watch(
  registryListNormalized,
  (list) => {
    if (!list.includes(activeRegistry.value)) {
      activeRegistry.value = list[0]
    }
    if (
      list.length !== registryList.value.length ||
      list.some((v, i) => v !== registryList.value[i])
    ) {
      registryList.value = list
    }
  },
  { immediate: true }
)

function addSource() {
  const val = pendingSource.value.trim()
  if (!val) return
  const next = Array.from(new Set([val, ...normalizedSources.value]))
  sources.value = next
  activeSource.value = val
  pendingSource.value = ''
}

function updateSource(index: number, value: string) {
  const trimmed = value.trim()
  const next = [...normalizedSources.value]
  next[index] = trimmed || DEFAULT_PLUGIN_INDEX_URL
  const deduped = Array.from(new Set(next.filter(Boolean)))
  sources.value = deduped.length ? deduped : [DEFAULT_PLUGIN_INDEX_URL]
}

function removeSource(url: string) {
  const next = normalizedSources.value.filter((item) => item !== url)
  const finalList = next.length ? next : [DEFAULT_PLUGIN_INDEX_URL]
  sources.value = finalList
  if (!finalList.includes(activeSource.value)) {
    activeSource.value = finalList[0]
  }
}

function setActive(url: string) {
  activeSource.value = url
}

function resetToDefault() {
  sources.value = [DEFAULT_PLUGIN_INDEX_URL]
  activeSource.value = DEFAULT_PLUGIN_INDEX_URL
}

function addRegistry() {
  const val = pendingRegistry.value.trim()
  if (!val) return
  const next = Array.from(new Set([val, ...registryListNormalized.value]))
  registryList.value = next
  activeRegistry.value = val
  pendingRegistry.value = ''
}

function updateRegistry(index: number, value: string) {
  const trimmed = value.trim()
  const next = [...registryListNormalized.value]
  next[index] = trimmed || presetRegistries[0]
  const deduped = Array.from(new Set(next.filter(Boolean)))
  registryList.value = deduped.length ? deduped : presetRegistries
}

function removeRegistry(url: string) {
  const next = registryListNormalized.value.filter((item) => item !== url)
  const finalList = next.length ? next : presetRegistries
  registryList.value = finalList
  if (!finalList.includes(activeRegistry.value)) {
    activeRegistry.value = finalList[0]
  }
}

function setActiveRegistry(url: string) {
  activeRegistry.value = url
}

function resetRegistryDefault() {
  registryList.value = presetRegistries
  activeRegistry.value = presetRegistries[0]
}

async function speedTest() {
  testing.value = true
  const results: Record<string, string> = {}
  for (const url of registryListNormalized.value) {
    const start = performance.now()
    try {
      const res = await fetch(`${url.replace(/\/$/, '')}/-/v1/search?text=examaware&size=1`, {
        method: 'GET',
        cache: 'no-store'
      })
      const elapsed = performance.now() - start
      results[url] = res.ok ? `${elapsed.toFixed(0)} ms` : `失败 ${res.status}`
    } catch (error) {
      results[url] = '失败'
    }
  }
  speedResult.value = results
  // 自动选择最快可用
  const sorted = Object.entries(results)
    .filter(([, v]) => v && !v.startsWith('失败'))
    .sort((a, b) => Number(a[1].replace(/[^0-9.]/g, '')) - Number(b[1].replace(/[^0-9.]/g, '')))
  if (sorted.length) {
    activeRegistry.value = sorted[0][0]
  }
  testing.value = false
}
</script>

<style scoped>
.plugin-source-settings {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.list-row {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 12px;
  align-items: center;
}
.row-main {
  width: 100%;
}
.row-actions {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.full-input {
  width: 100%;
}
:deep(.t-radio__label) {
  width: 95%;
}
</style>
