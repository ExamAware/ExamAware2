/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { defineComponent, ref, computed, createVNode } from 'vue';
import { _ as _defineProperty } from '../_chunks/dep-1dacc319.mjs';
import { CloseIcon } from 'tdesign-icons-vue-next';
import props from './props.mjs';
import tabPanelProps from './tab-panel-props.mjs';
import { d as useRipple, u as usePrefixClass, i as useGlobalIcon, c as useCommonClassName } from '../_chunks/dep-7673347f.mjs';
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

var TTabNavItem = defineComponent({
  name: "TTabNavItem",
  props: {
    index: Number,
    active: {
      type: Boolean
    },
    theme: props.theme,
    size: props.size,
    placement: props.placement,
    label: {
      type: null
    },
    disabled: tabPanelProps.disabled,
    removable: tabPanelProps.removable,
    value: tabPanelProps.value,
    onClick: Function,
    onTabRemove: Function,
    onTabPanelRemove: Function
  },
  setup: function setup(props) {
    var itemRef = ref();
    useRipple(itemRef);
    var COMPONENT_NAME = usePrefixClass("tabs__nav-item");
    var _useGlobalIcon = useGlobalIcon({
        CloseIcon: CloseIcon
      }),
      CloseIcon$1 = _useGlobalIcon.CloseIcon;
    var classPrefix = usePrefixClass();
    var _useCommonClassName = useCommonClassName(),
      STATUS = _useCommonClassName.STATUS,
      SIZE = _useCommonClassName.SIZE;
    var removeBtnClick = function removeBtnClick(_ref) {
      var _props$onTabPanelRemo;
      var e = _ref.e;
      if (e) e.stopPropagation();
      props.onTabRemove({
        e: e,
        value: props.value,
        index: props.index
      });
      (_props$onTabPanelRemo = props.onTabPanelRemove) === null || _props$onTabPanelRemo === void 0 || _props$onTabPanelRemo.call(props, {
        e: e,
        value: props.value
      });
    };
    var onClickNav = function onClickNav(e) {
      if (props.disabled) return;
      props.onClick(e);
    };
    var navItemClass = computed(function () {
      return _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, COMPONENT_NAME.value, true), "".concat(classPrefix.value, "-tabs__nav--card"), props.theme === "card"), STATUS.value.disabled, props.disabled), STATUS.value.active, props.active), "".concat(classPrefix.value, "-is-left"), props.placement === "left"), "".concat(classPrefix.value, "-is-right"), props.placement === "right"), SIZE.value.medium, props.size === "medium"), SIZE.value.large, props.size === "large");
    });
    var removeBtn = function removeBtn() {
      return props.removable && !props.disabled ? createVNode("span", {
        "onClick": function onClick(e) {
          return removeBtnClick({
            e: e
          });
        },
        "class": "remove-btn"
      }, [createVNode(CloseIcon$1, null, null)]) : null;
    };
    var renderCardItem = function renderCardItem() {
      return createVNode("div", {
        "class": navItemClass.value,
        "onClick": onClickNav,
        "ref": itemRef
      }, [createVNode("span", {
        "class": "".concat(COMPONENT_NAME.value, "-text-wrapper")
      }, [props.label]), removeBtn()]);
    };
    var renderNormalItem = function renderNormalItem() {
      return createVNode("div", {
        "class": navItemClass.value,
        "onClick": onClickNav
      }, [createVNode("div", {
        "class": ["".concat(COMPONENT_NAME.value, "-wrapper"), _defineProperty(_defineProperty({}, STATUS.value.disabled, props.disabled), STATUS.value.active, props.active)],
        "ref": itemRef
      }, [createVNode("span", {
        "class": "".concat(COMPONENT_NAME.value, "-text-wrapper")
      }, [props.label])]), removeBtn()]);
    };
    return function () {
      return props.theme === "card" ? renderCardItem() : renderNormalItem();
    };
  }
});

export { TTabNavItem as default };
//# sourceMappingURL=tab-nav-item.mjs.map
