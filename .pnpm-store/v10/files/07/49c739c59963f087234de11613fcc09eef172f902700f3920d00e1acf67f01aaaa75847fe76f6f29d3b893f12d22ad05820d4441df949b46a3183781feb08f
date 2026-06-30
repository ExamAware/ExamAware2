/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _defineProperty = require('@babel/runtime/helpers/defineProperty');
var Vue = require('vue');
var notification_notificationList = require('./notification-list.js');
var dom = require('../_chunks/dep-06276759.js');
require('./notification.js');
require('tdesign-icons-vue-next');
require('@babel/runtime/helpers/toConsumableArray');
require('@babel/runtime/helpers/typeof');
require('../_chunks/dep-953a77eb.js');
require('../_chunks/dep-8abdfb41.js');
require('../_chunks/dep-47c460dd.js');
require('../_chunks/dep-4fa46641.js');
require('../_chunks/dep-0813861e.js');
require('../_chunks/dep-a55e8a08.js');
require('../_chunks/dep-b3b464e8.js');
require('../_chunks/dep-87589faa.js');
require('../_chunks/dep-05f89f0d.js');
require('../_chunks/dep-422dd97f.js');
require('../_chunks/dep-71fa6bfc.js');
require('../_chunks/dep-80a478d7.js');
require('../_chunks/dep-427dabac.js');
require('../_chunks/dep-72c4cc44.js');
require('../_chunks/dep-ee355a9a.js');
require('../_chunks/dep-23f77e26.js');
require('../_chunks/dep-48f60c78.js');
require('../_chunks/dep-ecaaae91.js');
require('../config-provider/hooks/useConfig.js');
require('../_chunks/dep-5d7e2375.js');
require('../_chunks/dep-94a7dc2d.js');
require('dayjs');
require('../_chunks/dep-92e23f17.js');
require('../_chunks/dep-0ff616fe.js');
require('../_chunks/dep-5f52cd42.js');
require('../_chunks/dep-f57bcb19.js');
require('../_chunks/dep-dc4bbc14.js');
require('../_chunks/dep-e27ea667.js');
require('../_chunks/dep-165ca38a.js');
require('../_chunks/dep-32412d92.js');
require('../_chunks/dep-a8a3d718.js');
require('../_chunks/dep-54e566d9.js');
require('../_chunks/dep-591a72de.js');
require('@babel/runtime/helpers/slicedToArray');
require('../_chunks/dep-8adeee89.js');
require('../_chunks/dep-4d2ef282.js');
require('../_chunks/dep-929933ce.js');
require('../_chunks/dep-6b1f0ef8.js');
require('../_chunks/dep-31c76dc6.js');
require('../_chunks/dep-cc66acf1.js');
require('@babel/runtime/helpers/createClass');
require('@babel/runtime/helpers/classCallCheck');
require('./props.js');
require('./utils/animate.js');
require('./consts/index.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _defineProperty__default = /*#__PURE__*/_interopDefaultLegacy(_defineProperty);

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty__default["default"](e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var seed = 0;
var instanceMap = /* @__PURE__ */new Map();
var NotificationFunction = function NotificationFunction(options, context) {
  seed += 1;
  var hackOptions = _objectSpread({
    placement: "top-right",
    zIndex: 6e3,
    attach: "body",
    id: seed
  }, options);
  hackOptions.content = options.content ? options.content : "";
  var attachEl = dom.getAttach(hackOptions.attach);
  if (!instanceMap.get(attachEl)) {
    instanceMap.set(attachEl, {});
  }
  var tmpInstance = instanceMap.get(attachEl)[hackOptions.placement];
  if (!tmpInstance) {
    var wrapper = document.createElement("div");
    var instance = Vue.createVNode(notification_notificationList["default"], {
      placement: hackOptions.placement,
      offset: hackOptions.offset
    });
    if (context !== null && context !== void 0 ? context : NotificationPlugin._context) {
      instance.appContext = context !== null && context !== void 0 ? context : NotificationPlugin._context;
    }
    attachEl.appendChild(wrapper);
    Vue.render(instance, wrapper);
    instance.component.exposed.add(hackOptions);
    instanceMap.get(attachEl)[hackOptions.placement] = instance;
    tmpInstance = instance;
  } else {
    tmpInstance.component.exposed.add(hackOptions);
  }
  return new Promise(function (resolve) {
    var ins = instanceMap.get(attachEl)[hackOptions.placement];
    Vue.nextTick(function () {
      var _ins$component$expose;
      var notificationList = (_ins$component$expose = ins.component.exposed.notificationList.value) !== null && _ins$component$expose !== void 0 ? _ins$component$expose : [];
      resolve(notificationList === null || notificationList === void 0 ? void 0 : notificationList.find(function (notify) {
        var _notify$$;
        return ((_notify$$ = notify.$) === null || _notify$$ === void 0 || (_notify$$ = _notify$$.vnode) === null || _notify$$ === void 0 ? void 0 : _notify$$.key) === hackOptions.id;
      }));
    });
  });
};
var showThemeNotification = function showThemeNotification(theme, options, context) {
  var hackOptions = _objectSpread(_objectSpread({}, options), {}, {
    theme: theme
  });
  return NotificationFunction(hackOptions, context);
};
var extraApi = {
  info: function info(options, context) {
    return showThemeNotification("info", options, context);
  },
  success: function success(options, context) {
    return showThemeNotification("success", options, context);
  },
  warning: function warning(options, context) {
    return showThemeNotification("warning", options, context);
  },
  error: function error(options, context) {
    return showThemeNotification("error", options, context);
  },
  close: function close(promise) {
    promise.then(function (instance) {
      return instance.close();
    });
  },
  closeAll: function closeAll() {
    instanceMap.forEach(function (attach) {
      Object.keys(attach).forEach(function (placement) {
        attach[placement].component.exposed.removeAll();
      });
    });
  }
};
var NotificationPlugin = showThemeNotification;
NotificationPlugin.install = function (app) {
  app.config.globalProperties.$notify = showThemeNotification;
  Object.keys(extraApi).forEach(function (funcName) {
    app.config.globalProperties.$notify[funcName] = extraApi[funcName];
  });
  NotificationPlugin._context = app._context;
};
Object.keys(extraApi).forEach(function (funcName) {
  NotificationPlugin[funcName] = extraApi[funcName];
});
var NotifyPlugin = NotificationPlugin;

exports.NotifyPlugin = NotifyPlugin;
exports["default"] = NotificationPlugin;
//# sourceMappingURL=plugin.js.map
