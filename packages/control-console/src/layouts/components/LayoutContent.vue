<template>
  <t-layout :class="`${prefix}-layout`">
    <t-content :class="`${prefix}-content-layout`">
      <t-breadcrumb v-if="settingStore.showBreadcrumb" class="layout-breadcrumb">
        <t-breadcrumb-item to="/dashboard/base">集控中心</t-breadcrumb-item>
        <t-breadcrumb-item>{{ route.meta.title }}</t-breadcrumb-item>
      </t-breadcrumb>
      <router-view />
    </t-content>
  </t-layout>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { prefix } from '@/config/global';
import { useSettingStore } from '@/store';

const route = useRoute();
const settingStore = useSettingStore();
</script>
