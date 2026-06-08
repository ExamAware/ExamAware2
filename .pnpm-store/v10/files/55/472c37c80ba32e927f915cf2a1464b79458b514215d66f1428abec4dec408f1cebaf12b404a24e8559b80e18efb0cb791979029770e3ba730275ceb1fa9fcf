/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Vue = require('vue');
var _toConsumableArray = require('@babel/runtime/helpers/toConsumableArray');
var log = require('../../_chunks/dep-733b2b51.js');
var utils = require('../../_chunks/dep-ccada3ec.js');
var slider_sliderMark = require('../slider-mark.js');
var isArray = require('../../_chunks/dep-87589faa.js');
var cloneDeep = require('../../_chunks/dep-8adeee89.js');
require('../../_chunks/dep-a55e8a08.js');
require('../../_chunks/dep-b3b464e8.js');
require('@babel/runtime/helpers/typeof');
require('../../_chunks/dep-05f89f0d.js');
require('../../_chunks/dep-953a77eb.js');
require('../../_chunks/dep-8abdfb41.js');
require('../../_chunks/dep-ecaaae91.js');
require('../../config-provider/hooks/useConfig.js');
require('../../_chunks/dep-5d7e2375.js');
require('../../_chunks/dep-94a7dc2d.js');
require('dayjs');
require('../../_chunks/dep-92e23f17.js');
require('../../_chunks/dep-0ff616fe.js');
require('../../_chunks/dep-5f52cd42.js');
require('../../_chunks/dep-48f60c78.js');
require('../../_chunks/dep-0813861e.js');
require('../../_chunks/dep-f57bcb19.js');
require('../../_chunks/dep-dc4bbc14.js');
require('../../_chunks/dep-e27ea667.js');
require('../../_chunks/dep-165ca38a.js');
require('../../_chunks/dep-32412d92.js');
require('../../_chunks/dep-a8a3d718.js');
require('../../_chunks/dep-54e566d9.js');
require('../../_chunks/dep-591a72de.js');
require('@babel/runtime/helpers/slicedToArray');
require('../../_chunks/dep-4d2ef282.js');
require('../../_chunks/dep-929933ce.js');
require('../../_chunks/dep-6b1f0ef8.js');
require('../../_chunks/dep-cc66acf1.js');
require('@babel/runtime/helpers/createClass');
require('@babel/runtime/helpers/classCallCheck');
require('@babel/runtime/helpers/defineProperty');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _toConsumableArray__default = /*#__PURE__*/_interopDefaultLegacy(_toConsumableArray);

var useSliderMark = function useSliderMark(config) {
  var name = config.value.prefixName;
  var markList = Vue.computed(function () {
    var markProps = config.value;
    if (!markProps.marks) {
      return [];
    }
    var legalMarks = [];
    if (isArray.isArray(markProps.marks)) {
      var marksList = cloneDeep.cloneDeep(markProps.marks).sort(function (a, b) {
        return a - b;
      });
      var maxLimit = Math.max.apply(Math, _toConsumableArray__default["default"](marksList).concat([markProps.max]));
      var minLimit = Math.min.apply(Math, _toConsumableArray__default["default"](marksList).concat([markProps.min]));
      if (minLimit < markProps.min) {
        log.log.errorOnce("TSlider", "marks min value should >= props min");
      }
      if (maxLimit > markProps.max) {
        log.log.errorOnce("TSlider", "marks max value should <= props max");
      }
      marksList.forEach(function (item) {
        legalMarks.push({
          point: item,
          position: (item - minLimit) / (maxLimit - minLimit) * 100,
          mark: item
        });
      });
    } else {
      Object.keys(markProps.marks).map(parseFloat).sort(function (a, b) {
        return a - b;
      }).filter(function (point) {
        return point <= markProps.max && point >= markProps.min;
      }).forEach(function (point) {
        var item = {
          point: point,
          position: (point - markProps.min) * 100 / (markProps.max - markProps.min),
          mark: markProps.marks[point]
        };
        legalMarks.push(item);
      });
    }
    return legalMarks;
  });
  var renderMask = function renderMask(onChangeFn) {
    if (!markList.value.length) return null;
    return Vue.createVNode("div", null, [Vue.createVNode("div", {
      "class": "".concat(name, "__stops")
    }, [markList.value.map(function (item, index) {
      if (item.position === 0 || item.position === 100) return null;
      return Vue.createVNode("div", {
        "class": "".concat(name, "__stop ").concat(name, "__mark-stop"),
        "style": utils.getStopStyle(item.position, config.value.vertical),
        "key": index
      }, null);
    })]), Vue.createVNode("div", {
      "class": "".concat(name, "__mark")
    }, [markList.value.map(function (item, key) {
      return Vue.createVNode(slider_sliderMark["default"], {
        "mark": item.mark,
        "point": item.point,
        "key": key,
        "style": utils.getStopStyle(item.position, config.value.vertical),
        "onClickMarkPoint": onChangeFn
      }, null);
    })])]);
  };
  return renderMask;
};

exports.useSliderMark = useSliderMark;
//# sourceMappingURL=useSliderMark.js.map
