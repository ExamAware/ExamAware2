<template>
  <section>
    <h2>插件设置页面</h2>
    <p>{{ message }}</p>
    <button type="button" @click="increment">点击次数：{{ clicks }}</button>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { RendererPluginContext } from '@dsz-examaware/plugin-sdk';
import type { DemoSettings } from '../../shared/contracts';

const props = defineProps<{ ctx: RendererPluginContext<DemoSettings> }>();
const settings = props.ctx.api.settings.get();
const clicks = ref(settings.demo?.clicks ?? 0);
const message = ref(settings.demo?.message ?? 'Hello from ExamAware Demo Plugin');

const increment = async () => {
  clicks.value += 1;
  await props.ctx.api.settings.patch({ demo: { clicks: clicks.value } });
};
</script>
