import { n as lint } from "./bindings.js";
let loadPlugin = null, setupConfigs = null, lintFile = null;
function loadPluginWrapper(path, pluginName, pluginNameIsAlias) {
	return loadPlugin === null ? import("./plugins.js").then((mod) => ({loadPlugin, lintFile, setupConfigs} = mod, loadPlugin(path, pluginName, pluginNameIsAlias))) : loadPlugin(path, pluginName, pluginNameIsAlias);
}
function setupConfigsWrapper(optionsJSON) {
	return setupConfigs(optionsJSON);
}
function lintFileWrapper(filePath, bufferId, buffer, ruleIds, optionsIds, settingsJSON, globalsJSON) {
	return lintFile(filePath, bufferId, buffer, ruleIds, optionsIds, settingsJSON, globalsJSON);
}
await lint(process.argv.slice(2), loadPluginWrapper, setupConfigsWrapper, lintFileWrapper) || (process.exitCode = 1);
export {};
