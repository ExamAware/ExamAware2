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
      "d": "M21.1564 5.902C20.3597 4.70809 19.3357 3.6788 18.1463 2.87597C17.5687 3.36477 16.8973 3.73508 16.3712 3.98699C15.5443 4.3829 14.6748 4.58887 13.8863 4.74658L12.6919 4.98546L12.2262 5.45113C10.4688 7.20849 10.4688 10.0577 12.2262 11.8151C13.9835 13.5725 16.8328 13.5725 18.5901 11.8151L19.0532 11.352L19.293 10.1533C19.4507 9.36474 19.6566 8.49523 20.0526 7.66837C20.3033 7.14488 20.6712 6.47757 21.1564 5.902Z"
    }
  }, {
    "tag": "path",
    "attrs": {
      "fill": "props.filledColor",
      "d": "M16.1815 1.82266C15.9611 1.95492 15.7313 2.07594 15.5075 2.1831C14.9152 2.4667 14.2484 2.63455 13.494 2.78542L9.86011 3.5122C8.18053 3.84812 6.63796 4.67368 5.42679 5.88484C2.03864 9.273 2.03864 14.7663 5.42679 18.1544L5.88511 18.6128C9.27327 22.0009 14.7666 22.0009 18.1547 18.6128C19.3659 17.4016 20.1914 15.859 20.5274 14.1794L21.2541 10.5455C21.405 9.79115 21.5728 9.12439 21.8564 8.53214C21.9598 8.31621 22.0761 8.09472 22.203 7.8814C22.717 9.15351 23 10.5437 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C13.4804 1 14.8924 1.29243 16.1815 1.82266Z"
    }
  }, {
    "tag": "path",
    "attrs": {
      "fill": "props.filledColor",
      "d": "M6.84101 7.29905C7.62471 6.51535 8.58874 5.94146 9.64415 5.625C8.36436 8.07559 8.75363 11.171 10.812 13.2293C12.8696 15.2869 15.9634 15.6766 18.4136 14.3985C18.097 15.4527 17.5234 16.4156 16.7405 17.1985C14.1334 19.8057 9.90644 19.8057 7.29933 17.1985L6.84101 16.7402C4.2339 14.1331 4.2339 9.90616 6.84101 7.29905Z"
    }
  }]
};
var logoCinema4dFilled = defineComponent({
  name: "LogoCinema4DFilledIcon",
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
    var finalCls = computed(() => ["t-icon", "t-icon-logo-cinema4d-filled", className.value]);
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

export default logoCinema4dFilled;
//# sourceMappingURL=logo-cinema4d-filled.js.map
