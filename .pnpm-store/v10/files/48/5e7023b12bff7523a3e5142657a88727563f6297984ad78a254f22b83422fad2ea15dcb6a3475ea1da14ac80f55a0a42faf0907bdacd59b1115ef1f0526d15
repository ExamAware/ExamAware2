/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Vue = require('vue');
var _asyncToGenerator = require('@babel/runtime/helpers/asyncToGenerator');
var _regeneratorRuntime = require('@babel/runtime/regenerator');
var tdesignIconsVueNext = require('tdesign-icons-vue-next');
require('@babel/runtime/helpers/toConsumableArray');
require('@babel/runtime/helpers/typeof');
require('../../_chunks/dep-953a77eb.js');
var index = require('../../_chunks/dep-ecaaae91.js');
var index$1 = require('../../_chunks/dep-f617290f.js');
require('../../_chunks/dep-cc66acf1.js');
require('@babel/runtime/helpers/defineProperty');
require('@babel/runtime/helpers/slicedToArray');
var imageViewer_hooks_index = require('../hooks/index.js');
var configProvider_hooks_useConfig = require('../../config-provider/hooks/useConfig.js');
require('../../_chunks/dep-8abdfb41.js');
require('../../_chunks/dep-e7678f7a.js');
require('../../_chunks/dep-733b2b51.js');
require('../../_chunks/dep-5d7e2375.js');
require('../../_chunks/dep-94a7dc2d.js');
require('dayjs');
require('../../_chunks/dep-92e23f17.js');
require('../../_chunks/dep-0ff616fe.js');
require('../../_chunks/dep-5f52cd42.js');
require('../../_chunks/dep-48f60c78.js');
require('../../_chunks/dep-b3b464e8.js');
require('../../_chunks/dep-0813861e.js');
require('../../_chunks/dep-f57bcb19.js');
require('../../_chunks/dep-dc4bbc14.js');
require('../../_chunks/dep-05f89f0d.js');
require('../../_chunks/dep-87589faa.js');
require('../../_chunks/dep-e27ea667.js');
require('../../_chunks/dep-165ca38a.js');
require('../../_chunks/dep-32412d92.js');
require('../../_chunks/dep-a8a3d718.js');
require('../../_chunks/dep-54e566d9.js');
require('../../_chunks/dep-591a72de.js');
require('@babel/runtime/helpers/createClass');
require('@babel/runtime/helpers/classCallCheck');
require('../../_chunks/dep-2359c164.js');
require('../../_chunks/dep-48e7c2a2.js');
require('../../_chunks/dep-a55e8a08.js');
require('../../_chunks/dep-990979bb.js');
require('../../_chunks/dep-fd5a369e.js');
require('../../_chunks/dep-9071ce5e.js');
require('../../_chunks/dep-441a3b7b.js');
require('../../_chunks/dep-e86abdd2.js');
require('../../_chunks/dep-80a478d7.js');
require('../../_chunks/dep-8adeee89.js');
require('../../_chunks/dep-4d2ef282.js');
require('../../_chunks/dep-929933ce.js');
require('../../_chunks/dep-6b1f0ef8.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _asyncToGenerator__default = /*#__PURE__*/_interopDefaultLegacy(_asyncToGenerator);
var _regeneratorRuntime__default = /*#__PURE__*/_interopDefaultLegacy(_regeneratorRuntime);

var TImageItem = Vue.defineComponent({
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
    var _toRefs = Vue.toRefs(props),
      src = _toRefs.src,
      placementSrc = _toRefs.placementSrc,
      isSvg = _toRefs.isSvg;
    var classPrefix = index.usePrefixClass();
    var error = Vue.ref(false);
    var loaded = Vue.ref(false);
    var _useDrag = imageViewer_hooks_index.useDrag({
        translateX: 0,
        translateY: 0
      }),
      transform = _useDrag.transform,
      mouseDownHandler = _useDrag.mouseDownHandler;
    var _useConfig = configProvider_hooks_useConfig.useConfig("imageViewer"),
      globalConfig = _useConfig.globalConfig;
    var errorText = globalConfig.value.errorText;
    var svgElRef = Vue.ref();
    var imgStyle = Vue.computed(function () {
      return {
        transform: "rotate(".concat(props.rotate, "deg) scale(").concat(props.scale, ")"),
        display: !props.placementSrc || loaded.value ? "block" : "none"
      };
    });
    var placementImgStyle = Vue.computed(function () {
      return {
        transform: "rotate(".concat(props.rotate, "deg) scale(").concat(props.scale, ")"),
        display: !loaded.value ? "block" : "none"
      };
    });
    var boxStyle = Vue.computed(function () {
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
      var _ref = _asyncToGenerator__default["default"](/*#__PURE__*/_regeneratorRuntime__default["default"].mark(function _callee(url) {
        var _element$classList;
        var response, svgText, element, shadowRoot, container, svgElement, svgViewBox, viewBoxValues, svgViewBoxWidth, bbox, calculatedViewBox;
        return _regeneratorRuntime__default["default"].wrap(function (_context) {
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
    var _useImagePreviewUrl = index$1.useImagePreviewUrl(src),
      mainImagePreviewUrl = _useImagePreviewUrl.previewUrl;
    var _useImagePreviewUrl2 = index$1.useImagePreviewUrl(placementSrc),
      placementImagePreviewUrl = _useImagePreviewUrl2.previewUrl;
    Vue.watch([mainImagePreviewUrl, placementImagePreviewUrl], function () {
      resetStatus();
    });
    Vue.onMounted(/*#__PURE__*/_asyncToGenerator__default["default"](/*#__PURE__*/_regeneratorRuntime__default["default"].mark(function _callee2() {
      return _regeneratorRuntime__default["default"].wrap(function (_context2) {
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
      return Vue.createVNode("div", {
        "class": "".concat(classPrefix.value, "-image-viewer__modal-pic")
      }, [Vue.createVNode("div", {
        "class": "".concat(classPrefix.value, "-image-viewer__modal-box"),
        "style": boxStyle.value
      }, [error.value && Vue.createVNode("div", {
        "class": "".concat(classPrefix.value, "-image-viewer__img-error")
      }, [Vue.createVNode("div", {
        "class": "".concat(classPrefix.value, "-image-viewer__img-error-content")
      }, [Vue.createVNode(tdesignIconsVueNext.ImageErrorIcon, {
        "size": "4em"
      }, null), Vue.createVNode("div", {
        "class": "".concat(classPrefix.value, "-image-viewer__img-error-text")
      }, [errorText])])]), !error.value && !!props.placementSrc && placementImagePreviewUrl.value && Vue.createVNode("img", {
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
      }, null), !error.value && mainImagePreviewUrl.value && !isSvg.value && Vue.createVNode("img", {
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
      }, null), !error.value && mainImagePreviewUrl.value && isSvg.value && Vue.createVNode("div", {
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

exports["default"] = TImageItem;
//# sourceMappingURL=ImageItem.js.map
