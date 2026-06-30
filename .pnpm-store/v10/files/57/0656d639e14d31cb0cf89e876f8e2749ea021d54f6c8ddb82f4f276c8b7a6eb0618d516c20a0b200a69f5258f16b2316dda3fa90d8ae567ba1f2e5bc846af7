/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var input_hooks_useInput = require('./useInput.js');
require('@babel/runtime/helpers/slicedToArray');
require('vue');
require('../../form/consts/index.js');
require('@babel/runtime/helpers/toConsumableArray');
require('@babel/runtime/helpers/typeof');
require('../../_chunks/dep-953a77eb.js');
require('../../_chunks/dep-8abdfb41.js');
require('../../_chunks/dep-ecaaae91.js');
require('../../config-provider/hooks/useConfig.js');
require('../../_chunks/dep-5d7e2375.js');
require('../../_chunks/dep-94a7dc2d.js');
require('dayjs');
require('../../_chunks/dep-92e23f17.js');
require('../../_chunks/dep-0ff616fe.js');
require('../../_chunks/dep-5f52cd42.js');
require('../../_chunks/dep-48f60c78.js');
require('../../_chunks/dep-b3b464e8.js');
require('../../_chunks/dep-0813861e.js');
require('../../_chunks/dep-f57bcb19.js');
require('../../_chunks/dep-dc4bbc14.js');
require('../../_chunks/dep-05f89f0d.js');
require('../../_chunks/dep-87589faa.js');
require('../../_chunks/dep-e27ea667.js');
require('../../_chunks/dep-165ca38a.js');
require('../../_chunks/dep-32412d92.js');
require('../../_chunks/dep-a8a3d718.js');
require('../../_chunks/dep-54e566d9.js');
require('../../_chunks/dep-591a72de.js');
require('../../_chunks/dep-a55e8a08.js');
require('../../_chunks/dep-8adeee89.js');
require('../../_chunks/dep-4d2ef282.js');
require('../../_chunks/dep-929933ce.js');
require('../../_chunks/dep-6b1f0ef8.js');
require('../../_chunks/dep-cc66acf1.js');
require('@babel/runtime/helpers/createClass');
require('@babel/runtime/helpers/classCallCheck');
require('@babel/runtime/helpers/defineProperty');
require('../../_chunks/dep-874d2900.js');
require('../../_chunks/dep-d45110a6.js');
require('../../_chunks/dep-bc848944.js');
require('../../_chunks/dep-e8ff2c13.js');
require('../../_chunks/dep-23f77e26.js');
require('../../_chunks/dep-ee355a9a.js');
require('../../_chunks/dep-71fa6bfc.js');
require('../../_chunks/dep-80a478d7.js');
require('./useLengthLimit.js');
require('../../_chunks/dep-733b2b51.js');
require('../../_chunks/dep-55c70201.js');
require('@babel/runtime/helpers/objectWithoutProperties');
require('../../_chunks/dep-fd5a369e.js');
require('../../_chunks/dep-4ccaead1.js');
require('../../_chunks/dep-990979bb.js');

function useInputEventHandler(props, isHover, isComposition) {
  var handleKeydown = function handleKeydown(e) {
    if (props.disabled) return;
    var code = e.code;
    var tmpValue = input_hooks_useInput.getOutputValue(e.currentTarget.value, props.type);
    if (/enter/i.test(code) || /enter/i.test(e.key)) {
      if (!(isComposition !== null && isComposition !== void 0 && isComposition.value)) {
        var _props$onEnter;
        (_props$onEnter = props.onEnter) === null || _props$onEnter === void 0 || _props$onEnter.call(props, tmpValue, {
          e: e
        });
      }
    } else {
      var _props$onKeydown;
      (_props$onKeydown = props.onKeydown) === null || _props$onKeydown === void 0 || _props$onKeydown.call(props, tmpValue, {
        e: e
      });
    }
  };
  var handleKeyUp = function handleKeyUp(e) {
    var _props$onKeyup;
    if (props.disabled) return;
    var tmpValue = input_hooks_useInput.getOutputValue(e.currentTarget.value, props.type);
    (_props$onKeyup = props.onKeyup) === null || _props$onKeyup === void 0 || _props$onKeyup.call(props, tmpValue, {
      e: e
    });
  };
  var handleKeypress = function handleKeypress(e) {
    var _props$onKeypress;
    if (props.disabled) return;
    var tmpValue = input_hooks_useInput.getOutputValue(e.currentTarget.value, props.type);
    (_props$onKeypress = props.onKeypress) === null || _props$onKeypress === void 0 || _props$onKeypress.call(props, tmpValue, {
      e: e
    });
  };
  var onHandlePaste = function onHandlePaste(e) {
    var _props$onPaste;
    if (props.disabled) return;
    var clipData = e.clipboardData || window.clipboardData;
    (_props$onPaste = props.onPaste) === null || _props$onPaste === void 0 || _props$onPaste.call(props, {
      e: e,
      pasteValue: clipData === null || clipData === void 0 ? void 0 : clipData.getData("text/plain")
    });
  };
  var mouseEvent = function mouseEvent(v) {
    return isHover.value = v;
  };
  var onHandleMousewheel = function onHandleMousewheel(e) {
    var _props$onWheel;
    return (_props$onWheel = props.onWheel) === null || _props$onWheel === void 0 ? void 0 : _props$onWheel.call(props, {
      e: e
    });
  };
  var onInputMouseenter = function onInputMouseenter(e) {
    var _props$onMouseenter;
    mouseEvent(true);
    (_props$onMouseenter = props.onMouseenter) === null || _props$onMouseenter === void 0 || _props$onMouseenter.call(props, {
      e: e
    });
  };
  var onInputMouseleave = function onInputMouseleave(e) {
    var _props$onMouseleave;
    mouseEvent(false);
    (_props$onMouseleave = props.onMouseleave) === null || _props$onMouseleave === void 0 || _props$onMouseleave.call(props, {
      e: e
    });
  };
  return {
    isHover: isHover,
    handleKeydown: handleKeydown,
    handleKeyUp: handleKeyUp,
    handleKeypress: handleKeypress,
    onHandlePaste: onHandlePaste,
    onHandleMousewheel: onHandleMousewheel,
    onInputMouseenter: onInputMouseenter,
    onInputMouseleave: onInputMouseleave
  };
}

exports.useInputEventHandler = useInputEventHandler;
//# sourceMappingURL=useInputEventHandler.js.map
