/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { defineComponent, ref, toRefs, onMounted, onUnmounted, watch, computed, createVNode, mergeProps } from 'vue';
import _slicedToArray from '@babel/runtime/helpers/slicedToArray';
import { isFunction, omit, isString } from 'lodash-es';
import { ImageIcon, ImageErrorIcon } from 'tdesign-icons-vue-next';
import { o as observe } from '../_chunks/dep-6264b0a7.js';
import { useConfig } from '../config-provider/hooks/useConfig.js';
import '@babel/runtime/helpers/toConsumableArray';
import '@babel/runtime/helpers/typeof';
import '../_chunks/dep-fe23be6e.js';
import { u as useTNodeJSX, b as useTNodeDefault } from '../_chunks/dep-2accc95a.js';
import { u as useImagePreviewUrl } from '../_chunks/dep-d9f4e50e.js';
import '../_chunks/dep-880d05b9.js';
import '@babel/runtime/helpers/defineProperty';
import props from './props.js';
import { Space } from '../space/index.js';
import '../config-provider/utils/context.js';
import '../_chunks/dep-938cd955.js';
import '../_chunks/dep-81b01cae.js';
import 'dayjs';
import '../_chunks/dep-16bcfabc.js';
import '../_chunks/dep-fb805f69.js';
import '../_chunks/dep-7d14e543.js';
import '../_chunks/dep-8295e674.js';
import '@babel/runtime/helpers/createClass';
import '@babel/runtime/helpers/classCallCheck';
import '../space/space.js';
import '../space/props.js';
import '../_chunks/dep-e3ce8c8f.js';
import '../_chunks/dep-9e6d8a78.js';
import '../_chunks/dep-80a99546.js';
import '@babel/runtime/helpers/objectWithoutProperties';
import '../_chunks/dep-664b8b22.js';

var _Image = defineComponent({
  name: "TImage",
  props: props,
  setup: function setup(props2) {
    var divRef = ref(null);
    var imgRef = ref(null);
    var io = null;
    var _toRefs = toRefs(props2),
      src = _toRefs.src;
    var renderTNodeJSX = useTNodeJSX();
    onMounted(function () {
      var _imgRef$value;
      if ((_imgRef$value = imgRef.value) !== null && _imgRef$value !== void 0 && _imgRef$value.complete && !props2.lazy) {
        triggerHandleLoad();
      }
      if (!props2.lazy || !divRef.value) return;
      var ioObserver = observe(divRef.value, null, handleLoadImage, 0);
      io = ioObserver;
    });
    onUnmounted(function () {
      divRef.value && io && io.unobserve(divRef.value);
    });
    var _useConfig = useConfig("image"),
      classPrefix = _useConfig.classPrefix,
      globalConfig = _useConfig.globalConfig;
    var imageStrSrc = ref(src.value);
    watch([src, globalConfig], function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
        src2 = _ref2[0],
        globalConfig2 = _ref2[1];
      var _ref3 = globalConfig2 || {},
        replaceImageSrc = _ref3.replaceImageSrc;
      var tmpUrl = isFunction(replaceImageSrc) ? replaceImageSrc(props2) : src2;
      if (tmpUrl === imageStrSrc.value && imageStrSrc.value) return;
      imageStrSrc.value = tmpUrl;
    }, {
      immediate: true
    });
    var _useImagePreviewUrl = useImagePreviewUrl(imageStrSrc),
      previewUrl = _useImagePreviewUrl.previewUrl;
    watch([previewUrl], function () {
      hasError.value = false;
      isLoaded.value = false;
    });
    var shouldLoad = ref(!props2.lazy);
    var handleLoadImage = function handleLoadImage() {
      shouldLoad.value = true;
    };
    var isLoaded = ref(false);
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
    var hasError = ref(false);
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
    var hasMouseEvent = computed(function () {
      return props2.overlayTrigger === "hover";
    });
    var imageClasses = computed(function () {
      return ["".concat(classPrefix.value, "-image"), "".concat(classPrefix.value, "-image--fit-").concat(props2.fit), "".concat(classPrefix.value, "-image--position-").concat(props2.position)];
    });
    var shouldShowOverlay = ref(!hasMouseEvent.value);
    var handleToggleOverlay = function handleToggleOverlay() {
      if (hasMouseEvent.value) {
        shouldShowOverlay.value = !shouldShowOverlay.value;
      }
    };
    var renderPlaceholder = function renderPlaceholder() {
      var placeholder = renderTNodeJSX("placeholder");
      if (!placeholder) return null;
      return createVNode("div", {
        "class": "".concat(classPrefix.value, "-image__placeholder")
      }, [placeholder]);
    };
    var renderGalleryShadow = function renderGalleryShadow() {
      if (!props2.gallery) return null;
      return createVNode("div", {
        "class": "".concat(classPrefix.value, "-image__gallery-shadow")
      }, null);
    };
    var renderOverlay = function renderOverlay() {
      var overlayContent = renderTNodDefault("overlayContent");
      if (!overlayContent) return null;
      return createVNode("div", {
        "class": ["".concat(classPrefix.value, "-image__overlay-content"), !shouldShowOverlay.value && "".concat(classPrefix.value, "-image__overlay-content--hidden")]
      }, [overlayContent]);
    };
    function renderImageSrcset() {
      return createVNode("picture", null, [Object.entries(props2.srcset).map(function (_ref4) {
        var _ref5 = _slicedToArray(_ref4, 2),
          type = _ref5[0],
          url = _ref5[1];
        return createVNode("source", {
          "type": type,
          "srcset": url
        }, null);
      }), renderImage()]);
    }
    function renderImage() {
      var url = isString(imageStrSrc.value) ? imageStrSrc.value : previewUrl.value;
      return createVNode("img", {
        "ref": imgRef,
        "src": url,
        "onError": handleError,
        "onLoad": handleLoad,
        "class": imageClasses.value,
        "alt": props2.alt,
        "referrerpolicy": props2.referrerpolicy
      }, null);
    }
    var renderTNodDefault = useTNodeDefault();
    return function () {
      return createVNode("div", mergeProps({
        "ref": divRef,
        "class": ["".concat(classPrefix.value, "-image__wrapper"), "".concat(classPrefix.value, "-image__wrapper--shape-").concat(props2.shape), props2.gallery && "".concat(classPrefix.value, "-image__wrapper--gallery"), hasMouseEvent.value && "".concat(classPrefix.value, "-image__wrapper--need-hover")],
        "onMouseenter": handleToggleOverlay,
        "onMouseleave": handleToggleOverlay
      }, omit(props2, ["src", "alt", "fit", "position", "shape", "placeholder", "loading", "error", "overlayTrigger", "overlayContent", "lazy", "gallery", "onLoad", "onError"])), [renderPlaceholder(), renderGalleryShadow(), (hasError.value || !shouldLoad.value) && createVNode("div", {
        "class": "".concat(classPrefix.value, "-image")
      }, null), !(hasError.value || !shouldLoad.value) && (props2.srcset && Object.keys(props2.srcset).length ? renderImageSrcset() : renderImage()), !(hasError.value || !shouldLoad.value) && !isLoaded.value && createVNode("div", {
        "class": "".concat(classPrefix.value, "-image__loading")
      }, [renderTNodeJSX("loading") || createVNode(Space, {
        "direction": "vertical",
        "size": 8,
        "align": "center"
      }, {
        "default": function _default() {
          return [createVNode(ImageIcon, {
            "size": "24px"
          }, null), isString(props2.loading) ? props2.loading : globalConfig.value.loadingText];
        }
      })]), hasError.value && createVNode("div", {
        "class": "".concat(classPrefix.value, "-image__error")
      }, [renderTNodDefault("error", {
        defaultNode: createVNode(Space, {
          "direction": "vertical",
          "size": 8,
          "align": "center"
        }, {
          "default": function _default() {
            return [createVNode(ImageErrorIcon, {
              "size": "24px"
            }, null), isString(props2.error) ? props2.error : globalConfig.value.errorText];
          }
        })
      })]), renderOverlay()]);
    };
  }
});

export { _Image as default };
//# sourceMappingURL=image.js.map
