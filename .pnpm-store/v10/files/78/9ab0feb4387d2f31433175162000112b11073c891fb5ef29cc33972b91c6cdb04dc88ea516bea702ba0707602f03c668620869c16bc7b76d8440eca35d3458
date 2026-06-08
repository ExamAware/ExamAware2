/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { defineComponent, ref, computed, toRefs, watch, nextTick, createVNode, Fragment, Teleport, Transition, withDirectives, vShow } from 'vue';
import { _ as _defineProperty } from '../_chunks/dep-1dacc319.mjs';
import { _ as _slicedToArray } from '../_chunks/dep-9003fde5.mjs';
import { ChevronDownIcon, ChevronLeftIcon, CloseIcon, BrowseIcon } from 'tdesign-icons-vue-next';
import { isString, isArray, isNumber } from 'lodash-es';
import { u as usePrefixClass, a as useTNodeJSX, k as useDefaultValue, j as useVModel, t as useTeleport, v as usePopupManager } from '../_chunks/dep-7673347f.mjs';
import { Image as Image$1 } from '../image/index.mjs';
import TImageItem from './base/ImageItem.mjs';
import TImageViewerIcon from './base/ImageModalIcon.mjs';
import TImageViewerModal from './base/ImageViewerModal.mjs';
import TImageViewerUtils from './base/ImageViewerUtils.mjs';
import { EVENT_CODE } from './consts/index.mjs';
import { useMirror, useScale, useRotate } from './hooks/index.mjs';
import props from './props.mjs';
import { getOverlay } from './utils/index.mjs';
import { useConfig } from '../config-provider/hooks/useConfig.mjs';
import '../_chunks/dep-257428bc.mjs';
import '../_chunks/dep-9f459d8b.mjs';
import '../_chunks/dep-00b4e06a.mjs';
import '../_chunks/dep-51a43106.mjs';
import '../_chunks/dep-fe644854.mjs';
import '../_chunks/dep-22ebd6af.mjs';
import '../_chunks/dep-cdd448ec.mjs';
import '../_chunks/dep-97ecacde.mjs';
import '../config-provider/utils/context.mjs';
import '../_chunks/dep-a4c09318.mjs';
import '../_chunks/dep-ffb85102.mjs';
import '../_chunks/dep-ad588525.mjs';
import '../_chunks/dep-84fd47b3.mjs';
import '../_chunks/dep-d36c4a3f.mjs';
import '../image/image.mjs';
import '../image/props.mjs';
import '../space/index.mjs';
import '../space/space.mjs';
import '../space/props.mjs';
import '../_chunks/dep-0cde7579.mjs';
import '../_chunks/dep-0dcc778a.mjs';
import './style/css.mjs';
import '../_chunks/dep-88e5a7b0.mjs';
import '../dialog/index.mjs';
import '../dialog/dialog.mjs';
import '../dialog/props.mjs';
import '../dialog/hooks/index.mjs';
import '../dialog/hooks/useAction.mjs';
import '../button/index.mjs';
import '../button/button.mjs';
import '../loading/index.mjs';
import '../loading/directive.mjs';
import '../loading/plugin.mjs';
import '../loading/loading.mjs';
import '../loading/icon/gradient.mjs';
import '../loading/props.mjs';
import '../button/props.mjs';
import '../dialog/hooks/useSameTarget.mjs';
import '../_chunks/dep-03148507.mjs';
import '../dialog/utils/index.mjs';
import '../dialog/dialog-card.mjs';
import '../dialog/dialog-card-props.mjs';
import '../dialog/plugin.mjs';
import '../tooltip/index.mjs';
import '../tooltip/tooltip.mjs';
import '../tooltip/props.mjs';
import '../popup/props.mjs';
import '../popup/index.mjs';
import '../popup/popup.mjs';
import '@popperjs/core';
import '../popup/container.mjs';
import '../tooltip/utils/index.mjs';
import '../_chunks/dep-db81c302.mjs';
import '../_chunks/dep-29754cb4.mjs';
import '../_chunks/dep-6d2705e1.mjs';

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
        default:
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
//# sourceMappingURL=image-viewer.mjs.map
