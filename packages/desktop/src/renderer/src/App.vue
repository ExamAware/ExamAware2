<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <t-config-provider>
    <div class="ea_app">
      <RouterView />
    </div>
  </t-config-provider>
</template>
