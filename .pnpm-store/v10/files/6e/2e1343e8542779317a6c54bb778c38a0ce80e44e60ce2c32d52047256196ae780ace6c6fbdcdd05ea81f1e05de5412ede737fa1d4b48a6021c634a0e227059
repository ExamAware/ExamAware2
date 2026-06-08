"use strict";
const rulesByScope = require("./generated/rules-by-scope.cjs");
const rulesByCategory = require("./generated/rules-by-category.cjs");
const configsByScope = require("./generated/configs-by-scope.cjs");
const configsByCategory = require("./generated/configs-by-category.cjs");
const configHelper = require("./config-helper.cjs");
const allRulesIncludingNursery = Object.assign(
  {},
  ...Object.values(rulesByScope)
);
const allRules = Object.fromEntries(
  Object.entries(allRulesIncludingNursery).filter(
    ([ruleName]) => !(ruleName in rulesByCategory.nurseryRules)
  )
);
const configs = {
  recommended: configHelper.overrideDisabledRulesForVueAndSvelteFiles({
    plugins: ["oxlint"],
    rules: rulesByCategory.correctnessRules
  }),
  all: configHelper.overrideDisabledRulesForVueAndSvelteFiles({
    plugins: ["oxlint"],
    rules: allRules
  }),
  "flat/all": configHelper.splitDisabledRulesForVueAndSvelteFiles({
    name: "oxlint/all",
    rules: allRules
  }),
  "flat/recommended": configHelper.splitDisabledRulesForVueAndSvelteFiles({
    name: "oxlint/recommended",
    rules: rulesByCategory.correctnessRules
  }),
  ...configHelper.splitDisabledRulesForVueAndSvelteFilesDeep(configsByScope),
  ...configHelper.splitDisabledRulesForVueAndSvelteFilesDeep(configsByCategory)
};
module.exports = configs;
