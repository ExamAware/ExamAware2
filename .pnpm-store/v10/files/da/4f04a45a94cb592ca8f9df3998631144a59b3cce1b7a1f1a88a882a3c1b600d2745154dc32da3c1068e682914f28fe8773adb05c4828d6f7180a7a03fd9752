/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Vue = require('vue');
var _defineProperty = require('@babel/runtime/helpers/defineProperty');
var tdesignIconsVueNext = require('tdesign-icons-vue-next');
var tabs_props = require('./props.js');
var tabs_tabNavItem = require('./tab-nav-item.js');
var tabs_tabNavBar = require('./tab-nav-bar.js');
require('@babel/runtime/helpers/toConsumableArray');
require('@babel/runtime/helpers/typeof');
require('../_chunks/dep-953a77eb.js');
var index$2 = require('../_chunks/dep-8382953f.js');
var index = require('../_chunks/dep-ecaaae91.js');
var index$1 = require('../_chunks/dep-31c76dc6.js');
require('@babel/runtime/helpers/slicedToArray');
require('../_chunks/dep-cc66acf1.js');
var index$3 = require('../_chunks/dep-5d4742f2.js');
var debounce = require('../_chunks/dep-441a3b7b.js');
var isFunction = require('../_chunks/dep-48f60c78.js');
require('./tab-panel-props.js');
require('../_chunks/dep-0b6215b5.js');
require('../_chunks/dep-c3dee00a.js');
require('../_chunks/dep-b6058ff9.js');
require('../_chunks/dep-8abdfb41.js');
require('../config-provider/hooks/useConfig.js');
require('../_chunks/dep-5d7e2375.js');
require('../_chunks/dep-94a7dc2d.js');
require('dayjs');
require('../_chunks/dep-92e23f17.js');
require('../_chunks/dep-0ff616fe.js');
require('../_chunks/dep-5f52cd42.js');
require('../_chunks/dep-b3b464e8.js');
require('../_chunks/dep-0813861e.js');
require('../_chunks/dep-f57bcb19.js');
require('../_chunks/dep-dc4bbc14.js');
require('../_chunks/dep-05f89f0d.js');
require('../_chunks/dep-87589faa.js');
require('../_chunks/dep-e27ea667.js');
require('../_chunks/dep-165ca38a.js');
require('../_chunks/dep-32412d92.js');
require('../_chunks/dep-a8a3d718.js');
require('../_chunks/dep-54e566d9.js');
require('../_chunks/dep-591a72de.js');
require('../_chunks/dep-a55e8a08.js');
require('../_chunks/dep-8adeee89.js');
require('../_chunks/dep-4d2ef282.js');
require('../_chunks/dep-929933ce.js');
require('../_chunks/dep-6b1f0ef8.js');
require('@babel/runtime/helpers/createClass');
require('@babel/runtime/helpers/classCallCheck');
require('../_chunks/dep-e86abdd2.js');
require('../_chunks/dep-80a478d7.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _defineProperty__default = /*#__PURE__*/_interopDefaultLegacy(_defineProperty);

var traversalTabNavs = function traversalTabNavs(tabNavs, fn) {
  Array.from(tabNavs).filter(function (node) {
    return node instanceof HTMLDivElement && !!node.getAttribute("draggable");
  }).forEach(fn);
};
var handleTarget = function handleTarget(target, tabNavs) {
  var resultTarget;
  traversalTabNavs(tabNavs, function (itemNode) {
    if (target instanceof Node && itemNode.contains(target)) {
      resultTarget = itemNode;
    }
  });
  return resultTarget;
};
function useDragSort(props) {
  var navsWrap = null;
  var dragged;
  var enterTargets = [];
  var dragstart = function dragstart(event) {
    var target = event.target;
    dragged = target;
    target.style.opacity = "0.5";
    var dt = event.dataTransfer;
    if (dt) {
      dt.effectAllowed = "copy";
      try {
        dt.setData("text/plain", "");
      } catch (e) {}
    }
  };
  var dragend = function dragend(event) {
    event.target.style.opacity = "";
  };
  var dragover = function dragover(event) {
    if (!navsWrap) return;
    var target = handleTarget(event.target, navsWrap.children);
    var dt = event.dataTransfer;
    if (dt) {
      dt.dropEffect = target !== null && target !== void 0 && target.draggable ? "copy" : "none";
    }
    if (target !== null && target !== void 0 && target.draggable) {
      event.preventDefault();
    }
  };
  var dragenter = function dragenter(event) {
    var target = handleTarget(event.target, navsWrap.children);
    if (target && target !== dragged && target.draggable) {
      var firstChild = target.firstChild;
      if (firstChild instanceof HTMLElement) {
        var newStyle = {
          outline: "1px dashed #0052d9"
        };
        Object.assign(firstChild.style, newStyle);
      }
      if (!enterTargets.includes(target)) {
        enterTargets.push(target);
      }
    }
  };
  var dragleave = function dragleave(event) {
    var target = event.target;
    for (var _i = 0, _enterTargets = enterTargets; _i < _enterTargets.length; _i++) {
      var enterTarget = _enterTargets[_i];
      if (!enterTarget.contains(target)) {
        enterTarget.firstChild.style.outline = "none";
      }
    }
  };
  var drop = function drop(event) {
    event.preventDefault();
    traversalTabNavs(navsWrap.children, function (tabNav) {
      var firstChild = tabNav.firstChild;
      if (firstChild) {
        firstChild.style.outline = "none";
      }
    });
    var target = handleTarget(event.target, navsWrap.children);
    if (target && target.parentNode !== dragged && target.draggable) {
      var _props$onDragSort;
      var dragIndex = [].indexOf.call(navsWrap.children, dragged);
      var targetIndex = [].indexOf.call(navsWrap.children, target);
      if (targetIndex > dragIndex) {
        target = navsWrap.children[targetIndex + 1];
      }
      var currentIndex = props.theme === "card" ? dragIndex : dragIndex - 1;
      var endIndex = props.theme === "card" ? targetIndex : targetIndex - 1;
      (_props$onDragSort = props.onDragSort) === null || _props$onDragSort === void 0 || _props$onDragSort.call(props, {
        currentIndex: currentIndex,
        current: props.panels[currentIndex].value,
        targetIndex: endIndex,
        target: props.panels[endIndex].value
      });
    }
  };
  function setNavsWrap(val) {
    navsWrap = val;
    navsWrap.addEventListener("dragstart", dragstart, false);
    navsWrap.addEventListener("dragend", dragend, false);
    navsWrap.addEventListener("dragover", dragover, false);
    navsWrap.addEventListener("dragenter", dragenter, false);
    document.addEventListener("dragleave", dragleave, false);
    document.addEventListener("mousemove", dragleave, false);
    navsWrap.addEventListener("drop", drop, false);
  }
  Vue.onUnmounted(function () {
    if (navsWrap) {
      navsWrap.removeEventListener("dragstart", dragstart);
      navsWrap.removeEventListener("dragend", dragend);
      navsWrap.removeEventListener("dragover", dragover);
      navsWrap.removeEventListener("dragenter", dragenter);
      document.removeEventListener("dragleave", dragleave);
      document.removeEventListener("mousemove", dragleave);
      navsWrap.removeEventListener("drop", drop);
    }
  });
  return {
    setNavsWrap: setNavsWrap
  };
}

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
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty__default["default"](e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var TTabNav = Vue.defineComponent({
  name: "TTabNav",
  resizeObserver: null,
  props: {
    theme: tabs_props["default"].theme,
    panels: {
      type: Array,
      "default": function _default() {
        return [];
      }
    },
    action: Array,
    value: tabs_props["default"].value,
    placement: tabs_props["default"].placement,
    scrollPosition: tabs_props["default"].scrollPosition,
    size: tabs_props["default"].size,
    disabled: tabs_props["default"].disabled,
    addable: tabs_props["default"].addable,
    onChange: tabs_props["default"].onChange,
    onAdd: tabs_props["default"].onAdd,
    onRemove: tabs_props["default"].onRemove,
    dragSort: tabs_props["default"].dragSort,
    onDragSort: tabs_props["default"].onDragSort
  },
  setup: function setup(props) {
    var componentName = index.usePrefixClass("tabs");
    var _useGlobalIcon = index$1.useGlobalIcon({
        ChevronLeftIcon: tdesignIconsVueNext.ChevronLeftIcon,
        ChevronRightIcon: tdesignIconsVueNext.ChevronRightIcon,
        AddIcon: tdesignIconsVueNext.AddIcon
      }),
      ChevronLeftIcon = _useGlobalIcon.ChevronLeftIcon,
      ChevronRightIcon = _useGlobalIcon.ChevronRightIcon,
      AddIcon = _useGlobalIcon.AddIcon;
    var classPrefix = index.usePrefixClass();
    var _useCommonClassName = index$2.useCommonClassName(),
      SIZE = _useCommonClassName.SIZE;
    var scrollLeft = Vue.ref(0);
    var navsContainerRef = Vue.ref();
    var navsWrapRef = Vue.ref();
    var leftOperationsRef = Vue.ref();
    var rightOperationsRef = Vue.ref();
    var toRightBtnRef = Vue.ref();
    var activeTabRef = Vue.ref();
    var maxScrollLeft = Vue.ref(0);
    var showAction = Vue.computed(function () {
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
    var isVerticalPlacement = Vue.computed(function () {
      return ["left", "right"].includes(props.placement.toLowerCase());
    });
    var canToLeft = Vue.computed(function () {
      return scrollLeft.value > 1;
    });
    var canToRight = Vue.computed(function () {
      return scrollLeft.value < maxScrollLeft.value - 1;
    });
    var wrapTransformStyle = Vue.computed(function () {
      if (isVerticalPlacement.value) return {};
      return {
        transform: "translate3d(".concat(-scrollLeft.value, "px, 0, 0)")
      };
    });
    var navsContainerStyle = Vue.computed(function () {
      return props.addable ? {
        "min-height": "48px"
      } : null;
    });
    var iconBaseClass = Vue.computed(function () {
      return _defineProperty__default["default"](_defineProperty__default["default"](_defineProperty__default["default"]({}, "".concat(componentName.value, "__btn"), true), SIZE.value.medium, props.size === "medium"), SIZE.value.large, props.size === "large");
    });
    var leftIconClass = Vue.computed(function () {
      return _objectSpread(_defineProperty__default["default"]({}, "".concat(componentName.value, "__btn--left"), true), iconBaseClass.value);
    });
    var rightIconClass = Vue.computed(function () {
      return _objectSpread(_defineProperty__default["default"]({}, "".concat(componentName.value, "__btn--right"), true), iconBaseClass.value);
    });
    var addIconClass = Vue.computed(function () {
      return _objectSpread(_defineProperty__default["default"]({}, "".concat(componentName.value, "__add-btn"), true), iconBaseClass.value);
    });
    var navContainerClass = Vue.computed(function () {
      return _defineProperty__default["default"](_defineProperty__default["default"](_defineProperty__default["default"](_defineProperty__default["default"]({}, "".concat(componentName.value, "__nav-container"), true), "".concat(componentName.value, "__nav--card"), props.theme === "card"), "".concat(classPrefix.value, "-is-").concat(props.placement), true), "".concat(classPrefix.value, "-is-addable"), props.addable);
    });
    var navScrollContainerClass = Vue.computed(function () {
      return _defineProperty__default["default"](_defineProperty__default["default"]({}, "".concat(componentName.value, "__nav-scroll"), true), "".concat(classPrefix.value, "-is-scrollable"), canToLeft.value || canToRight.value);
    });
    var navsWrapClass = Vue.computed(function () {
      return ["".concat(componentName.value, "__nav-wrap"), "".concat(classPrefix.value, "-is-smooth"), _defineProperty__default["default"]({}, "".concat(classPrefix.value, "-is-vertical"), isVerticalPlacement.value)];
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
      Vue.nextTick(function () {
        maxScrollLeft.value = calcMaxOffset(getRefs());
      });
    };
    Vue.watch([function () {
      return props.placement;
    }, function () {
      return props.panels;
    }], getMaxScrollLeft);
    Vue.watch([function () {
      return props.scrollPosition;
    }], handleActiveTabScroll);
    index$3.useResize(debounce.debounce(getMaxScrollLeft), navsContainerRef.value);
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
    Vue.onMounted(function () {
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
        } else if (isFunction.isFunction(panel.label)) {
          label = panel.label(Vue.h);
        } else {
          label = panel.label || "\u9009\u9879\u5361".concat(index + 1);
        }
        var draggable = props.dragSort;
        if (draggable && panel.draggable === false) {
          draggable = panel.draggable;
        }
        return Vue.createVNode(tabs_tabNavItem["default"], {
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
      return [Vue.createVNode("div", {
        "ref": leftOperationsRef,
        "class": ["".concat(componentName.value, "__operations"), "".concat(componentName.value, "__operations--left")]
      }, [Vue.createVNode(Vue.Transition, {
        "name": "fade",
        "mode": "out-in",
        "appear": true
      }, {
        "default": function _default() {
          return [canToLeft.value ? Vue.createVNode("div", {
            "class": leftIconClass.value,
            "onClick": function onClick() {
              return handleScroll("prev");
            }
          }, [Vue.createVNode(ChevronLeftIcon, null, null)]) : null];
        }
      })]), Vue.createVNode("div", {
        "ref": rightOperationsRef,
        "class": ["".concat(componentName.value, "__operations"), "".concat(componentName.value, "__operations--right")]
      }, [Vue.createVNode(Vue.Transition, {
        "name": "fade",
        "mode": "out-in",
        "appear": true
      }, {
        "default": function _default() {
          return [canToRight.value ? Vue.createVNode("div", {
            "ref": toRightBtnRef,
            "class": rightIconClass.value,
            "onClick": function onClick() {
              return handleScroll("next");
            }
          }, [Vue.createVNode(ChevronRightIcon, null, null)]) : null];
        }
      }), props.addable ? Vue.createVNode("div", {
        "class": addIconClass.value,
        "onClick": handleAddTab
      }, [Vue.createVNode(AddIcon, null, null)]) : null, showAction.value && props.action])];
    };
    var renderNavs = function renderNavs() {
      var navContent = renderNavsContent();
      return Vue.createVNode("div", {
        "class": navContainerClass.value
      }, [Vue.createVNode("div", {
        "class": navScrollContainerClass.value,
        "onWheel": handleWheel
      }, [Vue.createVNode("div", {
        "ref": navsWrapRef,
        "class": navsWrapClass.value,
        "style": wrapTransformStyle.value
      }, [props.theme !== "card" && Vue.createVNode(tabs_tabNavBar["default"], {
        "placement": props.placement,
        "value": props.value,
        "navs": navContent
      }, null), navContent])])]);
    };
    return function () {
      return Vue.createVNode("div", {
        "ref": navsContainerRef,
        "class": ["".concat(componentName.value, "__nav")],
        "style": navsContainerStyle.value
      }, [renderArrows(), renderNavs()]);
    };
  }
});

exports["default"] = TTabNav;
//# sourceMappingURL=tab-nav.js.map
