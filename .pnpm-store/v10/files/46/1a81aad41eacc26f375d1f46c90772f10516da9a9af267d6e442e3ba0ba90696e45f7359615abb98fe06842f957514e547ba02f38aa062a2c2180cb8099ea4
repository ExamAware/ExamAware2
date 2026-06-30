import * as vue from 'vue';
import { Ref } from 'vue';

declare const Notice: vue.DefineComponent<{}, () => vue.VNode<vue.RendererNode, vue.RendererElement, {
    [key: string]: any;
}>, {}, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {}, string, vue.PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, vue.ComponentProvideOptions, true, {}, any>;

interface NoticeActionOption {
    /**
     * Action text
     *
     * 操作文字
     */
    text: string;
    /**
     * Action link
     *
     * 操作链接
     */
    link?: string;
    /**
     * Action type
     *
     * 操作类型
     *
     * @default "default"
     */
    type?: 'default' | 'primary';
}
interface NoticeItemOptions {
    /**
     * Notice title
     *
     * 通知标题
     */
    title: string;
    /**
     * Notice content type
     *
     * 通知内容类型
     *
     * @default 'html'
     */
    contentType?: 'html' | 'markdown';
    /**
     * Notice content file absolute path, file format should be `.md` or `.html`.
     * Prioritize using the file content as `content`.
     *
     * 通知内容文件绝对路径, 文件格式支持 `.md` 或 `.html`。
     * 优先使用文件内容作为 `content`。
     *
     * @example '/path/to/notice.md'
     */
    contentFile?: string;
    /**
     * Notice content
     *
     * 通知内容
     */
    content?: string;
    /**
     * Notice key
     *
     * 通知键值
     *
     * @description Used to identify and store the notice status
     *
     * 用于标识和存储通知的状态
     */
    key?: string;
    /**
     * Whether show notice only once or show it in every visit
     *
     * 是否只显示一次通知
     *
     * @default false
     */
    showOnce?: boolean;
    /**
     * Whether the notice shall be confirmed
     *
     * 通知是否需要确认
     *
     * @default false
     */
    confirm?: boolean;
    /**
     * Whether the notice should appear fullscreen
     *
     * 通知是否应该全屏显示
     *
     * @default false
     */
    fullscreen?: boolean;
    /**
     * Notice actions
     *
     * 通知操作
     */
    actions?: NoticeActionOption[];
}
interface NoticePathOptions extends NoticeItemOptions {
    /**
     * Path prefix to match
     *
     * 路径前缀匹配
     */
    path: string;
}
interface NoticeMatchOptions extends NoticeItemOptions {
    /**
     * A regexp matching notice path
     *
     * 匹配通知路径的正则表达式
     */
    match: RegExp;
}
type NoticeAttrOptions = (Omit<NoticeMatchOptions, 'contentFile' | 'contentType' | 'key' | 'match'> & {
    noticeKey?: string;
    match: string;
}) | (Omit<NoticePathOptions, 'contentFile' | 'contentType' | 'key'> & {
    noticeKey?: string;
});

type NoticeOptionsRef = Ref<NoticeAttrOptions[]>;
declare const noticeOptions: NoticeOptionsRef;
/**
 * Use notice options
 *
 * 使用通知选项
 *
 * @returns Notice options ref / 通知选项引用
 */
declare const useNoticeOptions: () => NoticeOptionsRef;

export { Notice, noticeOptions, useNoticeOptions };
export type { NoticeOptionsRef };
