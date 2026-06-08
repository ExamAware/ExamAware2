import { getDate } from "@vuepress/helper/client";
import { useBlogType } from "@vuepress/plugin-blog/client";
import { computed, inject, provide } from "vue";
import { useLang } from "vuepress/client";
export const timelineSymbol = Symbol(__VUEPRESS_DEV__ ? "timeline" : "");
/**
 * Inject timeline
 */
export const useTimeline = () => {
    const timeline = inject(timelineSymbol);
    if (!timeline)
        throw new Error("useTimeline() is called without provider.");
    return timeline;
};
/**
 * Provide timelines
 */
export const setupTimeline = () => {
    const timeline = useBlogType("timeline");
    const pageLang = useLang();
    const timelineItems = computed(() => {
        const timelineItems = [];
        // Filter before sort
        timeline.value.items.forEach(({ info, path }) => {
            const result = getDate(info.date);
            if (result) {
                const year = result.getFullYear();
                if (timelineItems[0]?.year !== year)
                    timelineItems.unshift({ year, items: [] });
                timelineItems[0].items.push({
                    date: result.toLocaleDateString(pageLang.value, {
                        month: "numeric",
                        day: "numeric",
                    }),
                    info,
                    path,
                });
            }
        });
        return {
            ...timeline.value,
            config: timelineItems.reverse(),
        };
    });
    provide(timelineSymbol, timelineItems);
};
//# sourceMappingURL=useTimeline.js.map