<template>
  <div class="quick-start">
    <header class="qs-header">
      <t-steps class="qs-steps" :current="stepsCurrent" @change="onStepChange">
        <t-step-item v-for="item in stepItems" :key="item" :title="item" />
      </t-steps>
    </header>

    <main class="qs-content">
      <section v-if="step === 0" class="qs-section">
        <t-card title="考试信息">
          <t-form ref="basicFormRef" :data="basic" :rules="basicRules" label-align="top">
            <div class="qs-form-grid">
              <t-form-item label="考试名称" name="title">
                <QuickWordInput
                  v-model="basic.title"
                  placeholder="例如：烟台开发区高级中学高一年级第一次月考"
                  :maxlength="60"
                  clearable
                />
              </t-form-item>
              <t-form-item label="副标题" name="subtitle">
                <t-input
                  v-model="basic.subtitle"
                  placeholder="例如：冷静分析，沉着应考"
                  :maxlength="60"
                  clearable
                />
              </t-form-item>
            </div>
            <t-form-item label="第一天" name="firstDay">
              <t-date-picker
                v-model="basic.firstDay"
                class="date-picker"
                value-type="YYYY-MM-DD"
                format="YYYY/MM/DD"
                :clearable="false"
                :allow-input="false"
                placeholder="选择第一天"
              />
            </t-form-item>
          </t-form>
        </t-card>
      </section>

      <section v-else-if="step === 1" class="qs-section qs-columns">
        <t-card title="科目" class="qs-card">
          <template #actions>
            <t-space size="small">
              <t-button size="small" variant="text" @click="selectAllSubjects">全选</t-button>
              <t-button size="small" variant="text" @click="clearSubjects">清空</t-button>
            </t-space>
          </template>
          <div class="subject-list">
            <div v-for="subject in subjects" :key="subject.id" class="subject-row">
              <t-checkbox
                :checked="subject.enabled"
                @change="(checked: boolean) => toggleSubject(subject, checked)"
              >
                {{ subject.name }}
              </t-checkbox>
            </div>
          </div>
          <div class="subject-add">
            <t-input
              v-model="newSubjectName"
              placeholder="科目名，回车即添加"
              :maxlength="20"
              @enter="addSubject"
            />
            <t-button variant="outline" @click="addSubject">
              <template #icon><AddIcon /></template>
              添加科目
            </t-button>
          </div>
        </t-card>

        <t-card title="顺序与时长" class="qs-card">
          <template #actions>
            <t-tag variant="light" size="small">已选 {{ examRows.length }} 场</t-tag>
          </template>
          <div class="duration-toolbar">
            <t-tooltip content="勾选两门及以上科目后合卷">
              <t-button
                variant="outline"
                size="small"
                :disabled="selectedRows.length < 2"
                @click="combineSelected"
              >
                合卷
              </t-button>
            </t-tooltip>
          </div>
          <div class="duration-list">
            <div v-for="(row, index) in examRows" :key="row.id" class="duration-row">
              <t-checkbox v-model="row.selected" />
              <div class="duration-name">
                {{ rowName(row) }}
                <t-tag v-if="row.subjectIds.length > 1" size="small" variant="light-outline">
                  合卷
                </t-tag>
              </div>
              <t-input-number
                :value="rowDuration(row)"
                class="duration-input"
                theme="row"
                size="small"
                align="center"
                :min="5"
                :max="480"
                :step="5"
                suffix="分钟"
                @change="(value: number | string) => setRowDuration(row, value)"
              />
              <t-space size="small" class="duration-actions">
                <t-tooltip content="上移">
                  <t-button
                    shape="circle"
                    variant="text"
                    size="small"
                    :disabled="index === 0"
                    @click="moveRow(index, -1)"
                  >
                    <ChevronUpIcon />
                  </t-button>
                </t-tooltip>
                <t-tooltip content="下移">
                  <t-button
                    shape="circle"
                    variant="text"
                    size="small"
                    :disabled="index === examRows.length - 1"
                    @click="moveRow(index, 1)"
                  >
                    <ChevronDownIcon />
                  </t-button>
                </t-tooltip>
                <t-tooltip v-if="row.subjectIds.length > 1" content="拆分合卷">
                  <t-button shape="circle" variant="text" size="small" @click="splitRow(row)">
                    <TableSplitIcon />
                  </t-button>
                </t-tooltip>
                <t-tooltip content="移除">
                  <t-button
                    shape="circle"
                    variant="text"
                    size="small"
                    theme="danger"
                    @click="removeRow(row)"
                  >
                    <DeleteIcon />
                  </t-button>
                </t-tooltip>
              </t-space>
            </div>
            <div v-if="!examRows.length" class="qs-empty">请选择至少一门科目</div>
          </div>
        </t-card>
      </section>

      <section v-else-if="step === 2" class="qs-section">
        <t-card title="排期与汇总">
          <div class="schedule-controls">
            <label class="control-item">
              <span class="control-label">一天几场</span>
              <t-input-number
                v-model="examsPerDay"
                class="control-number"
                theme="row"
                align="center"
                :min="1"
                :max="8"
              />
            </label>
            <label class="control-item">
              <span class="control-label">第一场开考</span>
              <t-time-picker
                v-model="firstExamTime"
                class="control-time"
                format="HH:mm"
                :clearable="false"
                :allow-input="true"
              />
            </label>
            <label class="control-item">
              <span class="control-label">两场间隔</span>
              <t-input-number
                v-model="gapMinutes"
                class="control-number"
                theme="row"
                align="center"
                :min="0"
                :max="120"
                :step="5"
                suffix="分钟"
              />
            </label>
          </div>

          <div class="preset-row">
            <span class="control-label">作息预设</span>
            <t-select v-model="presetId" class="preset-select" :options="presetOptions" />
            <t-button variant="outline" @click="openSavePreset">
              <template #icon><SaveIcon /></template>
              存为作息模板
            </t-button>
          </div>

          <t-divider />

          <div class="qs-stats">
            <div class="qs-stat">
              <span class="qs-stat-value">{{ scheduled.length }}</span>
              <span class="qs-stat-label">场考试</span>
            </div>
            <div class="qs-stat">
              <span class="qs-stat-value">{{ dayCount }}</span>
              <span class="qs-stat-label">天</span>
            </div>
            <div class="qs-stat">
              <span class="qs-stat-value">{{ totalDurationText }}</span>
              <span class="qs-stat-label">总时长</span>
            </div>
            <div class="qs-stat is-range">
              <span class="qs-stat-value">{{ dateRange }}</span>
              <span class="qs-stat-label">日程</span>
            </div>
          </div>

          <t-alert
            v-if="scheduleWarning"
            theme="warning"
            :message="scheduleWarning"
            class="schedule-alert"
          />

          <t-table
            row-key="id"
            :data="scheduled"
            :columns="columns"
            size="small"
            table-layout="fixed"
            :pagination="false"
            :bordered="false"
            hover
          >
            <template #index="{ row }">{{ row.indexInDay }}</template>
            <template #date="{ row }">
              <div class="date-cell">
                <span>{{ formatDate(row.date) }}</span>
                <span class="date-weekday">{{ formatWeekday(row.date) }}</span>
              </div>
            </template>
            <template #period="{ row }">
              <t-tag size="small" variant="light-outline">{{ row.period }}</t-tag>
            </template>
            <template #name="{ row }">{{ row.name }}</template>
            <template #start="{ row }">
              <t-time-picker
                :value="row.startText"
                class="cell-time"
                size="small"
                format="HH:mm"
                :clearable="false"
                :allow-input="true"
                @change="(value: string) => setRowStart(row.row, value)"
              />
            </template>
            <template #duration="{ row }">
              <t-input-number
                :value="row.duration"
                class="cell-duration"
                theme="normal"
                size="small"
                align="center"
                :min="5"
                :max="480"
                :step="5"
                suffix="分钟"
                @change="(value: number | string) => setRowDuration(row.row, value)"
              />
            </template>
            <template #gap="{ row }">
              <span :class="{ 'gap-overlap': row.gapMinutes !== null && row.gapMinutes < 0 }">
                {{ formatGap(row.gapMinutes) }}
              </span>
            </template>
            <template #operations="{ row }">
              <t-space size="small">
                <t-tooltip content="上移">
                  <t-button
                    shape="circle"
                    variant="text"
                    size="small"
                    :disabled="rowIndex(row.row) === 0"
                    @click="moveRow(rowIndex(row.row), -1)"
                  >
                    <ChevronUpIcon />
                  </t-button>
                </t-tooltip>
                <t-tooltip content="下移">
                  <t-button
                    shape="circle"
                    variant="text"
                    size="small"
                    :disabled="rowIndex(row.row) === examRows.length - 1"
                    @click="moveRow(rowIndex(row.row), 1)"
                  >
                    <ChevronDownIcon />
                  </t-button>
                </t-tooltip>
                <t-tooltip content="移除">
                  <t-button
                    shape="circle"
                    variant="text"
                    size="small"
                    theme="danger"
                    @click="removeRow(row.row)"
                  >
                    <DeleteIcon />
                  </t-button>
                </t-tooltip>
              </t-space>
            </template>
          </t-table>
        </t-card>
      </section>

      <section v-else class="qs-section qs-complete">
        <div class="complete-hero">
          <CheckCircleFilledIcon class="complete-icon" />
          <div class="complete-heading">
            <h2>{{ completed?.config.examName || '配置已生成' }}</h2>
            <p v-if="completed?.config.message">{{ completed.config.message }}</p>
          </div>
        </div>

        <div class="qs-stats">
          <div class="qs-stat">
            <span class="qs-stat-value">{{ completed?.examCount ?? 0 }}</span>
            <span class="qs-stat-label">场考试</span>
          </div>
          <div class="qs-stat">
            <span class="qs-stat-value">{{ completed?.dayCount ?? 0 }}</span>
            <span class="qs-stat-label">天</span>
          </div>
          <div class="qs-stat">
            <span class="qs-stat-value">
              {{ completed ? formatGap(completed.totalMinutes) : '—' }}
            </span>
            <span class="qs-stat-label">总时长</span>
          </div>
          <div class="qs-stat is-range">
            <span class="qs-stat-value">{{ completed?.dateRange || '—' }}</span>
            <span class="qs-stat-label">日程</span>
          </div>
        </div>

        <div class="complete-actions">
          <t-button
            size="large"
            theme="primary"
            :loading="actionLoading === 'editor'"
            :disabled="!!actionLoading && actionLoading !== 'editor'"
            @click="openEditorFromResult"
          >
            <template #icon><EditIcon /></template>
            打开编辑器
          </t-button>
          <t-tooltip content="立即启动放映窗口，不生成文件">
            <t-button
              size="large"
              theme="success"
              variant="outline"
              :loading="actionLoading === 'playback'"
              :disabled="!!actionLoading && actionLoading !== 'playback'"
              @click="startPlaybackFromResult"
            >
              <template #icon><PlayCircleIcon /></template>
              直接放映
            </t-button>
          </t-tooltip>
          <t-button
            v-for="action in pluginActions"
            :key="action.id"
            size="large"
            :theme="action.theme || 'default'"
            variant="outline"
            :disabled="!!actionLoading"
            @click="runPluginAction(action)"
          >
            <template #icon>
              <t-icon v-if="action.icon" :name="action.icon" />
            </template>
            {{ action.label }}
          </t-button>
        </div>
      </section>

      <div v-if="stepPanels.length" class="qs-plugin-panels">
        <t-card v-for="panel in stepPanels" :key="panel.id" :title="panel.title">
          <QuickStartPluginPanel
            :component="panel.component"
            :config="previewConfig"
            :step="currentStepKey"
          />
        </t-card>
      </div>
    </main>

    <footer class="qs-footer">
      <t-space size="small">
        <t-button variant="outline" @click="cancel">取消</t-button>
        <t-button v-if="step > 0" variant="outline" @click="step -= 1">上一步</t-button>
        <t-button v-if="step < 2" theme="primary" @click="goNext">下一步</t-button>
        <t-button v-else-if="step === 2" theme="primary" @click="generateConfigAndContinue">
          生成配置
        </t-button>
      </t-space>
    </footer>

    <t-dialog
      v-model:visible="presetDialogVisible"
      header="保存为作息模板"
      width="420px"
      :confirm-btn="{ content: '保存' }"
      @confirm="savePreset"
    >
      <t-input
        v-model="presetName"
        placeholder="输入模板名称，例如：周考作息"
        :maxlength="20"
        @enter="savePreset"
      />
    </t-dialog>
  </div>
</template>

<script setup lang="ts">
import { useQuickStartWizard } from '@renderer/composables/useQuickStartWizard'
import {
  AddIcon,
  CheckCircleFilledIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  DeleteIcon,
  EditIcon,
  PlayCircleIcon,
  SaveIcon,
  TableSplitIcon
} from 'tdesign-icons-vue-next'
import QuickStartPluginPanel from './QuickStartPluginPanel.vue'
import QuickWordInput from '@renderer/components/QuickWordInput.vue'

const {
  step,
  stepsCurrent,
  stepItems,
  onStepChange,
  basic,
  basicRules,
  basicFormRef,
  subjects,
  examRows,
  newSubjectName,
  selectedRows,
  rowName,
  rowDuration,
  rowIndex,
  toggleSubject,
  addSubject,
  selectAllSubjects,
  clearSubjects,
  setRowDuration,
  setRowStart,
  moveRow,
  removeRow,
  combineSelected,
  splitRow,
  examsPerDay,
  firstExamTime,
  gapMinutes,
  presetId,
  presetOptions,
  presetDialogVisible,
  presetName,
  openSavePreset,
  savePreset,
  scheduled,
  columns,
  dayCount,
  dateRange,
  totalDurationText,
  scheduleWarning,
  formatDate,
  formatWeekday,
  formatGap,
  completed,
  actionLoading,
  generateConfigAndContinue,
  openEditorFromResult,
  startPlaybackFromResult,
  pluginActions,
  currentStepKey,
  stepPanels,
  previewConfig,
  runPluginAction,
  cancel,
  goNext
} = useQuickStartWizard()
</script>

<style scoped>
.quick-start {
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 0;
  background: var(--td-bg-color-page);
}
.qs-header {
  display: flex;
  align-items: center;
  padding: 16px 20px 8px;
}
.qs-steps {
  width: 100%;
}
.qs-content {
  flex: 1;
  min-height: 0;
  overflow: auto;
  padding: 0 20px 16px;
}
.qs-section {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.qs-columns {
  flex-direction: row;
  align-items: flex-start;
  gap: 16px;
}
.qs-card {
  flex: 1;
  min-width: 0;
}
.qs-form-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 0 16px;
}
.date-picker {
  width: 240px;
}
.subject-list {
  display: flex;
  flex-direction: column;
}
.subject-row {
  display: flex;
  align-items: center;
  min-height: 40px;
  border-bottom: 1px solid var(--td-border-level-1-color);
}
.subject-add {
  display: flex;
  gap: 8px;
  margin-top: 12px;
}
.duration-toolbar {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 8px;
}
.duration-list {
  display: flex;
  flex-direction: column;
}
.duration-row {
  display: flex;
  align-items: center;
  gap: 10px;
  min-height: 48px;
  border-bottom: 1px solid var(--td-border-level-1-color);
}
.duration-name {
  flex: 1;
  display: flex;
  align-items: center;
  gap: 6px;
  min-width: 0;
  font-weight: 500;
}
.duration-input {
  width: 150px;
}
.duration-actions {
  flex-shrink: 0;
}
.qs-empty {
  padding: 24px 0;
  color: var(--td-text-color-placeholder);
  text-align: center;
}
.schedule-controls {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;
}
.control-item {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 6px;
}
.control-label {
  color: var(--td-text-color-primary);
  font-size: 13px;
  white-space: nowrap;
}
.control-number,
.control-time {
  width: 100%;
}
.preset-row {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
  margin-top: 16px;
}
.preset-select {
  width: 200px;
}
.schedule-alert {
  margin-bottom: 8px;
}
.qs-stats {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr)) minmax(220px, 1.4fr);
  gap: 12px;
  margin-bottom: 12px;
}
.qs-stat {
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: 10px 14px;
  border: 1px solid var(--td-border-level-1-color);
  border-radius: 6px;
  background: var(--td-bg-color-secondarycontainer);
}
.qs-stat-value {
  color: var(--td-text-color-primary);
  font-size: 20px;
  font-weight: 600;
  line-height: 1.3;
  overflow-wrap: anywhere;
}
.qs-stat-label {
  color: var(--td-text-color-secondary);
  font-size: 12px;
}
.qs-complete {
  padding-top: 16px;
}
.complete-hero {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 8px 0 20px;
}
.complete-icon {
  color: var(--td-success-color);
  font-size: 44px;
}
.complete-heading h2 {
  margin: 0;
  font-size: 22px;
  line-height: 1.3;
}
.complete-heading p {
  margin: 4px 0 0;
  color: var(--td-text-color-secondary);
  font-size: 13px;
}
.complete-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 20px;
}
.complete-actions :deep(.t-button) {
  min-width: 160px;
}
.qs-plugin-panels {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 12px;
}
.date-cell {
  display: flex;
  flex-direction: column;
  line-height: 1.3;
}
.date-weekday {
  color: var(--td-text-color-placeholder);
  font-size: 11px;
}
.cell-time {
  width: 104px;
}
.cell-duration {
  width: 140px;
}
.gap-overlap {
  color: var(--td-color-error);
}
.qs-footer {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 12px 20px;
  border-top: 1px solid var(--td-border-level-1-color);
  background: var(--td-bg-color-container);
}
@media (max-width: 900px) {
  .qs-columns {
    flex-direction: column;
  }
  .qs-card {
    width: 100%;
  }
  .qs-stats {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  .qs-stat.is-range {
    grid-column: span 2;
  }
  .schedule-controls {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
</style>
