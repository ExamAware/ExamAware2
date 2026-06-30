"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const categories = require("./categories.cjs");
const plugins = require("./plugins.cjs");
const rules = require("./rules.cjs");
const handleOverridesScope = (overrides, configs, baseCategories, options = {}) => {
  for (const [overrideIndex, override] of overrides.entries()) {
    const eslintRules = {};
    const eslintConfig = {
      name: `oxlint/from-oxlint-config-override-${overrideIndex}`,
      // expect that oxlint `files` syntax is the same as eslint
      files: override.files
    };
    const plugins$1 = plugins.readPluginsFromConfig(override);
    if (baseCategories !== void 0 && plugins$1 !== void 0) {
      categories.handleCategoriesScope(plugins$1, baseCategories, eslintRules, options);
    }
    const rules$1 = rules.readRulesFromConfig(override);
    if (rules$1 !== void 0) {
      rules.handleRulesScope(rules$1, eslintRules, options);
    }
    eslintConfig.rules = eslintRules;
    configs.push(eslintConfig);
  }
};
const readOverridesFromConfig = (config) => {
  return "overrides" in config && Array.isArray(config.overrides) ? config.overrides : void 0;
};
exports.handleOverridesScope = handleOverridesScope;
exports.readOverridesFromConfig = readOverridesFromConfig;
