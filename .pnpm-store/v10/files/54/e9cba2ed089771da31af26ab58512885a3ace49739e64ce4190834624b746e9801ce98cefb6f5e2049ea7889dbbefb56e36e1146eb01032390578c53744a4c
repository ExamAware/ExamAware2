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
      "d": "M11.9998 0.201172L11.1687 1.44358L11.1679 1.44474L11.1634 1.45144L11.1426 1.48187C11.1237 1.50953 11.0946 1.55166 11.056 1.60669C10.9787 1.71679 10.8632 1.87834 10.7141 2.07894C10.4154 2.48067 9.98384 3.03619 9.45513 3.64739C8.38358 4.88613 6.97041 6.28599 5.49901 7.13334C5.03293 7.40174 4.54289 7.49992 3.99805 7.49992H2.99805V9.49992H4.99776L5.0001 16.9995L2.99805 16.9995L2.99805 18.9995L3.99805 18.9995L3.99805 21.9995H5.99805L5.99805 18.9995H10.998L10.998 21.9995L12.998 21.9995L12.998 18.9995H17.9981L17.998 21.9995H19.998V18.9995H20.998V16.9995H18.998L18.9981 9.49992H20.998V7.49992H19.998C19.4534 7.49992 18.9634 7.40164 18.4974 7.13305C17.0267 6.28549 15.6143 4.88573 14.5433 3.64714C14.0148 3.03602 13.5835 2.4806 13.285 2.07894C13.136 1.87838 13.0206 1.71687 12.9433 1.60679C12.9047 1.55177 12.8756 1.50965 12.8567 1.482L12.836 1.45157L12.8306 1.44369L11.9998 0.201172ZM9 14C9 12.3431 10.3431 11 12 11C13.6569 11 15 12.3431 15 14V17H13V14C13 13.4477 12.5523 13 12 13C11.4477 13 11 13.4477 11 14V17H9V14Z"
    }
  }]
};
var attic1Filled = defineComponent({
  name: "Attic1FilledIcon",
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
    var finalCls = computed(() => ["t-icon", "t-icon-attic-1-filled", className.value]);
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

export default attic1Filled;
//# sourceMappingURL=attic-1-filled.js.map
