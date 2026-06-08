/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { defineComponent, ref, computed, toRefs, watchEffect, provide, watch, onMounted, createVNode } from 'vue';
import _toConsumableArray from '@babel/runtime/helpers/toConsumableArray';
import _slicedToArray from '@babel/runtime/helpers/slicedToArray';
import _defineProperty from '@babel/runtime/helpers/defineProperty';
import props from './props.js';
import { isArray, isNumber } from 'lodash-es';
import '@babel/runtime/helpers/typeof';
import '../_chunks/dep-fe23be6e.js';
import { u as useTNodeJSX, a as useContent } from '../_chunks/dep-2accc95a.js';
import { u as usePrefixClass } from '../_chunks/dep-9e6d8a78.js';
import { u as useDefaultValue } from '../_chunks/dep-aa34a263.js';
import { l as log } from '../_chunks/dep-8295e674.js';
import '../_chunks/dep-880d05b9.js';
import { u as useVModel } from '../_chunks/dep-51e5a827.js';
import { VMenu } from './utils/v-menu.js';
import '../_chunks/dep-81b01cae.js';
import '../_chunks/dep-16bcfabc.js';
import '../_chunks/dep-fb805f69.js';
import '../config-provider/hooks/useConfig.js';
import '../config-provider/utils/context.js';
import '../_chunks/dep-938cd955.js';
import 'dayjs';
import '@babel/runtime/helpers/createClass';
import '@babel/runtime/helpers/classCallCheck';

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var _Menu = defineComponent({
  name: "TMenu",
  props: _objectSpread(_objectSpread({}, props), {}, {
    onCollapsed: Function
  }),
  setup: function setup(props2, ctx) {
    var classPrefix = usePrefixClass();
    var renderTNodeJSX = useTNodeJSX();
    var renderContent = useContent();
    var mode = ref(props2.expandType);
    var theme = computed(function () {
      return props2.theme;
    });
    var isMutex = computed(function () {
      return props2.expandMutex;
    });
    var collapsed = computed(function () {
      return props2.collapsed;
    });
    var menuClass = computed(function () {
      return ["".concat(classPrefix.value, "-default-menu"), "".concat(classPrefix.value, "-menu--").concat(props2.theme), _defineProperty({}, "".concat(classPrefix.value, "-is-collapsed"), props2.collapsed)];
    });
    var innerClasses = computed(function () {
      return ["".concat(classPrefix.value, "-menu"), "".concat(classPrefix.value, "-menu--scroll")];
    });
    var expandWidth = computed(function () {
      var width = props2.width;
      var format = function format(val) {
        return isNumber(val) ? "".concat(val, "px") : val;
      };
      if (isArray(width)) return width.map(function (item) {
        return format(item);
      });
      return [format(width), "64px"];
    });
    var styles = computed(function () {
      return {
        height: "100%",
        width: props2.collapsed ? expandWidth.value[1] : expandWidth.value[0]
      };
    });
    var _toRefs = toRefs(props2),
      value = _toRefs.value,
      modelValue = _toRefs.modelValue,
      expanded = _toRefs.expanded;
    var _useVModel = useVModel(value, modelValue, props2.defaultValue, props2.onChange),
      _useVModel2 = _slicedToArray(_useVModel, 2),
      activeValue = _useVModel2[0],
      setActiveValue = _useVModel2[1];
    var _useDefaultValue = useDefaultValue(expanded, props2.defaultExpanded, props2.onExpand, "expanded"),
      _useDefaultValue2 = _slicedToArray(_useDefaultValue, 2),
      expandValues = _useDefaultValue2[0],
      setExpand = _useDefaultValue2[1];
    var activeValues = ref([]);
    watchEffect(function () {
      var _props2$onCollapsed;
      mode.value = props2.collapsed ? "popup" : props2.expandType;
      (_props2$onCollapsed = props2.onCollapsed) === null || _props2$onCollapsed === void 0 || _props2$onCollapsed.call(props2, {
        collapsed: props2.collapsed
      });
    });
    var vMenu = new VMenu({
      isMutex: isMutex,
      expandValues: expandValues.value ? _toConsumableArray(expandValues.value) : []
    });
    provide("TdMenu", {
      activeValue: activeValue,
      activeValues: activeValues,
      expandValues: expandValues,
      mode: mode,
      theme: theme,
      isHead: false,
      vMenu: vMenu,
      collapsed: collapsed,
      select: function select(value2) {
        if (value2 !== activeValue.value) {
          setActiveValue(value2);
        }
      },
      open: function open(value2, type) {
        if (mode.value === "normal") {
          setExpand(vMenu.expand(value2));
        } else if (type === "add") {
          if (expandValues.value.indexOf(value2) === -1) {
            setExpand([].concat(_toConsumableArray(expandValues.value), [value2]));
          }
        } else if (type === "remove") {
          var index = expandValues.value.indexOf(value2);
          var tmp = _toConsumableArray(expandValues.value);
          tmp.splice(index, 1);
          setExpand(tmp);
        }
      }
    });
    watch(function () {
      return props2.expanded;
    }, function (value2) {
      vMenu.expandValues = new Set(value2);
    });
    watch(function () {
      return props2.collapsed;
    }, function (newValue, oldValue) {
      if (!newValue && oldValue) {
        setExpand(_toConsumableArray(vMenu.expandValues));
      }
    });
    watch(activeValue, function (value2) {
      activeValues.value = vMenu.select(value2);
    });
    watchEffect(function () {
      if (ctx.slots.options) {
        log.warnOnce("TMenu", "`options` slot is going to be deprecated, please use `operations` for slot instead.");
      }
    });
    onMounted(function () {
      activeValues.value = vMenu.select(activeValue.value);
    });
    return function () {
      var operations = renderContent("operations", "options");
      var logo = renderTNodeJSX("logo");
      return createVNode("div", {
        "class": menuClass.value,
        "style": styles.value
      }, [createVNode("div", {
        "class": "".concat(classPrefix.value, "-default-menu__inner")
      }, [logo && createVNode("div", {
        "class": "".concat(classPrefix.value, "-menu__logo")
      }, [logo]), createVNode("ul", {
        "class": innerClasses.value
      }, [renderContent("default", "content")]), operations && createVNode("div", {
        "class": "".concat(classPrefix.value, "-menu__operations")
      }, [operations])])]);
    };
  }
});

export { _Menu as default };
//# sourceMappingURL=menu.js.map
