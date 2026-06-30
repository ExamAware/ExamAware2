/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Vue = require('vue');
var _defineProperty = require('@babel/runtime/helpers/defineProperty');
var collapse_collapsePanelProps = require('./collapse-panel-props.js');
var commonComponents_fakeArrow = require('../common-components/fake-arrow.js');
require('@babel/runtime/helpers/toConsumableArray');
require('@babel/runtime/helpers/typeof');
require('../_chunks/dep-953a77eb.js');
var index = require('../_chunks/dep-47c460dd.js');
var index$2 = require('../_chunks/dep-670d3f43.js');
var index$1 = require('../_chunks/dep-ecaaae91.js');
require('@babel/runtime/helpers/slicedToArray');
require('../_chunks/dep-cc66acf1.js');
require('../_chunks/dep-8abdfb41.js');
require('../_chunks/dep-06276759.js');
require('../_chunks/dep-48f60c78.js');
require('../_chunks/dep-b3b464e8.js');
require('../_chunks/dep-0813861e.js');
require('../_chunks/dep-a55e8a08.js');
require('../_chunks/dep-87589faa.js');
require('../_chunks/dep-05f89f0d.js');
require('../_chunks/dep-4fa46641.js');
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

function _isSlot(s) {
  return typeof s === 'function' || Object.prototype.toString.call(s) === '[object Object]' && !Vue.isVNode(s);
}
var _CollapsePanel = Vue.defineComponent({
  name: "TCollapsePanel",
  props: collapse_collapsePanelProps["default"],
  setup: function setup(props2, _ref) {
    var slots = _ref.slots;
    var renderTNodeJSX = index.useTNodeJSX();
    var renderContent = index.useContent();
    var componentName = index$1.usePrefixClass("collapse-panel");
    var disableClass = index$1.usePrefixClass("is-disabled");
    var clickableClass = index$1.usePrefixClass("is-clickable");
    var transitionClass = index$1.usePrefixClass("slide-down");
    var _toRefs = Vue.toRefs(props2),
      value = _toRefs.value,
      disabled = _toRefs.disabled,
      destroyOnCollapse = _toRefs.destroyOnCollapse;
    var collapseValue = Vue.inject("collapseValue");
    var updateCollapseValue = Vue.inject("updateCollapseValue");
    var getUniqId = Vue.inject("getUniqId", function () {
      return void 0;
    }, false);
    var _inject = Vue.inject("collapseProps"),
      defaultExpandAll = _inject.defaultExpandAll,
      disableAll = _inject.disabled,
      expandIconPlacement = _inject.expandIconPlacement,
      expandOnRowClick = _inject.expandOnRowClick;
    var renderParentTNode = Vue.inject("renderParentTNode");
    var innerValue = value.value || getUniqId();
    if (defaultExpandAll.value) {
      updateCollapseValue(innerValue);
    }
    var _useCollapseAnimation = index$2.useCollapseAnimation(),
      beforeEnter = _useCollapseAnimation.beforeEnter,
      enter = _useCollapseAnimation.enter,
      afterEnter = _useCollapseAnimation.afterEnter,
      beforeLeave = _useCollapseAnimation.beforeLeave,
      leave = _useCollapseAnimation.leave,
      afterLeave = _useCollapseAnimation.afterLeave;
    var iconRef = Vue.ref();
    var isDisabled = Vue.computed(function () {
      return disabled.value || disableAll.value;
    });
    var isActive = Vue.computed(function () {
      return collapseValue.value instanceof Array ? collapseValue.value.includes(innerValue) : collapseValue.value === innerValue;
    });
    var classes = Vue.computed(function () {
      return [componentName.value, _defineProperty__default["default"]({}, disableClass.value, isDisabled.value)];
    });
    var panelExpandIcon = Vue.computed(function () {
      return slots.expandIcon || props2.expandIcon;
    });
    var handleClick = function handleClick(e) {
      var canExpand = expandOnRowClick.value || e.currentTarget === iconRef.value;
      if (canExpand && !isDisabled.value) {
        updateCollapseValue(innerValue);
      }
      e.stopPropagation();
    };
    var handleHeaderRightContentClick = function handleHeaderRightContentClick(e) {
      e.stopPropagation();
    };
    var renderDefaultIcon = function renderDefaultIcon() {
      return Vue.createVNode(commonComponents_fakeArrow["default"], {
        "overlayClassName": "".concat(componentName.value, "__icon--default")
      }, null);
    };
    var renderIcon = function renderIcon() {
      var tNodeRender = panelExpandIcon.value === void 0 ? renderParentTNode : renderTNodeJSX;
      return Vue.createVNode("div", {
        "ref": iconRef,
        "class": "".concat(componentName.value, "__icon ").concat(componentName.value, "__icon--").concat(expandIconPlacement.value, " ").concat(isActive.value ? "".concat(componentName.value, "__icon--active") : ""),
        "onClick": handleClick
      }, [tNodeRender("expandIcon", renderDefaultIcon())]);
    };
    var renderBlank = function renderBlank() {
      return Vue.createVNode("div", {
        "class": "".concat(componentName.value, "__header--blank")
      }, null);
    };
    var renderHeaderRightContent = function renderHeaderRightContent() {
      var headerRightContent = renderTNodeJSX("headerRightContent");
      return headerRightContent ? Vue.createVNode("div", {
        "onClick": handleHeaderRightContentClick
      }, [headerRightContent]) : null;
    };
    var renderHeader = function renderHeader() {
      var cls = ["".concat(componentName.value, "__header"), _defineProperty__default["default"]({}, clickableClass.value, expandOnRowClick.value && !isDisabled.value)];
      return Vue.createVNode("div", {
        "class": cls,
        "onClick": handleClick
      }, [expandIconPlacement.value === "left" && renderIcon(), renderTNodeJSX("header"), renderBlank(), renderHeaderRightContent(), expandIconPlacement.value === "right" && renderIcon()]);
    };
    var renderBodyByNormal = function renderBodyByNormal() {
      return Vue.withDirectives(Vue.createVNode("div", {
        "class": "".concat(componentName.value, "__body")
      }, [Vue.createVNode("div", {
        "class": "".concat(componentName.value, "__content")
      }, [renderContent("default", "content")])]), [[Vue.vShow, isActive.value]]);
    };
    var renderBodyDestroyOnCollapse = function renderBodyDestroyOnCollapse() {
      return isActive.value ? Vue.createVNode("div", {
        "class": "".concat(componentName.value, "__body")
      }, [Vue.createVNode("div", {
        "class": "".concat(componentName.value, "__content")
      }, [renderContent("default", "content")])]) : null;
    };
    var renderBody = function renderBody() {
      return destroyOnCollapse.value ? renderBodyDestroyOnCollapse() : renderBodyByNormal();
    };
    return function () {
      var _slot;
      return Vue.createVNode("div", {
        "class": classes.value
      }, [Vue.createVNode("div", {
        "class": "".concat(componentName.value, "__wrapper")
      }, [renderHeader(), Vue.createVNode(Vue.Transition, {
        "name": transitionClass.value,
        "onBeforeEnter": beforeEnter,
        "onEnter": enter,
        "onAfterEnter": afterEnter,
        "onBeforeLeave": beforeLeave,
        "onLeave": leave,
        "onAfterLeave": afterLeave
      }, _isSlot(_slot = renderBody()) ? _slot : {
        "default": function _default() {
          return [_slot];
        }
      })])]);
    };
  }
});

exports["default"] = _CollapsePanel;
//# sourceMappingURL=collapse-panel.js.map
