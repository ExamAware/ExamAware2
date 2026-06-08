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
var dom = require('../_chunks/dep-06276759.js');
var affix_props = require('./props.js');
require('@babel/runtime/helpers/toConsumableArray');
require('@babel/runtime/helpers/typeof');
var index$1 = require('../_chunks/dep-47c460dd.js');
var index = require('../_chunks/dep-ecaaae91.js');
require('@babel/runtime/helpers/slicedToArray');
require('../_chunks/dep-cc66acf1.js');
require('@babel/runtime/helpers/defineProperty');
var isUndefined = require('../_chunks/dep-fd5a369e.js');
var isFunction = require('../_chunks/dep-48f60c78.js');
require('../_chunks/dep-953a77eb.js');
require('../_chunks/dep-8abdfb41.js');
require('../_chunks/dep-a55e8a08.js');
require('../_chunks/dep-b3b464e8.js');
require('../_chunks/dep-87589faa.js');
require('../_chunks/dep-05f89f0d.js');
require('../_chunks/dep-4fa46641.js');
require('../_chunks/dep-0813861e.js');
require('../_chunks/dep-422dd97f.js');
require('../_chunks/dep-71fa6bfc.js');
require('../_chunks/dep-80a478d7.js');
require('../_chunks/dep-427dabac.js');
require('../_chunks/dep-72c4cc44.js');
require('../_chunks/dep-ee355a9a.js');
require('../_chunks/dep-23f77e26.js');
require('../config-provider/hooks/useConfig.js');
require('../_chunks/dep-5d7e2375.js');
require('../_chunks/dep-94a7dc2d.js');
require('dayjs');
require('../_chunks/dep-92e23f17.js');
require('../_chunks/dep-0ff616fe.js');
require('../_chunks/dep-5f52cd42.js');
require('../_chunks/dep-f57bcb19.js');
require('../_chunks/dep-dc4bbc14.js');
require('../_chunks/dep-e27ea667.js');
require('../_chunks/dep-165ca38a.js');
require('../_chunks/dep-32412d92.js');
require('../_chunks/dep-a8a3d718.js');
require('../_chunks/dep-54e566d9.js');
require('../_chunks/dep-591a72de.js');
require('../_chunks/dep-8adeee89.js');
require('../_chunks/dep-4d2ef282.js');
require('../_chunks/dep-929933ce.js');
require('../_chunks/dep-6b1f0ef8.js');
require('@babel/runtime/helpers/createClass');
require('@babel/runtime/helpers/classCallCheck');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _asyncToGenerator__default = /*#__PURE__*/_interopDefaultLegacy(_asyncToGenerator);
var _regeneratorRuntime__default = /*#__PURE__*/_interopDefaultLegacy(_regeneratorRuntime);

var _Affix = Vue.defineComponent({
  name: "TAffix",
  props: affix_props["default"],
  emits: ["fixedChange"],
  setup: function setup(props2, context) {
    var _document;
    var COMPONENT_NAME = index.usePrefixClass("affix");
    var renderContent = index$1.useContent();
    var affixWrapRef = Vue.ref(null);
    var affixRef = Vue.ref(null);
    var placeholderEL = Vue.ref((_document = document) === null || _document === void 0 ? void 0 : _document.createElement("div"));
    var ticking = Vue.ref(false);
    var isBind = Vue.ref(false);
    var scrollContainer = Vue.ref();
    var affixStyle = Vue.ref();
    var rAFId = 0;
    var handleScroll = function handleScroll() {
      if (!ticking.value) {
        rAFId = window.requestAnimationFrame(function () {
          var _affixWrapRef$value$g, _affixWrapRef$value;
          rAFId = 0;
          var _ref = (_affixWrapRef$value$g = (_affixWrapRef$value = affixWrapRef.value) === null || _affixWrapRef$value === void 0 ? void 0 : _affixWrapRef$value.getBoundingClientRect()) !== null && _affixWrapRef$value$g !== void 0 ? _affixWrapRef$value$g : {
              top: 0,
              width: 0,
              height: 0
            },
            wrapToTop = _ref.top,
            wrapWidth = _ref.width,
            wrapHeight = _ref.height;
          var containerTop = 0;
          if (scrollContainer.value instanceof HTMLElement) {
            containerTop = scrollContainer.value.getBoundingClientRect().top;
          }
          var fixedTop;
          var calcTop = wrapToTop - containerTop;
          var containerHeight = scrollContainer.value[scrollContainer.value instanceof Window ? "innerHeight" : "clientHeight"] - wrapHeight;
          var calcBottom = containerTop + containerHeight - props2.offsetBottom;
          if (!isUndefined.isUndefined(props2.offsetTop) && calcTop <= props2.offsetTop) {
            fixedTop = containerTop + props2.offsetTop;
          } else if (!isUndefined.isUndefined(props2.offsetBottom) && wrapToTop >= calcBottom) {
            fixedTop = calcBottom;
          } else {
            fixedTop = false;
          }
          if (affixRef.value) {
            var affixed = fixedTop !== false;
            var placeholderStatus = affixWrapRef.value.contains(placeholderEL.value);
            if (affixed) {
              affixRef.value.className = COMPONENT_NAME.value;
              affixStyle.value = {
                top: "".concat(fixedTop, "px"),
                width: "".concat(wrapWidth, "px"),
                height: "".concat(wrapHeight, "px"),
                zIndex: props2.zIndex
              };
              if (!placeholderStatus) {
                placeholderEL.value.style.width = "".concat(wrapWidth, "px");
                placeholderEL.value.style.height = "".concat(wrapHeight, "px");
                affixWrapRef.value.appendChild(placeholderEL.value);
              }
            } else {
              affixRef.value.removeAttribute("class");
              affixStyle.value = void 0;
              placeholderStatus && placeholderEL.value.remove();
            }
            context.emit("fixedChange", affixed, {
              top: Number(fixedTop)
            });
            if (isFunction.isFunction(props2.onFixedChange)) props2.onFixedChange(affixed, {
              top: Number(fixedTop)
            });
          }
          ticking.value = false;
        });
        ticking.value = true;
      }
    };
    var bindScroll = /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator__default["default"](/*#__PURE__*/_regeneratorRuntime__default["default"].mark(function _callee() {
        return _regeneratorRuntime__default["default"].wrap(function (_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 1;
              return Vue.nextTick();
            case 1:
              if (!isBind.value) {
                _context.next = 2;
                break;
              }
              return _context.abrupt("return");
            case 2:
              scrollContainer.value = dom.getScrollContainer(props2.container);
              dom.on(scrollContainer.value, "scroll", handleScroll);
              dom.on(window, "resize", handleScroll);
              isBind.value = true;
            case 3:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      return function bindScroll() {
        return _ref2.apply(this, arguments);
      };
    }();
    var unbindScroll = function unbindScroll() {
      if (!scrollContainer.value || !isBind.value) return;
      dom.off(scrollContainer.value, "scroll", handleScroll);
      dom.off(window, "resize", handleScroll);
      if (rAFId) {
        window.cancelAnimationFrame(rAFId);
      }
      isBind.value = false;
    };
    Vue.watch(function () {
      return props2.offsetTop;
    }, function () {
      handleScroll();
    });
    Vue.watch(function () {
      return props2.offsetBottom;
    }, function () {
      handleScroll();
    });
    Vue.watch(function () {
      return props2.zIndex;
    }, function () {
      handleScroll();
    });
    Vue.onMounted(bindScroll);
    Vue.onActivated(bindScroll);
    Vue.onDeactivated(unbindScroll);
    Vue.onBeforeUnmount(unbindScroll);
    context.expose({
      scrollContainer: scrollContainer,
      affixWrapRef: affixWrapRef,
      handleScroll: handleScroll
    });
    return function () {
      return Vue.createVNode("div", {
        "ref": affixWrapRef
      }, [Vue.createVNode("div", {
        "ref": affixRef,
        "style": affixStyle.value
      }, [renderContent("default", "content")])]);
    };
  }
});

exports["default"] = _Affix;
//# sourceMappingURL=affix.js.map
