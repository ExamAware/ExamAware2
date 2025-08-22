<template>
  <div class="exam-room-number" @click="handleClick">
    <div class="room-number-display">{{ roomNumber }}</div>
  </div>
</template>

<script setup lang="ts">
export interface ExamRoomNumberProps {
  roomNumber?: string
}

withDefaults(defineProps<ExamRoomNumberProps>(), {
  roomNumber: '02',
})

const handleClick = () => {
  console.log('考场号被点击')
  // 这里可以添加编辑考场号的逻辑
}
</script>

<style scoped>
.exam-room-number {
  background: #040e15;
  border: calc(var(--ui-scale, 1) * 1px) solid #242f38;
  border-radius: calc(var(--ui-scale, 1) * 20px);
  padding: calc(var(--ui-scale, 1) * 10px) calc(var(--ui-scale, 1) * 20px);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  min-width: calc(var(--ui-scale, 1) * 80px);
  min-height: calc(var(--ui-scale, 1) * 60px);
}

.exam-room-number:hover {
  border-color: #3a4556;
  background: #051015;
}

.room-number-display {
  color: #ffffff;
  font-family: 'MiSans', sans-serif;
  font-size: calc(var(--ui-scale, 1) * 48px);
  font-weight: 500;
  line-height: 1;
  text-align: center;
  width: 100%;
}
</style>
