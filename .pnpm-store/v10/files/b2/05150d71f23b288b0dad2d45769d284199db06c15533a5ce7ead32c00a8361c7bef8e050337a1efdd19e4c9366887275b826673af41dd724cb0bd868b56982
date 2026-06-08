/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

var Vue = require('vue');
var index = require('./dep-953a77eb.js');
var isFunction = require('./dep-48f60c78.js');
var isString = require('./dep-a55e8a08.js');

var easeInOutCubic = function easeInOutCubic(current, start, end, duration) {
  var change = (end - start) / 2;
  var time = current / (duration / 2);
  if (time < 1) {
    return change * time * time * time + start;
  }
  time -= 2;
  return change * (time * time * time + 2) + start;
};

var isServer = typeof window === "undefined";
var trim = function trim(str) {
  return (str || "").replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g, "");
};
var on = function () {
  if (!isServer && document.addEventListener) {
    return function (element, event, handler, options) {
      if (element && event && handler) {
        element.addEventListener(event, handler, options);
      }
    };
  }
  return function (element, event, handler) {
    if (element && event && handler) {
      element.attachEvent("on".concat(event), handler);
    }
  };
}();
var off = function () {
  if (!isServer && document.removeEventListener) {
    return function (element, event, handler, options) {
      if (element && event) {
        element.removeEventListener(event, handler, options);
      }
    };
  }
  return function (element, event, handler) {
    if (element && event) {
      element.detachEvent("on".concat(event), handler);
    }
  };
}();
function once(element, event, handler, options) {
  var handlerFn = isFunction.isFunction(handler) ? handler : handler.handleEvent;
  var _callback = function callback(evt) {
    handlerFn(evt);
    off(element, event, _callback, options);
  };
  on(element, event, _callback, options);
}
function hasClass(el, cls) {
  if (!el || !cls) return false;
  if (cls.indexOf(" ") !== -1) throw new Error("className should not contain space.");
  if (el.classList) {
    return el.classList.contains(cls);
  }
  return " ".concat(el.className, " ").indexOf(" ".concat(cls, " ")) > -1;
}
function addClass(el, cls) {
  if (!el) return;
  var curClass = el.className;
  var classes = (cls || "").split(" ");
  for (var i = 0, j = classes.length; i < j; i++) {
    var clsName = classes[i];
    if (!clsName) continue;
    if (el.classList) {
      el.classList.add(clsName);
    } else if (!hasClass(el, clsName)) {
      curClass += " ".concat(clsName);
    }
  }
  if (!el.classList) {
    el.className = curClass;
  }
}
function removeClass(el, cls) {
  if (!el || !cls) return;
  var classes = cls.split(" ");
  var curClass = " ".concat(el.className, " ");
  for (var i = 0, j = classes.length; i < j; i++) {
    var clsName = classes[i];
    if (!clsName) continue;
    if (el.classList) {
      el.classList.remove(clsName);
    } else if (hasClass(el, clsName)) {
      curClass = curClass.replace(" ".concat(clsName, " "), " ");
    }
  }
  if (!el.classList) {
    el.className = trim(curClass);
  }
}
var getAttach = function getAttach(node, triggerNode) {
  var attachNode = isFunction.isFunction(node) ? node(triggerNode) : node;
  if (!attachNode) {
    return document.body;
  }
  if (isString.isString(attachNode)) {
    return document.querySelector(attachNode);
  }
  if (attachNode instanceof HTMLElement) {
    return attachNode;
  }
  return document.body;
};
var getScrollContainer = function getScrollContainer() {
  var container = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "body";
  if (isString.isString(container)) {
    return document.querySelector(container);
  }
  if (isFunction.isFunction(container)) {
    return container();
  }
  return container;
};
function isWindow(obj) {
  return obj && obj === obj.window;
}
function getScroll(target, isLeft) {
  if (isServer || !target) {
    return 0;
  }
  var method = isLeft ? "scrollLeft" : "scrollTop";
  var result = 0;
  if (isWindow(target)) {
    result = target[isLeft ? "pageXOffset" : "pageYOffset"];
  } else if (target instanceof Document) {
    result = target.documentElement[method];
  } else if (target) {
    result = target[method];
  }
  return result;
}
function scrollTo(target, opt) {
  var _opt$container = opt.container,
    container = _opt$container === void 0 ? window : _opt$container,
    _opt$duration = opt.duration,
    duration = _opt$duration === void 0 ? 450 : _opt$duration,
    _opt$easing = opt.easing,
    easing = _opt$easing === void 0 ? easeInOutCubic : _opt$easing;
  var scrollTop = getScroll(container);
  var startTime = Date.now();
  return new Promise(function (res) {
    var _fnc = function fnc() {
      var timestamp = Date.now();
      var time = timestamp - startTime;
      var nextScrollTop = easing(Math.min(time, duration), scrollTop, target, duration);
      if (isWindow(container)) {
        container.scrollTo(window.pageXOffset, nextScrollTop);
      } else if (container instanceof Document || container.constructor.name === "HTMLDocument") {
        container.documentElement.scrollTop = nextScrollTop;
      } else {
        container.scrollTop = nextScrollTop;
      }
      if (time < duration) {
        index.raf(_fnc);
      } else {
        index.raf(res);
      }
    };
    index.raf(_fnc);
  });
}
var isTextEllipsis = function isTextEllipsis(ele) {
  var _ele$clientWidth = ele.clientWidth,
    clientWidth = _ele$clientWidth === void 0 ? 0 : _ele$clientWidth,
    _ele$scrollWidth = ele.scrollWidth,
    scrollWidth = _ele$scrollWidth === void 0 ? 0 : _ele$scrollWidth;
  return scrollWidth > clientWidth;
};
var requestSubmit = function requestSubmit(target) {
  if (!(target instanceof HTMLFormElement)) {
    throw new Error("target must be HTMLFormElement");
  }
  var submitter = document.createElement("input");
  submitter.type = "submit";
  submitter.hidden = true;
  target.appendChild(submitter);
  submitter.click();
  target.removeChild(submitter);
};
function elementInViewport(elm, parent) {
  var rect = elm.getBoundingClientRect();
  if (parent) {
    var parentRect = parent.getBoundingClientRect();
    return rect.top >= parentRect.top && rect.left >= parentRect.left && rect.bottom <= parentRect.bottom && rect.right <= parentRect.right;
  }
  return rect.top >= 0 && rect.left >= 0 && rect.bottom + 80 <= window.innerHeight && rect.right <= window.innerWidth;
}
function getElmCssPropValue(element, propName) {
  var propValue = "";
  if (document.defaultView && document.defaultView.getComputedStyle) {
    propValue = document.defaultView.getComputedStyle(element, null).getPropertyValue(propName);
  }
  if (propValue && propValue.toLowerCase) {
    return propValue.toLowerCase();
  }
  return propValue;
}
function isFixed(element) {
  var p = element.parentNode;
  if (!p || p.nodeName === "HTML") {
    return false;
  }
  if (getElmCssPropValue(element, "position") === "fixed") {
    return true;
  }
  return isFixed(p);
}
function getWindowScroll() {
  var _document = document,
    body = _document.body;
  var docElm = document.documentElement;
  var scrollTop = window.pageYOffset || docElm.scrollTop || body.scrollTop;
  var scrollLeft = window.pageXOffset || docElm.scrollLeft || body.scrollLeft;
  return {
    scrollTop: scrollTop,
    scrollLeft: scrollLeft
  };
}
function getWindowSize() {
  if (window.innerWidth !== void 0) {
    return {
      width: window.innerWidth,
      height: window.innerHeight
    };
  }
  var doc = document.documentElement;
  return {
    width: doc.clientWidth,
    height: doc.clientHeight
  };
}
var isCommentVNode = function isCommentVNode(node) {
  return Vue.isVNode(node) && node.type === Vue.Comment;
};

exports.addClass = addClass;
exports.elementInViewport = elementInViewport;
exports.getAttach = getAttach;
exports.getElmCssPropValue = getElmCssPropValue;
exports.getScroll = getScroll;
exports.getScrollContainer = getScrollContainer;
exports.getWindowScroll = getWindowScroll;
exports.getWindowSize = getWindowSize;
exports.hasClass = hasClass;
exports.isCommentVNode = isCommentVNode;
exports.isFixed = isFixed;
exports.isServer = isServer;
exports.isTextEllipsis = isTextEllipsis;
exports.off = off;
exports.on = on;
exports.once = once;
exports.removeClass = removeClass;
exports.requestSubmit = requestSubmit;
exports.scrollTo = scrollTo;
//# sourceMappingURL=dep-06276759.js.map
