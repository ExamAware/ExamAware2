/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Vue = require('vue');
var dialog_index = require('../../dialog/index.js');
require('@babel/runtime/helpers/toConsumableArray');
require('@babel/runtime/helpers/typeof');
require('../../_chunks/dep-953a77eb.js');
var index$1 = require('../../_chunks/dep-47c460dd.js');
var index = require('../../_chunks/dep-ecaaae91.js');
require('@babel/runtime/helpers/slicedToArray');
require('../../_chunks/dep-cc66acf1.js');
require('@babel/runtime/helpers/defineProperty');
var imageViewer_props = require('../props.js');
var imageViewer_base_ImageItem = require('./ImageItem.js');
var imageViewer_base_ImageViewerUtils = require('./ImageViewerUtils.js');
require('../../dialog/dialog.js');
require('@babel/runtime/helpers/objectWithoutProperties');
require('../../dialog/props.js');
require('../../_chunks/dep-92c8c5c9.js');
require('../../_chunks/dep-237ed01f.js');
require('../../loading/icon/gradient.js');
require('../../_chunks/dep-c3dee00a.js');
require('../../_chunks/dep-55c70201.js');
require('../../_chunks/dep-fd5a369e.js');
require('../../_chunks/dep-4ccaead1.js');
require('../../_chunks/dep-a55e8a08.js');
require('../../_chunks/dep-b3b464e8.js');
require('../../_chunks/dep-87589faa.js');
require('../../_chunks/dep-05f89f0d.js');
require('../../_chunks/dep-990979bb.js');
require('../../_chunks/dep-06276759.js');
require('../../_chunks/dep-48f60c78.js');
require('../../_chunks/dep-0813861e.js');
require('../../_chunks/dep-8382953f.js');
require('../../config-provider/hooks/useConfig.js');
require('../../_chunks/dep-5d7e2375.js');
require('../../_chunks/dep-94a7dc2d.js');
require('../../_chunks/dep-8abdfb41.js');
require('dayjs');
require('../../_chunks/dep-92e23f17.js');
require('../../_chunks/dep-0ff616fe.js');
require('../../_chunks/dep-5f52cd42.js');
require('../../_chunks/dep-f57bcb19.js');
require('../../_chunks/dep-dc4bbc14.js');
require('../../_chunks/dep-e27ea667.js');
require('../../_chunks/dep-165ca38a.js');
require('../../_chunks/dep-32412d92.js');
require('../../_chunks/dep-a8a3d718.js');
require('../../_chunks/dep-54e566d9.js');
require('../../_chunks/dep-591a72de.js');
require('../../_chunks/dep-8adeee89.js');
require('../../_chunks/dep-4d2ef282.js');
require('../../_chunks/dep-929933ce.js');
require('../../_chunks/dep-6b1f0ef8.js');
require('../../loading/props.js');
require('../../button/index.js');
require('../../button/button.js');
require('../../loading/index.js');
require('../../_chunks/dep-95261778.js');
require('../../loading/plugin.js');
require('../../_chunks/dep-4fa46641.js');
require('../../_chunks/dep-422dd97f.js');
require('../../_chunks/dep-71fa6bfc.js');
require('../../_chunks/dep-80a478d7.js');
require('../../_chunks/dep-427dabac.js');
require('../../_chunks/dep-72c4cc44.js');
require('../../_chunks/dep-ee355a9a.js');
require('../../_chunks/dep-23f77e26.js');
require('@babel/runtime/helpers/createClass');
require('@babel/runtime/helpers/classCallCheck');
require('../../_chunks/dep-9cc695aa.js');
require('../../_chunks/dep-48de95ee.js');
require('../../_chunks/dep-8b33876c.js');
require('../../_chunks/dep-912c9727.js');
require('../../_chunks/dep-0b8a4740.js');
require('../../_chunks/dep-cd8cfdc0.js');
require('../../_chunks/dep-ac11336c.js');
require('../../_chunks/dep-9ce6873a.js');
require('../../_chunks/dep-779f6290.js');
require('../../_chunks/dep-d62a674d.js');
require('../../button/props.js');
require('../../_chunks/dep-874d2900.js');
require('../../_chunks/dep-d45110a6.js');
require('../../_chunks/dep-0b6215b5.js');
require('../../dialog/hooks/useSameTarget.js');
require('../../_chunks/dep-7067edce.js');
require('../../dialog/utils/index.js');
require('../../dialog/dialog-card.js');
require('tdesign-icons-vue-next');
require('../../dialog/dialog-card-props.js');
require('../../_chunks/dep-31c76dc6.js');
require('../../dialog/hooks/useAction.js');
require('../../_chunks/dep-ace0b57c.js');
require('../../_chunks/dep-11b67e11.js');
require('../../_chunks/dep-dcb859c6.js');
require('../../dialog/plugin.js');
require('@babel/runtime/helpers/asyncToGenerator');
require('@babel/runtime/regenerator');
require('../../_chunks/dep-f617290f.js');
require('../../_chunks/dep-e7678f7a.js');
require('../../_chunks/dep-733b2b51.js');
require('../hooks/index.js');
require('../../_chunks/dep-2359c164.js');
require('../../_chunks/dep-48e7c2a2.js');
require('../../_chunks/dep-9071ce5e.js');
require('../../_chunks/dep-441a3b7b.js');
require('../../_chunks/dep-e86abdd2.js');
require('./ImageModalIcon.js');
require('../../tooltip/index.js');
require('../../tooltip/tooltip.js');
require('../../tooltip/props.js');
require('../../popup/props.js');
require('../../popup/index.js');
require('../../popup/popup.js');
require('@popperjs/core');
require('../../_chunks/dep-e8ff2c13.js');
require('../../popup/container.js');
require('../../_chunks/dep-b6058ff9.js');
require('../../_chunks/dep-39403bd1.js');
require('../../_chunks/dep-3a7785db.js');
require('../../tooltip/utils/index.js');

var TImageViewerModal = Vue.defineComponent({
  name: "TImageViewerModal",
  props: {
    zIndex: Number,
    visible: Boolean,
    index: Number,
    images: imageViewer_props["default"].images,
    scale: Number,
    rotate: Number,
    mirror: Number,
    title: imageViewer_props["default"].title,
    currentImage: {
      type: Object,
      "default": function _default() {
        return {};
      }
    },
    onRotate: Function,
    onZoomIn: Function,
    onZoomOut: Function,
    onMirror: Function,
    onReset: Function,
    onClose: imageViewer_props["default"].onClose,
    onDownload: imageViewer_props["default"].onDownload,
    draggable: {
      type: Boolean,
      "default": true
    },
    viewerScale: {
      type: Object,
      "default": function _default() {
        return {};
      }
    },
    showOverlay: Boolean,
    closeBtn: imageViewer_props["default"].closeBtn,
    imageReferrerpolicy: imageViewer_props["default"].imageReferrerpolicy
  },
  setup: function setup(props2) {
    var classPrefix = index.usePrefixClass();
    var renderJSX = index$1.useTNodeJSX();
    var style = Vue.computed(function () {
      return {
        minWidth: props2.viewerScale.minWidth,
        minHeight: props2.viewerScale.minHeight
      };
    });
    return function () {
      return Vue.createVNode(dialog_index.Dialog, {
        "destroyOnClose": true,
        "attach": "body",
        "onClose": props2.onClose,
        "visible": props2.visible,
        "placement": "center",
        "mode": "modeless",
        "width": 1e3,
        "cancelBtn": null,
        "confirmBtn": null,
        "draggable": props2.draggable,
        "zIndex": props2.zIndex,
        "showOverlay": props2.showOverlay,
        "class": "".concat(classPrefix.value, "-image-viewer__dialog"),
        "header": renderJSX("title", ""),
        "footer": function footer() {
          return Vue.createVNode("div", {
            "class": "".concat(classPrefix.value, "-image-viewer-mini__footer")
          }, [Vue.createVNode(imageViewer_base_ImageViewerUtils["default"], {
            "zIndex": props2.zIndex,
            "onZoomIn": props2.onZoomIn,
            "onZoomOut": props2.onZoomOut,
            "scale": props2.scale,
            "currentImage": props2.currentImage,
            "onRotate": props2.onRotate,
            "onMirror": props2.onMirror,
            "onReset": props2.onReset,
            "onDownload": props2.onDownload
          }, null)]);
        }
      }, {
        "default": function _default() {
          return [Vue.createVNode("div", {
            "class": "".concat(classPrefix.value, "-image-viewer-mini__content"),
            "style": style.value
          }, [Vue.createVNode(imageViewer_base_ImageItem["default"], {
            "rotate": props2.rotate,
            "scale": props2.scale,
            "mirror": props2.mirror,
            "src": props2.currentImage.mainImage,
            "placementSrc": props2.currentImage.thumbnail,
            "isSvg": props2.currentImage.isSvg,
            "imageReferrerpolicy": props2.imageReferrerpolicy
          }, null)])];
        }
      });
    };
  }
});

exports["default"] = TImageViewerModal;
//# sourceMappingURL=ImageViewerModal.js.map
