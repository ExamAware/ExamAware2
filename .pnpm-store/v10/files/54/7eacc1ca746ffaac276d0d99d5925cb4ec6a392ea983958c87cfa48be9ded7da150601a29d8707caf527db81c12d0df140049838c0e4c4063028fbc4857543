/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { defineComponent, ref, nextTick, watch, onMounted, onActivated, onDeactivated, onBeforeUnmount, createVNode } from 'vue';
import { _ as _asyncToGenerator, a as _regeneratorRuntime } from '../_chunks/dep-88e5a7b0.mjs';
import { isUndefined, isFunction } from 'lodash-es';
import { b as getScrollContainer, o as on, c as off } from '../_chunks/dep-51a43106.mjs';
import props from './props.mjs';
import { u as usePrefixClass, b as useContent } from '../_chunks/dep-7673347f.mjs';
import '../_chunks/dep-257428bc.mjs';
import '../_chunks/dep-fe644854.mjs';
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

var _Affix = defineComponent({
  name: "TAffix",
  props: props,
  emits: ["fixedChange"],
  setup: function setup(props2, context) {
    var _document;
    var COMPONENT_NAME = usePrefixClass("affix");
    var renderContent = useContent();
    var affixWrapRef = ref(null);
    var affixRef = ref(null);
    var placeholderEL = ref((_document = document) === null || _document === void 0 ? void 0 : _document.createElement("div"));
    var ticking = ref(false);
    var isBind = ref(false);
    var scrollContainer = ref();
    var affixStyle = ref();
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
          if (!isUndefined(props2.offsetTop) && calcTop <= props2.offsetTop) {
            fixedTop = containerTop + props2.offsetTop;
          } else if (!isUndefined(props2.offsetBottom) && wrapToTop >= calcBottom) {
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
            if (isFunction(props2.onFixedChange)) props2.onFixedChange(affixed, {
              top: Number(fixedTop)
            });
          }
          ticking.value = false;
        });
        ticking.value = true;
      }
    };
    var bindScroll = /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
        return _regeneratorRuntime.wrap(function (_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 1;
              return nextTick();
            case 1:
              if (!isBind.value) {
                _context.next = 2;
                break;
              }
              return _context.abrupt("return");
            case 2:
              scrollContainer.value = getScrollContainer(props2.container);
              on(scrollContainer.value, "scroll", handleScroll);
              on(window, "resize", handleScroll);
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
      off(scrollContainer.value, "scroll", handleScroll);
      off(window, "resize", handleScroll);
      if (rAFId) {
        window.cancelAnimationFrame(rAFId);
      }
      isBind.value = false;
    };
    watch(function () {
      return props2.offsetTop;
    }, function () {
      handleScroll();
    });
    watch(function () {
      return props2.offsetBottom;
    }, function () {
      handleScroll();
    });
    watch(function () {
      return props2.zIndex;
    }, function () {
      handleScroll();
    });
    onMounted(bindScroll);
    onActivated(bindScroll);
    onDeactivated(unbindScroll);
    onBeforeUnmount(unbindScroll);
    context.expose({
      scrollContainer: scrollContainer,
      affixWrapRef: affixWrapRef,
      handleScroll: handleScroll
    });
    return function () {
      return createVNode("div", {
        "ref": affixWrapRef
      }, [createVNode("div", {
        "ref": affixRef,
        "style": affixStyle.value
      }, [renderContent("default", "content")])]);
    };
  }
});

export { _Affix as default };
//# sourceMappingURL=affix.mjs.map
