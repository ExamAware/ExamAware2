import type { ExamConfig, ExamInfo } from '@examaware/core'
import { getSortedExamConfig, parseDateTime } from '@examaware/core'

export interface FormattedExamInfo {
  index: number
  name: string
  date: string
  timeRange: string
  status: 'pending' | 'inProgress' | 'completed'
  statusText: '未开始' | '进行中' | '已结束'
  rawData: ExamInfo
}

export interface ExamStatus {
  status: 'pending' | 'inProgress' | 'completed' | 'unknown'
  message: string
  timeRemaining?: number
  progress?: number
}

/**
 * 数据处理工具类
 */
export class ExamDataProcessor {
  /**
   * 格式化考试数据用于表格显示
   */
  static formatExamInfos(
    config: ExamConfig | null,
    currentTime: number
  ): FormattedExamInfo[] {
    if (!config?.examInfos) return []

    // 使用排序后的配置确保考试按时间顺序显示
    const sortedConfig = getSortedExamConfig(config)
    let lastDisplayedDate = ''

    return sortedConfig.examInfos.map((exam, index) => {
      const startDate = parseDateTime(exam.start)
      const endDate = parseDateTime(exam.end)
      const now = currentTime

      // 判断考试状态
      let status: 'pending' | 'inProgress' | 'completed' = 'pending'
      let statusText: '未开始' | '进行中' | '已结束' = '未开始'

      if (now > endDate.getTime()) {
        status = 'completed'
        statusText = '已结束'
      } else if (now >= startDate.getTime()) {
        status = 'inProgress'
        statusText = '进行中'
      }

      // 格式化日期
      const dateString = startDate.toLocaleDateString('zh-CN', {
        month: '2-digit',
        day: '2-digit'
      })

      // 决定是否显示日期：只有当前考试的日期与前一个考试不同时才显示
      let displayDate = ''
      if (dateString !== lastDisplayedDate) {
        displayDate = dateString
        lastDisplayedDate = dateString
      }

      return {
        index,
        name: exam.name,
        date: displayDate, // 可能为空字符串
        timeRange: `${this.formatHourMinute(startDate)} ~ ${this.formatHourMinute(endDate)}`,
        status,
        statusText,
        rawData: exam,
      }
    })
  }

  /**
   * 获取当前考试状态
   */
  static getExamStatus(
    exam: ExamInfo | null,
    currentTime: number
  ): ExamStatus {
    if (!exam) {
      return {
        status: 'unknown',
        message: '暂无考试安排'
      }
    }

    const startTime = parseDateTime(exam.start).getTime()
    const endTime = parseDateTime(exam.end).getTime()
    const now = currentTime

    if (now < startTime) {
      const timeRemaining = startTime - now
      return {
        status: 'pending',
        message: `将于 ${new Date(startTime).toLocaleString()} 开始`,
        timeRemaining
      }
    } else if (now >= startTime && now < endTime) {
      const timeRemaining = endTime - now
      const totalDuration = endTime - startTime
      const elapsed = now - startTime
      const progress = Math.min(elapsed / totalDuration, 1)

      return {
        status: 'inProgress',
        message: `将于 ${new Date(endTime).toLocaleString()} 结束`,
        timeRemaining,
        progress
      }
    } else {
      return {
        status: 'completed',
        message: '已结束'
      }
    }
  }

  /**
   * 计算剩余时间显示文本
   */
  static getRemainingTimeText(
    exam: ExamInfo | null,
    currentTime: number
  ): string {
    if (!exam) return '00:00'

    const startTime = parseDateTime(exam.start).getTime()
    const endTime = parseDateTime(exam.end).getTime()
    const now = currentTime

    if (now < startTime) {
      // 考试未开始，显示距离开始的时间（纯时长）
      const diff = Math.max(0, startTime - now)
      return this.formatDuration(diff)
    } else if (now >= startTime && now < endTime) {
      // 考试进行中，显示剩余时间（纯时长）
      const diff = Math.max(0, endTime - now)
      return this.formatDuration(diff)
    } else {
      return '00:00'
    }
  }

  /**
   * 获取考试时间范围文本
   */
  static getExamTimeRange(exam: ExamInfo | null): string {
    if (!exam) return '暂无安排'

    const start = parseDateTime(exam.start)
    const end = parseDateTime(exam.end)

    return `${this.formatHourMinute(start)} - ${this.formatHourMinute(end)}`
  }

  /**
   * 格式化时间为 HH:MM 格式
   */
  static formatHourMinute(date: Date): string {
    return date.toLocaleTimeString('zh-CN', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    })
  }

  /**
   * 格式化时间差
   */
  static formatTimeDifference(diff: number, prefix: string): string {
    const minutes = Math.floor(diff / (1000 * 60))
    const hours = Math.floor(minutes / 60)

    if (hours > 0) {
      return `${prefix} ${hours}小时${minutes % 60}分钟`
    } else if (minutes > 0) {
      return `${prefix} ${minutes}分钟`
    } else {
      return prefix === '剩余' ? '即将结束' : '即将开始'
    }
  }

  /**
   * 将毫秒时长格式化为 H:MM:SS 或 MM:SS（小于1小时）
   * 示例：1:11:45 / 12:34 / 05:02
   */
  static formatDuration(ms: number): string {
    const totalSeconds = Math.max(0, Math.floor(ms / 1000))
    const hours = Math.floor(totalSeconds / 3600)
    const minutes = Math.floor((totalSeconds % 3600) / 60)
    const seconds = totalSeconds % 60

    const mm = String(minutes).padStart(2, '0')
    const ss = String(seconds).padStart(2, '0')

    if (hours > 0) {
      return `${hours}:${mm}:${ss}`
    }
    return `${mm}:${ss}`
  }

  /**
   * 格式化当前时间
   */
  static formatCurrentTime(timestamp: number): string {
    const time = new Date(timestamp)
    return time.toLocaleTimeString('zh-CN', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false
    })
  }

  /**
   * 获取状态对应的主题色
   */
  static getStatusTheme(status: string): string {
    const statusThemeMap: Record<string, string> = {
      pending: 'primary',
      inProgress: 'success',
      completed: 'default'
    }
    return statusThemeMap[status] || 'default'
  }

  /**
   * 智能选择当前考试索引
   */
  static getCurrentExamIndex(
    config: ExamConfig | null,
    currentTime: number
  ): number {
    if (!config?.examInfos || config.examInfos.length === 0) return 0

    const sortedConfig = getSortedExamConfig(config)
    const sortedExams = sortedConfig.examInfos
    const now = currentTime

    // 第一步：寻找正在进行的考试（最高优先级）
    for (let i = 0; i < sortedExams.length; i++) {
      const exam = sortedExams[i]
      const startTime = parseDateTime(exam.start).getTime()
      const endTime = parseDateTime(exam.end).getTime()

      if (now >= startTime && now < endTime) {
        return i
      }
    }

    // 第二步：如果没有正在进行的考试，找最近的未开始考试
    for (let i = 0; i < sortedExams.length; i++) {
      const exam = sortedExams[i]
      const startTime = parseDateTime(exam.start).getTime()

      if (now < startTime) {
        return i
      }
    }

    // 第三步：如果所有考试都已结束，显示最后一场考试
    return Math.max(0, sortedExams.length - 1)
  }

  /**
   * 验证考试配置并给出详细反馈
   */
  static validateConfigWithDetails(config: ExamConfig): {
    isValid: boolean
    errors: string[]
    warnings: string[]
  } {
    const errors: string[] = []
    const warnings: string[] = []

    if (!config) {
      errors.push('配置对象为空')
      return { isValid: false, errors, warnings }
    }

    if (!config.examName || config.examName.trim() === '') {
      errors.push('考试名称不能为空')
    }

    if (!config.examInfos || !Array.isArray(config.examInfos)) {
      errors.push('考试信息列表无效')
      return { isValid: false, errors, warnings }
    }

    if (config.examInfos.length === 0) {
      errors.push('至少需要一场考试')
      return { isValid: false, errors, warnings }
    }

    // 验证每场考试
    config.examInfos.forEach((exam, index) => {
      if (!exam.name || exam.name.trim() === '') {
        errors.push(`第${index + 1}场考试名称不能为空`)
      }

      try {
        const start = parseDateTime(exam.start)
        const end = parseDateTime(exam.end)

        if (start >= end) {
          errors.push(`第${index + 1}场考试：开始时间必须早于结束时间`)
        }
      } catch {
        errors.push(`第${index + 1}场考试：时间格式无效`)
      }

      if (exam.alertTime && (exam.alertTime < 0 || exam.alertTime > 300)) {
        warnings.push(`第${index + 1}场考试：提醒时间建议在0-300分钟之间`)
      }
    })

    return {
      isValid: errors.length === 0,
      errors,
      warnings
    }
  }
}
