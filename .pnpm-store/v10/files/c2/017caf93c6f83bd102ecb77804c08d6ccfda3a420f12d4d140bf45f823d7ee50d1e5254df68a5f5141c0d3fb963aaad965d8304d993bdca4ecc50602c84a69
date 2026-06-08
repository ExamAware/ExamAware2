/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import _defineProperty from '@babel/runtime/helpers/defineProperty';
import _asyncToGenerator from '@babel/runtime/helpers/asyncToGenerator';
import _regeneratorRuntime from '@babel/runtime/regenerator';
import { isObject, isEmpty, isBoolean, isNumber } from 'lodash-es';
import { g as getDefaultExportFromCjs } from '../../_chunks/dep-81b01cae.js';
import { b as getCharacterLength } from '../../_chunks/dep-80a99546.js';
import '@babel/runtime/helpers/toConsumableArray';
import '@babel/runtime/helpers/objectWithoutProperties';
import '@babel/runtime/helpers/slicedToArray';

var isDate$1 = {exports: {}};

var merge = {exports: {}};

merge.exports;
(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports["default"] = merge;
  function merge() {
    var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var defaults = arguments.length > 1 ? arguments[1] : undefined;
    for (var key in defaults) {
      if (typeof obj[key] === 'undefined') {
        obj[key] = defaults[key];
      }
    }
    return obj;
  }
  module.exports = exports["default"];
  module.exports["default"] = exports["default"];
})(merge, merge.exports);
var mergeExports = merge.exports;

isDate$1.exports;
(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports["default"] = isDate;
  var _merge = _interopRequireDefault(mergeExports);
  function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
      "default": e
    };
  }
  function _slicedToArray(r, e) {
    return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
  }
  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _iterableToArrayLimit(r, l) {
    var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
    if (null != t) {
      var e,
        n,
        i,
        u,
        a = [],
        f = !0,
        o = !1;
      try {
        if (i = (t = t.call(r)).next, 0 === l) {
          if (Object(t) !== t) return;
          f = !1;
        } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
      } catch (r) {
        o = !0, n = r;
      } finally {
        try {
          if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
        } finally {
          if (o) throw n;
        }
      }
      return a;
    }
  }
  function _arrayWithHoles(r) {
    if (Array.isArray(r)) return r;
  }
  function _createForOfIteratorHelper(r, e) {
    var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
    if (!t) {
      if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) {
        t && (r = t);
        var _n = 0,
          F = function F() {};
        return {
          s: F,
          n: function n() {
            return _n >= r.length ? {
              done: !0
            } : {
              done: !1,
              value: r[_n++]
            };
          },
          e: function e(r) {
            throw r;
          },
          f: F
        };
      }
      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var o,
      a = !0,
      u = !1;
    return {
      s: function s() {
        t = t.call(r);
      },
      n: function n() {
        var r = t.next();
        return a = r.done, r;
      },
      e: function e(r) {
        u = !0, o = r;
      },
      f: function f() {
        try {
          a || null == t["return"] || t["return"]();
        } finally {
          if (u) throw o;
        }
      }
    };
  }
  function _unsupportedIterableToArray(r, a) {
    if (r) {
      if ("string" == typeof r) return _arrayLikeToArray(r, a);
      var t = {}.toString.call(r).slice(8, -1);
      return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
    }
  }
  function _arrayLikeToArray(r, a) {
    (null == a || a > r.length) && (a = r.length);
    for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
    return n;
  }
  var default_date_options = {
    format: 'YYYY/MM/DD',
    delimiters: ['/', '-'],
    strictMode: false
  };
  function isValidFormat(format) {
    return /(^(y{4}|y{2})[.\/-](m{1,2})[.\/-](d{1,2})$)|(^(m{1,2})[.\/-](d{1,2})[.\/-]((y{4}|y{2})$))|(^(d{1,2})[.\/-](m{1,2})[.\/-]((y{4}|y{2})$))/gi.test(format);
  }
  function zip(date, format) {
    var zippedArr = [],
      len = Math.max(date.length, format.length);
    for (var i = 0; i < len; i++) {
      zippedArr.push([date[i], format[i]]);
    }
    return zippedArr;
  }
  function isDate(input, options) {
    if (typeof options === 'string') {
      // Allow backward compatibility for old format isDate(input [, format])
      options = (0, _merge["default"])({
        format: options
      }, default_date_options);
    } else {
      options = (0, _merge["default"])(options, default_date_options);
    }
    if (typeof input === 'string' && isValidFormat(options.format)) {
      if (options.strictMode && input.length !== options.format.length) return false;
      var formatDelimiter = options.delimiters.find(function (delimiter) {
        return options.format.indexOf(delimiter) !== -1;
      });
      var dateDelimiter = options.strictMode ? formatDelimiter : options.delimiters.find(function (delimiter) {
        return input.indexOf(delimiter) !== -1;
      });
      var dateAndFormat = zip(input.split(dateDelimiter), options.format.toLowerCase().split(formatDelimiter));
      var dateObj = {};
      var _iterator = _createForOfIteratorHelper(dateAndFormat),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _step$value = _slicedToArray(_step.value, 2),
            dateWord = _step$value[0],
            formatWord = _step$value[1];
          if (!dateWord || !formatWord || dateWord.length !== formatWord.length) {
            return false;
          }
          dateObj[formatWord.charAt(0)] = dateWord;
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      var fullYear = dateObj.y;

      // Check if the year starts with a hyphen
      if (fullYear.startsWith('-')) {
        return false; // Hyphen before year is not allowed
      }
      if (dateObj.y.length === 2) {
        var parsedYear = parseInt(dateObj.y, 10);
        if (isNaN(parsedYear)) {
          return false;
        }
        var currentYearLastTwoDigits = new Date().getFullYear() % 100;
        if (parsedYear < currentYearLastTwoDigits) {
          fullYear = "20".concat(dateObj.y);
        } else {
          fullYear = "19".concat(dateObj.y);
        }
      }
      var month = dateObj.m;
      if (dateObj.m.length === 1) {
        month = "0".concat(dateObj.m);
      }
      var day = dateObj.d;
      if (dateObj.d.length === 1) {
        day = "0".concat(dateObj.d);
      }
      return new Date("".concat(fullYear, "-").concat(month, "-").concat(day, "T00:00:00.000Z")).getUTCDate() === +dateObj.d;
    }
    if (!options.strictMode) {
      return Object.prototype.toString.call(input) === '[object Date]' && isFinite(input);
    }
    return false;
  }
  module.exports = exports["default"];
  module.exports["default"] = exports["default"];
})(isDate$1, isDate$1.exports);
var isDateExports = isDate$1.exports;
var isDate = /*@__PURE__*/getDefaultExportFromCjs(isDateExports);

var isEmail$1 = {exports: {}};

var assertString = {exports: {}};

assertString.exports;
(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports["default"] = assertString;
  function assertString(input) {
    if (input === undefined || input === null) throw new TypeError("Expected a string but received a ".concat(input));
    if (input.constructor.name !== 'String') throw new TypeError("Expected a string but received a ".concat(input.constructor.name));
  }
  module.exports = exports["default"];
  module.exports["default"] = exports["default"];
})(assertString, assertString.exports);
var assertStringExports = assertString.exports;

var checkHost = {exports: {}};

checkHost.exports;
(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports["default"] = checkHost;
  function isRegExp(obj) {
    return Object.prototype.toString.call(obj) === '[object RegExp]';
  }
  function checkHost(host, matches) {
    for (var i = 0; i < matches.length; i++) {
      var match = matches[i];
      if (host === match || isRegExp(match) && match.test(host)) {
        return true;
      }
    }
    return false;
  }
  module.exports = exports["default"];
  module.exports["default"] = exports["default"];
})(checkHost, checkHost.exports);
var checkHostExports = checkHost.exports;

var isByteLength = {exports: {}};

isByteLength.exports;
(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports["default"] = isByteLength;
  var _assertString = _interopRequireDefault(assertStringExports);
  function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
      "default": e
    };
  }
  function _typeof(o) {
    "@babel/helpers - typeof";

    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
      return typeof o;
    } : function (o) {
      return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
  }
  /* eslint-disable prefer-rest-params */
  function isByteLength(str, options) {
    (0, _assertString["default"])(str);
    var min;
    var max;
    if (_typeof(options) === 'object') {
      min = options.min || 0;
      max = options.max;
    } else {
      // backwards compatibility: isByteLength(str, min [, max])
      min = arguments[1];
      max = arguments[2];
    }
    var len = encodeURI(str).split(/%..|./).length - 1;
    return len >= min && (typeof max === 'undefined' || len <= max);
  }
  module.exports = exports["default"];
  module.exports["default"] = exports["default"];
})(isByteLength, isByteLength.exports);
var isByteLengthExports = isByteLength.exports;

var isFQDN = {exports: {}};

isFQDN.exports;
(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports["default"] = isFQDN;
  var _assertString = _interopRequireDefault(assertStringExports);
  var _merge = _interopRequireDefault(mergeExports);
  function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
      "default": e
    };
  }
  var default_fqdn_options = {
    require_tld: true,
    allow_underscores: false,
    allow_trailing_dot: false,
    allow_numeric_tld: false,
    allow_wildcard: false,
    ignore_max_length: false
  };
  function isFQDN(str, options) {
    (0, _assertString["default"])(str);
    options = (0, _merge["default"])(options, default_fqdn_options);

    /* Remove the optional trailing dot before checking validity */
    if (options.allow_trailing_dot && str[str.length - 1] === '.') {
      str = str.substring(0, str.length - 1);
    }

    /* Remove the optional wildcard before checking validity */
    if (options.allow_wildcard === true && str.indexOf('*.') === 0) {
      str = str.substring(2);
    }
    var parts = str.split('.');
    var tld = parts[parts.length - 1];
    if (options.require_tld) {
      // disallow fqdns without tld
      if (parts.length < 2) {
        return false;
      }
      if (!options.allow_numeric_tld && !/^([a-z\u00A1-\u00A8\u00AA-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}|xn[a-z0-9-]{2,})$/i.test(tld)) {
        return false;
      }

      // disallow spaces
      if (/\s/.test(tld)) {
        return false;
      }
    }

    // reject numeric TLDs
    if (!options.allow_numeric_tld && /^\d+$/.test(tld)) {
      return false;
    }
    return parts.every(function (part) {
      if (part.length > 63 && !options.ignore_max_length) {
        return false;
      }
      if (!/^[a-z_\u00a1-\uffff0-9-]+$/i.test(part)) {
        return false;
      }

      // disallow full-width chars
      if (/[\uff01-\uff5e]/.test(part)) {
        return false;
      }

      // disallow parts starting or ending with hyphen
      if (/^-|-$/.test(part)) {
        return false;
      }
      if (!options.allow_underscores && /_/.test(part)) {
        return false;
      }
      return true;
    });
  }
  module.exports = exports["default"];
  module.exports["default"] = exports["default"];
})(isFQDN, isFQDN.exports);
var isFQDNExports = isFQDN.exports;

var isIP = {exports: {}};

isIP.exports;
(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports["default"] = isIP;
  var _assertString = _interopRequireDefault(assertStringExports);
  function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
      "default": e
    };
  }
  function _typeof(o) {
    "@babel/helpers - typeof";

    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
      return typeof o;
    } : function (o) {
      return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
  }
  /**
  11.3.  Examples
  	   The following addresses
  	             fe80::1234 (on the 1st link of the node)
               ff02::5678 (on the 5th link of the node)
               ff08::9abc (on the 10th organization of the node)
  	   would be represented as follows:
  	             fe80::1234%1
               ff02::5678%5
               ff08::9abc%10
  	   (Here we assume a natural translation from a zone index to the
     <zone_id> part, where the Nth zone of any scope is translated into
     "N".)
  	   If we use interface names as <zone_id>, those addresses could also be
     represented as follows:
  	            fe80::1234%ne0
              ff02::5678%pvc1.3
              ff08::9abc%interface10
  	   where the interface "ne0" belongs to the 1st link, "pvc1.3" belongs
     to the 5th link, and "interface10" belongs to the 10th organization.
   * * */
  var IPv4SegmentFormat = '(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])';
  var IPv4AddressFormat = "(".concat(IPv4SegmentFormat, "[.]){3}").concat(IPv4SegmentFormat);
  var IPv4AddressRegExp = new RegExp("^".concat(IPv4AddressFormat, "$"));
  var IPv6SegmentFormat = '(?:[0-9a-fA-F]{1,4})';
  var IPv6AddressRegExp = new RegExp('^(' + "(?:".concat(IPv6SegmentFormat, ":){7}(?:").concat(IPv6SegmentFormat, "|:)|") + "(?:".concat(IPv6SegmentFormat, ":){6}(?:").concat(IPv4AddressFormat, "|:").concat(IPv6SegmentFormat, "|:)|") + "(?:".concat(IPv6SegmentFormat, ":){5}(?::").concat(IPv4AddressFormat, "|(:").concat(IPv6SegmentFormat, "){1,2}|:)|") + "(?:".concat(IPv6SegmentFormat, ":){4}(?:(:").concat(IPv6SegmentFormat, "){0,1}:").concat(IPv4AddressFormat, "|(:").concat(IPv6SegmentFormat, "){1,3}|:)|") + "(?:".concat(IPv6SegmentFormat, ":){3}(?:(:").concat(IPv6SegmentFormat, "){0,2}:").concat(IPv4AddressFormat, "|(:").concat(IPv6SegmentFormat, "){1,4}|:)|") + "(?:".concat(IPv6SegmentFormat, ":){2}(?:(:").concat(IPv6SegmentFormat, "){0,3}:").concat(IPv4AddressFormat, "|(:").concat(IPv6SegmentFormat, "){1,5}|:)|") + "(?:".concat(IPv6SegmentFormat, ":){1}(?:(:").concat(IPv6SegmentFormat, "){0,4}:").concat(IPv4AddressFormat, "|(:").concat(IPv6SegmentFormat, "){1,6}|:)|") + "(?::((?::".concat(IPv6SegmentFormat, "){0,5}:").concat(IPv4AddressFormat, "|(?::").concat(IPv6SegmentFormat, "){1,7}|:))") + ')(%[0-9a-zA-Z.]{1,})?$');
  function isIP(ipAddress) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    (0, _assertString["default"])(ipAddress);

    // accessing 'arguments' for backwards compatibility: isIP(ipAddress [, version])
    // eslint-disable-next-line prefer-rest-params
    var version = (_typeof(options) === 'object' ? options.version : arguments[1]) || '';
    if (!version) {
      return isIP(ipAddress, {
        version: 4
      }) || isIP(ipAddress, {
        version: 6
      });
    }
    if (version.toString() === '4') {
      return IPv4AddressRegExp.test(ipAddress);
    }
    if (version.toString() === '6') {
      return IPv6AddressRegExp.test(ipAddress);
    }
    return false;
  }
  module.exports = exports["default"];
  module.exports["default"] = exports["default"];
})(isIP, isIP.exports);
var isIPExports = isIP.exports;

isEmail$1.exports;
(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports["default"] = isEmail;
  var _assertString = _interopRequireDefault(assertStringExports);
  var _checkHost = _interopRequireDefault(checkHostExports);
  var _isByteLength = _interopRequireDefault(isByteLengthExports);
  var _isFQDN = _interopRequireDefault(isFQDNExports);
  var _isIP = _interopRequireDefault(isIPExports);
  var _merge = _interopRequireDefault(mergeExports);
  function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
      "default": e
    };
  }
  var default_email_options = {
    allow_display_name: false,
    allow_underscores: false,
    require_display_name: false,
    allow_utf8_local_part: true,
    require_tld: true,
    blacklisted_chars: '',
    ignore_max_length: false,
    host_blacklist: [],
    host_whitelist: []
  };

  /* eslint-disable max-len */
  /* eslint-disable no-control-regex */
  var splitNameAddress = /^([^\x00-\x1F\x7F-\x9F\cX]+)</i;
  var emailUserPart = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~]+$/i;
  var gmailUserPart = /^[a-z\d]+$/;
  var quotedEmailUser = /^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f]))*$/i;
  var emailUserUtf8Part = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\u00A1-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+$/i;
  var quotedEmailUserUtf8 = /^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*$/i;
  var defaultMaxEmailLength = 254;
  /* eslint-enable max-len */
  /* eslint-enable no-control-regex */

  /**
   * Validate display name according to the RFC2822: https://tools.ietf.org/html/rfc2822#appendix-A.1.2
   * @param {String} display_name
   */
  function validateDisplayName(display_name) {
    var display_name_without_quotes = display_name.replace(/^"(.+)"$/, '$1');
    // display name with only spaces is not valid
    if (!display_name_without_quotes.trim()) {
      return false;
    }

    // check whether display name contains illegal character
    var contains_illegal = /[\.";<>]/.test(display_name_without_quotes);
    if (contains_illegal) {
      // if contains illegal characters,
      // must to be enclosed in double-quotes, otherwise it's not a valid display name
      if (display_name_without_quotes === display_name) {
        return false;
      }

      // the quotes in display name must start with character symbol \
      var all_start_with_back_slash = display_name_without_quotes.split('"').length === display_name_without_quotes.split('\\"').length;
      if (!all_start_with_back_slash) {
        return false;
      }
    }
    return true;
  }
  function isEmail(str, options) {
    (0, _assertString["default"])(str);
    options = (0, _merge["default"])(options, default_email_options);
    if (options.require_display_name || options.allow_display_name) {
      var display_email = str.match(splitNameAddress);
      if (display_email) {
        var display_name = display_email[1];

        // Remove display name and angle brackets to get email address
        // Can be done in the regex but will introduce a ReDOS (See  #1597 for more info)
        str = str.replace(display_name, '').replace(/(^<|>$)/g, '');

        // sometimes need to trim the last space to get the display name
        // because there may be a space between display name and email address
        // eg. myname <address@gmail.com>
        // the display name is `myname` instead of `myname `, so need to trim the last space
        if (display_name.endsWith(' ')) {
          display_name = display_name.slice(0, -1);
        }
        if (!validateDisplayName(display_name)) {
          return false;
        }
      } else if (options.require_display_name) {
        return false;
      }
    }
    if (!options.ignore_max_length && str.length > defaultMaxEmailLength) {
      return false;
    }
    var parts = str.split('@');
    var domain = parts.pop();
    var lower_domain = domain.toLowerCase();
    if (options.host_blacklist.length > 0 && (0, _checkHost["default"])(lower_domain, options.host_blacklist)) {
      return false;
    }
    if (options.host_whitelist.length > 0 && !(0, _checkHost["default"])(lower_domain, options.host_whitelist)) {
      return false;
    }
    var user = parts.join('@');
    if (options.domain_specific_validation && (lower_domain === 'gmail.com' || lower_domain === 'googlemail.com')) {
      /*
      Previously we removed dots for gmail addresses before validating.
      This was removed because it allows `multiple..dots@gmail.com`
      to be reported as valid, but it is not.
      Gmail only normalizes single dots, removing them from here is pointless,
      should be done in normalizeEmail
      */
      user = user.toLowerCase();

      // Removing sub-address from username before gmail validation
      var username = user.split('+')[0];

      // Dots are not included in gmail length restriction
      if (!(0, _isByteLength["default"])(username.replace(/\./g, ''), {
        min: 6,
        max: 30
      })) {
        return false;
      }
      var _user_parts = username.split('.');
      for (var i = 0; i < _user_parts.length; i++) {
        if (!gmailUserPart.test(_user_parts[i])) {
          return false;
        }
      }
    }
    if (options.ignore_max_length === false && (!(0, _isByteLength["default"])(user, {
      max: 64
    }) || !(0, _isByteLength["default"])(domain, {
      max: 254
    }))) {
      return false;
    }
    if (!(0, _isFQDN["default"])(domain, {
      require_tld: options.require_tld,
      ignore_max_length: options.ignore_max_length,
      allow_underscores: options.allow_underscores
    })) {
      if (!options.allow_ip_domain) {
        return false;
      }
      if (!(0, _isIP["default"])(domain)) {
        if (!domain.startsWith('[') || !domain.endsWith(']')) {
          return false;
        }
        var noBracketdomain = domain.slice(1, -1);
        if (noBracketdomain.length === 0 || !(0, _isIP["default"])(noBracketdomain)) {
          return false;
        }
      }
    }
    if (options.blacklisted_chars) {
      if (user.search(new RegExp("[".concat(options.blacklisted_chars, "]+"), 'g')) !== -1) return false;
    }
    if (user[0] === '"' && user[user.length - 1] === '"') {
      user = user.slice(1, user.length - 1);
      return options.allow_utf8_local_part ? quotedEmailUserUtf8.test(user) : quotedEmailUser.test(user);
    }
    var pattern = options.allow_utf8_local_part ? emailUserUtf8Part : emailUserPart;
    var user_parts = user.split('.');
    for (var _i = 0; _i < user_parts.length; _i++) {
      if (!pattern.test(user_parts[_i])) {
        return false;
      }
    }
    return true;
  }
  module.exports = exports["default"];
  module.exports["default"] = exports["default"];
})(isEmail$1, isEmail$1.exports);
var isEmailExports = isEmail$1.exports;
var isEmail = /*@__PURE__*/getDefaultExportFromCjs(isEmailExports);

var isURL$1 = {exports: {}};

var includesString = {exports: {}};

includesString.exports;
(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports["default"] = void 0;
  var includes = function includes(str, val) {
    return str.indexOf(val) !== -1;
  };
  exports["default"] = includes;
  module.exports = exports["default"];
  module.exports["default"] = exports["default"];
})(includesString, includesString.exports);
var includesStringExports = includesString.exports;

isURL$1.exports;
(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports["default"] = isURL;
  var _assertString = _interopRequireDefault(assertStringExports);
  var _checkHost = _interopRequireDefault(checkHostExports);
  var _includesString = _interopRequireDefault(includesStringExports);
  var _isFQDN = _interopRequireDefault(isFQDNExports);
  var _isIP = _interopRequireDefault(isIPExports);
  var _merge = _interopRequireDefault(mergeExports);
  function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
      "default": e
    };
  }
  function _slicedToArray(r, e) {
    return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
  }
  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _unsupportedIterableToArray(r, a) {
    if (r) {
      if ("string" == typeof r) return _arrayLikeToArray(r, a);
      var t = {}.toString.call(r).slice(8, -1);
      return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
    }
  }
  function _arrayLikeToArray(r, a) {
    (null == a || a > r.length) && (a = r.length);
    for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
    return n;
  }
  function _iterableToArrayLimit(r, l) {
    var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
    if (null != t) {
      var e,
        n,
        i,
        u,
        a = [],
        f = !0,
        o = !1;
      try {
        if (i = (t = t.call(r)).next, 0 === l) {
          if (Object(t) !== t) return;
          f = !1;
        } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
      } catch (r) {
        o = !0, n = r;
      } finally {
        try {
          if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
        } finally {
          if (o) throw n;
        }
      }
      return a;
    }
  }
  function _arrayWithHoles(r) {
    if (Array.isArray(r)) return r;
  }
  /*
  options for isURL method
  	protocols - valid protocols can be modified with this option.
  require_tld - If set to false isURL will not check if the URL's host includes a top-level domain.
  require_protocol - if set to true isURL will return false if protocol is not present in the URL.
  require_host - if set to false isURL will not check if host is present in the URL.
  require_port - if set to true isURL will check if port is present in the URL.
  require_valid_protocol - isURL will check if the URL's protocol is present in the protocols option.
  allow_underscores - if set to true, the validator will allow underscores in the URL.
  host_whitelist - if set to an array of strings or regexp, and the domain matches none of the strings
                   defined in it, the validation fails.
  host_blacklist - if set to an array of strings or regexp, and the domain matches any of the strings
                   defined in it, the validation fails.
  allow_trailing_dot - if set to true, the validator will allow the domain to end with
                       a `.` character.
  allow_protocol_relative_urls - if set to true protocol relative URLs will be allowed.
  allow_fragments - if set to false isURL will return false if fragments are present.
  allow_query_components - if set to false isURL will return false if query components are present.
  disallow_auth - if set to true, the validator will fail if the URL contains an authentication
                  component, e.g. `http://username:password@example.com`
  validate_length - if set to false isURL will skip string length validation. `max_allowed_length`
                    will be ignored if this is set as `false`.
  max_allowed_length - if set, isURL will not allow URLs longer than the specified value (default is
                       2084 that IE maximum URL length).
  	*/

  var default_url_options = {
    protocols: ['http', 'https', 'ftp'],
    require_tld: true,
    require_protocol: false,
    require_host: true,
    require_port: false,
    require_valid_protocol: true,
    allow_underscores: false,
    allow_trailing_dot: false,
    allow_protocol_relative_urls: false,
    allow_fragments: true,
    allow_query_components: true,
    validate_length: true,
    max_allowed_length: 2084
  };
  var wrapped_ipv6 = /^\[([^\]]+)\](?::([0-9]+))?$/;
  function isURL(url, options) {
    (0, _assertString["default"])(url);
    if (!url || /[\s<>]/.test(url)) {
      return false;
    }
    if (url.indexOf('mailto:') === 0) {
      return false;
    }
    options = (0, _merge["default"])(options, default_url_options);
    if (options.validate_length && url.length > options.max_allowed_length) {
      return false;
    }
    if (!options.allow_fragments && (0, _includesString["default"])(url, '#')) {
      return false;
    }
    if (!options.allow_query_components && ((0, _includesString["default"])(url, '?') || (0, _includesString["default"])(url, '&'))) {
      return false;
    }
    var protocol, auth, host, hostname, port, port_str, split, ipv6;
    split = url.split('#');
    url = split.shift();
    split = url.split('?');
    url = split.shift();

    // Replaced the 'split("://")' logic with a regex to match the protocol.
    // This correctly identifies schemes like `javascript:` which don't use `//`.
    // However, we need to be careful not to confuse authentication credentials (user:password@host)
    // with protocols. A colon before an @ symbol might be part of auth, not a protocol separator.
    var protocol_match = url.match(/^([a-z][a-z0-9+\-.]*):/i);
    var had_explicit_protocol = false;
    var cleanUpProtocol = function cleanUpProtocol(potential_protocol) {
      had_explicit_protocol = true;
      protocol = potential_protocol.toLowerCase();
      if (options.require_valid_protocol && options.protocols.indexOf(protocol) === -1) {
        // The identified protocol is not in the allowed list.
        return false;
      }

      // Remove the protocol from the URL string.
      return url.substring(protocol_match[0].length);
    };
    if (protocol_match) {
      var potential_protocol = protocol_match[1];
      var after_colon = url.substring(protocol_match[0].length);

      // Check if what follows looks like authentication credentials (user:password@host)
      // rather than a protocol. This happens when:
      // 1. There's no `//` after the colon (protocols like `http://` have this)
      // 2. There's an `@` symbol before any `/`
      // 3. The part before `@` contains only valid auth characters (alphanumeric, -, _, ., %, :)
      var starts_with_slashes = after_colon.slice(0, 2) === '//';
      if (!starts_with_slashes) {
        var first_slash_position = after_colon.indexOf('/');
        var before_slash = first_slash_position === -1 ? after_colon : after_colon.substring(0, first_slash_position);
        var at_position = before_slash.indexOf('@');
        if (at_position !== -1) {
          var before_at = before_slash.substring(0, at_position);
          var valid_auth_regex = /^[a-zA-Z0-9\-_.%:]*$/;
          var is_valid_auth = valid_auth_regex.test(before_at);
          if (is_valid_auth) {
            // This looks like authentication (e.g., user:password@host), not a protocol
            if (options.require_protocol) {
              return false;
            }

            // Don't consume the colon; let the auth parsing handle it later
          } else {
            // This looks like a malicious protocol (e.g., javascript:alert();@host)
            url = cleanUpProtocol(potential_protocol);
            if (url === false) {
              return false;
            }
          }
        } else {
          // No @ symbol found. Check if this could be a port number instead of a protocol.
          // If what's after the colon is numeric (or starts with a digit and contains only
          // valid port characters until a path separator), it's likely hostname:port, not a protocol.
          var looks_like_port = /^[0-9]/.test(after_colon);
          if (looks_like_port) {
            // This looks like hostname:port, not a protocol
            if (options.require_protocol) {
              return false;
            }
            // Don't consume anything; let it be parsed as hostname:port
          } else {
            // This is definitely a protocol
            url = cleanUpProtocol(potential_protocol);
            if (url === false) {
              return false;
            }
          }
        }
      } else {
        // Starts with '//', this is definitely a protocol like http://
        url = cleanUpProtocol(potential_protocol);
        if (url === false) {
          return false;
        }
      }
    } else if (options.require_protocol) {
      return false;
    }

    // Handle leading '//' only as protocol-relative when there was NO explicit protocol.
    // If there was an explicit protocol, '//' is the normal separator
    // and should be stripped unconditionally.
    if (url.slice(0, 2) === '//') {
      if (!had_explicit_protocol && !options.allow_protocol_relative_urls) {
        return false;
      }
      url = url.slice(2);
    }
    if (url === '') {
      return false;
    }
    split = url.split('/');
    url = split.shift();
    if (url === '' && !options.require_host) {
      return true;
    }
    split = url.split('@');
    if (split.length > 1) {
      if (options.disallow_auth) {
        return false;
      }
      if (split[0] === '') {
        return false;
      }
      auth = split.shift();
      if (auth.indexOf(':') >= 0 && auth.split(':').length > 2) {
        return false;
      }
      var _auth$split = auth.split(':'),
        _auth$split2 = _slicedToArray(_auth$split, 2),
        user = _auth$split2[0],
        password = _auth$split2[1];
      if (user === '' && password === '') {
        return false;
      }
    }
    hostname = split.join('@');
    port_str = null;
    ipv6 = null;
    var ipv6_match = hostname.match(wrapped_ipv6);
    if (ipv6_match) {
      host = '';
      ipv6 = ipv6_match[1];
      port_str = ipv6_match[2] || null;
    } else {
      split = hostname.split(':');
      host = split.shift();
      if (split.length) {
        port_str = split.join(':');
      }
    }
    if (port_str !== null && port_str.length > 0) {
      port = parseInt(port_str, 10);
      if (!/^[0-9]+$/.test(port_str) || port <= 0 || port > 65535) {
        return false;
      }
    } else if (options.require_port) {
      return false;
    }
    if (options.host_whitelist) {
      return (0, _checkHost["default"])(host, options.host_whitelist);
    }
    if (host === '' && !options.require_host) {
      return true;
    }
    if (!(0, _isIP["default"])(host) && !(0, _isFQDN["default"])(host, options) && (!ipv6 || !(0, _isIP["default"])(ipv6, 6))) {
      return false;
    }
    host = host || ipv6;
    if (options.host_blacklist && (0, _checkHost["default"])(host, options.host_blacklist)) {
      return false;
    }
    return true;
  }
  module.exports = exports["default"];
  module.exports["default"] = exports["default"];
})(isURL$1, isURL$1.exports);
var isURLExports = isURL$1.exports;
var isURL = /*@__PURE__*/getDefaultExportFromCjs(isURLExports);

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function isValueEmpty(val) {
  var type = Object.prototype.toString.call(val);
  var typeMap = {
    Date: "[object Date]"
  };
  if (type === typeMap.Date) {
    return false;
  }
  return isObject(val) ? isEmpty(val) : ["", void 0, null].includes(val);
}
var VALIDATE_MAP = {
  date: isDate,
  url: isURL,
  email: isEmail,
  required: function required(val) {
    return !isValueEmpty(val);
  },
  whitespace: function whitespace(val) {
    return !(/^\s+$/.test(val) || val === "");
  },
  "boolean": function boolean(val) {
    return isBoolean(val);
  },
  max: function max(val, num) {
    return isNumber(val) ? val <= num : getCharacterLength(val) <= num;
  },
  min: function min(val, num) {
    return isNumber(val) ? val >= num : getCharacterLength(val) >= num;
  },
  len: function len(val, num) {
    return getCharacterLength(String(val)) === num;
  },
  number: function number(val) {
    return isNumber(val);
  },
  "enum": function _enum(val, strs) {
    return strs.includes(val);
  },
  idcard: function idcard(val) {
    return /^(\d{18,18}|\d{15,15}|\d{17,17}x)$/i.test(val);
  },
  telnumber: function telnumber(val) {
    return /^1[3-9]\d{9}$/.test(val);
  },
  pattern: function pattern(val, regexp) {
    var reg = typeof regexp === "string" ? new RegExp(regexp) : regexp;
    return reg.test(String(val));
  },
  validator: function validator(val, validate2) {
    return validate2(val);
  }
};
function validateOneRule(_x, _x2) {
  return _validateOneRule.apply(this, arguments);
}
function _validateOneRule() {
  _validateOneRule = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime.mark(function _callee(value, rule) {
    var validateResult, keys, vOptions, vValidateFun, i, key, validateRule;
    return _regeneratorRuntime.wrap(function (_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          validateResult = {
            result: true
          };
          keys = Object.keys(rule);
          i = 0;
        case 1:
          if (!(i < keys.length)) {
            _context.next = 4;
            break;
          }
          key = keys[i];
          if (!(!rule.required && isValueEmpty(value) && !rule.validator)) {
            _context.next = 2;
            break;
          }
          return _context.abrupt("return", validateResult);
        case 2:
          validateRule = VALIDATE_MAP[key];
          if (!(validateRule && (rule[key] || rule[key] === 0))) {
            _context.next = 3;
            break;
          }
          vOptions = rule[key] === true ? void 0 : rule[key];
          vValidateFun = validateRule;
          return _context.abrupt("continue", 4);
        case 3:
          i++;
          _context.next = 1;
          break;
        case 4:
          if (!vValidateFun) {
            _context.next = 7;
            break;
          }
          _context.next = 5;
          return vValidateFun(value, vOptions);
        case 5:
          validateResult = _context.sent;
          if (!isBoolean(validateResult)) {
            _context.next = 6;
            break;
          }
          return _context.abrupt("return", _objectSpread(_objectSpread({}, rule), {}, {
            result: validateResult
          }));
        case 6:
          if (!isObject(validateResult)) {
            _context.next = 7;
            break;
          }
          return _context.abrupt("return", validateResult);
        case 7:
          return _context.abrupt("return", validateResult);
        case 8:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _validateOneRule.apply(this, arguments);
}
function validate(_x3, _x4) {
  return _validate.apply(this, arguments);
}
function _validate() {
  _validate = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime.mark(function _callee2(value, rules) {
    var all, r;
    return _regeneratorRuntime.wrap(function (_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          all = rules.map(function (rule) {
            return validateOneRule(value, rule);
          });
          _context2.next = 1;
          return Promise.all(all);
        case 1:
          r = _context2.sent;
          return _context2.abrupt("return", r);
        case 2:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return _validate.apply(this, arguments);
}

export { isValueEmpty, validate, validateOneRule };
//# sourceMappingURL=form-model.js.map
