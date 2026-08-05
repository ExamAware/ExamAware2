<template>
  <div class="settings-page">
    <h2>学校集控</h2>
    <t-space direction="vertical" size="small" style="width: 100%">
      <t-alert
        v-if="snapshot?.state === 'incompatible'"
        theme="error"
        title="集控版本不兼容"
        message="集控服务端协议版本与客户端不兼容，请升级客户端或服务端后重试，或解绑后重新绑定。"
      />

      <t-card title="连接状态" theme="poster2">
        <div class="settings-item">
          <div class="settings-item-main">
            <div class="settings-item-title">状态</div>
            <div class="settings-item-desc">当前客户端与学校集控中心的连接状态。</div>
          </div>
          <div class="settings-item-action">
            <ControlStatusTag :state="snapshot?.state ?? 'stopped'" />
          </div>
        </div>

        <t-divider />

        <div class="settings-item">
          <div class="settings-item-main">
            <div class="settings-item-title">服务器地址</div>
            <div class="settings-item-desc">{{ snapshot?.serverUrl ?? '尚未绑定集控服务器' }}</div>
          </div>
          <div v-if="snapshot?.serverUrl" class="settings-item-action">
            <t-tag variant="light-outline">{{ snapshot.serverUrl }}</t-tag>
          </div>
        </div>

        <t-divider />

        <div class="settings-item">
          <div class="settings-item-main">
            <div class="settings-item-title">设备名称</div>
            <div class="settings-item-desc">{{ snapshot?.displayName ?? '未分配' }}</div>
          </div>
        </div>

        <t-divider />

        <div class="settings-item">
          <div class="settings-item-main">
            <div class="settings-item-title">设备 ID</div>
            <div class="settings-item-desc device-id">{{ snapshot?.deviceId ?? '未分配' }}</div>
          </div>
        </div>

        <template #footer>
          <t-space>
            <t-button v-if="!isBound" theme="primary" @click="openBindWindow"> 绑定集控 </t-button>
            <template v-else>
              <template v-if="!isUnbindBlocked">
                <t-button variant="outline" @click="openBindWindow">重新绑定</t-button>
                <t-popconfirm content="确认解绑并清除本机设备凭据？" @confirm="handleUnbind">
                  <t-button theme="danger" variant="outline" :loading="unbinding">解绑</t-button>
                </t-popconfirm>
              </template>
              <t-tag v-else theme="warning">集控中心已启用「禁止解绑」策略</t-tag>
            </template>
          </t-space>
        </template>
      </t-card>

      <t-card title="集控管理的设置" theme="poster2">
        <t-empty v-if="managedKeys.length === 0" description="当前没有由集控中心管理的设置" />
        <template v-else>
          <template v-for="(key, index) in managedKeys" :key="key">
            <t-divider v-if="index > 0" />
            <div class="settings-item">
              <div class="settings-item-main">
                <div class="settings-item-title">{{ settingLabels[key] ?? key }}</div>
                <SettingManagedHint />
              </div>
              <div class="settings-item-action">
                <t-switch
                  v-if="booleanKeys.has(key)"
                  :model-value="Boolean(managedValues[key])"
                  disabled
                />
                <t-input-number
                  v-else-if="numberKeys.has(key)"
                  :model-value="Number(managedValues[key] ?? 0)"
                  disabled
                  style="width: 180px"
                />
                <t-input
                  v-else
                  :model-value="String(managedValues[key] ?? '')"
                  disabled
                  style="width: 220px"
                />
              </div>
            </div>
          </template>
        </template>
      </t-card>
    </t-space>
  </div>
</template>

<script setup lang="ts">
import { computed, reactive, ref, watch } from 'vue'
import { MessagePlugin } from 'tdesign-vue-next'
import ControlStatusTag from '@renderer/components/ControlStatusTag.vue'
import SettingManagedHint from '@renderer/components/SettingManagedHint.vue'
import { useControlAgent } from '@renderer/composables/useControlAgent'

const control = useControlAgent()
const snapshot = control.snapshot
const unbinding = ref(false)
const managedValues = reactive<Record<string, unknown>>({})

const settingLabels: Record<string, string> = {
  'appearance.theme': '主题',
  'player.uiScale': '界面缩放',
  'player.uiDensity': '界面密度',
  'player.largeClockEnabled': '大时钟',
  'player.largeClockScale': '大时钟字号',
  'player.examInfoLargeFont': '考试信息大字号',
  'player.preventControlSessionExit': '禁止主动退出集控放映',
  'control.preventUnbind': '禁止解绑集控',
  'control.preventQuit': '禁止退出应用',
  'timeSync.ntpServer': 'NTP 服务器',
  'timeSync.autoSync': '自动校时',
  'timeSync.syncIntervalMinutes': '校时间隔'
}

const booleanKeys = new Set([
  'player.largeClockEnabled',
  'player.examInfoLargeFont',
  'player.preventControlSessionExit',
  'control.preventUnbind',
  'control.preventQuit',
  'timeSync.autoSync'
])
const numberKeys = new Set([
  'player.uiScale',
  'player.largeClockScale',
  'timeSync.syncIntervalMinutes'
])
const managedKeys = computed(() => snapshot.value?.managedSettingKeys ?? [])
const isBound = computed(
  () => snapshot.value?.state !== 'stopped' && snapshot.value?.state !== 'unenrolled'
)
const isUnbindBlocked = computed(() => managedValues['control.preventUnbind'] === true)

const toDesktopConfigKey = (key: string) =>
  key.startsWith('timeSync.') ? `time.${key.slice('timeSync.'.length)}` : key

watch(
  managedKeys,
  async (keys) => {
    await Promise.all(
      keys.map(async (key) => {
        managedValues[key] = await window.api.config.get(toDesktopConfigKey(key))
      })
    )
  },
  { immediate: true }
)

const openBindWindow = () => window.api.windows.openBindControl()

const handleUnbind = async () => {
  if (unbinding.value) return
  unbinding.value = true
  try {
    await control.unbind()
    MessagePlugin.success('已解绑学校集控')
  } catch (error) {
    MessagePlugin.error(error instanceof Error ? error.message : '解绑失败')
  } finally {
    unbinding.value = false
  }
}
</script>

<style scoped>
.device-id {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  word-break: break-all;
}
</style>
