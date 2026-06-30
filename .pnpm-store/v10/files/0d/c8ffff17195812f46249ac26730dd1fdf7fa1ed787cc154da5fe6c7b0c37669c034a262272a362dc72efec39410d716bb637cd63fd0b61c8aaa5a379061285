/* eslint-disable no-console */
import { colors, ora } from 'vuepress/utils';
/**
 * Logger utils
 *
 * 日志工具类
 */
export class Logger {
    name;
    constructor(
    /**
     * Plugin/Theme name
     *
     * 插件/主题名称
     */
    name = '') {
        this.name = name;
    }
    init(text) {
        return ora({
            prefixText: colors.blue(`${this.name}: `) || '',
            text,
        });
    }
    /**
     * Create a loading spinner with text
     *
     * 创建带文本的加载旋转器
     *
     * @param msg - Loading message / 加载信息
     *
     * @returns Loading spinner control object / 加载旋转器控制对象
     */
    load(msg) {
        const instance = this.init(msg);
        return {
            succeed: (text) => instance.succeed(text),
            fail: (text) => instance.succeed(text),
        };
    }
    /**
     * Log info msg
     *
     * 记录信息消息
     *
     * @param text - Hint text / 提示文本
     * @param args - Additional arguments / 额外参数
     */
    info(text = '', ...args) {
        this.init(colors.blue(text)).info();
        if (args.length)
            console.info(...args);
    }
    /**
     * Log success msg
     *
     * 记录成功消息
     *
     * @param text - Success text / 成功文本
     * @param args - Additional arguments / 额外参数
     */
    succeed(text = '', ...args) {
        this.init(colors.green(text)).succeed();
        if (args.length)
            console.log(...args);
    }
    /**
     * Log warning msg
     *
     * 记录警告消息
     *
     * @param text - Warning text / 警告文本
     * @param args - Additional arguments / 额外参数
     */
    warn(text = '', ...args) {
        this.init(colors.yellow(text)).warn();
        if (args.length)
            console.warn(...args);
    }
    /**
     * Log error msg
     *
     * 记录错误消息
     *
     * @param text - Error text / 错误文本
     * @param args - Additional arguments / 额外参数
     */
    error(text = '', ...args) {
        this.init(colors.red(text)).fail();
        if (args.length)
            console.error(...args);
    }
}
