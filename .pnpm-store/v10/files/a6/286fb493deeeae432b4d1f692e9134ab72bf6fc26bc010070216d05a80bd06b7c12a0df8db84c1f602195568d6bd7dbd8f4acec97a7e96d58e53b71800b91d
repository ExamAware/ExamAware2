import type { ComputedRef, Ref } from "vue";
import type { PageInfoProps } from "@theme-hope/components/info/PageInfo";
import type { PageCategory, PageTag } from "@theme-hope/utils/info/typings";
import type { ArticleInfoData, AuthorInfo, PageInfoType } from "../../../shared/index.js";
export type AuthorRef = ComputedRef<AuthorInfo[]>;
export declare const useArticleAuthor: (info: Ref<ArticleInfoData>) => AuthorRef;
export type CategoryRef = ComputedRef<PageCategory[]>;
export declare const useArticleCategory: (info: Ref<ArticleInfoData>) => CategoryRef;
export type TagRef = ComputedRef<PageTag[]>;
export declare const useArticleTag: (info: Ref<ArticleInfoData>) => TagRef;
export type DateRef = ComputedRef<Date | null>;
export declare const useArticleDate: (info: Ref<ArticleInfoData>) => DateRef;
export declare const useArticleInfo: (props: {
    info: ArticleInfoData;
    path: string;
}) => {
    info: ComputedRef<PageInfoProps>;
    items: ComputedRef<PageInfoType[] | false | null>;
};
//# sourceMappingURL=useArticleInfo.d.ts.map