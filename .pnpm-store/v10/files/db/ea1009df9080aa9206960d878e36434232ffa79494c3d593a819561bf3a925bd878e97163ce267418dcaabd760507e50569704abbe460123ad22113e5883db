import { getDate } from "@vuepress/helper/client";
import { getReadingTimeLocale, useReadingTimeLocaleConfig, } from "@vuepress/plugin-reading-time/client";
import { computed, toRef } from "vue";
import { useBlogOptions } from "@theme-hope/composables/blog/useBlogOptions";
import { useCategoryMap } from "@theme-hope/composables/blog/useCategoryMap";
import { useTagMap } from "@theme-hope/composables/blog/useTagMap";
import { useThemeLocale } from "@theme-hope/composables/useTheme";
import { getAuthor, getCategory, getTag } from "../../../shared/index.js";
export const useArticleAuthor = (info) => {
    const themeLocale = useThemeLocale();
    return computed(() => {
        const { author } = info.value;
        if (author)
            return getAuthor(author);
        if (author === false)
            return [];
        return getAuthor(themeLocale.value.author, false);
    });
};
export const useArticleCategory = (info) => {
    const categoryMap = useCategoryMap();
    return computed(() => getCategory(info.value.category).map((name) => ({
        name,
        path: categoryMap.value.map[name].path,
    })));
};
export const useArticleTag = (info) => {
    const tagMap = useTagMap();
    return computed(() => getTag(info.value.tag).map((name) => ({
        name,
        path: tagMap.value.map[name].path,
    })));
};
export const useArticleDate = (info) => computed(() => getDate(info.value.date));
export const useArticleInfo = (props) => {
    const articleInfo = toRef(props, "info");
    const blogOptions = useBlogOptions();
    const author = useArticleAuthor(articleInfo);
    const category = useArticleCategory(articleInfo);
    const tag = useArticleTag(articleInfo);
    const date = useArticleDate(articleInfo);
    const readingTimeLocaleConfig = useReadingTimeLocaleConfig();
    const info = computed(() => ({
        author: author.value,
        category: category.value,
        date: date.value,
        tag: tag.value,
        isOriginal: articleInfo.value.isOriginal ?? false,
        readingTime: articleInfo.value.readingTime ?? null,
        readingTimeLocale: articleInfo.value.readingTime && readingTimeLocaleConfig.value
            ? getReadingTimeLocale(articleInfo.value.readingTime, readingTimeLocaleConfig.value)
            : null,
        pageview: props.path,
    }));
    const items = computed(() => blogOptions.value.articleInfo ?? null);
    return { info, items };
};
//# sourceMappingURL=useArticleInfo.js.map