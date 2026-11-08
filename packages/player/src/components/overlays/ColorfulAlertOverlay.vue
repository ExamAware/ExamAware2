<template>
  <transition name="fade-soft">
    <div
      v-if="visible"
      class="overlay colorful-overlay"
      :class="{ 'hdr-highlight': hdrHighlight }"
      :style="overlayStyle"
    >
      <div class="colorful-copy">
        <div class="colorful-title">{{ title }}</div>
        <div v-if="message" class="colorful-message">{{ message }}</div>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
defineProps<{
  visible: boolean;
  title: string;
  message: string;
  overlayStyle: Record<string, string>;
  hdrHighlight: boolean;
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

.colorful-overlay {
  padding: clamp(24px, 4vw, 72px);
  overflow: auto;
  background: var(--colorful-bg, #ff3b30);
  background: color-mix(in srgb, var(--colorful-bg, #ff3b30) 88%, transparent);
  backdrop-filter: blur(2px);
}
.colorful-copy {
  width: min(94vw, 1800px);
  text-align: center;
}
.colorful-title {
  color: var(--colorful-text, #fff);
  font-size: clamp(4rem, calc(var(--ui-scale, 1) * 8vw), 10rem);
  font-weight: 800;
  line-height: 1.05;
  letter-spacing: 0.03em;
  overflow-wrap: anywhere;
  text-shadow: var(--colorful-shadow, 0 6px 24px rgba(0, 0, 0, 0.35));
}
.colorful-message {
  margin-top: clamp(24px, 4vh, 64px);
  color: var(--colorful-text, #fff);
  font-size: clamp(2.5rem, calc(var(--ui-scale, 1) * 4.5vw), 5.5rem);
  font-weight: 650;
  line-height: 1.2;
  overflow-wrap: anywhere;
  white-space: pre-wrap;
  text-shadow: var(--colorful-shadow, 0 6px 24px rgba(0, 0, 0, 0.35));
}

@media (dynamic-range: high) {
  .colorful-overlay.hdr-highlight :is(.colorful-title, .colorful-message) {
    color: color(display-p3 1 1 1);
  }
}
</style>
