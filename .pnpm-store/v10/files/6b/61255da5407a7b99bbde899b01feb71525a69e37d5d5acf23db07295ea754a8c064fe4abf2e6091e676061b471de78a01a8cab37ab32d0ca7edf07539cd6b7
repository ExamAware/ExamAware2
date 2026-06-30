/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Vue = require('vue');
var _defineProperty = require('@babel/runtime/helpers/defineProperty');
require('@babel/runtime/helpers/toConsumableArray');
require('@babel/runtime/helpers/typeof');
require('../../_chunks/dep-953a77eb.js');
var index = require('../../_chunks/dep-47c460dd.js');
var configProvider_hooks_useConfig = require('../../config-provider/hooks/useConfig.js');
require('@babel/runtime/helpers/slicedToArray');
require('../../_chunks/dep-cc66acf1.js');
var loading_index = require('../../loading/index.js');
var table_hooks_useClassName = require('./useClassName.js');
var isString = require('../../_chunks/dep-a55e8a08.js');
require('../../_chunks/dep-8abdfb41.js');
require('../../_chunks/dep-06276759.js');
require('../../_chunks/dep-48f60c78.js');
require('../../_chunks/dep-b3b464e8.js');
require('../../_chunks/dep-0813861e.js');
require('../../_chunks/dep-4fa46641.js');
require('../../_chunks/dep-87589faa.js');
require('../../_chunks/dep-422dd97f.js');
require('../../_chunks/dep-71fa6bfc.js');
require('../../_chunks/dep-80a478d7.js');
require('../../_chunks/dep-05f89f0d.js');
require('../../_chunks/dep-427dabac.js');
require('../../_chunks/dep-72c4cc44.js');
require('../../_chunks/dep-ee355a9a.js');
require('../../_chunks/dep-23f77e26.js');
require('../../_chunks/dep-5d7e2375.js');
require('../../_chunks/dep-94a7dc2d.js');
require('dayjs');
require('../../_chunks/dep-92e23f17.js');
require('../../_chunks/dep-0ff616fe.js');
require('../../_chunks/dep-5f52cd42.js');
require('../../_chunks/dep-f57bcb19.js');
require('../../_chunks/dep-dc4bbc14.js');
require('../../_chunks/dep-e27ea667.js');
require('../../_chunks/dep-165ca38a.js');
require('../../_chunks/dep-32412d92.js');
require('../../_chunks/dep-a8a3d718.js');
require('../../_chunks/dep-54e566d9.js');
require('../../_chunks/dep-591a72de.js');
require('../../_chunks/dep-8adeee89.js');
require('../../_chunks/dep-4d2ef282.js');
require('../../_chunks/dep-929933ce.js');
require('../../_chunks/dep-6b1f0ef8.js');
require('@babel/runtime/helpers/createClass');
require('@babel/runtime/helpers/classCallCheck');
require('../../_chunks/dep-95261778.js');
require('../../loading/plugin.js');
require('../../_chunks/dep-237ed01f.js');
require('../../loading/icon/gradient.js');
require('../../_chunks/dep-ecaaae91.js');
require('../../_chunks/dep-c3dee00a.js');
require('../../_chunks/dep-55c70201.js');
require('@babel/runtime/helpers/objectWithoutProperties');
require('../../_chunks/dep-fd5a369e.js');
require('../../_chunks/dep-4ccaead1.js');
require('../../_chunks/dep-990979bb.js');
require('../../_chunks/dep-8382953f.js');
require('../../loading/props.js');
require('../../_chunks/dep-9cc695aa.js');
require('../../_chunks/dep-48de95ee.js');
require('../../_chunks/dep-8b33876c.js');
require('../../_chunks/dep-912c9727.js');
require('../../_chunks/dep-0b8a4740.js');
require('../../_chunks/dep-cd8cfdc0.js');
require('../../_chunks/dep-ac11336c.js');
require('../../_chunks/dep-9ce6873a.js');
require('../../_chunks/dep-779f6290.js');
require('../../_chunks/dep-d62a674d.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _defineProperty__default = /*#__PURE__*/_interopDefaultLegacy(_defineProperty);

function useAsyncLoading(props) {
  var renderTNode = index.useTNodeJSX();
  var _useConfig = configProvider_hooks_useConfig.useConfig("table", props.locale),
    globalConfig = _useConfig.globalConfig;
  var _useClassName = table_hooks_useClassName["default"](),
    isLoadingClass = _useClassName.isLoadingClass,
    isLoadMoreClass = _useClassName.isLoadMoreClass,
    asyncLoadingClass = _useClassName.asyncLoadingClass;
  var classes = Vue.computed(function () {
    return [asyncLoadingClass, _defineProperty__default["default"](_defineProperty__default["default"]({}, isLoadingClass, props.asyncLoading === "loading"), isLoadMoreClass, props.asyncLoading === "load-more")];
  });
  function onLoadClick() {
    var _props$onAsyncLoading;
    if (!isString.isString(props.asyncLoading)) return;
    (_props$onAsyncLoading = props.onAsyncLoadingClick) === null || _props$onAsyncLoading === void 0 || _props$onAsyncLoading.call(props, {
      status: props.asyncLoading
    });
  }
  function renderAsyncLoading() {
    var asyncLoadingNode = renderTNode("asyncLoading");
    if (isString.isString(asyncLoadingNode)) {
      var asyncLoading = props.asyncLoading;
      var loadingText = {
        "load-more": globalConfig.value.loadingMoreText,
        loading: globalConfig.value.loadingText
      }[String(asyncLoading)];
      return Vue.createVNode("div", {
        "class": classes.value,
        "onClick": onLoadClick
      }, [Vue.createVNode(loading_index.Loading, {
        "indicator": asyncLoading === "loading",
        "loading": !!asyncLoading,
        "size": "small",
        "text": loadingText
      }, null)]);
    }
    if (![null, false, void 0].includes(asyncLoadingNode)) {
      return Vue.createVNode("div", {
        "class": classes.value,
        "onClick": onLoadClick
      }, [asyncLoadingNode]);
    }
    return null;
  }
  return {
    renderAsyncLoading: renderAsyncLoading
  };
}

exports["default"] = useAsyncLoading;
//# sourceMappingURL=useAsyncLoading.js.map
