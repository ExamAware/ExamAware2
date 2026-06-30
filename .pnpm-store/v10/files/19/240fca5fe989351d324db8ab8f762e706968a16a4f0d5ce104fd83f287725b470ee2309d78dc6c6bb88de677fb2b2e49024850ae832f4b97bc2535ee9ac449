/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { isVNode, defineComponent, toRefs, inject, ref, computed, createVNode, withDirectives, vShow, Transition } from 'vue';
import { _ as _defineProperty } from '../_chunks/dep-1dacc319.mjs';
import props from './collapse-panel-props.mjs';
import FakeArrow from '../common-components/fake-arrow.mjs';
import { a as useTNodeJSX, b as useContent, u as usePrefixClass, l as useCollapseAnimation } from '../_chunks/dep-7673347f.mjs';
import '../_chunks/dep-257428bc.mjs';
import 'lodash-es';
import '../_chunks/dep-00b4e06a.mjs';
import '../_chunks/dep-9f459d8b.mjs';
import '../_chunks/dep-51a43106.mjs';
import '../_chunks/dep-fe644854.mjs';
import '../config-provider/hooks/useConfig.mjs';
import '../config-provider/utils/context.mjs';
import '../_chunks/dep-a4c09318.mjs';
import '../_chunks/dep-ffb85102.mjs';
import '../_chunks/dep-ad588525.mjs';
import '../_chunks/dep-9003fde5.mjs';
import '../_chunks/dep-22ebd6af.mjs';
import '../_chunks/dep-cdd448ec.mjs';
import '../_chunks/dep-97ecacde.mjs';
import '../_chunks/dep-84fd47b3.mjs';
import '../_chunks/dep-d36c4a3f.mjs';

function _isSlot(s) {
  return typeof s === 'function' || Object.prototype.toString.call(s) === '[object Object]' && !isVNode(s);
}
var _CollapsePanel = defineComponent({
  name: "TCollapsePanel",
  props: props,
  setup: function setup(props2, _ref) {
    var slots = _ref.slots;
    var renderTNodeJSX = useTNodeJSX();
    var renderContent = useContent();
    var componentName = usePrefixClass("collapse-panel");
    var disableClass = usePrefixClass("is-disabled");
    var clickableClass = usePrefixClass("is-clickable");
    var transitionClass = usePrefixClass("slide-down");
    var _toRefs = toRefs(props2),
      value = _toRefs.value,
      disabled = _toRefs.disabled,
      destroyOnCollapse = _toRefs.destroyOnCollapse;
    var collapseValue = inject("collapseValue");
    var updateCollapseValue = inject("updateCollapseValue");
    var getUniqId = inject("getUniqId", function () {
      return void 0;
    }, false);
    var _inject = inject("collapseProps"),
      defaultExpandAll = _inject.defaultExpandAll,
      disableAll = _inject.disabled,
      expandIconPlacement = _inject.expandIconPlacement,
      expandOnRowClick = _inject.expandOnRowClick;
    var renderParentTNode = inject("renderParentTNode");
    var innerValue = value.value || getUniqId();
    if (defaultExpandAll.value) {
      updateCollapseValue(innerValue);
    }
    var _useCollapseAnimation = useCollapseAnimation(),
      beforeEnter = _useCollapseAnimation.beforeEnter,
      enter = _useCollapseAnimation.enter,
      afterEnter = _useCollapseAnimation.afterEnter,
      beforeLeave = _useCollapseAnimation.beforeLeave,
      leave = _useCollapseAnimation.leave,
      afterLeave = _useCollapseAnimation.afterLeave;
    var iconRef = ref();
    var isDisabled = computed(function () {
      return disabled.value || disableAll.value;
    });
    var isActive = computed(function () {
      return collapseValue.value instanceof Array ? collapseValue.value.includes(innerValue) : collapseValue.value === innerValue;
    });
    var classes = computed(function () {
      return [componentName.value, _defineProperty({}, disableClass.value, isDisabled.value)];
    });
    var panelExpandIcon = computed(function () {
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
      return createVNode(FakeArrow, {
        "overlayClassName": "".concat(componentName.value, "__icon--default")
      }, null);
    };
    var renderIcon = function renderIcon() {
      var tNodeRender = panelExpandIcon.value === void 0 ? renderParentTNode : renderTNodeJSX;
      return createVNode("div", {
        "ref": iconRef,
        "class": "".concat(componentName.value, "__icon ").concat(componentName.value, "__icon--").concat(expandIconPlacement.value, " ").concat(isActive.value ? "".concat(componentName.value, "__icon--active") : ""),
        "onClick": handleClick
      }, [tNodeRender("expandIcon", renderDefaultIcon())]);
    };
    var renderBlank = function renderBlank() {
      return createVNode("div", {
        "class": "".concat(componentName.value, "__header--blank")
      }, null);
    };
    var renderHeaderRightContent = function renderHeaderRightContent() {
      var headerRightContent = renderTNodeJSX("headerRightContent");
      return headerRightContent ? createVNode("div", {
        "onClick": handleHeaderRightContentClick
      }, [headerRightContent]) : null;
    };
    var renderHeader = function renderHeader() {
      var cls = ["".concat(componentName.value, "__header"), _defineProperty({}, clickableClass.value, expandOnRowClick.value && !isDisabled.value)];
      return createVNode("div", {
        "class": cls,
        "onClick": handleClick
      }, [expandIconPlacement.value === "left" && renderIcon(), renderTNodeJSX("header"), renderBlank(), renderHeaderRightContent(), expandIconPlacement.value === "right" && renderIcon()]);
    };
    var renderBodyByNormal = function renderBodyByNormal() {
      return withDirectives(createVNode("div", {
        "class": "".concat(componentName.value, "__body")
      }, [createVNode("div", {
        "class": "".concat(componentName.value, "__content")
      }, [renderContent("default", "content")])]), [[vShow, isActive.value]]);
    };
    var renderBodyDestroyOnCollapse = function renderBodyDestroyOnCollapse() {
      return isActive.value ? createVNode("div", {
        "class": "".concat(componentName.value, "__body")
      }, [createVNode("div", {
        "class": "".concat(componentName.value, "__content")
      }, [renderContent("default", "content")])]) : null;
    };
    var renderBody = function renderBody() {
      return destroyOnCollapse.value ? renderBodyDestroyOnCollapse() : renderBodyByNormal();
    };
    return function () {
      var _slot;
      return createVNode("div", {
        "class": classes.value
      }, [createVNode("div", {
        "class": "".concat(componentName.value, "__wrapper")
      }, [renderHeader(), createVNode(Transition, {
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

export { _CollapsePanel as default };
//# sourceMappingURL=collapse-panel.mjs.map
