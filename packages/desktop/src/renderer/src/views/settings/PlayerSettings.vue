<template>
  <div class="settings-page">
    <h2>播放器</h2>
    <t-space direction="vertical" size="small" style="width: 100%">
      <t-card title="默认参数" theme="poster2">
        <div class="settings-item">
          <div class="settings-item-icon">
            <TIcon name="play-circle" size="22px" />
          </div>
          <div class="settings-item-main">
            <div class="settings-item-title">默认考场号</div>
            <div class="settings-item-desc">用于播放器窗口首次打开时的默认考场号。</div>
          </div>
          <div class="settings-item-action">
            <t-input
              v-model="defaultRoom"
              placeholder="例如：01"
              :maxlength="8"
              style="width: 180px"
              @blur="normalizeRoom"
            />
          </div>
        </div>

        <t-divider />

        <div class="settings-item">
          <div class="settings-item-icon">
            <TIcon name="upscale" size="22px" />
          </div>
          <div class="settings-item-main">
            <div class="settings-item-title">默认界面缩放</div>
            <div class="settings-item-desc">调整播放器内 UI 的默认缩放倍率，范围 50%-200%。</div>
            <div class="settings-item-extra">
              <t-slider
                v-model="defaultScale"
                :min="0.5"
                :max="2"
                :step="0.05"
                :show-tooltip="false"
                :marks="scaleMarks"
              />
            </div>
          </div>
          <div class="settings-item-action" style="width: 160px">
            <t-input-number
              v-model="defaultScale"
              :min="0.5"
              :max="2"
              :step="0.05"
              :decimal-places="2"
              suffix="倍"
            />
            <!-- <t-tag theme="success" variant="light-outline">{{ scalePercent }}%</t-tag> -->
          </div>
        </div>

        <br />
        <t-divider />

        <div class="settings-item">
          <div class="settings-item-icon">
            <TIcon name="time" size="22px" />
          </div>
          <div class="settings-item-main">
            <div class="settings-item-title">大时钟模式</div>
            <div class="settings-item-desc">开启后隐藏时钟右侧提示文字，仅保留更大的时间显示。</div>
          </div>
          <div class="settings-item-action">
            <t-switch v-model="largeClockEnabled" size="large" />
          </div>
        </div>

        <t-divider />

        <div class="settings-item">
          <div class="settings-item-icon">
            <TIcon name="view-module" size="22px" />
          </div>
          <div class="settings-item-main">
            <div class="settings-item-title">HDR 高亮提醒</div>
            <div class="settings-item-desc">
              彩色全屏提醒为白色文字时启用 P3 HDR 亮度高亮（显示器支持时）。
            </div>
          </div>
          <div class="settings-item-action">
            <t-switch v-model="hdrHighlight" size="large" />
          </div>
        </div>

        <t-divider />

        <div class="settings-item">
          <div class="settings-item-icon">
            <TIcon name="sound" size="22px" />
          </div>
          <div class="settings-item-main">
            <div class="settings-item-title">提醒铃声</div>
            <div class="settings-item-desc">彩色提醒亮起时播放铃声。</div>
          </div>
          <div class="settings-item-action">
            <t-switch
              v-model="reminderSoundEnabled"
              role="switch"
              aria-label="启用提醒铃声"
              :aria-checked="reminderSoundEnabled"
              tabindex="0"
              size="large"
              @keydown.enter.prevent="reminderSoundEnabled = !reminderSoundEnabled"
              @keydown.space.prevent="reminderSoundEnabled = !reminderSoundEnabled"
            />
          </div>
        </div>

        <div v-if="reminderSoundEnabled" class="settings-subgroup">
          <div class="settings-item reminder-pack-item">
            <div class="settings-item-main">
              <div class="settings-item-title">铃声方案</div>
              <div class="settings-item-desc">选择内置方案或导入 .ea2r 铃声包。</div>
              <div data-testid="reminder-sound-names" class="reminder-pack-sounds">
                <span>开始：{{ activeReminderSoundPack.sounds.start.name }}</span>
                <span>即将结束：{{ activeReminderSoundPack.sounds.alert.name }}</span>
                <span>结束：{{ activeReminderSoundPack.sounds.end.name }}</span>
              </div>
              <div v-if="soundPackError" role="alert" class="reminder-pack-error">
                {{ soundPackError }}
              </div>
            </div>
            <div class="settings-item-action reminder-pack-action">
              <select
                v-model="reminderSoundPackId"
                aria-label="铃声方案"
                :disabled="soundPacksLoading || importingSoundPack"
              >
                <option v-for="pack in reminderSoundPacks" :key="pack.id" :value="pack.id">
                  {{ pack.name }}
                </option>
              </select>
              <button
                type="button"
                class="sound-pack-import-button"
                aria-label="导入铃声包"
                :disabled="importingSoundPack"
                @click="importSoundPack"
              >
                <TIcon :name="importingSoundPack ? 'loading' : 'upload'" size="18px" />
                <span>{{ importingSoundPack ? '正在导入' : '导入' }}</span>
              </button>
            </div>
          </div>

          <div class="settings-item reminder-volume-item">
            <div class="settings-item-main">
              <div class="settings-item-title">铃声音量</div>
              <div class="settings-item-desc">统一调整提醒铃声和试听音量。</div>
              <div class="settings-item-extra reminder-volume-slider">
                <input
                  v-model.number="reminderSoundVolumePercent"
                  type="range"
                  aria-label="铃声音量百分比"
                  min="0"
                  max="100"
                  step="0.001"
                />
              </div>
            </div>
            <div class="settings-item-action reminder-volume-action">
              <div class="reminder-volume-number">
                <input
                  :value="formatVolumePercent(reminderSoundVolumePercent)"
                  type="number"
                  aria-label="铃声音量数值"
                  min="0"
                  max="100"
                  step="0.001"
                  @change="commitVolumePercentInput"
                  @blur="commitVolumePercentInput"
                />
                <span aria-hidden="true">%</span>
              </div>
              <span
                data-testid="reminder-volume-value"
                class="reminder-volume-value"
                aria-live="polite"
              >
                {{ formatVolumePercent(reminderSoundVolumePercent) }}%
              </span>
            </div>
          </div>

          <div v-for="item in reminderSoundOptions" :key="item.kind" class="settings-item">
            <div class="settings-item-main">
              <div class="settings-item-title">{{ item.title }}</div>
              <div class="settings-item-desc">{{ item.description }}</div>
            </div>
            <div class="settings-item-action reminder-sound-action">
              <div class="sound-preview-wrapper">
                <button
                  type="button"
                  class="sound-preview-button"
                  :aria-label="item.previewLabel"
                  :aria-busy="previewingKind === item.kind"
                  :aria-describedby="
                    visiblePreviewTooltipKind === item.kind
                      ? `sound-preview-tooltip-${item.kind}`
                      : undefined
                  "
                  :disabled="previewingKind === item.kind"
                  @mouseenter="hoveredPreviewKind = item.kind"
                  @mouseleave="hoveredPreviewKind = null"
                  @focus="focusedPreviewKind = item.kind"
                  @blur="focusedPreviewKind = null"
                  @click="previewSound(item.kind)"
                >
                  <TIcon
                    :name="previewingKind === item.kind ? 'loading' : 'play-circle'"
                    size="20px"
                    :class="{ 'sound-preview-loading': previewingKind === item.kind }"
                  />
                </button>
                <span
                  v-if="visiblePreviewTooltipKind === item.kind"
                  :id="`sound-preview-tooltip-${item.kind}`"
                  role="tooltip"
                  class="sound-preview-tooltip"
                >
                  {{ item.previewLabel }}
                </span>
              </div>
              <t-switch
                :model-value="item.enabled.value"
                role="switch"
                :aria-label="item.switchLabel"
                :aria-checked="item.enabled.value"
                tabindex="0"
                size="large"
                @update:model-value="item.enabled.value = $event"
                @keydown.enter.prevent="item.enabled.value = !item.enabled.value"
                @keydown.space.prevent="item.enabled.value = !item.enabled.value"
              />
            </div>
          </div>
        </div>
      </t-card>
    </t-space>
  </div>
</template>

<script setup lang="ts">
import { Icon as TIcon } from 'tdesign-icons-vue-next'
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useSettingsGroup } from '@renderer/composables/useSetting'
import {
  createReminderSoundController,
  normalizeReminderSoundSettings,
  type ReminderSoundKind
} from '@renderer/services/reminderSound'
import {
  POND_REMINDER_SOUND_PACK,
  selectReminderSoundPack,
  type ReminderSoundPackSummary
} from '../../../../shared/reminderSoundPack'

const settings = useSettingsGroup('player')

const clampScale = (value: unknown) => {
  const num = Number(value)
  if (!Number.isFinite(num)) return 1
  return Math.min(2, Math.max(0.5, num))
}

const sanitizeRoom = (value: unknown) => {
  if (value == null) return '01'
  const text = String(value).trim().slice(0, 8)
  return text || '01'
}

const defaultRoom = settings.ref<string>('defaultRoom', '01', {
  mapIn: sanitizeRoom,
  mapOut: sanitizeRoom
})

const defaultScale = settings.ref<number>('defaultScale', 1, {
  mapIn: clampScale,
  mapOut: clampScale
})

const largeClockEnabled = settings.ref<boolean>('largeClock', false, {
  mapIn: (value) => Boolean(value),
  mapOut: (value) => Boolean(value)
})

const hdrHighlight = settings.ref<boolean>('hdrHighlight', false, {
  mapIn: (value) => Boolean(value),
  mapOut: (value) => Boolean(value)
})

const strictBoolean = (value: unknown) => (typeof value === 'boolean' ? value : true)

const reminderSoundEnabled = settings.ref<boolean>('reminderSound.enabled', true, {
  mapIn: strictBoolean,
  mapOut: strictBoolean
})

const reminderSoundStart = settings.ref<boolean>('reminderSound.start', true, {
  mapIn: strictBoolean,
  mapOut: strictBoolean
})

const reminderSoundAlert = settings.ref<boolean>('reminderSound.alert', true, {
  mapIn: strictBoolean,
  mapOut: strictBoolean
})

const reminderSoundEnd = settings.ref<boolean>('reminderSound.end', true, {
  mapIn: strictBoolean,
  mapOut: strictBoolean
})

const normalizePackId = (value: unknown) =>
  typeof value === 'string' && value.trim() ? value.trim() : POND_REMINDER_SOUND_PACK.id
const reminderSoundPackId = settings.ref<string>(
  'reminderSound.packId',
  POND_REMINDER_SOUND_PACK.id,
  {
    mapIn: normalizePackId,
    mapOut: normalizePackId
  }
)
const reminderSoundPacks = ref<ReminderSoundPackSummary[]>([POND_REMINDER_SOUND_PACK])
const activeReminderSoundPack = computed(() =>
  selectReminderSoundPack(reminderSoundPacks.value, reminderSoundPackId.value)
)
const soundPacksLoading = ref(true)
const importingSoundPack = ref(false)
const soundPackError = ref('')
let soundPackLoadRequest = 0

const applyReminderSoundPacks = (packs: ReminderSoundPackSummary[]) => {
  reminderSoundPacks.value = packs.length ? packs : [POND_REMINDER_SOUND_PACK]
  if (!packs.some((pack) => pack.id === reminderSoundPackId.value)) {
    reminderSoundPackId.value = POND_REMINDER_SOUND_PACK.id
  }
}

const loadReminderSoundPacks = async () => {
  const request = ++soundPackLoadRequest
  soundPacksLoading.value = true
  soundPackError.value = ''
  try {
    const packs = await window.api.reminderSounds.list()
    if (request === soundPackLoadRequest) applyReminderSoundPacks(packs)
  } catch (error) {
    if (request === soundPackLoadRequest) {
      applyReminderSoundPacks([POND_REMINDER_SOUND_PACK])
      soundPackError.value = error instanceof Error ? error.message : '无法读取铃声方案'
    }
  } finally {
    if (request === soundPackLoadRequest) soundPacksLoading.value = false
  }
}

const importSoundPack = async () => {
  if (importingSoundPack.value) return
  importingSoundPack.value = true
  soundPackError.value = ''
  try {
    const result = await window.api.reminderSounds.import()
    soundPackLoadRequest += 1
    soundPacksLoading.value = false
    const replacingSelectedPack = !result.canceled && result.pack?.id === reminderSoundPackId.value
    applyReminderSoundPacks(result.packs)
    if (!result.canceled && result.pack) {
      if (replacingSelectedPack) previewController.stop()
      reminderSoundPackId.value = result.pack.id
    }
  } catch (error) {
    soundPackError.value = error instanceof Error ? error.message : '铃声包导入失败'
  } finally {
    importingSoundPack.value = false
  }
}

onMounted(() => void loadReminderSoundPacks())

const normalizeVolume = (value: unknown) => normalizeReminderSoundSettings({ volume: value }).volume
const reminderSoundVolume = settings.ref<number>('reminderSound.volume', 0.7, {
  mapIn: normalizeVolume,
  mapOut: normalizeVolume
})

const normalizeVolumePercent = (value: unknown) => {
  const numeric = typeof value === 'number' ? value : Number(value)
  if (!Number.isFinite(numeric)) return 70
  return Math.round(Math.min(100, Math.max(0, numeric)) * 1000) / 1000
}

const reminderSoundVolumePercent = computed({
  get: () => Math.round(reminderSoundVolume.value * 100000) / 1000,
  set: (value: number) => {
    reminderSoundVolume.value = normalizeVolume(normalizeVolumePercent(value) / 100)
  }
})

const formatVolumePercent = (value: number) =>
  Number.isInteger(value) ? String(value) : String(Number(value.toFixed(3)))

const commitVolumePercentInput = (event: Event) => {
  const input = event.currentTarget as HTMLInputElement
  const raw = input.value.trim()
  if (raw !== '' && Number.isFinite(input.valueAsNumber)) {
    reminderSoundVolumePercent.value = input.valueAsNumber
  }
  input.value = formatVolumePercent(reminderSoundVolumePercent.value)
}

const reminderSoundOptions = [
  {
    kind: 'start' as const,
    title: '开考铃声',
    description: '考试开始时播放。',
    previewLabel: '试听开考铃声',
    switchLabel: '启用开考铃声',
    enabled: reminderSoundStart
  },
  {
    kind: 'alert' as const,
    title: '即将结束铃声',
    description: '考试进入提醒阈值时播放。',
    previewLabel: '试听即将结束铃声',
    switchLabel: '启用即将结束铃声',
    enabled: reminderSoundAlert
  },
  {
    kind: 'end' as const,
    title: '结束铃声',
    description: '考试结束时播放。',
    previewLabel: '试听结束铃声',
    switchLabel: '启用结束铃声',
    enabled: reminderSoundEnd
  }
]

const previewController = createReminderSoundController({
  baseUrl: document.baseURI,
  sourceProvider: (kind) => activeReminderSoundPack.value.sounds[kind].src,
  reporter: (failure) => console.warn('提醒铃声试听播放失败', failure)
})
const previewingKind = ref<ReminderSoundKind | null>(null)
const hoveredPreviewKind = ref<ReminderSoundKind | null>(null)
const focusedPreviewKind = ref<ReminderSoundKind | null>(null)
const visiblePreviewTooltipKind = computed(
  () => hoveredPreviewKind.value ?? focusedPreviewKind.value
)
let previewRequest = 0
let disposed = false

watch(
  reminderSoundEnabled,
  (enabled, wasEnabled) => {
    if (enabled || !wasEnabled) return
    previewRequest += 1
    previewingKind.value = null
    hoveredPreviewKind.value = null
    focusedPreviewKind.value = null
    previewController.stop()
  },
  { flush: 'sync' }
)

watch(reminderSoundPackId, () => previewController.stop())

const previewSound = async (kind: ReminderSoundKind) => {
  const request = ++previewRequest
  previewingKind.value = kind
  try {
    await previewController.preview(kind, { volume: reminderSoundVolume.value })
  } catch (error) {
    console.warn('试听提醒铃声失败', { kind, error })
  } finally {
    if (!disposed && request === previewRequest) previewingKind.value = null
  }
}

onBeforeUnmount(() => {
  disposed = true
  previewRequest += 1
  previewingKind.value = null
  previewController.dispose()
})

const scaleMarks = {
  0.5: '50%',
  1: '100%',
  1.5: '150%',
  2: '200%'
}

const normalizeRoom = () => {
  defaultRoom.value = sanitizeRoom(defaultRoom.value)
}
</script>

<style scoped>
.settings-item-extra {
  margin-top: 8px;
}

.settings-subgroup {
  margin-top: 6px;
  padding-left: 44px;
  border-left: 2px solid var(--td-border-level-1-color);
}

.reminder-pack-action {
  display: flex;
  align-items: center;
  gap: 8px;
}

.reminder-pack-action select {
  width: 210px;
  height: 34px;
  padding: 0 30px 0 10px;
  color: var(--td-text-color-primary);
  font: inherit;
  background: var(--td-bg-color-container);
  border: 1px solid var(--td-border-level-2-color);
  border-radius: var(--td-radius-default);
}

.reminder-pack-action select:focus-visible,
.sound-pack-import-button:focus-visible {
  border-color: var(--td-brand-color);
  outline: 2px solid var(--td-brand-color-focus);
  outline-offset: 1px;
}

.sound-pack-import-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  height: 34px;
  padding: 0 12px;
  color: var(--td-text-color-primary);
  font: inherit;
  background: var(--td-bg-color-container);
  border: 1px solid var(--td-border-level-2-color);
  border-radius: var(--td-radius-default);
  cursor: pointer;
}

.sound-pack-import-button:disabled,
.reminder-pack-action select:disabled {
  color: var(--td-text-color-disabled);
  cursor: wait;
  background: var(--td-bg-color-component-disabled);
}

.reminder-pack-sounds {
  display: flex;
  flex-wrap: wrap;
  gap: 4px 14px;
  margin-top: 6px;
  color: var(--td-text-color-secondary);
  font-size: 12px;
}

.reminder-pack-error {
  margin-top: 6px;
  color: var(--td-error-color);
  font-size: 12px;
}

.reminder-volume-slider {
  width: min(360px, 100%);
}

.reminder-volume-slider input {
  width: 100%;
  height: 4px;
  margin: 10px 0;
  appearance: none;
  background: var(--td-bg-color-component);
  border-radius: var(--td-radius-round);
  outline: none;
}

.reminder-volume-slider input::-webkit-slider-thumb {
  width: 16px;
  height: 16px;
  appearance: none;
  background: var(--td-brand-color);
  border: 2px solid var(--td-bg-color-container);
  border-radius: 50%;
  box-shadow: var(--td-shadow-1);
  cursor: pointer;
}

.reminder-volume-slider input::-moz-range-thumb {
  width: 12px;
  height: 12px;
  background: var(--td-brand-color);
  border: 2px solid var(--td-bg-color-container);
  border-radius: 50%;
  box-shadow: var(--td-shadow-1);
  cursor: pointer;
}

.reminder-volume-slider input:focus-visible::-webkit-slider-thumb {
  box-shadow: 0 0 0 3px var(--td-brand-color-focus);
}

.reminder-volume-slider input:focus-visible::-moz-range-thumb {
  box-shadow: 0 0 0 3px var(--td-brand-color-focus);
}

.reminder-volume-action {
  display: flex;
  align-items: center;
  gap: 10px;
  width: 180px;
}

.reminder-volume-number {
  display: flex;
  align-items: center;
  width: 112px;
  height: 32px;
  padding: 0 9px;
  color: var(--td-text-color-primary);
  background: var(--td-bg-color-specialcomponent);
  border: 1px solid var(--td-border-level-2-color);
  border-radius: var(--td-radius-default);
  transition:
    border-color 0.2s,
    box-shadow 0.2s;
}

.reminder-volume-number:focus-within {
  border-color: var(--td-brand-color);
  box-shadow: 0 0 0 2px var(--td-brand-color-focus);
}

.reminder-volume-number input {
  min-width: 0;
  flex: 1;
  width: 100%;
  color: inherit;
  font: inherit;
  text-align: right;
  background: transparent;
  border: 0;
  outline: 0;
  appearance: textfield;
}

.reminder-volume-number input::-webkit-inner-spin-button,
.reminder-volume-number input::-webkit-outer-spin-button {
  margin: 0;
  appearance: none;
}

.reminder-volume-number span {
  margin-left: 4px;
  color: var(--td-text-color-secondary);
}

.reminder-volume-value {
  min-width: 48px;
  color: var(--td-text-color-secondary);
  font-variant-numeric: tabular-nums;
  text-align: right;
}

.reminder-sound-action {
  display: flex;
  align-items: center;
  gap: 12px;
}

.sound-preview-wrapper {
  position: relative;
  display: inline-flex;
}

.sound-preview-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  padding: 0;
  color: var(--td-text-color-primary);
  background: transparent;
  border: 1px solid var(--td-border-level-2-color);
  border-radius: var(--td-radius-circle);
  cursor: pointer;
  transition:
    color 0.2s,
    background-color 0.2s,
    border-color 0.2s;
}

.sound-preview-button:hover,
.sound-preview-button:focus-visible {
  color: var(--td-brand-color);
  background: var(--td-brand-color-light);
  border-color: var(--td-brand-color);
  outline: none;
}

.sound-preview-button:focus-visible {
  box-shadow: 0 0 0 2px var(--td-brand-color-focus);
}

.sound-preview-button:disabled {
  color: var(--td-text-color-disabled);
  cursor: wait;
  background: var(--td-bg-color-component-disabled);
  border-color: var(--td-border-level-1-color);
}

.sound-preview-tooltip {
  position: absolute;
  z-index: 1;
  bottom: calc(100% + 7px);
  left: 50%;
  width: max-content;
  max-width: 180px;
  padding: 5px 8px;
  color: var(--td-text-color-anti);
  font-size: 12px;
  line-height: 18px;
  white-space: nowrap;
  pointer-events: none;
  background: var(--td-gray-color-13);
  border-radius: var(--td-radius-small);
  transform: translateX(-50%);
  box-shadow: var(--td-shadow-2);
}

.sound-preview-loading {
  animation: sound-preview-spin 0.9s linear infinite;
}

@keyframes sound-preview-spin {
  to {
    transform: rotate(360deg);
  }
}

@media (prefers-reduced-motion: reduce) {
  .sound-preview-loading {
    animation: none;
  }
}

@media (max-width: 720px) {
  .settings-subgroup {
    padding-left: 18px;
  }

  .reminder-volume-item {
    align-items: stretch;
  }

  .reminder-volume-action {
    width: auto;
  }

  .reminder-pack-item,
  .reminder-pack-action {
    align-items: stretch;
  }

  .reminder-pack-action {
    width: 100%;
  }

  .reminder-pack-action select {
    min-width: 0;
    flex: 1;
    width: auto;
  }
}
</style>
