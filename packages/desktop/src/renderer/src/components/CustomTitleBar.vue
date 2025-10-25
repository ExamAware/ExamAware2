<template>
  <div class="custom-title-bar">
    <t-button @click="minimizeWindow">_</t-button>
    <t-button @click="maximizeWindow">[]</t-button>
    <t-button @click="closeWindow">X</t-button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Button as TButton } from 'tdesign-vue-next'

const ipcRenderer = window.api.ipc

const minimizeWindow = () => {
  ipcRenderer.send('minimize-window')
}

const maximizeWindow = () => {
  ipcRenderer.send('maximize-window')
}

const closeWindow = () => {
  ipcRenderer.send('close-window')
}
</script>

<style scoped>
.custom-title-bar {
  display: flex;
  justify-content: flex-end;
}

.custom-title-bar t-button {
  margin-left: 10px;
}
</style>
