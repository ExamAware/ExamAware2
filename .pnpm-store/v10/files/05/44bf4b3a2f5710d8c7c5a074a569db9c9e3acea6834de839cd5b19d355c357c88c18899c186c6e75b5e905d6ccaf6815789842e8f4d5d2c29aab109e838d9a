import { _ as _defineProperty } from '../_chunks/dep-2cb449a9.js';
import { defineComponent, computed } from 'vue';
import renderNode from '../utils/render-fn.js';
import useSizeProps from '../utils/use-size-props.js';
import '../style/css.js';
import '../utils/use-common-classname.js';
import '../utils/config-context.js';

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var element = {
  "tag": "svg",
  "attrs": {
    "fill": "none",
    "viewBox": "0 0 24 24",
    "width": "1em",
    "height": "1em"
  },
  "children": [{
    "tag": "path",
    "attrs": {
      "fill": "props.filledColor",
      "d": "M16 1H8V5H16V1Z"
    }
  }, {
    "tag": "path",
    "attrs": {
      "fill": "props.filledColor",
      "d": "M6 3H3V23H11.9113C11.7079 22.8166 11.5222 22.6316 11.354 22.4505C10.7999 21.8535 10.4014 21.2645 10.1397 20.8244C9.89066 20.4056 9.70573 19.9834 9.53684 19.5933L9.2793 18.9984L9.5361 18.4032C9.70649 18.0082 9.89318 17.5898 10.14 17.175C10.4017 16.735 10.8002 16.1462 11.3543 15.5495C12.4613 14.3573 14.3281 13.0015 16.9982 12.9998C18.6279 12.9987 19.9586 13.5031 21 14.1675V3H18V7H6V3Z"
    }
  }, {
    "tag": "path",
    "attrs": {
      "fill": "props.filledColor",
      "d": "M21.5483 16.5687C20.6184 15.5665 19.1211 14.4984 17.0012 14.4998C14.8821 14.5011 13.3854 15.5687 12.4555 16.5702C11.9902 17.0713 11.6529 17.5692 11.4311 17.9419C11.3196 18.1292 11.2358 18.2876 11.1784 18.4025C11.1158 18.5279 11.0612 18.6557 11.0132 18.768L10.9141 18.9996L11.0132 19.2313C11.0611 19.3436 11.1157 19.4715 11.1783 19.5969C11.2357 19.7119 11.3195 19.8703 11.431 20.0577C11.6527 20.4306 11.9901 20.9287 12.4554 21.43C13.3853 22.4318 14.8823 23.4996 17.0017 23.4998C19.1213 23.4999 20.6183 22.432 21.5482 21.4301C22.0135 20.9288 22.3509 20.4307 22.5726 20.0577C22.6841 19.8703 22.7679 19.7119 22.8253 19.5969C22.8879 19.4715 22.9424 19.3437 22.9904 19.2314L23.0894 18.9999L22.9901 18.7677C22.9423 18.6555 22.8878 18.5279 22.8254 18.4028C22.768 18.2877 22.6842 18.1292 22.5727 17.9417C22.351 17.5686 22.0136 17.0702 21.5483 16.5687ZM18.25 18V20H15.75V18H18.25Z"
    }
  }]
};
var taskVisibleFilled = defineComponent({
  name: "TaskVisibleFilledIcon",
  props: {
    size: {
      type: String
    },
    onClick: {
      type: Function
    },
    fillColor: {
      type: [Array, String]
    },
    strokeColor: {
      type: [Array, String]
    },
    strokeWidth: {
      type: Number
    }
  },
  setup(props, _ref) {
    var {
      attrs
    } = _ref;
    var propsSize = computed(() => props.size);
    var strokeColor1 = computed(() => {
      if (!props.strokeColor) return "currentColor";
      return Array.isArray(props.strokeColor) ? props.strokeColor[0] : props.strokeColor;
    });
    var strokeColor2 = computed(() => {
      var _props$strokeColor$;
      if (!props.strokeColor) return "currentColor";
      return Array.isArray(props.strokeColor) ? (_props$strokeColor$ = props.strokeColor[1]) !== null && _props$strokeColor$ !== void 0 ? _props$strokeColor$ : props.strokeColor[0] : props.strokeColor;
    });
    var fillColor1 = computed(() => {
      if (!props.fillColor) return "transparent";
      return Array.isArray(props.fillColor) ? props.fillColor[0] : props.fillColor;
    });
    var fillColor2 = computed(() => {
      var _props$fillColor$;
      if (!props.fillColor) return "transparent";
      return Array.isArray(props.fillColor) ? (_props$fillColor$ = props.fillColor[1]) !== null && _props$fillColor$ !== void 0 ? _props$fillColor$ : props.fillColor[0] : props.fillColor;
    });
    var filledColor = computed(() => {
      if (!props.fillColor) return "currentColor";
      return Array.isArray(props.fillColor) ? props.fillColor[0] : props.fillColor;
    });
    var {
      className,
      style
    } = useSizeProps(propsSize);
    var finalCls = computed(() => ["t-icon", "t-icon-task-visible-filled", className.value]);
    var finalStyle = computed(() => _objectSpread(_objectSpread({
      fill: "none"
    }, style.value), attrs.style));
    var finalProps = computed(() => ({
      class: finalCls.value,
      style: finalStyle.value,
      onClick: e => {
        var _props$onClick;
        return (_props$onClick = props.onClick) === null || _props$onClick === void 0 ? void 0 : _props$onClick.call(props, {
          e
        });
      },
      strokeColor1: strokeColor1.value,
      strokeColor2: strokeColor2.value,
      fillColor1: fillColor1.value,
      fillColor2: fillColor2.value,
      strokeWidth: props.strokeWidth || 2,
      filledColor: filledColor.value
    }));
    return () => renderNode(element, finalProps.value);
  }
});

export default taskVisibleFilled;
//# sourceMappingURL=task-visible-filled.js.map
