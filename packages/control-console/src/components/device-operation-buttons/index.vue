<template>
  <t-space v-if="canWrite" size="small">
    <t-tooltip content="分配设备组">
      <t-button
        aria-label="分配设备组"
        theme="default"
        shape="square"
        variant="text"
        @click="emit('assign', device)"
      >
        <ConsoleIcon name="folder-setting" />
      </t-button>
    </t-tooltip>
    <t-dropdown v-if="isAdmin" :options="options" trigger="click" @click="handleAction">
      <t-tooltip content="更多设备操作">
        <t-button aria-label="更多设备操作" theme="default" shape="square" variant="text">
          <ConsoleIcon name="ellipsis" />
        </t-button>
      </t-tooltip>
    </t-dropdown>
  </t-space>
</template>

<script setup lang="ts">
import type { DropdownProps } from 'tdesign-vue-next';
import { computed } from 'vue';
import type { DeviceView } from '@/api/control/types';

const props = defineProps<{
  device: DeviceView;
  canWrite: boolean;
  isAdmin: boolean;
}>();

const emit = defineEmits<{
  assign: [device: DeviceView];
  request: [action: 'rotate' | 'revoke' | 'delete', device: DeviceView];
}>();

const options = computed<NonNullable<DropdownProps['options']>>(() => {
  const revoked = props.device.lifecycleStatus === 'revoked';
  return [
    { content: '轮换凭证', value: 'rotate', disabled: revoked },
    { content: '吊销设备', value: 'revoke', theme: 'error', disabled: revoked, divider: true },
    { content: '删除设备', value: 'delete', theme: 'error', disabled: !revoked }
  ];
});

const handleAction: DropdownProps['onClick'] = (option) => {
  if (option.value !== 'rotate' && option.value !== 'revoke' && option.value !== 'delete') return;
  const revoked = props.device.lifecycleStatus === 'revoked';
  if ((option.value === 'rotate' || option.value === 'revoke') && revoked) return;
  if (option.value === 'delete' && !revoked) return;
  emit('request', option.value, props.device);
};
</script>
