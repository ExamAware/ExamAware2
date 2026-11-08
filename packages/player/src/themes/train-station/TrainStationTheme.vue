<template>
  <div class="station-theme">
    <header class="station-header">
      <h1>{{ examTitle }}</h1>
    </header>

    <div class="station-body">
      <section class="station-left">
        <div class="clock-block">
          <div class="clock-time">{{ clockText }}</div>
        </div>

        <div class="subject-panel">
          <div class="subject-summary">
            <div class="subject-name">{{ currentExamName }}</div>
            <div class="subject-meta">
              <div class="subject-time">{{ currentTimeRange }}</div>
              <div class="subject-status" :class="currentStatusClass">
                {{ currentStatusText }}
              </div>
            </div>
          </div>

          <div class="subject-extra">
            <table class="subject-info-table">
              <tbody>
                <tr>
                  <th>剩余时间</th>
                  <td>{{ remainingTime }}</td>
                </tr>
                <tr v-for="(material, index) in materials" :key="index">
                  <th>材料</th>
                  <td>{{ material.name }} {{ material.quantity }}{{ material.unit }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section class="station-right">
        <div class="schedule-head">
          <span>日期</span>
          <span>科目</span>
          <span>时间</span>
          <span>状态</span>
        </div>

        <div class="schedule-body">
          <div
            v-for="row in scheduleRows"
            :key="row.index"
            class="schedule-row"
            :class="{ 'is-current': row.index === currentExamIndex }"
          >
            <span class="schedule-cell">{{ row.dateLabel }}</span>
            <span class="schedule-cell schedule-name">{{ row.name }}</span>
            <span class="schedule-cell">{{ formatTimeRange(row.timeRange) }}</span>
            <span class="schedule-cell schedule-status" :class="statusClass(row.status)">
              {{ row.statusText }}
            </span>
          </div>
          <div v-if="!scheduleRows.length" class="schedule-empty">暂无考试安排</div>
        </div>
      </section>
    </div>

    <transition name="station-fade">
      <div v-if="colorfulAlert" class="station-alert station-alert-colorful">
        <div class="station-alert-copy">
          <div class="station-alert-title">{{ colorfulAlert.title }}</div>
          <div v-if="colorfulAlert.message" class="station-alert-message">
            {{ colorfulAlert.message }}
          </div>
        </div>
      </div>
    </transition>

    <transition name="station-fade">
      <div v-if="noticeAlert" class="station-alert station-alert-notice">
        <div class="station-alert-copy">
          <div class="station-alert-markdown" v-html="noticeAlert.html"></div>
          <button class="station-alert-close" type="button" @click="closeNotice">
            关闭（{{ noticeAlert.remainingSec }}s）
          </button>
        </div>
      </div>
    </transition>

    <div v-if="themePickerOpen" class="theme-picker">
      <div class="theme-picker-title">放映设置</div>
      <button
        v-for="item in themeOptions"
        :key="item.id"
        class="theme-option"
        :class="{ active: item.id === currentThemeId }"
        type="button"
        @click="selectTheme(item.id)"
      >
        <span class="theme-option-name">{{ item.name }}</span>
        <span v-if="item.description" class="theme-option-desc">{{ item.description }}</span>
      </button>
    </div>

    <div v-if="showActionBar" class="station-controls">
      <button
        v-if="collapsed"
        class="control-toggle"
        type="button"
        aria-label="展开控制栏"
        @click="collapsed = false"
      >
        &gt;
      </button>
      <div v-else class="control-row">
        <button class="control-button" type="button" @click="collapseControls">收起</button>
        <button v-if="canExit" class="control-button" type="button" @click="exit">退出</button>
        <button class="control-button" type="button" @click="themePickerOpen = !themePickerOpen">
          放映设置
        </button>
        <button v-if="!isDesktop" class="control-button" type="button" @click="toggleFullscreen">
          全屏
        </button>
        <button class="control-button" type="button" @click="openRoomNumber">考场号</button>
        <button
          v-if="showCallProctor"
          class="control-button"
          type="button"
          :disabled="callProctorLoading"
          @click="callProctor"
        >
          {{ callProctorLoading ? '呼叫中…' : '呼叫巡考' }}
        </button>
        <button
          v-for="tool in visibleToolbarItems"
          :key="tool.id"
          class="control-button"
          type="button"
          :disabled="tool.disabled"
          @click="handleToolClick(tool, $event)"
        >
          {{ tool.label }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import type { PlayerToolbarItem } from '../../types';
import type { PlayerThemeProps } from '../../types/theme';

const props = defineProps<PlayerThemeProps>();

const collapsed = ref(true);
const themePickerOpen = ref(false);
const isDesktop = typeof window !== 'undefined' && 'api' in window;

const examTitle = computed(() => props.context.examConfig.value?.examName || '考试');
const clockText = computed(() => props.context.formattedCurrentTime.value || '--:--:--');

const scheduleRows = computed(() =>
  props.context.formattedExamInfos.value.map((item) => ({
    index: item.index,
    name: item.name,
    dateLabel: formatDate(item.rawData.start),
    timeRange: item.timeRange,
    status: item.status,
    statusText: item.statusText,
    rawData: item.rawData
  }))
);

// 优先展示进行中的考试，避免核心索引尚未推进时大屏显示已结束场次。
const activeRow = computed(
  () =>
    scheduleRows.value.find((row) => row.status === 'inProgress') ??
    scheduleRows.value.find((row) => row.index === props.context.state.value.currentExamIndex) ??
    scheduleRows.value[0] ??
    null
);

const currentExamName = computed(() => activeRow.value?.name || '暂无考试');
const currentExamIndex = computed(
  () => activeRow.value?.index ?? props.context.state.value.currentExamIndex
);
const currentTimeRange = computed(() =>
  formatTimeRange(activeRow.value?.timeRange || props.context.currentExamTimeRange.value || '--')
);

const remainingTime = computed(() => {
  const row = activeRow.value;
  if (!row || row.status === 'pending') return '--';
  if (row.status === 'completed') return '00:00:00';
  const end = new Date(row.rawData.end).getTime();
  if (!Number.isFinite(end)) return '--';
  return formatDuration(end - props.context.currentTime.value);
});
const currentStatusText = computed(() =>
  activeRow.value
    ? statusText(activeRow.value.status)
    : statusText(props.context.examStatus.value.status)
);
const currentStatusClass = computed(() =>
  activeRow.value
    ? statusClass(activeRow.value.status)
    : statusClass(props.context.examStatus.value.status)
);
const materials = computed(() => activeRow.value?.rawData.materials ?? []);
const showActionBar = computed(() => props.context.chrome.showActionBar.value);
const canExit = computed(() => props.context.chrome.allowExit.value);
const showCallProctor = computed(() => props.context.chrome.showCallProctor.value);
const callProctorLoading = computed(() => props.context.chrome.callProctorLoading.value);
const visibleToolbarItems = computed(() =>
  props.context.chrome.toolbarItems.value.filter(
    (tool) => tool.id !== 'fullscreen' && tool.id !== 'home'
  )
);
const themeOptions = computed(() => props.context.theme.options.value);
const currentThemeId = computed(() => props.context.theme.currentId.value);
const colorfulAlert = computed(() => props.context.alerts.colorful.value);
const noticeAlert = computed(() => props.context.alerts.notice.value);

function statusText(status: string): string {
  if (status === 'inProgress') return '进行中';
  if (status === 'completed') return '已结束';
  if (status === 'pending') return '未开始';
  return '暂无考试';
}

function statusClass(status: string): string {
  if (status === 'inProgress') return 'status-active';
  if (status === 'completed') return 'status-done';
  if (status === 'pending') return 'status-pending';
  return 'status-unknown';
}

function formatTimeRange(value: string): string {
  return value.replace(/\s*~\s*/g, '～');
}

function formatDate(value: string): string {
  const match = /^\d{4}-(\d{2})-(\d{2})/.exec(value);
  return match ? `${match[1]}/${match[2]}` : value;
}

function formatDuration(milliseconds: number): string {
  const totalSeconds = Math.max(0, Math.floor(milliseconds / 1000));
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  return [hours, minutes, seconds].map((part) => String(part).padStart(2, '0')).join(':');
}

function handleToolClick(tool: PlayerToolbarItem, event: MouseEvent) {
  if (tool.disabled) return;
  void tool.onClick?.(event);
}

function closeNotice() {
  props.context.alerts.closeNotice();
}

function collapseControls() {
  collapsed.value = true;
  themePickerOpen.value = false;
}

function selectTheme(themeId: string) {
  props.context.theme.set(themeId);
  themePickerOpen.value = false;
}

function exit() {
  props.context.actions.exit();
}

function openRoomNumber() {
  props.context.actions.openRoomNumberDialog();
}

function callProctor() {
  props.context.actions.callProctor();
}

function toggleFullscreen() {
  if (typeof document === 'undefined') return;
  if (document.fullscreenElement) {
    void document.exitFullscreen?.();
    return;
  }
  void document.documentElement.requestFullscreen?.();
}
</script>

<style scoped>
.station-theme {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background: #000;
  color: #fff;
  font-family: 'MiSans', sans-serif;
}

.station-header {
  flex: 0 0 clamp(84px, 14vh, 160px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 2vw;
  background: #000;
}

.station-header h1 {
  width: 100%;
  margin: 0;
  overflow: hidden;
  color: #ff0000;
  font-size: clamp(1.6rem, 3vw, 3.5rem);
  font-weight: 400;
  line-height: 1.1;
  letter-spacing: 0.04em;
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.station-body {
  flex: 1;
  min-height: 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  background: #000;
}

.station-left,
.station-right {
  min-width: 0;
  min-height: 0;
  display: flex;
  flex-direction: column;
  background: #000;
}

.station-right {
  --station-row-height: clamp(32px, 4.2vh, 48px);
}

.clock-block {
  flex: 0 0 38%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 2vw;
  background: #000;
}

.clock-time {
  color: #fff;
  font-size: clamp(3rem, 10.5vw, 12rem);
  font-weight: 700;
  font-variant-numeric: tabular-nums;
  line-height: 1;
  white-space: nowrap;
}

.subject-panel {
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
}

.subject-summary {
  flex: 0 0 32%;
  min-height: 0;
  display: grid;
  grid-template-columns: 0.9fr 1.4fr;
}

.subject-name {
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding: 0.6rem;
  background: #0000ff;
  color: #fff;
  font-size: clamp(1.5rem, 3vw, 3.5rem);
  font-weight: 400;
  line-height: 1.1;
  text-align: center;
  word-break: break-word;
}

.subject-meta {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: clamp(0.6rem, 1.2vw, 1.4rem);
  padding: 1rem;
  background: #000;
}

.subject-time {
  color: #fff;
  font-size: clamp(1.3rem, 2.5vw, 3rem);
  font-weight: 400;
  white-space: nowrap;
}

.subject-status {
  font-size: clamp(1.4rem, 2.7vw, 3.2rem);
  font-weight: 400;
  white-space: nowrap;
}

.subject-extra {
  flex: 1;
  min-height: 0;
  overflow: hidden;
  padding: 0;
  background: #000;
}

.subject-info-table {
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed;
  color: #fff;
  font-size: clamp(1.15rem, 2vw, 2.2rem);
  font-weight: 400;
  text-align: left;
  background: #000;
}

.subject-info-table th,
.subject-info-table td {
  padding: 0.3rem 0.8rem;
  overflow-wrap: anywhere;
  background: #000;
  color: #fff;
  font-weight: 400;
  vertical-align: top;
}

.subject-info-table th {
  width: 32%;
  white-space: nowrap;
}

.schedule-head,
.schedule-row {
  display: grid;
  grid-template-columns: 0.8fr 1.5fr 1.2fr 0.8fr;
  align-items: center;
  text-align: center;
}

.schedule-head {
  flex: 0 0 var(--station-row-height);
  background: #000;
  color: #fff;
  font-size: clamp(1rem, 1.5vw, 1.65rem);
  font-weight: 400;
  line-height: 1.1;
}

.schedule-body {
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  overflow-y: auto;
  background-image: repeating-linear-gradient(
    to bottom,
    #0000ff 0,
    #0000ff var(--station-row-height),
    #000 0,
    #000 calc(var(--station-row-height) * 2)
  );
  background-attachment: local;
}

.schedule-row {
  flex: 0 0 var(--station-row-height);
  color: #fff;
  font-size: clamp(1.1rem, 1.8vw, 1.9rem);
  font-weight: 400;
  line-height: 1.1;
  background: transparent;
}

.schedule-row.is-current {
  font-weight: 400;
}

.schedule-cell {
  overflow: hidden;
  padding: 0 0.4rem;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.schedule-name {
  font-weight: 400;
}

.schedule-status {
  font-weight: 400;
}

.schedule-empty {
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: clamp(1rem, 1.5vw, 1.6rem);
}

.status-pending {
  color: #ffff00;
}

.status-active {
  color: #00ff00;
}

.status-done {
  color: #ff0000;
}

.status-unknown {
  color: #fff;
}

.station-alert {
  position: fixed;
  inset: 0;
  z-index: 200;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: auto;
  padding: clamp(24px, 4vw, 72px);
  background: #000;
}

.station-alert-colorful {
  background: #0000ff;
}

.station-alert-copy {
  width: min(94vw, 1800px);
  text-align: center;
}

.station-alert-title {
  color: #fff;
  font-size: clamp(3.5rem, 9vw, 9rem);
  font-weight: 400;
  line-height: 1.05;
  letter-spacing: 0.03em;
  overflow-wrap: anywhere;
}

.station-alert-message {
  margin-top: clamp(24px, 4vh, 64px);
  color: #fff;
  font-size: clamp(2rem, 4vw, 5rem);
  font-weight: 400;
  line-height: 1.2;
  overflow-wrap: anywhere;
  white-space: pre-wrap;
}

.station-alert-notice .station-alert-copy {
  color: #fff;
}

.station-alert-markdown :is(h1, h2, h3) {
  margin: 0 0 clamp(24px, 4vh, 64px);
  color: #fff;
  font-size: clamp(3.5rem, 9vw, 9rem);
  font-weight: 400;
  line-height: 1.05;
  overflow-wrap: anywhere;
}

.station-alert-markdown :is(strong, b) {
  font-weight: 400;
}

.station-alert-markdown :is(p, li) {
  margin: 0;
  color: #fff;
  font-size: clamp(2rem, 4vw, 5rem);
  font-weight: 400;
  line-height: 1.2;
  overflow-wrap: anywhere;
}

.station-alert-markdown :is(ul, ol) {
  display: inline-block;
  margin: 0;
  padding-left: 1.2em;
  text-align: left;
}

.station-alert-close {
  margin-top: clamp(28px, 5vh, 72px);
  padding: clamp(0.6rem, 1.2vh, 1rem) clamp(1rem, 1.8vw, 1.6rem);
  border: 0;
  border-radius: 0;
  background: #0000ff;
  color: #fff;
  font-family: 'MiSans', sans-serif;
  font-size: clamp(0.95rem, 1.4vw, 1.4rem);
  font-weight: 400;
  cursor: pointer;
}

.station-fade-enter-active,
.station-fade-leave-active {
  transition: opacity 240ms ease;
}

.station-fade-enter-from,
.station-fade-leave-to {
  opacity: 0;
}

.theme-picker {
  position: fixed;
  bottom: clamp(2.8rem, 4.5vw, 4.5rem);
  left: 0;
  z-index: 101;
  display: flex;
  width: min(28rem, 80vw);
  flex-direction: column;
  gap: 2px;
  background: #000;
}

.theme-picker-title {
  padding: clamp(0.5rem, 1vh, 0.8rem) clamp(0.7rem, 1.2vw, 1.1rem);
  background: #0000ff;
  color: #fff;
  font-size: clamp(0.85rem, 1.1vw, 1rem);
  font-weight: 400;
}

.theme-option {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.2rem;
  padding: clamp(0.6rem, 1.2vh, 1rem) clamp(0.7rem, 1.2vw, 1.1rem);
  border: 0;
  border-radius: 0;
  background: #000;
  color: #fff;
  font-family: 'MiSans', sans-serif;
  text-align: left;
  cursor: pointer;
}

.theme-option:nth-child(even) {
  background: #0000ff;
}

.theme-option.active .theme-option-name {
  text-decoration: underline;
}

.theme-option-name {
  color: #fff;
  font-size: clamp(0.9rem, 1.2vw, 1.1rem);
  font-weight: 400;
}

.theme-option-desc {
  color: #fff;
  font-size: clamp(0.75rem, 0.95vw, 0.95rem);
  line-height: 1.3;
}

.station-controls {
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 100;
  display: flex;
  align-items: flex-end;
}

.control-toggle,
.control-button {
  border: 0;
  border-radius: 0;
  background: #0000ff;
  color: #fff;
  font-family: 'MiSans', sans-serif;
  cursor: pointer;
}

.control-toggle {
  width: clamp(2.6rem, 4vw, 4rem);
  height: clamp(2.6rem, 4vw, 4rem);
  padding: 0;
  font-size: clamp(1.4rem, 2.4vw, 2.4rem);
  font-weight: 400;
  line-height: 1;
}

.control-row {
  display: flex;
  align-items: flex-end;
  gap: 4px;
}

.control-button {
  padding: clamp(0.6rem, 1.2vh, 1rem) clamp(0.7rem, 1.2vw, 1.1rem);
  font-size: clamp(0.85rem, 1.2vw, 1.1rem);
  font-weight: 400;
  white-space: nowrap;
}

.control-button:disabled {
  cursor: default;
}

.control-toggle:focus-visible,
.control-button:focus-visible {
  outline: 2px solid #fff;
  outline-offset: -2px;
}
</style>
