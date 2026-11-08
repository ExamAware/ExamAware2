<template>
  <div class="exam-clock-theme" :class="{ filtered }" :style="themeStyle">
    <div id="cover-launch">
      <img class="cover-logo" :src="examAwareLogo" alt="" />
    </div>

    <div
      v-if="coverVisible"
      id="cover-screen"
      :class="{ 'cover-fade-out': coverLeaving }"
      :style="{ backgroundImage: `url('${selectedBackground.url}')` }"
    >
      <div id="cover-mask"></div>
      <div></div>
      <div class="cover-main">
        <div class="cover-info">
          <div class="cover-title-card skew">
            <div class="reskew">
              <p id="cover-title">{{ coverTitle }}</p>
              <p id="cover-author">{{ coverAuthor }}</p>
            </div>
            <div id="cover-date-badge">
              <div class="reskew">
                <p class="cover-date-day">{{ coverDay }}</p>
                <p class="cover-date-month">{{ coverMonth }}</p>
              </div>
            </div>
          </div>
          <div class="cover-meta skew">
            <p class="reskew">
              <span class="dim">Chart</span><br />
              <span>{{ coverOrigin }}</span>
            </p>
            <p class="reskew">
              <span class="dim">Illustration</span><br />
              <span>{{ backgroundCredit(selectedBackground) }}</span>
            </p>
          </div>
        </div>
        <div class="cover-image-frame skew">
          <div
            class="reskew"
            id="cover-image"
            :style="{ backgroundImage: `url('${selectedBackground.url}')` }"
          ></div>
        </div>
      </div>
      <div class="dim space-between">
        <p>
          Tip: <span>{{ coverTip }}</span>
        </p>
        <p class="loading-bar">Loading...</p>
      </div>
    </div>

    <div id="main">
      <div class="notify">
        <div v-if="toastMessage" id="message-toast" @click="toastMessage = ''">
          <p>
            <i class="fa-solid fa-circle-info"></i>
            <span>{{ toastMessage }}</span>
          </p>
          <a class="fa-solid fa-xmark"></a>
        </div>
      </div>

      <div>
        <nav class="space-between">
          <h2>{{ mainSlogan }}</h2>

          <div class="sub space-between space">
            <a
              class="room-number-button"
              title="点击修改考场号"
              @click.prevent.stop="openRoomNumber"
            >
              {{ props.snapshot.roomNumber }}
            </a>

            <a
              v-for="tool in visibleToolbarItems"
              :key="tool.id"
              class="fa-solid fa-plug"
              :class="{ disabled: tool.disabled }"
              :data-sub="tool.label"
              :title="tool.tooltip || tool.label"
              @click.prevent.stop="handleToolClick(tool, $event)"
            ></a>

            <a
              v-if="showCallProctor"
              class="fa-solid fa-bullhorn"
              :class="{ disabled: callProctorLoading }"
              :data-sub="callProctorLoading ? '呼叫中' : '呼叫巡考'"
              @click.prevent.stop="callProctor"
            ></a>

            <div class="dropdown">
              <a class="fa-regular fa-images" data-sub="背景"></a>
              <div class="gallery-menu">
                <div>
                  <i class="fa-solid fa-wand-magic-sparkles"></i>
                  选张背景
                  <div class="shieldlist">
                    <a
                      v-for="item in backgroundOptions"
                      :key="item.id"
                      :class="{ 'menu-active': item.id === selectedBackground.id }"
                      :title="backgroundCredit(item)"
                      @click.prevent.stop="selectBackground(item.id)"
                    >
                      {{ item.name }}
                    </a>
                  </div>
                </div>
                <div class="background-credit">
                  当前：{{ backgroundCredit(selectedBackground) }}
                </div>
                <p class="theme-credit">背景图可在 ExamAware 设置的“宝中考试时钟”页面中管理。</p>
              </div>
            </div>

            <a
              class="fa-solid fa-circle-half-stroke"
              :data-sub="filtered ? '关闭滤镜' : '滤镜'"
              @click.prevent.stop="filtered = !filtered"
            ></a>

            <div class="dropdown">
              <a class="fa-solid fa-bars" data-sub="菜单"></a>
              <div class="more-menu">
                <div>
                  <i class="fa-solid fa-gears"></i>
                  主题
                  <div class="shieldlist">
                    <a
                      v-for="theme in themeOptions"
                      :key="theme.id"
                      :class="{ 'menu-active': theme.id === currentThemeId }"
                      @click.prevent.stop="selectTheme(theme.id)"
                    >
                      {{ theme.name }}
                    </a>
                  </div>
                </div>
                <a v-if="canExit" @click.prevent.stop="exit">
                  <i class="fa-solid fa-right-from-bracket"></i>
                  退出放映
                </a>
              </div>
            </div>

            <a
              v-if="!isDesktop"
              class="fa-solid fullscreen-button"
              :class="fullscreenActive ? 'fa-compress' : 'fa-expand'"
              :data-sub="fullscreenActive ? '退出' : '全屏'"
              @click.prevent.stop="toggleFullscreen"
            ></a>
          </div>
        </nav>

        <div id="sub-slogan" class="dim">{{ subSlogan }}</div>

        <div class="bar">
          <div id="bar" :style="{ width: `${progress}%` }"></div>
        </div>

        <b class="card">
          <div>
            <span id="subject">{{ subject }}</span>
            <span id="duration">{{ duration }}</span>
          </div>
          <div>
            <span id="clock">{{ clock }}</span>
          </div>
          <div>
            <span>
              <span id="timer">{{ timerValue }}</span>
              <span class="dim" id="timer-unit">{{ timerUnit }}</span>
            </span>
            <span id="activity">{{ activity }}</span>
          </div>
        </b>
      </div>

      <footer>
        <div class="space-between space">
          <p>
            <i class="fa-brands fa-github"></i>
            <a :href="projectUrl" target="_blank" rel="noreferrer">{{ projectUrl }}</a>
          </p>
        </div>
      </footer>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue';
import type { RendererPluginContext } from '@dsz-examaware/plugin-sdk';
import type { ThemeBridge, ThemeSnapshot } from './themeBridge';
import examAwareLogo from './assets/examaware-logo.svg';
import type { PlayerToolbarItem } from '@dsz-examaware/player';
import { backgroundCredit, listBackgrounds, resolveBackground } from './backgrounds';
import { normalizeSettings, type BaozhongExamClockSettings } from '../shared/settings';

const props = defineProps<{
  snapshot: ThemeSnapshot;
  bridge: ThemeBridge;
  ctx: RendererPluginContext<BaozhongExamClockSettings>;
}>();

const projectUrl = 'https://github.com/L33Z22L11/ExamClock';
const isDesktop = typeof window !== 'undefined' && 'api' in window;

const settings = ref(normalizeSettings(props.ctx.api.settings.get()));
const settingsDisposer = props.ctx.api.settings.onChanged((next) => {
  settings.value = normalizeSettings(next);
});

onUnmounted(() => settingsDisposer.dispose());

const backgroundOptions = computed(() => listBackgrounds(settings.value));
const selectedBackground = computed(() => resolveBackground(settings.value));
const themeStyle = computed(() => ({
  backgroundImage: `url("${selectedBackground.value.url}")`
}));

const mainSlogan = computed(() => props.snapshot.examConfig?.examName || '考试时钟');
const subSlogan = computed(() => props.snapshot.examConfig?.message || '沉着冷静　诚信考试');

const scheduleRows = computed(() =>
  props.snapshot.formattedExamInfos.map((item) => ({
    index: item.index,
    name: item.name,
    timeRange: item.timeRange,
    status: item.status,
    statusText: item.statusText,
    rawData: item.rawData
  }))
);

const activeRow = computed(
  () =>
    scheduleRows.value.find((row) => row.status === 'inProgress') ??
    scheduleRows.value.find((row) => row.index === props.snapshot.state.currentExamIndex) ??
    scheduleRows.value[0] ??
    null
);

const subject = computed(() => activeRow.value?.name || '暂无考试');
const duration = computed(() => {
  const value = activeRow.value?.timeRange || '';
  return value.replace(/\s*~\s*/g, '~');
});

const clock = computed(() => formatClock(props.snapshot.currentTime));

const timerState = computed(() => {
  const row = activeRow.value;
  if (!row) {
    return { value: '--', unit: '', label: '暂无考试', progress: 0 };
  }

  const start = new Date(row.rawData.start).getTime();
  const end = new Date(row.rawData.end).getTime();
  if (!Number.isFinite(start) || !Number.isFinite(end)) {
    return { value: '--', unit: '', label: '时间异常', progress: 0 };
  }

  const now = props.snapshot.currentTime;
  const admitMinutes = 20;
  const admitMs = admitMinutes * 60_000;
  const entryAt = start - admitMs;
  const minuteWindowAt = entryAt - 20 * 60_000;

  if (now < minuteWindowAt) {
    const hours = (entryAt - now) / 3_600_000;
    return {
      value: hours.toFixed(hours >= 10 ? 0 : 1),
      unit: 'h',
      label: '距离入场',
      progress: 0
    };
  }

  if (now < entryAt) {
    return {
      value: String(Math.round((entryAt - now) / 60_000)),
      unit: 'min',
      label: '距离入场',
      progress: 0
    };
  }

  if (now < start) {
    return {
      value: String(Math.round((start - now) / 60_000)),
      unit: 'min',
      label: '距离开始',
      progress: ((start - now) / admitMs) * 100
    };
  }

  if (now < end) {
    const progress = (now - start) / (end - start);
    const showElapsed = progress < 0.5;
    return {
      value: String(Math.round((showElapsed ? now - start : end - now) / 60_000)),
      unit: 'min',
      label: showElapsed ? '已经开始' : '距离结束',
      progress: progress * 100
    };
  }

  return { value: '', unit: '', label: '已结束', progress: 100 };
});

const timerValue = computed(() => timerState.value.value);
const timerUnit = computed(() => timerState.value.unit);
const activity = computed(() => timerState.value.label);
const progress = computed(() => Math.max(0, Math.min(100, timerState.value.progress)));

const themeOptions = computed(() => props.snapshot.themeOptions);
const currentThemeId = computed(() => props.snapshot.currentThemeId);
const canExit = computed(() => props.snapshot.allowExit);
const showCallProctor = computed(() => props.snapshot.showCallProctor);
const callProctorLoading = computed(() => props.snapshot.callProctorLoading);
const visibleToolbarItems = computed(() =>
  props.snapshot.toolbarItems.filter((tool) => tool.id !== 'fullscreen' && tool.id !== 'home')
);

const toastMessage = ref('');
let toastTimer: number | null = null;
const showToast = (message: string) => {
  toastMessage.value = message;
  if (toastTimer !== null) window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => {
    toastMessage.value = '';
    toastTimer = null;
  }, 6000);
};

const coverVisible = ref(true);
const coverLeaving = ref(false);
let coverFadeTimer: number | null = null;
let coverHideTimer: number | null = null;

const coverTips = [
  '来学习！咕！咕！咕咕咕！',
  '新版本请多多关照！',
  '猜猜你要重新加载多少次才能再看到这条Tip￣︶￣',
  '这是一条属于考试时钟主题的Tips！',
  '啊！要给你看什么Tip好呢…(翻',
  '上次看到这条Tip还是在上次',
  'ExamAware正在加载中，请稍候。'
];
const coverTip = coverTips[Math.floor(Math.random() * coverTips.length)];
const coverTitle = computed(() => props.snapshot.examConfig?.examName || '无标题考试');
const coverAuthor = computed(() => props.snapshot.examConfig?.message || '诚信考试，禁止作弊。');
const coverOrigin = computed(() => settings.value.coverOrigin || '宝鸡中学');
const monthLabels = [
  'JAN',
  'FEB',
  'MAR',
  'APR',
  'MAY',
  'JUNE',
  'JULY',
  'AUG',
  'SEPT',
  'OCT',
  'NOV',
  'DEC'
];
const coverDay = computed(() => new Date(props.snapshot.currentTime).getDate());
const coverMonth = computed(() => monthLabels[new Date(props.snapshot.currentTime).getMonth()]);

const filtered = ref(false);
const fullscreenActive = ref(false);

const updateFullscreenState = () => {
  fullscreenActive.value = Boolean(document.fullscreenElement);
};

onMounted(() => {
  document.addEventListener('fullscreenchange', updateFullscreenState);
  updateFullscreenState();
  coverFadeTimer = window.setTimeout(() => {
    coverLeaving.value = true;
  }, 4000);
  coverHideTimer = window.setTimeout(() => {
    coverVisible.value = false;
  }, 4500);
});

onUnmounted(() => {
  document.removeEventListener('fullscreenchange', updateFullscreenState);
  if (toastTimer !== null) window.clearTimeout(toastTimer);
  if (coverFadeTimer !== null) window.clearTimeout(coverFadeTimer);
  if (coverHideTimer !== null) window.clearTimeout(coverHideTimer);
});

async function selectBackground(backgroundId: string) {
  try {
    await props.ctx.api.settings.patch({ backgroundId });
  } catch (error) {
    showToast(`切换背景失败：${error instanceof Error ? error.message : String(error)}`);
  }
}

async function selectTheme(themeId: string) {
  props.bridge.setTheme(themeId);
}

function openRoomNumber() {
  props.bridge.openRoomNumber();
}

function callProctor() {
  if (callProctorLoading.value) return;
  props.bridge.callProctor();
}

function handleToolClick(tool: PlayerToolbarItem, event: MouseEvent) {
  if (tool.disabled) return;
  void tool.onClick?.(event);
}

function exit() {
  props.bridge.exit();
}

async function toggleFullscreen() {
  try {
    if (document.fullscreenElement) {
      await document.exitFullscreen();
    } else {
      await document.documentElement.requestFullscreen();
    }
  } catch (error) {
    showToast(`全屏操作失败：${error instanceof Error ? error.message : String(error)}`);
  }
}

function formatClock(timestamp: number): string {
  const date = new Date(timestamp);
  return `${date.getHours()}:${String(date.getMinutes()).padStart(2, '0')}`;
}
</script>
