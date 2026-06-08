/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _defineProperty = require('@babel/runtime/helpers/defineProperty');
var Vue = require('vue');
var avatar_avatarGroupProps = require('./avatar-group-props.js');
var avatar_avatar = require('./avatar.js');
require('@babel/runtime/helpers/toConsumableArray');
require('@babel/runtime/helpers/typeof');
require('../_chunks/dep-953a77eb.js');
var renderTnode = require('../_chunks/dep-4fa46641.js');
var index = require('../_chunks/dep-47c460dd.js');
var index$1 = require('../_chunks/dep-ecaaae91.js');
require('@babel/runtime/helpers/slicedToArray');
require('../_chunks/dep-cc66acf1.js');
require('./props.js');
require('../_chunks/dep-8382953f.js');
require('../config-provider/hooks/useConfig.js');
require('../_chunks/dep-5d7e2375.js');
require('../_chunks/dep-94a7dc2d.js');
require('../_chunks/dep-8abdfb41.js');
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
require('../_chunks/dep-a55e8a08.js');
require('../_chunks/dep-8adeee89.js');
require('../_chunks/dep-4d2ef282.js');
require('../_chunks/dep-929933ce.js');
require('../_chunks/dep-6b1f0ef8.js');
require('../image/index.js');
require('../image/image.js');
require('tdesign-icons-vue-next');
require('../_chunks/dep-fb83a452.js');
require('../_chunks/dep-f617290f.js');
require('../_chunks/dep-e7678f7a.js');
require('../_chunks/dep-733b2b51.js');
require('../image/props.js');
require('../space/index.js');
require('../space/space.js');
require('../space/props.js');
require('../_chunks/dep-3565d523.js');
require('../_chunks/dep-55c70201.js');
require('@babel/runtime/helpers/objectWithoutProperties');
require('../_chunks/dep-fd5a369e.js');
require('../_chunks/dep-4ccaead1.js');
require('../_chunks/dep-990979bb.js');
require('../_chunks/dep-06276759.js');
require('../_chunks/dep-422dd97f.js');
require('../_chunks/dep-71fa6bfc.js');
require('../_chunks/dep-80a478d7.js');
require('../_chunks/dep-427dabac.js');
require('../_chunks/dep-72c4cc44.js');
require('../_chunks/dep-ee355a9a.js');
require('../_chunks/dep-23f77e26.js');
require('@babel/runtime/helpers/createClass');
require('@babel/runtime/helpers/classCallCheck');
require('../_chunks/dep-d62a674d.js');
require('../_chunks/dep-ace0b57c.js');
require('../_chunks/dep-ac11336c.js');
require('../_chunks/dep-11b67e11.js');
require('../_chunks/dep-dcb859c6.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _defineProperty__default = /*#__PURE__*/_interopDefaultLegacy(_defineProperty);

function _isSlot(s) {
  return typeof s === 'function' || Object.prototype.toString.call(s) === '[object Object]' && !Vue.isVNode(s);
}
var _AvatarGroup = Vue.defineComponent({
  name: "TAvatarGroup",
  props: avatar_avatarGroupProps["default"],
  setup: function setup(props2) {
    Vue.provide("avatarGroup", props2);
    var renderTNodeJSX = index.useTNodeJSX();
    var AVATAR_NAME = index$1.usePrefixClass("avatar");
    var COMPONENT_NAME = index$1.usePrefixClass("avatar-group");
    var renderEllipsisAvatar = function renderEllipsisAvatar(children) {
      if ((children === null || children === void 0 ? void 0 : children.length) > props2.max) {
        var content = getEllipsisContent(children);
        var outAvatar = children.slice(0, props2.max);
        outAvatar.push(Vue.createVNode(avatar_avatar["default"], {
          "class": "".concat(AVATAR_NAME.value, "__collapse"),
          "size": props2.size
        }, _isSlot(content) ? content : {
          "default": function _default() {
            return [content];
          }
        }));
        return outAvatar;
      }
      return children;
    };
    var getEllipsisContent = function getEllipsisContent(children) {
      return renderTNodeJSX("collapseAvatar") || "+".concat(children.length - props2.max);
    };
    return function () {
      var children = renderTNodeJSX("default");
      var cascading = props2.cascading,
        max = props2.max;
      var groupClass = ["".concat(COMPONENT_NAME.value), _defineProperty__default["default"](_defineProperty__default["default"]({}, "".concat(AVATAR_NAME.value, "--offset-right"), cascading === "right-up"), "".concat(AVATAR_NAME.value, "--offset-left"), cascading === "left-up")];
      var content = max && max >= 0 ? [renderEllipsisAvatar(renderTnode.getChildren(children))] : [children];
      return Vue.createVNode("div", {
        "class": groupClass
      }, [content]);
    };
  }
});

exports["default"] = _AvatarGroup;
//# sourceMappingURL=group.js.map
