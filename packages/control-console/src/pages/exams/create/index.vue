<template>
  <div class="console-page exam-create-page">
    <PageHeader
      title="发起考试"
      description="上传客户端制作的 .ea2 档案，分配目标考场，再确认下发策略。"
    >
      <template #actions>
        <t-button variant="outline" @click="router.push('/exams/list')">返回考试列表</t-button>
      </template>
    </PageHeader>

    <t-row class="exam-create-workspace" :gutter="[16, 16]" align="stretch">
      <t-col class="exam-create-col" :xs="12" :lg="3">
        <t-card class="exam-create-steps" title="创建流程" :bordered="false">
          <t-steps layout="vertical" :current="currentStep">
            <t-step-item title="考试档案" content="上传并校验 .ea2" />
            <t-step-item title="分配范围" content="选择设备和设备组" />
            <t-step-item title="确认发起" content="核对后创建考试" />
          </t-steps>
        </t-card>
      </t-col>

      <t-col class="exam-create-col" :xs="12" :lg="9">
        <t-card class="exam-create-panel" :bordered="false">
          <template #title>
            <div class="exam-create-panel__heading">
              <span>步骤 {{ currentStep + 1 }} / 3</span>
              <strong>{{ stepTitle }}</strong>
            </div>
          </template>

          <t-form v-if="currentStep === 0" :data="form" layout="vertical" @submit="nextFromFile">
            <t-form-item
              label="考试名称"
              name="name"
              :rules="[{ required: true, message: '请输入考试名称' }]"
            >
              <t-input v-model="form.name" placeholder="默认使用档案中的考试名称" />
            </t-form-item>
            <t-form-item label="ExamAware 档案" name="files">
              <t-upload
                v-model="files"
                accept=".ea2,application/json"
                :auto-upload="false"
                :max="1"
                :size-limit="{ size: 10, unit: 'MB' }"
                :before-upload="beforeUpload"
                @change="readEa2File"
              >
                <t-button variant="outline">
                  <template #icon><t-icon name="upload" /></template>
                  选择 .ea2 文件
                </t-button>
              </t-upload>
            </t-form-item>
            <t-alert
              v-if="fileMessage"
              class="exam-create-feedback"
              :theme="examConfig ? 'success' : 'error'"
              :message="fileMessage"
            />
            <div class="exam-create-footer">
              <t-button theme="primary" type="submit" :disabled="!examConfig"
                >下一步：分配范围</t-button
              >
            </div>
          </t-form>

          <t-form
            v-else-if="currentStep === 1"
            :data="form"
            layout="vertical"
            @submit="currentStep = 2"
          >
            <t-form-item label="目标考场大屏或设备组">
              <t-cascader
                v-model="targetValues"
                :options="targetOptions"
                :popup-props="WIDE_CASCADER_POPUP_PROPS"
                multiple
                filterable
                clearable
                value-mode="parentFirst"
                placeholder="选择单台考场大屏或任意层级设备组"
              />
            </t-form-item>
            <t-alert
              theme="info"
              :message="
                targetResolving
                  ? '正在计算设备范围…'
                  : `当前覆盖 ${resolvedTargetDevices.length} 台设备，选中 ${form.partitionNodeIds.length} 个设备组。可以暂不分配，稍后在考试详情中补充。`
              "
            />
            <div class="exam-create-footer">
              <t-space>
                <t-button variant="outline" @click="currentStep = 0">上一步</t-button>
                <t-button theme="primary" type="submit" :disabled="targetResolving"
                  >下一步：确认发起</t-button
                >
              </t-space>
            </div>
          </t-form>

          <div v-else class="exam-confirmation">
            <t-descriptions :column="2" bordered>
              <t-descriptions-item label="考试名称">{{ form.name }}</t-descriptions-item>
              <t-descriptions-item label="档案文件">{{ files[0]?.name }}</t-descriptions-item>
              <t-descriptions-item label="考试场次">{{
                examConfig?.examInfos.length ?? 0
              }}</t-descriptions-item>
              <t-descriptions-item label="分配范围">
                {{ resolvedTargetDevices.length }} 台设备 /
                {{ form.partitionNodeIds.length }} 个设备组
              </t-descriptions-item>
            </t-descriptions>
            <div class="exam-confirmation__option">
              <t-checkbox v-model="form.prepareImmediately"
                >创建后立即向目标设备下发准备命令</t-checkbox
              >
              <span>设备只会缓存并校验考试档案，不会自动进入播放。</span>
            </div>
            <div class="exam-create-footer">
              <t-space>
                <t-button variant="outline" @click="currentStep = 1">上一步</t-button>
                <t-button theme="primary" :loading="submitting" @click="createExam"
                  >确认创建</t-button
                >
              </t-space>
            </div>
          </div>
        </t-card>
      </t-col>
    </t-row>
  </div>
</template>

<script setup lang="ts">
import { validateExamConfigDetailed, type ExamConfig } from '@dsz-examaware/core';
import type { SubmitContext, UploadFile } from 'tdesign-vue-next';
import { MessagePlugin } from 'tdesign-vue-next';
import { computed, onMounted, reactive, ref, watch } from 'vue';
import { useRouter } from 'vue-router';
import PageHeader from '@/components/page-header/index.vue';
import { devicesApi } from '@/api/control/devices';
import { examConfigsApi } from '@/api/control/exam-configs';
import { operationsApi } from '@/api/control/operations';
import { partitionsApi } from '@/api/control/partitions';
import type { DeviceView, PartitionDimensionDetail } from '@/api/control/types';
import { ApiError } from '@/api/http';
import {
  WIDE_CASCADER_POPUP_PROPS,
  buildExamTargetCascaderOptions,
  parseExamTargetValues,
  toExamTargetValues
} from '@/utils/partition-options';
const router = useRouter();
const currentStep = ref(0);
const files = ref<UploadFile[]>([]);
const examConfig = ref<ExamConfig>();
const fileMessage = ref('');
const devices = ref<DeviceView[]>([]);
const dimensions = ref<PartitionDimensionDetail[]>([]);
const resolvedTargetDevices = ref<DeviceView[]>([]);
const targetResolving = ref(false);
let targetResolutionSequence = 0;
const submitting = ref(false);
const stepTitle = computed(
  () => ['上传并校验考试档案', '选择目标考场与设备组', '确认考试与下发设置'][currentStep.value]
);
const form = reactive({
  name: '',
  deviceIds: [] as string[],
  partitionNodeIds: [] as string[],
  prepareImmediately: true
});
const targetOptions = computed(() =>
  buildExamTargetCascaderOptions(dimensions.value, devices.value)
);
const targetValues = computed<string[]>({
  get: () => toExamTargetValues(form.deviceIds, form.partitionNodeIds, devices.value),
  set: (values) => Object.assign(form, parseExamTargetValues(values))
});

function beforeUpload(file: UploadFile) {
  if (!/\.ea2$/i.test(file.name ?? '')) {
    void MessagePlugin.warning('请选择 .ea2 考试档案');
    return false;
  }
  return true;
}
async function readEa2File(nextFiles: UploadFile[]) {
  files.value = nextFiles;
  examConfig.value = undefined;
  fileMessage.value = '';
  const rawFile = nextFiles[0]?.raw;
  if (!rawFile) return;
  try {
    const content = JSON.parse(await rawFile.text()) as unknown;
    const validation = validateExamConfigDetailed(content, { overlap: 'error', sort: true });
    if (!validation.valid || !validation.config) {
      fileMessage.value = validation.errors.map((item) => item.message).join('；');
      return;
    }
    examConfig.value = validation.config;
    if (!form.name) form.name = validation.config.examName;
    fileMessage.value = `档案校验通过，共 ${validation.config.examInfos.length} 个考试场次`;
  } catch {
    fileMessage.value = '无法读取该 .ea2 文件，请确认文件由 ExamAware 客户端导出';
  }
}
function nextFromFile(context: SubmitContext) {
  if (context.validateResult === true && examConfig.value) currentStep.value = 1;
}
async function loadTargets() {
  const [devicePage, dimensionList] = await Promise.all([
    devicesApi.list(1, 100),
    partitionsApi.listDimensions()
  ]);
  devices.value = devicePage.items;
  dimensions.value = await Promise.all(
    dimensionList.map((item) => partitionsApi.getDimension(item.id))
  );
}
async function resolveSelectedTargets() {
  const sequence = ++targetResolutionSequence;
  if (!form.deviceIds.length && !form.partitionNodeIds.length) {
    resolvedTargetDevices.value = [];
    targetResolving.value = false;
    return;
  }
  targetResolving.value = true;
  try {
    const resolved = await devicesApi.resolveTargets(form.deviceIds, form.partitionNodeIds);
    if (sequence === targetResolutionSequence) resolvedTargetDevices.value = resolved;
  } catch (error) {
    if (sequence === targetResolutionSequence) {
      resolvedTargetDevices.value = [];
      await MessagePlugin.error(error instanceof ApiError ? error.message : '无法计算目标设备');
    }
  } finally {
    if (sequence === targetResolutionSequence) targetResolving.value = false;
  }
}

watch(
  () => [form.deviceIds.join(','), form.partitionNodeIds.join(',')],
  () => void resolveSelectedTargets()
);

async function createExam() {
  const file = files.value[0]?.raw;
  if (!examConfig.value || !file) return;
  submitting.value = true;
  try {
    const created = await examConfigsApi.importEa2(form.name, file);
    await examConfigsApi.update(created.id, {
      assignedDeviceIds: form.deviceIds,
      assignedPartitionNodeIds: form.partitionNodeIds
    });
    if (form.prepareImmediately && (form.deviceIds.length || form.partitionNodeIds.length)) {
      await operationsApi.prepareExam({
        examConfigId: created.id,
        version: created.latestVersion,
        targets: { deviceIds: form.deviceIds, partitionNodeIds: form.partitionNodeIds },
        expiresInSeconds: 600
      });
    }
    await MessagePlugin.success('考试已创建');
    await router.replace(`/exams/${created.id}`);
  } catch (error) {
    await MessagePlugin.error(error instanceof ApiError ? error.message : '考试创建失败');
  } finally {
    submitting.value = false;
  }
}

onMounted(() => void loadTargets());
</script>

<style scoped lang="less">
.exam-create-col {
  display: flex;
}

.exam-create-steps {
  position: sticky;
  top: var(--td-comp-margin-l);
  width: 100%;
  height: 100%;
}

.exam-create-panel {
  width: 100%;
  height: 100%;
  min-height: 560px;

  &__heading {
    display: flex;
    flex-direction: column;
    gap: 2px;

    span {
      color: var(--td-brand-color);
      font: var(--td-font-body-small);
    }
  }
}

.exam-create-feedback {
  margin-top: var(--td-comp-margin-l);
}

.exam-create-footer {
  margin-top: var(--td-comp-margin-xxl);
  padding-top: var(--td-comp-paddingTB-l);
  display: flex;
  justify-content: flex-end;
  border-top: 1px solid var(--td-border-level-1-color);
}

.exam-confirmation {
  display: flex;
  flex-direction: column;
  gap: var(--td-comp-margin-xl);

  &__option {
    display: flex;
    flex-direction: column;
    gap: var(--td-comp-margin-xs);

    span {
      padding-left: 24px;
      color: var(--td-text-color-secondary);
    }
  }
}

@media (max-width: 992px) {
  .exam-create-steps {
    position: static;
  }

  .exam-create-panel {
    min-height: auto;
  }
}
</style>
