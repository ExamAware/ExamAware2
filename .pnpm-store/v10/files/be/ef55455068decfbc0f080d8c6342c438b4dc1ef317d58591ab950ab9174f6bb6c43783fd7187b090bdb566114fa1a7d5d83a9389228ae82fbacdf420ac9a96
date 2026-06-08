/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { defineComponent, createVNode, computed, Fragment } from 'vue';
import { QRCodeStatusProps } from './props.mjs';
import { RefreshIcon, CheckCircleFilledIcon } from 'tdesign-icons-vue-next';
import { Loading } from '../../loading/index.mjs';
import { u as usePrefixClass } from '../../_chunks/dep-7673347f.mjs';
import '../../loading/directive.mjs';
import 'lodash-es';
import '../../loading/plugin.mjs';
import '../../loading/loading.mjs';
import '../../_chunks/dep-9003fde5.mjs';
import '../../_chunks/dep-9f459d8b.mjs';
import '../../_chunks/dep-1dacc319.mjs';
import '../../_chunks/dep-257428bc.mjs';
import '../../loading/icon/gradient.mjs';
import '../../_chunks/dep-0cde7579.mjs';
import '../../_chunks/dep-00b4e06a.mjs';
import '../../_chunks/dep-0dcc778a.mjs';
import '../../_chunks/dep-51a43106.mjs';
import '../../_chunks/dep-fe644854.mjs';
import '../../loading/props.mjs';
import '../../config-provider/hooks/useConfig.mjs';
import '../../config-provider/utils/context.mjs';
import '../../_chunks/dep-a4c09318.mjs';
import '../../_chunks/dep-ffb85102.mjs';
import '../../_chunks/dep-ad588525.mjs';
import '../../_chunks/dep-22ebd6af.mjs';
import '../../_chunks/dep-cdd448ec.mjs';
import '../../_chunks/dep-97ecacde.mjs';
import '../../_chunks/dep-84fd47b3.mjs';
import '../../_chunks/dep-d36c4a3f.mjs';
import './style/css.mjs';

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
//# sourceMappingURL=qrcode-status.mjs.map
