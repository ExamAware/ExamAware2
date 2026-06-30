/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { _ as _defineProperty } from '../../_chunks/dep-1dacc319.mjs';
import { isNumber, isArray, isObject, isUndefined } from 'lodash-es';
import '../../_chunks/dep-257428bc.mjs';

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function getRowClasses(name, props) {
  var justify = props.justify,
    align = props.align;
  return [name, _defineProperty(_defineProperty({}, "".concat(name, "--").concat(justify), justify), "".concat(name, "--align-").concat(align), align)];
}
function calcRowStyle(gutter, currentSize) {
  var rowStyle = {};
  var getMarginStyle = function getMarginStyle(gutter2) {
    return Object.assign(rowStyle, {
      marginLeft: "".concat(gutter2 / -2, "px"),
      marginRight: "".concat(gutter2 / -2, "px")
    });
  };
  var getRowGapStyle = function getRowGapStyle(gutter2) {
    return Object.assign(rowStyle, {
      rowGap: "".concat(gutter2, "px")
    });
  };
  var strategyMap = {
    isNumber: function isNumber$1(gutter2) {
      if (isNumber(gutter2)) {
        getMarginStyle(gutter2);
      }
    },
    isArray: function isArray$1(gutter2) {
      if (isArray(gutter2) && gutter2.length) {
        strategyMap.isNumber(gutter2[0]);
        if (isNumber(gutter2[1])) {
          getRowGapStyle(gutter2[1]);
        }
        if (isObject(gutter2[0]) && !isUndefined(gutter2[0][currentSize])) {
          getMarginStyle(gutter2[0][currentSize]);
        }
        if (isObject(gutter2[1]) && !isUndefined(gutter2[1][currentSize])) {
          getRowGapStyle(gutter2[1][currentSize]);
        }
      }
    },
    isObject: function isObject$1(gutter2) {
      if (isObject(gutter2) && gutter2[currentSize]) {
        if (isArray(gutter2) && gutter2.length) {
          getMarginStyle(gutter2[currentSize][0]);
          getRowGapStyle(gutter2[currentSize][1]);
        } else {
          getMarginStyle(gutter2[currentSize]);
        }
      }
    }
  };
  Object.keys(strategyMap).forEach(function (item) {
    strategyMap[item](gutter);
  });
  return rowStyle;
}
function parseFlex(flex) {
  if (isNumber(flex)) {
    return "".concat(flex, " ").concat(flex, " 0");
  }
  if (/^\d+(\.\d+)?(px|r?em|%)$/.test(flex)) {
    return "0 0 ".concat(flex);
  }
  return flex;
}
function calcColPadding(gutter, currentSize) {
  var paddingObj = {};
  var getPaddingStyle = function getPaddingStyle(gutter2) {
    return Object.assign(paddingObj, {
      paddingLeft: "".concat(gutter2 / 2, "px"),
      paddingRight: "".concat(gutter2 / 2, "px")
    });
  };
  var strategyMap = {
    isNumber: function isNumber$1(gutter2) {
      if (isNumber(gutter2)) {
        getPaddingStyle(gutter2);
      }
    },
    isArray: function isArray$1(gutter2) {
      if (isArray(gutter2) && gutter2.length) {
        if (isNumber(gutter2[0])) {
          getPaddingStyle(gutter2[0]);
        }
        if (isObject(gutter2[0]) && gutter2[0][currentSize]) {
          getPaddingStyle(gutter2[0][currentSize]);
        }
      }
    },
    isObject: function isObject$1(gutter2) {
      if (isObject(gutter2) && !isArray(gutter2) && gutter2[currentSize]) {
        getPaddingStyle(gutter2[currentSize]);
      }
    }
  };
  Object.keys(strategyMap).forEach(function (item) {
    strategyMap[item](gutter);
  });
  return paddingObj;
}
function getColClasses(name, props) {
  var span = props.span,
    order = props.order,
    offset = props.offset,
    push = props.push,
    pull = props.pull;
  var allSizes = ["xs", "sm", "md", "lg", "xl", "xxl"];
  var ColSizeClasses = allSizes.reduce(function (acc, currSize) {
    var sizeProp = props[currSize];
    var sizeObject = {};
    if (isNumber(sizeProp)) {
      sizeObject.span = sizeProp;
    } else if (isObject(sizeProp)) {
      sizeObject = sizeProp || {};
    }
    return _objectSpread(_objectSpread({}, acc), {}, _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "".concat(name, "-").concat(currSize, "-").concat(sizeObject.span), !isUndefined(sizeObject.span)), "".concat(name, "-").concat(currSize, "-order-").concat(sizeObject.order), parseInt(sizeObject.order, 10) >= 0), "".concat(name, "-").concat(currSize, "-offset-").concat(sizeObject.offset), parseInt(sizeObject.offset, 10) >= 0), "".concat(name, "-").concat(currSize, "-push-").concat(sizeObject.push), parseInt(sizeObject.push, 10) >= 0), "".concat(name, "-").concat(currSize, "-pull-").concat(sizeObject.pull), parseInt(sizeObject.pull, 10) >= 0));
  }, {});
  return _objectSpread(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "".concat(name), true), "".concat(name, "-").concat(span), !isUndefined(span)), "".concat(name, "-order-").concat(order), order), "".concat(name, "-offset-").concat(offset), offset), "".concat(name, "-push-").concat(push), push), "".concat(name, "-pull-").concat(pull), pull), ColSizeClasses);
}

export { calcColPadding, calcRowStyle, getColClasses, getRowClasses, parseFlex };
//# sourceMappingURL=index.mjs.map
