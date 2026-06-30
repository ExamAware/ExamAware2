/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { defineComponent, computed, createVNode } from 'vue';
import { isString, escapeRegExp } from 'lodash-es';
import '@babel/runtime/helpers/toConsumableArray';
import '@babel/runtime/helpers/typeof';
import '../../_chunks/dep-fe23be6e.js';
import { u as usePrefixClass } from '../../_chunks/dep-9e6d8a78.js';
import '@babel/runtime/helpers/slicedToArray';
import '../../_chunks/dep-880d05b9.js';
import '@babel/runtime/helpers/defineProperty';
import '../../_chunks/dep-81b01cae.js';
import '../../config-provider/hooks/useConfig.js';
import '../../config-provider/utils/context.js';
import '../../_chunks/dep-938cd955.js';
import 'dayjs';
import '@babel/runtime/helpers/createClass';
import '@babel/runtime/helpers/classCallCheck';

var _HighlightOption = defineComponent({
  name: "HighlightOption",
  props: {
    content: String,
    keyword: String
  },
  setup: function setup(props) {
    var classPrefix = usePrefixClass();
    var words = computed(function () {
      var _content$match;
      var content = props.content,
        keyword = props.keyword;
      if (!content) return {
        list: []
      };
      if (!isString(content) || !keyword) return {
        list: [content]
      };
      var regExp = new RegExp(escapeRegExp(keyword), "i");
      var splitKeyword = (_content$match = content.match(regExp)) === null || _content$match === void 0 ? void 0 : _content$match[0];
      return {
        list: content.split(splitKeyword),
        keyword: splitKeyword
      };
    });
    return function () {
      var _words$value = words.value,
        list = _words$value.list,
        keyword = _words$value.keyword;
      return createVNode("div", {
        "class": "".concat(classPrefix.value, "-select-option__highlight-item")
      }, [list.map(function (item, index) {
        if (!index) return item;
        return [createVNode("b", {
          "class": "".concat(classPrefix.value, "-is-highlight"),
          "key": item + keyword
        }, [keyword]), item];
      })]);
    };
  }
});

export { _HighlightOption as default };
//# sourceMappingURL=highlight-option.js.map
