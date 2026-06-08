/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Vue = require('vue');
var _defineProperty = require('@babel/runtime/helpers/defineProperty');
var skeleton_props = require('./props.js');
require('@babel/runtime/helpers/toConsumableArray');
require('@babel/runtime/helpers/typeof');
require('../_chunks/dep-953a77eb.js');
var index$1 = require('../_chunks/dep-47c460dd.js');
var index = require('../_chunks/dep-ecaaae91.js');
require('@babel/runtime/helpers/slicedToArray');
require('../_chunks/dep-cc66acf1.js');
var isArray = require('../_chunks/dep-87589faa.js');
var isNumber = require('../_chunks/dep-990979bb.js');
var isFunction = require('../_chunks/dep-48f60c78.js');
require('../_chunks/dep-8abdfb41.js');
require('../_chunks/dep-06276759.js');
require('../_chunks/dep-a55e8a08.js');
require('../_chunks/dep-b3b464e8.js');
require('../_chunks/dep-05f89f0d.js');
require('../_chunks/dep-4fa46641.js');
require('../_chunks/dep-0813861e.js');
require('../_chunks/dep-422dd97f.js');
require('../_chunks/dep-71fa6bfc.js');
require('../_chunks/dep-80a478d7.js');
require('../_chunks/dep-427dabac.js');
require('../_chunks/dep-72c4cc44.js');
require('../_chunks/dep-ee355a9a.js');
require('../_chunks/dep-23f77e26.js');
require('../config-provider/hooks/useConfig.js');
require('../_chunks/dep-5d7e2375.js');
require('../_chunks/dep-94a7dc2d.js');
require('dayjs');
require('../_chunks/dep-92e23f17.js');
require('../_chunks/dep-0ff616fe.js');
require('../_chunks/dep-5f52cd42.js');
require('../_chunks/dep-f57bcb19.js');
require('../_chunks/dep-dc4bbc14.js');
require('../_chunks/dep-e27ea667.js');
require('../_chunks/dep-165ca38a.js');
require('../_chunks/dep-32412d92.js');
require('../_chunks/dep-a8a3d718.js');
require('../_chunks/dep-54e566d9.js');
require('../_chunks/dep-591a72de.js');
require('../_chunks/dep-8adeee89.js');
require('../_chunks/dep-4d2ef282.js');
require('../_chunks/dep-929933ce.js');
require('../_chunks/dep-6b1f0ef8.js');
require('@babel/runtime/helpers/createClass');
require('@babel/runtime/helpers/classCallCheck');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _defineProperty__default = /*#__PURE__*/_interopDefaultLegacy(_defineProperty);

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
      var px = isNumber.isNumber(val) ? "".concat(val, "px") : val;
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
var _Skeleton = Vue.defineComponent({
  name: "TSkeleton",
  props: skeleton_props["default"],
  setup: function setup(props2, _ref2) {
    var slots = _ref2.slots;
    var isShow = Vue.ref(false);
    var COMPONENT_NAME = index.usePrefixClass("skeleton");
    var renderContent = index$1.useContent();
    var getColItemClass = function getColItemClass(obj) {
      return ["".concat(COMPONENT_NAME.value, "__col"), "".concat(COMPONENT_NAME.value, "--type-").concat(obj.type || "text"), _defineProperty__default["default"]({}, "".concat(COMPONENT_NAME.value, "--animation-").concat(props2.animation), props2.animation)];
    };
    var renderCols = function renderCols(_cols) {
      var cols = [];
      if (isArray.isArray(_cols)) {
        cols = _cols;
      } else if (isNumber.isNumber(_cols)) {
        cols = new Array(_cols).fill({
          type: "text"
        });
      } else {
        cols = [_cols];
      }
      return cols.map(function (obj) {
        return Vue.createVNode("div", {
          "class": getColItemClass(obj),
          "style": getColItemStyle(obj)
        }, [isFunction.isFunction(obj.content) ? obj.content(Vue.h) : obj.content]);
      });
    };
    var renderRowCol = function renderRowCol(_rowCol) {
      var rowCol = _rowCol || props2.rowCol;
      var getBlockClass = function getBlockClass() {
        return ["".concat(COMPONENT_NAME.value, "__row")];
      };
      return rowCol.map(function (item) {
        return Vue.createVNode("div", {
          "class": getBlockClass()
        }, [renderCols(item)]);
      });
    };
    var timer = null;
    Vue.watch(function () {
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
        return Vue.createVNode("div", null, [content]);
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
      return Vue.createVNode("div", {
        "class": COMPONENT_NAME.value
      }, [children]);
    };
  }
});

exports["default"] = _Skeleton;
//# sourceMappingURL=skeleton.js.map
