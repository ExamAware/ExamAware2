import * as vue from 'vue';
import { PropType, VNode, SlotsType } from 'vue';
import { RequiredSlot } from '@vuepress/helper/client';
import { ExactLocaleConfig } from '@vuepress/helper';

interface MarkdownPreviewPluginLocaleData {
    /**
     * Toggle code button text
     *
     * 切换代码按钮文字
     */
    toggle: string;
}
type MarkdownPreviewPluginLocaleConfig = ExactLocaleConfig<MarkdownPreviewPluginLocaleData>;

interface VPPreviewProps {
    /**
     * Markdown preview title
     *
     * Markdown preview 标题
     */
    title?: string;
    /**
     * Markdown preview locales
     *
     * Markdown preview 本地化配置
     */
    locales?: MarkdownPreviewPluginLocaleConfig;
}
declare const _default: vue.DefineComponent<vue.ExtractPropTypes<{
    /**
     * Markdown preview title
     *
     * Markdown preview 标题
     */
    title: StringConstructor;
    /**
     * Markdown preview locales
     *
     * Markdown preview 本地化配置
     */
    locales: {
        type: PropType<MarkdownPreviewPluginLocaleConfig>;
        default: () => {};
    };
}>, () => VNode, {}, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {}, string, vue.PublicProps, Readonly<vue.ExtractPropTypes<{
    /**
     * Markdown preview title
     *
     * Markdown preview 标题
     */
    title: StringConstructor;
    /**
     * Markdown preview locales
     *
     * Markdown preview 本地化配置
     */
    locales: {
        type: PropType<MarkdownPreviewPluginLocaleConfig>;
        default: () => {};
    };
}>> & Readonly<{}>, {
    locales: MarkdownPreviewPluginLocaleConfig;
}, SlotsType<{
    content: RequiredSlot;
    code: RequiredSlot;
}>, {}, {}, string, vue.ComponentProvideOptions, true, {}, any>;

export { _default as VPPreview };
export type { VPPreviewProps };
