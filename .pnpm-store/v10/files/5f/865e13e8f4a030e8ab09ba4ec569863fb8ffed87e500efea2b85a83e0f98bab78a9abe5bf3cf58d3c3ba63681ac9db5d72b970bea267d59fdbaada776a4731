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
var index = require('../_chunks/dep-47c460dd.js');
var index$2 = require('../_chunks/dep-8382953f.js');
var index$1 = require('../_chunks/dep-ecaaae91.js');
require('@babel/runtime/helpers/slicedToArray');
require('../_chunks/dep-cc66acf1.js');
require('@babel/runtime/helpers/defineProperty');
var loading_index = require('../loading/index.js');
var card_props = require('./props.js');
var isString = require('../_chunks/dep-a55e8a08.js');
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
require('../config-provider/hooks/useConfig.js');
require('../_chunks/dep-5d7e2375.js');
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
require('@babel/runtime/helpers/createClass');
require('@babel/runtime/helpers/classCallCheck');
require('../_chunks/dep-95261778.js');
require('../loading/plugin.js');
require('../_chunks/dep-237ed01f.js');
require('../loading/icon/gradient.js');
require('../_chunks/dep-c3dee00a.js');
require('../_chunks/dep-55c70201.js');
require('@babel/runtime/helpers/objectWithoutProperties');
require('../_chunks/dep-fd5a369e.js');
require('../_chunks/dep-4ccaead1.js');
require('../_chunks/dep-990979bb.js');
require('../loading/props.js');
require('../_chunks/dep-9cc695aa.js');
require('../_chunks/dep-48de95ee.js');
require('../_chunks/dep-8b33876c.js');
require('../_chunks/dep-912c9727.js');
require('../_chunks/dep-0b8a4740.js');
require('../_chunks/dep-cd8cfdc0.js');
require('../_chunks/dep-ac11336c.js');
require('../_chunks/dep-9ce6873a.js');
require('../_chunks/dep-779f6290.js');
require('../_chunks/dep-d62a674d.js');

function _isSlot(s) {
  return typeof s === 'function' || Object.prototype.toString.call(s) === '[object Object]' && !Vue.isVNode(s);
}
var _Card = Vue.defineComponent({
  name: "TCard",
  props: card_props["default"],
  setup: function setup(props2, _ref) {
    var slots = _ref.slots;
    var renderTNodeJSX = index.useTNodeJSX();
    var COMPONENT_NAME = index$1.usePrefixClass("card");
    var _useCommonClassName = index$2.useCommonClassName(),
      SIZE = _useCommonClassName.SIZE;
    var baseCls = Vue.computed(function () {
      var defaultClass = [COMPONENT_NAME.value];
      if (props2.size === "small") defaultClass.push("".concat(SIZE.value[props2.size]));
      if (props2.bordered) defaultClass.push("".concat(COMPONENT_NAME.value, "--bordered"));
      if (props2.shadow) defaultClass.push("".concat(COMPONENT_NAME.value, "--shadow"));
      if (props2.hoverShadow) defaultClass.push("".concat(COMPONENT_NAME.value, "--shadow-hover"));
      return defaultClass;
    });
    var headerCls = Vue.computed(function () {
      return ["".concat(COMPONENT_NAME.value, "__header"), props2.headerBordered && "".concat(COMPONENT_NAME.value, "__title--bordered")];
    });
    var headerWrapperCls = index$1.usePrefixClass("card__header-wrapper");
    var headerAvatarCls = index$1.usePrefixClass("card__avatar");
    var headerTitleCls = index$1.usePrefixClass("card__title");
    var headerSubTitleCls = index$1.usePrefixClass("card__subtitle");
    var headerDescriptionCls = index$1.usePrefixClass("card__description");
    var actionsCls = index$1.usePrefixClass("card__actions");
    var bodyCls = index$1.usePrefixClass("card__body");
    var coverCls = index$1.usePrefixClass("card__cover");
    var footerCls = index$1.usePrefixClass("card__footer");
    var footerWrapperCls = index$1.usePrefixClass("card__footer-wrapper");
    var isPoster2 = Vue.computed(function () {
      return props2.theme === "poster2";
    });
    var showTitle = Vue.computed(function () {
      return props2.title || slots.title;
    });
    var showHeader = Vue.computed(function () {
      return props2.header || slots.header;
    });
    var showSubtitle = Vue.computed(function () {
      return props2.subtitle || slots.subtitle;
    });
    var showAvatar = Vue.computed(function () {
      return props2.avatar || slots.avatar;
    });
    var showDescription = Vue.computed(function () {
      return props2.description || slots.description;
    });
    var showStatus = Vue.computed(function () {
      return props2.status || slots.status;
    });
    var showActions = Vue.computed(function () {
      return props2.actions || slots.actions;
    });
    var showFooter = Vue.computed(function () {
      return props2.footer || slots.footer;
    });
    var showCover = Vue.computed(function () {
      return props2.cover || slots.cover;
    });
    var showLoading = Vue.computed(function () {
      return props2.loading || slots.loading;
    });
    var showContent = Vue.computed(function () {
      return props2.content || slots.content || props2["default"] || slots["default"];
    });
    var isHeaderRender = Vue.computed(function () {
      return showHeader.value || showTitle.value || showSubtitle.value || showDescription.value || showAvatar.value || showStatus.value && isPoster2.value || showActions.value && !isPoster2.value;
    });
    var isFooterRender = Vue.computed(function () {
      return showFooter.value || showActions.value && isPoster2.value;
    });
    var renderHeader = function renderHeader() {
      if (showHeader.value) return Vue.createVNode("div", {
        "class": [headerCls.value, props2.headerClassName],
        "style": props2.headerStyle
      }, [renderTNodeJSX("header")]);
      return Vue.createVNode("div", {
        "class": [headerCls.value, props2.headerClassName],
        "style": props2.headerStyle
      }, [Vue.createVNode("div", {
        "class": headerWrapperCls.value
      }, [showAvatar.value && Vue.createVNode("div", {
        "class": headerAvatarCls.value
      }, [renderTNodeJSX("avatar")]), Vue.createVNode("div", null, [showTitle.value && Vue.createVNode("div", {
        "class": headerTitleCls.value
      }, [renderTNodeJSX("title")]), showSubtitle.value && Vue.createVNode("div", {
        "class": headerSubTitleCls.value
      }, [renderTNodeJSX("subtitle")]), showDescription.value && Vue.createVNode("p", {
        "class": headerDescriptionCls.value
      }, [renderTNodeJSX("description")])])]), showActions.value && !isPoster2.value && Vue.createVNode("div", {
        "class": actionsCls.value
      }, [renderTNodeJSX("actions")]), showStatus.value && Vue.createVNode("div", {
        "class": actionsCls.value
      }, [renderTNodeJSX("status")])]);
    };
    var renderCover = function renderCover() {
      var textCover = isString.isString(props2.cover);
      return Vue.createVNode("div", {
        "class": coverCls.value
      }, [textCover ? Vue.createVNode("img", {
        "src": props2.cover
      }, null) : renderTNodeJSX("cover")]);
    };
    return function () {
      var content = Vue.createVNode("div", {
        "class": baseCls.value
      }, [isHeaderRender.value ? renderHeader() : null, showCover.value ? renderCover() : null, showContent.value && Vue.createVNode("div", {
        "class": [bodyCls.value, props2.bodyClassName],
        "style": props2.bodyStyle
      }, [renderTNodeJSX("default") || renderTNodeJSX("content")]), isFooterRender.value && Vue.createVNode("div", {
        "class": [footerCls.value, props2.footerClassName],
        "style": props2.footerStyle
      }, [Vue.createVNode("div", {
        "class": footerWrapperCls.value
      }, [renderTNodeJSX("footer")]), showActions.value && isPoster2.value && Vue.createVNode("div", {
        "class": actionsCls.value
      }, [renderTNodeJSX("actions")])])]);
      if (showLoading.value) {
        return renderTNodeJSX("loading") || Vue.createVNode(loading_index.Loading, props2.loadingProps, _isSlot(content) ? content : {
          "default": function _default() {
            return [content];
          }
        });
      }
      return content;
    };
  }
});

exports["default"] = _Card;
//# sourceMappingURL=card.js.map
