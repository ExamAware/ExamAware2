/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { defineComponent, ref, computed, createVNode } from 'vue';
import _defineProperty from '@babel/runtime/helpers/defineProperty';
import { CloseIcon } from 'tdesign-icons-vue-next';
import props from './props.js';
import tabPanelProps from './tab-panel-props.js';
import 'lodash-es';
import '@babel/runtime/helpers/toConsumableArray';
import '@babel/runtime/helpers/typeof';
import '../_chunks/dep-fe23be6e.js';
import { u as useCommonClassName } from '../_chunks/dep-4f8b6591.js';
import { u as usePrefixClass } from '../_chunks/dep-9e6d8a78.js';
import { u as useGlobalIcon } from '../_chunks/dep-3a7a2ef1.js';
import '@babel/runtime/helpers/slicedToArray';
import '../_chunks/dep-880d05b9.js';
import { u as useRipple } from '../_chunks/dep-d2a6e7a4.js';
import '../_chunks/dep-81b01cae.js';
import '../config-provider/hooks/useConfig.js';
import '../config-provider/utils/context.js';
import '../_chunks/dep-938cd955.js';
import 'dayjs';
import '@babel/runtime/helpers/createClass';
import '@babel/runtime/helpers/classCallCheck';
import '../_chunks/dep-2ea19dca.js';

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
//# sourceMappingURL=tab-nav-item.js.map
