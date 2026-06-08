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
var anchor_utils_index = require('./utils/index.js');
var dom = require('../_chunks/dep-06276759.js');
var anchor_props = require('./props.js');
require('@babel/runtime/helpers/toConsumableArray');
require('@babel/runtime/helpers/typeof');
var index$2 = require('../_chunks/dep-47c460dd.js');
var index$1 = require('../_chunks/dep-8382953f.js');
var index = require('../_chunks/dep-ecaaae91.js');
require('@babel/runtime/helpers/slicedToArray');
require('../_chunks/dep-cc66acf1.js');
require('@babel/runtime/helpers/defineProperty');
var affix_index = require('../affix/index.js');
var anchor_consts_index = require('./consts/index.js');
require('../_chunks/dep-8abdfb41.js');
require('../_chunks/dep-953a77eb.js');
require('../_chunks/dep-48f60c78.js');
require('../_chunks/dep-b3b464e8.js');
require('../_chunks/dep-0813861e.js');
require('../_chunks/dep-a55e8a08.js');
require('../_chunks/dep-87589faa.js');
require('../_chunks/dep-05f89f0d.js');
require('../_chunks/dep-4fa46641.js');
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
require('../affix/affix.js');
require('../affix/props.js');
require('../_chunks/dep-fd5a369e.js');
require('../_chunks/dep-d62a674d.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _asyncToGenerator__default = /*#__PURE__*/_interopDefaultLegacy(_asyncToGenerator);
var _regeneratorRuntime__default = /*#__PURE__*/_interopDefaultLegacy(_regeneratorRuntime);

function _isSlot(s) {
  return typeof s === 'function' || Object.prototype.toString.call(s) === '[object Object]' && !Vue.isVNode(s);
}
var _Anchor = Vue.defineComponent({
  name: "TAnchor",
  inheritAttrs: false,
  props: anchor_props["default"],
  setup: function setup(props2, _ref) {
    var attrs = _ref.attrs;
    var anchorRef = Vue.ref(null);
    var links = Vue.ref([]);
    var active = Vue.ref("");
    var scrollContainer = Vue.ref(null);
    var handleScrollLock = Vue.ref(false);
    var activeLineStyle = Vue.reactive({});
    var COMPONENT_NAME = index.usePrefixClass("anchor");
    var ANCHOR_LINE_CLASSNAME = index.usePrefixClass("anchor__line");
    var ANCHOR_LINE_CURSOR_CLASSNAME = index.usePrefixClass("anchor__line-cursor");
    var _useCommonClassName = index$1.useCommonClassName(),
      STATUS = _useCommonClassName.STATUS,
      SIZE = _useCommonClassName.SIZE;
    var renderTNodeJSX = index$2.useTNodeJSX();
    var getScrollContainer = function getScrollContainer() {
      if (dom.isServer) {
        return;
      }
      var container = props2.container;
      scrollContainer.value = dom.getScrollContainer(container);
      dom.on(scrollContainer.value, "scroll", handleScroll);
      handleScroll();
    };
    var handleScroll = function handleScroll() {
      if (handleScrollLock.value) return;
      var bounds = props2.bounds,
        targetOffset = props2.targetOffset;
      var filters = [];
      var active2 = "";
      links.value.forEach(function (link) {
        var anchor = getAnchorTarget(link);
        if (!anchor) {
          return;
        }
        var top = anchor_utils_index.getOffsetTop(anchor, scrollContainer.value);
        if (top < bounds + targetOffset) {
          filters.push({
            link: link,
            top: top
          });
        }
      });
      if (filters.length) {
        var latest = filters.reduce(function (prev, cur) {
          return prev.top > cur.top ? prev : cur;
        });
        active2 = latest.link;
      }
      setCurrentActiveLink(active2);
    };
    var getAnchorTarget = function getAnchorTarget(link) {
      var matcher = link.match(anchor_utils_index.ANCHOR_SHARP_REGEXP);
      if (!matcher) {
        return;
      }
      var anchor = document.getElementById(matcher[1]);
      if (!anchor) {
        return;
      }
      return anchor;
    };
    var registerLink = function registerLink(link) {
      if (!anchor_utils_index.ANCHOR_SHARP_REGEXP.test(link) || links.value.indexOf(link) !== -1) {
        return;
      }
      links.value.push(link);
    };
    var unregisterLink = function unregisterLink(link) {
      links.value = links.value.filter(function (each) {
        return each !== link;
      });
    };
    var setCurrentActiveLink = /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator__default["default"](/*#__PURE__*/_regeneratorRuntime__default["default"].mark(function _callee(link) {
        var _props2$onChange;
        return _regeneratorRuntime__default["default"].wrap(function (_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if (!(active.value === link)) {
                _context.next = 1;
                break;
              }
              return _context.abrupt("return");
            case 1:
              active.value = link;
              (_props2$onChange = props2.onChange) === null || _props2$onChange === void 0 || _props2$onChange.call(props2, link, active.value);
              _context.next = 2;
              return Vue.nextTick();
            case 2:
              updateActiveLine();
            case 3:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      return function setCurrentActiveLink(_x) {
        return _ref2.apply(this, arguments);
      };
    }();
    var updateActiveLine = function updateActiveLine() {
      var _anchorRef$value;
      var ele = (_anchorRef$value = anchorRef.value) === null || _anchorRef$value === void 0 ? void 0 : _anchorRef$value.querySelector(".".concat(STATUS.value.active, ">a"));
      if (!ele) {
        Object.assign(activeLineStyle, {});
        return;
      }
      var top = ele.offsetTop,
        height = ele.offsetHeight;
      Object.assign(activeLineStyle, {
        top: "".concat(top, "px"),
        height: "".concat(height, "px"),
        opacity: 1
      });
    };
    var handleLinkClick = function handleLinkClick(link) {
      var _props2$onClick;
      (_props2$onClick = props2.onClick) === null || _props2$onClick === void 0 || _props2$onClick.call(props2, link);
    };
    var handleScrollTo = /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator__default["default"](/*#__PURE__*/_regeneratorRuntime__default["default"].mark(function _callee2(link) {
        var anchor, targetOffset, scrollTop, offsetTop, top;
        return _regeneratorRuntime__default["default"].wrap(function (_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              anchor = getAnchorTarget(link);
              setCurrentActiveLink(link);
              if (anchor) {
                _context2.next = 1;
                break;
              }
              return _context2.abrupt("return");
            case 1:
              handleScrollLock.value = true;
              targetOffset = props2.targetOffset;
              scrollTop = dom.getScroll(scrollContainer.value);
              offsetTop = anchor_utils_index.getOffsetTop(anchor, scrollContainer.value);
              top = scrollTop + offsetTop - targetOffset;
              _context2.next = 2;
              return dom.scrollTo(top, {
                container: scrollContainer.value
              });
            case 2:
              handleScrollLock.value = false;
            case 3:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }));
      return function handleScrollTo(_x2) {
        return _ref3.apply(this, arguments);
      };
    }();
    var renderCursor = function renderCursor() {
      var titleContent = renderTNodeJSX("cursor");
      return titleContent || Vue.createVNode("div", {
        "class": ANCHOR_LINE_CURSOR_CLASSNAME.value
      }, null);
    };
    Vue.onMounted(/*#__PURE__*/_asyncToGenerator__default["default"](/*#__PURE__*/_regeneratorRuntime__default["default"].mark(function _callee3() {
      return _regeneratorRuntime__default["default"].wrap(function (_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            getScrollContainer();
            if (!active.value) {
              _context3.next = 2;
              break;
            }
            _context3.next = 1;
            return Vue.nextTick();
          case 1:
            handleScrollTo(active.value);
          case 2:
          case "end":
            return _context3.stop();
        }
      }, _callee3);
    })));
    Vue.onUnmounted(function () {
      if (!scrollContainer.value) return;
      dom.off(scrollContainer.value, "scroll", handleScroll);
    });
    Vue.watchEffect(function () {
      if (scrollContainer.value) {
        dom.off(scrollContainer.value, "scroll", handleScroll);
      }
      getScrollContainer();
    });
    Vue.provide(anchor_consts_index.AnchorInjectionKey, Vue.reactive({
      registerLink: registerLink,
      unregisterLink: unregisterLink,
      handleScrollTo: handleScrollTo,
      handleLinkClick: handleLinkClick,
      active: active
    }));
    return function () {
      var size = props2.size,
        affixProps = props2.affixProps;
      var className = [COMPONENT_NAME.value, SIZE.value[size]];
      var content = Vue.createVNode("div", Vue.mergeProps({
        "ref": anchorRef,
        "class": className
      }, attrs), [Vue.createVNode("div", {
        "class": ANCHOR_LINE_CLASSNAME.value
      }, [Vue.createVNode("div", {
        "class": "".concat(ANCHOR_LINE_CURSOR_CLASSNAME.value, "-wrapper"),
        "style": activeLineStyle
      }, [renderCursor()])]), renderTNodeJSX("default")]);
      if (affixProps) {
        return Vue.createVNode(affix_index.Affix, affixProps, _isSlot(content) ? content : {
          "default": function _default() {
            return [content];
          }
        });
      }
      return content;
    };
  }
});

exports["default"] = _Anchor;
//# sourceMappingURL=anchor.js.map
