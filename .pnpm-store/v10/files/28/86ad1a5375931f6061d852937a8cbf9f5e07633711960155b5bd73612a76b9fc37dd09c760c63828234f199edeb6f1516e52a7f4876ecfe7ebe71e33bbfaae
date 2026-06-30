import { dateSorter } from "@vuepress/helper";
export const getRecentUpdatedArticles = ({ path = "/recent-updated/", locales = {}, }) => ({
    key: "recentUpdated",
    filter: ({ frontmatter, filePathRelative, }) => 
    // Declaring this is an article
    frontmatter.article ??
        // Generated from markdown files and not homepage
        (Boolean(filePathRelative) && !frontmatter.home),
    sorter: (pageA, pageB) => dateSorter(pageA.data.git?.updatedTime, pageB.data.git?.updatedTime),
    path,
    layout: "Blog",
    frontmatter: (localePath) => ({
        title: locales[localePath] ?? "Recent Updated",
        dir: { index: false },
        index: false,
        feed: false,
        sitemap: false,
    }),
});
//# sourceMappingURL=getRecentUpdatedArticles.js.map