<template>
  <div class="settings-page plugin-baozhong-settings">
    <h2>宝中考试时钟</h2>
    <p class="intro">
      管理播放器主题背景。内置图片来自 ExamClock 与一卷图库；自定义图片会保存在插件设置中。
    </p>

    <t-card class="settings-section" :bordered="false">
      <div class="section-head">
        <h3>封面文案</h3>
      </div>
      <label class="origin-field">
        <span>Chart</span>
        <t-input
          v-model="coverOriginDraft"
          :maxlength="60"
          style="width: min(320px, 100%)"
          @change="saveCoverOrigin"
        />
      </label>
    </t-card>

    <t-card class="settings-section" :bordered="false">
      <div class="section-head">
        <h3>当前背景</h3>
        <span class="current-name">{{ currentBackground.name }}</span>
      </div>
      <div
        class="current-preview"
        :style="{ backgroundImage: `url('${currentBackground.url}')` }"
      ></div>
      <p class="meta">{{ backgroundCredit(currentBackground) }}</p>
    </t-card>

    <t-card class="settings-section" :bordered="false">
      <div class="section-head">
        <h3>内置背景</h3>
        <span class="meta">{{ builtinBackgrounds.length }} 张</span>
      </div>
      <div class="background-grid">
        <t-card
          v-for="item in builtinBackgrounds"
          :key="item.id"
          class="background-card"
          :class="{ selected: item.id === selectedId }"
          :bordered="false"
          role="button"
          tabindex="0"
          @click="selectBackground(item.id)"
          @keydown.enter.prevent="selectBackground(item.id)"
          @keydown.space.prevent="selectBackground(item.id)"
        >
          <span class="thumb" :style="{ backgroundImage: `url('${item.url}')` }"></span>
          <span class="card-title">{{ item.name }}</span>
          <span class="card-meta">{{ backgroundCredit(item) }}</span>
        </t-card>
      </div>
    </t-card>

    <t-card class="settings-section" :bordered="false">
      <div class="section-head">
        <h3>自定义背景</h3>
        <t-button size="small" variant="outline" theme="primary" :disabled="busy" @click="pickFile">
          {{ busy ? '处理中…' : '添加图片' }}
        </t-button>
        <input
          ref="fileInput"
          class="file-input"
          type="file"
          accept="image/*"
          @change="handleFileChange"
        />
      </div>
      <p class="meta">建议使用横向图片，最大边会压缩到 2560px，保存为 JPEG。</p>
      <div v-if="customBackgrounds.length" class="background-grid">
        <t-card
          v-for="item in customBackgrounds"
          :key="item.id"
          class="background-card custom-card"
          :class="{ selected: item.id === selectedId }"
          :bordered="false"
          role="button"
          tabindex="0"
          @click="selectBackground(item.id)"
          @keydown.enter.prevent="selectBackground(item.id)"
          @keydown.space.prevent="selectBackground(item.id)"
        >
          <span class="thumb" :style="{ backgroundImage: `url('${item.dataUrl}')` }"></span>
          <span class="card-title">{{ item.name }}</span>
          <span class="card-meta">自定义</span>
          <t-button
            class="delete-button"
            size="small"
            variant="text"
            theme="danger"
            @click.stop="removeBackground(item.id)"
          >
            删除
          </t-button>
        </t-card>
      </div>
      <p v-else class="empty">还没有自定义背景，点击“添加图片”导入。</p>
    </t-card>

    <t-alert v-if="error" class="error" theme="error" :message="error" />
  </div>
</template>

<script setup lang="ts">
import { computed, onUnmounted, ref, watch } from 'vue';
import type { RendererPluginContext } from '@dsz-examaware/plugin-sdk';
import {
  Alert as TAlert,
  Button as TButton,
  Card as TCard,
  Input as TInput
} from 'tdesign-vue-next';
import { BUILTIN_BACKGROUNDS, backgroundCredit, resolveBackground } from './backgrounds';
import {
  DEFAULT_BACKGROUND_ID,
  normalizeSettings,
  type BaozhongExamClockSettings,
  type CustomBackground
} from '../shared/settings';

const props = defineProps<{
  ctx: RendererPluginContext<BaozhongExamClockSettings>;
}>();

const settings = ref(normalizeSettings(props.ctx.api.settings.get()));
const settingsDisposer = props.ctx.api.settings.onChanged((next) => {
  settings.value = normalizeSettings(next);
});

onUnmounted(() => settingsDisposer.dispose());

const builtinBackgrounds = BUILTIN_BACKGROUNDS;
const currentBackground = computed(() => resolveBackground(settings.value));
const selectedId = computed(() => currentBackground.value.id);
const customBackgrounds = computed(() => settings.value.customBackgrounds ?? []);

const fileInput = ref<HTMLInputElement | null>(null);
const busy = ref(false);
const error = ref('');
const coverOriginDraft = ref(settings.value.coverOrigin || '宝鸡中学');

watch(
  () => settings.value.coverOrigin,
  (value) => {
    coverOriginDraft.value = value || '宝鸡中学';
  }
);

async function saveCoverOrigin() {
  error.value = '';
  try {
    await props.ctx.api.settings.patch({
      coverOrigin: coverOriginDraft.value.trim() || '宝鸡中学'
    });
  } catch (reason) {
    error.value = `保存封面文案失败：${formatError(reason)}`;
  }
}

function pickFile() {
  fileInput.value?.click();
}

async function selectBackground(id: string) {
  error.value = '';
  try {
    await props.ctx.api.settings.patch({ backgroundId: id });
  } catch (reason) {
    error.value = `切换背景失败：${formatError(reason)}`;
  }
}

async function removeBackground(id: string) {
  error.value = '';
  const nextCustom = customBackgrounds.value.filter((item) => item.id !== id);
  const nextBackground =
    selectedId.value === id ? DEFAULT_BACKGROUND_ID : settings.value.backgroundId;
  try {
    await props.ctx.api.settings.patch({
      customBackgrounds: nextCustom,
      backgroundId: nextBackground
    });
  } catch (reason) {
    error.value = `删除背景失败：${formatError(reason)}`;
  }
}

async function handleFileChange(event: Event) {
  const input = event.target as HTMLInputElement;
  const file = input.files?.[0];
  input.value = '';
  if (!file) return;
  if (!file.type.startsWith('image/')) {
    error.value = '请选择图片文件。';
    return;
  }
  if (file.size > 20 * 1024 * 1024) {
    error.value = '图片不能超过 20MB。';
    return;
  }

  busy.value = true;
  error.value = '';
  try {
    const dataUrl = await compressImage(file);
    const item: CustomBackground = {
      id: `custom-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      name: file.name.replace(/\.[^.]+$/, '') || '自定义背景',
      dataUrl
    };
    await props.ctx.api.settings.patch({
      customBackgrounds: [...customBackgrounds.value, item],
      backgroundId: item.id
    });
  } catch (reason) {
    error.value = `添加背景失败：${formatError(reason)}`;
  } finally {
    busy.value = false;
  }
}

async function compressImage(file: File): Promise<string> {
  if (typeof createImageBitmap !== 'function') {
    return await readFileAsDataUrl(file);
  }

  const bitmap = await createImageBitmap(file);
  try {
    const maxEdge = 2560;
    const scale = Math.min(1, maxEdge / Math.max(bitmap.width, bitmap.height));
    const width = Math.max(1, Math.round(bitmap.width * scale));
    const height = Math.max(1, Math.round(bitmap.height * scale));
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    const context = canvas.getContext('2d');
    if (!context) throw new Error('无法创建图片画布');
    context.drawImage(bitmap, 0, 0, width, height);
    return canvas.toDataURL('image/jpeg', 0.86);
  } finally {
    bitmap.close?.();
  }
}

function readFileAsDataUrl(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === 'string') resolve(reader.result);
      else reject(new Error('读取图片失败'));
    };
    reader.onerror = () => reject(reader.error ?? new Error('读取图片失败'));
    reader.readAsDataURL(file);
  });
}

function formatError(reason: unknown): string {
  return reason instanceof Error ? reason.message : String(reason);
}
</script>
