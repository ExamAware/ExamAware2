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
var dom = require('../../_chunks/dep-06276759.js');
require('../../config-provider/hooks/useConfig.js');
require('@babel/runtime/helpers/slicedToArray');
require('../../_chunks/dep-cc66acf1.js');
var index = require('../../_chunks/dep-5d4742f2.js');
require('@babel/runtime/helpers/defineProperty');
require('../../_chunks/dep-953a77eb.js');
require('../../_chunks/dep-8abdfb41.js');
require('../../_chunks/dep-48f60c78.js');
require('../../_chunks/dep-b3b464e8.js');
require('../../_chunks/dep-0813861e.js');
require('../../_chunks/dep-a55e8a08.js');
require('../../_chunks/dep-87589faa.js');
require('../../_chunks/dep-05f89f0d.js');
require('../../_chunks/dep-5d7e2375.js');
require('../../_chunks/dep-94a7dc2d.js');
require('dayjs');
require('../../_chunks/dep-92e23f17.js');
require('../../_chunks/dep-0ff616fe.js');
require('../../_chunks/dep-5f52cd42.js');
require('../../_chunks/dep-f57bcb19.js');
require('../../_chunks/dep-dc4bbc14.js');
require('../../_chunks/dep-e27ea667.js');
require('../../_chunks/dep-165ca38a.js');
require('../../_chunks/dep-32412d92.js');
require('../../_chunks/dep-a8a3d718.js');
require('../../_chunks/dep-54e566d9.js');
require('../../_chunks/dep-591a72de.js');
require('../../_chunks/dep-8adeee89.js');
require('../../_chunks/dep-4d2ef282.js');
require('../../_chunks/dep-929933ce.js');
require('../../_chunks/dep-6b1f0ef8.js');
require('@babel/runtime/helpers/createClass');
require('@babel/runtime/helpers/classCallCheck');

var calcSize = function calcSize(width) {
  var size = "xs";
  if (width < 768) {
    size = "xs";
  } else if (width >= 768 && width < 992) {
    size = "sm";
  } else if (width >= 992 && width < 1200) {
    size = "md";
  } else if (width >= 1200 && width < 1400) {
    size = "lg";
  } else if (width >= 1400 && width < 1880) {
    size = "xl";
  } else {
    size = "xxl";
  }
  return size;
};

function useRowSize() {
  var size = Vue.ref(calcSize(dom.isServer ? 0 : window.innerWidth));
  var updateSize = function updateSize() {
    size.value = calcSize(dom.isServer ? 0 : window.innerWidth);
  };
  index.useListener("resize", updateSize);
  return size;
}

exports.useRowSize = useRowSize;
//# sourceMappingURL=index.js.map
