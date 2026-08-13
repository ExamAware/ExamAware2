<template>
  <t-dialog
    v-model:visible="visible"
    header="确认插件权限"
    theme="warning"
    placement="center"
    width="560px"
    :close-on-esc-keydown="false"
    :close-on-overlay-click="false"
    :confirm-btn="{ content: '允许并继续安装', theme: 'danger', disabled: !acknowledged }"
    cancel-btn="取消安装"
    @confirm="confirm"
    @cancel="cancel"
    @close="cancel"
  >
    <t-space direction="vertical" size="medium" style="width: 100%">
      <t-alert
        theme="warning"
        title="该插件请求高权限"
        message="这些权限可以改变应用设置、接管集控或管理其他插件。请确认插件来源可信。"
      />
      <div class="plugin-name">
        {{ request?.displayName || request?.name }}
        <span class="plugin-version">v{{ request?.version }}</span>
      </div>
      <t-list split>
        <t-list-item v-for="permission in request?.sensitivePermissions" :key="permission">
          <t-list-item-meta
            :title="permissionLabel(permission)"
            :description="permissionDescription(permission)"
          />
          <template #action>
            <t-tag theme="warning" variant="light">{{ permission }}</t-tag>
          </template>
        </t-list-item>
      </t-list>
      <t-checkbox v-model="acknowledged">
        我了解这些权限可能影响应用设置、集控连接及其他插件，并同意继续安装
      </t-checkbox>
    </t-space>
  </t-dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type {
  PluginInstallApproval,
  PluginInstallPermissionRequest
} from '../../../shared/types/plugins'

const PERMISSION_DETAILS: Record<string, { label: string; description: string }> = {
  'control.manage': { label: '管理内置集控', description: '绑定、解绑设备并调用内置集控操作。' },
  'control.replace': {
    label: '接管集控功能',
    description: '停用内置集控连接，并由插件提供集控状态、绑定和呼叫巡考。'
  },
  'control.policy': {
    label: '下发管理策略',
    description: '锁定应用设置，限制退出、解绑或插件安装。'
  },
  'app.settings.write': {
    label: '修改应用设置',
    description: '修改 ExamAware 的全局设置，而不仅是插件自己的设置。'
  },
  'app.quit': { label: '退出应用', description: '可以主动关闭 ExamAware。' },
  'network.websocket': {
    label: '建立 WebSocket 长连接',
    description: '可以与远程服务器持续双向通信。'
  },
  'network.tcp': { label: '建立 TCP 连接', description: '可以直接连接网络主机和端口。' },
  'network.udp': { label: '使用 UDP 网络', description: '可以发送和接收 UDP 数据报。' },
  'network.listen': { label: '监听本地端口', description: '可以在本机地址和端口接收网络数据。' },
  'plugins.manage': { label: '管理其他插件', description: '启用、禁用、重载或卸载其他插件。' },
  'plugins.install': { label: '安装插件', description: '从目录、插件包或注册表安装其他插件。' }
}

const visible = ref(false)
const acknowledged = ref(false)
const request = ref<PluginInstallPermissionRequest | null>(null)
let settle: ((approval: PluginInstallApproval | null) => void) | null = null

function requestApproval(
  input: PluginInstallPermissionRequest
): Promise<PluginInstallApproval | null> {
  if (!input.sensitivePermissions.length) {
    return Promise.resolve({
      name: input.name,
      version: input.version,
      sensitivePermissions: []
    })
  }
  if (settle) settle(null)
  request.value = input
  acknowledged.value = false
  visible.value = true
  const { promise, resolve } = Promise.withResolvers<PluginInstallApproval | null>()
  settle = resolve
  return promise
}

function confirm() {
  if (!acknowledged.value || !request.value) return
  const current = request.value
  finish({
    name: current.name,
    version: current.version,
    sensitivePermissions: [...current.sensitivePermissions]
  })
}

function cancel() {
  finish(null)
}

function finish(result: PluginInstallApproval | null) {
  visible.value = false
  request.value = null
  acknowledged.value = false
  const resolve = settle
  settle = null
  resolve?.(result)
}

function permissionLabel(permission: string) {
  return PERMISSION_DETAILS[permission]?.label ?? permission
}

function permissionDescription(permission: string) {
  return PERMISSION_DETAILS[permission]?.description ?? '该权限允许插件执行高影响操作。'
}

defineExpose({ requestApproval })
</script>

<style scoped>
.plugin-name {
  font-size: 16px;
  font-weight: 600;
  color: var(--td-text-color-primary);
}

.plugin-version {
  margin-left: 8px;
  font-size: 13px;
  font-weight: 400;
  color: var(--td-text-color-secondary);
}
</style>
