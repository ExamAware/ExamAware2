'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var defineProperty = require('../_chunks/dep-23fc4c9b.js');
var vue = require('vue');
var utils_renderFn = require('../utils/render-fn.js');
var utils_useSizeProps = require('../utils/use-size-props.js');
require('../utils/use-common-classname.js');
require('../utils/config-context.js');

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { defineProperty._defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
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
      "id": "share"
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
          "d": "M19.4907 7.09662C20.9256 6.2682 21.4172 4.43343 20.5888 2.99855C19.7604 1.56367 17.9256 1.07204 16.4907 1.90047C15.0559 2.7289 14.5642 4.56367 15.3927 5.99855C16.2211 7.43342 18.0559 7.92505 19.4907 7.09662Z"
        }
      }, {
        "tag": "path",
        "attrs": {
          "fill": "props.fillColor1",
          "d": "M16.4907 22.0986C17.9256 22.927 19.7604 22.4354 20.5888 21.0005C21.4172 19.5656 20.9256 17.7309 19.4907 16.9024C18.0559 16.074 16.2211 16.5656 15.3927 18.0005C14.5642 19.4354 15.0559 21.2701 16.4907 22.0986Z"
        }
      }, {
        "tag": "path",
        "attrs": {
          "fill": "props.fillColor1",
          "d": "M6.5005 14.5966C7.93538 13.7682 8.42701 11.9334 7.59858 10.4985C6.77015 9.06367 4.93538 8.57204 3.5005 9.40047C2.06562 10.2289 1.574 12.0637 2.40242 13.4985C3.23085 14.9334 5.06562 15.4251 6.5005 14.5966Z"
        }
      }, {
        "tag": "path",
        "attrs": {
          "fill": "props.fillColor1",
          "d": "M3.5005 14.5985C4.93538 15.4269 6.77015 14.9353 7.59858 13.5004C8.42701 12.0655 7.93538 10.2308 6.5005 9.40233C5.06562 8.5739 3.23085 9.06553 2.40242 10.5004C1.574 11.9353 2.06562 13.7701 3.5005 14.5985Z"
        }
      }]
    }, {
      "tag": "path",
      "attrs": {
        "id": "stroke1",
        "stroke": "props.strokeColor1",
        "d": "M7.59863 13.501L15.3929 18.001M7.59863 10.499L15.3929 5.99902M15.3927 5.99855C14.5642 4.56367 15.0559 2.7289 16.4907 1.90047C17.9256 1.07204 19.7604 1.56367 20.5888 2.99855C21.4172 4.43343 20.9256 6.2682 19.4907 7.09662C18.0559 7.92505 16.2211 7.43342 15.3927 5.99855ZM15.3927 18.0005C16.2211 16.5656 18.0559 16.074 19.4907 16.9024C20.9256 17.7309 21.4172 19.5656 20.5888 21.0005C19.7604 22.4354 17.9256 22.927 16.4907 22.0986C15.0559 21.2701 14.5642 19.4354 15.3927 18.0005ZM7.59858 10.4985C8.42701 11.9334 7.93538 13.7682 6.5005 14.5966C5.06562 15.4251 3.23085 14.9334 2.40242 13.4985C1.574 12.0637 2.06562 10.2289 3.5005 9.40047C4.93538 8.57204 6.77015 9.06367 7.59858 10.4985ZM7.59858 13.5004C6.77015 14.9353 4.93538 15.4269 3.5005 14.5985C2.06562 13.7701 1.574 11.9353 2.40242 10.5004C3.23085 9.06553 5.06562 8.5739 6.5005 9.40233C7.93538 10.2308 8.42701 12.0655 7.59858 13.5004Z",
        "strokeLinecap": "square",
        "strokeWidth": "props.strokeWidth"
      }
    }]
  }]
};
var share = vue.defineComponent({
  name: "ShareIcon",
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
    var propsSize = vue.computed(() => props.size);
    var strokeColor1 = vue.computed(() => {
      if (!props.strokeColor) return "currentColor";
      return Array.isArray(props.strokeColor) ? props.strokeColor[0] : props.strokeColor;
    });
    var strokeColor2 = vue.computed(() => {
      var _props$strokeColor$;
      if (!props.strokeColor) return "currentColor";
      return Array.isArray(props.strokeColor) ? (_props$strokeColor$ = props.strokeColor[1]) !== null && _props$strokeColor$ !== void 0 ? _props$strokeColor$ : props.strokeColor[0] : props.strokeColor;
    });
    var fillColor1 = vue.computed(() => {
      if (!props.fillColor) return "transparent";
      return Array.isArray(props.fillColor) ? props.fillColor[0] : props.fillColor;
    });
    var fillColor2 = vue.computed(() => {
      var _props$fillColor$;
      if (!props.fillColor) return "transparent";
      return Array.isArray(props.fillColor) ? (_props$fillColor$ = props.fillColor[1]) !== null && _props$fillColor$ !== void 0 ? _props$fillColor$ : props.fillColor[0] : props.fillColor;
    });
    var filledColor = vue.computed(() => {
      if (!props.fillColor) return "currentColor";
      return Array.isArray(props.fillColor) ? props.fillColor[0] : props.fillColor;
    });
    var {
      className,
      style
    } = utils_useSizeProps['default'](propsSize);
    var finalCls = vue.computed(() => ["t-icon", "t-icon-share", className.value]);
    var finalStyle = vue.computed(() => _objectSpread(_objectSpread({
      fill: "none"
    }, style.value), attrs.style));
    var finalProps = vue.computed(() => ({
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
    return () => utils_renderFn['default'](element, finalProps.value);
  }
});

exports.default = share;
//# sourceMappingURL=share.js.map
