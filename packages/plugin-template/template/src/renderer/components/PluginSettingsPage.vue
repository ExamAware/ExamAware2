<template>
  <p>插件设置页面</p>
</template>

<script setup lang="ts">
import type { PluginRuntimeContext } from '@dsz-examaware/plugin-sdk';

const props = defineProps<{ ctx: PluginRuntimeContext }>();
</script>
