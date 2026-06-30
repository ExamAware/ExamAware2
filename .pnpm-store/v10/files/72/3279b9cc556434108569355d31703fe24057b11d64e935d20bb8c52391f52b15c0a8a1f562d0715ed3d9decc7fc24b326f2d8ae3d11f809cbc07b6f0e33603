/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

var _toConsumableArray = require('@babel/runtime/helpers/toConsumableArray');
var constants = require('./dep-4291c54c.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _toConsumableArray__default = /*#__PURE__*/_interopDefaultLegacy(_toConsumableArray);

var initColorFormat = function initColorFormat(format, enableAlpha) {
  if (enableAlpha && format in constants.ALPHA_FORMAT_MAP) {
    return format in constants.ALPHA_FORMAT_MAP ? constants.ALPHA_FORMAT_MAP[format] : format;
  }
  return format;
};
var getColorFormatMap = function getColorFormatMap(color, type) {
  if (type === "encode") {
    return {
      HSV: color.getHsva(),
      HSVA: color.getHsva(),
      HSL: color.getHsla(),
      HSLA: color.getHsla(),
      RGB: color.getRgba(),
      RGBA: color.getRgba(),
      CMYK: color.getCmyk(),
      CSS: {
        css: color.css
      },
      HEX: {
        hex: color.hex
      },
      HEX8: {
        hex: color.hex8
      }
    };
  }
  return color.getFormatsColorMap();
};
var getColorFormatOptions = function getColorFormatOptions(enableAlpha) {
  return enableAlpha ? constants.FORMATS.map(function (item) {
    return item in constants.ALPHA_FORMAT_MAP ? constants.ALPHA_FORMAT_MAP[item] : item;
  }) : constants.FORMATS;
};
var getColorFormatInputs = function getColorFormatInputs() {
  var format = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "RGB";
  var enableAlpha = arguments.length > 1 ? arguments[1] : undefined;
  var finalFormat;
  if (enableAlpha) {
    finalFormat = Object.keys(constants.ALPHA_FORMAT_MAP).find(function (key) {
      return key in constants.ALPHA_FORMAT_MAP && constants.ALPHA_FORMAT_MAP[key] === format;
    }) || format;
  } else {
    finalFormat = format;
  }
  if (!constants.COLOR_FORMAT_INPUTS[finalFormat]) return [];
  var configs = _toConsumableArray__default["default"](constants.COLOR_FORMAT_INPUTS[finalFormat]);
  if (enableAlpha && format !== "CMYK") {
    configs.push({
      type: "inputNumber",
      key: "a",
      min: 0,
      max: 100,
      format: function format(value) {
        return "".concat(value, "%");
      },
      flex: 1.15
    });
  }
  return configs;
};

exports.getColorFormatInputs = getColorFormatInputs;
exports.getColorFormatMap = getColorFormatMap;
exports.getColorFormatOptions = getColorFormatOptions;
exports.initColorFormat = initColorFormat;
//# sourceMappingURL=dep-aa5052d8.js.map
