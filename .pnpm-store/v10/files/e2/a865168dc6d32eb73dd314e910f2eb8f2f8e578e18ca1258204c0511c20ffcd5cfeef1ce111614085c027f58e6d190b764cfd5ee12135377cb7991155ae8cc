/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { defineComponent, computed, createVNode } from 'vue';
import { MirrorIcon, RotationIcon, ZoomOutIcon, ZoomInIcon, ImageIcon, DownloadIcon } from 'tdesign-icons-vue-next';
import TImageViewerIcon from './ImageModalIcon.js';
import { Tooltip } from '../../tooltip/index.js';
import 'lodash-es';
import '@babel/runtime/helpers/toConsumableArray';
import '@babel/runtime/helpers/typeof';
import '../../_chunks/dep-fe23be6e.js';
import { u as usePrefixClass } from '../../_chunks/dep-9e6d8a78.js';
import { u as useImagePreviewUrl } from '../../_chunks/dep-d9f4e50e.js';
import '../../_chunks/dep-880d05b9.js';
import '@babel/runtime/helpers/defineProperty';
import '@babel/runtime/helpers/slicedToArray';
import { l as largeNumberToFixed } from '../../_chunks/dep-05f15b4e.js';
import { useConfig } from '../../config-provider/hooks/useConfig.js';
import '../../_chunks/dep-2accc95a.js';
import '../../_chunks/dep-16bcfabc.js';
import '../../_chunks/dep-fb805f69.js';
import '../../_chunks/dep-81b01cae.js';
import '../../config-provider/utils/context.js';
import '../../_chunks/dep-938cd955.js';
import 'dayjs';
import '@babel/runtime/helpers/createClass';
import '@babel/runtime/helpers/classCallCheck';
import '../../tooltip/tooltip.js';
import '../../tooltip/props.js';
import '../../popup/props.js';
import '../../popup/index.js';
import '../../popup/popup.js';
import '@popperjs/core';
import '../../_chunks/dep-4f8b6591.js';
import '../../_chunks/dep-2ea19dca.js';
import '../../_chunks/dep-51e5a827.js';
import '../../popup/container.js';
import '../../_chunks/dep-80a77612.js';
import '../../_chunks/dep-664b8b22.js';
import 'tdesign-vue-next/esm/common/style/web/components/popup/_index.less';
import '../../tooltip/utils/index.js';
import 'tdesign-vue-next/esm/common/style/web/components/tooltip/_index.less';
import '../../_chunks/dep-7d14e543.js';
import '../../_chunks/dep-8295e674.js';

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
//# sourceMappingURL=ImageViewerUtils.js.map
