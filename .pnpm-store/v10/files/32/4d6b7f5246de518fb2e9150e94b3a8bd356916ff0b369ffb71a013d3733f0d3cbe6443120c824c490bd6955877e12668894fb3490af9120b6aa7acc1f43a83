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
    "viewBox": "0 0 24 25",
    "width": "1em",
    "height": "1em"
  },
  "children": [{
    "tag": "path",
    "attrs": {
      "fill": "props.filledColor",
      "d": "M6.79544 3.03531C8.05204 1.23874 10.0126 0.042174 12.7493 0.0424805C15.486 0.042787 17.4464 1.23932 18.7029 3.03575C19.9429 4.80872 20.478 7.13344 20.478 9.40764C20.478 9.54481 20.4745 9.74203 20.4711 9.90466L20.4666 10.1056L21.4578 12.5837C21.7412 13.3235 22.0251 14.1027 22.2345 14.7765C22.7325 16.3766 22.9107 17.5377 22.9255 18.3241C22.9328 18.7145 22.9003 19.0333 22.8345 19.2751C22.8021 19.3938 22.755 19.5194 22.6821 19.6296C22.6205 19.7226 22.4702 19.9091 22.2032 19.9414C21.9344 19.9739 21.713 19.8452 21.6002 19.7698C21.4647 19.6792 21.3338 19.5593 21.2156 19.4377C20.9767 19.1921 20.7243 18.871 20.5007 18.5654C20.4885 18.5488 20.4764 18.5322 20.4644 18.5156C20.1949 19.4871 19.6651 20.4984 18.8593 21.3764C19.2446 21.535 19.6304 21.7284 19.9335 21.9535C20.2212 22.1677 20.4027 22.4274 20.466 22.7125C20.5274 22.9887 20.4666 23.2386 20.3639 23.4124C20.2655 23.5785 20.1164 23.6694 20.023 23.7166C19.9188 23.7693 19.8041 23.8071 19.6949 23.8358C19.4753 23.8936 19.2031 23.9339 18.9091 23.9631C18.3165 24.022 17.5559 24.0434 16.7725 24.0422C15.2449 24.0398 13.5672 23.951 12.7528 23.8643C11.9383 23.9513 10.2605 24.0401 8.73288 24.0424C7.94939 24.0436 7.18876 24.0222 6.59608 23.9632C6.30207 23.9339 6.02982 23.8936 5.81012 23.8358C5.70089 23.8071 5.58628 23.7693 5.48207 23.7167C5.38879 23.6696 5.24052 23.5795 5.14207 23.4142C5.03786 23.2397 4.97592 22.9888 5.03753 22.7117C5.10123 22.4252 5.28375 22.1659 5.57249 21.9527C5.8763 21.7289 6.26103 21.5357 6.64501 21.3773C5.8388 20.499 5.30885 19.4873 5.0393 18.5154C5.02719 18.532 5.01503 18.5487 5.00282 18.5654C4.77918 18.8711 4.52676 19.1921 4.2879 19.4377C4.16971 19.5593 4.03884 19.6791 3.90345 19.7697C3.79082 19.8451 3.56935 19.9739 3.30055 19.9414L3.29911 19.9412C3.03518 19.9085 2.88493 19.7259 2.82169 19.6312C2.74791 19.5207 2.7002 19.3947 2.66748 19.2756C2.60087 19.0332 2.5681 18.714 2.57516 18.3237C2.58938 17.5372 2.76718 16.3763 3.26333 14.777C3.47269 14.1032 3.75615 13.3238 4.04036 12.5834L4.0431 12.5763L5.03119 10.1062C5.02991 10.0515 5.02831 9.98107 5.02672 9.9042C5.02336 9.74129 5.01996 9.5443 5.01996 9.40764C5.01996 7.13342 5.55527 4.80842 6.79544 3.03531Z"
    }
  }]
};
var logoQqFilled = defineComponent({
  name: "LogoQqFilledIcon",
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
    var finalCls = computed(() => ["t-icon", "t-icon-logo-qq-filled", className.value]);
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

export default logoQqFilled;
//# sourceMappingURL=logo-qq-filled.js.map
