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
      "d": "M9 1C11.0264 1 12.5325 2.39796 12.9087 4.2H22V11.1878C21.4487 10.5438 20.7688 10.0132 20 9.63595V6.2H12.8454C12.5388 7.30714 11.831 8.23011 11.2265 8.86919C10.8099 9.30969 10.3966 9.66331 10.0884 9.9066C9.93351 10.0289 9.80313 10.1249 9.70942 10.1917C9.54023 10.3123 9.36556 10.4253 9.191 10.5383C9.12723 10.5795 9.06347 10.6208 9 10.6624C8.93652 10.6208 8.87275 10.5795 8.80897 10.5383C8.63442 10.4253 8.45976 10.3123 8.29058 10.1917C8.19687 10.1249 8.06649 10.0289 7.91161 9.9066C7.60343 9.66331 7.19012 9.30969 6.77349 8.86919C6.16903 8.23011 5.46122 7.30714 5.15459 6.2H4V12.5333L6.0435 11.4435L11.0326 14.6073C11.0111 14.8186 11 15.033 11 15.25C11 17.151 11.8487 18.8537 13.1878 20H2V4.2H5.09068C5.46408 2.39977 6.95964 1 9 1ZM7 5.08965C7 5.89904 7.52344 6.75154 8.22651 7.49489C8.49749 7.78138 8.77065 8.02575 9 8.21501C9.22934 8.02575 9.50251 7.78138 9.77349 7.49489C10.4766 6.75154 11 5.89904 11 5.08965C11 3.88678 10.1502 3 9 3C7.83916 3 7 3.88368 7 5.08965Z"
    }
  }, {
    "tag": "path",
    "attrs": {
      "fill": "props.filledColor",
      "d": "M17.25 12.5C18.7688 12.5 20 13.7312 20 15.25C20 16.0085 19.6929 16.6952 19.1963 17.1927C19.1936 17.1955 19.1908 17.1983 19.188 17.2011C18.6908 17.6949 18.0061 18 17.25 18C15.7312 18 14.5 16.7688 14.5 15.25C14.5 13.7312 15.7312 12.5 17.25 12.5ZM21.2419 17.8254C21.7216 17.0834 22 16.1992 22 15.25C22 12.6266 19.8734 10.5 17.25 10.5C14.6266 10.5 12.5 12.6266 12.5 15.25C12.5 17.8734 14.6266 20 17.25 20C18.2004 20 19.0857 19.7209 19.8282 19.2401L21.4983 20.9142L22.9142 19.5017L21.2419 17.8254Z"
    }
  }]
};
var mapSearch1Filled = defineComponent({
  name: "MapSearch1FilledIcon",
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
    var finalCls = computed(() => ["t-icon", "t-icon-map-search-1-filled", className.value]);
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

export default mapSearch1Filled;
//# sourceMappingURL=map-search-1-filled.js.map
