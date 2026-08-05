<template>
  <main class="login-page">
    <section class="login-page__intro">
      <div>
        <span class="login-page__eyebrow">ExamAware 2 集控</span>
        <h1>每间考场，都尽在掌握。</h1>
        <p>欢迎使用ExamAware集控服务。</p>
      </div>
    </section>

    <section class="login-page__panel">
      <t-card class="login-card" :bordered="false">
        <h2>登录集控中心</h2>
        <p>使用学校管理员为你创建的账户。</p>
        <t-form :data="form" layout="vertical" @submit="submit">
          <t-form-item label="用户名" name="username">
            <t-input v-model="form.username" autocomplete="username" placeholder="请输入用户名" />
          </t-form-item>
          <t-form-item label="密码" name="password">
            <t-input v-model="form.password" type="password" autocomplete="current-password" />
          </t-form-item>
          <t-alert v-if="errorMessage" theme="error" :message="errorMessage" />
          <t-button block theme="primary" type="submit" :loading="submitting">登录</t-button>
        </t-form>
      </t-card>
    </section>
  </main>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { ApiError } from '@/api/http';
import { useSessionStore } from '@/store';

const route = useRoute();
const router = useRouter();
const session = useSessionStore();
const submitting = ref(false);
const errorMessage = ref('');
const form = reactive({ username: '', password: '' });

async function submit() {
  errorMessage.value = '';
  submitting.value = true;
  try {
    await session.signIn(form.username.trim(), form.password);
    const redirect = typeof route.query.redirect === 'string' ? route.query.redirect : '/overview';
    await router.replace(redirect);
  } catch (error) {
    errorMessage.value = error instanceof ApiError ? error.message : '登录失败，请稍后重试。';
  } finally {
    submitting.value = false;
  }
}
</script>

<style scoped lang="less">
.login-page {
  min-height: 100vh;
  display: grid;
  grid-template-columns: minmax(360px, 1.2fr) minmax(420px, 0.8fr);
  background: var(--td-bg-color-page);

  &__intro {
    padding: 10vw;
    display: flex;
    align-items: center;
    color: var(--td-text-color-anti);
    background:
      linear-gradient(145deg, rgba(0, 82, 217, 96%), rgba(0, 42, 124, 92%)), var(--td-brand-color);

    h1 {
      max-width: 720px;
      margin: var(--td-comp-margin-xl) 0;
      font-size: 40px;
      line-height: 1.25;
    }

    p {
      max-width: 620px;
      color: var(--td-font-white-2);
      font: var(--td-font-body-large);
    }
  }

  &__eyebrow {
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }

  &__panel {
    padding: var(--td-comp-paddingTB-xxl);
    display: grid;
    place-items: center;
  }
}

.login-card {
  width: min(420px, calc(100vw - 48px));

  h2 {
    margin-bottom: var(--td-comp-margin-xs);
    font: var(--td-font-title-large);
  }

  > :deep(.t-card__body) > p {
    margin-bottom: var(--td-comp-margin-xxl);
    color: var(--td-text-color-secondary);
  }

  .t-alert,
  .t-button {
    margin-top: var(--td-comp-margin-l);
  }
}

@media (max-width: 800px) {
  .login-page {
    grid-template-columns: 1fr;

    &__intro {
      min-height: 260px;
      padding: 48px 24px;

      h1 {
        font-size: 28px;
      }
    }
  }
}
</style>
