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
      "id": "cherry",
      "clipPath": "url(#clip0_543_6572)"
    },
    "children": [{
      "tag": "g",
      "attrs": {
        "id": "fill1"
      },
      "children": [{
        "tag": "path",
        "attrs": {
          "fill": "props.fillColor1",
          "d": "M14.9997 21.0002C13.6329 22.3671 11.3666 22.3671 9.99974 21.0002C8.6329 19.6334 8.6329 17.3671 9.99974 16.0002C11.3666 14.6334 13.6329 14.6334 14.9997 16.0002C16.3666 17.3671 16.3666 19.6334 14.9997 21.0002Z"
        }
      }, {
        "tag": "path",
        "attrs": {
          "fill": "props.fillColor1",
          "d": "M7.99974 14.0002C6.6329 15.3671 4.36657 15.3671 2.99974 14.0002C1.6329 12.6334 1.6329 10.3671 2.99974 9.00022C4.36657 7.63339 6.6329 7.63339 7.99974 9.00022C9.36657 10.3671 9.36657 12.6334 7.99974 14.0002Z"
        }
      }]
    }, {
      "tag": "path",
      "attrs": {
        "id": "stroke1",
        "stroke": "props.strokeColor1",
        "d": "M7.99974 9.00003C6.6329 7.63319 4.36657 7.63319 2.99974 9.00003C1.6329 10.3669 1.6329 12.6332 2.99974 14C4.36657 15.3669 6.6329 15.3669 7.99974 14C9.36657 12.6332 9.36657 10.3669 7.99974 9.00003ZM7.99974 9.00003C11.1717 5.82806 17.1521 5.16938 19.2497 5.03432M16.9997 2L21.9997 7M19.2497 5.87694C17.7111 7.7916 15.1381 11.6366 14.9935 15.25M14.9997 16C13.6329 14.6332 11.3666 14.6332 9.99974 16C8.6329 17.3669 8.6329 19.6332 9.99974 21C11.3666 22.3669 13.6329 22.3669 14.9997 21C16.3666 19.6332 16.3666 17.3669 14.9997 16Z",
        "strokeLinecap": "square",
        "strokeWidth": "props.strokeWidth"
      }
    }]
  }]
};
var cherry = defineComponent({
  name: "CherryIcon",
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
    var finalCls = computed(() => ["t-icon", "t-icon-cherry", className.value]);
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

export default cherry;
//# sourceMappingURL=cherry.js.map
