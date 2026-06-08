/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

var Vue = require('vue');
require('@babel/runtime/helpers/toConsumableArray');
require('@babel/runtime/helpers/typeof');
require('./dep-953a77eb.js');
var index = require('./dep-ecaaae91.js');
require('@babel/runtime/helpers/slicedToArray');
require('./dep-cc66acf1.js');
require('@babel/runtime/helpers/defineProperty');
var isString = require('./dep-a55e8a08.js');
var toString = require('./dep-71fa6bfc.js');

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g,
  reHasRegExpChar = RegExp(reRegExpChar.source);

/**
 * Escapes the `RegExp` special characters "^", "$", "\", ".", "*", "+",
 * "?", "(", ")", "[", "]", "{", "}", and "|" in `string`.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to escape.
 * @returns {string} Returns the escaped string.
 * @example
 *
 * _.escapeRegExp('[lodash](https://lodash.com/)');
 * // => '\[lodash\]\(https://lodash\.com/\)'
 */
function escapeRegExp(string) {
  string = toString.toString(string);
  return string && reHasRegExpChar.test(string) ? string.replace(reRegExpChar, '\\$&') : string;
}

var _HighlightOption = Vue.defineComponent({
  name: "HighlightOption",
  props: {
    content: String,
    keyword: String
  },
  setup: function setup(props) {
    var classPrefix = index.usePrefixClass();
    var words = Vue.computed(function () {
      var _content$match;
      var content = props.content,
        keyword = props.keyword;
      if (!content) return {
        list: []
      };
      if (!isString.isString(content) || !keyword) return {
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
      return Vue.createVNode("div", {
        "class": "".concat(classPrefix.value, "-select-option__highlight-item")
      }, [list.map(function (item, index) {
        if (!index) return item;
        return [Vue.createVNode("b", {
          "class": "".concat(classPrefix.value, "-is-highlight"),
          "key": item + keyword
        }, [keyword]), item];
      })]);
    };
  }
});

exports._HighlightOption = _HighlightOption;
exports.escapeRegExp = escapeRegExp;
//# sourceMappingURL=dep-ecb34b89.js.map
