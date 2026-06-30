/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { defineComponent, ref, watch, createVNode, h } from 'vue';
import _defineProperty from '@babel/runtime/helpers/defineProperty';
import { isArray, isNumber, isFunction } from 'lodash-es';
import props from './props.js';
import '@babel/runtime/helpers/toConsumableArray';
import '@babel/runtime/helpers/typeof';
import '../_chunks/dep-fe23be6e.js';
import { a as useContent } from '../_chunks/dep-2accc95a.js';
import { u as usePrefixClass } from '../_chunks/dep-9e6d8a78.js';
import '@babel/runtime/helpers/slicedToArray';
import '../_chunks/dep-880d05b9.js';
import '../_chunks/dep-81b01cae.js';
import '../_chunks/dep-16bcfabc.js';
import '../_chunks/dep-fb805f69.js';
import '../config-provider/hooks/useConfig.js';
import '../config-provider/utils/context.js';
import '../_chunks/dep-938cd955.js';
import 'dayjs';
import '@babel/runtime/helpers/createClass';
import '@babel/runtime/helpers/classCallCheck';

var ThemeMap = {
  text: [1],
  avatar: [{
    type: "circle",
    size: "56px"
  }],
  paragraph: [1, 1, {
    width: "70%"
  }],
  "avatar-text": [[{
    type: "circle"
  }, {
    type: "text",
    height: "32px"
  }]],
  tab: [{
    height: "30px"
  }, {
    height: "200px"
  }],
  article: [{
    type: "rect",
    height: "30px",
    width: "100%"
  }, {
    type: "rect",
    height: "200px",
    width: "100%"
  }, [{
    type: "text",
    height: "30px"
  }, {
    type: "text",
    height: "30px"
  }, {
    type: "text",
    height: "30px"
  }], [{
    type: "text",
    height: "30px"
  }, {
    type: "text",
    height: "30px"
  }], [{
    type: "text",
    height: "30px"
  }, {
    type: "text",
    height: "30px"
  }], [{
    type: "text",
    height: "30px"
  }, {
    type: "text",
    height: "30px"
  }]]
};
var getColItemStyle = function getColItemStyle(obj) {
  var styleName = ["width", "height", "marginRight", "marginLeft", "margin", "size", "background", "backgroundColor"];
  var style = /* @__PURE__ */Object.create(null);
  styleName.forEach(function (name) {
    if (name in obj) {
      var val = obj[name];
      var px = isNumber(val) ? "".concat(val, "px") : val;
      if (name === "size") {
        var _ref = [px, px];
        style.width = _ref[0];
        style.height = _ref[1];
      } else {
        style[name] = px;
      }
    }
  });
  return style;
};
var _Skeleton = defineComponent({
  name: "TSkeleton",
  props: props,
  setup: function setup(props2, _ref2) {
    var slots = _ref2.slots;
    var isShow = ref(false);
    var COMPONENT_NAME = usePrefixClass("skeleton");
    var renderContent = useContent();
    var getColItemClass = function getColItemClass(obj) {
      return ["".concat(COMPONENT_NAME.value, "__col"), "".concat(COMPONENT_NAME.value, "--type-").concat(obj.type || "text"), _defineProperty({}, "".concat(COMPONENT_NAME.value, "--animation-").concat(props2.animation), props2.animation)];
    };
    var renderCols = function renderCols(_cols) {
      var cols = [];
      if (isArray(_cols)) {
        cols = _cols;
      } else if (isNumber(_cols)) {
        cols = new Array(_cols).fill({
          type: "text"
        });
      } else {
        cols = [_cols];
      }
      return cols.map(function (obj) {
        return createVNode("div", {
          "class": getColItemClass(obj),
          "style": getColItemStyle(obj)
        }, [isFunction(obj.content) ? obj.content(h) : obj.content]);
      });
    };
    var renderRowCol = function renderRowCol(_rowCol) {
      var rowCol = _rowCol || props2.rowCol;
      var getBlockClass = function getBlockClass() {
        return ["".concat(COMPONENT_NAME.value, "__row")];
      };
      return rowCol.map(function (item) {
        return createVNode("div", {
          "class": getBlockClass()
        }, [renderCols(item)]);
      });
    };
    var timer = null;
    watch(function () {
      return props2.loading;
    }, function (bool) {
      if (!bool) {
        clearTimeout(timer);
        isShow.value = false;
        return;
      }
      if (props2.delay > 0) {
        timer = setTimeout(function () {
          clearTimeout(timer);
          isShow.value = true;
        }, props2.delay);
      } else {
        isShow.value = true;
      }
    }, {
      immediate: true
    });
    return function () {
      var content = renderContent("default", "content");
      if (slots["default"] && !isShow.value) {
        return createVNode("div", null, [content]);
      }
      if (!isShow.value) {
        return;
      }
      var children = [];
      if (props2.theme && !props2.rowCol) {
        children.push(renderRowCol(ThemeMap[props2.theme]));
      }
      if (props2.rowCol) {
        children.push(renderRowCol(props2.rowCol));
      }
      if (!props2.theme && !props2.rowCol) {
        children.push(renderRowCol([1, 1, 1, {
          width: "70%"
        }]));
      }
      return createVNode("div", {
        "class": COMPONENT_NAME.value
      }, [children]);
    };
  }
});

export { _Skeleton as default };
//# sourceMappingURL=skeleton.js.map
