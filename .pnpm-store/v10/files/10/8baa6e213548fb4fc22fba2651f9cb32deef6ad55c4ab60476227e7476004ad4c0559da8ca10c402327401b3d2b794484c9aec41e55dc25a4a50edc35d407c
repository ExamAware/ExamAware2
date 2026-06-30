/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { defineComponent, toRefs, computed, createVNode, h } from 'vue';
import { isString, isPlainObject } from 'lodash-es';
import '@babel/runtime/helpers/toConsumableArray';
import '@babel/runtime/helpers/typeof';
import '../_chunks/dep-fe23be6e.js';
import { u as useTNodeJSX } from '../_chunks/dep-2accc95a.js';
import { u as useCommonClassName } from '../_chunks/dep-4f8b6591.js';
import { u as usePrefixClass } from '../_chunks/dep-9e6d8a78.js';
import '@babel/runtime/helpers/slicedToArray';
import '../_chunks/dep-880d05b9.js';
import '@babel/runtime/helpers/defineProperty';
import props from './props.js';
import { Image } from '../image/index.js';
import MaintenanceSvg from './components/MaintenanceSvg.js';
import NetworkErrorSvg from './components/NetworkErrorSvg.js';
import EmptySvg from './components/EmptySvg.js';
import FailSvg from './components/FailSvg.js';
import SuccessSvg from './components/SuccessSvg.js';
import { useConfig } from '../config-provider/hooks/useConfig.js';
import '../_chunks/dep-81b01cae.js';
import '../_chunks/dep-16bcfabc.js';
import '../_chunks/dep-fb805f69.js';
import '../config-provider/utils/context.js';
import '../_chunks/dep-938cd955.js';
import 'dayjs';
import '@babel/runtime/helpers/createClass';
import '@babel/runtime/helpers/classCallCheck';
import '../image/image.js';
import 'tdesign-icons-vue-next';
import '../_chunks/dep-6264b0a7.js';
import '../_chunks/dep-d9f4e50e.js';
import '../_chunks/dep-7d14e543.js';
import '../_chunks/dep-8295e674.js';
import '../image/props.js';
import '../space/index.js';
import '../space/space.js';
import '../space/props.js';
import '../_chunks/dep-e3ce8c8f.js';
import '../_chunks/dep-80a99546.js';
import '@babel/runtime/helpers/objectWithoutProperties';
import '../_chunks/dep-664b8b22.js';
import 'tdesign-vue-next/esm/common/style/web/components/space/_index.less';
import 'tdesign-vue-next/esm/common/style/web/components/image/_index.less';

var _Empty = defineComponent({
  name: "TEmpty",
  components: {
    TImage: Image
  },
  props: props,
  setup: function setup(props2, _ref) {
    var slots = _ref.slots;
    var _toRefs = toRefs(props2),
      size = _toRefs.size,
      propsImage = _toRefs.image,
      propsDescription = _toRefs.description,
      propsTitle = _toRefs.title,
      type = _toRefs.type;
    var _useConfig = useConfig("empty"),
      globalConfig = _useConfig.globalConfig;
    var classPrefix = usePrefixClass("empty");
    var showAction = computed(function () {
      return props2.action || slots.action;
    });
    var _useCommonClassName = useCommonClassName(),
      SIZE = _useCommonClassName.SIZE;
    var renderTNodeJSX = useTNodeJSX();
    var defaultMaps = computed(function () {
      return {
        maintenance: {
          image: globalConfig.value.image.maintenance || MaintenanceSvg,
          title: globalConfig.value.titleText.maintenance
        },
        success: {
          image: globalConfig.value.image.success || SuccessSvg,
          title: globalConfig.value.titleText.success
        },
        fail: {
          image: globalConfig.value.image.fail || FailSvg,
          title: globalConfig.value.titleText.fail
        },
        "network-error": {
          image: globalConfig.value.image.networkError || NetworkErrorSvg,
          title: globalConfig.value.titleText.networkError
        },
        empty: {
          image: globalConfig.value.image.empty || EmptySvg,
          title: globalConfig.value.titleText.empty
        }
      };
    });
    var emptyClasses = computed(function () {
      return [classPrefix.value, SIZE.value[size.value]];
    });
    var titleClasses = ["".concat(classPrefix.value, "__title")];
    var imageClasses = ["".concat(classPrefix.value, "__image")];
    var descriptionClasses = ["".concat(classPrefix.value, "__description")];
    var actionClass = ["".concat(classPrefix.value, "__action")];
    var typeImageProps = computed(function () {
      var _defaultMaps$value$ty;
      return (_defaultMaps$value$ty = defaultMaps.value[type.value]) !== null && _defaultMaps$value$ty !== void 0 ? _defaultMaps$value$ty : null;
    });
    var showImage = computed(function () {
      var _slots$image, _typeImageProps$value;
      return propsImage.value || (slots === null || slots === void 0 || (_slots$image = slots.image) === null || _slots$image === void 0 ? void 0 : _slots$image.call(slots)) || ((_typeImageProps$value = typeImageProps.value) === null || _typeImageProps$value === void 0 ? void 0 : _typeImageProps$value.image);
    });
    var showTitle = computed(function () {
      var _slots$title, _typeImageProps$value2;
      return propsTitle.value || (slots === null || slots === void 0 || (_slots$title = slots.title) === null || _slots$title === void 0 ? void 0 : _slots$title.call(slots)) || ((_typeImageProps$value2 = typeImageProps.value) === null || _typeImageProps$value2 === void 0 ? void 0 : _typeImageProps$value2.title);
    });
    var showDescription = computed(function () {
      var _slots$description;
      return propsDescription.value || (slots === null || slots === void 0 || (_slots$description = slots.description) === null || _slots$description === void 0 ? void 0 : _slots$description.call(slots));
    });
    var renderTitle = function renderTitle() {
      if (!showTitle.value) {
        return null;
      }
      return createVNode("div", {
        "class": titleClasses
      }, [showTitle.value]);
    };
    var renderDescription = function renderDescription() {
      if (!showDescription.value) {
        return null;
      }
      return createVNode("div", {
        "class": descriptionClasses
      }, [showDescription.value]);
    };
    var getImageIns = function getImageIns() {
      var data = showImage.value;
      var result = null;
      if (isString(data)) {
        result = createVNode(Image, {
          "src": data
        }, null);
      } else if (data && Reflect.has(data, "setup")) {
        result = h(data);
      } else if (isPlainObject(data)) {
        result = createVNode(Image, data, null);
      }
      return data ? result : null;
    };
    return function () {
      return createVNode("div", {
        "class": emptyClasses.value
      }, [showImage.value ? createVNode("div", {
        "class": imageClasses,
        "style": props2.imageStyle
      }, [slots !== null && slots !== void 0 && slots.image ? renderTNodeJSX("image") : getImageIns()]) : null, renderTitle(), renderDescription(), showAction.value ? createVNode("div", {
        "class": actionClass
      }, [renderTNodeJSX("action")]) : null]);
    };
  }
});

export { _Empty as default };
//# sourceMappingURL=empty.js.map
