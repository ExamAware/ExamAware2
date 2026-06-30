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
      "d": "M11.6888 16.3932C11.5575 16.1688 11.433 15.9214 11.3215 15.6767C11.5625 15.5415 11.7901 15.3731 12.0009 15.1741C12.2117 15.3731 12.4393 15.5415 12.6803 15.6767C12.5688 15.9214 12.4443 16.1688 12.3129 16.3932C12.1993 16.5872 12.0934 16.7416 12.0009 16.8552C11.9084 16.7416 11.8025 16.5872 11.6888 16.3932Z"
    }
  }, {
    "tag": "path",
    "attrs": {
      "fill": "props.filledColor",
      "d": "M5.73855 1L7.77322 2.97293C9.07653 2.45921 10.5049 2.17647 12 2.17647C13.4563 2.17647 14.8492 2.44471 16.125 2.93337L17.6204 1H23V13H22.9916C22.7627 18.611 17.8742 23 12 23C6.1258 23 1.23734 18.611 1.00838 13H1V1H5.73855ZM5.88772 3.93049L4.92812 3H3V6.60011C3.78224 5.54914 4.76333 4.64321 5.88772 3.93049ZM21 3H18.6019L17.9569 3.83381C19.1464 4.56056 20.1819 5.50101 21 6.60011V3ZM9 12V9H7V12H9ZM17 12V9H15V12H17ZM12.8953 13.0528L12.0009 11.2639L11.1065 13.0528C10.7281 13.8096 10.2496 14.0383 9.91785 14.066C9.70198 14.0839 9.47133 14.028 9.24985 13.8774L8.42295 13.315L7.29825 14.9688L8.12515 15.5312C8.48154 15.7736 8.87721 15.9396 9.29144 16.0179C9.46978 16.4569 9.69992 16.9545 9.96294 17.4037C10.1624 17.7443 10.4061 18.1014 10.6908 18.3859C10.9504 18.6455 11.3985 19 12.0009 19C12.6033 19 13.0514 18.6455 13.311 18.3859C13.5957 18.1014 13.8394 17.7443 14.0388 17.4037C14.3019 16.9545 14.532 16.4569 14.7104 16.0179C15.1246 15.9396 15.5203 15.7736 15.8766 15.5312L16.7035 14.9688L15.5788 13.315L14.7519 13.8774C14.5305 14.028 14.2998 14.0839 14.0839 14.066C13.7522 14.0383 13.2737 13.8096 12.8953 13.0528Z"
    }
  }]
};
var dogeFilled = defineComponent({
  name: "DogeFilledIcon",
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
    var finalCls = computed(() => ["t-icon", "t-icon-doge-filled", className.value]);
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

export default dogeFilled;
//# sourceMappingURL=doge-filled.js.map
