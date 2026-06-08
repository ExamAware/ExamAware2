/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import _toConsumableArray from '@babel/runtime/helpers/toConsumableArray';
import _defineProperty from '@babel/runtime/helpers/defineProperty';
import { ref, defineComponent, onMounted, nextTick, h, createVNode, render } from 'vue';
import _Dialog from './dialog.js';
import { g as getAttach } from '../_chunks/dep-16bcfabc.js';
import { omit } from 'lodash-es';
import '@babel/runtime/helpers/objectWithoutProperties';
import './props.js';
import '@babel/runtime/helpers/typeof';
import '../_chunks/dep-fe23be6e.js';
import '../_chunks/dep-81b01cae.js';
import '../_chunks/dep-9e6d8a78.js';
import '../config-provider/hooks/useConfig.js';
import '../config-provider/utils/context.js';
import '../_chunks/dep-938cd955.js';
import 'dayjs';
import '@babel/runtime/helpers/slicedToArray';
import '../_chunks/dep-7f74a978.js';
import '../_chunks/dep-880d05b9.js';
import '@babel/runtime/helpers/createClass';
import '@babel/runtime/helpers/classCallCheck';
import '../_chunks/dep-ee693784.js';
import '../loading/icon/gradient.js';
import '../_chunks/dep-2ea19dca.js';
import '../_chunks/dep-80a99546.js';
import '../_chunks/dep-2accc95a.js';
import '../_chunks/dep-fb805f69.js';
import '../_chunks/dep-4f8b6591.js';
import '../loading/props.js';
import '../button/index.js';
import '../button/button.js';
import '../loading/index.js';
import '../loading/directive.js';
import '../loading/plugin.js';
import '../_chunks/dep-664b8b22.js';
import '../button/props.js';
import '../_chunks/dep-f7dd3c12.js';
import '../_chunks/dep-d2a6e7a4.js';
import './hooks/useSameTarget.js';
import '../_chunks/dep-167f0981.js';
import './utils/index.js';
import './dialog-card.js';
import 'tdesign-icons-vue-next';
import './dialog-card-props.js';
import '../_chunks/dep-3a7a2ef1.js';
import './hooks/useAction.js';

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var createDialog = function createDialog(props, context) {
  var options = _objectSpread({}, props);
  var wrapper = document.createElement("div");
  var visible = ref(false);
  var className = options.className,
    style = options.style;
  var preClassName = className;
  var updateClassNameStyle = function updateClassNameStyle(className2, style2) {
    if (className2) {
      if (preClassName && preClassName !== className2) {
        var _wrapper$firstElement;
        (_wrapper$firstElement = wrapper.firstElementChild.classList).remove.apply(_wrapper$firstElement, _toConsumableArray(preClassName.split(" ").map(function (name) {
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
    render(null, wrapper);
    wrapper.remove();
  }
  var component = defineComponent({
    setup: function setup(props2, _ref) {
      var expose = _ref.expose;
      var dialogOptions = ref(options);
      onMounted(function () {
        visible.value = true;
        document.activeElement.blur();
        nextTick(function () {
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
        return h(_Dialog, _objectSpread({
          onClose: onClose,
          visible: visible.value
        }, dialogOptions.value));
      };
    }
  });
  var dialog = createVNode(component);
  if (context !== null && context !== void 0 ? context : DialogPlugin._context) {
    dialog.appContext = context !== null && context !== void 0 ? context : DialogPlugin._context;
  }
  var container = getAttach(options.attach);
  if (container) {
    container.appendChild(wrapper);
  } else {
    console.error("attach is not exist");
  }
  render(dialog, wrapper);
  var dialogNode = {
    show: function show() {
      visible.value = true;
    },
    hide: function hide() {
      visible.value = false;
    },
    update: function update(newOptions) {
      dialog.component.exposed.update(omit(newOptions, ["className", "style"]));
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

export { DialogPlugin, DialogPlugin as default };
//# sourceMappingURL=plugin.js.map
