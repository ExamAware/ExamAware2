/**
 * 考试材料信息
 */
export interface ExamMaterial {
  /** 材料名称，如"试卷"、"答题卡"、"草稿纸"等 */
  name: string;
  /** 材料数量 */
  quantity: number;
  /** 材料单位，如"张"、"份"、"本"等 */
  unit: string;
}

/**
 * 考试信息
 */
export interface ExamInfo {
  /** 考试名称 */
  name: string;
  /** 考试开始时间 */
  start: string;
  /** 考试结束时间 */
  end: string;
  /** 考试结束前几分钟提醒 */
  alertTime: number;
  /** 考试材料清单 */
  materials?: ExamMaterial[];
}

/**
 * 考试配置
 * Represents the configuration for an exam.
 */
export interface ExamConfig {
  /**
   * The name of the exam.
   */
  examName: string;

  /**
   * A message related to the exam.
   */
  message: string;

  /**
   * An array of information related to the exam.
   */
  examInfos: ExamInfo[];
}
