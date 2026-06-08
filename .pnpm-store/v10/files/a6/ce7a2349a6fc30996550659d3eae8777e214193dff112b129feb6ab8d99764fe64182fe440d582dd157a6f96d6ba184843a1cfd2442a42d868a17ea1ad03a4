const require_src = require('./src-BIqvdKAp.cjs');

//#region src/astro.ts
function astro_default(options) {
	return {
		name: "unplugin-auto-import",
		hooks: { "astro:config:setup": async (astro) => {
			var _astro$config$vite;
			(_astro$config$vite = astro.config.vite).plugins || (_astro$config$vite.plugins = []);
			astro.config.vite.plugins.push(require_src.unplugin_default.vite(options));
		} }
	};
}

//#endregion
module.exports = astro_default;