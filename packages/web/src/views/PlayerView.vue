<template>
  <div class="player-view-container">
    <ExamPlayer
      v-if="config"
      ref="examPlayerRef"
      :exam-config="config"
      :config="playerConfig"
      :time-sync-status="timeSyncStatus"
      v-model:roomNumber="roomNumber"
      :allow-edit-room-number="true"
      :show-action-bar="true"
      :ui-scale="uiScale"
      :ui-density="uiDensity"
      :large-clock="largeClock"
      :large-clock-scale="largeClockScale"
      :exam-info-large-font="examInfoLargeFont"
      :allow-exit="true"
      @exit="handleExit"
      @room-number-change="handleRoomNumberChange"
      @scale-change="handleScaleChange"
      @density-change="handleDensityChange"
      @large-clock-toggle="handleLargeClockToggle"
      @large-clock-scale-change="handleLargeClockScaleChange"
      @exam-info-large-font-toggle="handleExamInfoLargeFontToggle"
      @exam-start="handleExamStart"
      @exam-end="handleExamEnd"
      @exam-alert="handleExamAlert"
      @exam-switch="handleExamSwitch"
      @error="handleError"
    />
    <div v-else class="fallback">
      <h1>未找到考试档案</h1>
      <p>{{ errorMessage || '请先返回上传页选择有效的 .ea2 档案。' }}</p>
      <t-button theme="primary" @click="goHome">返回上传页</t-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onUnmounted, ref, watch } from 'vue';
import { MessagePlugin } from 'tdesign-vue-next';
import { validateExamConfigDetailed, type ExamConfig } from '@dsz-examaware/core';
import { ExamPlayer, type PlayerConfig, type UIDensity } from '@dsz-examaware/player';
import { useRouter } from 'vue-router';

type ExamPlayerExpose = {
  toolbar?: {
    register?: (item: {
      id: string;
      label: string;
      order?: number;
      onClick: () => void;
    }) => () => void;
  };
};
type ExamInfo = ExamConfig['examInfos'][number];

const router = useRouter();
const examPlayerRef = ref<ExamPlayerExpose | null>(null);
const errorMessage = ref('');
const roomNumber = ref(localStorage.getItem('examaware:web:room') || '01');
const uiScale = ref(Number(localStorage.getItem('examaware:web:scale') || 1));
const uiDensity = ref<UIDensity>(
  (localStorage.getItem('examaware:web:density') as UIDensity) || 'comfortable'
);
const largeClock = ref(localStorage.getItem('examaware:web:large-clock') === 'true');
const largeClockScale = ref(Number(localStorage.getItem('examaware:web:large-clock-scale') || 1));
const examInfoLargeFont = ref(localStorage.getItem('examaware:web:large-font') === 'true');
const config = ref(readStoredConfig());
const playerConfig = computed<PlayerConfig>(() => ({
  roomNumber: roomNumber.value,
  fullscreen: true,
  timeSync: false,
  refreshInterval: 1000
}));
const timeSyncStatus = '电脑时间';

function readStoredConfig(): ExamConfig | null {
  const raw = sessionStorage.getItem('examaware:config');
  if (!raw) return null;
  try {
    const validation = validateExamConfigDetailed(JSON.parse(raw) as unknown, {
      overlap: 'error',
      sort: true
    });
    if (validation.valid && validation.config) return validation.config;
    errorMessage.value = validation.errors.map((item) => item.message).join('；');
  } catch (error) {
    errorMessage.value = error instanceof Error ? error.message : '档案读取失败';
  }
  return null;
}

function goHome() {
  void router.push('/');
}

async function requestFullscreen() {
  try {
    if (!document.fullscreenElement) await document.documentElement.requestFullscreen?.();
  } catch {
    // Browsers require a user gesture for fullscreen.
  }
}

async function exitFullscreen() {
  try {
    if (document.fullscreenElement) await document.exitFullscreen();
  } catch {
    // Ignore browser-specific fullscreen failures while leaving playback.
  }
}

function handleExit() {
  void exitFullscreen();
  goHome();
}
function handleRoomNumberChange(value: string) {
  roomNumber.value = value;
  localStorage.setItem('examaware:web:room', value);
}
function handleScaleChange(value: number) {
  uiScale.value = value;
  localStorage.setItem('examaware:web:scale', String(value));
}
function handleDensityChange(value: UIDensity) {
  uiDensity.value = value;
  localStorage.setItem('examaware:web:density', value);
}
function handleLargeClockToggle(value: boolean) {
  largeClock.value = value;
  localStorage.setItem('examaware:web:large-clock', String(value));
}
function handleLargeClockScaleChange(value: number) {
  largeClockScale.value = value;
  localStorage.setItem('examaware:web:large-clock-scale', String(value));
}
function handleExamInfoLargeFontToggle(value: boolean) {
  examInfoLargeFont.value = value;
  localStorage.setItem('examaware:web:large-font', String(value));
}
function handleExamStart(exam: ExamInfo) {
  void MessagePlugin.success(`“${exam.name || '考试'}”开始`);
}
function handleExamEnd(exam: ExamInfo) {
  void MessagePlugin.info(`“${exam.name || '考试'}”结束`);
}
function handleExamAlert(exam: ExamInfo, alertTime: number) {
  void MessagePlugin.warning(`“${exam.name || '考试'}”还有 ${alertTime} 分钟结束`);
}
function handleExamSwitch(_fromExam: ExamInfo | undefined, toExam: ExamInfo | undefined) {
  if (toExam) void MessagePlugin.info(`切换到“${toExam.name || '考试'}”`);
}
function handleError(error: string) {
  errorMessage.value = error;
  void MessagePlugin.error(error || '播放器错误');
}

let toolbarDisposers: Array<() => void> = [];
watch(examPlayerRef, (player) => {
  toolbarDisposers.forEach((dispose) => dispose());
  toolbarDisposers = [];
  const register = player?.toolbar?.register;
  if (!register) return;
  toolbarDisposers.push(
    register({
      id: 'fullscreen',
      label: '进入全屏',
      order: 900,
      onClick: () => void requestFullscreen()
    }),
    register({
      id: 'home',
      label: '返回上传页',
      order: 999,
      onClick: handleExit
    })
  );
});

onUnmounted(() => {
  toolbarDisposers.forEach((dispose) => dispose());
  void exitFullscreen();
});
</script>

<style scoped>
.player-view-container {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background: #05070d;
  color: var(--td-text-color-anti);
}

.fallback {
  width: 100%;
  height: 100%;
  display: grid;
  place-content: center;
  justify-items: center;
  gap: 16px;
  padding: 24px;
  background: #0b1220;
  color: #e9ecf5;
  text-align: center;
}

.fallback h1 {
  margin: 0;
}

.fallback p {
  max-width: 680px;
  color: rgba(233, 236, 245, 0.72);
}

:global(html),
:global(body) {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  background: #05070d;
  overflow: hidden;
}
</style>
