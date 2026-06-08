/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import _slicedToArray from '@babel/runtime/helpers/slicedToArray';
import _classCallCheck from '@babel/runtime/helpers/classCallCheck';
import _createClass from '@babel/runtime/helpers/createClass';
import _defineProperty from '@babel/runtime/helpers/defineProperty';
import tinyColor from 'tinycolor2';
import { A as ALPHA_FORMAT_MAP } from './dep-8d136a55.js';
import { isString, isNull } from 'lodash-es';

var rgb2cmyk = function rgb2cmyk(red, green, blue) {
  var computedC = 0;
  var computedM = 0;
  var computedY = 0;
  var computedK = 0;
  var r = parseInt("".concat(red).replace(/\s/g, ""), 10);
  var g = parseInt("".concat(green).replace(/\s/g, ""), 10);
  var b = parseInt("".concat(blue).replace(/\s/g, ""), 10);
  if (r === 0 && g === 0 && b === 0) {
    computedK = 1;
    return [0, 0, 0, 1];
  }
  computedC = 1 - r / 255;
  computedM = 1 - g / 255;
  computedY = 1 - b / 255;
  var minCMY = Math.min(computedC, Math.min(computedM, computedY));
  computedC = (computedC - minCMY) / (1 - minCMY);
  computedM = (computedM - minCMY) / (1 - minCMY);
  computedY = (computedY - minCMY) / (1 - minCMY);
  computedK = minCMY;
  return [computedC, computedM, computedY, computedK];
};
var cmyk2rgb = function cmyk2rgb(cyan, magenta, yellow, black) {
  var c = cyan / 100;
  var m = magenta / 100;
  var y = yellow / 100;
  var k = black / 100;
  c = c * (1 - k) + k;
  m = m * (1 - k) + k;
  y = y * (1 - k) + k;
  var r = 1 - c;
  var g = 1 - m;
  var b = 1 - y;
  r = Math.round(255 * r);
  g = Math.round(255 * g);
  b = Math.round(255 * b);
  return {
    r: r,
    g: g,
    b: b
  };
};
var REG_CMYK_STRING = /cmyk\((\d+%?),(\d+%?),(\d+%?),(\d+%?)\)/;
var toNumber = function toNumber(str) {
  return Math.max(0, Math.min(255, parseInt(str, 10)));
};
var cmykInputToColor = function cmykInputToColor(input) {
  if (/cmyk/i.test(input)) {
    var str = input.replace(/\s/g, "");
    var match = str.match(REG_CMYK_STRING);
    var c = toNumber(match[1]);
    var m = toNumber(match[2]);
    var y = toNumber(match[3]);
    var k = toNumber(match[4]);
    var _cmyk2rgb = cmyk2rgb(c, m, y, k),
      r = _cmyk2rgb.r,
      g = _cmyk2rgb.g,
      b = _cmyk2rgb.b;
    return "rgb(".concat(r, ", ").concat(g, ", ").concat(b, ")");
  }
  return input;
};

var combineRegExp = function combineRegExp(regexpList, flags) {
  var source = "";
  for (var i = 0; i < regexpList.length; i++) {
    if (isString(regexpList[i])) {
      source += regexpList[i];
    } else {
      source += regexpList[i].source;
    }
  }
  return new RegExp(source, flags);
};
var generateRegExp = function generateRegExp() {
  var searchFlags = "gi";
  var rAngle = /(?:[+-]?\d*\.?\d+)(?:deg|grad|rad|turn)/;
  var rSideCornerCapture = /to\s+((?:(?:left|right|top|bottom)(?:\s+(?:top|bottom|left|right))?))/;
  var rComma = /\s*,\s*/;
  var rColorHex = /#(?:[a-f0-9]{6}|[a-f0-9]{3})/;
  var rDigits3 = /\(\s*(?:\d{1,3}\s*,\s*){2}\d{1,3}\s*\)/;
  var rDigits4 = /\(\s*(?:\d{1,3}\s*,\s*){2}\d{1,3}\s*,\s*\d*\.?\d+\)/;
  var rValue = /(?:[+-]?\d*\.?\d+)(?:%|[a-z]+)?/;
  var rKeyword = /[_a-z-][_a-z0-9-]*/;
  var rColor = combineRegExp(["(?:", rColorHex, "|", "(?:rgb|hsl)", rDigits3, "|", "(?:rgba|hsla)", rDigits4, "|", rKeyword, ")"], "");
  var rColorStop = combineRegExp([rColor, "(?:\\s+", rValue, "(?:\\s+", rValue, ")?)?"], "");
  var rColorStopList = combineRegExp(["(?:", rColorStop, rComma, ")*", rColorStop], "");
  var rLineCapture = combineRegExp(["(?:(", rAngle, ")|", rSideCornerCapture, ")"], "");
  var rGradientSearch = combineRegExp(["(?:(", rLineCapture, ")", rComma, ")?(", rColorStopList, ")"], searchFlags);
  var rColorStopSearch = combineRegExp(["\\s*(", rColor, ")", "(?:\\s+", "(", rValue, "))?", "(?:", rComma, "\\s*)?"], searchFlags);
  return {
    gradientSearch: rGradientSearch,
    colorStopSearch: rColorStopSearch
  };
};
var parseGradient = function parseGradient(regExpLib, input) {
  var result;
  var matchColorStop;
  var stopResult;
  regExpLib.gradientSearch.lastIndex = 0;
  var matchGradient = regExpLib.gradientSearch.exec(input);
  if (!isNull(matchGradient)) {
    result = {
      original: matchGradient[0],
      colorStopList: []
    };
    if (matchGradient[1]) {
      result.line = matchGradient[1];
    }
    if (matchGradient[2]) {
      result.angle = matchGradient[2];
    }
    if (matchGradient[3]) {
      result.sideCorner = matchGradient[3];
    }
    regExpLib.colorStopSearch.lastIndex = 0;
    matchColorStop = regExpLib.colorStopSearch.exec(matchGradient[4]);
    while (!isNull(matchColorStop)) {
      stopResult = {
        color: matchColorStop[1]
      };
      if (matchColorStop[2]) {
        stopResult.position = matchColorStop[2];
      }
      result.colorStopList.push(stopResult);
      matchColorStop = regExpLib.colorStopSearch.exec(matchGradient[4]);
    }
  }
  return result;
};
var REGEXP_LIB = generateRegExp();
var REG_GRADIENT = /.*gradient\s*\(((?:\([^)]*\)|[^)(]*)*)\)/gim;
var isGradientColor = function isGradientColor(input) {
  REG_GRADIENT.lastIndex = 0;
  return REG_GRADIENT.exec(input);
};
var sideCornerDegreeMap = {
  top: 0,
  right: 90,
  bottom: 180,
  left: 270,
  "top left": 315,
  "left top": 315,
  "top right": 45,
  "right top": 45,
  "bottom left": 225,
  "left bottom": 225,
  "bottom right": 135,
  "right bottom": 135
};
var parseGradientString = function parseGradientString(input) {
  var match = isGradientColor(input);
  if (!match) return false;
  var gradientColors = {
    points: [],
    degree: 0
  };
  var result = parseGradient(REGEXP_LIB, match[1]);
  if (result.original.trim() !== match[1].trim()) return false;
  var points = result.colorStopList.map(function (_ref, index, array) {
    var color = _ref.color,
      position = _ref.position;
    var point = /* @__PURE__ */Object.create(null);
    point.color = tinyColor(color).toRgbString();
    var left = parseFloat(position);
    if (Number.isNaN(left)) {
      left = index / (array.length - 1) * 100;
    }
    point.left = left;
    return point;
  });
  gradientColors.points = points;
  var degree = parseInt(result.angle, 10);
  if (Number.isNaN(degree)) {
    degree = sideCornerDegreeMap[result.sideCorner] || 180;
  }
  gradientColors.degree = degree;
  return gradientColors;
};

var _Color;
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var mathRound = Math.round;
var hsv2rgba = function hsv2rgba(states) {
  return tinyColor(states).toRgb();
};
var hsv2hsva = function hsv2hsva(states) {
  return tinyColor(states).toHsv();
};
var hsv2hsla = function hsv2hsla(states) {
  return tinyColor(states).toHsl();
};
var gradientColors2string = function gradientColors2string(object) {
  var points = object.points,
    degree = object.degree;
  var colorsStop = points.sort(function (pA, pB) {
    return pA.left - pB.left;
  }).map(function (p) {
    return "".concat(p.color, " ").concat(Math.round(p.left * 100) / 100, "%");
  });
  return "linear-gradient(".concat(degree, "deg,").concat(colorsStop.join(","), ")");
};
var getColorWithoutAlpha = function getColorWithoutAlpha(color) {
  return tinyColor(color).setAlpha(1).toHexString();
};
var genId = function genId() {
  return (1 + Math.random() * 4294967295).toString(16);
};
var genGradientPoint = function genGradientPoint(left, color, id) {
  return {
    id: id || genId(),
    left: left,
    color: color
  };
};
var Color = /*#__PURE__*/function () {
  function Color(input) {
    _classCallCheck(this, Color);
    _defineProperty(this, "states", {
      s: 100,
      v: 100,
      h: 100,
      a: 1
    });
    _defineProperty(this, "originColor", void 0);
    _defineProperty(this, "isGradient", void 0);
    _defineProperty(this, "gradientStates", {
      colors: [],
      degree: 0,
      selectedId: null,
      css: ""
    });
    this.update(input);
  }
  return _createClass(Color, [{
    key: "update",
    value: function update(input) {
      var _this = this;
      if (input === this.originColor) return;
      var gradientColors = parseGradientString(input);
      if (this.isGradient && !gradientColors) {
        var colorHsv = tinyColor(input).toHsv();
        this.states = colorHsv;
        this.updateCurrentGradientColor();
        return;
      }
      this.originColor = input;
      this.isGradient = false;
      var colorInput = input;
      if (gradientColors) {
        var _points$, _this$gradientSelecte;
        this.isGradient = true;
        var object = gradientColors;
        var points = object.points.map(function (c, index) {
          var _this$gradientStates$;
          return genGradientPoint(c.left, c.color, (_this$gradientStates$ = _this.gradientStates.colors[index]) === null || _this$gradientStates$ === void 0 ? void 0 : _this$gradientStates$.id);
        });
        this.gradientStates = {
          colors: points,
          degree: object.degree,
          selectedId: this.gradientStates.selectedId || ((_points$ = points[0]) === null || _points$ === void 0 ? void 0 : _points$.id) || null
        };
        this.gradientStates.css = this.linearGradient;
        colorInput = (_this$gradientSelecte = this.gradientSelectedPoint) === null || _this$gradientSelecte === void 0 ? void 0 : _this$gradientSelecte.color;
      }
      this.updateStates(colorInput);
    }
  }, {
    key: "saturation",
    get: function get() {
      return this.states.s;
    },
    set: function set(value) {
      this.states.s = Math.max(0, Math.min(100, value));
      this.updateCurrentGradientColor();
    }
  }, {
    key: "value",
    get: function get() {
      return this.states.v;
    },
    set: function set(value) {
      this.states.v = Math.max(0, Math.min(100, value));
      this.updateCurrentGradientColor();
    }
  }, {
    key: "hue",
    get: function get() {
      return this.states.h;
    },
    set: function set(value) {
      this.states.h = Math.max(0, Math.min(360, value));
      this.updateCurrentGradientColor();
    }
  }, {
    key: "alpha",
    get: function get() {
      return this.states.a;
    },
    set: function set(value) {
      this.states.a = Math.max(0, Math.min(1, Math.round(value * 100) / 100));
      this.updateCurrentGradientColor();
    }
  }, {
    key: "rgb",
    get: function get() {
      var _hsv2rgba = hsv2rgba(this.states),
        r = _hsv2rgba.r,
        g = _hsv2rgba.g,
        b = _hsv2rgba.b;
      return "rgb(".concat(mathRound(r), ", ").concat(mathRound(g), ", ").concat(mathRound(b), ")");
    }
  }, {
    key: "rgba",
    get: function get() {
      var _hsv2rgba2 = hsv2rgba(this.states),
        r = _hsv2rgba2.r,
        g = _hsv2rgba2.g,
        b = _hsv2rgba2.b,
        a = _hsv2rgba2.a;
      return "rgba(".concat(mathRound(r), ", ").concat(mathRound(g), ", ").concat(mathRound(b), ", ").concat(a, ")");
    }
  }, {
    key: "hsv",
    get: function get() {
      var _this$getHsva = this.getHsva(),
        h = _this$getHsva.h,
        s = _this$getHsva.s,
        v = _this$getHsva.v;
      return "hsv(".concat(h, ", ").concat(s, "%, ").concat(v, "%)");
    }
  }, {
    key: "hsva",
    get: function get() {
      var _this$getHsva2 = this.getHsva(),
        h = _this$getHsva2.h,
        s = _this$getHsva2.s,
        v = _this$getHsva2.v,
        a = _this$getHsva2.a;
      return "hsva(".concat(h, ", ").concat(s, "%, ").concat(v, "%, ").concat(a, ")");
    }
  }, {
    key: "hsl",
    get: function get() {
      var _this$getHsla = this.getHsla(),
        h = _this$getHsla.h,
        s = _this$getHsla.s,
        l = _this$getHsla.l;
      return "hsl(".concat(h, ", ").concat(s, "%, ").concat(l, "%)");
    }
  }, {
    key: "hsla",
    get: function get() {
      var _this$getHsla2 = this.getHsla(),
        h = _this$getHsla2.h,
        s = _this$getHsla2.s,
        l = _this$getHsla2.l,
        a = _this$getHsla2.a;
      return "hsla(".concat(h, ", ").concat(s, "%, ").concat(l, "%, ").concat(a, ")");
    }
  }, {
    key: "hex",
    get: function get() {
      return tinyColor(this.states).toHexString();
    }
  }, {
    key: "hex8",
    get: function get() {
      return tinyColor(this.states).toHex8String();
    }
  }, {
    key: "cmyk",
    get: function get() {
      var _this$getCmyk = this.getCmyk(),
        c = _this$getCmyk.c,
        m = _this$getCmyk.m,
        y = _this$getCmyk.y,
        k = _this$getCmyk.k;
      return "cmyk(".concat(c, ", ").concat(m, ", ").concat(y, ", ").concat(k, ")");
    }
  }, {
    key: "css",
    get: function get() {
      if (this.isGradient) {
        return this.linearGradient;
      }
      return this.rgba;
    }
  }, {
    key: "linearGradient",
    get: function get() {
      var gradientColors = this.gradientColors,
        gradientDegree = this.gradientDegree;
      return gradientColors2string({
        points: gradientColors,
        degree: gradientDegree
      });
    }
  }, {
    key: "gradientColors",
    get: function get() {
      return this.gradientStates.colors;
    },
    set: function set(colors) {
      this.gradientStates.colors = colors;
      this.gradientStates.css = this.linearGradient;
    }
  }, {
    key: "gradientSelectedId",
    get: function get() {
      return this.gradientStates.selectedId;
    },
    set: function set(id) {
      var _this$gradientSelecte2;
      if (id === this.gradientSelectedId) {
        return;
      }
      this.gradientStates.selectedId = id;
      this.updateStates((_this$gradientSelecte2 = this.gradientSelectedPoint) === null || _this$gradientSelecte2 === void 0 ? void 0 : _this$gradientSelecte2.color);
    }
  }, {
    key: "gradientDegree",
    get: function get() {
      return this.gradientStates.degree;
    },
    set: function set(degree) {
      this.gradientStates.degree = Math.max(0, Math.min(360, degree));
      this.gradientStates.css = this.linearGradient;
    }
  }, {
    key: "gradientSelectedPoint",
    get: function get() {
      var gradientColors = this.gradientColors,
        gradientSelectedId = this.gradientSelectedId;
      return gradientColors.find(function (color) {
        return color.id === gradientSelectedId;
      });
    }
  }, {
    key: "getFormatsColorMap",
    value: function getFormatsColorMap() {
      return {
        HEX: this.hex,
        CMYK: this.cmyk,
        RGB: this.rgb,
        RGBA: this.rgba,
        HSL: this.hsl,
        HSLA: this.hsla,
        HSV: this.hsv,
        HSVA: this.hsva,
        CSS: this.css,
        HEX8: this.hex8
      };
    }
  }, {
    key: "getFormattedColor",
    value: function getFormattedColor(format, enableAlpha) {
      if (this.isGradient) return this.linearGradient;
      var finalFormat = enableAlpha && format in ALPHA_FORMAT_MAP ? ALPHA_FORMAT_MAP[format] : format;
      return this.getFormatsColorMap()[finalFormat];
    }
  }, {
    key: "updateCurrentGradientColor",
    value: function updateCurrentGradientColor() {
      var isGradient = this.isGradient,
        gradientColors = this.gradientColors,
        gradientSelectedId = this.gradientSelectedId;
      var length = gradientColors.length;
      var current = this.gradientSelectedPoint;
      if (!isGradient || length === 0 || !current) {
        return false;
      }
      var index = gradientColors.findIndex(function (color) {
        return color.id === gradientSelectedId;
      });
      var newColor = _objectSpread(_objectSpread({}, current), {}, {
        color: this.rgba
      });
      gradientColors.splice(index, 1, newColor);
      this.gradientColors = gradientColors.slice();
      return this;
    }
  }, {
    key: "updateStates",
    value: function updateStates(input) {
      var color = tinyColor(cmykInputToColor(input));
      var hsva = color.toHsv();
      this.states = hsva;
    }
  }, {
    key: "getRgba",
    value: function getRgba() {
      var _hsv2rgba3 = hsv2rgba(this.states),
        r = _hsv2rgba3.r,
        g = _hsv2rgba3.g,
        b = _hsv2rgba3.b,
        a = _hsv2rgba3.a;
      return {
        r: mathRound(r),
        g: mathRound(g),
        b: mathRound(b),
        a: a
      };
    }
  }, {
    key: "getCmyk",
    value: function getCmyk() {
      var _this$getRgba = this.getRgba(),
        r = _this$getRgba.r,
        g = _this$getRgba.g,
        b = _this$getRgba.b;
      var _rgb2cmyk = rgb2cmyk(r, g, b),
        _rgb2cmyk2 = _slicedToArray(_rgb2cmyk, 4),
        c = _rgb2cmyk2[0],
        m = _rgb2cmyk2[1],
        y = _rgb2cmyk2[2],
        k = _rgb2cmyk2[3];
      return {
        c: mathRound(c * 100),
        m: mathRound(m * 100),
        y: mathRound(y * 100),
        k: mathRound(k * 100)
      };
    }
  }, {
    key: "getHsva",
    value: function getHsva() {
      var _hsv2hsva = hsv2hsva(this.states),
        h = _hsv2hsva.h,
        s = _hsv2hsva.s,
        v = _hsv2hsva.v,
        a = _hsv2hsva.a;
      h = mathRound(h);
      s = mathRound(s * 100);
      v = mathRound(v * 100);
      a *= 1;
      return {
        h: h,
        s: s,
        v: v,
        a: a
      };
    }
  }, {
    key: "getHsla",
    value: function getHsla() {
      var _hsv2hsla = hsv2hsla(this.states),
        h = _hsv2hsla.h,
        s = _hsv2hsla.s,
        l = _hsv2hsla.l,
        a = _hsv2hsla.a;
      h = mathRound(h);
      s = mathRound(s * 100);
      l = mathRound(l * 100);
      a *= 1;
      return {
        h: h,
        s: s,
        l: l,
        a: a
      };
    }
  }, {
    key: "equals",
    value: function equals(color) {
      return tinyColor.equals(this.rgba, color);
    }
  }], [{
    key: "isValid",
    value: function isValid(color) {
      if (parseGradientString(color)) {
        return true;
      }
      return tinyColor(color).isValid();
    }
  }, {
    key: "object2color",
    value: function object2color(object, format) {
      if (format === "CMYK") {
        var c = object.c,
          m = object.m,
          y = object.y,
          k = object.k;
        return "cmyk(".concat(c, ", ").concat(m, ", ").concat(y, ", ").concat(k, ")");
      }
      if (format === "RGB" || format === "RGBA") {
        return tinyColor(object).toRgbString();
      }
      if (format === "HSL" || format === "HSLA") {
        return tinyColor(object).toHslString();
      }
      if (format === "HSV" || format === "HSVA") {
        return tinyColor(object).toHsvString();
      }
      return tinyColor(object).toHexString();
    }
  }]);
}();
_Color = Color;
_defineProperty(Color, "isGradientColor", function (input) {
  return !!isGradientColor(input);
});
_defineProperty(Color, "compare", function (color1, color2) {
  var isGradientColor1 = _Color.isGradientColor(color1);
  var isGradientColor2 = _Color.isGradientColor(color2);
  if (isGradientColor1 && isGradientColor2) {
    var gradientStr1 = parseGradientString(color1);
    var gradientStr2 = parseGradientString(color2);
    if (!gradientStr1 || !gradientStr2) return false;
    var gradientColor1 = gradientColors2string(gradientStr1);
    var gradientColor2 = gradientColors2string(gradientStr2);
    return gradientColor1 === gradientColor2;
  }
  if (!isGradientColor1 && !isGradientColor2) {
    return tinyColor.equals(color1, color2);
  }
  return false;
});
var COLOR_OBJECT_OUTPUT_KEYS = ["alpha", "css", "hex", "hex8", "hsl", "hsla", "hsv", "hsva", "rgb", "rgba", "saturation", "value", "isGradient"];
var getColorObject = function getColorObject(color) {
  if (!color) {
    return null;
  }
  var colorObject = /* @__PURE__ */Object.create(null);
  COLOR_OBJECT_OUTPUT_KEYS.forEach(function (key) {
    colorObject[key] = color[key];
  });
  if (color.isGradient) {
    colorObject.linearGradient = color.linearGradient;
  }
  return colorObject;
};

export { Color as C, gradientColors2string as a, genGradientPoint as b, cmyk2rgb as c, cmykInputToColor as d, getColorWithoutAlpha as e, genId as f, getColorObject as g, isGradientColor as i, parseGradientString as p, rgb2cmyk as r };
//# sourceMappingURL=dep-110706c1.js.map
