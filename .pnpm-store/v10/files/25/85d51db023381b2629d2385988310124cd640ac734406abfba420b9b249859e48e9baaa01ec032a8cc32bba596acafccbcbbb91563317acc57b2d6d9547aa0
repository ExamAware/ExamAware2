/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Vue = require('vue');
var _slicedToArray = require('@babel/runtime/helpers/slicedToArray');
var _toArray = require('@babel/runtime/helpers/toArray');
var _defineProperty = require('@babel/runtime/helpers/defineProperty');
var _typeof = require('@babel/runtime/helpers/typeof');
var tdesignIconsVueNext = require('tdesign-icons-vue-next');
require('@babel/runtime/helpers/toConsumableArray');
var dom = require('../../_chunks/dep-06276759.js');
var index = require('../../_chunks/dep-ecaaae91.js');
var index$1 = require('../../_chunks/dep-31c76dc6.js');
var log = require('../../_chunks/dep-733b2b51.js');
require('../../_chunks/dep-cc66acf1.js');
var table_components_tr = require('./tr.js');
var form_utils_formModel = require('../../form/utils/form-model.js');
var cloneDeep = require('../../_chunks/dep-8adeee89.js');
var set = require('../../_chunks/dep-e37d2fc0.js');
var isFunction = require('../../_chunks/dep-48f60c78.js');
var get = require('../../_chunks/dep-cd8cfdc0.js');
var isObject = require('../../_chunks/dep-0813861e.js');
require('../../_chunks/dep-953a77eb.js');
require('../../_chunks/dep-8abdfb41.js');
require('../../_chunks/dep-a55e8a08.js');
require('../../_chunks/dep-b3b464e8.js');
require('../../_chunks/dep-87589faa.js');
require('../../_chunks/dep-05f89f0d.js');
require('../../config-provider/hooks/useConfig.js');
require('../../_chunks/dep-5d7e2375.js');
require('../../_chunks/dep-94a7dc2d.js');
require('dayjs');
require('../../_chunks/dep-92e23f17.js');
require('../../_chunks/dep-0ff616fe.js');
require('../../_chunks/dep-5f52cd42.js');
require('../../_chunks/dep-f57bcb19.js');
require('../../_chunks/dep-dc4bbc14.js');
require('../../_chunks/dep-e27ea667.js');
require('../../_chunks/dep-165ca38a.js');
require('../../_chunks/dep-32412d92.js');
require('../../_chunks/dep-a8a3d718.js');
require('../../_chunks/dep-54e566d9.js');
require('../../_chunks/dep-591a72de.js');
require('../../_chunks/dep-4d2ef282.js');
require('../../_chunks/dep-929933ce.js');
require('../../_chunks/dep-6b1f0ef8.js');
require('@babel/runtime/helpers/createClass');
require('@babel/runtime/helpers/classCallCheck');
require('../utils/index.js');
require('../../_chunks/dep-ac11336c.js');
require('../../_chunks/dep-80a478d7.js');
require('../../_chunks/dep-71fa6bfc.js');
require('../hooks/useFixed.js');
require('../../_chunks/dep-7067edce.js');
require('../../_chunks/dep-55c70201.js');
require('@babel/runtime/helpers/objectWithoutProperties');
require('../../_chunks/dep-fd5a369e.js');
require('../../_chunks/dep-4ccaead1.js');
require('../../_chunks/dep-990979bb.js');
require('../../_chunks/dep-01738d56.js');
require('../../_chunks/dep-8b33876c.js');
require('../../_chunks/dep-445924d5.js');
require('../../_chunks/dep-dcb859c6.js');
require('../../_chunks/dep-0e08f598.js');
require('../../_chunks/dep-912c9727.js');
require('../../_chunks/dep-11b67e11.js');
require('../../_chunks/dep-b5e1f81f.js');
require('../../_chunks/dep-04599720.js');
require('../../_chunks/dep-9ce6873a.js');
require('../../_chunks/dep-441a3b7b.js');
require('../../_chunks/dep-e86abdd2.js');
require('../hooks/useClassName.js');
require('./ellipsis.js');
require('../../_chunks/dep-47c460dd.js');
require('../../_chunks/dep-4fa46641.js');
require('../../_chunks/dep-422dd97f.js');
require('../../_chunks/dep-427dabac.js');
require('../../_chunks/dep-72c4cc44.js');
require('../../_chunks/dep-ee355a9a.js');
require('../../_chunks/dep-23f77e26.js');
require('../../tooltip/index.js');
require('../../tooltip/tooltip.js');
require('../../tooltip/props.js');
require('../../popup/props.js');
require('../../popup/index.js');
require('../../popup/popup.js');
require('@popperjs/core');
require('../../_chunks/dep-8382953f.js');
require('../../_chunks/dep-c3dee00a.js');
require('../../_chunks/dep-e8ff2c13.js');
require('../../popup/container.js');
require('../../_chunks/dep-b6058ff9.js');
require('../../_chunks/dep-39403bd1.js');
require('../../_chunks/dep-3a7785db.js');
require('../../_chunks/dep-d62a674d.js');
require('../../tooltip/utils/index.js');
require('../../_chunks/dep-ace0b57c.js');
require('../base-table-props.js');
require('../hooks/useLazyLoad.js');
require('../../_chunks/dep-fb83a452.js');
require('../hooks/useRowspanAndColspan.js');
require('@babel/runtime/helpers/asyncToGenerator');
require('@babel/runtime/regenerator');
require('../../_chunks/dep-06a7e589.js');
require('../../_chunks/dep-d45110a6.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _slicedToArray__default = /*#__PURE__*/_interopDefaultLegacy(_slicedToArray);
var _toArray__default = /*#__PURE__*/_interopDefaultLegacy(_toArray);
var _defineProperty__default = /*#__PURE__*/_interopDefaultLegacy(_defineProperty);
var _typeof__default = /*#__PURE__*/_interopDefaultLegacy(_typeof);

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty__default["default"](e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var EditableCell = Vue.defineComponent({
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
    var _toRefs = Vue.toRefs(props),
      row = _toRefs.row,
      col = _toRefs.col;
    Vue.ref(null);
    var isKeepEditMode = Vue.computed(function () {
      var _col$value$edit;
      return (_col$value$edit = col.value.edit) === null || _col$value$edit === void 0 ? void 0 : _col$value$edit.keepEditMode;
    });
    var isEdit = Vue.ref(isKeepEditMode.value || ((_props$col$edit = props.col.edit) === null || _props$col$edit === void 0 ? void 0 : _props$col$edit.defaultEditable) || false);
    var editValue = Vue.ref();
    var errorList = Vue.ref();
    var classPrefix = index.usePrefixClass();
    var _useGlobalIcon = index$1.useGlobalIcon({
        Edit1Icon: tdesignIconsVueNext.Edit1Icon
      }),
      Edit1Icon = _useGlobalIcon.Edit1Icon;
    var updateEditedCellValue = function updateEditedCellValue(obj) {
      if (_typeof__default["default"](obj) === "object" && ("rowValue" in obj || obj.isUpdateCurrentRow)) {
        var rowValue = obj.isUpdateCurrentRow ? get.get(row.value, props.rowKey) : obj.rowValue;
        delete obj.rowValue;
        delete obj.isUpdateCurrentRow;
        context.emit("update-edited-cell", rowValue, row.value, obj);
      } else {
        editValue.value = obj;
      }
    };
    Vue.watch([isKeepEditMode], function (val) {
      if (val) {
        isEdit.value = true;
      }
    });
    var editOnListeners = Vue.computed(function () {
      var _col$value$edit2, _col$value$edit2$on;
      return ((_col$value$edit2 = col.value.edit) === null || _col$value$edit2 === void 0 || (_col$value$edit2$on = _col$value$edit2.on) === null || _col$value$edit2$on === void 0 ? void 0 : _col$value$edit2$on.call(_col$value$edit2, _objectSpread(_objectSpread({}, cellParams.value), {}, {
        editedRow: currentRow.value,
        updateEditedCellValue: updateEditedCellValue
      }))) || {};
    });
    var cellParams = Vue.computed(function () {
      return {
        rowIndex: props.rowIndex,
        colIndex: props.colIndex,
        col: props.col,
        row: props.row
      };
    });
    var currentRow = Vue.computed(function () {
      var colKey = col.value.colKey;
      var _ref = colKey.split(".") || [],
        _ref2 = _toArray__default["default"](_ref),
        firstKey = _ref2[0],
        restKeys = _ref2.slice(1);
      var newRow = _objectSpread({}, row.value);
      if (restKeys.length) {
        newRow[firstKey] = cloneDeep.cloneDeep(row.value[firstKey]);
        set.set(newRow[firstKey], restKeys.join("."), editValue.value);
      } else {
        set.set(newRow, colKey, editValue.value);
      }
      return newRow;
    });
    var cellNode = Vue.computed(function () {
      var node = table_components_tr.renderCell({
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
    var editProps = Vue.computed(function () {
      var edit = col.value.edit;
      return isFunction.isFunction(edit.props) ? edit.props(_objectSpread(_objectSpread({}, cellParams.value), {}, {
        editedRow: currentRow.value,
        updateEditedCellValue: updateEditedCellValue
      })) : _objectSpread({}, edit.props);
    });
    var componentProps = Vue.computed(function () {
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
    var isAbortEditOnChange = Vue.computed(function () {
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
        var rules = isFunction.isFunction(col.value.edit.rules) ? col.value.edit.rules(cellParams.value) : col.value.edit.rules;
        if (!col.value.edit || !rules || !rules.length) {
          var _props$onValidate;
          (_props$onValidate = props.onValidate) === null || _props$onValidate === void 0 || _props$onValidate.call(props, params);
          resolve(true);
          return;
        }
        form_utils_formModel.validate(editValue.value, rules).then(function (result) {
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
      if (isObject.isObject(a) && isObject.isObject(b)) {
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
        var oldValue = get.get(row.value, col.value.colKey);
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
            editedRow: _objectSpread(_objectSpread({}, props.row), {}, _defineProperty__default["default"]({}, props.col.colKey, editValue.value)),
            validateEdit: validateEdit,
            isEdit: false
          }));
          clearTimeout(timer);
        }, 0);
      });
    };
    var listeners = Vue.computed(function () {
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
        editedRow: _objectSpread(_objectSpread({}, props.row), {}, _defineProperty__default["default"]({}, props.col.colKey, val))
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
    Vue.onMounted(function () {
      var _props$col$edit2, _props$col$edit3;
      if ((_props$col$edit2 = props.col.edit) !== null && _props$col$edit2 !== void 0 && _props$col$edit2.defaultEditable || (_props$col$edit3 = props.col.edit) !== null && _props$col$edit3 !== void 0 && _props$col$edit3.keepEditMode) {
        enterEdit();
      }
    });
    var cellValue = Vue.computed(function () {
      return get.get(row.value, col.value.colKey);
    });
    Vue.watch(cellValue, function (cellValue2) {
      editValue.value = cellValue2;
    }, {
      immediate: true
    });
    Vue.watch(isEdit, function (isEdit2) {
      var isCellEditable = props.editable === void 0;
      if (!col.value.edit || !col.value.edit.component || !isCellEditable) return;
      if (isEdit2) {
        dom.on(document, "click", documentClickHandler);
      } else {
        dom.off(document, "click", documentClickHandler);
      }
    }, {
      immediate: true
    });
    Vue.watch(function () {
      return [props.editable, props.row, props.col, props.rowIndex, props.colIndex];
    }, function (_ref3) {
      var _ref4 = _slicedToArray__default["default"](_ref3, 1),
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
    Vue.watch(function () {
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
        return Vue.createVNode("div", {
          "class": props.tableBaseClass.cellEditable,
          "onClick": onCellClick
        }, [cellNode.value, ((_col$value$edit5 = col.value.edit) === null || _col$value$edit5 === void 0 ? void 0 : _col$value$edit5.showEditIcon) !== false && Vue.createVNode(Edit1Icon, null, null)]);
      }
      var Component = (_col$value$edit6 = col.value.edit) === null || _col$value$edit6 === void 0 ? void 0 : _col$value$edit6.component;
      if (!Component) {
        log.log.error("Table", "edit.component is required.");
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
      return Vue.createVNode("div", {
        "class": props.tableBaseClass.cellEditWrap,
        "onClick": function onClick(e) {
          e.stopPropagation();
        },
        "ref": "tableEditableCellRef"
      }, [Vue.createVNode(Component, Vue.mergeProps({
        "status": errorMessage ? ((_errorList$value2 = errorList.value) === null || _errorList$value2 === void 0 || (_errorList$value2 = _errorList$value2[0]) === null || _errorList$value2 === void 0 ? void 0 : _errorList$value2.type) || "error" : void 0,
        "tips": errorMessage
      }, componentProps.value, listeners.value, tmpEditOnListeners, {
        "value": editValue.value,
        "onChange": onEditChange
      }), null)]);
    };
  }
});

exports["default"] = EditableCell;
//# sourceMappingURL=editable-cell.js.map
