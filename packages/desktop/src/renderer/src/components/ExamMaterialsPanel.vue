<template>
  <div class="exam-materials-panel">
    <div class="panel-header">
      <!-- <p>考试中将会用到的材料</p> -->
      <t-button size="small" variant="outline" @click="addMaterial">
        <template #icon>
          <t-icon name="add" />
        </template>
        添加
      </t-button>
    </div>

    <div class="materials-list" v-if="materials.length > 0">
      <div v-for="(material, index) in materials" :key="index" class="material-item">
        <t-input
          v-model="material.name"
          placeholder="材料名称"
          @blur="updateMaterial"
          size="small"
        />
        <t-input-number
          v-model="material.quantity"
          :min="0"
          placeholder="数量"
          @blur="updateMaterial"
          size="small"
          style="width: 80px"
        />
        <t-input
          v-model="material.unit"
          placeholder="单位"
          @blur="updateMaterial"
          size="small"
          style="width: 60px"
        />
        <t-button size="small" theme="danger" variant="text" @click="removeMaterial(index)">
          <t-icon name="delete" />
        </t-button>
      </div>
    </div>

    <div v-else class="empty-hint">
      <span class="hint-text">暂无材料，点击"添加"按钮添加</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import type { ExamMaterial } from '@renderer/core/configTypes'

// Props
interface Props {
  modelValue?: ExamMaterial[]
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: () => []
})

// Emits
const emit = defineEmits<{
  'update:modelValue': [value: ExamMaterial[]]
}>()

// 本地材料数据
const materials = ref<ExamMaterial[]>([])

// 监听 props 变化
watch(
  () => props.modelValue,
  (newValue) => {
    materials.value = newValue ? [...newValue] : []
  },
  { immediate: true, deep: true }
)

// 添加材料
const addMaterial = () => {
  const newMaterial: ExamMaterial = {
    name: '',
    quantity: 1,
    unit: '张'
  }
  materials.value.push(newMaterial)
  emitUpdate()
}

// 移除材料
const removeMaterial = (index: number) => {
  materials.value.splice(index, 1)
  emitUpdate()
}

// 更新材料
const updateMaterial = () => {
  emitUpdate()
}

// 发出更新事件
const emitUpdate = () => {
  emit('update:modelValue', [...materials.value])
}
</script>

<style scoped>
.exam-materials-panel {
  padding: 8px 0;
}

.panel-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}

.panel-header h4 {
  margin: 0;
  font-size: 14px;
  font-weight: 500;
  color: var(--td-text-color-primary);
}

.materials-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.material-item {
  display: flex;
  gap: 8px;
  align-items: center;
}

.empty-hint {
  text-align: center;
  padding: 16px;
}

.hint-text {
  color: var(--td-text-color-placeholder);
  font-size: 12px;
}
</style>
