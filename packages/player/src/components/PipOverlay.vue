<template>
  <Teleport to="body">
    <div
      v-if="visible"
      ref="pipRef"
      class="pip-overlay"
      :style="pipStyle"
      @mousedown="startDrag"
    >
      <div class="pip-content">
        <div v-if="showRemainingTime" class="pip-time">{{ remainingTimeText }}</div>
        <div v-if="showCurrentTime" class="pip-time pip-current">{{ currentTimeText }}</div>
      </div>
      <button class="pip-close" @click.stop="emit('close')">
        <CloseIcon />
      </button>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, watch } from 'vue';
import { CloseIcon } from 'tdesign-icons-vue-next';

const props = defineProps<{
  visible: boolean;
  remainingTime?: string;
  currentTime?: string;
  showRemainingTime?: boolean;
  showCurrentTime?: boolean;
}>();

const emit = defineEmits<{
  (e: 'close'): void;
}>();

const pipRef = ref<HTMLElement | null>(null);

const pos = ref({ x: 20, y: 20 });
const isDragging = ref(false);
const dragOffset = ref({ x: 0, y: 0 });

const pipStyle = computed(() => ({
  left: `${pos.value.x}px`,
  top: `${pos.value.y}px`
}));

const remainingTimeText = computed(() => props.remainingTime || '00:00');
const currentTimeText = computed(() => props.currentTime || '');

const startDrag = (e: MouseEvent) => {
  if ((e.target as HTMLElement).closest('.pip-close')) return;
  isDragging.value = true;
  dragOffset.value = {
    x: e.clientX - pos.value.x,
    y: e.clientY - pos.value.y
  };
};

const onMouseMove = (e: MouseEvent) => {
  if (!isDragging.value) return;
  const maxX = window.innerWidth - (pipRef.value?.offsetWidth || 180);
  const maxY = window.innerHeight - (pipRef.value?.offsetHeight || 80);
  pos.value.x = Math.max(0, Math.min(maxX, e.clientX - dragOffset.value.x));
  pos.value.y = Math.max(0, Math.min(maxY, e.clientY - dragOffset.value.y));
};

const onMouseUp = () => {
  isDragging.value = false;
};

onMounted(() => {
  window.addEventListener('mousemove', onMouseMove);
  window.addEventListener('mouseup', onMouseUp);
});

onUnmounted(() => {
  window.removeEventListener('mousemove', onMouseMove);
  window.removeEventListener('mouseup', onMouseUp);
});
</script>

<style scoped>
.pip-overlay {
  position: fixed;
  z-index: 9999;
  background: rgba(4, 14, 21, 0.92);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 16px;
  padding: 12px 16px;
  cursor: grab;
  user-select: none;
  backdrop-filter: blur(8px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
  min-width: 140px;
}

.pip-overlay:active {
  cursor: grabbing;
}

.pip-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
}

.pip-time {
  color: #fff;
  font-family: 'TCloudNumber', 'MiSans', monospace;
  font-size: 28px;
  font-weight: 600;
  line-height: 1.2;
  text-shadow: 0 2px 8px rgba(255, 255, 255, 0.2);
}

.pip-current {
  font-size: 18px;
  color: rgba(255, 255, 255, 0.7);
}

.pip-close {
  position: absolute;
  top: -8px;
  right: -8px;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  border: none;
  background: rgba(255, 59, 48, 0.9);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 12px;
  opacity: 0;
  transition: opacity 0.2s ease;
  padding: 0;
}

.pip-overlay:hover .pip-close {
  opacity: 1;
}
</style>
