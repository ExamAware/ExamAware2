/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { computed, createVNode } from 'vue';
import _toConsumableArray from '@babel/runtime/helpers/toConsumableArray';
import { isArray, cloneDeep } from 'lodash-es';
import { l as log } from '../../_chunks/dep-8295e674.js';
import { g as getStopStyle } from '../../_chunks/dep-0240b8a6.js';
import TSliderMark from '../slider-mark.js';
import '@babel/runtime/helpers/typeof';
import '../../_chunks/dep-fe23be6e.js';
import '../../_chunks/dep-81b01cae.js';
import '../../_chunks/dep-9e6d8a78.js';
import '../../config-provider/hooks/useConfig.js';
import '../../config-provider/utils/context.js';
import '../../_chunks/dep-938cd955.js';
import 'dayjs';
import '@babel/runtime/helpers/slicedToArray';
import '../../_chunks/dep-880d05b9.js';
import '@babel/runtime/helpers/createClass';
import '@babel/runtime/helpers/classCallCheck';
import '@babel/runtime/helpers/defineProperty';

var useSliderMark = function useSliderMark(config) {
  var name = config.value.prefixName;
  var markList = computed(function () {
    var markProps = config.value;
    if (!markProps.marks) {
      return [];
    }
    var legalMarks = [];
    if (isArray(markProps.marks)) {
      var marksList = cloneDeep(markProps.marks).sort(function (a, b) {
        return a - b;
      });
      var maxLimit = Math.max.apply(Math, _toConsumableArray(marksList).concat([markProps.max]));
      var minLimit = Math.min.apply(Math, _toConsumableArray(marksList).concat([markProps.min]));
      if (minLimit < markProps.min) {
        log.errorOnce("TSlider", "marks min value should >= props min");
      }
      if (maxLimit > markProps.max) {
        log.errorOnce("TSlider", "marks max value should <= props max");
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
    return createVNode("div", null, [createVNode("div", {
      "class": "".concat(name, "__stops")
    }, [markList.value.map(function (item, index) {
      if (item.position === 0 || item.position === 100) return null;
      return createVNode("div", {
        "class": "".concat(name, "__stop ").concat(name, "__mark-stop"),
        "style": getStopStyle(item.position, config.value.vertical),
        "key": index
      }, null);
    })]), createVNode("div", {
      "class": "".concat(name, "__mark")
    }, [markList.value.map(function (item, key) {
      return createVNode(TSliderMark, {
        "mark": item.mark,
        "point": item.point,
        "key": key,
        "style": getStopStyle(item.position, config.value.vertical),
        "onClickMarkPoint": onChangeFn
      }, null);
    })])]);
  };
  return renderMask;
};

export { useSliderMark };
//# sourceMappingURL=useSliderMark.js.map
