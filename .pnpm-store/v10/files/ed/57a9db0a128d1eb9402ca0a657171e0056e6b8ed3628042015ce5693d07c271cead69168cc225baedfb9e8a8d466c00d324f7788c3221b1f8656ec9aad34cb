import { FunctionalComponent } from 'vue';

interface BannerAction {
    text: string;
    link: string;
    /**
     * @default "primary"
     */
    type?: "primary" | "default";
}
interface BannerProps {
    /**
     * Banner title
     *
     * 横幅标题
     */
    title: string;
    /**
     * Banner content
     *
     * 横幅内容
     */
    content?: string;
    /**
     * Banner icon
     *
     * 横幅图标
     */
    logo?: string;
    /**
     * Banner background
     *
     * 横幅背景
     */
    background?: string;
    /**
     * Banner font color
     *
     * 横幅字体颜色
     */
    color?: string;
    /**
     * Banner action
     *
     * 横幅操作
     */
    actions?: BannerAction[];
}
declare const VPBanner: FunctionalComponent<BannerProps>;

export { VPBanner as default };
export type { BannerAction, BannerProps };
