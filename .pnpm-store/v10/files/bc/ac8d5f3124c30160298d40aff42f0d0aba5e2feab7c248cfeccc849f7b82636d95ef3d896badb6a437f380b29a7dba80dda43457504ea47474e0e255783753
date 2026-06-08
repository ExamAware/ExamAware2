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
    "tag": "g",
    "attrs": {
      "id": "setting-1"
    },
    "children": [{
      "tag": "path",
      "attrs": {
        "id": "fill1",
        "fill": "props.fillColor1",
        "d": "M9.40811 4.95996L10.0001 2H14.0001L14.5921 4.95996C15.4027 5.25851 16.1475 5.69306 16.7989 6.23595L19.6604 5.26796L21.6604 8.73206L19.3922 10.7254C19.4632 11.1396 19.5001 11.5655 19.5001 12C19.5001 12.4345 19.4632 12.8604 19.3922 13.2747L21.6604 15.268L19.6604 18.7321L16.7989 17.7641C16.1475 18.3069 15.4027 18.7415 14.5921 19.04L14.0001 22H10.0001L9.40811 19.04C8.5975 18.7415 7.85268 18.3069 7.20131 17.7641L4.33984 18.7321L2.33984 15.268L4.60798 13.2747C4.53705 12.8604 4.5001 12.4345 4.5001 12C4.5001 11.5655 4.53705 11.1396 4.60797 10.7254L2.33984 8.73206L4.33984 5.26796L7.20129 6.23595C7.85266 5.69306 8.59749 5.25851 9.40811 4.95996Z",
        "fillRule": "evenodd",
        "clipRule": "evenodd"
      }
    }, {
      "tag": "path",
      "attrs": {
        "id": "fill2",
        "fill": "props.fillColor2",
        "d": "M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z"
      }
    }, {
      "tag": "path",
      "attrs": {
        "id": "stroke1",
        "stroke": "props.strokeColor1",
        "d": "M9.40811 4.95996L10.0001 2H14.0001L14.5921 4.95996C15.4027 5.25851 16.1475 5.69306 16.7989 6.23595L19.6604 5.26796L21.6604 8.73206L19.3922 10.7254C19.4632 11.1396 19.5001 11.5655 19.5001 12C19.5001 12.4345 19.4632 12.8604 19.3922 13.2747L21.6604 15.268L19.6604 18.7321L16.7989 17.7641C16.1475 18.3069 15.4027 18.7415 14.5921 19.04L14.0001 22H10.0001L9.40811 19.04C8.5975 18.7415 7.85268 18.3069 7.20131 17.7641L4.33984 18.7321L2.33984 15.268L4.60798 13.2747C4.53705 12.8604 4.5001 12.4345 4.5001 12C4.5001 11.5655 4.53705 11.1396 4.60797 10.7254L2.33984 8.73206L4.33984 5.26796L7.20129 6.23595C7.85266 5.69306 8.59749 5.25851 9.40811 4.95996Z",
        "fillRule": "evenodd",
        "strokeLinecap": "square",
        "strokeWidth": "props.strokeWidth",
        "clipRule": "evenodd"
      }
    }, {
      "tag": "path",
      "attrs": {
        "id": "stroke2",
        "stroke": "props.strokeColor2",
        "d": "M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z",
        "strokeLinecap": "square",
        "strokeWidth": "props.strokeWidth"
      }
    }]
  }]
};
var setting1 = defineComponent({
  name: "Setting1Icon",
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
    var finalCls = computed(() => ["t-icon", "t-icon-setting-1", className.value]);
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

export default setting1;
//# sourceMappingURL=setting-1.js.map
