/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { defineComponent, toRefs, computed, createVNode, h } from 'vue';
import { isString, isPlainObject } from 'lodash-es';
import { u as usePrefixClass, c as useCommonClassName, a as useTNodeJSX } from '../_chunks/dep-7673347f.mjs';
import props from './props.mjs';
import { Image } from '../image/index.mjs';
import MaintenanceSvg from './components/MaintenanceSvg.mjs';
import NetworkErrorSvg from './components/NetworkErrorSvg.mjs';
import EmptySvg from './components/EmptySvg.mjs';
import FailSvg from './components/FailSvg.mjs';
import SuccessSvg from './components/SuccessSvg.mjs';
import { useConfig } from '../config-provider/hooks/useConfig.mjs';
import '../_chunks/dep-00b4e06a.mjs';
import '../_chunks/dep-9f459d8b.mjs';
import '../_chunks/dep-257428bc.mjs';
import '../_chunks/dep-51a43106.mjs';
import '../_chunks/dep-fe644854.mjs';
import '../_chunks/dep-22ebd6af.mjs';
import '../_chunks/dep-9003fde5.mjs';
import '../_chunks/dep-cdd448ec.mjs';
import '../_chunks/dep-97ecacde.mjs';
import '../config-provider/utils/context.mjs';
import '../_chunks/dep-a4c09318.mjs';
import '../_chunks/dep-ffb85102.mjs';
import '../_chunks/dep-ad588525.mjs';
import '../_chunks/dep-84fd47b3.mjs';
import '../_chunks/dep-1dacc319.mjs';
import '../_chunks/dep-d36c4a3f.mjs';
import '../image/image.mjs';
import 'tdesign-icons-vue-next';
import '../image/props.mjs';
import '../space/index.mjs';
import '../space/space.mjs';
import '../space/props.mjs';
import '../_chunks/dep-0cde7579.mjs';
import '../_chunks/dep-0dcc778a.mjs';
import './style/css.mjs';

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
//# sourceMappingURL=empty.mjs.map
