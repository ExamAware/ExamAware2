/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import _toConsumableArray from '@babel/runtime/helpers/toConsumableArray';
import { defineComponent, ref, computed, createVNode, h } from 'vue';
import _defineProperty from '@babel/runtime/helpers/defineProperty';
import { Loading } from '../loading/index.js';
import props from './props.js';
import 'lodash-es';
import '@babel/runtime/helpers/typeof';
import '../_chunks/dep-fe23be6e.js';
import { u as useTNodeJSX, a as useContent } from '../_chunks/dep-2accc95a.js';
import { u as useCommonClassName } from '../_chunks/dep-4f8b6591.js';
import { u as usePrefixClass } from '../_chunks/dep-9e6d8a78.js';
import { u as useDisabled } from '../_chunks/dep-f7dd3c12.js';
import '@babel/runtime/helpers/slicedToArray';
import '../_chunks/dep-880d05b9.js';
import { u as useRipple } from '../_chunks/dep-d2a6e7a4.js';
import '../loading/directive.js';
import '../loading/plugin.js';
import '../_chunks/dep-ee693784.js';
import '../loading/icon/gradient.js';
import '../_chunks/dep-2ea19dca.js';
import '../_chunks/dep-80a99546.js';
import '@babel/runtime/helpers/objectWithoutProperties';
import '../_chunks/dep-16bcfabc.js';
import '../loading/props.js';
import '../_chunks/dep-81b01cae.js';
import '../_chunks/dep-fb805f69.js';
import '../config-provider/hooks/useConfig.js';
import '../config-provider/utils/context.js';
import '../_chunks/dep-938cd955.js';
import 'dayjs';
import '@babel/runtime/helpers/createClass';
import '@babel/runtime/helpers/classCallCheck';
import '../_chunks/dep-664b8b22.js';
import 'tdesign-vue-next/esm/common/style/web/components/loading/_index.less';

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
//# sourceMappingURL=button.js.map
