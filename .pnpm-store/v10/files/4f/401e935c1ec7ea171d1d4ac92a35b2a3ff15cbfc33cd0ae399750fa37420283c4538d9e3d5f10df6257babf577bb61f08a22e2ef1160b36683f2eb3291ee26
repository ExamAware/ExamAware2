'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var defineProperty = require('../_chunks/dep-23fc4c9b.js');
var vue = require('vue');
var iconfont_props_props = require('./props/props.js');
var utils_useSizeProps = require('../utils/use-size-props.js');
var utils_configContext = require('../utils/config-context.js');
var utils_checkUrlAndLoad = require('../utils/check-url-and-load.js');
require('../utils/use-common-classname.js');

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { defineProperty._defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var {
  classPrefix
} = utils_configContext['default'];
var CDN_ICONFONT_URL = "https://tdesign.gtimg.com/icon/0.4.0/fonts/index.css";
var IconFont = vue.defineComponent({
  name: "IconFont",
  props: iconfont_props_props['default'],
  setup(props2, _ref) {
    var {
      attrs
    } = _ref;
    var propsSize = vue.computed(() => props2.size);
    var {
      className: sizeClassName,
      style: sizeStyle
    } = utils_useSizeProps['default'](propsSize);
    var name = vue.computed(() => props2.name || "");
    var isBuiltinIcon = vue.computed(() => props2.url && /^t-icon-(\w|-)+$/.test(props2.name));
    var finalUrl = vue.computed(() => {
      var url = [];
      url = props2.url instanceof Array ? props2.url.concat() : [props2.url];
      if (props2.loadDefaultIcons) url.push(CDN_ICONFONT_URL);
      return url;
    });
    var classNames = vue.computed(() => [{
      [name.value]: props2.url,
      ["".concat(classPrefix, "-icon")]: !props2.url || isBuiltinIcon.value,
      ["".concat(classPrefix, "-icon-").concat(name.value)]: !props2.url
    }, sizeClassName.value]);
    var finalStyle = vue.computed(() => _objectSpread(_objectSpread({}, sizeStyle.value), attrs.style));
    vue.onMounted(() => {
      Array.from(new Set(finalUrl.value)).forEach(url => {
        utils_checkUrlAndLoad.checkLinkAndLoad(url, "".concat(classPrefix, "-iconfont-stylesheet--unique-class"));
      });
    });
    var finalProps = vue.computed(() => ({
      class: classNames.value,
      style: finalStyle.value,
      onClick: e => {
        var _props2$onClick;
        return (_props2$onClick = props2.onClick) === null || _props2$onClick === void 0 ? void 0 : _props2$onClick.call(props2, {
          e
        });
      }
    }));
    return () => vue.h(props2.tag || "i", finalProps.value);
  }
});

exports.IconFont = IconFont;
exports.default = IconFont;
//# sourceMappingURL=icon.js.map
