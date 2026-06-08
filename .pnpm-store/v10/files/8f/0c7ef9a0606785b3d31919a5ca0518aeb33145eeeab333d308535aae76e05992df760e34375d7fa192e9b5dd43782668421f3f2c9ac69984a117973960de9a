import { resolveHeadersFromTokens, slugify } from "@mdit-vue/shared";

//#region src/headers-plugin.ts
/**
* Get markdown headers info
*
* Extract them into env
*/
const headersPlugin = (md, { level = [2, 3], shouldAllowNested = false, slugify: slugify$1 = slugify, format } = {}) => {
	const render = md.renderer.render.bind(md.renderer);
	md.renderer.render = (tokens, options, env) => {
		env.headers = resolveHeadersFromTokens(tokens, {
			level,
			shouldAllowHtml: false,
			shouldAllowNested,
			shouldEscapeText: false,
			slugify: slugify$1,
			format
		});
		return render(tokens, options, env);
	};
};

//#endregion
export { headersPlugin };