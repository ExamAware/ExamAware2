/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Vue = require('vue');
var _typeof = require('@babel/runtime/helpers/typeof');
var tdesignIconsVueNext = require('tdesign-icons-vue-next');
var input_index = require('../../input/index.js');
require('@babel/runtime/helpers/toConsumableArray');
require('../../_chunks/dep-953a77eb.js');
var index = require('../../_chunks/dep-ecaaae91.js');
var index$1 = require('../../_chunks/dep-31c76dc6.js');
require('@babel/runtime/helpers/slicedToArray');
require('../../_chunks/dep-cc66acf1.js');
require('@babel/runtime/helpers/defineProperty');
var index$2 = require('../../_chunks/dep-bf113ca4.js');
require('../../input/input.js');
require('@babel/runtime/helpers/objectWithoutProperties');
require('../../input/props.js');
require('../../_chunks/dep-47c460dd.js');
require('../../_chunks/dep-06276759.js');
require('../../_chunks/dep-48f60c78.js');
require('../../_chunks/dep-b3b464e8.js');
require('../../_chunks/dep-0813861e.js');
require('../../_chunks/dep-a55e8a08.js');
require('../../_chunks/dep-87589faa.js');
require('../../_chunks/dep-05f89f0d.js');
require('../../_chunks/dep-4fa46641.js');
require('../../_chunks/dep-422dd97f.js');
require('../../_chunks/dep-71fa6bfc.js');
require('../../_chunks/dep-80a478d7.js');
require('../../_chunks/dep-427dabac.js');
require('../../_chunks/dep-72c4cc44.js');
require('../../_chunks/dep-ee355a9a.js');
require('../../_chunks/dep-23f77e26.js');
require('../../_chunks/dep-8382953f.js');
require('../../config-provider/hooks/useConfig.js');
require('../../_chunks/dep-5d7e2375.js');
require('../../_chunks/dep-94a7dc2d.js');
require('../../_chunks/dep-8abdfb41.js');
require('dayjs');
require('../../_chunks/dep-92e23f17.js');
require('../../_chunks/dep-0ff616fe.js');
require('../../_chunks/dep-5f52cd42.js');
require('../../_chunks/dep-f57bcb19.js');
require('../../_chunks/dep-dc4bbc14.js');
require('../../_chunks/dep-e27ea667.js');
require('../../_chunks/dep-165ca38a.js');
require('../../_chunks/dep-32412d92.js');
require('../../_chunks/dep-a8a3d718.js');
require('../../_chunks/dep-54e566d9.js');
require('../../_chunks/dep-591a72de.js');
require('../../_chunks/dep-8adeee89.js');
require('../../_chunks/dep-4d2ef282.js');
require('../../_chunks/dep-929933ce.js');
require('../../_chunks/dep-6b1f0ef8.js');
require('../../_chunks/dep-874d2900.js');
require('../../_chunks/dep-d45110a6.js');
require('../../_chunks/dep-bc848944.js');
require('../../input/hooks/useInput.js');
require('../../form/consts/index.js');
require('@babel/runtime/helpers/createClass');
require('@babel/runtime/helpers/classCallCheck');
require('../../_chunks/dep-e8ff2c13.js');
require('../../input/hooks/useLengthLimit.js');
require('../../_chunks/dep-733b2b51.js');
require('../../_chunks/dep-55c70201.js');
require('../../_chunks/dep-fd5a369e.js');
require('../../_chunks/dep-4ccaead1.js');
require('../../_chunks/dep-990979bb.js');
require('../../input/hooks/useInputEventHandler.js');
require('../../input/hooks/useInputWidth.js');
require('../../_chunks/dep-b6058ff9.js');
require('../../input/input-group.js');
require('../../input/input-group-props.js');
require('../../_chunks/dep-d62a674d.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _typeof__default = /*#__PURE__*/_interopDefaultLegacy(_typeof);

var Search = Vue.defineComponent({
  name: "TTransferSearch",
  props: {
    value: {
      type: String,
      "default": ""
    },
    search: {
      type: [Boolean, Object],
      "default": false
    },
    placeholder: {
      type: String,
      "default": ""
    },
    onChange: Function
  },
  setup: function setup(props) {
    var classPrefix = index.usePrefixClass();
    var _useGlobalIcon = index$1.useGlobalIcon({
        SearchIcon: tdesignIconsVueNext.SearchIcon
      }),
      SearchIcon = _useGlobalIcon.SearchIcon;
    var handleChange = function handleChange(value, changeCtx) {
      var _props$onChange;
      var e = changeCtx.e,
        trigger = changeCtx.trigger;
      (_props$onChange = props.onChange) === null || _props$onChange === void 0 || _props$onChange.call(props, {
        value: value,
        e: e,
        trigger: trigger
      });
    };
    var inputProps = _typeof__default["default"](props.search) === "object" ? props.search : {
      clearable: true
    };
    var inputEvents = index$2.useEventForward(inputProps, {
      onChange: handleChange
    });
    return function () {
      return Vue.createVNode("div", {
        "class": "".concat(classPrefix.value, "-transfer__search-wrapper")
      }, [Vue.createVNode(input_index.Input, Vue.mergeProps({
        "defaultValue": props.value,
        "placeholder": props.placeholder
      }, inputEvents.value), {
        "default": function _default() {
          return [Vue.createVNode(SearchIcon, {
            "slot": "suffix-icon"
          }, null)];
        }
      })]);
    };
  }
});

exports["default"] = Search;
//# sourceMappingURL=transfer-search.js.map
