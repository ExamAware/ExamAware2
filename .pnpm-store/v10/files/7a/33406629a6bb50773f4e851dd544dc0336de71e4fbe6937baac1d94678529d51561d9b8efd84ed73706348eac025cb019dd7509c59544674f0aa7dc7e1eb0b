"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const constants = require("./constants.cjs");
const overrideDisabledRulesForVueAndSvelteFiles = (config) => {
  const foundRules = Object.keys(config.rules).filter(
    (rule) => constants.rulesDisabledForVueAndSvelteFiles.includes(rule)
  );
  if (foundRules.length === 0) {
    return config;
  }
  const newConfig = structuredClone(config);
  newConfig.overrides = [
    {
      // classic configs use glob syntax
      files: ["*.*"],
      excludedFiles: ["*.vue", "*.svelte"],
      rules: {}
    }
  ];
  for (const rule of foundRules) {
    delete newConfig.rules[rule];
    newConfig.overrides[0].rules[rule] = "off";
  }
  return newConfig;
};
const splitDisabledRulesForVueAndSvelteFiles = (config) => {
  const foundRules = Object.keys(config.rules).filter(
    (rule) => constants.rulesDisabledForVueAndSvelteFiles.includes(rule)
  );
  if (foundRules.length === 0) {
    return [config];
  }
  const oldConfig = structuredClone(config);
  const newConfig = {
    // flat configs use minimatch syntax
    name: "oxlint/vue-svelte-exceptions",
    ignores: ["**/*.vue", "**/*.svelte"],
    rules: {}
  };
  for (const rule of foundRules) {
    delete oldConfig.rules[rule];
    newConfig.rules[rule] = "off";
  }
  return [oldConfig, newConfig];
};
const splitDisabledRulesForVueAndSvelteFilesDeep = (config) => {
  const result = {};
  for (const name in config) {
    result[name] = splitDisabledRulesForVueAndSvelteFiles(config[name]);
  }
  return result;
};
exports.overrideDisabledRulesForVueAndSvelteFiles = overrideDisabledRulesForVueAndSvelteFiles;
exports.splitDisabledRulesForVueAndSvelteFiles = splitDisabledRulesForVueAndSvelteFiles;
exports.splitDisabledRulesForVueAndSvelteFilesDeep = splitDisabledRulesForVueAndSvelteFilesDeep;
