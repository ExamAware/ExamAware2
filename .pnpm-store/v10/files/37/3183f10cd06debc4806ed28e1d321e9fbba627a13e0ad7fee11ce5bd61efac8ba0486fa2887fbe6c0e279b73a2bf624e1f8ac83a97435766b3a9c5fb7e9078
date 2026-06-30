import { aliasPluginNames } from "../constants.mjs";
import * as rulesByCategory from "../generated/rules-by-category.mjs";
import { isObject } from "./utilities.mjs";
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
        const pluginPrefix = plugin in aliasPluginNames ? aliasPluginNames[plugin] : plugin;
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
  return "categories" in config && isObject(config.categories) ? config.categories : void 0;
};
export {
  defaultCategories,
  handleCategoriesScope,
  readCategoriesFromConfig
};
