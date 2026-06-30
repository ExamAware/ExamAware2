"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const constants = require("../constants.cjs");
const rulesByCategory = require("../generated/rules-by-category.cjs");
const utilities = require("./utilities.cjs");
const defaultCategories = {
  correctness: "warn"
};
const handleCategoriesScope = (plugins, categories, rules, options = {}) => {
  for (const category in categories) {
    const configName = `${category}Rules`;
    if (category === "nursery" && !options.withNursery) {
      continue;
    }
    if (categories[category] === "off" || !(configName in rulesByCategory)) {
      continue;
    }
    const possibleRules = [];
    const typeAwareConfigName = `${category}TypeAwareRules`;
    if (options.typeAware && typeAwareConfigName in rulesByCategory) {
      possibleRules.push(...Object.keys(rulesByCategory[typeAwareConfigName]));
    }
    possibleRules.push(...Object.keys(rulesByCategory[configName]));
    for (const rule of possibleRules) {
      for (const plugin of plugins) {
        const pluginPrefix = plugin in constants.aliasPluginNames ? constants.aliasPluginNames[plugin] : plugin;
        if (pluginPrefix === "" && !rule.includes("/")) {
          rules[rule] = "off";
        } else if (rule.startsWith(`${pluginPrefix}/`)) {
          rules[rule] = "off";
        }
      }
    }
  }
};
const readCategoriesFromConfig = (config) => {
  return "categories" in config && utilities.isObject(config.categories) ? config.categories : void 0;
};
exports.defaultCategories = defaultCategories;
exports.handleCategoriesScope = handleCategoriesScope;
exports.readCategoriesFromConfig = readCategoriesFromConfig;
