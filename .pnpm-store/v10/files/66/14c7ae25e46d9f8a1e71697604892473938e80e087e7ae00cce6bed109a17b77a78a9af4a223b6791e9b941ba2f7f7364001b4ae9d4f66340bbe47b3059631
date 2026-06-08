"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const path = require("node:path");
const utilities = require("./utilities.cjs");
const plugins = require("./plugins.cjs");
const rules = require("./rules.cjs");
const overrides = require("./overrides.cjs");
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
  let rules$1 = rules.readRulesFromConfig(config) ?? {};
  const plugins$1 = plugins.readPluginsFromConfig(config) ?? [];
  const overrides$1 = overrides.readOverridesFromConfig(config) ?? [];
  for (const extendConfig of extendsConfigs) {
    plugins$1.unshift(...plugins.readPluginsFromConfig(extendConfig) ?? plugins.defaultPlugins);
    rules$1 = { ...rules.readRulesFromConfig(extendConfig), ...rules$1 };
    overrides$1.unshift(...overrides.readOverridesFromConfig(extendConfig) ?? []);
  }
  if (plugins$1.length > 0) config.plugins = [...new Set(plugins$1)];
  if (Object.keys(rules$1).length > 0) config.rules = rules$1;
  if (overrides$1.length > 0) config.overrides = overrides$1;
};
const readExtendsConfigsFromConfig = (config) => {
  const extendsFiles = readExtendsFromConfig(config);
  if (!extendsFiles?.length) return [];
  const extendsConfigs = [];
  for (const file of extendsFiles) {
    const extendConfig = utilities.getConfigContent(file);
    if (!extendConfig) continue;
    extendConfig.__misc = {
      filePath: file
    };
    resolveRelativeExtendsPaths(extendConfig);
    extendsConfigs.push(extendConfig, ...readExtendsConfigsFromConfig(extendConfig));
  }
  return extendsConfigs;
};
exports.handleExtendsScope = handleExtendsScope;
exports.readExtendsConfigsFromConfig = readExtendsConfigsFromConfig;
exports.resolveRelativeExtendsPaths = resolveRelativeExtendsPaths;
