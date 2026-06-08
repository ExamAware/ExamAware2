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
      "id": "logo-qq"
    },
    "children": [{
      "tag": "path",
      "attrs": {
        "id": "fill1",
        "fill": "props.fillColor1",
        "d": "M20.2145 14.6548C20.0273 14.0523 19.7714 13.3498 19.513 12.675L18.5692 10.3156C18.5692 10.2884 18.5818 9.82435 18.5818 9.58475C18.5818 5.55233 16.6781 1.50052 11.9971 1.5C7.3161 1.49948 5.41184 5.55233 5.41184 9.58475C5.41184 9.82383 5.42389 10.2884 5.42442 10.3156L4.48067 12.675C4.22167 13.3498 3.96633 14.0523 3.77916 14.6548C2.88784 17.5279 3.17568 18.717 3.39589 18.7443C3.86776 18.8015 5.23567 16.581 5.23567 16.581C5.23567 17.8666 5.89734 19.5444 7.32921 20.7561C6.7939 20.9212 6.13747 21.1755 5.71541 21.4864C5.33633 21.7664 5.38352 22.0516 5.45325 22.168C5.75368 22.6745 10.6009 22.4915 12.0002 22.3337C13.3996 22.491 18.2468 22.6745 18.5467 22.168C18.6148 22.0527 18.662 21.7674 18.2845 21.4864C17.8651 21.175 17.2055 20.9207 16.6697 20.7555C18.1015 19.5444 18.7632 17.8666 18.7632 16.581C18.7632 16.581 20.1306 18.8015 20.603 18.7443C20.8195 18.7181 21.1089 17.529 20.2145 14.6548Z"
      }
    }, {
      "tag": "path",
      "attrs": {
        "id": "stroke1",
        "stroke": "props.strokeColor1",
        "d": "M20.2145 14.6548C20.0273 14.0523 19.7714 13.3498 19.513 12.675L18.5692 10.3156C18.5692 10.2884 18.5818 9.82435 18.5818 9.58475C18.5818 5.55233 16.6781 1.50052 11.9971 1.5C7.3161 1.49948 5.41184 5.55233 5.41184 9.58475C5.41184 9.82383 5.42389 10.2884 5.42442 10.3156L4.48067 12.675C4.22167 13.3498 3.96633 14.0523 3.77916 14.6548C2.88784 17.5279 3.17568 18.717 3.39589 18.7443C3.86776 18.8015 5.23567 16.581 5.23567 16.581C5.23567 17.8666 5.89734 19.5444 7.32921 20.7561C6.7939 20.9212 6.13747 21.1755 5.71541 21.4864C5.33633 21.7664 5.38352 22.0516 5.45325 22.168C5.75368 22.6745 10.6009 22.4915 12.0002 22.3337C13.3996 22.491 18.2468 22.6745 18.5467 22.168C18.6148 22.0527 18.662 21.7674 18.2845 21.4864C17.8651 21.175 17.2055 20.9207 16.6697 20.7555C18.1015 19.5444 18.7632 17.8666 18.7632 16.581C18.7632 16.581 20.1306 18.8015 20.603 18.7443C20.8195 18.7181 21.1089 17.529 20.2145 14.6548Z",
        "strokeWidth": "props.strokeWidth"
      }
    }]
  }]
};
var logoQq = defineComponent({
  name: "LogoQqIcon",
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
    var finalCls = computed(() => ["t-icon", "t-icon-logo-qq", className.value]);
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

export default logoQq;
//# sourceMappingURL=logo-qq.js.map
