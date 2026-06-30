/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { defineComponent, inject, ref, computed, onMounted, nextTick, onUpdated, watch, createVNode, mergeProps } from 'vue';
import { _ as _defineProperty } from '../_chunks/dep-1dacc319.mjs';
import props from './props.mjs';
import { u as usePrefixClass, b as useContent, a as useTNodeJSX, c as useCommonClassName } from '../_chunks/dep-7673347f.mjs';
import { Image } from '../image/index.mjs';
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
import '../image/image.mjs';
import 'tdesign-icons-vue-next';
import '../image/props.mjs';
import '../space/index.mjs';
import '../space/space.mjs';
import '../space/props.mjs';
import '../_chunks/dep-0cde7579.mjs';
import '../_chunks/dep-0dcc778a.mjs';
import './style/css.mjs';

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
      var _content = function () {
        return content;
      }();
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
//# sourceMappingURL=avatar.mjs.map
