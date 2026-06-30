/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { defineComponent, computed, createVNode } from 'vue';
import { Dialog } from '../../dialog/index.js';
import 'lodash-es';
import '@babel/runtime/helpers/toConsumableArray';
import '@babel/runtime/helpers/typeof';
import '../../_chunks/dep-fe23be6e.js';
import { u as useTNodeJSX } from '../../_chunks/dep-2accc95a.js';
import { u as usePrefixClass } from '../../_chunks/dep-9e6d8a78.js';
import '@babel/runtime/helpers/slicedToArray';
import '../../_chunks/dep-880d05b9.js';
import '@babel/runtime/helpers/defineProperty';
import props from '../props.js';
import TImageItem from './ImageItem.js';
import TImageViewerUtils from './ImageViewerUtils.js';
import '../../dialog/dialog.js';
import '@babel/runtime/helpers/objectWithoutProperties';
import '../../dialog/props.js';
import '../../_chunks/dep-7f74a978.js';
import '../../_chunks/dep-ee693784.js';
import '../../loading/icon/gradient.js';
import '../../_chunks/dep-2ea19dca.js';
import '../../_chunks/dep-80a99546.js';
import '../../_chunks/dep-16bcfabc.js';
import '../../_chunks/dep-4f8b6591.js';
import '../../config-provider/hooks/useConfig.js';
import '../../config-provider/utils/context.js';
import '../../_chunks/dep-938cd955.js';
import '../../_chunks/dep-81b01cae.js';
import 'dayjs';
import '../../loading/props.js';
import '../../button/index.js';
import '../../button/button.js';
import '../../loading/index.js';
import '../../loading/directive.js';
import '../../loading/plugin.js';
import '../../_chunks/dep-fb805f69.js';
import '@babel/runtime/helpers/createClass';
import '@babel/runtime/helpers/classCallCheck';
import '../../_chunks/dep-664b8b22.js';
import 'tdesign-vue-next/esm/common/style/web/components/loading/_index.less';
import '../../button/props.js';
import '../../_chunks/dep-f7dd3c12.js';
import '../../_chunks/dep-d2a6e7a4.js';
import 'tdesign-vue-next/esm/common/style/web/components/button/_index.less';
import '../../dialog/hooks/useSameTarget.js';
import '../../_chunks/dep-167f0981.js';
import '../../dialog/utils/index.js';
import '../../dialog/dialog-card.js';
import 'tdesign-icons-vue-next';
import '../../dialog/dialog-card-props.js';
import '../../_chunks/dep-3a7a2ef1.js';
import '../../dialog/hooks/useAction.js';
import 'tdesign-vue-next/esm/common/style/web/components/dialog/_index.less';
import '../../dialog/plugin.js';
import '@babel/runtime/helpers/asyncToGenerator';
import '@babel/runtime/regenerator';
import '../../_chunks/dep-d9f4e50e.js';
import '../../_chunks/dep-7d14e543.js';
import '../../_chunks/dep-8295e674.js';
import '../hooks/index.js';
import '../../_chunks/dep-1a63d163.js';
import '../../_chunks/dep-05f15b4e.js';
import './ImageModalIcon.js';
import '../../tooltip/index.js';
import '../../tooltip/tooltip.js';
import '../../tooltip/props.js';
import '../../popup/props.js';
import '../../popup/index.js';
import '../../popup/popup.js';
import '@popperjs/core';
import '../../_chunks/dep-51e5a827.js';
import '../../popup/container.js';
import '../../_chunks/dep-80a77612.js';
import 'tdesign-vue-next/esm/common/style/web/components/popup/_index.less';
import '../../tooltip/utils/index.js';
import 'tdesign-vue-next/esm/common/style/web/components/tooltip/_index.less';

var TImageViewerModal = defineComponent({
  name: "TImageViewerModal",
  props: {
    zIndex: Number,
    visible: Boolean,
    index: Number,
    images: props.images,
    scale: Number,
    rotate: Number,
    mirror: Number,
    title: props.title,
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
    onClose: props.onClose,
    onDownload: props.onDownload,
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
    closeBtn: props.closeBtn,
    imageReferrerpolicy: props.imageReferrerpolicy
  },
  setup: function setup(props2) {
    var classPrefix = usePrefixClass();
    var renderJSX = useTNodeJSX();
    var style = computed(function () {
      return {
        minWidth: props2.viewerScale.minWidth,
        minHeight: props2.viewerScale.minHeight
      };
    });
    return function () {
      return createVNode(Dialog, {
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
          return createVNode("div", {
            "class": "".concat(classPrefix.value, "-image-viewer-mini__footer")
          }, [createVNode(TImageViewerUtils, {
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
          return [createVNode("div", {
            "class": "".concat(classPrefix.value, "-image-viewer-mini__content"),
            "style": style.value
          }, [createVNode(TImageItem, {
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

export { TImageViewerModal as default };
//# sourceMappingURL=ImageViewerModal.js.map
