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
      "d": "M16.0035 1V3.00396L14 3.00424V1.00027L16.0035 1ZM10.0524 2.63458L11.4699 4.05185L10.0529 5.4685L8.63643 4.05168L10.0524 2.63458ZM19.9515 2.63476L21.3674 4.05132L19.9516 5.46846L18.5337 4.05202L19.9515 2.63476ZM10.9588 6.05557C11.8672 4.81094 13.3383 4.00012 15 4.00012C17.7614 4.00012 20 6.2387 20 9.00012C20 10.0022 19.7046 10.936 19.1971 11.7183C20.2982 12.6885 21 14.0925 21 15.6668C21 18.6476 18.5017 21.0001 15.5 21.0001H5.6C3.0954 21.0001 1 19.0356 1 16.5335C1 14.7036 2.12452 13.1582 3.70565 12.4626C3.70189 12.3755 3.7 12.288 3.7 12.2001C3.7 8.74073 6.60128 6.00013 10.1 6.00013C10.3908 6.00013 10.6775 6.01898 10.9588 6.05557ZM10.1 8.00013C7.63404 8.00013 5.7 9.91577 5.7 12.2001C5.7 12.4623 5.72505 12.718 5.77273 12.9655L5.95683 13.921L5.00676 14.1311C3.83155 14.3911 3 15.3905 3 16.5335C3 17.8605 4.12815 19.0001 5.6 19.0001H15.5C17.4689 19.0001 19 17.4725 19 15.6668C19 14.4514 18.3143 13.3703 17.259 12.7844C16.7444 12.4986 16.1446 12.3335 15.5 12.3335C15.4803 12.3335 15.4607 12.3336 15.4411 12.3339L14.5868 12.3473L14.4403 11.5056C14.158 9.88428 12.8892 8.54957 11.2061 8.13376C10.8538 8.04674 10.4834 8.00013 10.1 8.00013ZM21 8.00004L23.0039 8.00028V10.0037H21V8.00004Z"
    }
  }]
};
var cloudySunnyFilled = defineComponent({
  name: "CloudySunnyFilledIcon",
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
    var finalCls = computed(() => ["t-icon", "t-icon-cloudy-sunny-filled", className.value]);
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

export default cloudySunnyFilled;
//# sourceMappingURL=cloudy-sunny-filled.js.map
