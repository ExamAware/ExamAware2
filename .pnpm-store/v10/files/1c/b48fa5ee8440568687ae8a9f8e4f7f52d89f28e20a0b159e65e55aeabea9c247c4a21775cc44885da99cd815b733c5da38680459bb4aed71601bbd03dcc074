import { isActiveLink } from "vuepress-shared/client";
export const isActiveItem = (route, item) => item.activeMatch
    ? new RegExp(item.activeMatch, "u").test(route.path)
    : isActiveLink(route, item.link);
//# sourceMappingURL=isActiveItem.js.map