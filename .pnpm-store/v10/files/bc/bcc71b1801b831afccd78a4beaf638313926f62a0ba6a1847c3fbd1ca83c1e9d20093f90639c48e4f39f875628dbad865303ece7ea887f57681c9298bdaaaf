import * as rulesByScope from "./generated/rules-by-scope.mjs";
import { nurseryRules, correctnessRules } from "./generated/rules-by-category.mjs";
import configByScope from "./generated/configs-by-scope.mjs";
import configByCategory from "./generated/configs-by-category.mjs";
import { splitDisabledRulesForVueAndSvelteFilesDeep, splitDisabledRulesForVueAndSvelteFiles, overrideDisabledRulesForVueAndSvelteFiles } from "./config-helper.mjs";
const allRulesIncludingNursery = Object.assign(
  {},
  ...Object.values(rulesByScope)
);
const allRules = Object.fromEntries(
  Object.entries(allRulesIncludingNursery).filter(
    ([ruleName]) => !(ruleName in nurseryRules)
  )
);
const configs = {
  recommended: overrideDisabledRulesForVueAndSvelteFiles({
    plugins: ["oxlint"],
    rules: correctnessRules
  }),
  all: overrideDisabledRulesForVueAndSvelteFiles({
    plugins: ["oxlint"],
    rules: allRules
  }),
  "flat/all": splitDisabledRulesForVueAndSvelteFiles({
    name: "oxlint/all",
    rules: allRules
  }),
  "flat/recommended": splitDisabledRulesForVueAndSvelteFiles({
    name: "oxlint/recommended",
    rules: correctnessRules
  }),
  ...splitDisabledRulesForVueAndSvelteFilesDeep(configByScope),
  ...splitDisabledRulesForVueAndSvelteFilesDeep(configByCategory)
};
export {
  configs as default
};
