<template>
  <div class="bind-control-wizard">
    <component :is="bindingView.component" v-if="bindingView" class="plugin-binding-view" />
    <template v-else>
      <window-frame title="绑定学校集控" />
      <div class="wizard-content">
        <t-steps v-model:current="currentStep" readonly>
          <t-step-item title="服务器" />
          <t-step-item title="绑定码" />
          <t-step-item title="完成" />
        </t-steps>

        <t-form v-if="currentStep === 0" ref="serverForm" :data="form" :rules="serverRules">
          <t-form-item label="服务器地址" name="serverUrl">
            <t-input v-model="form.serverUrl" placeholder="https://control.example.edu" autofocus />
          </t-form-item>
          <div class="wizard-actions">
            <t-button theme="primary" @click="goToEnrollmentCode">下一步</t-button>
          </div>
        </t-form>

        <t-form v-else-if="currentStep === 1" ref="codeForm" :data="form" :rules="codeRules">
          <t-form-item label="设备绑定码" name="enrollmentCode">
            <t-input v-model="form.enrollmentCode" placeholder="EA2-XXXX-XXXX" autofocus />
          </t-form-item>
          <div class="wizard-actions">
            <t-button variant="outline" @click="currentStep = 0">上一步</t-button>
            <t-button theme="primary" :loading="submitting" @click="submitBinding">绑定</t-button>
          </div>
        </t-form>

        <div v-else class="result-panel">
          <t-loading v-if="submitting" text="正在连接集控服务器" />
          <t-alert v-else-if="errorMessage" theme="error" :message="errorMessage" />
          <template v-else-if="result">
            <control-status-tag :state="result.state" />
            <p>设备已完成绑定。</p>
          </template>
          <div class="wizard-actions">
            <t-button v-if="errorMessage" variant="outline" @click="resetWizard">重试</t-button>
            <t-button v-else-if="result" theme="primary" @click="finishWizard">完成</t-button>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { computed, reactive, ref } from 'vue'
import type { FormRule } from 'tdesign-vue-next'
import type { ControlStatusSnapshot } from '@dsz-examaware/plugin-sdk'
import ControlStatusTag from '@renderer/components/ControlStatusTag.vue'
import { useControlAgent } from '@renderer/composables/useControlAgent'
import { controlBindingContributions } from '@renderer/runtime/pluginApi/contributions'

const control = useControlAgent()
const bindingView = computed(() => controlBindingContributions.items.value[0])
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
.plugin-binding-view {
  min-height: 100vh;
}
.bind-control-wizard {
  box-sizing: border-box;
  min-height: 100vh;
  padding: 56px 40px 32px;
}

.bind-control-wizard h2 {
  margin: 0 0 28px;
  color: var(--td-text-color-primary);
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
