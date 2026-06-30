/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import _defineProperty from '@babel/runtime/helpers/defineProperty';
import { ref, defineComponent, onMounted, nextTick, h, createVNode, render } from 'vue';
import _Drawer from './drawer.js';
import { g as getAttach } from '../_chunks/dep-16bcfabc.js';
import { omit } from 'lodash-es';
import 'tdesign-icons-vue-next';
import '@babel/runtime/helpers/toConsumableArray';
import '@babel/runtime/helpers/typeof';
import '../_chunks/dep-2accc95a.js';
import '../_chunks/dep-fb805f69.js';
import '../_chunks/dep-9e6d8a78.js';
import '../config-provider/hooks/useConfig.js';
import '../config-provider/utils/context.js';
import '../_chunks/dep-938cd955.js';
import '../_chunks/dep-81b01cae.js';
import 'dayjs';
import '@babel/runtime/helpers/slicedToArray';
import '../_chunks/dep-3a7a2ef1.js';
import '../_chunks/dep-880d05b9.js';
import '@babel/runtime/helpers/createClass';
import '@babel/runtime/helpers/classCallCheck';
import '../_chunks/dep-ee693784.js';
import '../loading/icon/gradient.js';
import '../_chunks/dep-fe23be6e.js';
import '../_chunks/dep-2ea19dca.js';
import '../_chunks/dep-80a99546.js';
import '@babel/runtime/helpers/objectWithoutProperties';
import '../_chunks/dep-4f8b6591.js';
import '../loading/props.js';
import '../_chunks/dep-167f0981.js';
import './props.js';
import '../dialog/hooks/useAction.js';
import '../button/index.js';
import '../button/button.js';
import '../loading/index.js';
import '../loading/directive.js';
import '../loading/plugin.js';
import '../_chunks/dep-664b8b22.js';
import 'tdesign-vue-next/esm/common/style/web/components/loading/_index.less';
import '../button/props.js';
import '../_chunks/dep-f7dd3c12.js';
import '../_chunks/dep-d2a6e7a4.js';
import 'tdesign-vue-next/esm/common/style/web/components/button/_index.less';
import './hooks/index.js';

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
//# sourceMappingURL=plugin.js.map
