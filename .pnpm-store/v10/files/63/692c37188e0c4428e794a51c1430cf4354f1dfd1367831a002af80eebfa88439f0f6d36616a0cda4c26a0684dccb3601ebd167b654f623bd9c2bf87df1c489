/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Vue = require('vue');
var _defineProperty = require('@babel/runtime/helpers/defineProperty');
var avatar_props = require('./props.js');
require('@babel/runtime/helpers/toConsumableArray');
require('@babel/runtime/helpers/typeof');
require('../_chunks/dep-953a77eb.js');
var index$1 = require('../_chunks/dep-47c460dd.js');
var index$2 = require('../_chunks/dep-8382953f.js');
var index = require('../_chunks/dep-ecaaae91.js');
require('@babel/runtime/helpers/slicedToArray');
require('../_chunks/dep-cc66acf1.js');
var image_index = require('../image/index.js');
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
require('../image/image.js');
require('tdesign-icons-vue-next');
require('../_chunks/dep-fb83a452.js');
require('../_chunks/dep-f617290f.js');
require('../_chunks/dep-e7678f7a.js');
require('../_chunks/dep-733b2b51.js');
require('../image/props.js');
require('../space/index.js');
require('../space/space.js');
require('../space/props.js');
require('../_chunks/dep-3565d523.js');
require('../_chunks/dep-55c70201.js');
require('@babel/runtime/helpers/objectWithoutProperties');
require('../_chunks/dep-fd5a369e.js');
require('../_chunks/dep-4ccaead1.js');
require('../_chunks/dep-990979bb.js');
require('../_chunks/dep-d62a674d.js');
require('../_chunks/dep-ace0b57c.js');
require('../_chunks/dep-ac11336c.js');
require('../_chunks/dep-11b67e11.js');
require('../_chunks/dep-dcb859c6.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _defineProperty__default = /*#__PURE__*/_interopDefaultLegacy(_defineProperty);

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty__default["default"](e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var _Avatar = Vue.defineComponent({
  name: "TAvatar",
  props: avatar_props["default"],
  setup: function setup(props2) {
    var COMPONENT_NAME = index.usePrefixClass("avatar");
    var renderContent = index$1.useContent();
    var renderTNodeJSX = index$1.useTNodeJSX();
    var _useCommonClassName = index$2.useCommonClassName(),
      SIZE = _useCommonClassName.SIZE;
    var avatarGroup = Vue.inject("avatarGroup", void 0);
    var avatar = Vue.ref(null);
    var avatarChild = Vue.ref(null);
    var isImgExist = Vue.ref(true);
    var gap = Vue.ref(4);
    var scale = Vue.ref("");
    var sizeValue = Vue.computed(function () {
      return props2.size || (avatarGroup === null || avatarGroup === void 0 ? void 0 : avatarGroup.size);
    });
    var isCustomSize = Vue.computed(function () {
      return sizeValue.value && !SIZE.value[sizeValue.value];
    });
    var customAvatarSize = Vue.computed(function () {
      return isCustomSize.value ? {
        width: sizeValue.value,
        height: sizeValue.value,
        "font-size": "".concat(Number.parseInt(sizeValue.value, 10) / 2, "px")
      } : {};
    });
    var customImageSize = Vue.computed(function () {
      return isCustomSize.value ? {
        height: sizeValue.value,
        width: sizeValue.value
      } : {};
    });
    var customCharacterSize = Vue.computed(function () {
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
    Vue.onMounted(function () {
      Vue.nextTick(function () {
        setScaleParams();
      });
    });
    Vue.onUpdated(function () {
      Vue.nextTick(function () {
        setScaleParams();
      });
    });
    Vue.watch(function () {
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
      var avatarClass = ["".concat(COMPONENT_NAME.value), SIZE.value[sizeValue.value], _defineProperty__default["default"](_defineProperty__default["default"](_defineProperty__default["default"]({}, "".concat(COMPONENT_NAME.value, "--circle"), shape === "circle"), "".concat(COMPONENT_NAME.value, "--round"), shape === "round"), "".concat(COMPONENT_NAME.value, "__icon"), !!isIconOnly)];
      content = Vue.createVNode("span", {
        "ref": avatarChild,
        "style": _objectSpread({}, customCharacterSize.value)
      }, [content]);
      if (icon) {
        content = [icon, !isIconOnly ? content : ""];
      }
      if (image && isImgExist.value) {
        content = Vue.createVNode(image_index.Image, Vue.mergeProps({
          "style": _objectSpread({}, customImageSize.value),
          "src": image,
          "alt": alt,
          "onError": handleImgLoadError
        }, props2.imageProps), null);
      }
      return Vue.createVNode("div", {
        "ref": avatar,
        "class": avatarClass,
        "style": _objectSpread({}, customAvatarSize.value)
      }, [content]);
    };
  }
});

exports["default"] = _Avatar;
//# sourceMappingURL=avatar.js.map
