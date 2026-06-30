/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

var isString = require('./dep-a55e8a08.js');

function getStopStyle(position, isVertical) {
  return isVertical ? {
    top: "calc(".concat(100 - position, "% - 1px)")
  } : {
    left: "".concat(position, "%")
  };
}
var formatSliderValue = function formatSliderValue(val, type) {
  if (type === "first") {
    if (val instanceof Array) {
      return val[0];
    }
    return val;
  }
  if (val instanceof Array) {
    return val[1];
  }
  return 0;
};
var formatLabel = function formatLabel(label, val) {
  if (Boolean(label) === false) {
    return String(val);
  }
  if (isString.isString(label)) {
    var text = String(val);
    try {
      var rule = /\${value}%/g;
      var enableToReplace = rule.test(label);
      if (enableToReplace) {
        text = label.replace(/\${value}/g, String(val));
      } else {
        text = label;
        throw new Error();
      }
    } catch (e) {
      console.warn("fail to parse label prop, please pass string such as '${value}%'");
    }
    return text;
  }
  return label;
};
var formatPrecision = function formatPrecision(value, precision) {
  return Number(parseFloat("".concat(value)).toFixed(precision));
};

exports.formatLabel = formatLabel;
exports.formatPrecision = formatPrecision;
exports.formatSliderValue = formatSliderValue;
exports.getStopStyle = getStopStyle;
//# sourceMappingURL=dep-ccada3ec.js.map
