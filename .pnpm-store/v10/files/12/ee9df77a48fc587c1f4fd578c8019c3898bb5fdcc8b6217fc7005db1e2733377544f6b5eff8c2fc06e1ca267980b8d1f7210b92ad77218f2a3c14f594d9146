/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { defineComponent, reactive, h, createVNode, render } from 'vue';
import { merge } from 'lodash-es';
import { _ as _Loading } from '../_chunks/dep-ee693784.js';
import '@babel/runtime/helpers/toConsumableArray';
import '@babel/runtime/helpers/typeof';
import { g as getAttach, a as addClass, r as removeClass } from '../_chunks/dep-16bcfabc.js';
import { u as usePrefixClass } from '../_chunks/dep-9e6d8a78.js';
import '@babel/runtime/helpers/slicedToArray';
import '../_chunks/dep-880d05b9.js';
import '@babel/runtime/helpers/defineProperty';
import './icon/gradient.js';
import '../_chunks/dep-fe23be6e.js';
import '../_chunks/dep-81b01cae.js';
import '../_chunks/dep-2ea19dca.js';
import '../_chunks/dep-80a99546.js';
import '@babel/runtime/helpers/objectWithoutProperties';
import '../_chunks/dep-2accc95a.js';
import '../_chunks/dep-fb805f69.js';
import '../_chunks/dep-4f8b6591.js';
import '../config-provider/hooks/useConfig.js';
import '../config-provider/utils/context.js';
import '../_chunks/dep-938cd955.js';
import 'dayjs';
import './props.js';
import '@babel/runtime/helpers/createClass';
import '@babel/runtime/helpers/classCallCheck';

var fullScreenLoadingInstance = null;
function mergeDefaultProps(props) {
  var options = merge({
    fullscreen: false,
    attach: "body",
    loading: true,
    preventScrollThrough: true
  }, props);
  return options;
}
function createLoading(props, context) {
  var mergedProps = mergeDefaultProps(props);
  if (mergedProps.fullscreen && fullScreenLoadingInstance) {
    return fullScreenLoadingInstance;
  }
  var component = defineComponent({
    setup: function setup() {
      var loadingOptions = reactive(mergedProps);
      return function () {
        return h(_Loading, loadingOptions);
      };
    }
  });
  var attach = getAttach(mergedProps.fullscreen ? "body" : mergedProps.attach);
  var instance = createVNode(component);
  if (context !== null && context !== void 0 ? context : LoadingPlugin._context) {
    instance.appContext = context !== null && context !== void 0 ? context : LoadingPlugin._context;
  }
  var wrapper = document.createElement("div");
  render(instance, wrapper);
  var parentRelativeClass = usePrefixClass("loading__parent--relative").value;
  var lockClass = usePrefixClass("loading--lock");
  var lockFullscreen = mergedProps.preventScrollThrough && mergedProps.fullscreen;
  if (lockFullscreen) {
    addClass(document.body, lockClass.value);
  }
  if (attach) {
    addClass(attach, parentRelativeClass);
  } else {
    console.error("attach is not exist");
  }
  var loadingInstance = {
    hide: function hide() {
      removeClass(attach, parentRelativeClass);
      removeClass(document.body, lockClass.value);
      render(null, wrapper);
      wrapper.remove();
    }
  };
  return loadingInstance;
}
function produceLoading(props, context) {
  if (props === true) {
    fullScreenLoadingInstance = createLoading({
      fullscreen: true,
      loading: true,
      attach: "body",
      preventScrollThrough: true
    }, context);
    return fullScreenLoadingInstance;
  }
  if (props === false) {
    var _fullScreenLoadingIns;
    (_fullScreenLoadingIns = fullScreenLoadingInstance) === null || _fullScreenLoadingIns === void 0 || _fullScreenLoadingIns.hide();
    fullScreenLoadingInstance = null;
    return;
  }
  return createLoading(props);
}
var LoadingPlugin = produceLoading;
LoadingPlugin.install = function (app) {
  app.config.globalProperties.$loading = produceLoading;
  LoadingPlugin._context = app._context;
};

export { LoadingPlugin, LoadingPlugin as default };
//# sourceMappingURL=plugin.js.map
