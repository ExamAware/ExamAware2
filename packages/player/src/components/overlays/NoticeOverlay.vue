<template>
  <transition name="fade-soft">
    <div v-if="notice" class="overlay notice-overlay">
      <div class="notice-message">
        <div class="notice-content" v-html="html"></div>
        <t-button theme="default" variant="outline" size="large" @click="emit('close')">
          关闭（{{ notice.remainingSec }}s）
        </t-button>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { Button as TButton } from 'tdesign-vue-next';

defineProps<{
  notice: { remainingSec: number } | null;
  html: string;
}>();

const emit = defineEmits<{
  (e: 'close'): void;
}>();
</script>

<style scoped>
.overlay {
  position: fixed;
  inset: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
}

.fade-soft-enter-active,
.fade-soft-leave-active {
  transition:
    opacity 320ms ease,
    transform 320ms ease;
}
.fade-soft-enter-from,
.fade-soft-leave-to {
  opacity: 0;
  transform: scale(1.02);
}

.notice-overlay {
  padding: clamp(24px, 4vw, 72px);
  overflow: auto;
  background: rgba(0, 0, 0, 0.76);
  backdrop-filter: blur(2px);
}
.notice-message {
  width: min(94vw, 1800px);
  color: #fff;
  text-align: center;
}
.notice-content :is(h1, h2, h3) {
  margin: 0 0 clamp(24px, 4vh, 64px);
  font-size: clamp(4rem, calc(var(--ui-scale, 1) * 8vw), 10rem);
  font-weight: 800;
  line-height: 1.05;
  letter-spacing: 0.03em;
  overflow-wrap: anywhere;
}
.notice-content :is(p, li) {
  margin: 0;
  font-size: clamp(2.5rem, calc(var(--ui-scale, 1) * 4.5vw), 5.5rem);
  font-weight: 650;
  line-height: 1.2;
  overflow-wrap: anywhere;
}
.notice-content :is(ul, ol) {
  display: inline-block;
  margin: 0;
  padding-left: 1.2em;
  text-align: left;
}
.notice-message :deep(.t-button) {
  margin-top: clamp(28px, 5vh, 72px);
}
</style>
