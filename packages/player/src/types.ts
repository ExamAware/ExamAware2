// Player包的核心类型定义

export interface PlayerConfig {
  /** 考场号 */
  roomNumber: string
  /** 是否启用全屏模式 */
  fullscreen?: boolean
  /** 是否启用时间同步 */
  timeSync?: boolean
  /** 自动刷新间隔（毫秒） */
  refreshInterval?: number
}

export interface PlayerState {
  /** 当前考试索引 */
  currentExamIndex: number
  /** 是否正在加载 */
  loading: boolean
  /** 是否已加载完成 */
  loaded: boolean
  /** 配置错误信息 */
  error: string | null
  /** 配置错误详细信息（可选，便于恢复与诊断） */
  errorDetails?: {
    isValid: boolean
    errors: string[]
    warnings: string[]
  } | null
}

export interface TaskInfo {
  /** 任务ID */
  id: string
  /** 执行时间 */
  executeTime: number
  /** 任务类型 */
  type: 'exam-start' | 'exam-end' | 'exam-alert'
  /** 关联的考试信息 */
  examInfo: any
  /** 任务状态 */
  status: 'pending' | 'completed' | 'failed'
}

export interface PlayerEventHandlers {
  /** 考试开始事件 */
  onExamStart?: (examInfo: any) => void
  /** 考试结束事件 */
  onExamEnd?: (examInfo: any) => void
  /** 考试提醒事件 */
  onExamAlert?: (examInfo: any, alertTime: number) => void
  /** 考试切换事件 */
  onExamSwitch?: (fromExam: any, toExam: any) => void
  /** 错误事件 */
  onError?: (error: string) => void
}
