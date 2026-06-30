import path from "node:path";
import { getConfigContent } from "./utilities.mjs";
import { readPluginsFromConfig, defaultPlugins } from "./plugins.mjs";
import { readRulesFromConfig } from "./rules.mjs";
import { readOverridesFromConfig } from "./overrides.mjs";
const readExtendsFromConfig = (config) => {
  return "extends" in config && Array.isArray(config.extends) ? config.extends : void 0;
};
const resolveRelativeExtendsPaths = (config) => {
  if (!config.__misc?.filePath) {
    return;
  }
  const extendsFiles = readExtendsFromConfig(config);
  if (!extendsFiles?.length) return;
  const configFileDirectory = path.dirname(config.__misc.filePath);
  config.extends = extendsFiles.map((extendFile) => path.resolve(configFileDirectory, extendFile));
};
const handleExtendsScope = (extendsConfigs, config) => {
  let rules = readRulesFromConfig(config) ?? {};
  const plugins = readPluginsFromConfig(config) ?? [];
  const overrides = readOverridesFromConfig(config) ?? [];
  for (const extendConfig of extendsConfigs) {
    plugins.unshift(...readPluginsFromConfig(extendConfig) ?? defaultPlugins);
    rules = { ...readRulesFromConfig(extendConfig), ...rules };
    overrides.unshift(...readOverridesFromConfig(extendConfig) ?? []);
  }
  if (plugins.length > 0) config.plugins = [...new Set(plugins)];
  if (Object.keys(rules).length > 0) config.rules = rules;
  if (overrides.length > 0) config.overrides = overrides;
};
const readExtendsConfigsFromConfig = (config) => {
  const extendsFiles = readExtendsFromConfig(config);
  if (!extendsFiles?.length) return [];
  const extendsConfigs = [];
  for (const file of extendsFiles) {
    const extendConfig = getConfigContent(file);
    if (!extendConfig) continue;
    extendConfig.__misc = {
      filePath: file
    };
    resolveRelativeExtendsPaths(extendConfig);
    extendsConfigs.push(extendConfig, ...readExtendsConfigsFromConfig(extendConfig));
  }
  return extendsConfigs;
};
export {
  handleExtendsScope,
  readExtendsConfigsFromConfig,
  resolveRelativeExtendsPaths
};
