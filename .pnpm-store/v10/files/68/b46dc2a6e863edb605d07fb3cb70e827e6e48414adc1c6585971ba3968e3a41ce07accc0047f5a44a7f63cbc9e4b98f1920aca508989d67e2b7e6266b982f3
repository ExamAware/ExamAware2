/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { _ as _defineProperty } from '../_chunks/dep-1dacc319.mjs';
import { isVNode, defineComponent, provide, createVNode } from 'vue';
import props from './avatar-group-props.mjs';
import _Avatar from './avatar.mjs';
import { a as useTNodeJSX, u as usePrefixClass } from '../_chunks/dep-7673347f.mjs';
import { h as getChildren } from '../_chunks/dep-51a43106.mjs';
import '../_chunks/dep-257428bc.mjs';
import './props.mjs';
import '../image/index.mjs';
import '../image/image.mjs';
import '../_chunks/dep-9003fde5.mjs';
import '../_chunks/dep-9f459d8b.mjs';
import 'lodash-es';
import 'tdesign-icons-vue-next';
import '../_chunks/dep-22ebd6af.mjs';
import '../config-provider/hooks/useConfig.mjs';
import '../config-provider/utils/context.mjs';
import '../_chunks/dep-a4c09318.mjs';
import '../_chunks/dep-fe644854.mjs';
import '../_chunks/dep-ffb85102.mjs';
import '../_chunks/dep-ad588525.mjs';
import '../image/props.mjs';
import '../space/index.mjs';
import '../space/space.mjs';
import '../space/props.mjs';
import '../_chunks/dep-0cde7579.mjs';
import '../_chunks/dep-00b4e06a.mjs';
import '../_chunks/dep-0dcc778a.mjs';
import '../_chunks/dep-cdd448ec.mjs';
import '../_chunks/dep-97ecacde.mjs';
import '../_chunks/dep-84fd47b3.mjs';
import '../_chunks/dep-d36c4a3f.mjs';
import './style/css.mjs';

function _isSlot(s) {
  return typeof s === 'function' || Object.prototype.toString.call(s) === '[object Object]' && !isVNode(s);
}
var _AvatarGroup = defineComponent({
  name: "TAvatarGroup",
  props: props,
  setup: function setup(props2) {
    provide("avatarGroup", props2);
    var renderTNodeJSX = useTNodeJSX();
    var AVATAR_NAME = usePrefixClass("avatar");
    var COMPONENT_NAME = usePrefixClass("avatar-group");
    var renderEllipsisAvatar = function renderEllipsisAvatar(children) {
      if ((children === null || children === void 0 ? void 0 : children.length) > props2.max) {
        var content = getEllipsisContent(children);
        var outAvatar = children.slice(0, props2.max);
        outAvatar.push(createVNode(_Avatar, {
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
      var groupClass = ["".concat(COMPONENT_NAME.value), _defineProperty(_defineProperty({}, "".concat(AVATAR_NAME.value, "--offset-right"), cascading === "right-up"), "".concat(AVATAR_NAME.value, "--offset-left"), cascading === "left-up")];
      var content = max && max >= 0 ? [renderEllipsisAvatar(getChildren(children))] : [children];
      return createVNode("div", {
        "class": groupClass
      }, [content]);
    };
  }
});

export { _AvatarGroup as default };
//# sourceMappingURL=group.mjs.map
