/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { toRefs, ref, computed, watch, createVNode, h, mergeProps } from 'vue';
import { _ as _defineProperty } from '../../_chunks/dep-1dacc319.mjs';
import { _ as _slicedToArray } from '../../_chunks/dep-9003fde5.mjs';
import { _ as _toConsumableArray } from '../../_chunks/dep-00b4e06a.mjs';
import { SettingIcon } from 'tdesign-icons-vue-next';
import { isFunction } from 'lodash-es';
import { DialogPlugin } from '../../dialog/plugin.mjs';
import { renderTitle } from './useTableHeader.mjs';
import { i as useGlobalIcon, a as useTNodeJSX, k as useDefaultValue } from '../../_chunks/dep-7673347f.mjs';
import { getCurrentRowByKey } from '../utils/index.mjs';
import { Button } from '../../button/index.mjs';
import ColumnCheckboxGroup from '../components/column-checkbox-group.mjs';
import { useConfig } from '../../config-provider/hooks/useConfig.mjs';
import '../../_chunks/dep-257428bc.mjs';
import '../../_chunks/dep-9f459d8b.mjs';
import '../../dialog/dialog.mjs';
import '../../_chunks/dep-0dcc778a.mjs';
import '../../dialog/props.mjs';
import '../../dialog/hooks/index.mjs';
import '../../dialog/hooks/useAction.mjs';
import '../../dialog/hooks/useSameTarget.mjs';
import '../../_chunks/dep-03148507.mjs';
import '../../_chunks/dep-0cde7579.mjs';
import '../../dialog/utils/index.mjs';
import '../../dialog/dialog-card.mjs';
import '../../dialog/dialog-card-props.mjs';
import '../../_chunks/dep-51a43106.mjs';
import '../../_chunks/dep-fe644854.mjs';
import '../../_chunks/dep-22ebd6af.mjs';
import '../../_chunks/dep-cdd448ec.mjs';
import '../../_chunks/dep-97ecacde.mjs';
import '../../config-provider/utils/context.mjs';
import '../../_chunks/dep-a4c09318.mjs';
import '../../_chunks/dep-ffb85102.mjs';
import '../../_chunks/dep-ad588525.mjs';
import '../../_chunks/dep-84fd47b3.mjs';
import '../../_chunks/dep-d36c4a3f.mjs';
import '../../button/button.mjs';
import '../../loading/index.mjs';
import '../../loading/directive.mjs';
import '../../loading/plugin.mjs';
import '../../loading/loading.mjs';
import '../../loading/icon/gradient.mjs';
import '../../loading/props.mjs';
import './style/css.mjs';
import '../../button/props.mjs';
import './useMultiHeader.mjs';
import './useClassName.mjs';
import '../components/ellipsis.mjs';
import '../../tooltip/index.mjs';
import '../../tooltip/tooltip.mjs';
import '../../tooltip/props.mjs';
import '../../popup/props.mjs';
import '../../popup/index.mjs';
import '../../popup/popup.mjs';
import '@popperjs/core';
import '../../popup/container.mjs';
import '../../tooltip/utils/index.mjs';
import '../../checkbox/index.mjs';
import '../../checkbox/checkbox.mjs';
import '../../checkbox/props.mjs';
import '../../checkbox/consts/index.mjs';
import '../../checkbox/hooks/useCheckboxLazyLoad.mjs';
import '../../checkbox/hooks/useKeyboardEvent.mjs';
import '../../checkbox/group.mjs';
import '../../checkbox/checkbox-group-props.mjs';

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function getColumnKeys(columns) {
  var keys = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : /* @__PURE__ */new Set();
  for (var i = 0, len = columns.length; i < len; i++) {
    var _col$children;
    var col = columns[i];
    if ((_col$children = col.children) !== null && _col$children !== void 0 && _col$children.length) {
      getColumnKeys(col.children, keys);
    } else {
      col.colKey && keys.add(col.colKey);
    }
  }
  return keys;
}
function useColumnController(props, context) {
  var _useConfig = useConfig("table", props.locale),
    classPrefix = _useConfig.classPrefix,
    globalConfig = _useConfig.globalConfig;
  var _useGlobalIcon = useGlobalIcon({
      SettingIcon: SettingIcon
    }),
    SettingIcon$1 = _useGlobalIcon.SettingIcon;
  var _toRefs = toRefs(props),
    columns = _toRefs.columns,
    columnController = _toRefs.columnController,
    displayColumns = _toRefs.displayColumns,
    columnControllerVisible = _toRefs.columnControllerVisible;
  var dialogInstance = ref(null);
  var renderTNodeJSX = useTNodeJSX();
  var enabledColKeys = computed(function () {
    var _columnController$val;
    var arr = (((_columnController$val = columnController.value) === null || _columnController$val === void 0 ? void 0 : _columnController$val.fields) || _toConsumableArray(getColumnKeys(columns.value))).filter(function (v) {
      return v;
    });
    return new Set(arr);
  });
  var keys = _toConsumableArray(getColumnKeys(columns.value));
  var _useDefaultValue = useDefaultValue(displayColumns, props.defaultDisplayColumns || keys, props.onDisplayColumnsChange, "displayColumns"),
    _useDefaultValue2 = _slicedToArray(_useDefaultValue, 2),
    tDisplayColumns = _useDefaultValue2[0],
    setTDisplayColumns = _useDefaultValue2[1];
  var columnCheckboxKeys = ref(displayColumns.value || props.defaultDisplayColumns || keys);
  var checkboxGroupList = computed(function () {
    var _columnController$val2;
    if ((_columnController$val2 = columnController.value) !== null && _columnController$val2 !== void 0 && (_columnController$val2 = _columnController$val2.groupColumns) !== null && _columnController$val2 !== void 0 && _columnController$val2.length) {
      return getCheckboxGroupOptions(columns.value);
    }
    var oneItem = {
      label: globalConfig.value.selectAllText,
      options: getCheckboxOptions(columns.value)
    };
    return [oneItem];
  });
  watch([displayColumns], function (_ref) {
    var _ref2 = _slicedToArray(_ref, 1),
      val = _ref2[0];
    columnCheckboxKeys.value = val || props.defaultDisplayColumns || keys;
  });
  function getOneColumnItem(column, i) {
    return {
      label: function label() {
        return renderTitle(context.slots, column, i);
      },
      value: column.colKey,
      disabled: !enabledColKeys.value.has(column.colKey)
    };
  }
  function getCheckboxGroupOptions(columns2) {
    var _columnController$val3;
    var groupColumns = (_columnController$val3 = columnController.value) === null || _columnController$val3 === void 0 ? void 0 : _columnController$val3.groupColumns;
    if (!(groupColumns !== null && groupColumns !== void 0 && groupColumns.length)) return [];
    var groupList = [];
    var _loop = function loop(columns3) {
      for (var i = 0, len = columns3.length; i < len; i++) {
        var _column$children;
        var column = columns3[i];
        var oneItem = getOneColumnItem(column, i);
        for (var j = 0, len1 = groupColumns.length; j < len1; j++) {
          var _groupList$j;
          var groupInfo = groupColumns[j];
          if (!groupInfo.columns.includes(column.colKey)) continue;
          if ((_groupList$j = groupList[j]) !== null && _groupList$j !== void 0 && (_groupList$j = _groupList$j.options) !== null && _groupList$j !== void 0 && _groupList$j.length) {
            groupList[j].options.push(oneItem);
          } else {
            groupList[j] = _objectSpread(_objectSpread({}, groupColumns[j]), {}, {
              options: [oneItem]
            });
          }
        }
        if ((_column$children = column.children) !== null && _column$children !== void 0 && _column$children.length) {
          _loop(column.children);
        }
      }
    };
    _loop(columns2);
    return groupList;
  }
  function getCheckboxOptions(columns2) {
    var _columnController$val4;
    var arr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    if ((_columnController$val4 = columnController.value) !== null && _columnController$val4 !== void 0 && (_columnController$val4 = _columnController$val4.groupColumns) !== null && _columnController$val4 !== void 0 && _columnController$val4.length) return [];
    for (var i = 0, len = columns2.length; i < len; i++) {
      var _item$children;
      var item = columns2[i];
      if ((_item$children = item.children) !== null && _item$children !== void 0 && _item$children.length) {
        getCheckboxOptions(item.children, arr);
      } else {
        if (item.colKey) {
          arr.push(getOneColumnItem(item, i));
        }
      }
    }
    return arr;
  }
  var handleCheckChange = function handleCheckChange(val, ctx) {
    var _props$onColumnChange;
    columnCheckboxKeys.value = val;
    var params = {
      columns: val,
      type: ctx.type,
      currentColumn: getCurrentRowByKey(columns.value, String(ctx.current)),
      e: ctx.e
    };
    (_props$onColumnChange = props.onColumnChange) === null || _props$onColumnChange === void 0 || _props$onColumnChange.call(props, params);
  };
  var handleToggleColumnController = function handleToggleColumnController() {
    var _columnController$val8;
    if (dialogInstance.value) {
      dialogInstance.value.show();
      return;
    }
    dialogInstance.value = DialogPlugin.confirm(_objectSpread({
      header: globalConfig.value.columnConfigTitleText,
      body: function body() {
        var _columnController$val5;
        var widthMode = ((_columnController$val5 = columnController.value) === null || _columnController$val5 === void 0 ? void 0 : _columnController$val5.displayType) === "fixed-width" ? "fixed" : "auto";
        var _ref3 = columnController.value || {},
          columnControllerTopContent = _ref3.columnControllerTopContent,
          columnControllerBottomContent = _ref3.columnControllerBottomContent;
        var defaultNode = createVNode("div", {
          "class": ["".concat(classPrefix.value, "-table__column-controller"), "".concat(classPrefix.value, "-table__column-controller--").concat(widthMode)]
        }, [createVNode("div", {
          "class": "".concat(classPrefix.value, "-table__column-controller-body")
        }, [isFunction(columnControllerTopContent) ? columnControllerTopContent(h) : renderTNodeJSX("columnControllerTopContent"), globalConfig.value.columnConfigDescriptionText && createVNode("p", {
          "class": "".concat(classPrefix.value, "-table__column-controller-desc")
        }, [globalConfig.value.columnConfigDescriptionText]), checkboxGroupList.value.map(function (group, index) {
          var _columnController$val6, _columnController$val7;
          var uniqueKey = (_columnController$val6 = columnController.value) !== null && _columnController$val6 !== void 0 && (_columnController$val6 = _columnController$val6.groupColumns) !== null && _columnController$val6 !== void 0 && _columnController$val6.length ? String(group.value || index) : void 0;
          return createVNode(ColumnCheckboxGroup, {
            "key": group.value || index,
            "uniqueKey": uniqueKey,
            "value": columnCheckboxKeys.value,
            "label": group.label,
            "options": group.options,
            "onChange": handleCheckChange,
            "checkboxProps": (_columnController$val7 = columnController.value) === null || _columnController$val7 === void 0 ? void 0 : _columnController$val7.checkboxProps
          }, null);
        }), isFunction(columnControllerBottomContent) ? columnControllerBottomContent(h) : renderTNodeJSX("columnControllerBottomContent")])]);
        return defaultNode;
      },
      confirmBtn: globalConfig.value.confirmText,
      cancelBtn: globalConfig.value.cancelText,
      width: 612,
      onConfirm: function onConfirm() {
        setTDisplayColumns(_toConsumableArray(columnCheckboxKeys.value));
        if (columnControllerVisible.value === void 0) {
          dialogInstance.value.hide();
        } else {
          var _props$onColumnContro;
          (_props$onColumnContro = props.onColumnControllerVisibleChange) === null || _props$onColumnContro === void 0 || _props$onColumnContro.call(props, false, {
            trigger: "confirm"
          });
          context.emit("update:columnControllerVisible", false);
        }
      },
      onClose: function onClose() {
        columnCheckboxKeys.value = tDisplayColumns.value;
        if (columnControllerVisible.value === void 0) {
          dialogInstance.value.hide();
        } else {
          var _props$onColumnContro2;
          (_props$onColumnContro2 = props.onColumnControllerVisibleChange) === null || _props$onColumnContro2 === void 0 || _props$onColumnContro2.call(props, false, {
            trigger: "cancel"
          });
          context.emit("update:columnControllerVisible", false);
        }
      }
    }, ((_columnController$val8 = columnController.value) === null || _columnController$val8 === void 0 ? void 0 : _columnController$val8.dialogProps) || {}));
  };
  watch([columnControllerVisible], function (_ref4) {
    var _ref5 = _slicedToArray(_ref4, 1),
      visible = _ref5[0];
    if (visible === void 0) return;
    if (dialogInstance.value) {
      visible ? dialogInstance.value.show() : dialogInstance.value.hide();
    } else {
      visible && handleToggleColumnController();
    }
  }, {
    immediate: true
  });
  var renderColumnController = function renderColumnController() {
    var _props$columnControll;
    var isColumnController = !!(columnController.value && Object.keys(columnController.value).length);
    var placement = isColumnController ? columnController.value.placement || "top-right" : "";
    if (isColumnController && columnController.value.hideTriggerButton) return null;
    var classes = ["".concat(classPrefix.value, "-table__column-controller-trigger"), _defineProperty({}, "".concat(classPrefix.value, "-align-").concat(placement), !!placement)];
    return createVNode("div", {
      "class": classes
    }, [createVNode(Button, mergeProps({
      "theme": "default",
      "variant": "outline",
      "onClick": handleToggleColumnController,
      "content": globalConfig.value.columnConfigButtonText
    }, (_props$columnControll = props.columnController) === null || _props$columnControll === void 0 ? void 0 : _props$columnControll.buttonProps), {
      icon: function icon() {
        return createVNode(SettingIcon$1, null, null);
      }
    })]);
  };
  return {
    tDisplayColumns: tDisplayColumns,
    columnCheckboxKeys: columnCheckboxKeys,
    renderColumnController: renderColumnController
  };
}

export { useColumnController as default, getColumnKeys };
//# sourceMappingURL=useColumnController.mjs.map
