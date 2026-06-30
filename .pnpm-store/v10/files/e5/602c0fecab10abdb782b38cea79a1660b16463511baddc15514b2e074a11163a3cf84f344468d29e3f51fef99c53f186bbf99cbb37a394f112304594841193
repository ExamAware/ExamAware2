/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { defineComponent, reactive, h, createVNode, render } from 'vue';
import { merge } from 'lodash-es';
import _Loading from './loading.mjs';
import { u as usePrefixClass } from '../_chunks/dep-7673347f.mjs';
import { g as getAttach, a as addClass, r as removeClass } from '../_chunks/dep-51a43106.mjs';
import '../_chunks/dep-9003fde5.mjs';
import '../_chunks/dep-9f459d8b.mjs';
import '../_chunks/dep-1dacc319.mjs';
import '../_chunks/dep-257428bc.mjs';
import './icon/gradient.mjs';
import '../_chunks/dep-0cde7579.mjs';
import '../_chunks/dep-00b4e06a.mjs';
import '../_chunks/dep-0dcc778a.mjs';
import './props.mjs';
import '../config-provider/hooks/useConfig.mjs';
import '../config-provider/utils/context.mjs';
import '../_chunks/dep-a4c09318.mjs';
import '../_chunks/dep-fe644854.mjs';
import '../_chunks/dep-ffb85102.mjs';
import '../_chunks/dep-ad588525.mjs';
import '../_chunks/dep-22ebd6af.mjs';
import '../_chunks/dep-cdd448ec.mjs';
import '../_chunks/dep-97ecacde.mjs';
import '../_chunks/dep-84fd47b3.mjs';
import '../_chunks/dep-d36c4a3f.mjs';

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
//# sourceMappingURL=plugin.mjs.map
