/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { onMounted, onBeforeMount } from 'vue';
import { isString } from 'lodash-es';
import { o as on, c as off } from '../../_chunks/dep-16bcfabc.js';
import { C as CHECKED_CODE_REG } from '../../_chunks/dep-30c631d1.js';
import '../../_chunks/dep-fe23be6e.js';
import '../../_chunks/dep-81b01cae.js';

function useKeyboard(radioGroupRef, setInnerValue) {
  var checkRadioInGroup = function checkRadioInGroup(e) {
    var inputNode = e.target.querySelector("input");
    if (!inputNode) return;
    var isCheckedCode = CHECKED_CODE_REG.test(e.key) || CHECKED_CODE_REG.test(e.code);
    if (isCheckedCode) {
      e.preventDefault();
      var data = inputNode.dataset;
      if (inputNode.checked && data.allowUncheck) {
        setInnerValue(void 0, {
          e: e
        });
      } else {
        var value = !isNaN(Number(data.value)) ? Number(data.value) : data.value;
        value = isString(value) && {
          "true": true,
          "false": false
        }[value] || value;
        value = isString(value) && value[0] === "'" ? value.replace(/'/g, "") : value;
        setInnerValue(value, {
          e: e
        });
      }
    }
  };
  onMounted(function () {
    on(radioGroupRef.value, "keydown", checkRadioInGroup);
  });
  onBeforeMount(function () {
    off(radioGroupRef.value, "keydown", checkRadioInGroup);
  });
}

export { useKeyboard };
//# sourceMappingURL=useKeyboard.js.map
