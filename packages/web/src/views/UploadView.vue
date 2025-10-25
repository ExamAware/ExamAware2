<template>
  <div class="app-container">
    <div class="uploader">
      <t-button theme="primary" size="large" @click="triggerFile">选择考试档案(.ea2)</t-button>
      <input
        ref="fileInput"
        type="file"
        accept=".json,.ea2,application/json"
        class="hidden-input"
        @change="onFileChange"
      />
      <p class="tip">ExamAware2 知试 在线放映器</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const fileInput = ref<HTMLInputElement | null>(null)

const triggerFile = () => fileInput.value?.click()

const onFileChange = async (e: Event) => {
  const input = e.target as HTMLInputElement
  const file = input.files?.[0]
  if (!file) return
  try {
    const text = await file.text()
    const json = JSON.parse(text)
    if (!json.examName || !Array.isArray(json.examInfos)) {
      throw new Error('档案结构无效')
    }
    // 将配置存入 sessionStorage，便于无全局状态下在路由间传递
    sessionStorage.setItem('examaware:config', JSON.stringify(json))
    router.push('/player')
  } catch (err) {
    alert(`档案解析失败: ${(err as Error).message}`)
  } finally {
    if (fileInput.value) fileInput.value.value = ''
  }
}
</script>

<style scoped>
.app-container {
  min-height: 100vh;
  background: #0b1220;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
}
.uploader {
  text-align: center;
}
.hidden-input {
  display: none;
}
.tip {
  margin-top: 12px;
  color: rgba(255, 255, 255, 0.6);
}
</style>
