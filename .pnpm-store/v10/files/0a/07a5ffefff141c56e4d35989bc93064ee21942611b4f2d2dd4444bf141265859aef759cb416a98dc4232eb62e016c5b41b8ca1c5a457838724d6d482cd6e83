/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { computed, createVNode } from 'vue';
import { _ as _defineProperty } from '../../_chunks/dep-1dacc319.mjs';
import { isString } from 'lodash-es';
import { a as useTNodeJSX } from '../../_chunks/dep-7673347f.mjs';
import { Loading } from '../../loading/index.mjs';
import useClassName from './useClassName.mjs';
import { useConfig } from '../../config-provider/hooks/useConfig.mjs';
import '../../_chunks/dep-257428bc.mjs';
import '../../_chunks/dep-00b4e06a.mjs';
import '../../_chunks/dep-9f459d8b.mjs';
import '../../_chunks/dep-51a43106.mjs';
import '../../_chunks/dep-fe644854.mjs';
import '../../_chunks/dep-22ebd6af.mjs';
import '../../_chunks/dep-9003fde5.mjs';
import '../../_chunks/dep-cdd448ec.mjs';
import '../../_chunks/dep-97ecacde.mjs';
import '../../config-provider/utils/context.mjs';
import '../../_chunks/dep-a4c09318.mjs';
import '../../_chunks/dep-ffb85102.mjs';
import '../../_chunks/dep-ad588525.mjs';
import '../../_chunks/dep-84fd47b3.mjs';
import '../../_chunks/dep-d36c4a3f.mjs';
import '../../loading/directive.mjs';
import '../../loading/plugin.mjs';
import '../../loading/loading.mjs';
import '../../loading/icon/gradient.mjs';
import '../../_chunks/dep-0cde7579.mjs';
import '../../_chunks/dep-0dcc778a.mjs';
import '../../loading/props.mjs';
import './style/css.mjs';

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
//# sourceMappingURL=useAsyncLoading.mjs.map
