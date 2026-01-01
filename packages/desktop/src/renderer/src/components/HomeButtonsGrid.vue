<template>
  <div class="home-buttons-grid">
    <div class="pagination-container">
      <div
        class="buttons-page"
        v-for="(page, pageIndex) in pages"
        :key="pageIndex"
        :style="pageStyle(pageIndex)"
      >
        <div class="buttons-row" v-for="(row, rowIndex) in page" :key="rowIndex">
          <div class="button-container" v-for="button in row" :key="button.id">
            <t-button class="home-button" :theme="button.theme" @click="handleButtonClick(button)">
              <t-icon :name="button.icon" size="50px" />
            </t-button>
            <p class="button-description">{{ button.label }}</p>
          </div>
          <div
            class="button-container placeholder"
            v-for="i in 4 - row.length"
            :key="`placeholder-${rowIndex}-${i}`"
          ></div>
        </div>
      </div>
    </div>

    <!-- 分页指示器 -->
    <div class="page-indicators" v-if="pages.length > 1">
      <t-button
        v-for="(_, index) in pages"
        :key="index"
        size="small"
        shape="circle"
        :theme="currentPage === index ? 'primary' : 'default'"
        @click="currentPage = index"
      >
        {{ index + 1 }}
      </t-button>
    </div>

    <!-- 左右滑动按钮 -->
    <div class="nav-buttons" v-if="pages.length > 1">
      <t-button
        class="nav-btn nav-prev"
        shape="circle"
        theme="default"
        :disabled="currentPage === 0"
        @click="prevPage"
      >
        <t-icon name="chevron-left" />
      </t-button>
      <t-button
        class="nav-btn nav-next"
        shape="circle"
        theme="default"
        :disabled="currentPage === pages.length - 1"
        @click="nextPage"
      >
        <t-icon name="chevron-right" />
      </t-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, onMounted, watch } from 'vue'
import { useHomeButtonsList } from '@renderer/composables/useHomeButtons'
import type { HomeButtonMeta } from '@renderer/app/modules/homeButtons'
import { useHomeButtons } from '@renderer/composables/useHomeButtons'

const registry = useHomeButtons()
const { list } = useHomeButtonsList(registry)
const currentPage = ref(0)

const pages = computed((): HomeButtonMeta[][][] => {
  const buttons = list()
  const buttonsPerPage = 8
  const pageCount = Math.ceil(buttons.length / buttonsPerPage)
  const result: HomeButtonMeta[][][] = []

  for (let i = 0; i < pageCount; i++) {
    const pageButtons = buttons.slice(i * buttonsPerPage, (i + 1) * buttonsPerPage)
    const rows: HomeButtonMeta[][] = []

    for (let j = 0; j < 2; j++) {
      const rowButtons = pageButtons.slice(j * 4, (j + 1) * 4)
      rows.push(rowButtons)
    }

    result.push(rows)
  }

  return result
})

const pageStyle = (pageIndex: number) => {
  const offset = (pageIndex - currentPage.value) * 100
  const isActive = pageIndex === currentPage.value
  return {
    transform: `translateX(${offset}%)`,
    opacity: isActive ? 1 : 0,
    zIndex: `${pages.value.length - Math.abs(pageIndex - currentPage.value)}`
  }
}

// Keep current page in range when items change
watch(
  () => pages.value.length,
  (len) => {
    if (currentPage.value > len - 1) {
      currentPage.value = Math.max(0, len - 1)
    }
  }
)

const handleButtonClick = async (button: HomeButtonMeta) => {
  try {
    await button.action()
  } catch (error) {
    console.error('Button action failed:', error)
  }
}

const prevPage = () => {
  if (currentPage.value > 0) {
    currentPage.value--
  }
}

const nextPage = () => {
  if (currentPage.value < pages.value.length - 1) {
    currentPage.value++
  }
}

// 动态注册“日志”主页按钮（如果未存在）
onMounted(() => {
  const exists = list().some((b) => b.id === 'logs')
  if (!exists) {
    registry.register({
      id: 'logs',
      label: '日志',
      icon: 'history',
      theme: 'default',
      order: 99,
      action: async () => {
        window.api?.ipc?.send('open-logs-window')
      }
    })
  }
})
</script>

<style scoped>
.home-buttons-grid {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 20px;
}

.pagination-container {
  position: relative;
  width: 100%;
  max-width: 520px;
  height: 300px;
  overflow: hidden;
  background: color-mix(in srgb, var(--td-bg-color-page) 35%, transparent);
  backdrop-filter: blur(16px);
  border-radius: 14px;
}

/* macOS main window: lighten overlays to expose glass */
.is-mac-main .home-buttons-grid {
  background: transparent;
}

.is-mac-main .pagination-container {
  background: color-mix(in srgb, var(--td-bg-color-page) 22%, transparent);
  backdrop-filter: blur(18px) saturate(1.1);
}
.buttons-page {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px; /* 减小行间距 */
  opacity: 0;
  transform: translateX(0);
  transition:
    transform 0.32s ease,
    opacity 0.32s ease;
}

.buttons-row {
  display: flex;
  justify-content: center;
  gap: 16px; /* 减小按钮间距 */
  width: 100%;
}

.button-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 100px; /* 减小最小宽度 */
  min-height: 130px; /* 保持单行页与双行页的行高一致 */
}

.button-container.placeholder {
  visibility: hidden;
}

.home-button {
  width: 72px; /* 减小按钮尺寸 */
  height: 72px;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 18px;
}

.button-description {
  margin-top: 8px; /* 减小文字间距 */
  font-size: 14px; /* 减小字体 */
  text-align: center;
  color: var(--td-text-color-primary);
  white-space: nowrap;
}

.page-indicators {
  margin-top: 24px; /* 减小上边距 */
  display: flex;
  gap: 8px;
}

.nav-buttons {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 -20px; /* 调整左右箭头位置 */
  pointer-events: none;
}

.nav-btn {
  pointer-events: auto;
}
</style>
