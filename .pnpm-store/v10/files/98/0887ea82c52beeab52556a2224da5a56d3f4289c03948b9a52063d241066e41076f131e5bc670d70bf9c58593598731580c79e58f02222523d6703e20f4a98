/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

var _slicedToArray = require('@babel/runtime/helpers/slicedToArray');
var Vue = require('vue');
var utils = require('./dep-e7678f7a.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _slicedToArray__default = /*#__PURE__*/_interopDefaultLegacy(_slicedToArray);

function useImagePreviewUrl(imgUrl) {
  var previewUrl = Vue.ref("");
  Vue.watch([imgUrl], function (_ref, _ref2) {
    var _ref3 = _slicedToArray__default["default"](_ref, 1),
      imgUrl2 = _ref3[0];
    var _ref4 = _slicedToArray__default["default"](_ref2, 1),
      preImgUrl = _ref4[0];
    if (preImgUrl === imgUrl2) return;
    if (typeof imgUrl2 === "string") {
      previewUrl.value = imgUrl2;
      return;
    }
    utils.getFileUrlByFileRaw(imgUrl2).then(function (url) {
      previewUrl.value = url;
    });
  }, {
    immediate: true
  });
  return {
    previewUrl: previewUrl
  };
}

exports.useImagePreviewUrl = useImagePreviewUrl;
//# sourceMappingURL=dep-f617290f.js.map
