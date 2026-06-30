"use strict";
const rulesByCategory = require("./rules-by-category.cjs");
const pedanticConfig = {
  name: "oxlint/pedantic",
  rules: rulesByCategory.pedanticRules
};
const styleConfig = {
  name: "oxlint/style",
  rules: rulesByCategory.styleRules
};
const suspiciousConfig = {
  name: "oxlint/suspicious",
  rules: rulesByCategory.suspiciousRules
};
const restrictionConfig = {
  name: "oxlint/restriction",
  rules: rulesByCategory.restrictionRules
};
const correctnessConfig = {
  name: "oxlint/correctness",
  rules: rulesByCategory.correctnessRules
};
const nurseryConfig = {
  name: "oxlint/nursery",
  rules: rulesByCategory.nurseryRules
};
const perfConfig = {
  name: "oxlint/perf",
  rules: rulesByCategory.perfRules
};
const configByCategory = {
  "flat/pedantic": pedanticConfig,
  "flat/style": styleConfig,
  "flat/suspicious": suspiciousConfig,
  "flat/restriction": restrictionConfig,
  "flat/correctness": correctnessConfig,
  "flat/nursery": nurseryConfig,
  "flat/perf": perfConfig
};
module.exports = configByCategory;
