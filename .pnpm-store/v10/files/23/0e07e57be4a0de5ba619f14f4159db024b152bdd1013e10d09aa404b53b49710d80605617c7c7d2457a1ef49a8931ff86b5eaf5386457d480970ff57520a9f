/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { defineComponent, computed, createVNode } from 'vue';
import { u as usePrefixClass } from '../../_chunks/dep-7673347f.mjs';
import { isString, escapeRegExp } from 'lodash-es';
import '../../_chunks/dep-00b4e06a.mjs';
import '../../_chunks/dep-9f459d8b.mjs';
import '../../_chunks/dep-257428bc.mjs';
import '../../_chunks/dep-51a43106.mjs';
import '../../_chunks/dep-fe644854.mjs';
import '../../config-provider/hooks/useConfig.mjs';
import '../../config-provider/utils/context.mjs';
import '../../_chunks/dep-a4c09318.mjs';
import '../../_chunks/dep-ffb85102.mjs';
import '../../_chunks/dep-ad588525.mjs';
import '../../_chunks/dep-9003fde5.mjs';
import '../../_chunks/dep-22ebd6af.mjs';
import '../../_chunks/dep-cdd448ec.mjs';
import '../../_chunks/dep-97ecacde.mjs';
import '../../_chunks/dep-84fd47b3.mjs';
import '../../_chunks/dep-1dacc319.mjs';
import '../../_chunks/dep-d36c4a3f.mjs';

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
//# sourceMappingURL=highlight-option.mjs.map
