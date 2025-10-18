<template>
  <div class="mainpage">
    <div class="main-button-row">
      <div class="main-button-container">
        <t-button class="main-button" theme="success" @click="handleEditor">
          <EditIcon size="50px" />
        </t-button>
        <p class="button-description">编辑器</p>
      </div>
      <div class="main-button-container">
        <t-button class="main-button" theme="warning" @click="router.push('/playerhome')">
          <PlayCircleIcon size="50px" />
        </t-button>
        <p class="button-description">放映器</p>
      </div>
      <div class="main-button-container">
        <t-button class="main-button">
          <LinkIcon size="50px" />
        </t-button>
        <p class="button-description">从 URL 放映</p>
      </div>
      <div class="main-button-container">
        <t-button class="main-button">
          <ServerIcon size="50px" />
        </t-button>
        <p class="button-description">集控</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="jsx">
import { EditIcon, PlayCircleIcon, LinkIcon, ServerIcon } from 'tdesign-icons-vue-next'
import { useRouter } from 'vue-router'

const router = useRouter()

const handleEditor = () => {
  window.api.ipc.send('open-editor-window')
}
</script>

<style scoped>
.mainpage {
  height: 100%;
}

.main-button-row {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 36px; /* 四个按钮水平间距 */
}

.main-button-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.main-button {
  width: 80px;
  height: 80px;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
}

.button-description {
  margin-top: 10px;
  font-size: 16px;
  text-align: center;
}
</style>
