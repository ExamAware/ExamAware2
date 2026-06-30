/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { getOutputValue } from './useInput.mjs';
import '../../_chunks/dep-9003fde5.mjs';
import '../../_chunks/dep-9f459d8b.mjs';
import 'vue';
import '../../form/consts/index.mjs';
import '../../_chunks/dep-7673347f.mjs';
import 'lodash-es';
import '../../_chunks/dep-00b4e06a.mjs';
import '../../_chunks/dep-257428bc.mjs';
import '../../_chunks/dep-51a43106.mjs';
import '../../_chunks/dep-fe644854.mjs';
import '../../config-provider/hooks/useConfig.mjs';
import '../../config-provider/utils/context.mjs';
import '../../_chunks/dep-a4c09318.mjs';
import '../../_chunks/dep-ffb85102.mjs';
import '../../_chunks/dep-ad588525.mjs';
import '../../_chunks/dep-22ebd6af.mjs';
import '../../_chunks/dep-cdd448ec.mjs';
import '../../_chunks/dep-97ecacde.mjs';
import '../../_chunks/dep-84fd47b3.mjs';
import '../../_chunks/dep-1dacc319.mjs';
import '../../_chunks/dep-d36c4a3f.mjs';
import './useLengthLimit.mjs';
import '../../_chunks/dep-6d2705e1.mjs';
import '../../_chunks/dep-0cde7579.mjs';
import '../../_chunks/dep-0dcc778a.mjs';

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
//# sourceMappingURL=useInputEventHandler.mjs.map
