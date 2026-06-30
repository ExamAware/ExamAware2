/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Vue = require('vue');
var loading_loading = require('../_chunks/dep-237ed01f.js');
require('@babel/runtime/helpers/toConsumableArray');
require('@babel/runtime/helpers/typeof');
var dom = require('../_chunks/dep-06276759.js');
var index = require('../_chunks/dep-ecaaae91.js');
require('@babel/runtime/helpers/slicedToArray');
require('../_chunks/dep-cc66acf1.js');
require('@babel/runtime/helpers/defineProperty');
var configProvider_utils_context = require('../_chunks/dep-5d7e2375.js');
require('./icon/gradient.js');
require('../_chunks/dep-953a77eb.js');
require('../_chunks/dep-8abdfb41.js');
require('../_chunks/dep-c3dee00a.js');
require('../_chunks/dep-55c70201.js');
require('@babel/runtime/helpers/objectWithoutProperties');
require('../_chunks/dep-fd5a369e.js');
require('../_chunks/dep-4ccaead1.js');
require('../_chunks/dep-a55e8a08.js');
require('../_chunks/dep-b3b464e8.js');
require('../_chunks/dep-87589faa.js');
require('../_chunks/dep-05f89f0d.js');
require('../_chunks/dep-990979bb.js');
require('../_chunks/dep-47c460dd.js');
require('../_chunks/dep-4fa46641.js');
require('../_chunks/dep-0813861e.js');
require('../_chunks/dep-422dd97f.js');
require('../_chunks/dep-71fa6bfc.js');
require('../_chunks/dep-80a478d7.js');
require('../_chunks/dep-427dabac.js');
require('../_chunks/dep-72c4cc44.js');
require('../_chunks/dep-ee355a9a.js');
require('../_chunks/dep-23f77e26.js');
require('../_chunks/dep-48f60c78.js');
require('../_chunks/dep-8382953f.js');
require('../config-provider/hooks/useConfig.js');
require('../_chunks/dep-8adeee89.js');
require('../_chunks/dep-92e23f17.js');
require('../_chunks/dep-0ff616fe.js');
require('../_chunks/dep-5f52cd42.js');
require('../_chunks/dep-f57bcb19.js');
require('../_chunks/dep-dc4bbc14.js');
require('../_chunks/dep-e27ea667.js');
require('../_chunks/dep-165ca38a.js');
require('../_chunks/dep-32412d92.js');
require('../_chunks/dep-a8a3d718.js');
require('../_chunks/dep-4d2ef282.js');
require('../_chunks/dep-929933ce.js');
require('../_chunks/dep-6b1f0ef8.js');
require('./props.js');
require('@babel/runtime/helpers/createClass');
require('@babel/runtime/helpers/classCallCheck');
require('../_chunks/dep-94a7dc2d.js');
require('dayjs');
require('../_chunks/dep-54e566d9.js');
require('../_chunks/dep-591a72de.js');

var fullScreenLoadingInstance = null;
function mergeDefaultProps(props) {
  var options = configProvider_utils_context.merge({
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
  var component = Vue.defineComponent({
    setup: function setup() {
      var loadingOptions = Vue.reactive(mergedProps);
      return function () {
        return Vue.h(loading_loading._Loading, loadingOptions);
      };
    }
  });
  var attach = dom.getAttach(mergedProps.fullscreen ? "body" : mergedProps.attach);
  var instance = Vue.createVNode(component);
  if (context !== null && context !== void 0 ? context : LoadingPlugin._context) {
    instance.appContext = context !== null && context !== void 0 ? context : LoadingPlugin._context;
  }
  var wrapper = document.createElement("div");
  Vue.render(instance, wrapper);
  var parentRelativeClass = index.usePrefixClass("loading__parent--relative").value;
  var lockClass = index.usePrefixClass("loading--lock");
  var lockFullscreen = mergedProps.preventScrollThrough && mergedProps.fullscreen;
  if (lockFullscreen) {
    dom.addClass(document.body, lockClass.value);
  }
  if (attach) {
    dom.addClass(attach, parentRelativeClass);
  } else {
    console.error("attach is not exist");
  }
  var loadingInstance = {
    hide: function hide() {
      dom.removeClass(attach, parentRelativeClass);
      dom.removeClass(document.body, lockClass.value);
      Vue.render(null, wrapper);
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

exports.LoadingPlugin = LoadingPlugin;
exports["default"] = LoadingPlugin;
//# sourceMappingURL=plugin.js.map
