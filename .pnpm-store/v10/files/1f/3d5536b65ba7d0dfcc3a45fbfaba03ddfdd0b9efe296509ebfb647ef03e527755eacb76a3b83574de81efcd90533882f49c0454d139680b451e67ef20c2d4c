/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import _classCallCheck from '@babel/runtime/helpers/classCallCheck';
import _createClass from '@babel/runtime/helpers/createClass';
import _defineProperty from '@babel/runtime/helpers/defineProperty';
import { computed } from 'vue';

var _Mode, _Ecc;
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function appendBits(val, len, bb) {
  if (len < 0 || len > 31 || val >>> len !== 0) {
    throw new RangeError("Value out of range");
  }
  for (var i = len - 1; i >= 0; i--) {
    bb.push(val >>> i & 1);
  }
}
function getBit(x, i) {
  return (x >>> i & 1) !== 0;
}
function assert(cond) {
  if (!cond) {
    throw new Error("Assertion error");
  }
}
var Mode = /*#__PURE__*/function () {
  function Mode(modeBits, numBitsCharCount) {
    _classCallCheck(this, Mode);
    _defineProperty(this, "modeBits", void 0);
    _defineProperty(this, "numBitsCharCount", void 0);
    this.modeBits = modeBits;
    this.numBitsCharCount = numBitsCharCount;
  }
  return _createClass(Mode, [{
    key: "numCharCountBits",
    value: function numCharCountBits(ver) {
      return this.numBitsCharCount[Math.floor((ver + 7) / 17)];
    }
  }]);
}();
_Mode = Mode;
_defineProperty(Mode, "NUMERIC", new _Mode(1, [10, 12, 14]));
_defineProperty(Mode, "ALPHANUMERIC", new _Mode(2, [9, 11, 13]));
_defineProperty(Mode, "BYTE", new _Mode(4, [8, 16, 16]));
_defineProperty(Mode, "KANJI", new _Mode(8, [8, 10, 12]));
_defineProperty(Mode, "ECI", new _Mode(7, [0, 0, 0]));
var Ecc = /*#__PURE__*/_createClass(function Ecc(ordinal, formatBits) {
  _classCallCheck(this, Ecc);
  _defineProperty(this, "ordinal", void 0);
  _defineProperty(this, "formatBits", void 0);
  this.ordinal = ordinal;
  this.formatBits = formatBits;
});
_Ecc = Ecc;
_defineProperty(Ecc, "LOW", new _Ecc(0, 1));
_defineProperty(Ecc, "MEDIUM", new _Ecc(1, 0));
_defineProperty(Ecc, "QUARTILE", new _Ecc(2, 3));
_defineProperty(Ecc, "HIGH", new _Ecc(3, 2));
var QrSegment = /*#__PURE__*/function () {
  function QrSegment(mode, numChars, bitData) {
    _classCallCheck(this, QrSegment);
    _defineProperty(this, "mode", void 0);
    _defineProperty(this, "numChars", void 0);
    _defineProperty(this, "bitData", void 0);
    this.mode = mode;
    this.numChars = numChars;
    this.bitData = bitData;
    if (numChars < 0) {
      throw new RangeError("Invalid argument");
    }
    this.bitData = bitData.slice();
  }
  return _createClass(QrSegment, [{
    key: "getData",
    value: function getData() {
      return this.bitData.slice();
    }
  }], [{
    key: "makeBytes",
    value: function makeBytes(data) {
      var bb = [];
      var _iterator = _createForOfIteratorHelper(data),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var b = _step.value;
          appendBits(b, 8, bb);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      return new QrSegment(Mode.BYTE, data.length, bb);
    }
  }, {
    key: "makeNumeric",
    value: function makeNumeric(digits) {
      if (!QrSegment.isNumeric(digits)) {
        throw new RangeError("String contains non-numeric characters");
      }
      var bb = [];
      for (var i = 0; i < digits.length;) {
        var n = Math.min(digits.length - i, 3);
        appendBits(parseInt(digits.substring(i, i + n), 10), n * 3 + 1, bb);
        i += n;
      }
      return new QrSegment(Mode.NUMERIC, digits.length, bb);
    }
  }, {
    key: "makeAlphanumeric",
    value: function makeAlphanumeric(text) {
      if (!QrSegment.isAlphanumeric(text)) {
        throw new RangeError("String contains unencodable characters in alphanumeric mode");
      }
      var bb = [];
      var i;
      for (i = 0; i + 2 <= text.length; i += 2) {
        var temp = QrSegment.ALPHANUMERIC_CHARSET.indexOf(text.charAt(i)) * 45;
        temp += QrSegment.ALPHANUMERIC_CHARSET.indexOf(text.charAt(i + 1));
        appendBits(temp, 11, bb);
      }
      if (i < text.length) {
        appendBits(QrSegment.ALPHANUMERIC_CHARSET.indexOf(text.charAt(i)), 6, bb);
      }
      return new QrSegment(Mode.ALPHANUMERIC, text.length, bb);
    }
  }, {
    key: "makeSegments",
    value: function makeSegments(text) {
      if (text === "") {
        return [];
      }
      if (QrSegment.isNumeric(text)) {
        return [QrSegment.makeNumeric(text)];
      }
      if (QrSegment.isAlphanumeric(text)) {
        return [QrSegment.makeAlphanumeric(text)];
      }
      return [QrSegment.makeBytes(QrSegment.toUtf8ByteArray(text))];
    }
  }, {
    key: "makeEci",
    value: function makeEci(assignVal) {
      var bb = [];
      if (assignVal < 0) {
        throw new RangeError("ECI assignment value out of range");
      } else if (assignVal < 1 << 7) {
        appendBits(assignVal, 8, bb);
      } else if (assignVal < 1 << 14) {
        appendBits(2, 2, bb);
        appendBits(assignVal, 14, bb);
      } else if (assignVal < 1e6) {
        appendBits(6, 3, bb);
        appendBits(assignVal, 21, bb);
      } else {
        throw new RangeError("ECI assignment value out of range");
      }
      return new QrSegment(Mode.ECI, 0, bb);
    }
  }, {
    key: "isNumeric",
    value: function isNumeric(text) {
      return QrSegment.NUMERIC_REGEX.test(text);
    }
  }, {
    key: "isAlphanumeric",
    value: function isAlphanumeric(text) {
      return QrSegment.ALPHANUMERIC_REGEX.test(text);
    }
  }, {
    key: "getTotalBits",
    value: function getTotalBits(segs, version) {
      var result = 0;
      var _iterator2 = _createForOfIteratorHelper(segs),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var seg = _step2.value;
          var ccbits = seg.mode.numCharCountBits(version);
          if (seg.numChars >= 1 << ccbits) {
            return Infinity;
          }
          result += 4 + ccbits + seg.bitData.length;
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      return result;
    }
  }, {
    key: "toUtf8ByteArray",
    value: function toUtf8ByteArray(input) {
      var str = encodeURI(input);
      var result = [];
      for (var i = 0; i < str.length; i++) {
        if (str.charAt(i) !== "%") {
          result.push(str.charCodeAt(i));
        } else {
          result.push(parseInt(str.substring(i + 1, i + 3), 16));
          i += 2;
        }
      }
      return result;
    }
  }]);
}();
_defineProperty(QrSegment, "NUMERIC_REGEX", /^[0-9]*$/);
_defineProperty(QrSegment, "ALPHANUMERIC_REGEX", /^[A-Z0-9 $%*+.\/:-]*$/);
_defineProperty(QrSegment, "ALPHANUMERIC_CHARSET", "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:");
var QrCode = /*#__PURE__*/function () {
  function QrCode(version, errorCorrectionLevel, dataCodewords, oriMsk) {
    _classCallCheck(this, QrCode);
    _defineProperty(this, "size", void 0);
    _defineProperty(this, "mask", void 0);
    _defineProperty(this, "modules", []);
    _defineProperty(this, "isFunction", []);
    _defineProperty(this, "version", void 0);
    _defineProperty(this, "errorCorrectionLevel", void 0);
    var msk = oriMsk;
    this.version = version;
    this.errorCorrectionLevel = errorCorrectionLevel;
    if (version < QrCode.MIN_VERSION || version > QrCode.MAX_VERSION) {
      throw new RangeError("Version value out of range");
    }
    if (msk < -1 || msk > 7) {
      throw new RangeError("Mask value out of range");
    }
    this.size = version * 4 + 17;
    var row = [];
    for (var i = 0; i < this.size; i++) {
      row.push(false);
    }
    for (var _i = 0; _i < this.size; _i++) {
      this.modules.push(row.slice());
      this.isFunction.push(row.slice());
    }
    this.drawFunctionPatterns();
    var allCodewords = this.addEccAndInterleave(dataCodewords);
    this.drawCodewords(allCodewords);
    if (msk === -1) {
      var minPenalty = 1e9;
      for (var _i2 = 0; _i2 < 8; _i2++) {
        this.applyMask(_i2);
        this.drawFormatBits(_i2);
        var penalty = this.getPenaltyScore();
        if (penalty < minPenalty) {
          msk = _i2;
          minPenalty = penalty;
        }
        this.applyMask(_i2);
      }
    }
    assert(msk >= 0 && msk <= 7);
    this.mask = msk;
    this.applyMask(msk);
    this.drawFormatBits(msk);
    this.isFunction = [];
  }
  return _createClass(QrCode, [{
    key: "getModule",
    value: function getModule(x, y) {
      return x >= 0 && x < this.size && y >= 0 && y < this.size && this.modules[y][x];
    }
  }, {
    key: "getModules",
    value: function getModules() {
      return this.modules;
    }
  }, {
    key: "drawFunctionPatterns",
    value: function drawFunctionPatterns() {
      for (var i = 0; i < this.size; i++) {
        this.setFunctionModule(6, i, i % 2 === 0);
        this.setFunctionModule(i, 6, i % 2 === 0);
      }
      this.drawFinderPattern(3, 3);
      this.drawFinderPattern(this.size - 4, 3);
      this.drawFinderPattern(3, this.size - 4);
      var alignPatPos = this.getAlignmentPatternPositions();
      var numAlign = alignPatPos.length;
      for (var _i3 = 0; _i3 < numAlign; _i3++) {
        for (var j = 0; j < numAlign; j++) {
          if (!(_i3 === 0 && j === 0 || _i3 === 0 && j === numAlign - 1 || _i3 === numAlign - 1 && j === 0)) {
            this.drawAlignmentPattern(alignPatPos[_i3], alignPatPos[j]);
          }
        }
      }
      this.drawFormatBits(0);
      this.drawVersion();
    }
  }, {
    key: "drawFormatBits",
    value: function drawFormatBits(mask) {
      var data = this.errorCorrectionLevel.formatBits << 3 | mask;
      var rem = data;
      for (var i = 0; i < 10; i++) {
        rem = rem << 1 ^ (rem >>> 9) * 1335;
      }
      var bits = (data << 10 | rem) ^ 21522;
      assert(bits >>> 15 === 0);
      for (var _i4 = 0; _i4 <= 5; _i4++) {
        this.setFunctionModule(8, _i4, getBit(bits, _i4));
      }
      this.setFunctionModule(8, 7, getBit(bits, 6));
      this.setFunctionModule(8, 8, getBit(bits, 7));
      this.setFunctionModule(7, 8, getBit(bits, 8));
      for (var _i5 = 9; _i5 < 15; _i5++) {
        this.setFunctionModule(14 - _i5, 8, getBit(bits, _i5));
      }
      for (var _i6 = 0; _i6 < 8; _i6++) {
        this.setFunctionModule(this.size - 1 - _i6, 8, getBit(bits, _i6));
      }
      for (var _i7 = 8; _i7 < 15; _i7++) {
        this.setFunctionModule(8, this.size - 15 + _i7, getBit(bits, _i7));
      }
      this.setFunctionModule(8, this.size - 8, true);
    }
  }, {
    key: "drawVersion",
    value: function drawVersion() {
      if (this.version < 7) {
        return;
      }
      var rem = this.version;
      for (var i = 0; i < 12; i++) {
        rem = rem << 1 ^ (rem >>> 11) * 7973;
      }
      var bits = this.version << 12 | rem;
      assert(bits >>> 18 === 0);
      for (var _i8 = 0; _i8 < 18; _i8++) {
        var color = getBit(bits, _i8);
        var a = this.size - 11 + _i8 % 3;
        var b = Math.floor(_i8 / 3);
        this.setFunctionModule(a, b, color);
        this.setFunctionModule(b, a, color);
      }
    }
  }, {
    key: "drawFinderPattern",
    value: function drawFinderPattern(x, y) {
      for (var dy = -4; dy <= 4; dy++) {
        for (var dx = -4; dx <= 4; dx++) {
          var dist = Math.max(Math.abs(dx), Math.abs(dy));
          var xx = x + dx;
          var yy = y + dy;
          if (xx >= 0 && xx < this.size && yy >= 0 && yy < this.size) {
            this.setFunctionModule(xx, yy, dist !== 2 && dist !== 4);
          }
        }
      }
    }
  }, {
    key: "drawAlignmentPattern",
    value: function drawAlignmentPattern(x, y) {
      for (var dy = -2; dy <= 2; dy++) {
        for (var dx = -2; dx <= 2; dx++) {
          this.setFunctionModule(x + dx, y + dy, Math.max(Math.abs(dx), Math.abs(dy)) !== 1);
        }
      }
    }
  }, {
    key: "setFunctionModule",
    value: function setFunctionModule(x, y, isDark) {
      this.modules[y][x] = isDark;
      this.isFunction[y][x] = true;
    }
  }, {
    key: "addEccAndInterleave",
    value: function addEccAndInterleave(data) {
      var ver = this.version;
      var ecl = this.errorCorrectionLevel;
      if (data.length !== QrCode.getNumDataCodewords(ver, ecl)) {
        throw new RangeError("Invalid argument");
      }
      var numBlocks = QrCode.NUM_ERROR_CORRECTION_BLOCKS[ecl.ordinal][ver];
      var blockEccLen = QrCode.ECC_CODEWORDS_PER_BLOCK[ecl.ordinal][ver];
      var rawCodewords = Math.floor(QrCode.getNumRawDataModules(ver) / 8);
      var numShortBlocks = numBlocks - rawCodewords % numBlocks;
      var shortBlockLen = Math.floor(rawCodewords / numBlocks);
      var blocks = [];
      var rsDiv = QrCode.reedSolomonComputeDivisor(blockEccLen);
      for (var i = 0, k = 0; i < numBlocks; i++) {
        var dat = data.slice(k, k + shortBlockLen - blockEccLen + (i < numShortBlocks ? 0 : 1));
        k += dat.length;
        var ecc = QrCode.reedSolomonComputeRemainder(dat, rsDiv);
        if (i < numShortBlocks) {
          dat.push(0);
        }
        blocks.push(dat.concat(ecc));
      }
      var result = [];
      var _loop = function _loop(_i9) {
        blocks.forEach(function (block, j) {
          if (_i9 !== shortBlockLen - blockEccLen || j >= numShortBlocks) {
            result.push(block[_i9]);
          }
        });
      };
      for (var _i9 = 0; _i9 < blocks[0].length; _i9++) {
        _loop(_i9);
      }
      assert(result.length === rawCodewords);
      return result;
    }
  }, {
    key: "drawCodewords",
    value: function drawCodewords(data) {
      if (data.length !== Math.floor(QrCode.getNumRawDataModules(this.version) / 8)) {
        throw new RangeError("Invalid argument");
      }
      var i = 0;
      for (var right = this.size - 1; right >= 1; right -= 2) {
        if (right === 6) {
          right = 5;
        }
        for (var vert = 0; vert < this.size; vert++) {
          for (var j = 0; j < 2; j++) {
            var x = right - j;
            var upward = (right + 1 & 2) === 0;
            var y = upward ? this.size - 1 - vert : vert;
            if (!this.isFunction[y][x] && i < data.length * 8) {
              this.modules[y][x] = getBit(data[i >>> 3], 7 - (i & 7));
              i++;
            }
          }
        }
      }
      assert(i === data.length * 8);
    }
  }, {
    key: "applyMask",
    value: function applyMask(mask) {
      if (mask < 0 || mask > 7) {
        throw new RangeError("Mask value out of range");
      }
      for (var y = 0; y < this.size; y++) {
        for (var x = 0; x < this.size; x++) {
          var invert = void 0;
          switch (mask) {
            case 0:
              invert = (x + y) % 2 === 0;
              break;
            case 1:
              invert = y % 2 === 0;
              break;
            case 2:
              invert = x % 3 === 0;
              break;
            case 3:
              invert = (x + y) % 3 === 0;
              break;
            case 4:
              invert = (Math.floor(x / 3) + Math.floor(y / 2)) % 2 === 0;
              break;
            case 5:
              invert = x * y % 2 + x * y % 3 === 0;
              break;
            case 6:
              invert = (x * y % 2 + x * y % 3) % 2 === 0;
              break;
            case 7:
              invert = ((x + y) % 2 + x * y % 3) % 2 === 0;
              break;
            default:
              throw new Error("Unreachable");
          }
          if (!this.isFunction[y][x] && invert) {
            this.modules[y][x] = !this.modules[y][x];
          }
        }
      }
    }
  }, {
    key: "getPenaltyScore",
    value: function getPenaltyScore() {
      var result = 0;
      for (var y = 0; y < this.size; y++) {
        var runColor = false;
        var runX = 0;
        var runHistory = [0, 0, 0, 0, 0, 0, 0];
        for (var x = 0; x < this.size; x++) {
          if (this.modules[y][x] === runColor) {
            runX++;
            if (runX === 5) {
              result += QrCode.PENALTY_N1;
            } else if (runX > 5) {
              result++;
            }
          } else {
            this.finderPenaltyAddHistory(runX, runHistory);
            if (!runColor) {
              result += this.finderPenaltyCountPatterns(runHistory) * QrCode.PENALTY_N3;
            }
            runColor = this.modules[y][x];
            runX = 1;
          }
        }
        result += this.finderPenaltyTerminateAndCount(runColor, runX, runHistory) * QrCode.PENALTY_N3;
      }
      for (var _x = 0; _x < this.size; _x++) {
        var _runColor = false;
        var runY = 0;
        var _runHistory = [0, 0, 0, 0, 0, 0, 0];
        for (var _y = 0; _y < this.size; _y++) {
          if (this.modules[_y][_x] === _runColor) {
            runY++;
            if (runY === 5) {
              result += QrCode.PENALTY_N1;
            } else if (runY > 5) {
              result++;
            }
          } else {
            this.finderPenaltyAddHistory(runY, _runHistory);
            if (!_runColor) {
              result += this.finderPenaltyCountPatterns(_runHistory) * QrCode.PENALTY_N3;
            }
            _runColor = this.modules[_y][_x];
            runY = 1;
          }
        }
        result += this.finderPenaltyTerminateAndCount(_runColor, runY, _runHistory) * QrCode.PENALTY_N3;
      }
      for (var _y2 = 0; _y2 < this.size - 1; _y2++) {
        for (var _x2 = 0; _x2 < this.size - 1; _x2++) {
          var color = this.modules[_y2][_x2];
          if (color === this.modules[_y2][_x2 + 1] && color === this.modules[_y2 + 1][_x2] && color === this.modules[_y2 + 1][_x2 + 1]) {
            result += QrCode.PENALTY_N2;
          }
        }
      }
      var dark = 0;
      var _iterator3 = _createForOfIteratorHelper(this.modules),
        _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var row = _step3.value;
          dark = row.reduce(function (sum, color) {
            return sum + (color ? 1 : 0);
          }, dark);
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
      var total = this.size * this.size;
      var k = Math.ceil(Math.abs(dark * 20 - total * 10) / total) - 1;
      assert(k >= 0 && k <= 9);
      result += k * QrCode.PENALTY_N4;
      assert(result >= 0 && result <= 2568888);
      return result;
    }
  }, {
    key: "getAlignmentPatternPositions",
    value: function getAlignmentPatternPositions() {
      if (this.version === 1) {
        return [];
      }
      var numAlign = Math.floor(this.version / 7) + 2;
      var step = this.version === 32 ? 26 : Math.ceil((this.version * 4 + 4) / (numAlign * 2 - 2)) * 2;
      var result = [6];
      for (var pos = this.size - 7; result.length < numAlign; pos -= step) {
        result.splice(1, 0, pos);
      }
      return result;
    }
  }, {
    key: "finderPenaltyCountPatterns",
    value: function finderPenaltyCountPatterns(runHistory) {
      var n = runHistory[1];
      assert(n <= this.size * 3);
      var core = n > 0 && runHistory[2] === n && runHistory[3] === n * 3 && runHistory[4] === n && runHistory[5] === n;
      return (core && runHistory[0] >= n * 4 && runHistory[6] >= n ? 1 : 0) + (core && runHistory[6] >= n * 4 && runHistory[0] >= n ? 1 : 0);
    }
  }, {
    key: "finderPenaltyTerminateAndCount",
    value: function finderPenaltyTerminateAndCount(currentRunColor, oriCurrentRunLength, runHistory) {
      var currentRunLength = oriCurrentRunLength;
      if (currentRunColor) {
        this.finderPenaltyAddHistory(currentRunLength, runHistory);
        currentRunLength = 0;
      }
      currentRunLength += this.size;
      this.finderPenaltyAddHistory(currentRunLength, runHistory);
      return this.finderPenaltyCountPatterns(runHistory);
    }
  }, {
    key: "finderPenaltyAddHistory",
    value: function finderPenaltyAddHistory(oriCurrentRunLength, runHistory) {
      var currentRunLength = oriCurrentRunLength;
      if (runHistory[0] === 0) {
        currentRunLength += this.size;
      }
      runHistory.pop();
      runHistory.unshift(currentRunLength);
    }
  }], [{
    key: "encodeText",
    value: function encodeText(text, ecl) {
      var segs = QrSegment.makeSegments(text);
      return QrCode.encodeSegments(segs, ecl);
    }
  }, {
    key: "encodeBinary",
    value: function encodeBinary(data, ecl) {
      var seg = QrSegment.makeBytes(data);
      return QrCode.encodeSegments([seg], ecl);
    }
  }, {
    key: "encodeSegments",
    value: function encodeSegments(segs, oriEcl) {
      var minVersion = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
      var maxVersion = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 40;
      var mask = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : -1;
      var boostEcl = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : true;
      if (!(QrCode.MIN_VERSION <= minVersion && minVersion <= maxVersion && maxVersion <= QrCode.MAX_VERSION) || mask < -1 || mask > 7) {
        throw new RangeError("Invalid value");
      }
      var version;
      var dataUsedBits;
      for (version = minVersion;; version++) {
        var dataCapacityBits2 = QrCode.getNumDataCodewords(version, oriEcl) * 8;
        var usedBits = QrSegment.getTotalBits(segs, version);
        if (usedBits <= dataCapacityBits2) {
          dataUsedBits = usedBits;
          break;
        }
        if (version >= maxVersion) {
          throw new RangeError("Data too long");
        }
      }
      var ecl = oriEcl;
      for (var _i0 = 0, _arr = [Ecc.MEDIUM, Ecc.QUARTILE, Ecc.HIGH]; _i0 < _arr.length; _i0++) {
        var newEcl = _arr[_i0];
        if (boostEcl && dataUsedBits <= QrCode.getNumDataCodewords(version, newEcl) * 8) {
          ecl = newEcl;
        }
      }
      var bb = [];
      var _iterator4 = _createForOfIteratorHelper(segs),
        _step4;
      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var seg = _step4.value;
          appendBits(seg.mode.modeBits, 4, bb);
          appendBits(seg.numChars, seg.mode.numCharCountBits(version), bb);
          var _iterator5 = _createForOfIteratorHelper(seg.getData()),
            _step5;
          try {
            for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
              var b = _step5.value;
              bb.push(b);
            }
          } catch (err) {
            _iterator5.e(err);
          } finally {
            _iterator5.f();
          }
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }
      assert(bb.length === dataUsedBits);
      var dataCapacityBits = QrCode.getNumDataCodewords(version, ecl) * 8;
      assert(bb.length <= dataCapacityBits);
      appendBits(0, Math.min(4, dataCapacityBits - bb.length), bb);
      appendBits(0, (8 - bb.length % 8) % 8, bb);
      assert(bb.length % 8 === 0);
      for (var padByte = 236; bb.length < dataCapacityBits; padByte ^= 236 ^ 17) {
        appendBits(padByte, 8, bb);
      }
      var dataCodewords = [];
      while (dataCodewords.length * 8 < bb.length) {
        dataCodewords.push(0);
      }
      bb.forEach(function (b, i) {
        dataCodewords[i >>> 3] |= b << 7 - (i & 7);
      });
      return new QrCode(version, ecl, dataCodewords, mask);
    }
  }, {
    key: "getNumRawDataModules",
    value: function getNumRawDataModules(ver) {
      if (ver < QrCode.MIN_VERSION || ver > QrCode.MAX_VERSION) {
        throw new RangeError("Version number out of range");
      }
      var result = (16 * ver + 128) * ver + 64;
      if (ver >= 2) {
        var numAlign = Math.floor(ver / 7) + 2;
        result -= (25 * numAlign - 10) * numAlign - 55;
        if (ver >= 7) {
          result -= 36;
        }
      }
      assert(result >= 208 && result <= 29648);
      return result;
    }
  }, {
    key: "getNumDataCodewords",
    value: function getNumDataCodewords(ver, ecl) {
      return Math.floor(QrCode.getNumRawDataModules(ver) / 8) - QrCode.ECC_CODEWORDS_PER_BLOCK[ecl.ordinal][ver] * QrCode.NUM_ERROR_CORRECTION_BLOCKS[ecl.ordinal][ver];
    }
  }, {
    key: "reedSolomonComputeDivisor",
    value: function reedSolomonComputeDivisor(degree) {
      if (degree < 1 || degree > 255) {
        throw new RangeError("Degree out of range");
      }
      var result = [];
      for (var i = 0; i < degree - 1; i++) {
        result.push(0);
      }
      result.push(1);
      var root = 1;
      for (var _i1 = 0; _i1 < degree; _i1++) {
        for (var j = 0; j < result.length; j++) {
          result[j] = QrCode.reedSolomonMultiply(result[j], root);
          if (j + 1 < result.length) {
            result[j] ^= result[j + 1];
          }
        }
        root = QrCode.reedSolomonMultiply(root, 2);
      }
      return result;
    }
  }, {
    key: "reedSolomonComputeRemainder",
    value: function reedSolomonComputeRemainder(data, divisor) {
      var result = divisor.map(function () {
        return 0;
      });
      var _iterator6 = _createForOfIteratorHelper(data),
        _step6;
      try {
        var _loop2 = function _loop2() {
          var b = _step6.value;
          var factor = b ^ result.shift();
          result.push(0);
          divisor.forEach(function (coef, i) {
            result[i] ^= QrCode.reedSolomonMultiply(coef, factor);
          });
        };
        for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
          _loop2();
        }
      } catch (err) {
        _iterator6.e(err);
      } finally {
        _iterator6.f();
      }
      return result;
    }
  }, {
    key: "reedSolomonMultiply",
    value: function reedSolomonMultiply(x, y) {
      if (x >>> 8 !== 0 || y >>> 8 !== 0) {
        throw new RangeError("Byte out of range");
      }
      var z = 0;
      for (var i = 7; i >= 0; i--) {
        z = z << 1 ^ (z >>> 7) * 285;
        z ^= (y >>> i & 1) * x;
      }
      assert(z >>> 8 === 0);
      return z;
    }
  }]);
}();
_defineProperty(QrCode, "MIN_VERSION", 1);
_defineProperty(QrCode, "MAX_VERSION", 40);
_defineProperty(QrCode, "PENALTY_N1", 3);
_defineProperty(QrCode, "PENALTY_N2", 3);
_defineProperty(QrCode, "PENALTY_N3", 40);
_defineProperty(QrCode, "PENALTY_N4", 10);
_defineProperty(QrCode, "ECC_CODEWORDS_PER_BLOCK", [[-1, 7, 10, 15, 20, 26, 18, 20, 24, 30, 18, 20, 24, 26, 30, 22, 24, 28, 30, 28, 28, 28, 28, 30, 30, 26, 28, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30], [-1, 10, 16, 26, 18, 24, 16, 18, 22, 22, 26, 30, 22, 22, 24, 24, 28, 28, 26, 26, 26, 26, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28], [-1, 13, 22, 18, 26, 18, 24, 18, 22, 20, 24, 28, 26, 24, 20, 30, 24, 28, 28, 26, 30, 28, 30, 30, 30, 30, 28, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30], [-1, 17, 28, 22, 16, 22, 28, 26, 26, 24, 28, 24, 28, 22, 24, 24, 30, 28, 28, 26, 28, 30, 24, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30]]);
_defineProperty(QrCode, "NUM_ERROR_CORRECTION_BLOCKS", [[-1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 4, 4, 4, 4, 4, 6, 6, 6, 6, 7, 8, 8, 9, 9, 10, 12, 12, 12, 13, 14, 15, 16, 17, 18, 19, 19, 20, 21, 22, 24, 25], [-1, 1, 1, 1, 2, 2, 4, 4, 4, 5, 5, 5, 8, 9, 9, 10, 10, 11, 13, 14, 16, 17, 17, 18, 20, 21, 23, 25, 26, 28, 29, 31, 33, 35, 37, 38, 40, 43, 45, 47, 49], [-1, 1, 1, 2, 2, 4, 4, 6, 6, 8, 8, 8, 10, 12, 16, 12, 17, 16, 18, 21, 20, 23, 23, 25, 27, 29, 34, 34, 35, 38, 40, 43, 45, 48, 51, 53, 56, 59, 62, 65, 68], [-1, 1, 1, 2, 4, 4, 4, 5, 6, 8, 8, 11, 11, 16, 16, 18, 16, 19, 21, 25, 25, 25, 34, 30, 32, 35, 37, 40, 42, 45, 48, 51, 54, 57, 60, 63, 66, 70, 74, 77, 81]]);

var ERROR_LEVEL_MAP = {
  L: Ecc.LOW,
  M: Ecc.MEDIUM,
  Q: Ecc.QUARTILE,
  H: Ecc.HIGH
};
var DEFAULT_FRONT_COLOR = "#000000";
var DEFAULT_NEED_MARGIN = false;
var DEFAULT_MINVERSION = 1;
var SPEC_MARGIN_SIZE = 4;
var DEFAULT_MARGIN_SIZE = 0;
var DEFAULT_IMG_SCALE = 0.1;
var generatePath = function generatePath(modules) {
  var margin = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var ops = [];
  modules.forEach(function (row, y) {
    var start = null;
    row.forEach(function (cell, x) {
      if (!cell && start !== null) {
        ops.push("M".concat(start + margin, " ").concat(y + margin, "h").concat(x - start, "v1H").concat(start + margin, "z"));
        start = null;
        return;
      }
      if (x === row.length - 1) {
        if (!cell) {
          return;
        }
        if (start === null) {
          ops.push("M".concat(x + margin, ",").concat(y + margin, " h1v1H").concat(x + margin, "z"));
        } else {
          ops.push("M".concat(start + margin, ",").concat(y + margin, " h").concat(x + 1 - start, "v1H").concat(start + margin, "z"));
        }
        return;
      }
      if (cell && start === null) {
        start = x;
      }
    });
  });
  return ops.join("");
};
var excavateModules = function excavateModules(modules, excavation) {
  return modules.slice().map(function (row, y) {
    if (y < excavation.y || y >= excavation.y + excavation.h) {
      return row;
    }
    return row.map(function (cell, x) {
      if (x < excavation.x || x >= excavation.x + excavation.w) {
        return cell;
      }
      return false;
    });
  });
};
var getImageSettings = function getImageSettings(cells, size, margin, imageSettings) {
  if (imageSettings == null) {
    return null;
  }
  var numCells = cells.length + margin * 2;
  var defaultSize = Math.floor(size * DEFAULT_IMG_SCALE);
  var scale = numCells / size;
  var w = (imageSettings.width || defaultSize) * scale;
  var h = (imageSettings.height || defaultSize) * scale;
  var x = imageSettings.x == null ? cells.length / 2 - w / 2 : imageSettings.x * scale;
  var y = imageSettings.y == null ? cells.length / 2 - h / 2 : imageSettings.y * scale;
  var opacity = imageSettings.opacity == null ? 1 : imageSettings.opacity;
  var excavation = null;
  if (imageSettings.excavate) {
    var floorX = Math.floor(x);
    var floorY = Math.floor(y);
    var ceilW = Math.ceil(w + x - floorX);
    var ceilH = Math.ceil(h + y - floorY);
    excavation = {
      x: floorX,
      y: floorY,
      w: ceilW,
      h: ceilH
    };
  }
  var crossOrigin = imageSettings.crossOrigin;
  return {
    x: x,
    y: y,
    h: h,
    w: w,
    excavation: excavation,
    opacity: opacity,
    crossOrigin: crossOrigin
  };
};
var getMarginSize = function getMarginSize(needMargin, marginSize) {
  if (marginSize != null) {
    return Math.max(Math.floor(marginSize), 0);
  }
  return needMargin ? SPEC_MARGIN_SIZE : DEFAULT_MARGIN_SIZE;
};
var isSupportPath2d = function () {
  try {
    new Path2D().addPath(new Path2D());
  } catch (_unused) {
    return false;
  }
  return true;
}();

var useQRCode = function useQRCode(opt) {
  var value = opt.value,
    level = opt.level,
    minVersion = opt.minVersion,
    includeMargin = opt.includeMargin,
    marginSize = opt.marginSize,
    imageSettings = opt.imageSettings,
    size = opt.size;
  var memoizedQrcode = computed(function () {
    var segments = QrSegment.makeSegments(value);
    return QrCode.encodeSegments(segments, ERROR_LEVEL_MAP[level], minVersion);
  });
  var cs = computed(function () {
    return memoizedQrcode.value.getModules();
  });
  var mg = computed(function () {
    return getMarginSize(includeMargin, marginSize);
  });
  var cis = computed(function () {
    return getImageSettings(cs.value, size, mg.value, imageSettings);
  });
  return {
    cells: cs,
    margin: mg,
    numCells: computed(function () {
      return cs.value.length + mg.value * 2;
    }),
    calculatedImageSettings: cis,
    qrcode: memoizedQrcode
  };
};

export { DEFAULT_FRONT_COLOR as D, DEFAULT_MINVERSION as a, DEFAULT_NEED_MARGIN as b, excavateModules as e, generatePath as g, isSupportPath2d as i, useQRCode as u };
//# sourceMappingURL=dep-b095b7ad.js.map
