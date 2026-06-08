/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { defineComponent, ref, computed, toRefs, watch, nextTick, createVNode, Fragment, Teleport, Transition, withDirectives, vShow } from 'vue';
import _defineProperty from '@babel/runtime/helpers/defineProperty';
import _slicedToArray from '@babel/runtime/helpers/slicedToArray';
import { ChevronDownIcon, ChevronLeftIcon, CloseIcon, BrowseIcon } from 'tdesign-icons-vue-next';
import { isArray, isString, isNumber } from 'lodash-es';
import '@babel/runtime/helpers/toConsumableArray';
import '@babel/runtime/helpers/typeof';
import '../_chunks/dep-fe23be6e.js';
import { u as useTNodeJSX } from '../_chunks/dep-2accc95a.js';
import { u as usePrefixClass } from '../_chunks/dep-9e6d8a78.js';
import { u as useDefaultValue } from '../_chunks/dep-aa34a263.js';
import { u as usePopupManager } from '../_chunks/dep-880d05b9.js';
import { u as useTeleport } from '../_chunks/dep-ee693784.js';
import { u as useVModel } from '../_chunks/dep-51e5a827.js';
import { Image as Image$1 } from '../image/index.js';
import TImageItem from './base/ImageItem.js';
import TImageViewerIcon from './base/ImageModalIcon.js';
import TImageViewerModal from './base/ImageViewerModal.js';
import TImageViewerUtils from './base/ImageViewerUtils.js';
import { EVENT_CODE } from './consts/index.js';
import { useMirror, useScale, useRotate } from './hooks/index.js';
import props from './props.js';
import { getOverlay } from './utils/index.js';
import { useConfig } from '../config-provider/hooks/useConfig.js';
import '../_chunks/dep-81b01cae.js';
import '../_chunks/dep-16bcfabc.js';
import '../_chunks/dep-fb805f69.js';
import '../config-provider/utils/context.js';
import '../_chunks/dep-938cd955.js';
import 'dayjs';
import '@babel/runtime/helpers/createClass';
import '@babel/runtime/helpers/classCallCheck';
import '../loading/icon/gradient.js';
import '../_chunks/dep-2ea19dca.js';
import '../_chunks/dep-80a99546.js';
import '@babel/runtime/helpers/objectWithoutProperties';
import '../_chunks/dep-4f8b6591.js';
import '../loading/props.js';
import '../image/image.js';
import '../_chunks/dep-6264b0a7.js';
import '../_chunks/dep-d9f4e50e.js';
import '../_chunks/dep-7d14e543.js';
import '../_chunks/dep-8295e674.js';
import '../image/props.js';
import '../space/index.js';
import '../space/space.js';
import '../space/props.js';
import '../_chunks/dep-e3ce8c8f.js';
import '../_chunks/dep-664b8b22.js';
import 'tdesign-vue-next/esm/common/style/web/components/space/_index.less';
import 'tdesign-vue-next/esm/common/style/web/components/image/_index.less';
import '@babel/runtime/helpers/asyncToGenerator';
import '@babel/runtime/regenerator';
import '../dialog/index.js';
import '../dialog/dialog.js';
import '../dialog/props.js';
import '../_chunks/dep-7f74a978.js';
import '../button/index.js';
import '../button/button.js';
import '../loading/index.js';
import '../loading/directive.js';
import '../loading/plugin.js';
import 'tdesign-vue-next/esm/common/style/web/components/loading/_index.less';
import '../button/props.js';
import '../_chunks/dep-f7dd3c12.js';
import '../_chunks/dep-d2a6e7a4.js';
import 'tdesign-vue-next/esm/common/style/web/components/button/_index.less';
import '../dialog/hooks/useSameTarget.js';
import '../_chunks/dep-167f0981.js';
import '../dialog/utils/index.js';
import '../dialog/dialog-card.js';
import '../dialog/dialog-card-props.js';
import '../_chunks/dep-3a7a2ef1.js';
import '../dialog/hooks/useAction.js';
import 'tdesign-vue-next/esm/common/style/web/components/dialog/_index.less';
import '../dialog/plugin.js';
import '../tooltip/index.js';
import '../tooltip/tooltip.js';
import '../tooltip/props.js';
import '../popup/props.js';
import '../popup/index.js';
import '../popup/popup.js';
import '@popperjs/core';
import '../popup/container.js';
import '../_chunks/dep-80a77612.js';
import 'tdesign-vue-next/esm/common/style/web/components/popup/_index.less';
import '../tooltip/utils/index.js';
import 'tdesign-vue-next/esm/common/style/web/components/tooltip/_index.less';
import '../_chunks/dep-05f15b4e.js';
import '../_chunks/dep-1a63d163.js';

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var isSameOrigin = function isSameOrigin(url) {
  try {
    var imgUrl = new URL(url, window.location.href);
    return imgUrl.origin === window.location.origin;
  } catch (_unused) {
    return false;
  }
};
var directDownload = function directDownload(imgSrc, name) {
  var a = document.createElement("a");
  a.download = name;
  a.href = imgSrc;
  a.click();
  a.remove();
};
var fileDownload = function fileDownload(obj, name) {
  var url = URL.createObjectURL(obj);
  var a = document.createElement("a");
  a.href = url;
  a.download = name;
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
};
var canvasDownload = function canvasDownload(imgSrc, name) {
  var image = new Image();
  image.setAttribute("crossOrigin", "anonymous");
  image.onload = function () {
    var _name$split$pop;
    var canvas = document.createElement("canvas");
    canvas.width = image.width;
    canvas.height = image.height;
    var context = canvas.getContext("2d");
    context.drawImage(image, 0, 0, image.width, image.height);
    var extension = ((_name$split$pop = name.split(".").pop()) === null || _name$split$pop === void 0 ? void 0 : _name$split$pop.toLowerCase()) || "png";
    var mimeType = "image/".concat(extension === "jpg" ? "jpeg" : extension);
    canvas.toBlob(function (blob) {
      fileDownload(blob, name);
    }, mimeType);
  };
  image.src = imgSrc;
};
var downloadImage = function downloadImage(imgSrc) {
  var _imgSrc$split, _imgSrc$split$split, _imgSrc$split$split$s;
  var randomName = Math.random().toString(32).slice(2);
  if (imgSrc instanceof File) {
    fileDownload(imgSrc, imgSrc.name);
    return;
  }
  var name = (imgSrc === null || imgSrc === void 0 || (_imgSrc$split = imgSrc.split) === null || _imgSrc$split === void 0 || (_imgSrc$split = _imgSrc$split.call(imgSrc, "?")) === null || _imgSrc$split === void 0 || (_imgSrc$split = _imgSrc$split[0]) === null || _imgSrc$split === void 0 || (_imgSrc$split$split = _imgSrc$split.split) === null || _imgSrc$split$split === void 0 || (_imgSrc$split$split = _imgSrc$split$split.call(_imgSrc$split, "#")) === null || _imgSrc$split$split === void 0 || (_imgSrc$split$split = _imgSrc$split$split[0]) === null || _imgSrc$split$split === void 0 || (_imgSrc$split$split$s = _imgSrc$split$split.split) === null || _imgSrc$split$split$s === void 0 ? void 0 : _imgSrc$split$split$s.call(_imgSrc$split$split, "/").pop()) || randomName;
  if (isSameOrigin(imgSrc)) {
    directDownload(imgSrc, name);
  } else {
    canvasDownload(imgSrc, name);
  }
};
var isImageInfo = function isImageInfo(image) {
  return !!image && !isString(image) && !(image instanceof File);
};
var formatImages = function formatImages(images) {
  if (!isArray(images)) return [];
  return images.map(function (item) {
    if (isImageInfo(item)) {
      return _objectSpread({
        download: true,
        thumbnail: item.mainImage
      }, item);
    }
    return {
      mainImage: item,
      thumbnail: item,
      download: true
    };
  });
};

var _ImageViewer = defineComponent({
  name: "TImageViewer",
  props: props,
  setup: function setup(props2) {
    var _props2$defaultIndex;
    var classPrefix = usePrefixClass();
    var COMPONENT_NAME = usePrefixClass("image-viewer");
    var renderTNodeJSX = useTNodeJSX();
    var _useConfig = useConfig("imageViewer"),
      globalConfig = _useConfig.globalConfig;
    var isExpand = ref(true);
    var showOverlayValue = computed(function () {
      return getOverlay(props2);
    });
    var _toRefs = toRefs(props2),
      index = _toRefs.index,
      visible = _toRefs.visible,
      modelValue = _toRefs.modelValue,
      imageReferrerpolicy = _toRefs.imageReferrerpolicy;
    var _useDefaultValue = useDefaultValue(index, (_props2$defaultIndex = props2.defaultIndex) !== null && _props2$defaultIndex !== void 0 ? _props2$defaultIndex : 0, props2.onIndexChange, "index"),
      _useDefaultValue2 = _slicedToArray(_useDefaultValue, 2),
      indexValue = _useDefaultValue2[0],
      setIndexValue = _useDefaultValue2[1];
    var _useVModel = useVModel(visible, modelValue, props2.defaultVisible, function () {}, "visible"),
      _useVModel2 = _slicedToArray(_useVModel, 2),
      visibleValue = _useVModel2[0],
      setVisibleValue = _useVModel2[1];
    var animationEnd = ref(true);
    var animationTimer = ref();
    var teleportElement = useTeleport(function () {
      return props2.attach;
    });
    var wrapClass = computed(function () {
      return [COMPONENT_NAME.value, "".concat(COMPONENT_NAME.value, "-preview-image"), _defineProperty({}, "".concat(classPrefix.value, "-is-hide"), !visibleValue.value)];
    });
    var headerClass = computed(function () {
      return ["".concat(classPrefix.value, "-image-viewer__modal-header"), _defineProperty({}, "".concat(classPrefix.value, "-is-show"), isExpand.value)];
    });
    var zIndexValue = computed(function () {
      var _props2$zIndex;
      return (_props2$zIndex = props2.zIndex) !== null && _props2$zIndex !== void 0 ? _props2$zIndex : 2600;
    });
    var toggleExpand = function toggleExpand() {
      isExpand.value = !isExpand.value;
    };
    var _useMirror = useMirror(),
      mirror = _useMirror.mirror,
      onMirror = _useMirror.onMirror,
      resetMirror = _useMirror.resetMirror;
    var _useScale = useScale(props2.imageScale),
      scale = _useScale.scale,
      onZoomIn = _useScale.onZoomIn,
      onZoomOut = _useScale.onZoomOut,
      resetScale = _useScale.resetScale;
    var _useRotate = useRotate(),
      rotate = _useRotate.rotate,
      onRotate = _useRotate.onRotate,
      resetRotate = _useRotate.resetRotate;
    var onRest = function onRest() {
      resetMirror();
      resetScale();
      resetRotate();
    };
    var images = computed(function () {
      return formatImages(props2.images);
    });
    var currentImage = computed(function () {
      var _images$value$indexVa;
      return (_images$value$indexVa = images.value[indexValue.value]) !== null && _images$value$indexVa !== void 0 ? _images$value$indexVa : {
        mainImage: ""
      };
    });
    var _usePopupManager = usePopupManager("dialog", {
        visible: visibleValue
      }),
      isTopInteractivePopup = _usePopupManager.isTopInteractivePopup;
    var prevImage = function prevImage() {
      var newIndex = indexValue.value - 1;
      onRest();
      setIndexValue(newIndex < 0 ? 0 : newIndex, {
        trigger: "prev"
      });
    };
    var nextImage = function nextImage() {
      var newIndex = indexValue.value + 1;
      onRest();
      setIndexValue(newIndex >= images.value.length ? indexValue.value : newIndex, {
        trigger: "next"
      });
    };
    var onImgClick = function onImgClick(i) {
      setIndexValue(i, {
        trigger: "current"
      });
    };
    var onDownloadClick = function onDownloadClick(url) {
      props2.onDownload ? props2.onDownload(url) : downloadImage(url);
    };
    var openHandler = function openHandler(index2) {
      if (isNumber(index2)) {
        onImgClick(index2);
      }
      setVisibleValue(true);
    };
    var onClose = function onClose(ctx) {
      var _props2$onClose;
      setVisibleValue(false);
      (_props2$onClose = props2.onClose) === null || _props2$onClose === void 0 || _props2$onClose.call(props2, ctx);
    };
    var closeBtnAction = function closeBtnAction(e) {
      onClose({
        e: e,
        trigger: "close-btn"
      });
    };
    var clickOverlayHandler = function clickOverlayHandler(e) {
      if (props2.closeOnOverlay) {
        onClose({
          e: e,
          trigger: "overlay"
        });
      }
    };
    var keydownHandler = function keydownHandler(e) {
      e.stopPropagation();
      switch (e.code) {
        case EVENT_CODE.left:
          prevImage();
          break;
        case EVENT_CODE.right:
          nextImage();
          break;
        case EVENT_CODE.up:
          onZoomIn();
          break;
        case EVENT_CODE.down:
          onZoomOut();
          break;
        case EVENT_CODE.esc:
          if (props2.closeOnEscKeydown && isTopInteractivePopup()) {
            onClose({
              e: e,
              trigger: "esc"
            });
          }
          break;
      }
    };
    var divRef = ref();
    watch(function () {
      return visibleValue.value;
    }, function (val) {
      clearTimeout(animationTimer.value);
      if (val) {
        animationEnd.value = false;
        nextTick().then(function () {
          var _divRef$value, _divRef$value$focus;
          (_divRef$value = divRef.value) === null || _divRef$value === void 0 || (_divRef$value$focus = _divRef$value.focus) === null || _divRef$value$focus === void 0 || _divRef$value$focus.call(_divRef$value);
        });
        onRest();
      } else {
        animationTimer.value = setTimeout(function () {
          animationEnd.value = true;
        }, 200);
      }
    });
    var onWheel = function onWheel(e) {
      e.preventDefault();
      var deltaY = e.deltaY;
      deltaY > 0 ? onZoomOut() : onZoomIn();
    };
    var transStyle = computed(function () {
      return {
        transform: "translateX(calc(-".concat(indexValue.value, " * (40px / 9 * 16 + 4px)))")
      };
    });
    var renderHeader = function renderHeader() {
      return createVNode("div", {
        "class": headerClass.value
      }, [createVNode(TImageViewerIcon, {
        "icon": function icon() {
          return createVNode(ChevronDownIcon, null, null);
        },
        "class": "".concat(COMPONENT_NAME.value, "__header-pre-bt"),
        "onClick": toggleExpand
      }, null), createVNode("div", {
        "class": "".concat(COMPONENT_NAME.value, "__header-prev")
      }, [createVNode("div", {
        "class": "".concat(COMPONENT_NAME.value, "__header-trans"),
        "style": transStyle.value
      }, [images.value.map(function (image, index2) {
        return createVNode("div", {
          "key": index2,
          "class": ["".concat(COMPONENT_NAME.value, "__header-box"), _defineProperty({}, "".concat(classPrefix.value, "-is-active"), index2 === indexValue.value)]
        }, [createVNode(Image$1, {
          "src": image.thumbnail || image.mainImage,
          "error": "",
          "class": "".concat(COMPONENT_NAME.value, "__header-img"),
          "onClick": function onClick() {
            return onImgClick(index2);
          }
        }, null)]);
      })])])]);
    };
    var renderNavigationArrow = function renderNavigationArrow(type) {
      var rotateDeg = type === "prev" ? 0 : 180;
      var _icon = renderTNodeJSX("navigationArrow", createVNode(ChevronLeftIcon, {
        "style": {
          transform: "rotate(".concat(rotateDeg, "deg)")
        },
        "size": "24px"
      }, null));
      return createVNode(TImageViewerIcon, {
        "class": "".concat(COMPONENT_NAME.value, "__modal-").concat(type, "-bt"),
        "onClick": type === "prev" ? prevImage : nextImage,
        "icon": function icon() {
          return _icon;
        }
      }, null);
    };
    var renderCloseBtn = function renderCloseBtn() {
      if (props2.closeBtn === false) {
        return;
      }
      return createVNode("div", {
        "class": ["".concat(COMPONENT_NAME.value, "__modal-icon"), "".concat(COMPONENT_NAME.value, "__modal-close-bt")],
        "onClick": closeBtnAction
      }, [renderTNodeJSX("closeBtn", createVNode(CloseIcon, {
        "size": "24px"
      }, null))]);
    };
    var renderDefaultTrigger = function renderDefaultTrigger() {
      var firstImage = images.value[0] || "";
      var imageSrc = typeof firstImage === "string" ? firstImage : firstImage.mainImage || firstImage.thumbnail;
      return createVNode("div", {
        "class": "".concat(COMPONENT_NAME.value, "__trigger")
      }, [createVNode(Image$1, {
        "src": imageSrc,
        "alt": "preview",
        "fit": "contain",
        "class": "".concat(COMPONENT_NAME.value, "__trigger-img"),
        "onClick": function onClick() {
          return openHandler();
        }
      }, null), createVNode("div", {
        "class": "".concat(COMPONENT_NAME.value, "__trigger--hover"),
        "onClick": function onClick() {
          return openHandler();
        }
      }, [createVNode("span", null, [createVNode(BrowseIcon, {
        "size": "1.4em",
        "class": "".concat(COMPONENT_NAME.value, "__trigger-icon")
      }, null), globalConfig.value.previewText])])]);
    };
    return function () {
      if (props2.mode === "modeless") {
        return createVNode(Fragment, null, [renderTNodeJSX("trigger", {
          params: {
            open: openHandler
          }
        }) || renderDefaultTrigger(), createVNode(TImageViewerModal, {
          "zIndex": zIndexValue.value,
          "visible": visibleValue.value,
          "index": indexValue.value,
          "images": images.value,
          "scale": scale.value,
          "rotate": rotate.value,
          "mirror": mirror.value,
          "currentImage": currentImage.value,
          "onRotate": onRotate,
          "onZoomIn": onZoomIn,
          "onZoomOut": onZoomOut,
          "onMirror": onMirror,
          "onReset": onRest,
          "onClose": onClose,
          "onDownload": onDownloadClick,
          "draggable": props2.draggable,
          "showOverlay": showOverlayValue.value,
          "title": props2.title,
          "imageReferrerpolicy": imageReferrerpolicy.value
        }, null)]);
      }
      return createVNode(Fragment, null, [renderTNodeJSX("trigger", {
        params: {
          open: openHandler
        }
      }) || renderDefaultTrigger(), createVNode(Teleport, {
        "disabled": !props2.attach || !teleportElement.value,
        "to": teleportElement.value
      }, {
        "default": function _default() {
          return [createVNode(Transition, null, {
            "default": function _default() {
              return [(visibleValue.value || !animationEnd.value) && withDirectives(createVNode("div", {
                "ref": divRef,
                "class": wrapClass.value,
                "style": {
                  zIndex: zIndexValue.value
                },
                "onWheel": onWheel,
                "tabindex": -1,
                "onKeydown": keydownHandler
              }, [!!showOverlayValue.value && createVNode("div", {
                "class": "".concat(COMPONENT_NAME.value, "__modal-mask"),
                "onClick": clickOverlayHandler
              }, null), images.value.length > 1 && createVNode(Fragment, null, [renderHeader(), createVNode("div", {
                "class": "".concat(COMPONENT_NAME.value, "__modal-index")
              }, [props2.title && renderTNodeJSX("title"), "".concat(indexValue.value + 1, "/").concat(images.value.length)]), renderNavigationArrow("prev"), renderNavigationArrow("next")]), renderCloseBtn(), createVNode(TImageViewerUtils, {
                "zIndex": zIndexValue.value + 1,
                "onZoomIn": onZoomIn,
                "onZoomOut": onZoomOut,
                "onMirror": onMirror,
                "onReset": onRest,
                "onRotate": onRotate,
                "onDownload": onDownloadClick,
                "scale": scale.value,
                "currentImage": currentImage.value
              }, null), createVNode(TImageItem, {
                "scale": scale.value,
                "rotate": rotate.value,
                "mirror": mirror.value,
                "src": currentImage.value.mainImage,
                "placementSrc": currentImage.value.thumbnail,
                "isSvg": currentImage.value.isSvg,
                "imageReferrerpolicy": imageReferrerpolicy.value
              }, null)]), [[vShow, visibleValue.value]])];
            }
          })];
        }
      })]);
    };
  }
});

export { _ImageViewer as default };
//# sourceMappingURL=image-viewer.js.map
