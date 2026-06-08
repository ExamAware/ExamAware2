import fs from "node:fs";
import JSONCParser from "jsonc-parser";
const isObject = (value) => typeof value === "object" && value !== null && !Array.isArray(value);
const getConfigContent = (oxlintConfigFile) => {
  try {
    const content = fs.readFileSync(oxlintConfigFile, "utf8");
    try {
      const configContent = JSONCParser.parse(content);
      if (!isObject(configContent)) {
        throw new TypeError("not an valid config file");
      }
      return configContent;
    } catch {
      console.error(
        `eslint-plugin-oxlint: could not parse oxlint config file: ${oxlintConfigFile}`
      );
      return void 0;
    }
  } catch {
    console.error(`eslint-plugin-oxlint: could not find oxlint config file: ${oxlintConfigFile}`);
    return void 0;
  }
};
export {
  getConfigContent,
  isObject
};
