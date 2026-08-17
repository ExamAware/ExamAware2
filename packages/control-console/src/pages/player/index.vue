<template>
  <div class="public-player-page">
    <ExamPlayer
      v-if="config"
      ref="examPlayerRef"
      v-model:room-number="roomNumber"
      :exam-config="config"
      :config="playerConfig"
      :time-sync-status="timeSyncStatus"
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
    <div v-else class="public-player-fallback">
      <p v-if="loading">正在加载在线放映档案</p>
      <template v-else>
        <h1>无法打开在线放映</h1>
        <p>{{ errorMessage || '链接缺少有效的考试档案。' }}</p>
        <t-space>
          <t-button v-if="token" theme="primary" @click="loadConfig">重试</t-button>
          <t-button variant="outline" @click="leavePlayer">返回集控首页</t-button>
        </t-space>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref, watch } from 'vue';
import { MessagePlugin } from 'tdesign-vue-next';
import { validateExamConfigDetailed, type ExamConfig } from '@dsz-examaware/core';
import { ExamPlayer, type PlayerConfig, type UIDensity } from '@dsz-examaware/player';
import '@dsz-examaware/player/dist/player.css';
import { useRoute, useRouter } from 'vue-router';

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
type PublicExamConfigResponse = {
  examConfigId: string;
  version: number;
  expiresAt: number;
  content: ExamConfig;
};

const route = useRoute();
const router = useRouter();
const examPlayerRef = ref<ExamPlayerExpose | null>(null);
const config = ref<ExamConfig | null>(null);
const loading = ref(false);
const errorMessage = ref('');
const roomNumber = ref(localStorage.getItem('examaware:control-player:room') || '01');
const uiScale = ref(Number(localStorage.getItem('examaware:control-player:scale') || 1));
const uiDensity = ref<UIDensity>(
  (localStorage.getItem('examaware:control-player:density') as UIDensity) || 'comfortable'
);
const largeClock = ref(localStorage.getItem('examaware:control-player:large-clock') === 'true');
const largeClockScale = ref(
  Number(localStorage.getItem('examaware:control-player:large-clock-scale') || 1)
);
const examInfoLargeFont = ref(
  localStorage.getItem('examaware:control-player:large-font') === 'true'
);
const token = computed(() => {
  const value = route.query.token;
  return typeof value === 'string' && value ? value : '';
});
const playerConfig = computed<PlayerConfig>(() => ({
  roomNumber: roomNumber.value,
  fullscreen: true,
  timeSync: false,
  refreshInterval: 1000
}));
const timeSyncStatus = '电脑时间';

async function loadConfig() {
  if (!token.value) {
    config.value = null;
    errorMessage.value = '在线放映链接缺少访问令牌。';
    return;
  }
  loading.value = true;
  errorMessage.value = '';
  try {
    const response = await fetch(
      `/api/v1/exam-configs/public-links/${encodeURIComponent(token.value)}`,
      { credentials: 'omit', cache: 'no-store' }
    );
    if (!response.ok) {
      const problem = (await response.json().catch(() => null)) as {
        message?: string;
        detail?: string;
      } | null;
      throw new Error(problem?.detail || problem?.message || `链接请求失败（${response.status}）`);
    }
    const payload = (await response.json()) as PublicExamConfigResponse;
    const validation = validateExamConfigDetailed(payload.content, {
      overlap: 'error',
      sort: true
    });
    if (!validation.valid || !validation.config) {
      throw new Error('服务器返回的考试档案无效');
    }
    config.value = validation.config;
  } catch (error) {
    config.value = null;
    errorMessage.value = error instanceof Error ? error.message : '无法加载考试档案';
  } finally {
    loading.value = false;
  }
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

function leavePlayer() {
  void router.replace('/');
}
function handleExit() {
  void exitFullscreen();
  leavePlayer();
}
function handleRoomNumberChange(value: string) {
  roomNumber.value = value;
  localStorage.setItem('examaware:control-player:room', value);
}
function handleScaleChange(value: number) {
  uiScale.value = value;
  localStorage.setItem('examaware:control-player:scale', String(value));
}
function handleDensityChange(value: UIDensity) {
  uiDensity.value = value;
  localStorage.setItem('examaware:control-player:density', value);
}
function handleLargeClockToggle(value: boolean) {
  largeClock.value = value;
  localStorage.setItem('examaware:control-player:large-clock', String(value));
}
function handleLargeClockScaleChange(value: number) {
  largeClockScale.value = value;
  localStorage.setItem('examaware:control-player:large-clock-scale', String(value));
}
function handleExamInfoLargeFontToggle(value: boolean) {
  examInfoLargeFont.value = value;
  localStorage.setItem('examaware:control-player:large-font', String(value));
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
      id: 'leave',
      label: '退出放映',
      order: 999,
      onClick: handleExit
    })
  );
});

let hadDarkClass = false;
let previousThemeModeAttribute: string | null = null;
onMounted(() => {
  const root = document.documentElement;
  hadDarkClass = root.classList.contains('dark');
  previousThemeModeAttribute = root.getAttribute('theme-mode');
  root.classList.add('dark');
  root.setAttribute('theme-mode', 'dark');
  root.setAttribute('data-player-force-dark', 'true');
  void loadConfig();
});

watch(token, () => void loadConfig());

onUnmounted(() => {
  toolbarDisposers.forEach((dispose) => dispose());
  void exitFullscreen();
  const root = document.documentElement;
  root.removeAttribute('data-player-force-dark');
  root.classList.toggle('dark', hadDarkClass);
  if (previousThemeModeAttribute === null) root.removeAttribute('theme-mode');
  else root.setAttribute('theme-mode', previousThemeModeAttribute);
});
</script>

<style scoped>
.public-player-page {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background: #05070d;
  color: var(--td-text-color-anti);
}

.public-player-fallback {
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

.public-player-fallback h1 {
  margin: 0;
}

.public-player-fallback p {
  max-width: 680px;
  color: rgba(233, 236, 245, 0.72);
}

:global(html),
:global(body),
:global(#app) {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: #05070d;
}
</style>
