/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { _ as _toConsumableArray } from '../_chunks/dep-00b4e06a.mjs';
import { _ as _defineProperty } from '../_chunks/dep-1dacc319.mjs';
import { ref, render, defineComponent, onMounted, nextTick, h, createVNode } from 'vue';
import _Dialog from './dialog.mjs';
import { g as getAttach } from '../_chunks/dep-51a43106.mjs';
import { omit } from 'lodash-es';
import '../_chunks/dep-9f459d8b.mjs';
import '../_chunks/dep-257428bc.mjs';
import '../_chunks/dep-0dcc778a.mjs';
import './props.mjs';
import '../_chunks/dep-7673347f.mjs';
import '../config-provider/hooks/useConfig.mjs';
import '../config-provider/utils/context.mjs';
import '../_chunks/dep-a4c09318.mjs';
import '../_chunks/dep-fe644854.mjs';
import '../_chunks/dep-ffb85102.mjs';
import '../_chunks/dep-ad588525.mjs';
import '../_chunks/dep-9003fde5.mjs';
import '../_chunks/dep-22ebd6af.mjs';
import '../_chunks/dep-cdd448ec.mjs';
import '../_chunks/dep-97ecacde.mjs';
import '../_chunks/dep-84fd47b3.mjs';
import '../_chunks/dep-d36c4a3f.mjs';
import './hooks/index.mjs';
import './hooks/useAction.mjs';
import '../button/index.mjs';
import '../button/button.mjs';
import '../loading/index.mjs';
import '../loading/directive.mjs';
import '../loading/plugin.mjs';
import '../loading/loading.mjs';
import '../loading/icon/gradient.mjs';
import '../_chunks/dep-0cde7579.mjs';
import '../loading/props.mjs';
import './style/css.mjs';
import '../button/props.mjs';
import './hooks/useSameTarget.mjs';
import '../_chunks/dep-03148507.mjs';
import './utils/index.mjs';
import './dialog-card.mjs';
import 'tdesign-icons-vue-next';
import './dialog-card-props.mjs';

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
//# sourceMappingURL=plugin.mjs.map
