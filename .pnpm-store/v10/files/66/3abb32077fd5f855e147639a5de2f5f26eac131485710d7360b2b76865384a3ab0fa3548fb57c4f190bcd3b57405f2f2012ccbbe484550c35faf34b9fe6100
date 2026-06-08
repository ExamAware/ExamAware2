import { resolveRoute } from "vuepress/client";
/**
 * Resolve AutoLink props from string
 *
 */
export const resolveLinkInfo = (item, preferFull = false, currentPath) => {
    const { meta, path, notFound } = resolveRoute(item, currentPath);
    return notFound
        ? { text: path, link: path }
        : {
            text: !preferFull && meta.shortTitle ? meta.shortTitle : meta.title || path,
            link: path,
            icon: meta.icon,
        };
};
//# sourceMappingURL=resolveLinkInfo.js.map