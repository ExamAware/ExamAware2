<template>
  <div class="settings-page">
    <h2>基本</h2>
    <t-space direction="vertical" size="small" style="width: 100%">
      <t-card :title="'行为'" theme="poster2">
        <div class="settings-item">
          <div class="settings-item-icon">
            <TIcon name="rocket-filled" size="22px" />
          </div>
          <div class="settings-item-main">
            <div class="settings-item-title">开机自启</div>
            <div class="settings-item-desc">在您的系统启动时自动运行本应用。</div>
          </div>
          <div class="settings-item-action">
            <t-switch
              v-model="autoStart"
              :disabled="examAutoStartEnabled"
              :label="[
                { value: true, label: '开' },
                { value: false, label: '关' }
              ]"
            />
          </div>
        </div>

        <div class="settings-item">
          <div class="settings-item-icon">
            <TIcon name="time" size="22px" />
          </div>
          <div class="settings-item-main">
            <div class="settings-item-title">考试关联开机自启</div>
            <div class="settings-item-desc">
              开考前 15 分钟到最后一科结束前 15 分钟自动启用开机自启，无考试或考试结束后自动取消。
            </div>
          </div>
          <div class="settings-item-action">
            <t-switch
              v-model="examAutoStartEnabled"
              :label="[
                { value: true, label: '开' },
                { value: false, label: '关' }
              ]"
            />
          </div>
        </div>

        <t-divider />

        <div class="settings-item">
          <div class="settings-item-icon">
            <TIcon name="play-circle" size="22px" />
          </div>
          <div class="settings-item-main">
            <div class="settings-item-title">自动进入播放页</div>
            <div class="settings-item-desc">每次打开主界面时自动跳转到放映器页面。</div>
          </div>
          <div class="settings-item-action">
            <t-switch
              v-model="autoEnterPlayer"
              :label="[
                { value: true, label: '开' },
                { value: false, label: '关' }
              ]"
            />
          </div>
        </div>

        <t-divider />

        <div class="settings-item">
          <div class="settings-item-icon">
            <TIcon name="close-circle" size="22px" />
          </div>
          <div class="settings-item-main">
            <div class="settings-item-title">结束 ClassIsland 课表进程</div>
            <div class="settings-item-desc">
              启动时及运行期间每 10 分钟检测一次 ClassIsland
              进程，若存在则自动结束。关闭后不再自动检测。
            </div>
          </div>
          <div class="settings-item-action">
            <t-switch
              v-model="classialandEnabled"
              :label="[
                { value: true, label: '开' },
                { value: false, label: '关' }
              ]"
            />
          </div>
        </div>

        <div class="settings-item">
          <div class="settings-item-icon">
            <TIcon name="file-unknown" size="22px" />
          </div>
          <div class="settings-item-main">
            <div class="settings-item-title">进程名</div>
            <div class="settings-item-desc">
              要检测并结束的课表进程名称，例如 ClassIsland.Desktop.exe。
            </div>
          </div>
          <div class="settings-item-action" style="display: flex; align-items: center; gap: 8px">
            <t-input
              v-model="classialandProcessName"
              placeholder="ClassIsland.Desktop.exe"
              style="width: 180px"
            />
            <t-button theme="primary" size="small" @click="handleKillClassialandNow"
              >立即结束</t-button
            >
          </div>
        </div>

        <t-divider />

        <div class="settings-item">
          <div class="settings-item-icon">
            <TIcon name="calendar" size="22px" />
          </div>
          <div class="settings-item-main">
            <div class="settings-item-title">学期开始时间</div>
            <div class="settings-item-desc">
              设置学期首日，该日期将作为多周轮换计算起点和每周的第一天。
            </div>
          </div>
          <div class="settings-item-action">
            <t-date-picker v-model="termStart" clearable="false" format="YYYY/M/D" />
          </div>
        </div>

        <t-divider />

        <div class="settings-item">
          <div class="settings-item-icon">
            <TIcon name="view-module" size="22px" />
          </div>
          <div class="settings-item-main">
            <div class="settings-item-title">托盘弹窗失焦自动隐藏</div>
            <div class="settings-item-desc">
              启用后，托盘弹窗窗口在失去焦点时自动隐藏（显示后有保护期防止秒关）。默认开启。
            </div>
          </div>
          <div class="settings-item-action">
            <t-switch
              v-model="trayAutoHide"
              :label="[
                { value: true, label: '开' },
                { value: false, label: '关' }
              ]"
            />
          </div>
        </div>

        <div class="settings-item" v-if="trayAutoHide">
          <div class="settings-item-icon">
            <TIcon name="time" size="22px" />
          </div>
          <div class="settings-item-main">
            <div class="settings-item-title">失焦保护期</div>
            <div class="settings-item-desc">
              窗口显示后在此毫秒数内的失焦不会自动隐藏，避免快速点击或系统激活导致闪退。
            </div>
          </div>
          <div class="settings-item-action" style="display: flex; align-items: center; gap: 8px">
            <t-input-number
              v-model="trayProtectionMs"
              :min="0"
              :step="50"
              suffix="毫秒"
              style="width: 180px"
            />
          </div>
        </div>
      </t-card>
    </t-space>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import { useSettingRef } from '@renderer/composables/useSetting'
import { Icon as TIcon } from 'tdesign-icons-vue-next'
import { MessagePlugin } from 'tdesign-vue-next'

const autoStart = useSettingRef<boolean>('behavior.autoStart', false)
const examAutoStartEnabled = useSettingRef<boolean>('behavior.examAutoStart.enabled', true)
const autoEnterPlayer = useSettingRef<boolean>('behavior.autoEnterPlayer', false)
const classialandEnabled = useSettingRef<boolean>('behavior.classialandKiller.enabled', true)
const classialandProcessName = useSettingRef<string>(
  'behavior.classialandKiller.processName',
  'ClassIsland.Desktop.exe'
)
const classialandKilling = ref(false)

async function syncAutoStartFromSystem() {
  try {
    const cur = await window.api.system.autostart.get()
    autoStart.value = !!cur
  } catch {}
}

watch(autoStart, async (v) => {
  try {
    await window.api.system.autostart.set(!!v)
  } catch (e) {
    console.error('设置开机自启失败', e)
  }
})

const handleKillClassialandNow = async () => {
  if (classialandKilling.value) return
  classialandKilling.value = true
  try {
    const result = await window.api.system.classialand.killNow()
    if (result.found && result.killed) {
      MessagePlugin.success('已结束 classialand 课表进程')
    } else if (result.found && !result.killed) {
      MessagePlugin.warning('检测到进程但结束失败')
    } else {
      MessagePlugin.info('未检测到指定课表进程')
    }
  } catch (e) {
    MessagePlugin.error('结束进程失败')
    console.error(e)
  } finally {
    classialandKilling.value = false
  }
}

onMounted(() => {
  syncAutoStartFromSystem()
})

const termStart = useSettingRef<string>(
  'behavior.termStart',
  new Date().toISOString().slice(0, 10),
  {
    mapIn: (raw) => raw,
    mapOut: (v) => v
  }
)

// 托盘弹窗失焦自动隐藏
const trayAutoHide = useSettingRef<boolean>('tray.autoHideOnBlur', true)
// 保护期毫秒（默认 400ms）
const trayProtectionMs = useSettingRef<number>('tray.autoHideProtectionMs', 400)
</script>

<style scoped></style>
