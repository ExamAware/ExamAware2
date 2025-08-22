import { MessagePlugin } from 'tdesign-vue-next'

/**
 * 消息提示服务
 */
export class MessageService {
  /**
   * 显示成功消息
   */
  static success(message: string): void {
    MessagePlugin.success(message)
  }

  /**
   * 显示错误消息
   */
  static error(message: string): void {
    MessagePlugin.error(message)
  }

  /**
   * 显示警告消息
   */
  static warning(message: string): void {
    MessagePlugin.warning(message)
  }

  /**
   * 显示信息消息
   */
  static info(message: string): void {
    MessagePlugin.info(message)
  }

  /**
   * 显示加载中消息
   */
  static loading(message: string): any {
    return MessagePlugin.loading(message)
  }
}
