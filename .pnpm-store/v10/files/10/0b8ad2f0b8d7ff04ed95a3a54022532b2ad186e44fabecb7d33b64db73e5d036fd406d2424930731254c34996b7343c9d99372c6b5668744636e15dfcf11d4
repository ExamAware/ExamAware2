/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

var toFinite = require('./dep-39403bd1.js');
var _commonjsHelpers = require('./dep-8abdfb41.js');

/**
 * Converts `value` to an integer.
 *
 * **Note:** This method is loosely based on
 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * _.toInteger(3.2);
 * // => 3
 *
 * _.toInteger(Number.MIN_VALUE);
 * // => 0
 *
 * _.toInteger(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toInteger('3.2');
 * // => 3
 */
function toInteger(value) {
  var result = toFinite.toFinite(value),
    remainder = result % 1;
  return result === result ? remainder ? result - remainder : result : 0;
}

var advancedFormat$1 = {exports: {}};

advancedFormat$1.exports;
(function (module, exports) {
  !function (e, t) {
    module.exports = t() ;
  }(_commonjsHelpers.commonjsGlobal, function () {

    return function (e, t) {
      var r = t.prototype,
        n = r.format;
      r.format = function (e) {
        var t = this,
          r = this.$locale();
        if (!this.isValid()) return n.bind(this)(e);
        var s = this.$utils(),
          a = (e || "YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g, function (e) {
            switch (e) {
              case "Q":
                return Math.ceil((t.$M + 1) / 3);
              case "Do":
                return r.ordinal(t.$D);
              case "gggg":
                return t.weekYear();
              case "GGGG":
                return t.isoWeekYear();
              case "wo":
                return r.ordinal(t.week(), "W");
              case "w":
              case "ww":
                return s.s(t.week(), "w" === e ? 1 : 2, "0");
              case "W":
              case "WW":
                return s.s(t.isoWeek(), "W" === e ? 1 : 2, "0");
              case "k":
              case "kk":
                return s.s(String(0 === t.$H ? 24 : t.$H), "k" === e ? 1 : 2, "0");
              case "X":
                return Math.floor(t.$d.getTime() / 1e3);
              case "x":
                return t.$d.getTime();
              case "z":
                return "[" + t.offsetName() + "]";
              case "zzz":
                return "[" + t.offsetName("long") + "]";
              default:
                return e;
            }
          });
        return n.bind(this)(a);
      };
    };
  });
})(advancedFormat$1, advancedFormat$1.exports);
var advancedFormatExports = advancedFormat$1.exports;
var advancedFormat = /*@__PURE__*/_commonjsHelpers.getDefaultExportFromCjs(advancedFormatExports);

exports.advancedFormat = advancedFormat;
exports.toInteger = toInteger;
//# sourceMappingURL=dep-b9b30627.js.map
