import type { Article } from "@vuepress/plugin-blog/client";
import type { ComputedRef, InjectionKey } from "vue";
import type { ArticleInfoData } from "../../../shared/index.js";
export interface TimelineItem {
    year: number;
    items: {
        date: string;
        path: string;
        info: ArticleInfoData;
    }[];
}
export type TimelineRef = ComputedRef<{
    path: string;
    config: TimelineItem[];
    items: Article<ArticleInfoData>[];
}>;
export declare const timelineSymbol: InjectionKey<TimelineRef>;
/**
 * Inject timeline
 */
export declare const useTimeline: () => TimelineRef;
/**
 * Provide timelines
 */
export declare const setupTimeline: () => void;
//# sourceMappingURL=useTimeline.d.ts.map