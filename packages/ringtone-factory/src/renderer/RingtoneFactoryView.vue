<template>
  <main class="factory-page">
    <header class="page-header">
      <div>
        <h1>铃声工厂</h1>
        <p>可以用来制作 .ea2r 铃声包</p>
      </div>
      <TTag variant="light-outline">{{ selectedCount }}/3 音频 已载入</TTag>
    </header>

    <TForm class="factory-form" label-align="top">
      <section class="metadata-grid" aria-label="铃声包信息">
        <TFormItem label="铃声包名称">
          <TInput
            v-model="form.name"
            :maxlength="100"
            clearable
            placeholder="例如：一个好听的铃声"
          />
        </TFormItem>
        <TFormItem label="铃声包 ID">
          <TInput v-model="form.id" :maxlength="64" clearable placeholder="例如：rickroll-bells" />
        </TFormItem>
        <TFormItem label="版本">
          <TInput v-model="form.version" :maxlength="40" clearable />
        </TFormItem>
        <TFormItem label="作者">
          <TInput v-model="form.author" :maxlength="100" clearable />
        </TFormItem>
      </section>

      <section class="sounds" aria-labelledby="sounds-title">
        <div class="section-heading">
          <h2 id="sounds-title">铃声片段</h2>
          <span>MP3 / WAV / OGG / M4A</span>
        </div>

        <div v-for="kind in SOUND_KINDS" :key="kind" class="sound-row">
          <div class="sound-kind">
            <FileMusicIcon size="22px" />
            <div>
              <strong>{{ soundKindLabels[kind] }}</strong>
              <span v-if="sounds[kind]">
                {{ sounds[kind]?.file.name }} · {{ formatBytes(sounds[kind]?.file.size ?? 0) }}
              </span>
              <span v-else>未选择音频</span>
            </div>
          </div>

          <TInput
            v-model="soundNames[kind]"
            class="sound-name"
            :maxlength="100"
            :placeholder="`${soundKindLabels[kind]}名称`"
          />

          <div class="sound-actions">
            <TButton variant="outline" @click="chooseAudio(kind)">
              <template #icon><UploadIcon /></template>
              {{ sounds[kind] ? '替换' : '选择' }}
            </TButton>
            <TTooltip :content="playingKind === kind ? '停止试听' : '试听'">
              <TButton
                shape="square"
                variant="text"
                :disabled="!sounds[kind]"
                :aria-label="playingKind === kind ? '停止试听' : `试听${soundKindLabels[kind]}`"
                @click="togglePreview(kind)"
              >
                <StopCircleIcon v-if="playingKind === kind" />
                <PlayCircleIcon v-else />
              </TButton>
            </TTooltip>
            <TTooltip content="移除">
              <TButton
                shape="square"
                variant="text"
                theme="danger"
                :disabled="!sounds[kind]"
                :aria-label="`移除${soundKindLabels[kind]}`"
                @click="removeAudio(kind)"
              >
                <DeleteIcon />
              </TButton>
            </TTooltip>
          </div>
        </div>
      </section>
    </TForm>

    <TAlert
      v-if="errorMessage"
      theme="error"
      :message="errorMessage"
      close
      @close="errorMessage = ''"
    />

    <footer class="page-footer">
      <span>预计未压缩大小：{{ formatBytes(totalBytes) }}</span>
      <TButton theme="primary" size="large" :loading="building" @click="buildAndDownload">
        <template #icon><DownloadIcon /></template>
        生成铃声包
      </TButton>
    </footer>
  </main>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, reactive, ref } from 'vue';
import {
  Alert as TAlert,
  Button as TButton,
  Form as TForm,
  FormItem as TFormItem,
  Input as TInput,
  MessagePlugin,
  Tag as TTag,
  Tooltip as TTooltip
} from 'tdesign-vue-next';
import {
  DeleteIcon,
  DownloadIcon,
  FileMusicIcon,
  PlayCircleIcon,
  StopCircleIcon,
  UploadIcon
} from 'tdesign-icons-vue-next';
import {
  buildRingtonePack,
  RingtonePackError,
  SOUND_KINDS,
  soundKindLabels,
  type SoundKind,
  validateAudioAsset
} from '../shared/ringtonePack';

interface SelectedAudio {
  file: File;
  bytes: Uint8Array;
  previewUrl: string;
}

const form = reactive({
  name: '',
  id: '',
  version: '1.0.0',
  author: ''
});

const soundNames = reactive<Record<SoundKind, string>>({
  start: '开考铃声',
  alert: '即将结束铃声',
  end: '结束铃声'
});

const sounds = reactive<Record<SoundKind, SelectedAudio | null>>({
  start: null,
  alert: null,
  end: null
});

const building = ref(false);
const errorMessage = ref('');
const playingKind = ref<SoundKind | null>(null);
const audio = new Audio();

audio.addEventListener('ended', () => {
  playingKind.value = null;
});
audio.addEventListener('error', () => {
  playingKind.value = null;
  MessagePlugin.error('无法试听该音频');
});

const selectedCount = computed(() => SOUND_KINDS.filter((kind) => sounds[kind]).length);
const totalBytes = computed(() =>
  SOUND_KINDS.reduce((total, kind) => total + (sounds[kind]?.bytes.byteLength ?? 0), 0)
);

const formatBytes = (bytes: number) => {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KiB`;
  return `${(bytes / 1024 / 1024).toFixed(1)} MiB`;
};

const stopPreview = () => {
  audio.pause();
  audio.removeAttribute('src');
  playingKind.value = null;
};

const setAudio = async (kind: SoundKind, file: File) => {
  const bytes = new Uint8Array(await file.arrayBuffer());
  validateAudioAsset(file.name, bytes);
  if (sounds[kind]) URL.revokeObjectURL(sounds[kind].previewUrl);
  if (playingKind.value === kind) stopPreview();
  sounds[kind] = {
    file,
    bytes,
    previewUrl: URL.createObjectURL(file)
  };
};

const chooseAudio = (kind: SoundKind) => {
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = '.mp3,.wav,.ogg,.m4a,audio/mpeg,audio/wav,audio/ogg,audio/mp4';
  input.onchange = async () => {
    const file = input.files?.[0];
    if (!file) return;
    try {
      errorMessage.value = '';
      await setAudio(kind, file);
    } catch (error) {
      errorMessage.value =
        error instanceof Error ? error.message : `${soundKindLabels[kind]}读取失败`;
    }
  };
  input.click();
};

const removeAudio = (kind: SoundKind) => {
  const selected = sounds[kind];
  if (!selected) return;
  if (playingKind.value === kind) stopPreview();
  URL.revokeObjectURL(selected.previewUrl);
  sounds[kind] = null;
};

const togglePreview = async (kind: SoundKind) => {
  const selected = sounds[kind];
  if (!selected) return;
  if (playingKind.value === kind) {
    stopPreview();
    return;
  }

  stopPreview();
  audio.src = selected.previewUrl;
  playingKind.value = kind;
  try {
    await audio.play();
  } catch {
    playingKind.value = null;
    MessagePlugin.error('无法试听该音频');
  }
};

const download = (bytes: Uint8Array, fileName: string) => {
  const source = new Uint8Array(bytes).buffer;
  const url = URL.createObjectURL(new Blob([source], { type: 'application/zip' }));
  const anchor = document.createElement('a');
  anchor.href = url;
  anchor.download = fileName;
  anchor.click();
  window.setTimeout(() => URL.revokeObjectURL(url), 0);
};

const buildAndDownload = async () => {
  if (building.value) return;
  building.value = true;
  errorMessage.value = '';
  try {
    const archive = await buildRingtonePack({
      ...form,
      sounds: Object.fromEntries(
        SOUND_KINDS.map((kind) => {
          const selected = sounds[kind];
          return [
            kind,
            selected
              ? {
                  name: soundNames[kind],
                  fileName: selected.file.name,
                  bytes: selected.bytes
                }
              : null
          ];
        })
      ) as Parameters<typeof buildRingtonePack>[0]['sounds']
    });
    download(archive, `${form.id.trim()}.ea2r`);
    MessagePlugin.success('铃声包已生成');
  } catch (error) {
    errorMessage.value =
      error instanceof RingtonePackError || error instanceof Error
        ? error.message
        : '铃声包生成失败';
  } finally {
    building.value = false;
  }
};

onBeforeUnmount(() => {
  stopPreview();
  for (const kind of SOUND_KINDS) {
    const selected = sounds[kind];
    if (selected) URL.revokeObjectURL(selected.previewUrl);
  }
});
</script>
