/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Vue = require('vue');
var dom = require('../../_chunks/dep-06276759.js');
var common = require('../../_chunks/dep-6280a7f6.js');
var isString = require('../../_chunks/dep-a55e8a08.js');
require('../../_chunks/dep-953a77eb.js');
require('../../_chunks/dep-8abdfb41.js');
require('../../_chunks/dep-48f60c78.js');
require('../../_chunks/dep-b3b464e8.js');
require('@babel/runtime/helpers/typeof');
require('../../_chunks/dep-0813861e.js');
require('../../_chunks/dep-87589faa.js');
require('../../_chunks/dep-05f89f0d.js');

function useKeyboard(radioGroupRef, setInnerValue) {
  var checkRadioInGroup = function checkRadioInGroup(e) {
    var inputNode = e.target.querySelector("input");
    if (!inputNode) return;
    var isCheckedCode = common.CHECKED_CODE_REG.test(e.key) || common.CHECKED_CODE_REG.test(e.code);
    if (isCheckedCode) {
      e.preventDefault();
      var data = inputNode.dataset;
      if (inputNode.checked && data.allowUncheck) {
        setInnerValue(void 0, {
          e: e
        });
      } else {
        var value = !isNaN(Number(data.value)) ? Number(data.value) : data.value;
        value = isString.isString(value) && {
          "true": true,
          "false": false
        }[value] || value;
        value = isString.isString(value) && value[0] === "'" ? value.replace(/'/g, "") : value;
        setInnerValue(value, {
          e: e
        });
      }
    }
  };
  Vue.onMounted(function () {
    dom.on(radioGroupRef.value, "keydown", checkRadioInGroup);
  });
  Vue.onBeforeMount(function () {
    dom.off(radioGroupRef.value, "keydown", checkRadioInGroup);
  });
}

exports.useKeyboard = useKeyboard;
//# sourceMappingURL=useKeyboard.js.map
