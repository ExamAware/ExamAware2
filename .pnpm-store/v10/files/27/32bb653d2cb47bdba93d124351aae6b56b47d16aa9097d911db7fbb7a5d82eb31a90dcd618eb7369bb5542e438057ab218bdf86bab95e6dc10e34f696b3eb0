/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { defineComponent, toRefs, createVNode, Fragment } from 'vue';
import _defineProperty from '@babel/runtime/helpers/defineProperty';
import useDrag from '../hooks/useDrag.js';
import { commonProps } from '../consts/index.js';
import 'lodash-es';
import '@babel/runtime/helpers/toConsumableArray';
import '@babel/runtime/helpers/typeof';
import '../../_chunks/dep-fe23be6e.js';
import { a as useContent } from '../../_chunks/dep-2accc95a.js';
import '../../config-provider/hooks/useConfig.js';
import '@babel/runtime/helpers/slicedToArray';
import '../../_chunks/dep-880d05b9.js';
import '../../_chunks/dep-7d14e543.js';
import '../../_chunks/dep-8295e674.js';
import '../../_chunks/dep-81b01cae.js';
import '../../_chunks/dep-16bcfabc.js';
import '../../_chunks/dep-fb805f69.js';
import '../../config-provider/utils/context.js';
import '../../_chunks/dep-938cd955.js';
import 'dayjs';
import '@babel/runtime/helpers/createClass';
import '@babel/runtime/helpers/classCallCheck';

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var CustomFile = defineComponent({
  name: "UploadCustomFile",
  props: _objectSpread(_objectSpread({}, commonProps), {}, {
    dragEvents: Object,
    draggable: Boolean,
    dragContent: Function,
    trigger: Function,
    triggerUpload: Function,
    childrenNode: [String, Function]
  }),
  setup: function setup(props, _ref) {
    var slots = _ref.slots;
    var _toRefs = toRefs(props),
      classPrefix = _toRefs.classPrefix,
      displayFiles = _toRefs.displayFiles,
      accept = _toRefs.accept;
    var drag = useDrag(props.dragEvents, accept);
    var dragActive = drag.dragActive;
    var renderContent = useContent();
    var renderDragContent = function renderDragContent() {
      var _props$childrenNode;
      var params = {
        dragActive: dragActive.value || false,
        files: displayFiles.value
      };
      return createVNode("div", {
        "class": "".concat(classPrefix.value, "-upload__dragger ").concat(classPrefix.value, "-upload__dragger-center"),
        "onDrop": drag.handleDrop,
        "onDragenter": drag.handleDragenter,
        "onDragover": drag.handleDragover,
        "onDragleave": drag.handleDragleave,
        "onClick": props.triggerUpload
      }, [createVNode("div", {
        "class": "".concat(classPrefix.value, "-upload__trigger")
      }, [renderContent("dragContent", "trigger", {
        params: params
      }) || ((_props$childrenNode = props.childrenNode) === null || _props$childrenNode === void 0 ? void 0 : _props$childrenNode.call(props, params))])]);
    };
    return function () {
      var _props$childrenNode2, _slots$default;
      return createVNode(Fragment, null, [props.draggable ? renderDragContent() : createVNode("div", {
        "class": "".concat(classPrefix.value, "-upload__trigger"),
        "onClick": props.triggerUpload
      }, [((_props$childrenNode2 = props.childrenNode) === null || _props$childrenNode2 === void 0 ? void 0 : _props$childrenNode2.call(props, {
        files: displayFiles.value
      })) || ((_slots$default = slots["default"]) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots))])]);
    };
  }
});

export { CustomFile as default };
//# sourceMappingURL=custom-file.js.map
