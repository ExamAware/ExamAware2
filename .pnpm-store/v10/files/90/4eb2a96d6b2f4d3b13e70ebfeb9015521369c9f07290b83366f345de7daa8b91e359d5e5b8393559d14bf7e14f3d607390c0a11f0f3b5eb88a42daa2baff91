/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { _ as _toConsumableArray } from '../_chunks/dep-00b4e06a.mjs';
import { defineComponent, ref, computed, createVNode, h } from 'vue';
import { _ as _defineProperty } from '../_chunks/dep-1dacc319.mjs';
import { Loading } from '../loading/index.mjs';
import props from './props.mjs';
import { a as useTNodeJSX, b as useContent, u as usePrefixClass, c as useCommonClassName, d as useRipple, e as useDisabled } from '../_chunks/dep-7673347f.mjs';
import '../_chunks/dep-9f459d8b.mjs';
import '../_chunks/dep-257428bc.mjs';
import '../loading/directive.mjs';
import 'lodash-es';
import '../loading/plugin.mjs';
import '../loading/loading.mjs';
import '../_chunks/dep-9003fde5.mjs';
import '../loading/icon/gradient.mjs';
import '../_chunks/dep-0cde7579.mjs';
import '../_chunks/dep-0dcc778a.mjs';
import '../_chunks/dep-51a43106.mjs';
import '../_chunks/dep-fe644854.mjs';
import '../loading/props.mjs';
import '../config-provider/hooks/useConfig.mjs';
import '../config-provider/utils/context.mjs';
import '../_chunks/dep-a4c09318.mjs';
import '../_chunks/dep-ffb85102.mjs';
import '../_chunks/dep-ad588525.mjs';
import '../_chunks/dep-22ebd6af.mjs';
import '../_chunks/dep-cdd448ec.mjs';
import '../_chunks/dep-97ecacde.mjs';
import '../_chunks/dep-84fd47b3.mjs';
import '../_chunks/dep-d36c4a3f.mjs';
import './style/css.mjs';

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var TButton = defineComponent({
  name: "TButton",
  props: props,
  setup: function setup(props2, _ref) {
    var attrs = _ref.attrs,
      slots = _ref.slots;
    var renderTNodeJSX = useTNodeJSX();
    var renderContent = useContent();
    var COMPONENT_NAME = usePrefixClass("button");
    var _useCommonClassName = useCommonClassName(),
      STATUS = _useCommonClassName.STATUS,
      SIZE = _useCommonClassName.SIZE;
    var btnRef = ref();
    useRipple(btnRef);
    var isDisabled = useDisabled();
    var mergeTheme = computed(function () {
      var theme = props2.theme,
        variant = props2.variant;
      if (theme) return theme;
      if (variant === "base") return "primary";
      return "default";
    });
    var buttonClass = computed(function () {
      return ["".concat(COMPONENT_NAME.value), "".concat(COMPONENT_NAME.value, "--variant-").concat(props2.variant), "".concat(COMPONENT_NAME.value, "--theme-").concat(mergeTheme.value), "".concat(COMPONENT_NAME.value, "--shape-").concat(props2.shape), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, SIZE.value[props2.size], props2.size !== "medium"), STATUS.value.disabled, isDisabled.value), STATUS.value.loading, props2.loading), "".concat(COMPONENT_NAME.value, "--ghost"), props2.ghost), SIZE.value.block, props2.block)];
    });
    return function () {
      var buttonContent = renderContent("default", "content");
      var icon = props2.loading ? createVNode(Loading, _objectSpread({
        inheritColor: true
      }, props2.loadingProps), null) : renderTNodeJSX("icon");
      var iconOnly = icon && !buttonContent;
      var suffix = props2.suffix || slots.suffix ? createVNode("span", {
        "class": "".concat(COMPONENT_NAME.value, "__suffix")
      }, [renderTNodeJSX("suffix")]) : null;
      buttonContent = buttonContent ? createVNode("span", {
        "class": "".concat(COMPONENT_NAME.value, "__text")
      }, [buttonContent]) : "";
      if (icon) {
        buttonContent = [icon, buttonContent];
      }
      if (suffix) {
        buttonContent = [buttonContent].concat(suffix);
      }
      var renderTag = function renderTag() {
        if (!props2.tag && props2.href) return "a";
        return props2.tag || "button";
      };
      var buttonAttrs = {
        "class": [].concat(_toConsumableArray(buttonClass.value), [_defineProperty({}, "".concat(COMPONENT_NAME.value, "--icon-only"), iconOnly)]),
        type: props2.type,
        disabled: isDisabled.value || props2.loading,
        href: props2.href,
        tabindex: isDisabled.value ? void 0 : "0",
        form: props2.form
      };
      return h(renderTag(), _objectSpread(_objectSpread(_objectSpread({
        ref: btnRef
      }, attrs), buttonAttrs), {}, {
        onClick: props2.onClick
      }), [buttonContent]);
    };
  }
});

export { TButton as default };
//# sourceMappingURL=button.mjs.map
