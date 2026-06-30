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
      "d": "M11.5 2C8.46243 2 6 4.46243 6 7.5C6 10.5376 8.46243 13 11.5 13C14.5376 13 17 10.5376 17 7.5C17 4.46243 14.5376 2 11.5 2Z"
    }
  }, {
    "tag": "path",
    "attrs": {
      "fill": "props.filledColor",
      "d": "M19.4998 12.75V14.126C20.2147 14.31 20.8523 14.6867 21.3539 15.1975L22.5464 14.509L23.5464 16.241L22.3548 16.929C22.4493 17.2699 22.4998 17.629 22.4998 18C22.4998 18.371 22.4493 18.7301 22.3548 19.071L23.5464 19.759L22.5464 21.491L21.3539 20.8025C20.8523 21.3133 20.2147 21.69 19.4998 21.874V23.25H17.4998V21.874C16.7848 21.69 16.1472 21.3133 15.6457 20.8025L14.4531 21.491L13.4531 19.759L14.6447 19.071C14.5503 18.7301 14.4998 18.371 14.4998 18C14.4998 17.629 14.5503 17.2699 14.6447 16.929L13.4531 16.241L14.4531 14.509L15.6457 15.1975C16.1472 14.6867 16.7848 14.31 17.4998 14.126V12.75H19.4998ZM16.7485 17.0333C16.59 17.3198 16.4998 17.6494 16.4998 18C16.4998 18.3506 16.59 18.6802 16.7485 18.9667L16.7851 19.03C17.1349 19.6112 17.7719 20 18.4998 20C19.2276 20 19.8646 19.6112 20.2145 19.03L20.251 18.9668C20.4095 18.6802 20.4998 18.3507 20.4998 18C20.4998 17.6493 20.4095 17.3198 20.251 17.0332L20.2145 16.97C19.8646 16.3888 19.2276 16 18.4998 16C17.7719 16 17.1349 16.3888 16.785 16.97L16.7485 17.0333Z"
    }
  }, {
    "tag": "path",
    "attrs": {
      "fill": "props.filledColor",
      "d": "M13.0623 14C12.2375 15.1195 11.75 16.5028 11.75 18C11.75 19.4972 12.2375 20.8805 13.0623 22H2V20C2 16.6863 4.68629 14 8 14H13.0623Z"
    }
  }]
};
var userSettingFilled = defineComponent({
  name: "UserSettingFilledIcon",
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
    var finalCls = computed(() => ["t-icon", "t-icon-user-setting-filled", className.value]);
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

export default userSettingFilled;
//# sourceMappingURL=user-setting-filled.js.map
