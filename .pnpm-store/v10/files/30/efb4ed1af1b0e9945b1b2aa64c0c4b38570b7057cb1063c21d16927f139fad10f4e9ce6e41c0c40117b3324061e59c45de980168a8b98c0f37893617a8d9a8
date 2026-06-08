/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

var logSet = /* @__PURE__ */new Set();
var log = {
  warn: function warn(componentName, message) {
    console.warn("TDesign ".concat(componentName, " Warn: ").concat(message));
  },
  warnOnce: function warnOnce(componentName, message) {
    var msgContent = "TDesign ".concat(componentName, " Warn: ").concat(message);
    if (logSet.has(msgContent)) return;
    logSet.add(msgContent);
    console.warn(msgContent);
  },
  error: function error(componentName, message) {
    console.error("TDesign ".concat(componentName, " Error: ").concat(message));
  },
  errorOnce: function errorOnce(componentName, message) {
    var msgContent = "TDesign ".concat(componentName, " Error: ").concat(message);
    if (logSet.has(msgContent)) return;
    logSet.add(msgContent);
    console.error(msgContent);
  },
  info: function info(componentName, message) {
    console.info("TDesign ".concat(componentName, " Info: ").concat(message));
  }
};

export { log as l };
//# sourceMappingURL=dep-97ecacde.mjs.map
