/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import _defineProperty from '@babel/runtime/helpers/defineProperty';
import { createVNode, render, nextTick } from 'vue';
import NotificationList from './notification-list.js';
import { g as getAttach } from '../_chunks/dep-16bcfabc.js';
import 'lodash-es';
import 'tdesign-vue-next/esm/common/style/web/components/notification/_index.less';
import './notification.js';
import 'tdesign-icons-vue-next';
import '@babel/runtime/helpers/toConsumableArray';
import '@babel/runtime/helpers/typeof';
import '../_chunks/dep-fe23be6e.js';
import '../_chunks/dep-81b01cae.js';
import '../_chunks/dep-2accc95a.js';
import '../_chunks/dep-fb805f69.js';
import '../_chunks/dep-9e6d8a78.js';
import '../config-provider/hooks/useConfig.js';
import '../config-provider/utils/context.js';
import '../_chunks/dep-938cd955.js';
import 'dayjs';
import '@babel/runtime/helpers/slicedToArray';
import '../_chunks/dep-3a7a2ef1.js';
import '../_chunks/dep-880d05b9.js';
import '@babel/runtime/helpers/createClass';
import '@babel/runtime/helpers/classCallCheck';
import './props.js';
import './utils/animate.js';
import './consts/index.js';

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
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
  var attachEl = getAttach(hackOptions.attach);
  if (!instanceMap.get(attachEl)) {
    instanceMap.set(attachEl, {});
  }
  var tmpInstance = instanceMap.get(attachEl)[hackOptions.placement];
  if (!tmpInstance) {
    var wrapper = document.createElement("div");
    var instance = createVNode(NotificationList, {
      placement: hackOptions.placement,
      offset: hackOptions.offset
    });
    if (context !== null && context !== void 0 ? context : NotificationPlugin._context) {
      instance.appContext = context !== null && context !== void 0 ? context : NotificationPlugin._context;
    }
    attachEl.appendChild(wrapper);
    render(instance, wrapper);
    instance.component.exposed.add(hackOptions);
    instanceMap.get(attachEl)[hackOptions.placement] = instance;
    tmpInstance = instance;
  } else {
    tmpInstance.component.exposed.add(hackOptions);
  }
  return new Promise(function (resolve) {
    var ins = instanceMap.get(attachEl)[hackOptions.placement];
    nextTick(function () {
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

export { NotifyPlugin, NotificationPlugin as default };
//# sourceMappingURL=plugin.js.map
