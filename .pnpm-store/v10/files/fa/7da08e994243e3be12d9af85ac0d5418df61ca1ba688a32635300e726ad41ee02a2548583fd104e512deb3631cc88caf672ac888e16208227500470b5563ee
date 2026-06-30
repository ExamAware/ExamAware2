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
      "d": "M16.75 7.71395C16.8969 7.71395 17.0433 7.71723 17.1892 7.72373C16.1727 4.59379 12.7794 2.29395 8.75 2.29395C3.91751 2.29395 0 5.60188 0 9.68242C0 11.9053 1.16251 13.8989 3.00217 15.2533L2.64999 17.9649L5.4876 16.5403C6.336 16.8283 7.25019 17.0073 8.20586 17.0568C8.07141 16.5205 8 15.9584 8 15.3749C8 10.9242 12.1557 7.71395 16.75 7.71395ZM5.99999 8.04394C5.4477 8.04394 4.99999 7.59623 4.99999 7.04395C4.99999 6.49166 5.4477 6.04394 5.99999 6.04394C6.55227 6.04394 6.99999 6.49166 6.99999 7.04395C6.99999 7.59623 6.55227 8.04394 5.99999 8.04394ZM11.5 8.05127C10.9477 8.05127 10.5 7.60355 10.5 7.05127C10.5 6.49898 10.9477 6.05127 11.5 6.05127C12.0523 6.05127 12.5 6.49898 12.5 7.05127C12.5 7.60355 12.0523 8.05127 11.5 8.05127Z"
    }
  }, {
    "tag": "path",
    "attrs": {
      "fill": "props.filledColor",
      "d": "M24 15.3749C24 17.0774 23.1874 18.6185 21.8739 19.7336V22.5064L19.4364 21.0991C18.6056 21.3809 17.6991 21.5359 16.75 21.5359C12.7459 21.5359 9.5 18.7776 9.5 15.3749C9.5 11.9723 12.7459 9.21395 16.75 9.21395C20.7541 9.21395 24 11.9723 24 15.3749ZM13.31 13.3719C13.31 13.9242 13.7577 14.3719 14.31 14.3719C14.8623 14.3719 15.31 13.9242 15.31 13.3719C15.31 12.8196 14.8623 12.3719 14.31 12.3719C13.7577 12.3719 13.31 12.8196 13.31 13.3719ZM18.19 13.3719C18.19 13.9242 18.6377 14.3719 19.19 14.3719C19.7423 14.3719 20.19 13.9242 20.19 13.3719C20.19 12.8196 19.7423 12.3719 19.19 12.3719C18.6377 12.3719 18.19 12.8196 18.19 13.3719Z"
    }
  }]
};
var logoWechatStrokeFilled = defineComponent({
  name: "LogoWechatStrokeFilledIcon",
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
    var finalCls = computed(() => ["t-icon", "t-icon-logo-wechat-stroke-filled", className.value]);
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

export default logoWechatStrokeFilled;
//# sourceMappingURL=logo-wechat-stroke-filled.js.map
