/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { computed, createVNode } from 'vue';
import { _ as _toConsumableArray } from '../../_chunks/dep-00b4e06a.mjs';
import { isArray, cloneDeep } from 'lodash-es';
import { l as log } from '../../_chunks/dep-97ecacde.mjs';
import { g as getStopStyle } from '../../_chunks/dep-4e271ede.mjs';
import TSliderMark from '../slider-mark.mjs';
import '../../_chunks/dep-9f459d8b.mjs';
import '../../_chunks/dep-7673347f.mjs';
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
import '../../_chunks/dep-84fd47b3.mjs';
import '../../_chunks/dep-1dacc319.mjs';
import '../../_chunks/dep-d36c4a3f.mjs';

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
//# sourceMappingURL=useSliderMark.mjs.map
