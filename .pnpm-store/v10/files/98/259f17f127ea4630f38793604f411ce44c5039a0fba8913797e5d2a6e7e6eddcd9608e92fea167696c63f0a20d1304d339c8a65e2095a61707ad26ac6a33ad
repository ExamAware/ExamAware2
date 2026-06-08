import * as _vuepress_helper_client from '@vuepress/helper/client';
import * as vue from 'vue';
import { PropType, VNode, SlotsType } from 'vue';

interface TabProps extends Record<string, unknown> {
    id: string;
}
declare const Tabs: vue.DefineComponent<vue.ExtractPropTypes<{
    /**
     * Active tab index
     *
     * 激活的标签页序号
     */
    active: {
        type: NumberConstructor;
        default: number;
    };
    /**
     * Tab data
     *
     * 标签页数据
     */
    data: {
        type: PropType<TabProps[]>;
        required: true;
    };
    /**
     * Tab id
     *
     * 标签页 id
     */
    tabId: StringConstructor;
}>, () => VNode | null, {}, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {}, string, vue.PublicProps, Readonly<vue.ExtractPropTypes<{
    /**
     * Active tab index
     *
     * 激活的标签页序号
     */
    active: {
        type: NumberConstructor;
        default: number;
    };
    /**
     * Tab data
     *
     * 标签页数据
     */
    data: {
        type: PropType<TabProps[]>;
        required: true;
    };
    /**
     * Tab id
     *
     * 标签页 id
     */
    tabId: StringConstructor;
}>> & Readonly<{}>, {
    active: number;
}, SlotsType<{
    [slot: `title${number}`]: (props: {
        value: string;
        isActive: boolean;
    }) => _vuepress_helper_client.RequiredSlotContent;
    [slot: `tab${number}`]: (props: {
        value: string;
        isActive: boolean;
    }) => _vuepress_helper_client.RequiredSlotContent;
}>, {}, {}, string, vue.ComponentProvideOptions, true, {}, any>;

export { Tabs };
export type { TabProps };
