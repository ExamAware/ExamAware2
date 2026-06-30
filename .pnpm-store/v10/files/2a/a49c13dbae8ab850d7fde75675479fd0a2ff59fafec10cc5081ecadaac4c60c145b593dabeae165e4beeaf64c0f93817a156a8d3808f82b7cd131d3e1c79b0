const require_src = require('./src-BIqvdKAp.cjs');
let __nuxt_kit = require("@nuxt/kit");

//#region src/nuxt.ts
var nuxt_default = (0, __nuxt_kit.defineNuxtModule)({ setup(options) {
	options.exclude = options.exclude || [
		/[\\/]node_modules[\\/]/,
		/[\\/]\.git[\\/]/,
		/[\\/]\.nuxt[\\/]/
	];
	(0, __nuxt_kit.addWebpackPlugin)(require_src.unplugin_default.webpack(options));
	(0, __nuxt_kit.addVitePlugin)(require_src.unplugin_default.vite(options));
} });

//#endregion
module.exports = nuxt_default;