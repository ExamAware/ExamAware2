// src/index.ts
import debug from "debug";
import fs from "fs-extra";
import hash from "hash-sum";
import ora2 from "ora";
import colors2 from "picocolors";
import picomatch from "picomatch";
import * as tinyglobby from "tinyglobby";
import path3 from "upath";

// src/console/formatMs.ts
var formatMs = (ms) => {
  if (ms < 1e3) return `${ms}ms`;
  return `${(ms / 1e3).toFixed(2)}s`;
};

// src/console/logger.ts
import colors from "picocolors";
var info = (...args) => {
  console.log(colors.cyan("info"), ...args);
};
var tip = (...args) => {
  console.log(colors.blue("tip"), ...args);
};
var success = (...args) => {
  console.log(colors.green("success"), ...args);
};
var warn = (...args) => {
  console.warn(colors.yellow("warning"), ...args);
};
var error = (...args) => {
  console.error(colors.red("error"), ...args);
};
var createError = (message) => {
  error(message);
  return new Error(message);
};
var logger = {
  info,
  tip,
  success,
  warn,
  error,
  createError
};

// src/console/withSpinner.ts
import process from "process";
import ora from "ora";
var withSpinner = (msg) => async (target) => {
  if (process.env.DEBUG) {
    return target();
  }
  const start = Date.now();
  const spinner = ora();
  try {
    spinner.start(msg);
    const result = await target(spinner);
    spinner.succeed(`${msg} - done in ${formatMs(Date.now() - start)}`);
    return result;
  } catch (e) {
    spinner.fail(`${msg} - failed in ${formatMs(Date.now() - start)}`);
    throw e;
  }
};

// src/module/getDirname.ts
import { fileURLToPath } from "url";
import path from "upath";
var getDirname = (importMetaUrl) => path.dirname(fileURLToPath(importMetaUrl));

// src/module/importFile.ts
import { pathToFileURL } from "url";
var importFile = async (filePath) => import(pathToFileURL(filePath).toString());
var importFileDefault = async (filePath) => importFile(filePath).then((m) => m.default);

// src/module/isChildPath.ts
import path2 from "upath";
var isChildPath = (child, parent) => {
  const childPath = path2.normalize(child);
  const parentPath = path2.normalize(parent);
  if (!path2.win32.isAbsolute(childPath) || !path2.win32.isAbsolute(parentPath)) {
    return false;
  }
  const relativePath = path2.relative(parentPath, childPath);
  return relativePath === "" || !relativePath.startsWith("..");
};

// src/module/sanitizeFileName.ts
var INVALID_CHAR_REGEX = /[\u0000-\u001F"#$%&*+,:;<=>?[\]^`{|}\u007F]/g;
var DRIVE_LETTER_REGEX = /^[a-z]:/i;
var sanitizeFileName = (name) => {
  const driveLetter = DRIVE_LETTER_REGEX.exec(name)?.[0] || "";
  return driveLetter + name.slice(driveLetter.length).replace(INVALID_CHAR_REGEX, "_").replace(/^_+/, "");
};

// src/module/transformPathToFileName.ts
var transformPathToFileName = (rawPath) => sanitizeFileName(rawPath.replace(/\//g, "_"));

// src/ssr/renderHeadAttrs.ts
var renderHeadAttrs = (attrs) => Object.entries(attrs).filter((item) => item[1] !== false).map(
  ([key, value]) => value === true ? ` ${key}` : ` ${key}="${attrs[key]}"`
).join("");

// src/ssr/renderHead.ts
var renderHead = ([
  tag,
  attrs,
  innerHTML = ""
]) => {
  const openTag = `<${tag}${renderHeadAttrs(attrs)}>`;
  if (tag === "link" || tag === "meta" || tag === "base") {
    return openTag;
  }
  return `${openTag}${innerHTML}</${tag}>`;
};

// src/ssr/templateRenderer.ts
var TemplateRendererOutlet = /* @__PURE__ */ ((TemplateRendererOutlet2) => {
  TemplateRendererOutlet2["Content"] = "<!--vuepress-ssr-content-->";
  TemplateRendererOutlet2["Head"] = "<!--vuepress-ssr-head-->";
  TemplateRendererOutlet2["Lang"] = "{{ lang }}";
  TemplateRendererOutlet2["Prefetch"] = "<!--vuepress-ssr-prefetch-->";
  TemplateRendererOutlet2["Preload"] = "<!--vuepress-ssr-preload-->";
  TemplateRendererOutlet2["Scripts"] = "<!--vuepress-ssr-scripts-->";
  TemplateRendererOutlet2["Styles"] = "<!--vuepress-ssr-styles-->";
  TemplateRendererOutlet2["Version"] = "{{ version }}";
  return TemplateRendererOutlet2;
})(TemplateRendererOutlet || {});
var templateRenderer = (template, { content, head, lang, prefetch, preload, scripts, styles, version }) => template.replace("<!--vuepress-ssr-content-->" /* Content */, () => content).replace("<!--vuepress-ssr-head-->" /* Head */, head).replace("{{ lang }}" /* Lang */, lang).replace("<!--vuepress-ssr-prefetch-->" /* Prefetch */, prefetch).replace("<!--vuepress-ssr-preload-->" /* Preload */, preload).replace("<!--vuepress-ssr-scripts-->" /* Scripts */, scripts).replace("<!--vuepress-ssr-styles-->" /* Styles */, styles).replace("{{ version }}" /* Version */, version);
export {
  TemplateRendererOutlet,
  colors2 as colors,
  createError,
  debug,
  error,
  formatMs,
  fs,
  getDirname,
  hash,
  importFile,
  importFileDefault,
  info,
  isChildPath,
  logger,
  ora2 as ora,
  path3 as path,
  picomatch,
  renderHead,
  renderHeadAttrs,
  sanitizeFileName,
  success,
  templateRenderer,
  tinyglobby,
  tip,
  transformPathToFileName,
  warn,
  withSpinner
};
