/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Vue = require('vue');
var _defineProperty = require('@babel/runtime/helpers/defineProperty');
var upload_hooks_useDrag = require('../hooks/useDrag.js');
var upload_consts_index = require('../consts/index.js');
require('@babel/runtime/helpers/toConsumableArray');
require('@babel/runtime/helpers/typeof');
require('../../_chunks/dep-953a77eb.js');
var index = require('../../_chunks/dep-47c460dd.js');
require('../../config-provider/hooks/useConfig.js');
require('@babel/runtime/helpers/slicedToArray');
require('../../_chunks/dep-cc66acf1.js');
require('../../_chunks/dep-e7678f7a.js');
require('../../_chunks/dep-733b2b51.js');
require('../../_chunks/dep-8abdfb41.js');
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
require('../../_chunks/dep-5d7e2375.js');
require('../../_chunks/dep-94a7dc2d.js');
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
require('@babel/runtime/helpers/createClass');
require('@babel/runtime/helpers/classCallCheck');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _defineProperty__default = /*#__PURE__*/_interopDefaultLegacy(_defineProperty);

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty__default["default"](e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var CustomFile = Vue.defineComponent({
  name: "UploadCustomFile",
  props: _objectSpread(_objectSpread({}, upload_consts_index.commonProps), {}, {
    dragEvents: Object,
    draggable: Boolean,
    dragContent: Function,
    trigger: Function,
    triggerUpload: Function,
    childrenNode: [String, Function]
  }),
  setup: function setup(props, _ref) {
    var slots = _ref.slots;
    var _toRefs = Vue.toRefs(props),
      classPrefix = _toRefs.classPrefix,
      displayFiles = _toRefs.displayFiles,
      accept = _toRefs.accept;
    var drag = upload_hooks_useDrag["default"](props.dragEvents, accept);
    var dragActive = drag.dragActive;
    var renderContent = index.useContent();
    var renderDragContent = function renderDragContent() {
      var _props$childrenNode;
      var params = {
        dragActive: dragActive.value || false,
        files: displayFiles.value
      };
      return Vue.createVNode("div", {
        "class": "".concat(classPrefix.value, "-upload__dragger ").concat(classPrefix.value, "-upload__dragger-center"),
        "onDrop": drag.handleDrop,
        "onDragenter": drag.handleDragenter,
        "onDragover": drag.handleDragover,
        "onDragleave": drag.handleDragleave,
        "onClick": props.triggerUpload
      }, [Vue.createVNode("div", {
        "class": "".concat(classPrefix.value, "-upload__trigger")
      }, [renderContent("dragContent", "trigger", {
        params: params
      }) || ((_props$childrenNode = props.childrenNode) === null || _props$childrenNode === void 0 ? void 0 : _props$childrenNode.call(props, params))])]);
    };
    return function () {
      var _props$childrenNode2, _slots$default;
      return Vue.createVNode(Vue.Fragment, null, [props.draggable ? renderDragContent() : Vue.createVNode("div", {
        "class": "".concat(classPrefix.value, "-upload__trigger"),
        "onClick": props.triggerUpload
      }, [((_props$childrenNode2 = props.childrenNode) === null || _props$childrenNode2 === void 0 ? void 0 : _props$childrenNode2.call(props, {
        files: displayFiles.value
      })) || ((_slots$default = slots["default"]) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots))])]);
    };
  }
});

exports["default"] = CustomFile;
//# sourceMappingURL=custom-file.js.map
