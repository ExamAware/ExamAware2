//#region src/html-escape.ts
const htmlEscapeMap = {
	"&": "&amp;",
	"<": "&lt;",
	">": "&gt;",
	"'": "&#39;",
	"\"": "&quot;"
};
const htmlEscapeRegexp = /[&<>'"]/g;
/**
* Escape html chars
*/
const htmlEscape = (str) => str.replace(htmlEscapeRegexp, (char) => htmlEscapeMap[char]);

//#endregion
//#region src/html-unescape.ts
const htmlUnescapeMap = {
	"&amp;": "&",
	"&#38;": "&",
	"&lt;": "<",
	"&#60;": "<",
	"&gt;": ">",
	"&#62;": ">",
	"&apos;": "'",
	"&#39;": "'",
	"&quot;": "\"",
	"&#34;": "\""
};
const htmlUnescapeRegexp = /&(amp|#38|lt|#60|gt|#62|apos|#39|quot|#34);/g;
/**
* Unescape html chars
*/
const htmlUnescape = (str) => str.replace(htmlUnescapeRegexp, (char) => htmlUnescapeMap[char]);

//#endregion
//#region src/resolve-title-from-token.ts
/**
* Resolve header title from markdown-it token
*
* Typically using the next token of `heading_open` token
*/
const resolveTitleFromToken = (token, { shouldAllowHtml, shouldEscapeText }) => {
	const children = token.children ?? [];
	const titleTokenTypes = [
		"text",
		"emoji",
		"code_inline"
	];
	if (shouldAllowHtml) titleTokenTypes.push("html_inline");
	const titleTokens = children.filter((item) => titleTokenTypes.includes(item.type) && !item.meta?.isPermalinkSymbol);
	return titleTokens.reduce((result, item) => {
		if (shouldEscapeText) {
			if (item.type === "code_inline" || item.type === "text") return `${result}${htmlEscape(item.content)}`;
		}
		return `${result}${item.content}`;
	}, "").trim();
};

//#endregion
//#region src/resolve-headers-from-tokens.ts
/**
* Resolve headers from markdown-it tokens
*/
const resolveHeadersFromTokens = (tokens, { level, shouldAllowHtml, shouldAllowNested, shouldEscapeText, slugify: slugify$1, format }) => {
	const headers = [];
	const stack = [];
	const push = (header) => {
		while (stack.length !== 0 && header.level <= stack[0].level) stack.shift();
		if (stack.length === 0) {
			headers.push(header);
			stack.push(header);
		} else {
			stack[0].children.push(header);
			stack.unshift(header);
		}
	};
	for (let i = 0; i < tokens.length; i += 1) {
		const token = tokens[i];
		if (token.type !== "heading_open") continue;
		if (token.level !== 0 && !shouldAllowNested) continue;
		const headerLevel = Number.parseInt(token.tag.slice(1), 10);
		if (!level.includes(headerLevel)) continue;
		const nextToken = tokens[i + 1];
		/* istanbul ignore if -- @preserve */
		if (!nextToken) continue;
		const title = resolveTitleFromToken(nextToken, {
			shouldAllowHtml,
			shouldEscapeText
		});
		const slug = token.attrGet("id") ?? slugify$1(title);
		push({
			level: headerLevel,
			title: format?.(title) ?? title,
			slug,
			link: `#${slug}`,
			children: []
		});
	}
	return headers;
};

//#endregion
//#region src/slugify.ts
const rControl = /[\u0000-\u001f]/g;
const rSpecial = /[\s~`!@#$%^&*()\-_+=[\]{}|\\;:"'“”‘’<>,.?/]+/g;
const rCombining = /[\u0300-\u036F]/g;
/**
* Default slugification function
*/
const slugify = (str) => str.normalize("NFKD").replace(rCombining, "").replace(rControl, "").replace(rSpecial, "-").replace(/-{2,}/g, "-").replace(/^-+|-+$/g, "").replace(/^(\d)/, "_$1").toLowerCase();

//#endregion
export { htmlEscape, htmlUnescape, resolveHeadersFromTokens, resolveTitleFromToken, slugify };