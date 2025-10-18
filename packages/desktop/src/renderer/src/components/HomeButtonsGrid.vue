<template>
  <div class="home-buttons-grid">
    <div class="pagination-container">
      <div
        class="buttons-page"
        v-for="(page, pageIndex) in pages"
        :key="pageIndex"
        :class="{ active: currentPage === pageIndex }"
      >
        <div class="buttons-row" v-for="(row, rowIndex) in page" :key="rowIndex">
          <div
            class="button-container"
            v-for="button in row"
            :key="button.id"
          >
            <t-button
              class="home-button"
              :theme="button.theme"
              @click="handleButtonClick(button)"
            >
              <t-icon :name="button.icon" size="50px" />
            </t-button>
            <p class="button-description">{{ button.label }}</p>
          </div>
          <div
            class="button-container placeholder"
            v-for="i in (4 - row.length)"
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
import { computed, ref } from 'vue'
import { useHomeButtonsList } from '@renderer/composables/useHomeButtons'
import type { HomeButtonMeta } from '@renderer/app/modules/homeButtons'

const { list } = useHomeButtonsList()
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
      if (rowButtons.length > 0) {
        rows.push(rowButtons)
      }
    }

    result.push(rows)
  }

  return result
})

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
  transform: translateX(100%);
  transition: all 0.3s ease-in-out;
}

.buttons-page.active {
  opacity: 1;
  transform: translateX(0);
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
