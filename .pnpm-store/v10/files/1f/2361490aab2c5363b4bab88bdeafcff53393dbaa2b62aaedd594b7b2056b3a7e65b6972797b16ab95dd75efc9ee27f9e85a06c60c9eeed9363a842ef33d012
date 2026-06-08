/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { defineComponent, computed, createVNode } from 'vue';
import { Dialog } from '../../dialog/index.mjs';
import { u as usePrefixClass, a as useTNodeJSX } from '../../_chunks/dep-7673347f.mjs';
import props from '../props.mjs';
import TImageItem from './ImageItem.mjs';
import TImageViewerUtils from './ImageViewerUtils.mjs';
import '../../dialog/dialog.mjs';
import '../../_chunks/dep-1dacc319.mjs';
import '../../_chunks/dep-257428bc.mjs';
import '../../_chunks/dep-0dcc778a.mjs';
import '../../dialog/props.mjs';
import '../../dialog/hooks/index.mjs';
import '../../dialog/hooks/useAction.mjs';
import 'lodash-es';
import '../../button/index.mjs';
import '../../button/button.mjs';
import '../../_chunks/dep-00b4e06a.mjs';
import '../../_chunks/dep-9f459d8b.mjs';
import '../../loading/index.mjs';
import '../../loading/directive.mjs';
import '../../loading/plugin.mjs';
import '../../loading/loading.mjs';
import '../../_chunks/dep-9003fde5.mjs';
import '../../loading/icon/gradient.mjs';
import '../../_chunks/dep-0cde7579.mjs';
import '../../_chunks/dep-51a43106.mjs';
import '../../_chunks/dep-fe644854.mjs';
import '../../loading/props.mjs';
import '../../config-provider/hooks/useConfig.mjs';
import '../../config-provider/utils/context.mjs';
import '../../_chunks/dep-a4c09318.mjs';
import '../../_chunks/dep-ffb85102.mjs';
import '../../_chunks/dep-ad588525.mjs';
import '../../_chunks/dep-22ebd6af.mjs';
import '../../_chunks/dep-cdd448ec.mjs';
import '../../_chunks/dep-97ecacde.mjs';
import '../../_chunks/dep-84fd47b3.mjs';
import '../../_chunks/dep-d36c4a3f.mjs';
import './style/css.mjs';
import '../../button/props.mjs';
import '../../dialog/hooks/useSameTarget.mjs';
import '../../_chunks/dep-03148507.mjs';
import '../../dialog/utils/index.mjs';
import '../../dialog/dialog-card.mjs';
import 'tdesign-icons-vue-next';
import '../../dialog/dialog-card-props.mjs';
import '../../dialog/plugin.mjs';
import '../../_chunks/dep-88e5a7b0.mjs';
import '../hooks/index.mjs';
import '../../_chunks/dep-29754cb4.mjs';
import '../../_chunks/dep-db81c302.mjs';
import '../../_chunks/dep-6d2705e1.mjs';
import './ImageModalIcon.mjs';
import '../../tooltip/index.mjs';
import '../../tooltip/tooltip.mjs';
import '../../tooltip/props.mjs';
import '../../popup/props.mjs';
import '../../popup/index.mjs';
import '../../popup/popup.mjs';
import '@popperjs/core';
import '../../popup/container.mjs';
import '../../tooltip/utils/index.mjs';

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
//# sourceMappingURL=ImageViewerModal.mjs.map
