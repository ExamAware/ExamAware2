<template>
  <t-row class="mainpage-grid">
    <t-col :span="5">
      <div class="main-button-wrapper">
        <div class="main-button-grid">
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
    </t-col>
    <t-col :span="1" style="height: 100%">
      <t-divider layout="vertical" style="height: 95%" />
    </t-col>
    <t-col :span="6" style="height: 99%">
      <h1>扫描二维码</h1>
      <!-- 右侧二维码扫描 -->

      <p>Coming S∞n.</p>

      <t-alert :close="true" theme="error">
        ExamAware2 是开源免费的软件，官方没有提供任何形式的付费支持服务，
        源代码仓库地址在https://github.com/ExamAware/。
        如果您通过有偿协助等付费方式取得本应用，在遇到问题时请在与卖家约定的服务框架下，优先向卖家求助。
        如果卖家没有提供您预期的服务，请退款或通过其它形式积极维护您的合法权益。
      </t-alert>

      <div class="qrcode-container"></div>
      <t-drawer v-model:visible="visible" header="选择摄像头" :close-btn="true">
        <t-select v-model="selectedConstraints" placeholder="请选择摄像头" clearable>
          <t-option
            v-for="option in constraintOptions"
            :key="option.label"
            :value="option.constraints"
            :label="option.label"
          ></t-option>
        </t-select>
        <qrcode-stream
          @decode="onDecodeQR"
          @init="onInitQR"
          @camera-on="onCameraReady"
          :constraints="selectedConstraints"
        ></qrcode-stream>
        <template #footer>
          <template></template>
        </template>
      </t-drawer>
      <t-button shape="circle" theme="primary" @click="handleClickDrawerBtn" id="openDrawerBtn">
        <template #icon><SettingIcon /></template>
      </t-button>
    </t-col>
  </t-row>
</template>

<script setup lang="jsx">
import { ref, watch } from 'vue'
import { EditIcon, PlayCircleIcon, LinkIcon, ServerIcon, SettingIcon } from 'tdesign-icons-vue-next'
import { QrcodeStream } from 'vue-qrcode-reader'
import { MessagePlugin } from 'tdesign-vue-next'
import { useRouter } from 'vue-router'

const router = useRouter()

const onDecodeQR = (result) => {
  console.log('二维码内容:', result)
  // 在这里调用你的回调函数
}

const onInitQR = (promise) => {
  promise.catch((error) => {
    if (error.name === 'NotAllowedError') {
      alert('没有摄像头权限')
    } else if (error.name === 'NotFoundError') {
      alert('没有找到摄像头')
    } else {
      alert('摄像头初始化失败')
    }
  })
}

const selectedConstraints = ref({})
const constraintOptions = ref([])
let isFirstLoad = true

const onCameraReady = async () => {
  const devices = await navigator.mediaDevices.enumerateDevices()
  const videoDevices = devices.filter(({ kind }) => kind === 'videoinput')

  constraintOptions.value = videoDevices.map(({ deviceId, label }) => ({
    label: label || `摄像头 (ID: ${deviceId})`,
    constraints: { deviceId }
  }))

  if (isFirstLoad && constraintOptions.value.length > 0) {
    selectedConstraints.value = constraintOptions.value[0].constraints
    isFirstLoad = false
  }
}

watch(constraintOptions, (newOptions) => {
  if (isFirstLoad && newOptions.length > 0 && !selectedConstraints.value.deviceId) {
    selectedConstraints.value = newOptions[0].constraints
    isFirstLoad = false
  }
})

const visible = ref(false)

const handleClickDrawerBtn = () => {
  visible.value = true
}

const handleEditor = () => {
  window.api.ipc.send('open-editor-window')
}
</script>

<style scoped>
.mainpage-grid,
t-col {
  height: 100%;
}

.main-button-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.main-button-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  column-gap: 25px; /* 左右按钮间距 */
  row-gap: 10px; /* 上下按钮间距 */
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

#openDrawerBtn {
  position: absolute;
  bottom: 20px;
  right: 8px;
}
</style>
