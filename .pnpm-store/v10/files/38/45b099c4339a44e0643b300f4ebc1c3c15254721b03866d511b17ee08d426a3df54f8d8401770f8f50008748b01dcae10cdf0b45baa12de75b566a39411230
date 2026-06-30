/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { defineComponent, toRefs, ref, computed, watch, onMounted, createVNode } from 'vue';
import _asyncToGenerator from '@babel/runtime/helpers/asyncToGenerator';
import _regeneratorRuntime from '@babel/runtime/regenerator';
import { ImageErrorIcon } from 'tdesign-icons-vue-next';
import 'lodash-es';
import '@babel/runtime/helpers/toConsumableArray';
import '@babel/runtime/helpers/typeof';
import '../../_chunks/dep-fe23be6e.js';
import { u as usePrefixClass } from '../../_chunks/dep-9e6d8a78.js';
import { u as useImagePreviewUrl } from '../../_chunks/dep-d9f4e50e.js';
import '../../_chunks/dep-880d05b9.js';
import '@babel/runtime/helpers/defineProperty';
import '@babel/runtime/helpers/slicedToArray';
import { useDrag } from '../hooks/index.js';
import { useConfig } from '../../config-provider/hooks/useConfig.js';
import '../../_chunks/dep-81b01cae.js';
import '../../_chunks/dep-7d14e543.js';
import '../../_chunks/dep-8295e674.js';
import '../../config-provider/utils/context.js';
import '../../_chunks/dep-938cd955.js';
import 'dayjs';
import '@babel/runtime/helpers/createClass';
import '@babel/runtime/helpers/classCallCheck';
import '../../_chunks/dep-1a63d163.js';
import '../../_chunks/dep-05f15b4e.js';

var TImageItem = defineComponent({
  name: "TImageItem",
  props: {
    rotate: Number,
    scale: Number,
    mirror: Number,
    src: [String, Object],
    placementSrc: [String, Object],
    isSvg: Boolean,
    imageReferrerpolicy: String
  },
  setup: function setup(props) {
    var _toRefs = toRefs(props),
      src = _toRefs.src,
      placementSrc = _toRefs.placementSrc,
      isSvg = _toRefs.isSvg;
    var classPrefix = usePrefixClass();
    var error = ref(false);
    var loaded = ref(false);
    var _useDrag = useDrag({
        translateX: 0,
        translateY: 0
      }),
      transform = _useDrag.transform,
      mouseDownHandler = _useDrag.mouseDownHandler;
    var _useConfig = useConfig("imageViewer"),
      globalConfig = _useConfig.globalConfig;
    var errorText = globalConfig.value.errorText;
    var svgElRef = ref();
    var imgStyle = computed(function () {
      return {
        transform: "rotate(".concat(props.rotate, "deg) scale(").concat(props.scale, ")"),
        display: !props.placementSrc || loaded.value ? "block" : "none"
      };
    });
    var placementImgStyle = computed(function () {
      return {
        transform: "rotate(".concat(props.rotate, "deg) scale(").concat(props.scale, ")"),
        display: !loaded.value ? "block" : "none"
      };
    });
    var boxStyle = computed(function () {
      var _transform$value = transform.value,
        translateX = _transform$value.translateX,
        translateY = _transform$value.translateY;
      return {
        transform: "translate(".concat(translateX, "px, ").concat(translateY, "px) scale(").concat(props.mirror, ", 1)")
      };
    });
    var resetStatus = function resetStatus() {
      error.value = false;
      loaded.value = false;
      if (isSvg.value) {
        createSvgShadow(mainImagePreviewUrl.value);
      }
    };
    var createSvgShadow = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime.mark(function _callee(url) {
        var _element$classList;
        var response, svgText, element, shadowRoot, container, svgElement, svgViewBox, viewBoxValues, svgViewBoxWidth, bbox, calculatedViewBox;
        return _regeneratorRuntime.wrap(function (_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 1;
              return fetch(url);
            case 1:
              response = _context.sent;
              if (response.ok) {
                _context.next = 2;
                break;
              }
              error.value = true;
              throw new Error("Failed to fetch SVG: ".concat(response.statusText));
            case 2:
              _context.next = 3;
              return response.text();
            case 3:
              svgText = _context.sent;
              element = svgElRef.value;
              element.innerHTML = "";
              (_element$classList = element.classList) === null || _element$classList === void 0 || _element$classList.add("".concat(classPrefix.value, "-image-viewer__modal-image-svg"));
              shadowRoot = element.attachShadow({
                mode: "closed"
              });
              container = document.createElement("div");
              container.style.background = "var(--td-bg-color-container)";
              container.style.padding = "4px";
              container.style.borderRadius = "4px";
              container.style.maxHeight = "100%";
              container.style.maxWidth = "100%";
              container.style.boxSizing = "border-box";
              container.style.height = "auto";
              container.innerHTML = svgText;
              shadowRoot.appendChild(container);
              svgElement = container.querySelector("svg");
              if (svgElement) {
                svgViewBox = svgElement.getAttribute("viewBox");
                if (svgViewBox) {
                  viewBoxValues = svgViewBox.split(/[\s\,]/).filter(function (v) {
                    return v;
                  }).map(parseFloat);
                  svgViewBoxWidth = viewBoxValues[2];
                  container.style.width = "".concat(svgViewBoxWidth, "px");
                } else {
                  bbox = svgElement.getBBox();
                  calculatedViewBox = "".concat(bbox.x, " ").concat(bbox.y, " ").concat(bbox.width, " ").concat(bbox.height);
                  svgElement.setAttribute("viewBox", calculatedViewBox);
                  container.style.width = "".concat(bbox.width, "px");
                }
                svgElement.style.maxHeight = "100%";
                svgElement.style.maxWidth = "100%";
                svgElement.style.height = "auto";
                svgElement.style.display = "block";
                svgElement.style.lineHeight = "normal";
              }
              loaded.value = true;
            case 4:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      return function createSvgShadow(_x) {
        return _ref.apply(this, arguments);
      };
    }();
    var _useImagePreviewUrl = useImagePreviewUrl(src),
      mainImagePreviewUrl = _useImagePreviewUrl.previewUrl;
    var _useImagePreviewUrl2 = useImagePreviewUrl(placementSrc),
      placementImagePreviewUrl = _useImagePreviewUrl2.previewUrl;
    watch([mainImagePreviewUrl, placementImagePreviewUrl], function () {
      resetStatus();
    });
    onMounted(/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime.mark(function _callee2() {
      return _regeneratorRuntime.wrap(function (_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            if (!isSvg.value) {
              _context2.next = 1;
              break;
            }
            _context2.next = 1;
            return createSvgShadow(mainImagePreviewUrl.value);
          case 1:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    })));
    return function () {
      return createVNode("div", {
        "class": "".concat(classPrefix.value, "-image-viewer__modal-pic")
      }, [createVNode("div", {
        "class": "".concat(classPrefix.value, "-image-viewer__modal-box"),
        "style": boxStyle.value
      }, [error.value && createVNode("div", {
        "class": "".concat(classPrefix.value, "-image-viewer__img-error")
      }, [createVNode("div", {
        "class": "".concat(classPrefix.value, "-image-viewer__img-error-content")
      }, [createVNode(ImageErrorIcon, {
        "size": "4em"
      }, null), createVNode("div", {
        "class": "".concat(classPrefix.value, "-image-viewer__img-error-text")
      }, [errorText])])]), !error.value && !!props.placementSrc && placementImagePreviewUrl.value && createVNode("img", {
        "class": "".concat(classPrefix.value, "-image-viewer__modal-image"),
        "onMousedown": function onMousedown(event) {
          event.stopPropagation();
          mouseDownHandler(event);
        },
        "src": placementImagePreviewUrl.value,
        "style": placementImgStyle.value,
        "referrerpolicy": props.imageReferrerpolicy,
        "alt": "image",
        "draggable": "false"
      }, null), !error.value && mainImagePreviewUrl.value && !isSvg.value && createVNode("img", {
        "class": "".concat(classPrefix.value, "-image-viewer__modal-image"),
        "onMousedown": function onMousedown(event) {
          event.stopPropagation();
          mouseDownHandler(event);
        },
        "src": mainImagePreviewUrl.value,
        "onLoad": function onLoad() {
          return loaded.value = true;
        },
        "onError": function onError() {
          return error.value = true;
        },
        "style": imgStyle.value,
        "referrerpolicy": props.imageReferrerpolicy,
        "alt": "image",
        "draggable": "false"
      }, null), !error.value && mainImagePreviewUrl.value && isSvg.value && createVNode("div", {
        "ref": svgElRef,
        "class": "".concat(classPrefix.value, "-image-viewer__modal-image"),
        "onMousedown": function onMousedown(event) {
          event.stopPropagation();
          mouseDownHandler(event);
        },
        "data-alt": "svg",
        "style": imgStyle.value,
        "draggable": "false"
      }, null)])]);
    };
  }
});

export { TImageItem as default };
//# sourceMappingURL=ImageItem.js.map
