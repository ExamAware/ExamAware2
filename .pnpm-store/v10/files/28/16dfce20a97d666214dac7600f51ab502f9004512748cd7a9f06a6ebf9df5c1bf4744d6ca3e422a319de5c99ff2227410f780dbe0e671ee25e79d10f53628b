/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { isVNode, defineComponent, ref, reactive, nextTick, createVNode, onMounted, onUnmounted, watchEffect, provide, mergeProps } from 'vue';
import { _ as _asyncToGenerator, a as _regeneratorRuntime } from '../_chunks/dep-88e5a7b0.mjs';
import { getOffsetTop, ANCHOR_SHARP_REGEXP } from './utils/index.mjs';
import { i as isServer, b as getScrollContainer, o as on, d as getScroll, s as scrollTo, c as off } from '../_chunks/dep-51a43106.mjs';
import props from './props.mjs';
import { u as usePrefixClass, c as useCommonClassName, a as useTNodeJSX } from '../_chunks/dep-7673347f.mjs';
import { Affix } from '../affix/index.mjs';
import { AnchorInjectionKey } from './consts/index.mjs';
import '../_chunks/dep-257428bc.mjs';
import '../_chunks/dep-fe644854.mjs';
import 'lodash-es';
import '../_chunks/dep-00b4e06a.mjs';
import '../_chunks/dep-9f459d8b.mjs';
import '../config-provider/hooks/useConfig.mjs';
import '../config-provider/utils/context.mjs';
import '../_chunks/dep-a4c09318.mjs';
import '../_chunks/dep-ffb85102.mjs';
import '../_chunks/dep-ad588525.mjs';
import '../_chunks/dep-9003fde5.mjs';
import '../_chunks/dep-22ebd6af.mjs';
import '../_chunks/dep-cdd448ec.mjs';
import '../_chunks/dep-97ecacde.mjs';
import '../_chunks/dep-84fd47b3.mjs';
import '../_chunks/dep-1dacc319.mjs';
import '../_chunks/dep-d36c4a3f.mjs';
import '../affix/affix.mjs';
import '../affix/props.mjs';
import './style/css.mjs';

function _isSlot(s) {
  return typeof s === 'function' || Object.prototype.toString.call(s) === '[object Object]' && !isVNode(s);
}
var _Anchor = defineComponent({
  name: "TAnchor",
  inheritAttrs: false,
  props: props,
  setup: function setup(props2, _ref) {
    var attrs = _ref.attrs;
    var anchorRef = ref(null);
    var links = ref([]);
    var active = ref("");
    var scrollContainer = ref(null);
    var handleScrollLock = ref(false);
    var activeLineStyle = reactive({});
    var COMPONENT_NAME = usePrefixClass("anchor");
    var ANCHOR_LINE_CLASSNAME = usePrefixClass("anchor__line");
    var ANCHOR_LINE_CURSOR_CLASSNAME = usePrefixClass("anchor__line-cursor");
    var _useCommonClassName = useCommonClassName(),
      STATUS = _useCommonClassName.STATUS,
      SIZE = _useCommonClassName.SIZE;
    var renderTNodeJSX = useTNodeJSX();
    var getScrollContainer$1 = function getScrollContainer$1() {
      if (isServer) {
        return;
      }
      var container = props2.container;
      scrollContainer.value = getScrollContainer(container);
      on(scrollContainer.value, "scroll", handleScroll);
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
        var top = getOffsetTop(anchor, scrollContainer.value);
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
      var matcher = link.match(ANCHOR_SHARP_REGEXP);
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
      if (!ANCHOR_SHARP_REGEXP.test(link) || links.value.indexOf(link) !== -1) {
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
      var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime.mark(function _callee(link) {
        var _props2$onChange;
        return _regeneratorRuntime.wrap(function (_context) {
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
              return nextTick();
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
      var _ref3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime.mark(function _callee2(link) {
        var anchor, targetOffset, scrollTop, offsetTop, top;
        return _regeneratorRuntime.wrap(function (_context2) {
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
              scrollTop = getScroll(scrollContainer.value);
              offsetTop = getOffsetTop(anchor, scrollContainer.value);
              top = scrollTop + offsetTop - targetOffset;
              _context2.next = 2;
              return scrollTo(top, {
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
      return titleContent || createVNode("div", {
        "class": ANCHOR_LINE_CURSOR_CLASSNAME.value
      }, null);
    };
    onMounted(/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime.mark(function _callee3() {
      return _regeneratorRuntime.wrap(function (_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            getScrollContainer$1();
            if (!active.value) {
              _context3.next = 2;
              break;
            }
            _context3.next = 1;
            return nextTick();
          case 1:
            handleScrollTo(active.value);
          case 2:
          case "end":
            return _context3.stop();
        }
      }, _callee3);
    })));
    onUnmounted(function () {
      if (!scrollContainer.value) return;
      off(scrollContainer.value, "scroll", handleScroll);
    });
    watchEffect(function () {
      if (scrollContainer.value) {
        off(scrollContainer.value, "scroll", handleScroll);
      }
      getScrollContainer$1();
    });
    provide(AnchorInjectionKey, reactive({
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
      var content = createVNode("div", mergeProps({
        "ref": anchorRef,
        "class": className
      }, attrs), [createVNode("div", {
        "class": ANCHOR_LINE_CLASSNAME.value
      }, [createVNode("div", {
        "class": "".concat(ANCHOR_LINE_CURSOR_CLASSNAME.value, "-wrapper"),
        "style": activeLineStyle
      }, [renderCursor()])]), renderTNodeJSX("default")]);
      if (affixProps) {
        return createVNode(Affix, affixProps, _isSlot(content) ? content : {
          "default": function _default() {
            return [content];
          }
        });
      }
      return content;
    };
  }
});

export { _Anchor as default };
//# sourceMappingURL=anchor.mjs.map
