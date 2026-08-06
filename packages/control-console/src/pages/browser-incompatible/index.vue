<template>
  <Result title="浏览器不兼容" tip="抱歉，您正在使用的浏览器版本过低，无法打开当前网页。">
    <div class="result-slot-container">
      <t-button class="result-button" @click="router.push('/')">回到首页</t-button>
      <div class="recommend-container">
        <div>推荐使用以下主流浏览器，点击图标可跳转下载</div>
        <div class="recommend-browser">
          <div @click="router.push('https://www.google.cn/chrome/')">
            <img
              class="browser-icon"
              src="https://tdesign.gtimg.com/starter/result-page/chorme.png"
              alt="Chrome"
            />
            <div>Chrome</div>
          </div>
        </div>
      </div>
    </div>
  </Result>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import Result from '@/components/result/index.vue';

const router = useRouter();
</script>

<style scoped lang="less">
.result-slot-container {
  position: relative;
  height: 80vh;
  max-height: 240px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  color: var(--td-text-color-secondary);
}

.recommend-container {
  width: 640px;
  padding: var(--td-comp-paddingTB-xl) var(--td-comp-paddingLR-xxl);
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: var(--td-radius-medium);
  background: var(--td-bg-color-container);
  box-shadow: 0 1px 2px rgb(0 0 0 / 10%);
}

.recommend-browser {
  display: flex;

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }

  > div + div {
    margin-left: var(--td-comp-margin-xxxl);
  }
}

.browser-icon {
  width: var(--td-comp-size-xl);
  height: var(--td-comp-size-xl);
  margin-bottom: var(--td-comp-margin-s);
}

@media (max-width: 720px) {
  .recommend-container {
    width: calc(100vw - 32px);
    gap: var(--td-comp-margin-l);
  }
}
</style>
