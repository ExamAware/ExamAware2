/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Vue = require('vue');
require('@babel/runtime/helpers/toConsumableArray');
require('@babel/runtime/helpers/typeof');
require('../_chunks/dep-953a77eb.js');
var index$2 = require('../_chunks/dep-47c460dd.js');
var index$1 = require('../_chunks/dep-8382953f.js');
var index = require('../_chunks/dep-ecaaae91.js');
require('@babel/runtime/helpers/slicedToArray');
require('../_chunks/dep-cc66acf1.js');
require('@babel/runtime/helpers/defineProperty');
var empty_props = require('./props.js');
var image_index = require('../image/index.js');
var empty_components_MaintenanceSvg = require('./components/MaintenanceSvg.js');
var empty_components_NetworkErrorSvg = require('./components/NetworkErrorSvg.js');
var empty_components_EmptySvg = require('./components/EmptySvg.js');
var empty_components_FailSvg = require('./components/FailSvg.js');
var empty_components_SuccessSvg = require('./components/SuccessSvg.js');
var isString = require('../_chunks/dep-a55e8a08.js');
var configProvider_utils_context = require('../_chunks/dep-5d7e2375.js');
var configProvider_hooks_useConfig = require('../config-provider/hooks/useConfig.js');
require('../_chunks/dep-8abdfb41.js');
require('../_chunks/dep-06276759.js');
require('../_chunks/dep-48f60c78.js');
require('../_chunks/dep-b3b464e8.js');
require('../_chunks/dep-0813861e.js');
require('../_chunks/dep-4fa46641.js');
require('../_chunks/dep-87589faa.js');
require('../_chunks/dep-422dd97f.js');
require('../_chunks/dep-71fa6bfc.js');
require('../_chunks/dep-80a478d7.js');
require('../_chunks/dep-05f89f0d.js');
require('../_chunks/dep-427dabac.js');
require('../_chunks/dep-72c4cc44.js');
require('../_chunks/dep-ee355a9a.js');
require('../_chunks/dep-23f77e26.js');
require('@babel/runtime/helpers/createClass');
require('@babel/runtime/helpers/classCallCheck');
require('../image/image.js');
require('tdesign-icons-vue-next');
require('../_chunks/dep-fb83a452.js');
require('../_chunks/dep-f617290f.js');
require('../_chunks/dep-e7678f7a.js');
require('../_chunks/dep-733b2b51.js');
require('../image/props.js');
require('../space/index.js');
require('../space/space.js');
require('../space/props.js');
require('../_chunks/dep-3565d523.js');
require('../_chunks/dep-55c70201.js');
require('@babel/runtime/helpers/objectWithoutProperties');
require('../_chunks/dep-fd5a369e.js');
require('../_chunks/dep-4ccaead1.js');
require('../_chunks/dep-990979bb.js');
require('../_chunks/dep-94a7dc2d.js');
require('dayjs');
require('../_chunks/dep-92e23f17.js');
require('../_chunks/dep-0ff616fe.js');
require('../_chunks/dep-5f52cd42.js');
require('../_chunks/dep-f57bcb19.js');
require('../_chunks/dep-dc4bbc14.js');
require('../_chunks/dep-e27ea667.js');
require('../_chunks/dep-165ca38a.js');
require('../_chunks/dep-32412d92.js');
require('../_chunks/dep-a8a3d718.js');
require('../_chunks/dep-54e566d9.js');
require('../_chunks/dep-591a72de.js');
require('../_chunks/dep-8adeee89.js');
require('../_chunks/dep-4d2ef282.js');
require('../_chunks/dep-929933ce.js');
require('../_chunks/dep-6b1f0ef8.js');
require('../_chunks/dep-d62a674d.js');
require('../_chunks/dep-ace0b57c.js');
require('../_chunks/dep-ac11336c.js');
require('../_chunks/dep-11b67e11.js');
require('../_chunks/dep-dcb859c6.js');

var _Empty = Vue.defineComponent({
  name: "TEmpty",
  components: {
    TImage: image_index.Image
  },
  props: empty_props["default"],
  setup: function setup(props2, _ref) {
    var slots = _ref.slots;
    var _toRefs = Vue.toRefs(props2),
      size = _toRefs.size,
      propsImage = _toRefs.image,
      propsDescription = _toRefs.description,
      propsTitle = _toRefs.title,
      type = _toRefs.type;
    var _useConfig = configProvider_hooks_useConfig.useConfig("empty"),
      globalConfig = _useConfig.globalConfig;
    var classPrefix = index.usePrefixClass("empty");
    var showAction = Vue.computed(function () {
      return props2.action || slots.action;
    });
    var _useCommonClassName = index$1.useCommonClassName(),
      SIZE = _useCommonClassName.SIZE;
    var renderTNodeJSX = index$2.useTNodeJSX();
    var defaultMaps = Vue.computed(function () {
      return {
        maintenance: {
          image: globalConfig.value.image.maintenance || empty_components_MaintenanceSvg["default"],
          title: globalConfig.value.titleText.maintenance
        },
        success: {
          image: globalConfig.value.image.success || empty_components_SuccessSvg["default"],
          title: globalConfig.value.titleText.success
        },
        fail: {
          image: globalConfig.value.image.fail || empty_components_FailSvg["default"],
          title: globalConfig.value.titleText.fail
        },
        "network-error": {
          image: globalConfig.value.image.networkError || empty_components_NetworkErrorSvg["default"],
          title: globalConfig.value.titleText.networkError
        },
        empty: {
          image: globalConfig.value.image.empty || empty_components_EmptySvg["default"],
          title: globalConfig.value.titleText.empty
        }
      };
    });
    var emptyClasses = Vue.computed(function () {
      return [classPrefix.value, SIZE.value[size.value]];
    });
    var titleClasses = ["".concat(classPrefix.value, "__title")];
    var imageClasses = ["".concat(classPrefix.value, "__image")];
    var descriptionClasses = ["".concat(classPrefix.value, "__description")];
    var actionClass = ["".concat(classPrefix.value, "__action")];
    var typeImageProps = Vue.computed(function () {
      var _defaultMaps$value$ty;
      return (_defaultMaps$value$ty = defaultMaps.value[type.value]) !== null && _defaultMaps$value$ty !== void 0 ? _defaultMaps$value$ty : null;
    });
    var showImage = Vue.computed(function () {
      var _slots$image, _typeImageProps$value;
      return propsImage.value || (slots === null || slots === void 0 || (_slots$image = slots.image) === null || _slots$image === void 0 ? void 0 : _slots$image.call(slots)) || ((_typeImageProps$value = typeImageProps.value) === null || _typeImageProps$value === void 0 ? void 0 : _typeImageProps$value.image);
    });
    var showTitle = Vue.computed(function () {
      var _slots$title, _typeImageProps$value2;
      return propsTitle.value || (slots === null || slots === void 0 || (_slots$title = slots.title) === null || _slots$title === void 0 ? void 0 : _slots$title.call(slots)) || ((_typeImageProps$value2 = typeImageProps.value) === null || _typeImageProps$value2 === void 0 ? void 0 : _typeImageProps$value2.title);
    });
    var showDescription = Vue.computed(function () {
      var _slots$description;
      return propsDescription.value || (slots === null || slots === void 0 || (_slots$description = slots.description) === null || _slots$description === void 0 ? void 0 : _slots$description.call(slots));
    });
    var renderTitle = function renderTitle() {
      if (!showTitle.value) {
        return null;
      }
      return Vue.createVNode("div", {
        "class": titleClasses
      }, [showTitle.value]);
    };
    var renderDescription = function renderDescription() {
      if (!showDescription.value) {
        return null;
      }
      return Vue.createVNode("div", {
        "class": descriptionClasses
      }, [showDescription.value]);
    };
    var getImageIns = function getImageIns() {
      var data = showImage.value;
      var result = null;
      if (isString.isString(data)) {
        result = Vue.createVNode(image_index.Image, {
          "src": data
        }, null);
      } else if (data && Reflect.has(data, "setup")) {
        result = Vue.h(data);
      } else if (configProvider_utils_context.isPlainObject(data)) {
        result = Vue.createVNode(image_index.Image, data, null);
      }
      return data ? result : null;
    };
    return function () {
      return Vue.createVNode("div", {
        "class": emptyClasses.value
      }, [showImage.value ? Vue.createVNode("div", {
        "class": imageClasses,
        "style": props2.imageStyle
      }, [slots !== null && slots !== void 0 && slots.image ? renderTNodeJSX("image") : getImageIns()]) : null, renderTitle(), renderDescription(), showAction.value ? Vue.createVNode("div", {
        "class": actionClass
      }, [renderTNodeJSX("action")]) : null]);
    };
  }
});

exports["default"] = _Empty;
//# sourceMappingURL=empty.js.map
