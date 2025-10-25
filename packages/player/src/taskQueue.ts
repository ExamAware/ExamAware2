import type { ExamConfig } from '@dsz-examaware/core'
import { parseDateTime } from '@dsz-examaware/core'
import type { TaskInfo, PlayerEventHandlers } from './types'

export type TaskType = 'exam-start' | 'exam-end' | 'exam-alert'

export interface Task {
  id: string
  executeTime: number
  type: TaskType
  examInfo: any
  callback: () => void
  status: 'pending' | 'completed' | 'failed'
}

/**
 * 考试任务队列管理器
 */
export class ExamTaskQueue {
  private tasks: Map<string, Task> = new Map()
  private timeouts: Map<string, NodeJS.Timeout> = new Map()
  private timeProvider: () => number
  private isRunning = false

  constructor(timeProvider: () => number = () => Date.now()) {
    this.timeProvider = timeProvider
  }

  /**
   * 添加任务
   */
  addTask(executeTime: number, type: TaskType, examInfo: any, callback: () => void): string {
    const id = `${type}-${examInfo.name}-${executeTime}`
    const task: Task = {
      id,
      executeTime,
      type,
      examInfo,
      callback,
      status: 'pending'
    }

    this.tasks.set(id, task)

    if (this.isRunning) {
      this.scheduleTask(task)
    }

    return id
  }

  /**
   * 调度单个任务
   */
  private scheduleTask(task: Task) {
    const now = this.timeProvider()
    const delay = task.executeTime - now

    if (delay <= 0) {
      // 任务时间已过，立即执行
      this.executeTask(task)
    } else {
      // 设置定时器
      const timeout = setTimeout(() => {
        this.executeTask(task)
      }, delay)

      this.timeouts.set(task.id, timeout)
    }
  }

  /**
   * 执行任务
   */
  private executeTask(task: Task) {
    try {
      task.callback()
      task.status = 'completed'
    } catch (error) {
      console.error(`任务执行失败: ${task.id}`, error)
      task.status = 'failed'
    }

    // 清理定时器
    const timeout = this.timeouts.get(task.id)
    if (timeout) {
      clearTimeout(timeout)
      this.timeouts.delete(task.id)
    }
  }

  /**
   * 为考试配置创建任务
   */
  createTasksForConfig(config: ExamConfig, eventHandlers: PlayerEventHandlers = {}) {
    this.clear()

    if (!config.examInfos || config.examInfos.length === 0) {
      return
    }

    const now = this.timeProvider()

    config.examInfos.forEach((exam: any) => {
      const startTime = parseDateTime(exam.start).getTime()
      const endTime = parseDateTime(exam.end).getTime()

      // 考试开始任务
      if (startTime > now) {
        this.addTask(startTime, 'exam-start', exam, () => {
          console.log(`考试开始: ${exam.name}`)
          eventHandlers.onExamStart?.(exam)
        })
      }

      // 考试结束任务
      if (endTime > now) {
        this.addTask(endTime, 'exam-end', exam, () => {
          console.log(`考试结束: ${exam.name}`)
          eventHandlers.onExamEnd?.(exam)
        })
      }

      // 考试提醒任务
      if (exam.alertTime && exam.alertTime > 0) {
        const alertTime = endTime - exam.alertTime * 60 * 1000
        if (alertTime > now) {
          this.addTask(alertTime, 'exam-alert', exam, () => {
            console.log(`考试提醒: ${exam.name} 将在 ${exam.alertTime} 分钟后结束`)
            eventHandlers.onExamAlert?.(exam, exam.alertTime)
          })
        }
      }
    })
  }

  /**
   * 启动任务队列
   */
  start() {
    if (this.isRunning) return

    this.isRunning = true

    // 调度所有待执行的任务
    this.tasks.forEach((task) => {
      if (task.status === 'pending') {
        this.scheduleTask(task)
      }
    })
  }

  /**
   * 停止任务队列
   */
  stop() {
    this.isRunning = false

    // 清理所有定时器
    this.timeouts.forEach((timeout) => {
      clearTimeout(timeout)
    })
    this.timeouts.clear()
  }

  /**
   * 清空所有任务
   */
  clear() {
    this.stop()
    this.tasks.clear()
  }

  /**
   * 更新时间提供者
   */
  updateTimeProvider(timeProvider: () => number) {
    this.timeProvider = timeProvider

    if (this.isRunning) {
      // 重新调度所有任务
      this.stop()
      this.start()
    }
  }

  /**
   * 获取任务数量
   */
  getTaskCount(): number {
    return this.tasks.size
  }

  /**
   * 获取任务详情
   */
  getTaskDetails(): TaskInfo[] {
    return Array.from(this.tasks.values()).map((task) => ({
      id: task.id,
      executeTime: task.executeTime,
      type: task.type,
      examInfo: task.examInfo,
      status: task.status
    }))
  }

  /**
   * 获取待执行的任务
   */
  getPendingTasks(): TaskInfo[] {
    return this.getTaskDetails().filter((task) => task.status === 'pending')
  }
}
