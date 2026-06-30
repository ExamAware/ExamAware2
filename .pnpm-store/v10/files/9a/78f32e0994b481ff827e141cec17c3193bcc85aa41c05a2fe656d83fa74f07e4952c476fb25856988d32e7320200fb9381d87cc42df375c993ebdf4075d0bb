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
      "d": "M12 0.293457L12.8103 1.41397L12.8125 1.41699L12.8206 1.42813L12.8541 1.47409C12.8841 1.51495 12.9289 1.57582 12.9873 1.65427C13.1041 1.81119 13.2748 2.03822 13.4888 2.31587C13.9173 2.87179 14.5168 3.6275 15.2015 4.42822C15.8876 5.23058 16.6508 6.06811 17.407 6.79209C18.1742 7.52664 18.8873 8.0984 19.4735 8.41358C19.858 8.62027 20.1969 8.77335 20.476 8.87252C20.7694 8.97681 20.9376 9.00003 21 9.00003H22V11H20.9892C20.6649 10.9984 20.3249 10.925 20 10.8222V11H4V10.8222C3.67507 10.925 3.33506 10.9984 3.0108 11H2V9.00003H3C3.06241 9.00003 3.23056 8.97681 3.52403 8.87252C3.80306 8.77335 4.14202 8.62027 4.52647 8.41358C5.1127 8.09841 5.82578 7.52664 6.593 6.79209C7.34918 6.06811 8.11236 5.23058 8.79848 4.42822C9.48318 3.6275 10.0827 2.87179 10.5112 2.31587C10.7252 2.03822 10.896 1.81119 11.0127 1.65427C11.0711 1.57582 11.1159 1.51495 11.1459 1.47409L11.1794 1.42813L11.1875 1.41699L11.1897 1.41397L12 0.293457Z"
    }
  }, {
    "tag": "path",
    "attrs": {
      "fill": "props.filledColor",
      "d": "M4 13L4 20H2V22H9V19.0005C9 17.3436 10.3431 16.0005 12 16.0005C13.6569 16.0005 15 17.3436 15 19.0005V22H22V20H20V13H4Z"
    }
  }, {
    "tag": "path",
    "attrs": {
      "fill": "props.filledColor",
      "d": "M12 18C11.4477 18 11 18.4477 11 19V22H13V19C13 18.4477 12.5523 18 12 18Z"
    }
  }]
};
var atticFilled = defineComponent({
  name: "AtticFilledIcon",
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
    var finalCls = computed(() => ["t-icon", "t-icon-attic-filled", className.value]);
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

export default atticFilled;
//# sourceMappingURL=attic-filled.js.map
