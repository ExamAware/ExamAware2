<template>
  <t-tag :theme="CONTROL_STATUS_THEMES[state]" variant="light">{{
    CONTROL_STATUS_LABELS[state]
  }}</t-tag>
</template>

<script setup lang="ts">
import type { ControlStatusState } from '@dsz-examaware/plugin-sdk'
import { CONTROL_STATUS_LABELS, CONTROL_STATUS_THEMES } from '@renderer/composables/useControlAgent'

defineProps<{ state: ControlStatusState }>()
</script>
