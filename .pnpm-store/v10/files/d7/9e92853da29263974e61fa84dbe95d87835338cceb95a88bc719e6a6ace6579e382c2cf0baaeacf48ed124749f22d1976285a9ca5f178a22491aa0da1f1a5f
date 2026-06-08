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
      "d": "M7.5 2.71741L2 5.92575V21.5001L7.5 19.2328V2.71741Z"
    }
  }, {
    "tag": "path",
    "attrs": {
      "fill": "props.filledColor",
      "d": "M9.5 18.9097L11.25 19.9432V18C11.25 15.5535 12.5516 13.411 14.5 12.2271V5.09051L9.5 2.1377V18.9097Z"
    }
  }, {
    "tag": "path",
    "attrs": {
      "fill": "props.filledColor",
      "d": "M22 2.50012V12.5623C20.8805 11.7375 19.4972 11.25 18 11.25C17.4845 11.25 16.9824 11.3078 16.5 11.4173V4.76744L22 2.50012Z"
    }
  }, {
    "tag": "path",
    "attrs": {
      "fill": "props.filledColor",
      "d": "M18.9998 14.126V12.75H16.9998V14.126C16.2848 14.31 15.6472 14.6867 15.1457 15.1975L13.9531 14.509L12.9531 16.241L14.1447 16.929C14.0503 17.2699 13.9998 17.629 13.9998 18C13.9998 18.371 14.0503 18.7301 14.1447 19.071L12.9531 19.759L13.9531 21.491L15.1457 20.8025C15.6472 21.3133 16.2848 21.69 16.9998 21.874V23.25H18.9998V21.874C19.7147 21.69 20.3523 21.3133 20.8539 20.8025L22.0464 21.491L23.0464 19.759L21.8548 19.071C21.9493 18.7301 21.9998 18.371 21.9998 18C21.9998 17.629 21.9493 17.2699 21.8548 16.929L23.0464 16.241L22.0464 14.509L20.8539 15.1975C20.3523 14.6867 19.7147 14.31 18.9998 14.126ZM16.285 16.97C16.6349 16.3888 17.2719 16 17.9998 16C18.7276 16 19.3646 16.3888 19.7145 16.97L19.751 17.0332C19.9095 17.3197 19.9998 17.6493 19.9998 18C19.9998 18.3507 19.9095 18.6803 19.751 18.9668L19.7145 19.03C19.3646 19.6112 18.7276 20 17.9998 20C17.2719 20 16.6349 19.6112 16.285 19.03L16.2485 18.9667C16.09 18.6802 15.9998 18.3506 15.9998 18C15.9998 17.6494 16.09 17.3198 16.2485 17.0333L16.285 16.97Z"
    }
  }]
};
var mapSettingFilled = defineComponent({
  name: "MapSettingFilledIcon",
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
    var finalCls = computed(() => ["t-icon", "t-icon-map-setting-filled", className.value]);
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

export default mapSettingFilled;
//# sourceMappingURL=map-setting-filled.js.map
