/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { defineComponent, inject, ref, computed, onMounted, nextTick, onUpdated, watch, createVNode, mergeProps } from 'vue';
import _defineProperty from '@babel/runtime/helpers/defineProperty';
import props from './props.js';
import 'lodash-es';
import '@babel/runtime/helpers/toConsumableArray';
import '@babel/runtime/helpers/typeof';
import '../_chunks/dep-fe23be6e.js';
import { a as useContent, u as useTNodeJSX } from '../_chunks/dep-2accc95a.js';
import { u as useCommonClassName } from '../_chunks/dep-4f8b6591.js';
import { u as usePrefixClass } from '../_chunks/dep-9e6d8a78.js';
import '@babel/runtime/helpers/slicedToArray';
import '../_chunks/dep-880d05b9.js';
import { Image } from '../image/index.js';
import '../_chunks/dep-81b01cae.js';
import '../_chunks/dep-16bcfabc.js';
import '../_chunks/dep-fb805f69.js';
import '../config-provider/hooks/useConfig.js';
import '../config-provider/utils/context.js';
import '../_chunks/dep-938cd955.js';
import 'dayjs';
import '@babel/runtime/helpers/createClass';
import '@babel/runtime/helpers/classCallCheck';
import '../image/image.js';
import 'tdesign-icons-vue-next';
import '../_chunks/dep-6264b0a7.js';
import '../_chunks/dep-d9f4e50e.js';
import '../_chunks/dep-7d14e543.js';
import '../_chunks/dep-8295e674.js';
import '../image/props.js';
import '../space/index.js';
import '../space/space.js';
import '../space/props.js';
import '../_chunks/dep-e3ce8c8f.js';
import '../_chunks/dep-80a99546.js';
import '@babel/runtime/helpers/objectWithoutProperties';
import '../_chunks/dep-664b8b22.js';

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var _Avatar = defineComponent({
  name: "TAvatar",
  props: props,
  setup: function setup(props2) {
    var COMPONENT_NAME = usePrefixClass("avatar");
    var renderContent = useContent();
    var renderTNodeJSX = useTNodeJSX();
    var _useCommonClassName = useCommonClassName(),
      SIZE = _useCommonClassName.SIZE;
    var avatarGroup = inject("avatarGroup", void 0);
    var avatar = ref(null);
    var avatarChild = ref(null);
    var isImgExist = ref(true);
    var gap = ref(4);
    var scale = ref("");
    var sizeValue = computed(function () {
      return props2.size || (avatarGroup === null || avatarGroup === void 0 ? void 0 : avatarGroup.size);
    });
    var isCustomSize = computed(function () {
      return sizeValue.value && !SIZE.value[sizeValue.value];
    });
    var customAvatarSize = computed(function () {
      return isCustomSize.value ? {
        width: sizeValue.value,
        height: sizeValue.value,
        "font-size": "".concat(Number.parseInt(sizeValue.value, 10) / 2, "px")
      } : {};
    });
    var customImageSize = computed(function () {
      return isCustomSize.value ? {
        height: sizeValue.value,
        width: sizeValue.value
      } : {};
    });
    var customCharacterSize = computed(function () {
      return {
        transform: scale.value
      };
    });
    var handleImgLoadError = function handleImgLoadError(_ref) {
      var _props2$onError;
      var e = _ref.e;
      var hideOnLoadFailed = props2.hideOnLoadFailed;
      isImgExist.value = !hideOnLoadFailed;
      (_props2$onError = props2.onError) === null || _props2$onError === void 0 || _props2$onError.call(props2, {
        e: e
      });
    };
    var setScaleParams = function setScaleParams() {
      var $avatar = avatar.value;
      var $avatarChild = avatarChild.value;
      var avatarWidth = $avatar === null || $avatar === void 0 ? void 0 : $avatar.offsetWidth;
      var avatarChildWidth = $avatarChild === null || $avatarChild === void 0 ? void 0 : $avatarChild.offsetWidth;
      if (gap.value * 2 < avatarWidth) {
        scale.value = avatarChildWidth > avatarWidth - gap.value * 2 ? "scale(".concat((avatarWidth - gap.value * 2) / avatarChildWidth, ")") : "scale(1)";
      }
    };
    onMounted(function () {
      nextTick(function () {
        setScaleParams();
      });
    });
    onUpdated(function () {
      nextTick(function () {
        setScaleParams();
      });
    });
    watch(function () {
      return props2.image;
    }, function (val) {
      if (val) {
        isImgExist.value = true;
      }
    });
    return function () {
      var content = renderContent("default", "content");
      var icon = renderTNodeJSX("icon");
      var isIconOnly = icon && !content;
      var shape = props2.shape,
        image = props2.image,
        alt = props2.alt;
      var avatarClass = ["".concat(COMPONENT_NAME.value), SIZE.value[sizeValue.value], _defineProperty(_defineProperty(_defineProperty({}, "".concat(COMPONENT_NAME.value, "--circle"), shape === "circle"), "".concat(COMPONENT_NAME.value, "--round"), shape === "round"), "".concat(COMPONENT_NAME.value, "__icon"), !!isIconOnly)];
      content = createVNode("span", {
        "ref": avatarChild,
        "style": _objectSpread({}, customCharacterSize.value)
      }, [content]);
      if (icon) {
        content = [icon, !isIconOnly ? content : ""];
      }
      if (image && isImgExist.value) {
        content = createVNode(Image, mergeProps({
          "style": _objectSpread({}, customImageSize.value),
          "src": image,
          "alt": alt,
          "onError": handleImgLoadError
        }, props2.imageProps), null);
      }
      return createVNode("div", {
        "ref": avatar,
        "class": avatarClass,
        "style": _objectSpread({}, customAvatarSize.value)
      }, [content]);
    };
  }
});

export { _Avatar as default };
//# sourceMappingURL=avatar.js.map
