/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _toConsumableArray = require('@babel/runtime/helpers/toConsumableArray');
var _defineProperty = require('@babel/runtime/helpers/defineProperty');
var Vue = require('vue');
var dialog_dialog = require('./dialog.js');
var dom = require('../_chunks/dep-06276759.js');
var omit = require('../_chunks/dep-ace0b57c.js');
require('@babel/runtime/helpers/objectWithoutProperties');
require('./props.js');
require('@babel/runtime/helpers/typeof');
require('../_chunks/dep-953a77eb.js');
require('../_chunks/dep-8abdfb41.js');
require('../_chunks/dep-ecaaae91.js');
require('../config-provider/hooks/useConfig.js');
require('../_chunks/dep-5d7e2375.js');
require('../_chunks/dep-94a7dc2d.js');
require('dayjs');
require('../_chunks/dep-92e23f17.js');
require('../_chunks/dep-0ff616fe.js');
require('../_chunks/dep-5f52cd42.js');
require('../_chunks/dep-48f60c78.js');
require('../_chunks/dep-b3b464e8.js');
require('../_chunks/dep-0813861e.js');
require('../_chunks/dep-f57bcb19.js');
require('../_chunks/dep-dc4bbc14.js');
require('../_chunks/dep-05f89f0d.js');
require('../_chunks/dep-87589faa.js');
require('../_chunks/dep-e27ea667.js');
require('../_chunks/dep-165ca38a.js');
require('../_chunks/dep-32412d92.js');
require('../_chunks/dep-a8a3d718.js');
require('../_chunks/dep-54e566d9.js');
require('../_chunks/dep-591a72de.js');
require('@babel/runtime/helpers/slicedToArray');
require('../_chunks/dep-a55e8a08.js');
require('../_chunks/dep-8adeee89.js');
require('../_chunks/dep-4d2ef282.js');
require('../_chunks/dep-929933ce.js');
require('../_chunks/dep-6b1f0ef8.js');
require('../_chunks/dep-92c8c5c9.js');
require('../_chunks/dep-cc66acf1.js');
require('@babel/runtime/helpers/createClass');
require('@babel/runtime/helpers/classCallCheck');
require('../_chunks/dep-237ed01f.js');
require('../loading/icon/gradient.js');
require('../_chunks/dep-c3dee00a.js');
require('../_chunks/dep-55c70201.js');
require('../_chunks/dep-fd5a369e.js');
require('../_chunks/dep-4ccaead1.js');
require('../_chunks/dep-990979bb.js');
require('../_chunks/dep-47c460dd.js');
require('../_chunks/dep-4fa46641.js');
require('../_chunks/dep-422dd97f.js');
require('../_chunks/dep-71fa6bfc.js');
require('../_chunks/dep-80a478d7.js');
require('../_chunks/dep-427dabac.js');
require('../_chunks/dep-72c4cc44.js');
require('../_chunks/dep-ee355a9a.js');
require('../_chunks/dep-23f77e26.js');
require('../_chunks/dep-8382953f.js');
require('../loading/props.js');
require('../button/index.js');
require('../button/button.js');
require('../loading/index.js');
require('../_chunks/dep-95261778.js');
require('../loading/plugin.js');
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
require('../button/props.js');
require('../_chunks/dep-874d2900.js');
require('../_chunks/dep-d45110a6.js');
require('../_chunks/dep-0b6215b5.js');
require('./hooks/useSameTarget.js');
require('../_chunks/dep-7067edce.js');
require('./utils/index.js');
require('./dialog-card.js');
require('tdesign-icons-vue-next');
require('./dialog-card-props.js');
require('../_chunks/dep-31c76dc6.js');
require('./hooks/useAction.js');
require('../_chunks/dep-11b67e11.js');
require('../_chunks/dep-dcb859c6.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _toConsumableArray__default = /*#__PURE__*/_interopDefaultLegacy(_toConsumableArray);
var _defineProperty__default = /*#__PURE__*/_interopDefaultLegacy(_defineProperty);

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty__default["default"](e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var createDialog = function createDialog(props, context) {
  var options = _objectSpread({}, props);
  var wrapper = document.createElement("div");
  var visible = Vue.ref(false);
  var className = options.className,
    style = options.style;
  var preClassName = className;
  var updateClassNameStyle = function updateClassNameStyle(className2, style2) {
    if (className2) {
      if (preClassName && preClassName !== className2) {
        var _wrapper$firstElement;
        (_wrapper$firstElement = wrapper.firstElementChild.classList).remove.apply(_wrapper$firstElement, _toConsumableArray__default["default"](preClassName.split(" ").map(function (name) {
          return name.trim();
        })));
      }
      className2.split(" ").forEach(function (name) {
        wrapper.firstElementChild.classList.add(name.trim());
      });
    }
    if (style2) {
      wrapper.firstElementChild.style.cssText += style2;
    }
    preClassName = className2;
  };
  function destroySelf() {
    Vue.render(null, wrapper);
    wrapper.remove();
  }
  var component = Vue.defineComponent({
    setup: function setup(props2, _ref) {
      var expose = _ref.expose;
      var dialogOptions = Vue.ref(options);
      Vue.onMounted(function () {
        visible.value = true;
        document.activeElement.blur();
        Vue.nextTick(function () {
          updateClassNameStyle(className, style);
        });
      });
      var update = function update(newOptions) {
        dialogOptions.value = _objectSpread(_objectSpread({}, options), newOptions);
      };
      expose({
        update: update
      });
      return function () {
        var onClose = options.onClose || function () {
          visible.value = false;
          if (options.destroyOnClose) {
            setTimeout(function () {
              destroySelf();
            }, 300);
          }
        };
        delete options.className;
        delete options.style;
        return Vue.h(dialog_dialog["default"], _objectSpread({
          onClose: onClose,
          visible: visible.value
        }, dialogOptions.value));
      };
    }
  });
  var dialog = Vue.createVNode(component);
  if (context !== null && context !== void 0 ? context : DialogPlugin._context) {
    dialog.appContext = context !== null && context !== void 0 ? context : DialogPlugin._context;
  }
  var container = dom.getAttach(options.attach);
  if (container) {
    container.appendChild(wrapper);
  } else {
    console.error("attach is not exist");
  }
  Vue.render(dialog, wrapper);
  var dialogNode = {
    show: function show() {
      visible.value = true;
    },
    hide: function hide() {
      visible.value = false;
    },
    update: function update(newOptions) {
      dialog.component.exposed.update(omit.omit(newOptions, ["className", "style"]));
      updateClassNameStyle(newOptions.className, newOptions.style);
    },
    destroy: function destroy() {
      visible.value = false;
      setTimeout(function () {
        destroySelf();
      }, 300);
    },
    setConfirmLoading: function setConfirmLoading(val) {
      dialog.component.exposed.update({
        confirmLoading: val
      });
    }
  };
  return dialogNode;
};
var confirm = function confirm(props, context) {
  return createDialog(props, context);
};
var alert = function alert(props, context) {
  var options = _objectSpread({}, props);
  options.cancelBtn = null;
  return createDialog(options, context);
};
var extraApi = {
  confirm: confirm,
  alert: alert
};
var DialogPlugin = createDialog;
DialogPlugin.install = function (app) {
  app.config.globalProperties.$dialog = createDialog;
  DialogPlugin._context = app._context;
  Object.keys(extraApi).forEach(function (funcName) {
    app.config.globalProperties.$dialog[funcName] = extraApi[funcName];
  });
};
Object.keys(extraApi).forEach(function (funcName) {
  DialogPlugin[funcName] = extraApi[funcName];
});

exports.DialogPlugin = DialogPlugin;
exports["default"] = DialogPlugin;
//# sourceMappingURL=plugin.js.map
