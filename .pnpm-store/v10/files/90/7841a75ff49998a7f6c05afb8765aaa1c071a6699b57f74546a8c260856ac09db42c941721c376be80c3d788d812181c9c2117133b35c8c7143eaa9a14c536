/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import _defineProperty from '@babel/runtime/helpers/defineProperty';
import { isVNode, createVNode, render, nextTick } from 'vue';
import { isString, isObject } from 'lodash-es';
import { g as getAttach } from '../_chunks/dep-16bcfabc.js';
import { MessageList, DEFAULT_Z_INDEX } from './message-list.js';
import '../_chunks/dep-fe23be6e.js';
import '../_chunks/dep-81b01cae.js';
import '../_chunks/dep-9737ac07.js';
import 'tdesign-icons-vue-next';
import '@babel/runtime/helpers/toConsumableArray';
import '@babel/runtime/helpers/typeof';
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
import '../loading/index.js';
import '../loading/directive.js';
import '../loading/plugin.js';
import '../_chunks/dep-ee693784.js';
import '../loading/icon/gradient.js';
import '../_chunks/dep-2ea19dca.js';
import '../_chunks/dep-80a99546.js';
import '@babel/runtime/helpers/objectWithoutProperties';
import '../_chunks/dep-4f8b6591.js';
import '../loading/props.js';
import '../_chunks/dep-664b8b22.js';
import './props.js';

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var instanceMap = /* @__PURE__ */new Map();
function handleParams(params) {
  var options = _objectSpread({
    duration: 3e3,
    attach: "body",
    zIndex: DEFAULT_Z_INDEX,
    placement: "top"
  }, params);
  options.content = params.content;
  return options;
}
var MessageFunction = function MessageFunction(props, context) {
  var options = handleParams(props);
  var attach = options.attach,
    placement = options.placement;
  var attachDom = getAttach(attach);
  if (!instanceMap.get(attachDom)) {
    instanceMap.set(attachDom, {});
  }
  var p = instanceMap.get(attachDom)[placement];
  var mgKey;
  if (!p || !attachDom.contains(p.el)) {
    var wrapper = document.createElement("div");
    var instance = createVNode(MessageList, {
      zIndex: options.zIndex,
      placement: options.placement
    });
    if (context !== null && context !== void 0 ? context : MessagePlugin._context) {
      instance.appContext = context !== null && context !== void 0 ? context : MessagePlugin._context;
    }
    attachDom.appendChild(wrapper);
    render(instance, wrapper);
    mgKey = instance.component.exposed.add(options);
    instanceMap.get(attachDom)[placement] = instance;
  } else {
    mgKey = p.component.exposed.add(options);
  }
  return new Promise(function (resolve) {
    var ins = instanceMap.get(attachDom)[placement];
    nextTick(function () {
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
  if (isVNode(params)) {
    options.content = function () {
      return params;
    };
  } else if (isString(params)) {
    options.content = params;
  } else if (isObject(params) && !(params instanceof Array)) {
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

export { MessagePlugin, MessagePlugin as default };
//# sourceMappingURL=plugin.js.map
