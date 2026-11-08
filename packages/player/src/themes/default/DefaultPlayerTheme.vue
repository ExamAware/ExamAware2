<template>
  <div class="player-theme-default">
    <div class="background-ellipse"></div>

    <div class="content-wrapper">
      <div class="left-column">
        <component :is="context.slots.logo" v-if="context.slots.logo" />
        <div v-else class="logo-container"><span class="logo-text">DSZ ExamAware 知试</span></div>

        <component :is="context.slots.title" v-if="context.slots.title" />
        <div v-else class="title-section">
          <h1 ref="mainTitleRef" class="main-title">
            {{ context.examConfig.value?.examName || '考试' }}
          </h1>
          <p ref="subtitleRef" class="subtitle">
            {{ context.examConfig.value?.message || '请遵守考场纪律' }}
          </p>
        </div>

        <div class="card-item"><component :is="context.cards.clock" /></div>
        <div class="card-item"><component :is="context.cards.examInfo" /></div>
      </div>

      <div class="right-column">
        <div class="card-item"><component :is="context.cards.room" /></div>
        <div class="card-item"><component :is="context.cards.list" /></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref, watch } from 'vue';
import type { PlayerThemeProps } from '../../types/theme';

const props = defineProps<PlayerThemeProps>();

const mainTitleRef = ref<HTMLElement>();
const subtitleRef = ref<HTMLElement>();
let titleObserver: MutationObserver | null = null;

const adjustTitleSize = () => {
  if (!mainTitleRef.value || !subtitleRef.value) return;

  const container = mainTitleRef.value.parentElement;
  if (!container) return;

  // 等待 DOM 更新完成再计算（避免布局抖动）
  setTimeout(() => {
    if (!mainTitleRef.value || !subtitleRef.value) return;
    const containerWidth = container.clientWidth;

    // 从一个较大的初始字体开始，逐步减小直到单行完全显示
    let fontSize = 50; // px，初始值
    mainTitleRef.value.style.fontSize = `${fontSize}px`;

    // 强制重新计算布局
    void mainTitleRef.value.offsetHeight;

    let scrollWidth = mainTitleRef.value.scrollWidth;

    // 逐步减小字体直到文字宽度不超过容器宽度
    while (scrollWidth > containerWidth && fontSize > 12) {
      fontSize -= 0.5; // 小步长保证精度
      mainTitleRef.value.style.fontSize = `${fontSize}px`;
      void mainTitleRef.value.offsetHeight;
      scrollWidth = mainTitleRef.value.scrollWidth;
    }

    // 让标题留一点安全边距
    fontSize = Math.max(12, fontSize - 5);
    mainTitleRef.value.style.fontSize = `${fontSize}px`;

    // 副标题与主标题保持比例（约40%）
    const subtitleFontSize = fontSize * 0.4;
    subtitleRef.value.style.fontSize = `${subtitleFontSize}px`;
  }, 10);
};

onMounted(() => {
  adjustTitleSize();
  window.addEventListener('resize', adjustTitleSize);

  // 监听 documentElement 上的 UI 缩放变化，保持标题自适应。
  titleObserver = new MutationObserver(() => {
    adjustTitleSize();
  });
  titleObserver.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['style']
  });
});

onUnmounted(() => {
  window.removeEventListener('resize', adjustTitleSize);
  titleObserver?.disconnect();
  titleObserver = null;
});

watch(
  () => props.context.examConfig.value?.examName,
  () => adjustTitleSize()
);
watch(
  () => props.context.examConfig.value?.message,
  () => adjustTitleSize()
);
</script>

<style scoped>
.player-theme-default {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: #02080d;
}

.background-ellipse {
  position: absolute;
  top: 0;
  left: 50%;
  width: 100%;
  height: 45%;
  background: radial-gradient(
    50% 50% at 50% 50%,
    rgba(55, 88, 255, 0.3) 0%,
    rgba(70, 82, 255, 0) 100%
  );
  border-radius: 50%;
  transform: translateX(-50%) translateY(-50%);
  z-index: 0;
}

.content-wrapper {
  position: relative;
  z-index: 10;
  height: 100%;
  display: flex;
  padding: calc(var(--ui-scale, 1) * var(--density-scale, 1) * 2rem)
    calc(var(--ui-scale, 1) * var(--density-scale, 1) * 2rem)
    calc(var(--ui-scale, 1) * var(--density-scale, 1) * 8rem)
    calc(var(--ui-scale, 1) * var(--density-scale, 1) * 2rem);
  gap: calc(100px * var(--ui-scale, 1) * var(--density-scale, 1));
}

.left-column {
  width: 50%;
  min-width: 0;
  padding-top: calc((40px * 100vh / 1080px) * var(--ui-scale, 1) * var(--density-scale, 1));
  overflow: hidden;
}

.right-column {
  width: 50%;
  min-width: 0;
  padding-top: calc((40px * 100vh / 1080px) * var(--ui-scale, 1) * var(--density-scale, 1));
  overflow: hidden;
}

.logo-container {
  position: relative;
  margin-bottom: calc((40px * 100vh / 1080px) * var(--ui-scale, 1) * var(--density-scale, 1));
  z-index: 20;
}

.logo-text {
  color: #ffffff;
  font-size: calc(var(--ui-scale, 1) * 1.25rem);
  font-weight: 600;
  letter-spacing: 0.025em;
}

.title-section {
  margin-bottom: calc(var(--ui-scale, 1) * var(--density-scale, 1) * 3rem);
}

.main-title {
  color: #ffffff;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: calc(var(--ui-scale, 1) * var(--density-scale, 1) * 1rem);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
}

.subtitle {
  color: rgba(255, 255, 255, 0.7);
  font-weight: 400;
  line-height: 1.4;
}

.card-item {
  margin-bottom: calc(var(--ui-scale, 1) * var(--density-scale, 1) * 2rem);
}

.card-item:last-child {
  margin-bottom: 0;
}
</style>
