/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Vue = require('vue');
var _slicedToArray = require('@babel/runtime/helpers/slicedToArray');
var tdesignIconsVueNext = require('tdesign-icons-vue-next');
var observe = require('../_chunks/dep-fb83a452.js');
var configProvider_hooks_useConfig = require('../config-provider/hooks/useConfig.js');
require('@babel/runtime/helpers/toConsumableArray');
require('@babel/runtime/helpers/typeof');
require('../_chunks/dep-953a77eb.js');
var index = require('../_chunks/dep-47c460dd.js');
var index$1 = require('../_chunks/dep-f617290f.js');
require('../_chunks/dep-cc66acf1.js');
require('@babel/runtime/helpers/defineProperty');
var image_props = require('./props.js');
var space_index = require('../space/index.js');
var isFunction = require('../_chunks/dep-48f60c78.js');
var omit = require('../_chunks/dep-ace0b57c.js');
var isString = require('../_chunks/dep-a55e8a08.js');
require('../_chunks/dep-5d7e2375.js');
require('../_chunks/dep-94a7dc2d.js');
require('../_chunks/dep-8abdfb41.js');
require('dayjs');
require('../_chunks/dep-92e23f17.js');
require('../_chunks/dep-0ff616fe.js');
require('../_chunks/dep-5f52cd42.js');
require('../_chunks/dep-b3b464e8.js');
require('../_chunks/dep-0813861e.js');
require('../_chunks/dep-f57bcb19.js');
require('../_chunks/dep-dc4bbc14.js');
require('../_chunks/dep-05f89f0d.js');
require('../_chunks/dep-87589faa.js');
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
require('../_chunks/dep-06276759.js');
require('../_chunks/dep-4fa46641.js');
require('../_chunks/dep-422dd97f.js');
require('../_chunks/dep-71fa6bfc.js');
require('../_chunks/dep-80a478d7.js');
require('../_chunks/dep-427dabac.js');
require('../_chunks/dep-72c4cc44.js');
require('../_chunks/dep-ee355a9a.js');
require('../_chunks/dep-23f77e26.js');
require('../_chunks/dep-e7678f7a.js');
require('../_chunks/dep-733b2b51.js');
require('@babel/runtime/helpers/createClass');
require('@babel/runtime/helpers/classCallCheck');
require('../space/space.js');
require('../space/props.js');
require('../_chunks/dep-3565d523.js');
require('../_chunks/dep-ecaaae91.js');
require('../_chunks/dep-55c70201.js');
require('@babel/runtime/helpers/objectWithoutProperties');
require('../_chunks/dep-fd5a369e.js');
require('../_chunks/dep-4ccaead1.js');
require('../_chunks/dep-990979bb.js');
require('../_chunks/dep-d62a674d.js');
require('../_chunks/dep-ac11336c.js');
require('../_chunks/dep-11b67e11.js');
require('../_chunks/dep-dcb859c6.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _slicedToArray__default = /*#__PURE__*/_interopDefaultLegacy(_slicedToArray);

var _Image = Vue.defineComponent({
  name: "TImage",
  props: image_props["default"],
  setup: function setup(props2) {
    var divRef = Vue.ref(null);
    var imgRef = Vue.ref(null);
    var io = null;
    var _toRefs = Vue.toRefs(props2),
      src = _toRefs.src;
    var renderTNodeJSX = index.useTNodeJSX();
    Vue.onMounted(function () {
      var _imgRef$value;
      if ((_imgRef$value = imgRef.value) !== null && _imgRef$value !== void 0 && _imgRef$value.complete && !props2.lazy) {
        triggerHandleLoad();
      }
      if (!props2.lazy || !divRef.value) return;
      var ioObserver = observe.observe(divRef.value, null, handleLoadImage, 0);
      io = ioObserver;
    });
    Vue.onUnmounted(function () {
      divRef.value && io && io.unobserve(divRef.value);
    });
    var _useConfig = configProvider_hooks_useConfig.useConfig("image"),
      classPrefix = _useConfig.classPrefix,
      globalConfig = _useConfig.globalConfig;
    var imageStrSrc = Vue.ref(src.value);
    Vue.watch([src, globalConfig], function (_ref) {
      var _ref2 = _slicedToArray__default["default"](_ref, 2),
        src2 = _ref2[0],
        globalConfig2 = _ref2[1];
      var _ref3 = globalConfig2 || {},
        replaceImageSrc = _ref3.replaceImageSrc;
      var tmpUrl = isFunction.isFunction(replaceImageSrc) ? replaceImageSrc(props2) : src2;
      if (tmpUrl === imageStrSrc.value && imageStrSrc.value) return;
      imageStrSrc.value = tmpUrl;
    }, {
      immediate: true
    });
    var _useImagePreviewUrl = index$1.useImagePreviewUrl(imageStrSrc),
      previewUrl = _useImagePreviewUrl.previewUrl;
    Vue.watch([previewUrl], function () {
      hasError.value = false;
      isLoaded.value = false;
    });
    var shouldLoad = Vue.ref(!props2.lazy);
    var handleLoadImage = function handleLoadImage() {
      shouldLoad.value = true;
    };
    var isLoaded = Vue.ref(false);
    var handleLoad = function handleLoad(e) {
      var _props2$onLoad;
      isLoaded.value = true;
      (_props2$onLoad = props2.onLoad) === null || _props2$onLoad === void 0 || _props2$onLoad.call(props2, {
        e: e
      });
    };
    var triggerHandleLoad = function triggerHandleLoad() {
      var loadEvent = new Event("load");
      Object.defineProperty(loadEvent, "target", {
        value: imgRef.value,
        enumerable: true
      });
      handleLoad(loadEvent);
    };
    var hasError = Vue.ref(false);
    var handleError = function handleError(e) {
      var _props2$onError;
      hasError.value = true;
      (_props2$onError = props2.onError) === null || _props2$onError === void 0 || _props2$onError.call(props2, {
        e: e
      });
      if (props2.fallback) {
        imageStrSrc.value = props2.fallback;
        hasError.value = false;
      }
    };
    var hasMouseEvent = Vue.computed(function () {
      return props2.overlayTrigger === "hover";
    });
    var imageClasses = Vue.computed(function () {
      return ["".concat(classPrefix.value, "-image"), "".concat(classPrefix.value, "-image--fit-").concat(props2.fit), "".concat(classPrefix.value, "-image--position-").concat(props2.position)];
    });
    var shouldShowOverlay = Vue.ref(!hasMouseEvent.value);
    var handleToggleOverlay = function handleToggleOverlay() {
      if (hasMouseEvent.value) {
        shouldShowOverlay.value = !shouldShowOverlay.value;
      }
    };
    var renderPlaceholder = function renderPlaceholder() {
      var placeholder = renderTNodeJSX("placeholder");
      if (!placeholder) return null;
      return Vue.createVNode("div", {
        "class": "".concat(classPrefix.value, "-image__placeholder")
      }, [placeholder]);
    };
    var renderGalleryShadow = function renderGalleryShadow() {
      if (!props2.gallery) return null;
      return Vue.createVNode("div", {
        "class": "".concat(classPrefix.value, "-image__gallery-shadow")
      }, null);
    };
    var renderOverlay = function renderOverlay() {
      var overlayContent = renderTNodDefault("overlayContent");
      if (!overlayContent) return null;
      return Vue.createVNode("div", {
        "class": ["".concat(classPrefix.value, "-image__overlay-content"), !shouldShowOverlay.value && "".concat(classPrefix.value, "-image__overlay-content--hidden")]
      }, [overlayContent]);
    };
    function renderImageSrcset() {
      return Vue.createVNode("picture", null, [Object.entries(props2.srcset).map(function (_ref4) {
        var _ref5 = _slicedToArray__default["default"](_ref4, 2),
          type = _ref5[0],
          url = _ref5[1];
        return Vue.createVNode("source", {
          "type": type,
          "srcset": url
        }, null);
      }), renderImage()]);
    }
    function renderImage() {
      var url = isString.isString(imageStrSrc.value) ? imageStrSrc.value : previewUrl.value;
      return Vue.createVNode("img", {
        "ref": imgRef,
        "src": url,
        "onError": handleError,
        "onLoad": handleLoad,
        "class": imageClasses.value,
        "alt": props2.alt,
        "referrerpolicy": props2.referrerpolicy
      }, null);
    }
    var renderTNodDefault = index.useTNodeDefault();
    return function () {
      return Vue.createVNode("div", Vue.mergeProps({
        "ref": divRef,
        "class": ["".concat(classPrefix.value, "-image__wrapper"), "".concat(classPrefix.value, "-image__wrapper--shape-").concat(props2.shape), props2.gallery && "".concat(classPrefix.value, "-image__wrapper--gallery"), hasMouseEvent.value && "".concat(classPrefix.value, "-image__wrapper--need-hover")],
        "onMouseenter": handleToggleOverlay,
        "onMouseleave": handleToggleOverlay
      }, omit.omit(props2, ["src", "alt", "fit", "position", "shape", "placeholder", "loading", "error", "overlayTrigger", "overlayContent", "lazy", "gallery", "onLoad", "onError"])), [renderPlaceholder(), renderGalleryShadow(), (hasError.value || !shouldLoad.value) && Vue.createVNode("div", {
        "class": "".concat(classPrefix.value, "-image")
      }, null), !(hasError.value || !shouldLoad.value) && (props2.srcset && Object.keys(props2.srcset).length ? renderImageSrcset() : renderImage()), !(hasError.value || !shouldLoad.value) && !isLoaded.value && Vue.createVNode("div", {
        "class": "".concat(classPrefix.value, "-image__loading")
      }, [renderTNodeJSX("loading") || Vue.createVNode(space_index.Space, {
        "direction": "vertical",
        "size": 8,
        "align": "center"
      }, {
        "default": function _default() {
          return [Vue.createVNode(tdesignIconsVueNext.ImageIcon, {
            "size": "24px"
          }, null), isString.isString(props2.loading) ? props2.loading : globalConfig.value.loadingText];
        }
      })]), hasError.value && Vue.createVNode("div", {
        "class": "".concat(classPrefix.value, "-image__error")
      }, [renderTNodDefault("error", {
        defaultNode: Vue.createVNode(space_index.Space, {
          "direction": "vertical",
          "size": 8,
          "align": "center"
        }, {
          "default": function _default() {
            return [Vue.createVNode(tdesignIconsVueNext.ImageErrorIcon, {
              "size": "24px"
            }, null), isString.isString(props2.error) ? props2.error : globalConfig.value.errorText];
          }
        })
      })]), renderOverlay()]);
    };
  }
});

exports["default"] = _Image;
//# sourceMappingURL=image.js.map
