<template>
  <div class="bind-control-wizard">
    <h2>绑定学校集控</h2>
    <t-steps v-model:current="currentStep" layout="horizontal" readonly>
      <t-step-item title="服务器地址" />
      <t-step-item title="绑定码" />
      <t-step-item title="完成绑定" />
    </t-steps>

    <div class="wizard-content">
      <section v-if="currentStep === 0">
        <h3>连接集控服务器</h3>
        <p class="step-description">填写集控服务端地址，如 http://127.0.0.1:3100</p>
        <t-form ref="serverForm" :data="form" :rules="serverRules" label-align="top">
          <t-form-item label="服务器地址" name="serverUrl">
            <t-input v-model="form.serverUrl" placeholder="https://control.example.edu" autofocus />
          </t-form-item>
        </t-form>
        <div class="wizard-actions">
          <t-button theme="primary" @click="goToEnrollmentCode">下一步</t-button>
        </div>
      </section>

      <section v-else-if="currentStep === 1">
        <h3>输入设备绑定码</h3>
        <p class="step-description">在集控控制台的设备注册页面生成 EA2- 开头的绑定码</p>
        <t-form ref="codeForm" :data="form" :rules="codeRules" label-align="top">
          <t-form-item label="绑定码" name="enrollmentCode">
            <t-input
              v-model="form.enrollmentCode"
              placeholder="EA2-..."
              autocomplete="off"
              autofocus
            />
          </t-form-item>
        </t-form>
        <div class="wizard-actions">
          <t-button variant="outline" @click="currentStep = 0">上一步</t-button>
          <t-button theme="primary" @click="submitBinding">绑定</t-button>
        </div>
      </section>

      <section v-else>
        <t-loading :loading="submitting" text="正在绑定学校集控…" show-overlay>
          <div v-if="submitting" class="result-placeholder"></div>
          <div v-else-if="result" class="binding-result">
            <t-alert theme="success" title="绑定成功" message="设备凭据已安全保存到本机。" />
            <div class="binding-result-details">
              <div>
                <span>连接状态</span>
                <ControlStatusTag :state="result.state" />
              </div>
              <div>
                <span>设备 ID</span>
                <code>{{ result.deviceId ?? '等待服务器分配' }}</code>
              </div>
            </div>
            <t-space>
              <t-button theme="primary" @click="finishWizard">完成</t-button>
              <t-button variant="outline" @click="resetWizard">重新绑定</t-button>
            </t-space>
          </div>
          <template v-else>
            <t-alert theme="error" title="绑定失败" :message="errorMessage" />
            <div class="wizard-actions">
              <t-button variant="outline" @click="currentStep = 0">返回修改</t-button>
              <t-button theme="primary" @click="submitBinding">重试</t-button>
            </div>
          </template>
        </t-loading>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import type { FormRule } from 'tdesign-vue-next'
import type { ControlStatusSnapshot } from '@dsz-examaware/plugin-sdk'
import ControlStatusTag from '@renderer/components/ControlStatusTag.vue'
import { useControlAgent } from '@renderer/composables/useControlAgent'

const control = useControlAgent()
const currentStep = ref(0)
const submitting = ref(false)
const result = ref<ControlStatusSnapshot | null>(null)
const errorMessage = ref('')
const serverForm = ref()
const codeForm = ref()
const form = reactive({
  serverUrl: '',
  enrollmentCode: ''
})

const serverRules: Record<string, FormRule[]> = {
  serverUrl: [
    { required: true, message: '请输入集控服务器地址' },
    { pattern: /^https?:\/\/.+/, message: '服务器地址必须以 http:// 或 https:// 开头' }
  ]
}
const codeRules: Record<string, FormRule[]> = {
  enrollmentCode: [
    { required: true, message: '请输入设备绑定码' },
    { pattern: /^EA2-.+/, message: '绑定码必须以 EA2- 开头' }
  ]
}

const goToEnrollmentCode = async () => {
  const validation = await serverForm.value?.validate()
  if (validation === true) currentStep.value = 1
}

const submitBinding = async () => {
  if (submitting.value) return
  if (currentStep.value === 1) {
    const validation = await codeForm.value?.validate()
    if (validation !== true) return
  }
  currentStep.value = 2
  submitting.value = true
  result.value = null
  errorMessage.value = ''
  try {
    result.value = await control.bind({
      serverUrl: form.serverUrl.trim(),
      enrollmentCode: form.enrollmentCode.trim()
    })
  } catch (error) {
    const code = (error as { code?: string })?.code
    const message = error instanceof Error ? error.message : String(error)
    errorMessage.value =
      code === 'device_protocol_version_unsupported' ||
      message.includes('device_protocol_version_unsupported')
        ? '集控服务端协议版本与客户端不兼容，请升级客户端或服务端后重试。'
        : message || '无法绑定学校集控'
  } finally {
    submitting.value = false
  }
}

const resetWizard = () => {
  currentStep.value = 0
  result.value = null
  errorMessage.value = ''
  form.enrollmentCode = ''
}
const finishWizard = () => window.api.windows.closeCurrent()
</script>

<style scoped>
.bind-control-wizard {
  box-sizing: border-box;
  min-height: 100vh;
  padding: 56px 40px 32px;
}

.bind-control-wizard h2 {
  margin: 0 0 28px;
}

.wizard-content {
  margin-top: 36px;
}

.step-description {
  margin: 8px 0 24px;
  color: var(--td-text-color-secondary);
}

.wizard-actions {
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  margin-top: 28px;
}

.result-placeholder {
  min-height: 320px;
}

.binding-result-details {
  display: grid;
  gap: 12px;
  margin: 0 auto 24px;
  text-align: left;
}

.binding-result-details > div {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
}

.binding-result-details code {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  overflow-wrap: anywhere;
}
</style>
