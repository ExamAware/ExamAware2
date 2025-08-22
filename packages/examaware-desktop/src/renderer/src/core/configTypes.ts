/**
 * 考试材料信息
 */
export interface ExamMaterial {
  /** 材料名称，如"试卷"、"答题卡"、"草稿纸"等 */
  name: string
  /** 材料数量 */
  quantity: number
  /** 材料单位，如"张"、"份"、"本"等 */
  unit: string
}

export interface ExamInfo {
  name: string
  start: string
  end: string
  alertTime: number // 考试结束前几分钟提醒
  /** 考试材料清单 */
  materials?: ExamMaterial[]
}

/**
 * Represents the configuration for an exam.
 */
export interface ExamConfig {
  /**
   * The name of the exam.
   */
  examName: string

  /**
   * A message related to the exam.
   */
  message: string

  /**
   * An array of information related to the exam.
   */
  examInfos: ExamInfo[]
}
