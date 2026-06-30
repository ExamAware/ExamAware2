import { ensureEndingSlash, isLinkAbsolute, isLinkWithProtocol, } from "@vuepress/helper/client";
export const resolvePrefix = (prefix = "", path = "") => isLinkWithProtocol(path) || isLinkAbsolute(path)
    ? path
    : `${ensureEndingSlash(prefix)}${path}`;
//# sourceMappingURL=resolvePrefix.js.map