<template>
  <header class="console-page-header">
    <div class="console-page-header__copy">
      <div class="console-page-header__title-row">
        <h1>{{ title }}</h1>
        <slot name="status" />
      </div>
      <p v-if="description">{{ description }}</p>
      <slot name="meta" />
    </div>
    <div v-if="$slots.actions" class="console-page-header__actions">
      <slot name="actions" />
    </div>
  </header>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  description?: string;
}>();
</script>

<style scoped lang="less">
.console-page-header {
  min-width: 0;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: var(--td-comp-margin-xxl);
  padding: 4px 0;

  &__copy {
    min-width: 0;
  }

  &__title-row {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: var(--td-comp-margin-s);

    h1 {
      color: var(--td-text-color-primary);
      font: var(--td-font-headline-medium);
      line-height: 1.25;
    }
  }

  p {
    max-width: 760px;
    margin-top: var(--td-comp-margin-xs);
    color: var(--td-text-color-secondary);
    font: var(--td-font-body-medium);
  }

  &__actions {
    flex: none;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
}

@media (max-width: 800px) {
  .console-page-header {
    align-items: flex-start;
    flex-direction: column;
    gap: var(--td-comp-margin-l);

    &__actions {
      width: 100%;
      justify-content: flex-start;
    }
  }
}
</style>
