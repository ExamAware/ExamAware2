import { isArray, isPlainObject, isString } from "@vuepress/helper/shared";
const isAuthorInfo = (author) => isPlainObject(author) && isString(author.name);
export const getAuthor = (author, canDisable = false) => {
    if (author) {
        if (isArray(author))
            return author
                .map((item) => isString(item) ? { name: item } : isAuthorInfo(item) ? item : null)
                .filter((item) => item !== null);
        if (isString(author))
            return [{ name: author }];
        if (isAuthorInfo(author))
            return [author];
        // eslint-disable-next-line no-console
        console.error(`Expect "author" to be \`AuthorInfo[] | AuthorInfo | string[] | string ${canDisable ? "" : "| false"} | undefined\`, but got`, author);
        return [];
    }
    return [];
};
export const getStringArray = (value, optionName) => {
    if (value) {
        if (isArray(value) && value.every((item) => isString(item)))
            return value;
        if (isString(value))
            return [value];
        // eslint-disable-next-line no-console
        console.error(`Expect ${optionName} to be \`string[] | string | undefined\`, but got`, value);
    }
    return [];
};
export const getCategory = (category) => getStringArray(category, "category");
export const getTag = (tag) => getStringArray(tag, "tag");
//# sourceMappingURL=infoGetter.js.map