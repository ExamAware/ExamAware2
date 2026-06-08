import * as vue from 'vue';
import { PropType, VNode } from 'vue';
import Artplayer, { Option } from 'artplayer';

type ArtPlayerOptions = Partial<Omit<Option, "container" | "url" | "type" | "customType" | "plugins" | "contextmenu" | "controls" | "layers" | "settings">>;

declare const _default: vue.DefineComponent<vue.ExtractPropTypes<{
    /**
     * Video Source URL
     *
     * 视频源文件地址
     */
    src: {
        type: StringConstructor;
        required: true;
    };
    /**
     * Video Type
     *
     * 视频类型
     */
    type: StringConstructor;
    /**
     * Video poster
     *
     * 视频封面
     */
    poster: StringConstructor;
    /**
     * Video title
     *
     * 视频标题
     */
    title: StringConstructor;
    /**
     * Component width
     *
     * 组件宽度
     */
    width: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    /**
     * Component height
     *
     * 组件高度
     */
    height: (StringConstructor | NumberConstructor)[];
    /**
     * Component width / height ratio
     *
     * 组件长宽比
     */
    ratio: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    /**
     * ArtPlayer config
     *
     * ArtPlayer 配置
     */
    config: PropType<Omit<ArtPlayerOptions, "container">>;
    /**
     * Customize Artplayer
     *
     * 对 Artplayer 进行自定义
     */
    customPlayer: PropType<(player: Artplayer) => Artplayer | void | Promise<Artplayer> | Promise<void>>;
}>, () => (VNode | null)[], {}, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {}, string, vue.PublicProps, Readonly<vue.ExtractPropTypes<{
    /**
     * Video Source URL
     *
     * 视频源文件地址
     */
    src: {
        type: StringConstructor;
        required: true;
    };
    /**
     * Video Type
     *
     * 视频类型
     */
    type: StringConstructor;
    /**
     * Video poster
     *
     * 视频封面
     */
    poster: StringConstructor;
    /**
     * Video title
     *
     * 视频标题
     */
    title: StringConstructor;
    /**
     * Component width
     *
     * 组件宽度
     */
    width: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    /**
     * Component height
     *
     * 组件高度
     */
    height: (StringConstructor | NumberConstructor)[];
    /**
     * Component width / height ratio
     *
     * 组件长宽比
     */
    ratio: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    /**
     * ArtPlayer config
     *
     * ArtPlayer 配置
     */
    config: PropType<Omit<ArtPlayerOptions, "container">>;
    /**
     * Customize Artplayer
     *
     * 对 Artplayer 进行自定义
     */
    customPlayer: PropType<(player: Artplayer) => Artplayer | void | Promise<Artplayer> | Promise<void>>;
}>> & Readonly<{}>, {
    width: string | number;
    ratio: string | number;
}, {}, {}, {}, string, vue.ComponentProvideOptions, true, {}, any>;

export { _default as default };
