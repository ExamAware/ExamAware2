declare module '@dsz-examaware/core' {
  // 基础类型：直接从 core 源码类型导出，供开发期类型推断
  export type { ExamMaterial, ExamInfo, ExamConfig } from '../../core/src/types';

  // 运行时函数的类型声明（用于类型检查）
  export function validateExamConfig(config: ExamConfig): boolean;
  export function hasExamTimeOverlap(config: ExamConfig): boolean;
  export function getSortedExamConfig(config: ExamConfig): ExamConfig;
  export function parseDateTime(dateStr: string): Date;
}
