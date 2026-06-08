import rehypeParse from 'rehype-parse';
import rehypeSanitize from 'rehype-sanitize';
import rehypeStringify from 'rehype-stringify';
import { unified } from 'unified';
let rehypeInstance = null;
/**
 * Sanitize HTML
 * @see https://github.com/rehypejs/rehype-sanitize
 */
export const sanitizeHTML = (html) => {
    rehypeInstance ??= unified()
        .use(rehypeParse, { fragment: true })
        .use(rehypeSanitize, {
        tagNames: ['a', 'em', 'strong', 'code'],
        attributes: {
            a: [['href', /^https?:\/\//], 'target', 'rel'],
        },
        strip: ['script', 'style'],
    })
        .use(rehypeStringify)
        .freeze();
    return String(rehypeInstance.processSync(html));
};
