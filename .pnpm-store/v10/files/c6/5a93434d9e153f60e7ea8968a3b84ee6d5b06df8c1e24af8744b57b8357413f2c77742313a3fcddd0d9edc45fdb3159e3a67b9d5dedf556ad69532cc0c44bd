import noopComponent from "@vuepress/helper/noopComponent";
import { isSupported } from "@vuepress/plugin-comment/pageview";
import { defineComponent, h, resolveComponent } from "vue";
import AuthorInfo from "@theme-hope/components/info/AuthorInfo";
import CategoryInfo from "@theme-hope/components/info/CategoryInfo";
import DateInfo from "@theme-hope/components/info/DateInfo";
import OriginalInfo from "@theme-hope/components/info/OriginalInfo";
import PageViewInfo from "@theme-hope/components/info/PageViewInfo";
import ReadingTimeInfo from "@theme-hope/components/info/ReadingTimeInfo";
import TagInfo from "@theme-hope/components/info/TagInfo";
import WordInfo from "@theme-hope/components/info/WordInfo";
import { usePure } from "@theme-hope/composables/usePure";
import "balloon-css/balloon.css";
import "../../styles/info/page-info.scss";
export default defineComponent({
    name: "PageInfo",
    components: {
        AuthorInfo,
        CategoryInfo,
        DateInfo,
        OriginalInfo,
        PageViewInfo: isSupported ? PageViewInfo : noopComponent,
        ReadingTimeInfo: __VP_READING_TIME__ ? ReadingTimeInfo : noopComponent,
        TagInfo,
        WordInfo: __VP_READING_TIME__ ? WordInfo : noopComponent,
    },
    props: {
        /**
         * Article information to display
         *
         * 待展示的文章信息
         */
        items: [Boolean, Array],
        /**
         * Article information
         *
         * 文章信息配置
         */
        info: {
            type: Object,
            required: true,
        },
    },
    setup(props) {
        const isPure = usePure();
        return () => {
            const items = props.items ?? [
                "Author",
                "Original",
                "Date",
                "PageView",
                "ReadingTime",
                "Category",
                "Tag",
            ];
            return items
                ? h("div", { class: "page-info" }, items.map((item) => h(resolveComponent(`${item}Info`), {
                    ...props.info,
                    isPure: isPure.value,
                })))
                : null;
        };
    },
});
//# sourceMappingURL=PageInfo.js.map