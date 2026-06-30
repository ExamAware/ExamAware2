/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Vue = require('vue');
var tdesignIconsVueNext = require('tdesign-icons-vue-next');
var imageViewer_base_ImageModalIcon = require('./ImageModalIcon.js');
var tooltip_index = require('../../tooltip/index.js');
require('@babel/runtime/helpers/toConsumableArray');
require('@babel/runtime/helpers/typeof');
require('../../_chunks/dep-953a77eb.js');
var index = require('../../_chunks/dep-ecaaae91.js');
var index$1 = require('../../_chunks/dep-f617290f.js');
require('../../_chunks/dep-cc66acf1.js');
require('@babel/runtime/helpers/defineProperty');
require('@babel/runtime/helpers/slicedToArray');
var largeNumber = require('../../_chunks/dep-48e7c2a2.js');
var configProvider_hooks_useConfig = require('../../config-provider/hooks/useConfig.js');
require('../../_chunks/dep-47c460dd.js');
require('../../_chunks/dep-06276759.js');
require('../../_chunks/dep-48f60c78.js');
require('../../_chunks/dep-b3b464e8.js');
require('../../_chunks/dep-0813861e.js');
require('../../_chunks/dep-a55e8a08.js');
require('../../_chunks/dep-87589faa.js');
require('../../_chunks/dep-05f89f0d.js');
require('../../_chunks/dep-4fa46641.js');
require('../../_chunks/dep-422dd97f.js');
require('../../_chunks/dep-71fa6bfc.js');
require('../../_chunks/dep-80a478d7.js');
require('../../_chunks/dep-427dabac.js');
require('../../_chunks/dep-72c4cc44.js');
require('../../_chunks/dep-ee355a9a.js');
require('../../_chunks/dep-23f77e26.js');
require('../../_chunks/dep-8abdfb41.js');
require('../../_chunks/dep-5d7e2375.js');
require('../../_chunks/dep-94a7dc2d.js');
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
require('@babel/runtime/helpers/createClass');
require('@babel/runtime/helpers/classCallCheck');
require('../../tooltip/tooltip.js');
require('../../tooltip/props.js');
require('../../popup/props.js');
require('../../popup/index.js');
require('../../popup/popup.js');
require('@popperjs/core');
require('../../_chunks/dep-8382953f.js');
require('../../_chunks/dep-c3dee00a.js');
require('../../_chunks/dep-e8ff2c13.js');
require('../../popup/container.js');
require('../../_chunks/dep-b6058ff9.js');
require('../../_chunks/dep-39403bd1.js');
require('../../_chunks/dep-e86abdd2.js');
require('../../_chunks/dep-3a7785db.js');
require('../../_chunks/dep-441a3b7b.js');
require('../../_chunks/dep-d62a674d.js');
require('../../tooltip/utils/index.js');
require('../../_chunks/dep-ace0b57c.js');
require('../../_chunks/dep-ac11336c.js');
require('../../_chunks/dep-11b67e11.js');
require('../../_chunks/dep-dcb859c6.js');
require('../../_chunks/dep-e7678f7a.js');
require('../../_chunks/dep-733b2b51.js');
require('../../_chunks/dep-990979bb.js');

var TImageViewerUtils = Vue.defineComponent({
  name: "TImageViewerUtils",
  props: {
    zIndex: Number,
    scale: Number,
    onRotate: Function,
    onZoomIn: Function,
    onZoomOut: Function,
    onMirror: Function,
    onReset: Function,
    onDownload: Function,
    currentImage: {
      type: Object,
      "default": function _default() {
        return {};
      }
    }
  },
  setup: function setup(props) {
    var classPrefix = index.usePrefixClass();
    var imageUrl = Vue.computed(function () {
      return props.currentImage.mainImage;
    });
    var _useImagePreviewUrl = index$1.useImagePreviewUrl(imageUrl),
      previewUrl = _useImagePreviewUrl.previewUrl;
    var _useConfig = configProvider_hooks_useConfig.useConfig("imageViewer"),
      globalConfig = _useConfig.globalConfig;
    return function () {
      return Vue.createVNode("div", {
        "class": "".concat(classPrefix.value, "-image-viewer__utils")
      }, [Vue.createVNode("div", {
        "class": "".concat(classPrefix.value, "-image-viewer__utils-content")
      }, [Vue.createVNode(tooltip_index.Tooltip, {
        "overlayClassName": "".concat(classPrefix.value, "-image-viewer__utils--tip"),
        "content": globalConfig.value.mirrorTipText,
        "destroyOnClose": true,
        "placement": "top",
        "showArrow": true,
        "theme": "default",
        "zIndex": props.zIndex
      }, {
        "default": function _default() {
          return [Vue.createVNode(imageViewer_base_ImageModalIcon["default"], {
            "onClick": props.onMirror,
            "icon": function icon() {
              return Vue.createVNode(tdesignIconsVueNext.MirrorIcon, {
                "size": "medium"
              }, null);
            }
          }, null)];
        }
      }), Vue.createVNode(tooltip_index.Tooltip, {
        "overlayClassName": "".concat(classPrefix.value, "-image-viewer__utils--tip"),
        "content": globalConfig.value.rotateTipText,
        "destroyOnClose": true,
        "placement": "top",
        "showArrow": true,
        "theme": "default",
        "zIndex": props.zIndex
      }, {
        "default": function _default() {
          return [Vue.createVNode(imageViewer_base_ImageModalIcon["default"], {
            "onClick": props.onRotate,
            "icon": function icon() {
              return Vue.createVNode(tdesignIconsVueNext.RotationIcon, {
                "size": "medium"
              }, null);
            }
          }, null)];
        }
      }), Vue.createVNode(imageViewer_base_ImageModalIcon["default"], {
        "icon": function icon() {
          return Vue.createVNode(tdesignIconsVueNext.ZoomOutIcon, {
            "size": "medium"
          }, null);
        },
        "onClick": props.onZoomOut
      }, null), Vue.createVNode(imageViewer_base_ImageModalIcon["default"], {
        "class": "".concat(classPrefix.value, "-image-viewer__utils-scale"),
        "size": "medium",
        "label": "".concat(largeNumber.largeNumberToFixed(String(props.scale * 100)), "%")
      }, null), Vue.createVNode(imageViewer_base_ImageModalIcon["default"], {
        "icon": function icon() {
          return Vue.createVNode(tdesignIconsVueNext.ZoomInIcon, {
            "size": "medium"
          }, null);
        },
        "onClick": props.onZoomIn
      }, null), Vue.createVNode(tooltip_index.Tooltip, {
        "overlayClassName": "".concat(classPrefix.value, "-image-viewer__utils--tip"),
        "content": globalConfig.value.originalSizeTipText,
        "destroyOnClose": true,
        "placement": "top",
        "showArrow": true,
        "theme": "default",
        "zIndex": props.zIndex
      }, {
        "default": function _default() {
          return [Vue.createVNode("div", {
            "class": "".concat(classPrefix.value, "-image-viewer__modal-icon")
          }, [Vue.createVNode(imageViewer_base_ImageModalIcon["default"], {
            "icon": function icon() {
              return Vue.createVNode(tdesignIconsVueNext.ImageIcon, {
                "size": "medium"
              }, null);
            },
            "onClick": props.onReset
          }, null)])];
        }
      }), props.currentImage.download && Vue.createVNode(imageViewer_base_ImageModalIcon["default"], {
        "icon": function icon() {
          return Vue.createVNode(tdesignIconsVueNext.DownloadIcon, {
            "size": "medium"
          }, null);
        },
        "onClick": function onClick() {
          props.onDownload(previewUrl.value);
        }
      }, null)])]);
    };
  }
});

exports["default"] = TImageViewerUtils;
//# sourceMappingURL=ImageViewerUtils.js.map
