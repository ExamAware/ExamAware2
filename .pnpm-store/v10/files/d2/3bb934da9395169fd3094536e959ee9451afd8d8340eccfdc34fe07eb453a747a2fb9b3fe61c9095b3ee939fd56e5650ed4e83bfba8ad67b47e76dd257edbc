/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _defineProperty = require('@babel/runtime/helpers/defineProperty');
var Vue = require('vue');
var dom = require('../_chunks/dep-06276759.js');
var message_messageList = require('./message-list.js');
var isString = require('../_chunks/dep-a55e8a08.js');
var isObject = require('../_chunks/dep-0813861e.js');
require('../_chunks/dep-953a77eb.js');
require('../_chunks/dep-8abdfb41.js');
require('../_chunks/dep-48f60c78.js');
require('../_chunks/dep-b3b464e8.js');
require('@babel/runtime/helpers/typeof');
require('../_chunks/dep-56601f8d.js');
require('tdesign-icons-vue-next');
require('@babel/runtime/helpers/toConsumableArray');
require('../_chunks/dep-47c460dd.js');
require('../_chunks/dep-4fa46641.js');
require('../_chunks/dep-87589faa.js');
require('../_chunks/dep-422dd97f.js');
require('../_chunks/dep-71fa6bfc.js');
require('../_chunks/dep-80a478d7.js');
require('../_chunks/dep-05f89f0d.js');
require('../_chunks/dep-427dabac.js');
require('../_chunks/dep-72c4cc44.js');
require('../_chunks/dep-ee355a9a.js');
require('../_chunks/dep-23f77e26.js');
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
require('../loading/index.js');
require('../_chunks/dep-95261778.js');
require('../loading/plugin.js');
require('../_chunks/dep-237ed01f.js');
require('../loading/icon/gradient.js');
require('../_chunks/dep-c3dee00a.js');
require('../_chunks/dep-55c70201.js');
require('@babel/runtime/helpers/objectWithoutProperties');
require('../_chunks/dep-fd5a369e.js');
require('../_chunks/dep-4ccaead1.js');
require('../_chunks/dep-990979bb.js');
require('../_chunks/dep-8382953f.js');
require('../loading/props.js');
require('../_chunks/dep-9cc695aa.js');
require('../_chunks/dep-48de95ee.js');
require('../_chunks/dep-8b33876c.js');
require('../_chunks/dep-912c9727.js');
require('../_chunks/dep-0b8a4740.js');
require('../_chunks/dep-cd8cfdc0.js');
require('../_chunks/dep-ac11336c.js');
require('../_chunks/dep-9ce6873a.js');
require('../_chunks/dep-779f6290.js');
require('../_chunks/dep-d62a674d.js');
require('./props.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _defineProperty__default = /*#__PURE__*/_interopDefaultLegacy(_defineProperty);

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty__default["default"](e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var instanceMap = /* @__PURE__ */new Map();
function handleParams(params) {
  var options = _objectSpread({
    duration: 3e3,
    attach: "body",
    zIndex: message_messageList.DEFAULT_Z_INDEX,
    placement: "top"
  }, params);
  options.content = params.content;
  return options;
}
var MessageFunction = function MessageFunction(props, context) {
  var options = handleParams(props);
  var attach = options.attach,
    placement = options.placement;
  var attachDom = dom.getAttach(attach);
  if (!instanceMap.get(attachDom)) {
    instanceMap.set(attachDom, {});
  }
  var p = instanceMap.get(attachDom)[placement];
  var mgKey;
  if (!p || !attachDom.contains(p.el)) {
    var wrapper = document.createElement("div");
    var instance = Vue.createVNode(message_messageList.MessageList, {
      zIndex: options.zIndex,
      placement: options.placement
    });
    if (context !== null && context !== void 0 ? context : MessagePlugin._context) {
      instance.appContext = context !== null && context !== void 0 ? context : MessagePlugin._context;
    }
    attachDom.appendChild(wrapper);
    Vue.render(instance, wrapper);
    mgKey = instance.component.exposed.add(options);
    instanceMap.get(attachDom)[placement] = instance;
  } else {
    mgKey = p.component.exposed.add(options);
  }
  return new Promise(function (resolve) {
    var ins = instanceMap.get(attachDom)[placement];
    Vue.nextTick(function () {
      var msg = ins.component.exposed.messageList.value;
      resolve(msg === null || msg === void 0 ? void 0 : msg.find(function (mg) {
        var _mg$$;
        return ((_mg$$ = mg.$) === null || _mg$$ === void 0 || (_mg$$ = _mg$$.vnode) === null || _mg$$ === void 0 ? void 0 : _mg$$.key) === mgKey;
      }));
    });
  });
};
var showThemeMessage = function showThemeMessage(theme, params, duration, context) {
  var options = {
    theme: theme
  };
  if (Vue.isVNode(params)) {
    options.content = function () {
      return params;
    };
  } else if (isString.isString(params)) {
    options.content = params;
  } else if (isObject.isObject(params) && !(params instanceof Array)) {
    options = _objectSpread(_objectSpread({}, options), params);
  }
  (duration || duration === 0) && (options.duration = duration);
  return MessageFunction(options, context);
};
var extraApi = {
  info: function info(params, duration, context) {
    return showThemeMessage("info", params, duration, context);
  },
  success: function success(params, duration, context) {
    return showThemeMessage("success", params, duration, context);
  },
  warning: function warning(params, duration, context) {
    return showThemeMessage("warning", params, duration, context);
  },
  error: function error(params, duration, context) {
    return showThemeMessage("error", params, duration, context);
  },
  question: function question(params, duration, context) {
    return showThemeMessage("question", params, duration, context);
  },
  loading: function loading(params, duration, context) {
    return showThemeMessage("loading", params, duration, context);
  },
  close: function close(promise) {
    promise.then(function (instance) {
      return instance === null || instance === void 0 ? void 0 : instance.close();
    });
  },
  closeAll: function closeAll() {
    if (instanceMap instanceof Map) {
      instanceMap.forEach(function (attach) {
        Object.keys(attach).forEach(function (placement) {
          var instance = attach[placement];
          instance.component.exposed.removeAll();
        });
      });
    }
  }
};
var MessagePlugin = showThemeMessage;
MessagePlugin.install = function (app) {
  app.config.globalProperties.$message = showThemeMessage;
  Object.keys(extraApi).forEach(function (funcName) {
    app.config.globalProperties.$message[funcName] = extraApi[funcName];
  });
  MessagePlugin._context = app._context;
};
Object.keys(extraApi).forEach(function (funcName) {
  MessagePlugin[funcName] = extraApi[funcName];
});

exports.MessagePlugin = MessagePlugin;
exports["default"] = MessagePlugin;
//# sourceMappingURL=plugin.js.map
