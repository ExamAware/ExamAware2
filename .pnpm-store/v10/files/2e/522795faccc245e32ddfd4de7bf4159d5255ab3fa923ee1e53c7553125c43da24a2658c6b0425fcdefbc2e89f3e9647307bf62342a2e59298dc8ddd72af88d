/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { _ as _defineProperty } from '../_chunks/dep-1dacc319.mjs';
import { ref, render, defineComponent, onMounted, nextTick, h, createVNode } from 'vue';
import _Drawer from './drawer.mjs';
import { g as getAttach } from '../_chunks/dep-51a43106.mjs';
import { omit } from 'lodash-es';
import '../_chunks/dep-257428bc.mjs';
import 'tdesign-icons-vue-next';
import '../_chunks/dep-7673347f.mjs';
import '../_chunks/dep-00b4e06a.mjs';
import '../_chunks/dep-9f459d8b.mjs';
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
import '../_chunks/dep-03148507.mjs';
import '../_chunks/dep-0cde7579.mjs';
import '../_chunks/dep-0dcc778a.mjs';
import './props.mjs';
import '../dialog/hooks/index.mjs';
import '../dialog/hooks/useAction.mjs';
import '../button/index.mjs';
import '../button/button.mjs';
import '../loading/index.mjs';
import '../loading/directive.mjs';
import '../loading/plugin.mjs';
import '../loading/loading.mjs';
import '../loading/icon/gradient.mjs';
import '../loading/props.mjs';
import './style/css.mjs';
import '../button/props.mjs';
import '../dialog/hooks/useSameTarget.mjs';
import './hooks/index.mjs';

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var createDrawer = function createDrawer(props, context) {
  var options = _objectSpread({}, props);
  var wrapper = document.createElement("div");
  var visible = ref(false);
  var style = options.style;
  var updateStyle = function updateStyle(style2) {
    if (style2) {
      wrapper.firstElementChild.style.cssText += style2;
    }
  };
  function destroySelf() {
    render(null, wrapper);
    wrapper.remove();
  }
  var component = defineComponent({
    setup: function setup(props2, _ref) {
      var expose = _ref.expose;
      var drawerOptions = ref(options);
      onMounted(function () {
        nextTick(function () {
          visible.value = true;
        });
        document.activeElement.blur();
        nextTick(function () {
          updateStyle(style);
        });
      });
      var update = function update(newOptions) {
        drawerOptions.value = _objectSpread(_objectSpread({}, options), newOptions);
      };
      expose({
        update: update
      });
      return function () {
        var _drawerOptions$value;
        var onClose = options.onClose || function () {
          visible.value = false;
          if (options.destroyOnClose) {
            setTimeout(function () {
              destroySelf();
            }, 300);
          }
        };
        delete options.style;
        return h(_Drawer, _objectSpread({
          onClose: onClose,
          visible: visible.value,
          drawerClassName: (_drawerOptions$value = drawerOptions.value) === null || _drawerOptions$value === void 0 ? void 0 : _drawerOptions$value.className
        }, drawerOptions.value));
      };
    }
  });
  var drawerComponent = createVNode(component);
  if (context !== null && context !== void 0 ? context : DrawerPlugin._context) {
    drawerComponent.appContext = context !== null && context !== void 0 ? context : DrawerPlugin._context;
  }
  var container = getAttach(options.attach);
  if (container) {
    container.appendChild(wrapper);
  } else {
    console.error("attach is not exist");
  }
  render(drawerComponent, wrapper);
  var destroyDrawer = function destroyDrawer() {
    visible.value = false;
    setTimeout(function () {
      destroySelf();
    }, 400);
  };
  var drawerNode = {
    show: function show() {
      visible.value = true;
    },
    hide: function hide() {
      visible.value = false;
    },
    update: function update(newOptions) {
      drawerComponent.component.exposed.update(omit(newOptions, ["style"]));
      updateStyle(newOptions.style);
    },
    destroy: function destroy() {
      destroyDrawer();
    }
  };
  return drawerNode;
};
var DrawerPlugin = createDrawer;
DrawerPlugin.install = function (app) {
  DrawerPlugin._context = app._context;
  app.config.globalProperties.$drawer = createDrawer;
};

export { DrawerPlugin, DrawerPlugin as default };
//# sourceMappingURL=plugin.mjs.map
