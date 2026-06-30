/**
 * Logger utils
 *
 * 日志工具类
 */
export declare class Logger {
    /**
     * Plugin/Theme name
     *
     * 插件/主题名称
     */
    private readonly name;
    constructor(
    /**
     * Plugin/Theme name
     *
     * 插件/主题名称
     */
    name?: string);
    private init;
    /**
     * Create a loading spinner with text
     *
     * 创建带文本的加载旋转器
     *
     * @param msg - Loading message / 加载信息
     *
     * @returns Loading spinner control object / 加载旋转器控制对象
     */
    load(msg: string): {
        succeed: (text?: string) => void;
        fail: (text?: string) => void;
    };
    /**
     * Log info msg
     *
     * 记录信息消息
     *
     * @param text - Hint text / 提示文本
     * @param args - Additional arguments / 额外参数
     */
    info(text?: string, ...args: unknown[]): void;
    /**
     * Log success msg
     *
     * 记录成功消息
     *
     * @param text - Success text / 成功文本
     * @param args - Additional arguments / 额外参数
     */
    succeed(text?: string, ...args: unknown[]): void;
    /**
     * Log warning msg
     *
     * 记录警告消息
     *
     * @param text - Warning text / 警告文本
     * @param args - Additional arguments / 额外参数
     */
    warn(text?: string, ...args: unknown[]): void;
    /**
     * Log error msg
     *
     * 记录错误消息
     *
     * @param text - Error text / 错误文本
     * @param args - Additional arguments / 额外参数
     */
    error(text?: string, ...args: unknown[]): void;
}
