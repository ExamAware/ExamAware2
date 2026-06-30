/**
 * Message utility class for displaying toast messages
 *
 * 用于显示提示消息的消息工具类
 */
export declare class Message {
    private elements;
    constructor();
    /**
     * Get the message container element
     *
     * 获取消息容器元素
     *
     * @returns Message container element / 消息容器元素
     */
    static get containerElement(): HTMLElement;
    /**
     * Get message element by ID
     *
     * 根据 ID 获取消息元素
     *
     * @param messageId - Message ID / 消息 ID
     *
     * @returns Message element / 消息元素
     */
    getElement(messageId: number): HTMLDivElement;
    /**
     * Pop a new message
     *
     * 弹出新消息
     *
     * @param html - Message HTML content / 消息 HTML 内容
     * @param duration - Duration to display in milliseconds / 显示持续时间（毫秒）
     * @param clickToClose - Whether to close on click / 是否点击关闭
     *
     * @returns Message ID / 消息 ID
     */
    pop(html: string, duration?: number, clickToClose?: boolean): number;
    /**
     * Close message by ID or close all messages
     *
     * 根据 ID 关闭消息或关闭所有消息
     *
     * @param messageId - Message ID to close, if not provided, close all / 要关闭的消息 ID，如果未提供则关闭所有
     */
    close(messageId?: number): void;
    /**
     * Destroy the message instance
     *
     * 销毁消息实例
     */
    destroy(): void;
}
