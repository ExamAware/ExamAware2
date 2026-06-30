/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { defineComponent, computed, createVNode } from 'vue';
import { MirrorIcon, RotationIcon, ZoomOutIcon, ZoomInIcon, ImageIcon, DownloadIcon } from 'tdesign-icons-vue-next';
import TImageViewerIcon from './ImageModalIcon.mjs';
import { Tooltip } from '../../tooltip/index.mjs';
import { u as usePrefixClass, r as useImagePreviewUrl } from '../../_chunks/dep-7673347f.mjs';
import { l as largeNumberToFixed } from '../../_chunks/dep-db81c302.mjs';
import { useConfig } from '../../config-provider/hooks/useConfig.mjs';
import '../../_chunks/dep-1dacc319.mjs';
import '../../_chunks/dep-257428bc.mjs';
import 'lodash-es';
import '../../_chunks/dep-00b4e06a.mjs';
import '../../_chunks/dep-9f459d8b.mjs';
import '../../_chunks/dep-51a43106.mjs';
import '../../_chunks/dep-fe644854.mjs';
import '../../config-provider/utils/context.mjs';
import '../../_chunks/dep-a4c09318.mjs';
import '../../_chunks/dep-ffb85102.mjs';
import '../../_chunks/dep-ad588525.mjs';
import '../../_chunks/dep-9003fde5.mjs';
import '../../_chunks/dep-22ebd6af.mjs';
import '../../_chunks/dep-cdd448ec.mjs';
import '../../_chunks/dep-97ecacde.mjs';
import '../../_chunks/dep-84fd47b3.mjs';
import '../../_chunks/dep-d36c4a3f.mjs';
import '../../tooltip/tooltip.mjs';
import '../../tooltip/props.mjs';
import '../../popup/props.mjs';
import '../../popup/index.mjs';
import '../../popup/popup.mjs';
import '@popperjs/core';
import '../../popup/container.mjs';
import './style/css.mjs';
import '../../tooltip/utils/index.mjs';

var TImageViewerUtils = defineComponent({
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
    var classPrefix = usePrefixClass();
    var imageUrl = computed(function () {
      return props.currentImage.mainImage;
    });
    var _useImagePreviewUrl = useImagePreviewUrl(imageUrl),
      previewUrl = _useImagePreviewUrl.previewUrl;
    var _useConfig = useConfig("imageViewer"),
      globalConfig = _useConfig.globalConfig;
    return function () {
      return createVNode("div", {
        "class": "".concat(classPrefix.value, "-image-viewer__utils")
      }, [createVNode("div", {
        "class": "".concat(classPrefix.value, "-image-viewer__utils-content")
      }, [createVNode(Tooltip, {
        "overlayClassName": "".concat(classPrefix.value, "-image-viewer__utils--tip"),
        "content": globalConfig.value.mirrorTipText,
        "destroyOnClose": true,
        "placement": "top",
        "showArrow": true,
        "theme": "default",
        "zIndex": props.zIndex
      }, {
        "default": function _default() {
          return [createVNode(TImageViewerIcon, {
            "onClick": props.onMirror,
            "icon": function icon() {
              return createVNode(MirrorIcon, {
                "size": "medium"
              }, null);
            }
          }, null)];
        }
      }), createVNode(Tooltip, {
        "overlayClassName": "".concat(classPrefix.value, "-image-viewer__utils--tip"),
        "content": globalConfig.value.rotateTipText,
        "destroyOnClose": true,
        "placement": "top",
        "showArrow": true,
        "theme": "default",
        "zIndex": props.zIndex
      }, {
        "default": function _default() {
          return [createVNode(TImageViewerIcon, {
            "onClick": props.onRotate,
            "icon": function icon() {
              return createVNode(RotationIcon, {
                "size": "medium"
              }, null);
            }
          }, null)];
        }
      }), createVNode(TImageViewerIcon, {
        "icon": function icon() {
          return createVNode(ZoomOutIcon, {
            "size": "medium"
          }, null);
        },
        "onClick": props.onZoomOut
      }, null), createVNode(TImageViewerIcon, {
        "class": "".concat(classPrefix.value, "-image-viewer__utils-scale"),
        "size": "medium",
        "label": "".concat(largeNumberToFixed(String(props.scale * 100)), "%")
      }, null), createVNode(TImageViewerIcon, {
        "icon": function icon() {
          return createVNode(ZoomInIcon, {
            "size": "medium"
          }, null);
        },
        "onClick": props.onZoomIn
      }, null), createVNode(Tooltip, {
        "overlayClassName": "".concat(classPrefix.value, "-image-viewer__utils--tip"),
        "content": globalConfig.value.originalSizeTipText,
        "destroyOnClose": true,
        "placement": "top",
        "showArrow": true,
        "theme": "default",
        "zIndex": props.zIndex
      }, {
        "default": function _default() {
          return [createVNode("div", {
            "class": "".concat(classPrefix.value, "-image-viewer__modal-icon")
          }, [createVNode(TImageViewerIcon, {
            "icon": function icon() {
              return createVNode(ImageIcon, {
                "size": "medium"
              }, null);
            },
            "onClick": props.onReset
          }, null)])];
        }
      }), props.currentImage.download && createVNode(TImageViewerIcon, {
        "icon": function icon() {
          return createVNode(DownloadIcon, {
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

export { TImageViewerUtils as default };
//# sourceMappingURL=ImageViewerUtils.mjs.map
