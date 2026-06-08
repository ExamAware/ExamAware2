/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { defineComponent, ref, computed, nextTick, watch, onMounted, h, createVNode, Transition } from 'vue';
import { _ as _defineProperty } from '../_chunks/dep-1dacc319.mjs';
import { debounce, isFunction } from 'lodash-es';
import { ChevronLeftIcon, ChevronRightIcon, AddIcon } from 'tdesign-icons-vue-next';
import props from './props.mjs';
import TTabNavItem from './tab-nav-item.mjs';
import TTabNavBar from './tab-nav-bar.mjs';
import { u as usePrefixClass, i as useGlobalIcon, c as useCommonClassName, C as useResize, F as useDragSort } from '../_chunks/dep-7673347f.mjs';
import '../_chunks/dep-257428bc.mjs';
import './tab-panel-props.mjs';
import '../_chunks/dep-9003fde5.mjs';
import '../_chunks/dep-9f459d8b.mjs';
import '../_chunks/dep-00b4e06a.mjs';
import '../_chunks/dep-51a43106.mjs';
import '../_chunks/dep-fe644854.mjs';
import '../config-provider/hooks/useConfig.mjs';
import '../config-provider/utils/context.mjs';
import '../_chunks/dep-a4c09318.mjs';
import '../_chunks/dep-ffb85102.mjs';
import '../_chunks/dep-ad588525.mjs';
import '../_chunks/dep-22ebd6af.mjs';
import '../_chunks/dep-cdd448ec.mjs';
import '../_chunks/dep-97ecacde.mjs';
import '../_chunks/dep-84fd47b3.mjs';
import '../_chunks/dep-d36c4a3f.mjs';

var getDomWidth = function getDomWidth(dom) {
  return (dom === null || dom === void 0 ? void 0 : dom.offsetWidth) || 0;
};
var getDomOffsetLeft = function getDomOffsetLeft(dom) {
  return (dom === null || dom === void 0 ? void 0 : dom.offsetLeft) || 0;
};
function calculateOffset(depElement, offset, scrollPosition) {
  var navsContainer = depElement.navsContainer,
    activeTab = depElement.activeTab,
    rightOperations = depElement.rightOperations,
    leftOperations = depElement.leftOperations;
  var tabWidth = getDomWidth(activeTab);
  var wrapWidth = getDomWidth(navsContainer);
  var tabOffset = getDomOffsetLeft(activeTab);
  var rightOperationsWidth = getDomWidth(rightOperations);
  var leftOperationsWidth = getDomWidth(leftOperations);
  if (scrollPosition === "auto") {
    if (tabOffset - leftOperationsWidth < offset) {
      return tabOffset - leftOperationsWidth;
    }
    if (tabOffset + tabWidth > offset + wrapWidth - rightOperationsWidth) {
      return tabOffset + tabWidth - wrapWidth + rightOperationsWidth;
    }
  } else if (scrollPosition === "start") {
    return tabOffset - leftOperationsWidth;
  } else if (scrollPosition === "center") {
    return tabOffset + (tabWidth - wrapWidth) / 2;
  } else if (scrollPosition === "end") {
    return tabOffset + tabWidth - wrapWidth + rightOperationsWidth;
  }
  return offset;
}
function calcPrevOrNextOffset(elements, offset, action) {
  var navsContainer = elements.navsContainer,
    activeTab = elements.activeTab;
  var navsContainerWidth = getDomWidth(navsContainer);
  var activeTabWidth = getDomWidth(activeTab);
  var diffWidth = Math.abs(navsContainerWidth - activeTabWidth);
  if (action === "next") {
    return offset + diffWidth;
  }
  return offset - diffWidth;
}
function calcMaxOffset(elements) {
  var navsWrap = elements.navsWrap,
    navsContainer = elements.navsContainer,
    rightOperations = elements.rightOperations,
    toRightBtn = elements.toRightBtn;
  var wrapWidth = getDomWidth(navsWrap);
  var containerWidth = getDomWidth(navsContainer);
  var rightOperationsWidth = getDomWidth(rightOperations);
  var toRightBtnWidth = getDomWidth(toRightBtn);
  return wrapWidth - containerWidth + rightOperationsWidth - toRightBtnWidth;
}
function calcValidOffset(offset, maxOffset) {
  return Math.max(0, Math.min(offset, maxOffset));
}

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var TTabNav = defineComponent({
  name: "TTabNav",
  resizeObserver: null,
  props: {
    theme: props.theme,
    panels: {
      type: Array,
      "default": function _default() {
        return [];
      }
    },
    action: Array,
    value: props.value,
    placement: props.placement,
    scrollPosition: props.scrollPosition,
    size: props.size,
    disabled: props.disabled,
    addable: props.addable,
    onChange: props.onChange,
    onAdd: props.onAdd,
    onRemove: props.onRemove,
    dragSort: props.dragSort,
    onDragSort: props.onDragSort
  },
  setup: function setup(props) {
    var componentName = usePrefixClass("tabs");
    var _useGlobalIcon = useGlobalIcon({
        ChevronLeftIcon: ChevronLeftIcon,
        ChevronRightIcon: ChevronRightIcon,
        AddIcon: AddIcon
      }),
      ChevronLeftIcon$1 = _useGlobalIcon.ChevronLeftIcon,
      ChevronRightIcon$1 = _useGlobalIcon.ChevronRightIcon,
      AddIcon$1 = _useGlobalIcon.AddIcon;
    var classPrefix = usePrefixClass();
    var _useCommonClassName = useCommonClassName(),
      SIZE = _useCommonClassName.SIZE;
    var scrollLeft = ref(0);
    var navsContainerRef = ref();
    var navsWrapRef = ref();
    var leftOperationsRef = ref();
    var rightOperationsRef = ref();
    var toRightBtnRef = ref();
    var activeTabRef = ref();
    var maxScrollLeft = ref(0);
    var showAction = computed(function () {
      var _props$placement;
      return ["top", "bottom"].includes(props === null || props === void 0 || (_props$placement = props.placement) === null || _props$placement === void 0 ? void 0 : _props$placement.toLowerCase());
    });
    var getRefs = function getRefs() {
      return {
        navsContainer: navsContainerRef.value,
        navsWrap: navsWrapRef.value,
        leftOperations: leftOperationsRef.value,
        rightOperations: rightOperationsRef.value,
        toRightBtn: toRightBtnRef.value,
        activeTab: activeTabRef.value
      };
    };
    var isVerticalPlacement = computed(function () {
      return ["left", "right"].includes(props.placement.toLowerCase());
    });
    var canToLeft = computed(function () {
      return scrollLeft.value > 1;
    });
    var canToRight = computed(function () {
      return scrollLeft.value < maxScrollLeft.value - 1;
    });
    var wrapTransformStyle = computed(function () {
      if (isVerticalPlacement.value) return {};
      return {
        transform: "translate3d(".concat(-scrollLeft.value, "px, 0, 0)")
      };
    });
    var navsContainerStyle = computed(function () {
      return props.addable ? {
        "min-height": "48px"
      } : null;
    });
    var iconBaseClass = computed(function () {
      return _defineProperty(_defineProperty(_defineProperty({}, "".concat(componentName.value, "__btn"), true), SIZE.value.medium, props.size === "medium"), SIZE.value.large, props.size === "large");
    });
    var leftIconClass = computed(function () {
      return _objectSpread(_defineProperty({}, "".concat(componentName.value, "__btn--left"), true), iconBaseClass.value);
    });
    var rightIconClass = computed(function () {
      return _objectSpread(_defineProperty({}, "".concat(componentName.value, "__btn--right"), true), iconBaseClass.value);
    });
    var addIconClass = computed(function () {
      return _objectSpread(_defineProperty({}, "".concat(componentName.value, "__add-btn"), true), iconBaseClass.value);
    });
    var navContainerClass = computed(function () {
      return _defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "".concat(componentName.value, "__nav-container"), true), "".concat(componentName.value, "__nav--card"), props.theme === "card"), "".concat(classPrefix.value, "-is-").concat(props.placement), true), "".concat(classPrefix.value, "-is-addable"), props.addable);
    });
    var navScrollContainerClass = computed(function () {
      return _defineProperty(_defineProperty({}, "".concat(componentName.value, "__nav-scroll"), true), "".concat(classPrefix.value, "-is-scrollable"), canToLeft.value || canToRight.value);
    });
    var navsWrapClass = computed(function () {
      return ["".concat(componentName.value, "__nav-wrap"), "".concat(classPrefix.value, "-is-smooth"), _defineProperty({}, "".concat(classPrefix.value, "-is-vertical"), isVerticalPlacement.value)];
    });
    var setOffset = function setOffset(offset) {
      scrollLeft.value = calcValidOffset(offset, maxScrollLeft.value);
    };
    var handleScroll = function handleScroll(action) {
      setOffset(calcPrevOrNextOffset(getRefs(), scrollLeft.value, action));
    };
    var handleWheel = function handleWheel(event) {
      if (!canToLeft.value && !canToRight.value) return;
      event.preventDefault();
      var deltaX = event.deltaX,
        deltaY = event.deltaY;
      if (Math.abs(deltaX) > Math.abs(deltaY)) {
        setOffset(scrollLeft.value + deltaX);
      } else {
        setOffset(scrollLeft.value + deltaY);
      }
    };
    var handleActiveTabScroll = function handleActiveTabScroll() {
      setTimeout(function () {
        setOffset(calculateOffset(getRefs(), scrollLeft.value, props.scrollPosition));
      }, 0);
    };
    var getMaxScrollLeft = function getMaxScrollLeft() {
      nextTick(function () {
        maxScrollLeft.value = calcMaxOffset(getRefs());
      });
    };
    watch([function () {
      return props.placement;
    }, function () {
      return props.panels;
    }], getMaxScrollLeft);
    watch([function () {
      return props.scrollPosition;
    }], handleActiveTabScroll);
    useResize(debounce(getMaxScrollLeft), navsContainerRef.value);
    var handleAddTab = function handleAddTab(e) {
      var _props$onAdd;
      (_props$onAdd = props.onAdd) === null || _props$onAdd === void 0 || _props$onAdd.call(props, {
        e: e
      });
    };
    var tabClick = function tabClick(event, nav) {
      var value = nav.value,
        disabled = nav.disabled;
      if (disabled || props.value === value) {
        return false;
      }
      props.onChange(value);
    };
    var onTabRemove = function onTabRemove(_ref5) {
      var e = _ref5.e,
        value = _ref5.value,
        index = _ref5.index;
      props.onRemove({
        e: e,
        value: value,
        index: index
      });
    };
    var setActiveTab = function setActiveTab(ref2) {
      if (!(ref2 !== null && ref2 !== void 0 && ref2.$el)) return;
      if ((ref2 === null || ref2 === void 0 ? void 0 : ref2.value) === props.value && activeTabRef.value !== ref2.$el) {
        activeTabRef.value = ref2.$el;
        handleActiveTabScroll();
      }
    };
    var _useDragSort = useDragSort(props),
      setNavsWrap = _useDragSort.setNavsWrap;
    onMounted(function () {
      setNavsWrap(navsWrapRef.value);
      getMaxScrollLeft();
      handleActiveTabScroll();
    });
    var renderNavsContent = function renderNavsContent() {
      return props.panels.map(function (panel, index) {
        var _panel$children;
        var label;
        if (panel !== null && panel !== void 0 && (_panel$children = panel.children) !== null && _panel$children !== void 0 && _panel$children.label) {
          label = panel.children.label();
        } else if (isFunction(panel.label)) {
          label = panel.label(h);
        } else {
          label = panel.label || "\u9009\u9879\u5361".concat(index + 1);
        }
        var draggable = props.dragSort;
        if (draggable && panel.draggable === false) {
          draggable = panel.draggable;
        }
        return createVNode(TTabNavItem, {
          "ref": setActiveTab,
          "draggable": draggable,
          "key": panel.value,
          "index": index,
          "theme": props.theme,
          "size": props.size,
          "placement": props.placement,
          "label": label,
          "active": panel.value === props.value,
          "disabled": props.disabled || panel.disabled,
          "removable": panel.removable,
          "value": panel.value,
          "onClick": function onClick(e) {
            return tabClick(e, panel);
          },
          "onTabRemove": onTabRemove,
          "onTabPanelRemove": panel.onRemove
        }, null);
      });
    };
    var renderArrows = function renderArrows() {
      return [createVNode("div", {
        "ref": leftOperationsRef,
        "class": ["".concat(componentName.value, "__operations"), "".concat(componentName.value, "__operations--left")]
      }, [createVNode(Transition, {
        "name": "fade",
        "mode": "out-in",
        "appear": true
      }, {
        "default": function _default() {
          return [canToLeft.value ? createVNode("div", {
            "class": leftIconClass.value,
            "onClick": function onClick() {
              return handleScroll("prev");
            }
          }, [createVNode(ChevronLeftIcon$1, null, null)]) : null];
        }
      })]), createVNode("div", {
        "ref": rightOperationsRef,
        "class": ["".concat(componentName.value, "__operations"), "".concat(componentName.value, "__operations--right")]
      }, [createVNode(Transition, {
        "name": "fade",
        "mode": "out-in",
        "appear": true
      }, {
        "default": function _default() {
          return [canToRight.value ? createVNode("div", {
            "ref": toRightBtnRef,
            "class": rightIconClass.value,
            "onClick": function onClick() {
              return handleScroll("next");
            }
          }, [createVNode(ChevronRightIcon$1, null, null)]) : null];
        }
      }), props.addable ? createVNode("div", {
        "class": addIconClass.value,
        "onClick": handleAddTab
      }, [createVNode(AddIcon$1, null, null)]) : null, showAction.value && props.action])];
    };
    var renderNavs = function renderNavs() {
      var navContent = renderNavsContent();
      return createVNode("div", {
        "class": navContainerClass.value
      }, [createVNode("div", {
        "class": navScrollContainerClass.value,
        "onWheel": handleWheel
      }, [createVNode("div", {
        "ref": navsWrapRef,
        "class": navsWrapClass.value,
        "style": wrapTransformStyle.value
      }, [props.theme !== "card" && createVNode(TTabNavBar, {
        "placement": props.placement,
        "value": props.value,
        "navs": navContent
      }, null), navContent])])]);
    };
    return function () {
      return createVNode("div", {
        "ref": navsContainerRef,
        "class": ["".concat(componentName.value, "__nav")],
        "style": navsContainerStyle.value
      }, [renderArrows(), renderNavs()]);
    };
  }
});

export { TTabNav as default };
//# sourceMappingURL=tab-nav.mjs.map
