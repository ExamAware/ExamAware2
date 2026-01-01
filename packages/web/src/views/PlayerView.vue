<template>
  <div class="player-page">
    <div class="player-shell">
      <div class="player" v-if="config" ref="playerRef">
        <ExamPlayer
          ref="playerComponentRef"
          :exam-config="config"
          :config="playerConfig"
          :time-sync-status="timeSyncStatus"
          v-model:roomNumber="roomNumber"
          :ui-scale="uiScale"
          :ui-density="uiDensity"
          :show-action-bar="showActionBar"
          :large-clock="largeClock"
          :large-clock-scale="largeClockScale"
          :exam-info-large-font="examInfoLargeFont"
          :allow-edit-room-number="allowEditRoomNumber"
          :event-handlers="eventHandlers"
          @exit="handleExit"
        />
      </div>
      <div v-else class="fallback">
        <p>未找到配置，请先上传考试档案。</p>
        <t-button theme="default" @click="goHome">返回首页</t-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, onMounted, onUnmounted, watch } from 'vue';
import type { ExamConfig } from '@dsz-examaware/core';
import {
  ExamPlayer,
  type PlayerConfig,
  type PlayerEventHandlers,
  type UIDensity,
  type PlayerToolbarItem
} from '@dsz-examaware/player';
import { MessagePlugin } from 'tdesign-vue-next';
import { HomeIcon } from 'tdesign-icons-vue-next';
import { useRouter } from 'vue-router';

type ExamPlayerExpose = {
  showColorfulAlert?: (payload: { title: string; themeBaseColor: string }) => void;
  notify?: (markdown: string, durationMs?: number) => void;
  toolbar?: {
    register?: (item: PlayerToolbarItem) => () => void;
  };
};

type ExamInfo = ExamConfig['examInfos'][number];

const router = useRouter();
const roomNumber = ref('01');
const playerRef = ref<HTMLElement | null>(null);
const playerComponentRef = ref<ExamPlayerExpose | null>(null);

const uiScale = ref(1);
const uiDensity = ref<UIDensity>('comfortable');
const showActionBar = ref(true);
const largeClock = ref(false);
const largeClockScale = ref(1);
const examInfoLargeFont = ref(false);
const allowEditRoomNumber = ref(true);
const timeSyncEnabled = ref(true);
const refreshInterval = ref(1000);
const autoFullscreen = ref(true);

const config = computed<ExamConfig | null>(() => {
  const raw = sessionStorage.getItem('examaware:config');
  if (!raw) return null;
  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
});

const playerConfig = computed<PlayerConfig>(() => ({
  roomNumber: roomNumber.value,
  fullscreen: autoFullscreen.value,
  timeSync: timeSyncEnabled.value,
  refreshInterval: refreshInterval.value
}));

const timeSyncStatus = computed(() => (timeSyncEnabled.value ? '电脑时间' : '未同步'));

const eventHandlers: PlayerEventHandlers = {
  onExamStart: (exam: ExamInfo) => {
    MessagePlugin.success({ content: `“${exam?.name || '考试'}”开始` });
  },
  onExamEnd: (exam: ExamInfo) => {
    MessagePlugin.info({ content: `“${exam?.name || '考试'}”结束` });
  },
  onExamAlert: (exam: ExamInfo, alertTime: number) => {
    MessagePlugin.warning({ content: `“${exam?.name || '考试'}”还有 ${alertTime} 分钟结束` });
  },
  onExamSwitch: (fromExam: ExamInfo | undefined, toExam: ExamInfo | undefined) => {
    if (toExam) {
      MessagePlugin.info({ content: `切换到 “${toExam?.name || '考试'}”` });
    }
  },
  onError: (error: string) => {
    MessagePlugin.error({ content: error || '播放器错误' });
  }
};

const goHome = () => router.push('/');

// === 全屏相关（Web） ===
const getDoc = () =>
  document as Document & {
    webkitExitFullscreen?: () => Promise<void> | void;
    webkitFullscreenElement?: Element | null;
  };

const requestFullscreen = async (el: HTMLElement) => {
  const anyEl = el as any;
  try {
    if (anyEl.requestFullscreen) {
      await anyEl.requestFullscreen();
      return true;
    }
    if (anyEl.webkitRequestFullscreen) {
      await anyEl.webkitRequestFullscreen();
      return true;
    }
  } catch (e) {
    // ignore
  }
  return false;
};

const exitFullscreen = async () => {
  const anyDoc = getDoc() as any;
  try {
    if (document.fullscreenElement && document.exitFullscreen) {
      await document.exitFullscreen();
      return true;
    }
    if (anyDoc.webkitFullscreenElement && anyDoc.webkitExitFullscreen) {
      await anyDoc.webkitExitFullscreen();
      return true;
    }
  } catch (e) {
    // ignore
  }
  return false;
};

const handleExit = async () => {
  await exitFullscreen();
};

let disposeToolbar: (() => void) | null = null;
const registerToolbar = () => {
  disposeToolbar?.();
  const toolbar = playerComponentRef.value?.toolbar;
  if (toolbar?.register) {
    disposeToolbar = toolbar.register({
      id: 'home',
      label: '返回首页',
      tooltip: '回到上传页',
      order: 999,
      icon: HomeIcon,
      onClick: goHome
    });
  }
};

const triggerAlert = () => {
  playerComponentRef.value?.showColorfulAlert?.({ title: '示例提醒', themeBaseColor: '#5865f2' });
};

const triggerNotice = () => {
  playerComponentRef.value?.notify?.('**考前检查**\n请确认音量与网络状态。', 5000);
};

onMounted(async () => {
  const container = playerRef.value || document.documentElement;
  if (autoFullscreen.value) {
    await requestFullscreen(container);
  }
  registerToolbar();
});

onUnmounted(() => {
  exitFullscreen();
  disposeToolbar?.();
});

watch(playerComponentRef, () => {
  registerToolbar();
});
</script>

<style scoped>
.player-page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background:
    radial-gradient(circle at 20% 20%, rgba(88, 101, 242, 0.12), transparent 32%),
    radial-gradient(circle at 80% 0%, rgba(34, 197, 94, 0.12), transparent 34%), #0b1220;
  color: #e9ecf5;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

.player-shell {
  flex: 1;
  display: flex;
  align-items: stretch;
  justify-content: stretch;
  padding: 0;
  background: #0b1220;
}

.player {
  width: 100vw;
  height: 100vh;
  border-radius: 0;
  overflow: hidden;
  box-shadow: none;
  background: #0b1220;
  position: fixed;
  top: 0;
  left: 0;
}

.fallback {
  min-height: 100vh;
  display: grid;
  place-content: center;
  gap: 12px;
  color: #e9ecf5;
}

:global(html),
:global(body) {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  background: #0b1220;
  overflow: hidden;
}
</style>
