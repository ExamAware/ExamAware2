/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { defineComponent, createVNode, computed, Fragment } from 'vue';
import { QRCodeStatusProps } from './props.js';
import { RefreshIcon, CheckCircleFilledIcon } from 'tdesign-icons-vue-next';
import { Loading } from '../../loading/index.js';
import 'lodash-es';
import '@babel/runtime/helpers/toConsumableArray';
import '@babel/runtime/helpers/typeof';
import '../../_chunks/dep-fe23be6e.js';
import { u as usePrefixClass } from '../../_chunks/dep-9e6d8a78.js';
import '@babel/runtime/helpers/slicedToArray';
import '../../_chunks/dep-880d05b9.js';
import '@babel/runtime/helpers/defineProperty';
import '../../loading/directive.js';
import '../../loading/plugin.js';
import '../../_chunks/dep-ee693784.js';
import '../../loading/icon/gradient.js';
import '../../_chunks/dep-2ea19dca.js';
import '../../_chunks/dep-80a99546.js';
import '@babel/runtime/helpers/objectWithoutProperties';
import '../../_chunks/dep-16bcfabc.js';
import '../../_chunks/dep-2accc95a.js';
import '../../_chunks/dep-fb805f69.js';
import '../../_chunks/dep-4f8b6591.js';
import '../../config-provider/hooks/useConfig.js';
import '../../config-provider/utils/context.js';
import '../../_chunks/dep-938cd955.js';
import '../../_chunks/dep-81b01cae.js';
import 'dayjs';
import '../../loading/props.js';
import '@babel/runtime/helpers/createClass';
import '@babel/runtime/helpers/classCallCheck';
import '../../_chunks/dep-664b8b22.js';
import 'tdesign-vue-next/esm/common/style/web/components/loading/_index.less';

var QRcodeStatus = defineComponent({
  name: "QRCodeStatus",
  props: QRCodeStatusProps,
  setup: function setup(props) {
    var _props$locale3;
    var classPrefix = usePrefixClass();
    var defaultSpin = createVNode(Loading, {
      "size": "32px"
    }, null);
    var defaultExpiredNode = computed(function () {
      var _props$locale, _props$locale2;
      return createVNode(Fragment, null, [createVNode("p", {
        "class": "".concat(classPrefix.value, "-expired__text")
      }, [(_props$locale = props.locale) === null || _props$locale === void 0 ? void 0 : _props$locale.expiredText]), (props === null || props === void 0 ? void 0 : props.onRefresh) && createVNode("p", {
        "class": "".concat(classPrefix.value, "-expired__button"),
        "onClick": props === null || props === void 0 ? void 0 : props.onRefresh
      }, [createVNode(RefreshIcon, {
        "size": "16"
      }, null), (_props$locale2 = props.locale) === null || _props$locale2 === void 0 ? void 0 : _props$locale2.refreshText])]);
    });
    var defaultScannedNode = createVNode("p", {
      "class": "".concat(classPrefix.value, "-scanned")
    }, [createVNode(CheckCircleFilledIcon, {
      "size": "16",
      "class": "".concat(classPrefix.value, "-scanned__icon")
    }, null), (_props$locale3 = props.locale) === null || _props$locale3 === void 0 ? void 0 : _props$locale3.scannedText]);
    var defaultNodes = computed(function () {
      return {
        expired: defaultExpiredNode.value,
        loading: defaultSpin,
        scanned: defaultScannedNode,
        active: null
      };
    });
    var renderStatus = function renderStatus(info) {
      return defaultNodes.value[info.status];
    };
    return function () {
      return createVNode(Fragment, null, [props.statusRender || renderStatus({
        status: props.status,
        onRefresh: props.onRefresh
      })]);
    };
  }
});

export { QRcodeStatus as default };
//# sourceMappingURL=qrcode-status.js.map
