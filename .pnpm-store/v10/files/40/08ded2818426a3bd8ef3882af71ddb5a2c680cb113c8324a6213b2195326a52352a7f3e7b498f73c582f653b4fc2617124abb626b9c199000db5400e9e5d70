"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const constants = require("../constants.cjs");
const rulesByCategory = require("../generated/rules-by-category.cjs");
const utilities = require("./utilities.cjs");
const allRules = Object.values(rulesByCategory).flatMap(
  (rulesObject) => Object.keys(rulesObject)
);
const typeAwareRules = new Set(
  Object.entries(rulesByCategory).filter(([key]) => key.endsWith("TypeAwareRules")).flatMap(([, rulesObject]) => Object.keys(rulesObject))
);
const getEsLintRuleName = (rule, options = {}) => {
  if (!rule.includes("/")) {
    const found2 = allRules.find((search) => search.endsWith(`/${rule}`) || search === rule);
    if (!found2) {
      return void 0;
    }
    if (!options.withNursery && found2 in rulesByCategory.nurseryRules) {
      return void 0;
    }
    if (!options.typeAware && typeAwareRules.has(found2)) {
      return void 0;
    }
    return found2;
  }
  const match = rule.match(/(^.*)\/(.*)/);
  if (match === null) {
    return void 0;
  }
  const pluginName = match[1];
  const ruleName = match[2];
  let esPluginName = pluginName in constants.aliasPluginNames ? constants.aliasPluginNames[pluginName] : pluginName;
  if (esPluginName === "react" && constants.reactHookRulesInsideReactScope.includes(ruleName)) {
    esPluginName = "react-hooks";
  }
  const expectedRule = esPluginName === "" ? ruleName : `${esPluginName}/${ruleName}`;
  const found = allRules.find((rule2) => rule2 === expectedRule);
  if (!found) {
    return void 0;
  }
  if (!options.withNursery && found in rulesByCategory.nurseryRules) {
    return void 0;
  }
  if (!options.typeAware && typeAwareRules.has(found)) {
    return void 0;
  }
  return found;
};
const isValueInSet = (value, validSet) => validSet.includes(value) || Array.isArray(value) && validSet.includes(value[0]);
const isDeactivateValue = (value) => isValueInSet(value, ["off", 0]);
const isActiveValue = (value) => isValueInSet(value, ["error", "warn", 1, 2]);
const handleRulesScope = (oxlintRules, rules, options = {}) => {
  for (const rule in oxlintRules) {
    const eslintName = getEsLintRuleName(rule, options);
    if (eslintName === void 0) {
      continue;
    }
    if (isActiveValue(oxlintRules[rule])) {
      rules[eslintName] = "off";
    } else if (rule in rules && isDeactivateValue(oxlintRules[rule])) {
      delete rules[eslintName];
    }
  }
};
const readRulesFromConfig = (config) => {
  return "rules" in config && utilities.isObject(config.rules) ? config.rules : void 0;
};
exports.handleRulesScope = handleRulesScope;
exports.readRulesFromConfig = readRulesFromConfig;
