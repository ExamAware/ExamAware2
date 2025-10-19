<template>
  <div class="logs-view">
    <div class="toolbar">
      <t-input v-model="keyword" placeholder="搜索内容或来源" clearable style="width: 260px" />
      <t-select v-model="level" :options="levelOptions" clearable placeholder="级别" style="width: 140px" />
      <t-select v-model="proc" :options="procOptions" clearable placeholder="进程" style="width: 120px" />
      <t-switch v-model="followTail" size="small" label="跟随滚动" />
      <t-button theme="default" @click="onlyErrors = !onlyErrors" :variant="onlyErrors ? 'base' : 'outline'">仅错误</t-button>
      <t-button theme="default" @click="clearLogs"><t-icon name="delete" /> 清空</t-button>
    </div>
    <div class="logs-table" ref="tableWrapRef">
      <t-table
        row-key="id"
        :data="filtered"
        :columns="columns"
        size="small"
        stripe
        bordered
        hover
        :row-class-name="rowClassName"
        table-layout="auto"
      >
        <template #cell(timestamp)="{ row }">
          {{ formatTime(row.timestamp) }}
        </template>
        <template #cell(level)="{ row }">
          <t-tag :theme="levelTheme(row.level)" size="small">{{ row.level.toUpperCase() }}</t-tag>
        </template>
        <template #cell(message)="{ row }">
          <div class="msg-wrap" :class="'lvl-' + row.level">
            <pre class="msg" :class="{ collapsed: isCollapsed(row) }">{{ displayMessage(row) }}</pre>
            <div class="msg-actions">
              <t-link theme="primary" variant="text" size="small" @click="toggleExpand(row.id)">
                {{ isCollapsed(row) ? '展开' : '收起' }}
              </t-link>
              <t-link variant="text" size="small" @click="copyText(row.message)">复制</t-link>
            </div>
          </div>
        </template>
      </t-table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount, reactive, ref, computed, nextTick } from 'vue'

type LogLevel = 'log' | 'info' | 'warn' | 'error' | 'debug'
interface LogEntry {
  id: number
  timestamp: number
  level: LogLevel
  process: 'main' | 'renderer'
  windowId?: number
  message: string
  stack?: string
  source?: string
}

const rows = reactive<LogEntry[]>([])
const keyword = ref('')
const level = ref<LogLevel | ''>('')
const proc = ref<'main' | 'renderer' | ''>('')
const onlyErrors = ref(false)
const followTail = ref(true)
const expanded = ref<Set<number>>(new Set())
const tableWrapRef = ref<HTMLElement | null>(null)

const levelOptions = [
  { label: 'log', value: 'log' },
  { label: 'info', value: 'info' },
  { label: 'warn', value: 'warn' },
  { label: 'error', value: 'error' },
  { label: 'debug', value: 'debug' }
]

const procOptions = [
  { label: 'main', value: 'main' },
  { label: 'renderer', value: 'renderer' }
]

const columns = [
  { colKey: 'timestamp', title: '时间', width: 160, align: 'left' },
  { colKey: 'level', title: '级别', width: 90, align: 'center' },
  { colKey: 'process', title: '进程', width: 100, align: 'center' },
  { colKey: 'windowId', title: '窗口', width: 80, align: 'center' },
  { colKey: 'message', title: '内容', minWidth: 480 },
  { colKey: 'source', title: '来源', width: 160 }
]

const formatTime = (ts: number) => new Date(ts).toLocaleString()

const levelTheme = (lvl: LogLevel) => {
  switch (lvl) {
    case 'error': return 'danger'
    case 'warn': return 'warning'
    case 'info': return 'primary'
    case 'debug': return 'success'
    default: return 'default'
  }
}

const filtered = computed(() => {
  return rows.filter(r => {
    if (level.value && r.level !== level.value) return false
    if (proc.value && r.process !== proc.value) return false
    if (onlyErrors.value && r.level !== 'error') return false
    if (keyword.value) {
      const k = keyword.value.toLowerCase()
      const s = `${r.message} ${r.source ?? ''}`.toLowerCase()
      if (!s.includes(k)) return false
    }
    return true
  })
})

const clearLogs = () => {
  rows.splice(0, rows.length)
  window.api?.ipc?.send('logs:clear')
}

onMounted(async () => {
  document.title = '日志 - ExamAware'
  // 初始加载
  const initial = await window.api?.ipc?.invoke('logs:get')
  if (Array.isArray(initial)) {
    rows.splice(0, rows.length, ...initial)
  }
  // 订阅推送
  const handler = (_e: any, entry: LogEntry) => {
    rows.push(entry)
    if (followTail.value) {
      nextTick(() => scrollToBottom())
    }
  }
  window.api?.ipc?.on('logs:push', handler)
  // 清理
  onBeforeUnmount(() => {
    window.api?.ipc?.off('logs:push', handler)
  })
})

function isCollapsed(row: LogEntry) {
  return !expanded.value.has(row.id)
}

function toggleExpand(id: number) {
  const s = new Set(expanded.value)
  if (s.has(id)) s.delete(id)
  else s.add(id)
  expanded.value = s
}

function prettyMessage(msg: string): string {
  // 优先尝试 JSON 美化
  try {
    const obj = JSON.parse(msg)
    return JSON.stringify(obj, null, 2)
  } catch {
    return msg
  }
}

function displayMessage(row: LogEntry): string {
  const text = prettyMessage(row.message)
  if (!isCollapsed(row)) return text
  // 折叠时截断为多行预览
  const limit = 280
  if (text.length <= limit) return text
  return text.slice(0, limit) + '\n…'
}

function copyText(text: string) {
  try { navigator.clipboard.writeText(text) } catch {}
}

function scrollToBottom() {
  const el = tableWrapRef.value
  if (el) el.scrollTop = el.scrollHeight
}

function rowClassName({ row }: { row: LogEntry }) {
  return row.level === 'error' ? 'row-error' : row.level === 'warn' ? 'row-warn' : ''
}
</script>

<style scoped>
.logs-view {
  height: 100%;
  display: flex;
  flex-direction: column;
  min-height: 0;
}
.toolbar {
  display: flex;
  gap: 8px;
  padding: 8px;
  align-items: center;
}
.logs-table { flex: 1; min-height: 0; overflow: auto; }
.msg-wrap {
  background: var(--td-bg-color-container);
  border: 1px solid var(--td-border-level-1-color);
  border-left-width: 3px;
  border-radius: 6px;
  padding: 8px 10px;
}
.msg-wrap.lvl-error { border-left-color: var(--td-color-error); }
.msg-wrap.lvl-warn { border-left-color: var(--td-color-warning); }
.msg-wrap.lvl-info { border-left-color: var(--td-color-primary); }
.msg-wrap.lvl-debug { border-left-color: var(--td-color-success); }
.msg {
  margin: 0;
  white-space: pre-wrap;
  word-break: break-word;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  font-size: 12px;
  line-height: 1.5;
  max-width: 100%;
}
.msg.collapsed {
  max-height: 4.5em; /* 大约 3 行 */
  overflow: hidden;
  position: relative;
}
.msg.collapsed::after {
  content: '';
  position: absolute;
  left: 0; right: 0; bottom: 0; height: 1.2em;
  background: linear-gradient(180deg, rgba(0,0,0,0), var(--td-bg-color-container));
}
.msg-actions { margin-top: 4px; display: flex; gap: 8px; }

/* 行级轻微强调（不喧宾夺主） */
:deep(.t-table .row-error td) { background-color: color-mix(in srgb, var(--td-color-error) 6%, transparent); }
:deep(.t-table .row-warn td) { background-color: color-mix(in srgb, var(--td-color-warning) 4%, transparent); }
</style>
