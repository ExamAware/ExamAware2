<template>
  <div class="plugin-view">
    <h2>放映器</h2>
    <p>选择一个 ExamAware 2 档案文件以开始放映。</p>
    <t-row :gutter="25">
      <t-col :span="4">
        <t-card class="card-button" @click="selectFile">
          <div class="card-content">
            <t-icon name="file" size="60px" class="card-button-icon"></t-icon>
            <p>本地文件</p>
          </div>
        </t-card>
      </t-col>
      <t-col :span="8">
        <t-card class="card-button" @click="openUrl">
          <div class="card-content">
            <t-icon name="code" size="60px" class="card-button-icon"></t-icon>
            <p>更多打开方式正在开发中</p>
          </div>
        </t-card>
      </t-col>
      <!-- <t-col :span="4">
        <t-card class="card-button" @click="openUrl">
          <div class="card-content">
            <t-icon name="link" size="60px" class="card-button-icon"></t-icon>
            <p>URL</p>
          </div>
        </t-card>
      </t-col>
      <t-col :span="4">
        <t-card class="card-button" @click="selectFile">
          <div class="card-content">
            <t-icon name="server" size="60px" class="card-button-icon"></t-icon>
            <p>连接服务器</p>
          </div>
        </t-card>
      </t-col> -->
    </t-row>
  </div>
</template>

<script setup lang="ts">
import { createPlayerLauncher } from '@renderer/services/playerLauncher'

const launcher = createPlayerLauncher()

const selectFile = async () => {
  await launcher.selectLocalAndOpen()
}

const openUrl = () => {
  console.log('打开 URL')
}
</script>

<style scoped>
.plugin-view {
  padding: 20px;
  height: 100%;
}

h2,
p {
  user-select: none;
}

.card-button {
  cursor: pointer;
  text-align: center;
  padding: 20px;
  margin-bottom: 10px;
}

.card-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.card-content t-icon {
  margin-bottom: 10px;
}

.card-content p {
  margin: 0;
}

.card-button-icon {
  padding-bottom: 15px;
}
</style>
