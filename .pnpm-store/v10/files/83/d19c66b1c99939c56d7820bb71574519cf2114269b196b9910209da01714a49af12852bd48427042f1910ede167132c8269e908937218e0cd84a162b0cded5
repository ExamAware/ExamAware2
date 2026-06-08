/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { c as commonjsGlobal, g as getDefaultExportFromCjs } from './dep-fe644854.mjs';

var advancedFormat$2 = {exports: {}};

var advancedFormat = advancedFormat$2.exports;
(function (module, exports) {
  !function (e, t) {
    "object" == 'object' && "undefined" != 'object' ? module.exports = t() : "function" == typeof undefined && undefined.amd ? undefined(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).dayjs_plugin_advancedFormat = t();
  }(commonjsGlobal, function () {
    "use strict";

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
})(advancedFormat$2, advancedFormat$2.exports);
var advancedFormatExports = advancedFormat$2.exports;
var advancedFormat$1 = /*@__PURE__*/getDefaultExportFromCjs(advancedFormatExports);

export { advancedFormat$1 as a };
//# sourceMappingURL=dep-63305cb0.mjs.map
