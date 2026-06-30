/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { getOutputValue } from './useInput.js';
import '@babel/runtime/helpers/slicedToArray';
import 'vue';
import '../../form/consts/index.js';
import 'lodash-es';
import '@babel/runtime/helpers/toConsumableArray';
import '@babel/runtime/helpers/typeof';
import '../../_chunks/dep-fe23be6e.js';
import '../../_chunks/dep-81b01cae.js';
import '../../_chunks/dep-9e6d8a78.js';
import '../../config-provider/hooks/useConfig.js';
import '../../config-provider/utils/context.js';
import '../../_chunks/dep-938cd955.js';
import 'dayjs';
import '../../_chunks/dep-880d05b9.js';
import '@babel/runtime/helpers/createClass';
import '@babel/runtime/helpers/classCallCheck';
import '@babel/runtime/helpers/defineProperty';
import '../../_chunks/dep-f7dd3c12.js';
import '../../_chunks/dep-47b13687.js';
import '../../_chunks/dep-51e5a827.js';
import './useLengthLimit.js';
import '../../_chunks/dep-8295e674.js';
import '../../_chunks/dep-80a99546.js';
import '@babel/runtime/helpers/objectWithoutProperties';

function useInputEventHandler(props, isHover, isComposition) {
  var handleKeydown = function handleKeydown(e) {
    if (props.disabled) return;
    var code = e.code;
    var tmpValue = getOutputValue(e.currentTarget.value, props.type);
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
    var tmpValue = getOutputValue(e.currentTarget.value, props.type);
    (_props$onKeyup = props.onKeyup) === null || _props$onKeyup === void 0 || _props$onKeyup.call(props, tmpValue, {
      e: e
    });
  };
  var handleKeypress = function handleKeypress(e) {
    var _props$onKeypress;
    if (props.disabled) return;
    var tmpValue = getOutputValue(e.currentTarget.value, props.type);
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

export { useInputEventHandler };
//# sourceMappingURL=useInputEventHandler.js.map
