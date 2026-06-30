/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { isFunction } from 'lodash-es';
import { ref, toRefs, onMounted, onUnmounted } from 'vue';

function useTagScroll(props) {
  var tagInputRef = ref();
  var _toRefs = toRefs(props),
    excessTagsDisplayType = _toRefs.excessTagsDisplayType,
    readonly = _toRefs.readonly,
    disabled = _toRefs.disabled;
  var scrollDistance = ref(0);
  var scrollElement = ref();
  var mouseEnterTimer = ref();
  var isScrollable = ref(false);
  var updateScrollElement = function updateScrollElement(element) {
    var inputElement = element.children[0];
    scrollElement.value = inputElement;
  };
  var updateScrollDistance = function updateScrollDistance() {
    scrollDistance.value = scrollElement.value.scrollWidth - scrollElement.value.clientWidth;
  };
  var scrollTo = function scrollTo(distance) {
    var _scrollElement$value;
    if (!isFunction((_scrollElement$value = scrollElement.value) === null || _scrollElement$value === void 0 ? void 0 : _scrollElement$value.scroll)) return;
    scrollElement.value.scroll({
      left: distance,
      behavior: "smooth"
    });
  };
  var scrollToRight = function scrollToRight() {
    updateScrollDistance();
    scrollTo(scrollDistance.value);
    setTimeout(function () {
      isScrollable.value = true;
    }, 200);
  };
  var scrollToLeft = function scrollToLeft() {
    scrollTo(0);
  };
  var onWheel = function onWheel(_ref) {
    var e = _ref.e;
    if (readonly.value || disabled.value) return;
    if (!scrollElement.value) return;
    if (e.deltaX > 0) {
      var distance = Math.min(scrollElement.value.scrollLeft + 120, scrollDistance.value);
      scrollTo(distance);
    } else {
      var _distance = Math.max(scrollElement.value.scrollLeft - 120, 0);
      scrollTo(_distance);
    }
  };
  var scrollToRightOnEnter = function scrollToRightOnEnter() {
    if (excessTagsDisplayType.value !== "scroll") return;
    mouseEnterTimer.value = setTimeout(function () {
      scrollToRight();
      clearTimeout(mouseEnterTimer.value);
    }, 100);
  };
  var scrollToLeftOnLeave = function scrollToLeftOnLeave() {
    if (excessTagsDisplayType.value !== "scroll") return;
    isScrollable.value = false;
    scrollTo(0);
    clearTimeout(mouseEnterTimer.value);
  };
  var init = function init() {
    var _tagInputRef$value;
    var element = (_tagInputRef$value = tagInputRef.value) === null || _tagInputRef$value === void 0 ? void 0 : _tagInputRef$value.$el;
    if (!element) return;
    updateScrollElement(element);
  };
  var clear = function clear() {
    clearTimeout(mouseEnterTimer.value);
  };
  onMounted(init);
  onUnmounted(clear);
  return {
    tagInputRef: tagInputRef,
    scrollElement: scrollElement,
    scrollDistance: scrollDistance,
    scrollTo: scrollTo,
    scrollToRight: scrollToRight,
    scrollToLeft: scrollToLeft,
    updateScrollElement: updateScrollElement,
    updateScrollDistance: updateScrollDistance,
    onWheel: onWheel,
    scrollToRightOnEnter: scrollToRightOnEnter,
    scrollToLeftOnLeave: scrollToLeftOnLeave,
    isScrollable: isScrollable
  };
}

export { useTagScroll };
//# sourceMappingURL=useTagScroll.js.map
