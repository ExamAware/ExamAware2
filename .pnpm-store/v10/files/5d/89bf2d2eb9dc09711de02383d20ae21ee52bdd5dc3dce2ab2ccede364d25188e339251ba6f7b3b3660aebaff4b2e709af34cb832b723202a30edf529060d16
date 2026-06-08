/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { defineComponent, computed, createVNode, isVNode } from 'vue';
import { isString } from 'lodash-es';
import '@babel/runtime/helpers/toConsumableArray';
import '@babel/runtime/helpers/typeof';
import '../_chunks/dep-fe23be6e.js';
import { u as useTNodeJSX } from '../_chunks/dep-2accc95a.js';
import { u as useCommonClassName } from '../_chunks/dep-4f8b6591.js';
import { u as usePrefixClass } from '../_chunks/dep-9e6d8a78.js';
import '@babel/runtime/helpers/slicedToArray';
import '../_chunks/dep-880d05b9.js';
import '@babel/runtime/helpers/defineProperty';
import { Loading } from '../loading/index.js';
import props from './props.js';
import '../_chunks/dep-81b01cae.js';
import '../_chunks/dep-16bcfabc.js';
import '../_chunks/dep-fb805f69.js';
import '../config-provider/hooks/useConfig.js';
import '../config-provider/utils/context.js';
import '../_chunks/dep-938cd955.js';
import 'dayjs';
import '@babel/runtime/helpers/createClass';
import '@babel/runtime/helpers/classCallCheck';
import '../loading/directive.js';
import '../loading/plugin.js';
import '../_chunks/dep-ee693784.js';
import '../loading/icon/gradient.js';
import '../_chunks/dep-2ea19dca.js';
import '../_chunks/dep-80a99546.js';
import '@babel/runtime/helpers/objectWithoutProperties';
import '../loading/props.js';
import '../_chunks/dep-664b8b22.js';
import 'tdesign-vue-next/esm/common/style/web/components/loading/_index.less';

function _isSlot(s) {
  return typeof s === 'function' || Object.prototype.toString.call(s) === '[object Object]' && !isVNode(s);
}
var _Card = defineComponent({
  name: "TCard",
  props: props,
  setup: function setup(props2, _ref) {
    var slots = _ref.slots;
    var renderTNodeJSX = useTNodeJSX();
    var COMPONENT_NAME = usePrefixClass("card");
    var _useCommonClassName = useCommonClassName(),
      SIZE = _useCommonClassName.SIZE;
    var baseCls = computed(function () {
      var defaultClass = [COMPONENT_NAME.value];
      if (props2.size === "small") defaultClass.push("".concat(SIZE.value[props2.size]));
      if (props2.bordered) defaultClass.push("".concat(COMPONENT_NAME.value, "--bordered"));
      if (props2.shadow) defaultClass.push("".concat(COMPONENT_NAME.value, "--shadow"));
      if (props2.hoverShadow) defaultClass.push("".concat(COMPONENT_NAME.value, "--shadow-hover"));
      return defaultClass;
    });
    var headerCls = computed(function () {
      return ["".concat(COMPONENT_NAME.value, "__header"), props2.headerBordered && "".concat(COMPONENT_NAME.value, "__title--bordered")];
    });
    var headerWrapperCls = usePrefixClass("card__header-wrapper");
    var headerAvatarCls = usePrefixClass("card__avatar");
    var headerTitleCls = usePrefixClass("card__title");
    var headerSubTitleCls = usePrefixClass("card__subtitle");
    var headerDescriptionCls = usePrefixClass("card__description");
    var actionsCls = usePrefixClass("card__actions");
    var bodyCls = usePrefixClass("card__body");
    var coverCls = usePrefixClass("card__cover");
    var footerCls = usePrefixClass("card__footer");
    var footerWrapperCls = usePrefixClass("card__footer-wrapper");
    var isPoster2 = computed(function () {
      return props2.theme === "poster2";
    });
    var showTitle = computed(function () {
      return props2.title || slots.title;
    });
    var showHeader = computed(function () {
      return props2.header || slots.header;
    });
    var showSubtitle = computed(function () {
      return props2.subtitle || slots.subtitle;
    });
    var showAvatar = computed(function () {
      return props2.avatar || slots.avatar;
    });
    var showDescription = computed(function () {
      return props2.description || slots.description;
    });
    var showStatus = computed(function () {
      return props2.status || slots.status;
    });
    var showActions = computed(function () {
      return props2.actions || slots.actions;
    });
    var showFooter = computed(function () {
      return props2.footer || slots.footer;
    });
    var showCover = computed(function () {
      return props2.cover || slots.cover;
    });
    var showLoading = computed(function () {
      return props2.loading || slots.loading;
    });
    var showContent = computed(function () {
      return props2.content || slots.content || props2["default"] || slots["default"];
    });
    var isHeaderRender = computed(function () {
      return showHeader.value || showTitle.value || showSubtitle.value || showDescription.value || showAvatar.value || showStatus.value && isPoster2.value || showActions.value && !isPoster2.value;
    });
    var isFooterRender = computed(function () {
      return showFooter.value || showActions.value && isPoster2.value;
    });
    var renderHeader = function renderHeader() {
      if (showHeader.value) return createVNode("div", {
        "class": [headerCls.value, props2.headerClassName],
        "style": props2.headerStyle
      }, [renderTNodeJSX("header")]);
      return createVNode("div", {
        "class": [headerCls.value, props2.headerClassName],
        "style": props2.headerStyle
      }, [createVNode("div", {
        "class": headerWrapperCls.value
      }, [showAvatar.value && createVNode("div", {
        "class": headerAvatarCls.value
      }, [renderTNodeJSX("avatar")]), createVNode("div", null, [showTitle.value && createVNode("div", {
        "class": headerTitleCls.value
      }, [renderTNodeJSX("title")]), showSubtitle.value && createVNode("div", {
        "class": headerSubTitleCls.value
      }, [renderTNodeJSX("subtitle")]), showDescription.value && createVNode("p", {
        "class": headerDescriptionCls.value
      }, [renderTNodeJSX("description")])])]), showActions.value && !isPoster2.value && createVNode("div", {
        "class": actionsCls.value
      }, [renderTNodeJSX("actions")]), showStatus.value && createVNode("div", {
        "class": actionsCls.value
      }, [renderTNodeJSX("status")])]);
    };
    var renderCover = function renderCover() {
      var textCover = isString(props2.cover);
      return createVNode("div", {
        "class": coverCls.value
      }, [textCover ? createVNode("img", {
        "src": props2.cover
      }, null) : renderTNodeJSX("cover")]);
    };
    return function () {
      var content = createVNode("div", {
        "class": baseCls.value
      }, [isHeaderRender.value ? renderHeader() : null, showCover.value ? renderCover() : null, showContent.value && createVNode("div", {
        "class": [bodyCls.value, props2.bodyClassName],
        "style": props2.bodyStyle
      }, [renderTNodeJSX("default") || renderTNodeJSX("content")]), isFooterRender.value && createVNode("div", {
        "class": [footerCls.value, props2.footerClassName],
        "style": props2.footerStyle
      }, [createVNode("div", {
        "class": footerWrapperCls.value
      }, [renderTNodeJSX("footer")]), showActions.value && isPoster2.value && createVNode("div", {
        "class": actionsCls.value
      }, [renderTNodeJSX("actions")])])]);
      if (showLoading.value) {
        return renderTNodeJSX("loading") || createVNode(Loading, props2.loadingProps, _isSlot(content) ? content : {
          "default": function _default() {
            return [content];
          }
        });
      }
      return content;
    };
  }
});

export { _Card as default };
//# sourceMappingURL=card.js.map
