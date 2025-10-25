import { v4 as uuidv4 } from 'uuid'

interface Task {
  id: string
  executeTime: number
  taskFunction: () => void
}

export class TaskQueue {
  private taskQueue: Task[] = []
  private currentTimeoutId: number | null = null
  private getTimeFunction: () => number

  constructor(getTimeFunction?: () => number) {
    // 允许注入自定义的时间获取函数，如果没有提供则使用标准的 Date.now()
    this.getTimeFunction = getTimeFunction || (() => Date.now())
  }

  // 更新时间获取函数
  updateTimeFunction(getTimeFunction: () => number) {
    this.getTimeFunction = getTimeFunction
    // 重新调度任务以适应新的时间函数
    this.scheduleNextTask()
  }

  addTask(executeTime: number, taskFunction: () => void) {
    const task: Task = {
      id: uuidv4(),
      executeTime,
      taskFunction
    }
    this.taskQueue.push(task)
    this.taskQueue.sort((a, b) => a.executeTime - b.executeTime)

    // 每次添加任务后，重新设置定时器
    this.scheduleNextTask()
  }

  private scheduleNextTask() {
    // 如果当前有定时器，清除它
    if (this.currentTimeoutId !== null) {
      clearTimeout(this.currentTimeoutId)
      this.currentTimeoutId = null
    }

    // 如果队列为空，则不需要设置定时器
    if (this.taskQueue.length === 0) {
      return
    }

    const now = this.getTimeFunction()
    const nextTask = this.taskQueue[0]
    const delay = Math.max(nextTask.executeTime - now, 0)

    // 设置定时器，在队首任务的执行时间触发
    this.currentTimeoutId = window.setTimeout(() => {
      this.executeNextTask()
    }, delay)
  }

  private executeNextTask() {
    const task = this.taskQueue.shift()
    if (task) {
      task.taskFunction()
    }

    // 执行完当前任务后，调度下一个任务
    this.scheduleNextTask()
  }

  stop() {
    if (this.currentTimeoutId !== null) {
      clearTimeout(this.currentTimeoutId)
      this.currentTimeoutId = null
    }
    this.taskQueue = []
  }
  clear() {
    this.taskQueue = []
    if (this.currentTimeoutId !== null) {
      clearTimeout(this.currentTimeoutId)
      this.currentTimeoutId = null
    }
  }

  // 获取任务队列信息（用于调试）
  getTaskCount(): number {
    return this.taskQueue.length
  }

  // 获取任务详情（用于调试）
  getTaskDetails() {
    return this.taskQueue.map((task) => ({
      id: task.id,
      executeTime: task.executeTime,
      executeTimeString: new Date(task.executeTime).toLocaleString(),
      hasFunction: typeof task.taskFunction === 'function'
    }))
  }
}
