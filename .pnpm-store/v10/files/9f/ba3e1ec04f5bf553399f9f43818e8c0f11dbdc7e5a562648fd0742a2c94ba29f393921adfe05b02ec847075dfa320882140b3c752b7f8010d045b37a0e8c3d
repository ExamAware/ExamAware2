import { _ as _defineProperty } from '../_chunks/dep-2cb449a9.js';
import { defineComponent, computed, onMounted, h } from 'vue';
import props from './props/props.js';
import useSizeProps from '../utils/use-size-props.js';
import ConfigContext from '../utils/config-context.js';
import { checkLinkAndLoad } from '../utils/check-url-and-load.js';
import '../style/css.js';
import '../utils/use-common-classname.js';

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var {
  classPrefix
} = ConfigContext;
var CDN_ICONFONT_URL = "https://tdesign.gtimg.com/icon/0.4.0/fonts/index.css";
var IconFont = defineComponent({
  name: "IconFont",
  props,
  setup(props2, _ref) {
    var {
      attrs
    } = _ref;
    var propsSize = computed(() => props2.size);
    var {
      className: sizeClassName,
      style: sizeStyle
    } = useSizeProps(propsSize);
    var name = computed(() => props2.name || "");
    var isBuiltinIcon = computed(() => props2.url && /^t-icon-(\w|-)+$/.test(props2.name));
    var finalUrl = computed(() => {
      var url = [];
      url = props2.url instanceof Array ? props2.url.concat() : [props2.url];
      if (props2.loadDefaultIcons) url.push(CDN_ICONFONT_URL);
      return url;
    });
    var classNames = computed(() => [{
      [name.value]: props2.url,
      ["".concat(classPrefix, "-icon")]: !props2.url || isBuiltinIcon.value,
      ["".concat(classPrefix, "-icon-").concat(name.value)]: !props2.url
    }, sizeClassName.value]);
    var finalStyle = computed(() => _objectSpread(_objectSpread({}, sizeStyle.value), attrs.style));
    onMounted(() => {
      Array.from(new Set(finalUrl.value)).forEach(url => {
        checkLinkAndLoad(url, "".concat(classPrefix, "-iconfont-stylesheet--unique-class"));
      });
    });
    var finalProps = computed(() => ({
      class: classNames.value,
      style: finalStyle.value,
      onClick: e => {
        var _props2$onClick;
        return (_props2$onClick = props2.onClick) === null || _props2$onClick === void 0 ? void 0 : _props2$onClick.call(props2, {
          e
        });
      }
    }));
    return () => h(props2.tag || "i", finalProps.value);
  }
});

export default IconFont;
export { IconFont };
//# sourceMappingURL=icon.js.map
