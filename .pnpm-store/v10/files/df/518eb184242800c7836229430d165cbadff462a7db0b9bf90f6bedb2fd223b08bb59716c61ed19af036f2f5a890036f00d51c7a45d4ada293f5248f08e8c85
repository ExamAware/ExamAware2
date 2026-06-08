/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { defineComponent, toRefs, ref, computed, watch, onMounted, createVNode, mergeProps } from 'vue';
import { _ as _slicedToArray } from '../../_chunks/dep-9003fde5.mjs';
import { _ as _toArray } from '../../_chunks/dep-4d44d5f2.mjs';
import { _ as _defineProperty } from '../../_chunks/dep-1dacc319.mjs';
import { _ as _typeof } from '../../_chunks/dep-257428bc.mjs';
import { get, cloneDeep, set, isFunction, isObject } from 'lodash-es';
import { Edit1Icon } from 'tdesign-icons-vue-next';
import { u as usePrefixClass, i as useGlobalIcon } from '../../_chunks/dep-7673347f.mjs';
import { renderCell } from './tr.mjs';
import { validate } from '../../form/utils/form-model.mjs';
import '../../_chunks/dep-6d2705e1.mjs';
import { o as on, c as off } from '../../_chunks/dep-51a43106.mjs';
import { l as log } from '../../_chunks/dep-97ecacde.mjs';
import '../../_chunks/dep-9f459d8b.mjs';
import '../../_chunks/dep-00b4e06a.mjs';
import '../../config-provider/hooks/useConfig.mjs';
import '../../config-provider/utils/context.mjs';
import '../../_chunks/dep-a4c09318.mjs';
import '../../_chunks/dep-fe644854.mjs';
import '../../_chunks/dep-ffb85102.mjs';
import '../../_chunks/dep-ad588525.mjs';
import '../../_chunks/dep-22ebd6af.mjs';
import '../../_chunks/dep-cdd448ec.mjs';
import '../../_chunks/dep-84fd47b3.mjs';
import '../../_chunks/dep-d36c4a3f.mjs';
import '../utils/index.mjs';
import '../hooks/useFixed.mjs';
import '../../_chunks/dep-03148507.mjs';
import '../../_chunks/dep-0cde7579.mjs';
import '../../_chunks/dep-0dcc778a.mjs';
import '../hooks/useClassName.mjs';
import './ellipsis.mjs';
import '../../tooltip/index.mjs';
import '../../tooltip/tooltip.mjs';
import '../../tooltip/props.mjs';
import '../../popup/props.mjs';
import '../../popup/index.mjs';
import '../../popup/popup.mjs';
import '@popperjs/core';
import '../../popup/container.mjs';
import './style/css.mjs';
import '../../tooltip/utils/index.mjs';
import '../base-table-props.mjs';
import '../hooks/useLazyLoad.mjs';
import '../hooks/useRowspanAndColspan.mjs';
import '../../_chunks/dep-88e5a7b0.mjs';

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var EditableCell = defineComponent({
  name: "TableEditableCell",
  props: {
    row: Object,
    rowKey: String,
    rowIndex: Number,
    col: Object,
    colIndex: Number,
    oldCell: [Function, String],
    tableBaseClass: Object,
    cellEmptyContent: [Function, String],
    editable: {
      type: Boolean,
      "default": void 0
    },
    readonly: {
      type: Boolean
    },
    errors: {
      type: Array,
      "default": void 0
    },
    onChange: Function,
    onValidate: Function,
    onRuleChange: Function,
    onEditableChange: Function
  },
  emits: ["update-edited-cell"],
  setup: function setup(props, context) {
    var _props$col$edit;
    var _toRefs = toRefs(props),
      row = _toRefs.row,
      col = _toRefs.col;
    var tableEditableCellRef = ref(null);
    var isKeepEditMode = computed(function () {
      var _col$value$edit;
      return (_col$value$edit = col.value.edit) === null || _col$value$edit === void 0 ? void 0 : _col$value$edit.keepEditMode;
    });
    var isEdit = ref(isKeepEditMode.value || ((_props$col$edit = props.col.edit) === null || _props$col$edit === void 0 ? void 0 : _props$col$edit.defaultEditable) || false);
    var editValue = ref();
    var errorList = ref();
    var classPrefix = usePrefixClass();
    var _useGlobalIcon = useGlobalIcon({
        Edit1Icon: Edit1Icon
      }),
      Edit1Icon$1 = _useGlobalIcon.Edit1Icon;
    var updateEditedCellValue = function updateEditedCellValue(obj) {
      if (_typeof(obj) === "object" && ("rowValue" in obj || obj.isUpdateCurrentRow)) {
        var rowValue = obj.isUpdateCurrentRow ? get(row.value, props.rowKey) : obj.rowValue;
        delete obj.rowValue;
        delete obj.isUpdateCurrentRow;
        context.emit("update-edited-cell", rowValue, row.value, obj);
      } else {
        editValue.value = obj;
      }
    };
    watch([isKeepEditMode], function (val) {
      if (val) {
        isEdit.value = true;
      }
    });
    var editOnListeners = computed(function () {
      var _col$value$edit2, _col$value$edit2$on;
      return ((_col$value$edit2 = col.value.edit) === null || _col$value$edit2 === void 0 || (_col$value$edit2$on = _col$value$edit2.on) === null || _col$value$edit2$on === void 0 ? void 0 : _col$value$edit2$on.call(_col$value$edit2, _objectSpread(_objectSpread({}, cellParams.value), {}, {
        editedRow: currentRow.value,
        updateEditedCellValue: updateEditedCellValue
      }))) || {};
    });
    var cellParams = computed(function () {
      return {
        rowIndex: props.rowIndex,
        colIndex: props.colIndex,
        col: props.col,
        row: props.row
      };
    });
    var currentRow = computed(function () {
      var colKey = col.value.colKey;
      var _ref = colKey.split(".") || [],
        _ref2 = _toArray(_ref),
        firstKey = _ref2[0],
        restKeys = _ref2.slice(1);
      var newRow = _objectSpread({}, row.value);
      if (restKeys.length) {
        newRow[firstKey] = cloneDeep(row.value[firstKey]);
        set(newRow[firstKey], restKeys.join("."), editValue.value);
      } else {
        set(newRow, colKey, editValue.value);
      }
      return newRow;
    });
    var cellNode = computed(function () {
      var node = renderCell({
        row: currentRow.value,
        col: _objectSpread(_objectSpread({}, col.value), {}, {
          cell: props.oldCell
        }),
        rowIndex: props.rowIndex,
        colIndex: props.colIndex
      }, context.slots, {
        cellEmptyContent: props.cellEmptyContent
      });
      return node;
    });
    var editProps = computed(function () {
      var edit = col.value.edit;
      return isFunction(edit.props) ? edit.props(_objectSpread(_objectSpread({}, cellParams.value), {}, {
        editedRow: currentRow.value,
        updateEditedCellValue: updateEditedCellValue
      })) : _objectSpread({}, edit.props);
    });
    var componentProps = computed(function () {
      var _edit$abortEditOnEven;
      var edit = col.value.edit;
      if (!edit) return {};
      var tmpProps = _objectSpread({}, editProps.value);
      delete tmpProps.onChange;
      delete tmpProps.value;
      (_edit$abortEditOnEven = edit.abortEditOnEvent) === null || _edit$abortEditOnEven === void 0 || _edit$abortEditOnEven.forEach(function (item) {
        delete tmpProps[item];
      });
      return tmpProps;
    });
    var isAbortEditOnChange = computed(function () {
      var _edit$abortEditOnEven2;
      var edit = col.value.edit;
      if (!edit) return false;
      return Boolean((_edit$abortEditOnEven2 = edit.abortEditOnEvent) === null || _edit$abortEditOnEven2 === void 0 ? void 0 : _edit$abortEditOnEven2.includes("onChange"));
    });
    var validateEdit = function validateEdit(trigger) {
      return new Promise(function (resolve) {
        var params = {
          result: [_objectSpread(_objectSpread({}, cellParams.value), {}, {
            errorList: [],
            value: editValue.value
          })],
          trigger: trigger
        };
        var rules = isFunction(col.value.edit.rules) ? col.value.edit.rules(cellParams.value) : col.value.edit.rules;
        if (!col.value.edit || !rules || !rules.length) {
          var _props$onValidate;
          (_props$onValidate = props.onValidate) === null || _props$onValidate === void 0 || _props$onValidate.call(props, params);
          resolve(true);
          return;
        }
        validate(editValue.value, rules).then(function (result) {
          var _props$onValidate2;
          var list = result === null || result === void 0 ? void 0 : result.filter(function (t) {
            return !t.result;
          });
          params.result[0].errorList = list;
          (_props$onValidate2 = props.onValidate) === null || _props$onValidate2 === void 0 || _props$onValidate2.call(props, params);
          if (!list || !list.length) {
            errorList.value = [];
            resolve(true);
          } else {
            errorList.value = list;
            resolve(list);
          }
        });
      });
    };
    var isSame = function isSame(a, b) {
      if (isObject(a) && isObject(b)) {
        return JSON.stringify(a) === JSON.stringify(b);
      }
      return a === b;
    };
    var updateAndSaveAbort = function updateAndSaveAbort(outsideAbortEvent, eventName) {
      for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        args[_key - 2] = arguments[_key];
      }
      validateEdit("self").then(function (result) {
        var _editOnListeners$valu, _editOnListeners$valu2;
        if (result !== true) return;
        var oldValue = get(row.value, col.value.colKey);
        if (!isSame(editValue.value, oldValue)) {
          editValue.value = oldValue;
          outsideAbortEvent === null || outsideAbortEvent === void 0 || outsideAbortEvent.apply(void 0, args);
        }
        if (isKeepEditMode.value) return;
        (_editOnListeners$valu = (_editOnListeners$valu2 = editOnListeners.value)[eventName]) === null || _editOnListeners$valu === void 0 || _editOnListeners$valu.call(_editOnListeners$valu2, args[2]);
        var timer = setTimeout(function () {
          var _props$onEditableChan;
          errorList.value = [];
          isEdit.value = false;
          (_props$onEditableChan = props.onEditableChange) === null || _props$onEditableChan === void 0 || _props$onEditableChan.call(props, _objectSpread(_objectSpread({}, cellParams.value), {}, {
            value: editValue.value,
            editedRow: _objectSpread(_objectSpread({}, props.row), {}, _defineProperty({}, props.col.colKey, editValue.value)),
            validateEdit: validateEdit,
            isEdit: false
          }));
          clearTimeout(timer);
        }, 0);
      });
    };
    var listeners = computed(function () {
      var _edit$abortEditOnEven3;
      var edit = col.value.edit;
      var isCellEditable = props.editable === void 0;
      if (!isEdit.value || !isCellEditable) return;
      if (!(edit !== null && edit !== void 0 && (_edit$abortEditOnEven3 = edit.abortEditOnEvent) !== null && _edit$abortEditOnEven3 !== void 0 && _edit$abortEditOnEven3.length)) return {};
      var tListeners = {};
      var outsideAbortEvent = edit === null || edit === void 0 ? void 0 : edit.onEdited;
      edit.abortEditOnEvent.forEach(function (itemEvent) {
        if (itemEvent === "onChange") return;
        tListeners[itemEvent] = function () {
          for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
          }
          updateAndSaveAbort.apply(void 0, [outsideAbortEvent, itemEvent, _objectSpread(_objectSpread({}, cellParams.value), {}, {
            trigger: itemEvent,
            newRowData: currentRow.value
          })].concat(args));
        };
      });
      return tListeners;
    });
    var onEditChange = function onEditChange(val) {
      var _editProps$value, _editProps$value$onCh, _props$onChange, _props$onRuleChange, _editOnListeners$valu3, _editOnListeners$valu4, _col$value$edit4;
      editValue.value = val;
      var params = _objectSpread(_objectSpread({}, cellParams.value), {}, {
        value: val,
        editedRow: _objectSpread(_objectSpread({}, props.row), {}, _defineProperty({}, props.col.colKey, val))
      });
      for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
        args[_key3 - 1] = arguments[_key3];
      }
      (_editProps$value = editProps.value) === null || _editProps$value === void 0 || (_editProps$value$onCh = _editProps$value.onChange) === null || _editProps$value$onCh === void 0 || _editProps$value$onCh.call.apply(_editProps$value$onCh, [_editProps$value, val].concat(args));
      (_props$onChange = props.onChange) === null || _props$onChange === void 0 || _props$onChange.call(props, params);
      (_props$onRuleChange = props.onRuleChange) === null || _props$onRuleChange === void 0 || _props$onRuleChange.call(props, params);
      (_editOnListeners$valu3 = editOnListeners.value) === null || _editOnListeners$valu3 === void 0 || (_editOnListeners$valu4 = _editOnListeners$valu3.onChange) === null || _editOnListeners$valu4 === void 0 || _editOnListeners$valu4.call(_editOnListeners$valu3, params);
      var isCellEditable = props.editable === void 0;
      if (isCellEditable && isAbortEditOnChange.value) {
        var _col$value$edit3;
        var outsideAbortEvent = (_col$value$edit3 = col.value.edit) === null || _col$value$edit3 === void 0 ? void 0 : _col$value$edit3.onEdited;
        updateAndSaveAbort.apply(void 0, [outsideAbortEvent, "change", _objectSpread(_objectSpread({}, cellParams.value), {}, {
          trigger: "onChange",
          newRowData: currentRow.value
        })].concat(args));
      }
      if (((_col$value$edit4 = col.value.edit) === null || _col$value$edit4 === void 0 ? void 0 : _col$value$edit4.validateTrigger) === "change") {
        validateEdit("self");
      }
    };
    var documentClickHandler = function documentClickHandler(e) {
      var _e$composedPath;
      if (!col.value.edit || !col.value.edit.component) return;
      if (!isEdit.value) return;
      var path = ((_e$composedPath = e.composedPath) === null || _e$composedPath === void 0 ? void 0 : _e$composedPath.call(e)) || e.path || [];
      var node = path.find(function (node2) {
        var _node2$classList;
        return (_node2$classList = node2.classList) === null || _node2$classList === void 0 ? void 0 : _node2$classList.contains("".concat(classPrefix.value, "-popup__content"));
      });
      if (node) return;
      var outsideAbortEvent = col.value.edit.onEdited;
      updateAndSaveAbort(outsideAbortEvent, "", _objectSpread(_objectSpread({}, cellParams.value), {}, {
        trigger: "document",
        newRowData: currentRow.value
      }));
    };
    var enterEdit = function enterEdit() {
      var _props$onEditableChan2;
      (_props$onEditableChan2 = props.onEditableChange) === null || _props$onEditableChan2 === void 0 || _props$onEditableChan2.call(props, _objectSpread(_objectSpread({}, cellParams.value), {}, {
        value: editValue.value,
        editedRow: props.row,
        isEdit: true,
        validateEdit: validateEdit
      }));
    };
    var onCellClick = function onCellClick(e) {
      isEdit.value = true;
      enterEdit();
      e.stopPropagation();
    };
    onMounted(function () {
      var _props$col$edit2, _props$col$edit3;
      if ((_props$col$edit2 = props.col.edit) !== null && _props$col$edit2 !== void 0 && _props$col$edit2.defaultEditable || (_props$col$edit3 = props.col.edit) !== null && _props$col$edit3 !== void 0 && _props$col$edit3.keepEditMode) {
        enterEdit();
      }
    });
    var cellValue = computed(function () {
      return get(row.value, col.value.colKey);
    });
    watch(cellValue, function (cellValue2) {
      editValue.value = cellValue2;
    }, {
      immediate: true
    });
    watch(isEdit, function (isEdit2) {
      var isCellEditable = props.editable === void 0;
      if (!col.value.edit || !col.value.edit.component || !isCellEditable) return;
      if (isEdit2) {
        on(document, "click", documentClickHandler);
      } else {
        off(document, "click", documentClickHandler);
      }
    }, {
      immediate: true
    });
    watch(function () {
      return [props.editable, props.row, props.col, props.rowIndex, props.colIndex];
    }, function (_ref3) {
      var _ref4 = _slicedToArray(_ref3, 1),
        editable = _ref4[0];
      if (editable === false) {
        editValue.value = cellValue.value;
      } else if (editable === true) {
        var _props$onRuleChange2;
        (_props$onRuleChange2 = props.onRuleChange) === null || _props$onRuleChange2 === void 0 || _props$onRuleChange2.call(props, _objectSpread(_objectSpread({}, cellParams.value), {}, {
          value: cellValue.value,
          editedRow: row.value
        }));
      }
    }, {
      immediate: true
    });
    watch(function () {
      return props.errors;
    }, function (errors) {
      errorList.value = errors;
    });
    return function () {
      var _col$value$edit6, _errorList$value, _col$value$edit7, _errorList$value2;
      if (props.readonly) {
        return cellNode.value;
      }
      if (props.editable === void 0 && !isEdit.value || props.editable === false) {
        var _col$value$edit5;
        return createVNode("div", {
          "class": props.tableBaseClass.cellEditable,
          "onClick": onCellClick
        }, [cellNode.value, ((_col$value$edit5 = col.value.edit) === null || _col$value$edit5 === void 0 ? void 0 : _col$value$edit5.showEditIcon) !== false && createVNode(Edit1Icon$1, null, null)]);
      }
      var Component = (_col$value$edit6 = col.value.edit) === null || _col$value$edit6 === void 0 ? void 0 : _col$value$edit6.component;
      if (!Component) {
        log.error("Table", "edit.component is required.");
        return null;
      }
      var errorMessage = (_errorList$value = errorList.value) === null || _errorList$value === void 0 || (_errorList$value = _errorList$value[0]) === null || _errorList$value === void 0 ? void 0 : _errorList$value.message;
      var tmpEditOnListeners = _objectSpread({}, editOnListeners.value);
      delete tmpEditOnListeners.onChange;
      if ((_col$value$edit7 = col.value.edit) !== null && _col$value$edit7 !== void 0 && (_col$value$edit7 = _col$value$edit7.abortEditOnEvent) !== null && _col$value$edit7 !== void 0 && _col$value$edit7.length) {
        col.value.edit.abortEditOnEvent.forEach(function (onEventName) {
          if (tmpEditOnListeners[onEventName]) {
            delete tmpEditOnListeners[onEventName];
          }
        });
      }
      return createVNode("div", {
        "class": props.tableBaseClass.cellEditWrap,
        "onClick": function onClick(e) {
          e.stopPropagation();
        },
        "ref": "tableEditableCellRef"
      }, [createVNode(Component, mergeProps({
        "status": errorMessage ? ((_errorList$value2 = errorList.value) === null || _errorList$value2 === void 0 || (_errorList$value2 = _errorList$value2[0]) === null || _errorList$value2 === void 0 ? void 0 : _errorList$value2.type) || "error" : void 0,
        "tips": errorMessage
      }, componentProps.value, listeners.value, tmpEditOnListeners, {
        "value": editValue.value,
        "onChange": onEditChange
      }), null)]);
    };
  }
});

export { EditableCell as default };
//# sourceMappingURL=editable-cell.mjs.map
