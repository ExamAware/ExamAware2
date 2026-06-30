/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { computed, createVNode } from 'vue';
import _defineProperty from '@babel/runtime/helpers/defineProperty';
import { isString } from 'lodash-es';
import '@babel/runtime/helpers/toConsumableArray';
import '@babel/runtime/helpers/typeof';
import '../../_chunks/dep-fe23be6e.js';
import { u as useTNodeJSX } from '../../_chunks/dep-2accc95a.js';
import { useConfig } from '../../config-provider/hooks/useConfig.js';
import '@babel/runtime/helpers/slicedToArray';
import '../../_chunks/dep-880d05b9.js';
import { Loading } from '../../loading/index.js';
import useClassName from './useClassName.js';
import '../../_chunks/dep-81b01cae.js';
import '../../_chunks/dep-16bcfabc.js';
import '../../_chunks/dep-fb805f69.js';
import '../../config-provider/utils/context.js';
import '../../_chunks/dep-938cd955.js';
import 'dayjs';
import '@babel/runtime/helpers/createClass';
import '@babel/runtime/helpers/classCallCheck';
import '../../loading/directive.js';
import '../../loading/plugin.js';
import '../../_chunks/dep-ee693784.js';
import '../../loading/icon/gradient.js';
import '../../_chunks/dep-9e6d8a78.js';
import '../../_chunks/dep-2ea19dca.js';
import '../../_chunks/dep-80a99546.js';
import '@babel/runtime/helpers/objectWithoutProperties';
import '../../_chunks/dep-4f8b6591.js';
import '../../loading/props.js';
import '../../_chunks/dep-664b8b22.js';

function useAsyncLoading(props) {
  var renderTNode = useTNodeJSX();
  var _useConfig = useConfig("table", props.locale),
    globalConfig = _useConfig.globalConfig;
  var _useClassName = useClassName(),
    isLoadingClass = _useClassName.isLoadingClass,
    isLoadMoreClass = _useClassName.isLoadMoreClass,
    asyncLoadingClass = _useClassName.asyncLoadingClass;
  var classes = computed(function () {
    return [asyncLoadingClass, _defineProperty(_defineProperty({}, isLoadingClass, props.asyncLoading === "loading"), isLoadMoreClass, props.asyncLoading === "load-more")];
  });
  function onLoadClick() {
    var _props$onAsyncLoading;
    if (!isString(props.asyncLoading)) return;
    (_props$onAsyncLoading = props.onAsyncLoadingClick) === null || _props$onAsyncLoading === void 0 || _props$onAsyncLoading.call(props, {
      status: props.asyncLoading
    });
  }
  function renderAsyncLoading() {
    var asyncLoadingNode = renderTNode("asyncLoading");
    if (isString(asyncLoadingNode)) {
      var asyncLoading = props.asyncLoading;
      var loadingText = {
        "load-more": globalConfig.value.loadingMoreText,
        loading: globalConfig.value.loadingText
      }[String(asyncLoading)];
      return createVNode("div", {
        "class": classes.value,
        "onClick": onLoadClick
      }, [createVNode(Loading, {
        "indicator": asyncLoading === "loading",
        "loading": !!asyncLoading,
        "size": "small",
        "text": loadingText
      }, null)]);
    }
    if (![null, false, void 0].includes(asyncLoadingNode)) {
      return createVNode("div", {
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

export { useAsyncLoading as default };
//# sourceMappingURL=useAsyncLoading.js.map
