/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import _toConsumableArray from '@babel/runtime/helpers/toConsumableArray';
import _objectWithoutProperties from '@babel/runtime/helpers/objectWithoutProperties';
import '@babel/runtime/helpers/slicedToArray';
import '@babel/runtime/helpers/defineProperty';
import { isUndefined, isNull, isString, isArray, isNumber } from 'lodash-es';

var _excluded = ["from", "to", "direction"];
function getValidAttrs(obj) {
  var newObj = {};
  Object.keys(obj).forEach(function (key) {
    if (!isUndefined(obj[key]) || isNull(obj[key])) {
      newObj[key] = obj[key];
    }
  });
  return newObj;
}
function getBackgroundColor(color) {
  if (isString(color)) {
    return color;
  }
  if (isArray(color)) {
    if (color[0] && color[0][0] === "#") {
      color.unshift("90deg");
    }
    return "linear-gradient( ".concat(color.join(","), " )");
  }
  var from = color.from,
    to = color.to,
    _color$direction = color.direction,
    direction = _color$direction === void 0 ? "to right" : _color$direction,
    rest = _objectWithoutProperties(color, _excluded);
  var keys = Object.keys(rest);
  if (keys.length) {
    keys = keys.sort(function (a, b) {
      var c = parseFloat(a.substr(0, a.length - 1)) - parseFloat(b.substr(0, b.length - 1));
      return c;
    });
    var tempArr = keys.map(function (key) {
      return "".concat(rest[key], " ").concat(key);
    });
    return "linear-gradient(".concat(direction, ", ").concat(tempArr.join(","), ")");
  }
  return "linear-gradient(".concat(direction, ", ").concat(from, ", ").concat(to, ")");
}
function getIEVersion() {
  if (typeof navigator === "undefined" || !navigator) return Number.MAX_SAFE_INTEGER;
  var _navigator = navigator,
    userAgent = _navigator.userAgent;
  var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1;
  var isIE11 = userAgent.indexOf("Trident") > -1 && userAgent.indexOf("rv:11.0") > -1;
  if (isIE) {
    var reIE = /MSIE (\d+\.\d+);/;
    var match = userAgent.match(reIE);
    if (!match) return -1;
    var fIEVersion = parseFloat(match[1]);
    return fIEVersion < 7 ? 6 : fIEVersion;
  }
  if (isIE11) {
    return 11;
  }
  return Number.MAX_SAFE_INTEGER;
}
function getFlexGapPolyFill() {
  var _chromeMatch$, _safariMatch$, _fireFoxMatch$;
  if (typeof navigator === "undefined" || !navigator) return false;
  var ua = navigator.userAgent;
  var chromeMatch = ua.match(/AppleWebKit.+Chrome\/(.+) Safari\/.+/i);
  if (Number(chromeMatch === null || chromeMatch === void 0 || (_chromeMatch$ = chromeMatch[1]) === null || _chromeMatch$ === void 0 ? void 0 : _chromeMatch$.split(".")[0]) < 100) return true;
  var safariMatch = ua.match(/AppleWebKit.+Version\/(.+) Safari\/.+/i);
  if (Number(safariMatch === null || safariMatch === void 0 || (_safariMatch$ = safariMatch[1]) === null || _safariMatch$ === void 0 ? void 0 : _safariMatch$.split(".")[0]) < 12) return true;
  var ieVersion = getIEVersion();
  if (ieVersion <= 11) return true;
  var fireFoxMatch = ua.match(/Firefox\/(.+)/i);
  if (Number(fireFoxMatch === null || fireFoxMatch === void 0 || (_fireFoxMatch$ = fireFoxMatch[1]) === null || _fireFoxMatch$ === void 0 ? void 0 : _fireFoxMatch$.split(".")[0]) < 100) return true;
  return false;
}
function getCharacterLength(str, maxCharacter) {
  var hasMaxCharacter = isNumber(maxCharacter);
  if (!str || str.length === 0) {
    if (hasMaxCharacter) {
      return {
        length: 0,
        characters: str
      };
    }
    return 0;
  }
  var len = 0;
  for (var i = 0; i < str.length; i++) {
    var currentStringLength = 0;
    if (str.charCodeAt(i) > 127) {
      currentStringLength = 2;
    } else {
      currentStringLength = 1;
    }
    if (hasMaxCharacter && len + currentStringLength > maxCharacter) {
      return {
        length: len,
        characters: str.slice(0, i)
      };
    }
    len += currentStringLength;
  }
  if (hasMaxCharacter) {
    return {
      length: len,
      characters: str
    };
  }
  return len;
}
function getUnicodeLength(str) {
  return _toConsumableArray(str !== null && str !== void 0 ? str : "").length;
}
function limitUnicodeMaxLength(str, maxLength, oldStr) {
  if (_toConsumableArray(oldStr !== null && oldStr !== void 0 ? oldStr : "").slice().length === maxLength) return oldStr || "";
  return _toConsumableArray(str !== null && str !== void 0 ? str : "").slice(0, maxLength).join("");
}
function pxCompat(param) {
  return isNumber(param) ? "".concat(param, "px") : param;
}
var DOM_STYLE_PROPS = ["padding-top", "padding-bottom", "padding-left", "padding-right", "font-family", "font-weight", "font-size", "font-variant", "text-rendering", "text-transform", "width", "text-indent", "border-width", "box-sizing", "line-height", "letter-spacing"];
function calculateNodeSize(targetElement) {
  if (typeof window === "undefined") {
    return {
      paddingSize: 0,
      borderSize: 0,
      boxSizing: 0,
      sizingStyle: ""
    };
  }
  var style = window.getComputedStyle(targetElement);
  var boxSizing = style.getPropertyValue("box-sizing") || style.getPropertyValue("-moz-box-sizing") || style.getPropertyValue("-webkit-box-sizing");
  var paddingSize = parseFloat(style.getPropertyValue("padding-bottom")) + parseFloat(style.getPropertyValue("padding-top"));
  var borderSize = parseFloat(style.getPropertyValue("border-bottom-width")) + parseFloat(style.getPropertyValue("border-top-width"));
  var sizingStyle = DOM_STYLE_PROPS.map(function (name) {
    return "".concat(name, ":").concat(style.getPropertyValue(name));
  }).join(";");
  return {
    paddingSize: paddingSize,
    borderSize: borderSize,
    boxSizing: boxSizing,
    sizingStyle: sizingStyle
  };
}

export { getValidAttrs as a, getCharacterLength as b, calculateNodeSize as c, getBackgroundColor as d, getIEVersion as e, getUnicodeLength as f, getFlexGapPolyFill as g, limitUnicodeMaxLength as l, pxCompat as p };
//# sourceMappingURL=dep-80a99546.js.map
