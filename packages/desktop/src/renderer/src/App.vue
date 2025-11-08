<script setup lang="ts">
import { RouterView } from 'vue-router'
import WindowFrame from '@renderer/components/WindowFrame.vue'
</script>

<template>
  <t-config-provider>
    <div class="ea_app">
      <WindowFrame>
        <RouterView />
      </WindowFrame>
    </div>
  </t-config-provider>

</template>
