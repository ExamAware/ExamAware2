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
      "d": "M14.6488 2.00005V0.195801L8.5 4.15756C8.93879 4.7735 9.19161 5.47283 9.30843 6.20754C9.58723 7.96087 9.0912 9.91567 8.49976 11.4197C6.20884 16.4663 6.45993 20.5529 8.94494 22.2446C9.15608 22.3883 9.39476 22.5204 9.66348 22.6324C9.6635 22.6324 9.66346 22.6324 9.66348 22.6324C10.1991 22.8559 10.8541 23.0001 11.6483 23.0001C14.726 23.0001 16.3615 20.4924 15.8945 17.5734C15.7073 16.4037 15.2655 15.3468 14.8631 14.384C14.2612 12.944 13.7472 11.7145 14.3048 10.6332C14.3804 10.4866 14.4502 10.3434 14.5146 10.2039C14.1987 11.8326 14.9066 12.8259 15.7558 14.0177C16.3497 14.8511 17.0128 15.7815 17.4431 17.094C18.1804 19.3425 17.7248 21.5241 16.2934 22.8886C18.4071 22.9856 20.0409 22.4469 21.1924 21.391C22.7392 19.9726 23.1517 17.8587 22.9493 15.943C22.6458 13.0706 20.4209 10.461 18.5388 8.78656C16.4195 6.90099 14.6488 5.30194 14.6488 2.00005Z"
    }
  }, {
    "tag": "path",
    "attrs": {
      "fill": "props.filledColor",
      "d": "M7.27505 8.47933C6.89071 8.76038 6.50031 9.01684 6.08574 9.28918C5.71968 9.52965 5.33466 9.78259 4.91847 10.0757C3.95772 10.7522 2.96562 11.5631 2.22137 12.6798C1.46396 13.8161 0.999927 15.2125 1 17.0016C1.00013 20.1022 2.73113 22.9998 6.64811 22.9998C6.69013 22.9998 6.73179 22.9997 6.77313 22.9993C5.58863 21.7228 5.01885 20.0103 4.93355 18.1835C4.82788 15.9204 5.44163 13.333 6.65623 10.6425C6.92067 9.96276 7.14678 9.21724 7.27505 8.47933Z"
    }
  }]
};
var garlicFilled = defineComponent({
  name: "GarlicFilledIcon",
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
    var finalCls = computed(() => ["t-icon", "t-icon-garlic-filled", className.value]);
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

export default garlicFilled;
//# sourceMappingURL=garlic-filled.js.map
