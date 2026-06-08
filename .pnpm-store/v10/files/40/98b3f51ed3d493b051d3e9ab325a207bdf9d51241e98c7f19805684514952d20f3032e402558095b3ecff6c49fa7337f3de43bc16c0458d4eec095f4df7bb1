/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import _slicedToArray from '@babel/runtime/helpers/slicedToArray';
import { ref, watch } from 'vue';
import { g as getFileUrlByFileRaw } from './dep-7d14e543.js';

function useImagePreviewUrl(imgUrl) {
  var previewUrl = ref("");
  watch([imgUrl], function (_ref, _ref2) {
    var _ref3 = _slicedToArray(_ref, 1),
      imgUrl2 = _ref3[0];
    var _ref4 = _slicedToArray(_ref2, 1),
      preImgUrl = _ref4[0];
    if (preImgUrl === imgUrl2) return;
    if (typeof imgUrl2 === "string") {
      previewUrl.value = imgUrl2;
      return;
    }
    getFileUrlByFileRaw(imgUrl2).then(function (url) {
      previewUrl.value = url;
    });
  }, {
    immediate: true
  });
  return {
    previewUrl: previewUrl
  };
}

export { useImagePreviewUrl as u };
//# sourceMappingURL=dep-d9f4e50e.js.map
