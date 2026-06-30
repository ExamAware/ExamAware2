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
      "d": "M11.6884 16.3932C11.5571 16.1688 11.4326 15.9214 11.3211 15.6767C11.5621 15.5415 11.7897 15.3731 12.0005 15.1742C12.2113 15.3731 12.4389 15.5415 12.6799 15.6767C12.5684 15.9214 12.4439 16.1688 12.3125 16.3932C12.1989 16.5872 12.093 16.7416 12.0005 16.8552C11.908 16.7416 11.8021 16.5872 11.6884 16.3932Z"
    }
  }, {
    "tag": "path",
    "attrs": {
      "fill": "props.filledColor",
      "d": "M12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23ZM10.9996 9.04019L7.61829 7.13818L6.63776 8.88133L8.45877 9.90565L6.59961 11.3L7.79961 12.9L10.9996 10.5L10.9996 9.04019ZM15.5404 9.90565L17.3614 8.88133L16.3809 7.13818L12.9996 9.04019L12.9996 10.5L16.1996 12.9L17.3996 11.3L15.5404 9.90565ZM12.8949 13.0528L12.0005 11.264L11.1061 13.0528C10.7277 13.8096 10.2492 14.0383 9.91745 14.066C9.70158 14.084 9.47094 14.028 9.24945 13.8774L8.42255 13.3151L7.29785 14.9689L8.12475 15.5312C8.48114 15.7736 8.87681 15.9396 9.29104 16.0179C9.46938 16.4569 9.69952 16.9545 9.96254 17.4037C10.162 17.7443 10.4057 18.1014 10.6904 18.386C10.95 18.6455 11.3981 19 12.0005 19C12.6029 19 13.051 18.6455 13.3106 18.386C13.5953 18.1014 13.839 17.7443 14.0384 17.4037C14.3015 16.9545 14.5316 16.4569 14.71 16.0179C15.1242 15.9396 15.5199 15.7736 15.8762 15.5312L16.7031 14.9689L15.5784 13.3151L14.7515 13.8774C14.5301 14.028 14.2994 14.084 14.0835 14.066C13.7518 14.0383 13.2733 13.8096 12.8949 13.0528Z"
    }
  }]
};
var excitedFilled = defineComponent({
  name: "ExcitedFilledIcon",
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
    var finalCls = computed(() => ["t-icon", "t-icon-excited-filled", className.value]);
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

export default excitedFilled;
//# sourceMappingURL=excited-filled.js.map
