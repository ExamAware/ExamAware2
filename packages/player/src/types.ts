import type { Component } from 'vue';
import type { ExamConfig } from '@dsz-examaware/core';

export type ExamInfo = ExamConfig['examInfos'] extends (infer U)[] ? U : any;

// Player包的核心类型定义

export interface PlayerConfig {
  /** 考场号 */
  roomNumber: string;
  /** 是否启用全屏模式 */
  fullscreen?: boolean;
  /** 是否启用时间同步 */
  timeSync?: boolean;
  /** 自动刷新间隔（毫秒） */
  refreshInterval?: number;
}

export interface PlayerState {
  /** 当前考试索引 */
  currentExamIndex: number;
  /** 是否正在加载 */
  loading: boolean;
  /** 是否已加载完成 */
  loaded: boolean;
  /** 配置错误信息 */
  error: string | null;
  /** 配置错误详细信息（可选，便于恢复与诊断） */
  errorDetails?: {
    isValid: boolean;
    errors: string[];
    warnings: string[];
  } | null;
}

export interface TaskInfo {
  /** 任务ID */
  id: string;
  /** 执行时间 */
  executeTime: number;
  /** 任务类型 */
  type: 'exam-start' | 'exam-end' | 'exam-alert';
  /** 关联的考试信息 */
  examInfo: ExamInfo;
  /** 任务状态 */
  status: 'pending' | 'completed' | 'failed';
}

export interface PlayerEventHandlers {
  /** 考试开始事件 */
  onExamStart?: (examInfo: ExamInfo) => void;
  /** 考试结束事件 */
  onExamEnd?: (examInfo: ExamInfo) => void;
  /** 考试提醒事件 */
  onExamAlert?: (examInfo: ExamInfo, alertTime: number) => void;
  /** 考试切换事件 */
  onExamSwitch?: (fromExam: ExamInfo | undefined, toExam: ExamInfo | undefined) => void;
  /** 错误事件 */
  onError?: (error: string) => void;
}

/**
 * 播放器工具栏按钮定义
 */
export interface PlayerToolbarItem {
  /** 唯一标识 */
  id: string;
  /** 展示文本 */
  label: string;
  /** 图标组件（可选） */
  icon?: Component;
  /** 自定义渲染组件（可选，优先级高于 icon + label 模式） */
  component?: Component;
  /** 传入自定义组件的属性 */
  componentProps?: Record<string, any>;
  /** 按钮顺序，值越小越靠前，默认 100 */
  order?: number;
  /** 鼠标悬停提示 */
  tooltip?: string;
  /** 附加 class 名，便于定制样式 */
  className?: string;
  /** 是否禁用 */
  disabled?: boolean;
  /** 点击回调 */
  onClick?: (event: MouseEvent) => void | Promise<void>;
}

/**
 * 播放器工具栏注册器接口
 */
export interface PlayerToolbarRegistry {
  /** 当前注册的工具项（已排序） */
  readonly tools: import('vue').ShallowRef<readonly PlayerToolbarItem[]>;
  /** 注册工具项，返回销毁函数 */
  register(item: PlayerToolbarItem): () => void;
  /** 移除工具项 */
  unregister(id: string): void;
  /** 清空所有工具项 */
  clear(): void;
}
