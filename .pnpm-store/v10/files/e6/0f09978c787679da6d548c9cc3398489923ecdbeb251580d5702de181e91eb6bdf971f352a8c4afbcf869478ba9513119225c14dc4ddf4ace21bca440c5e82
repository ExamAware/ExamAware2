/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _slicedToArray = require('@babel/runtime/helpers/slicedToArray');
var _defineProperty = require('@babel/runtime/helpers/defineProperty');
var Vue = require('vue');
var utils = require('../../_chunks/dep-7f185af2.js');
var form_utils_formModel = require('../../form/utils/form-model.js');
var table_hooks_useRowspanAndColspan = require('./useRowspanAndColspan.js');
var get = require('../../_chunks/dep-cd8cfdc0.js');
var cloneDeep = require('../../_chunks/dep-8adeee89.js');
var set = require('../../_chunks/dep-e37d2fc0.js');
var isFunction = require('../../_chunks/dep-48f60c78.js');
require('@babel/runtime/helpers/asyncToGenerator');
require('@babel/runtime/regenerator');
require('../../_chunks/dep-8abdfb41.js');
require('../../_chunks/dep-55c70201.js');
require('@babel/runtime/helpers/toConsumableArray');
require('@babel/runtime/helpers/objectWithoutProperties');
require('../../_chunks/dep-fd5a369e.js');
require('../../_chunks/dep-4ccaead1.js');
require('../../_chunks/dep-a55e8a08.js');
require('../../_chunks/dep-b3b464e8.js');
require('@babel/runtime/helpers/typeof');
require('../../_chunks/dep-87589faa.js');
require('../../_chunks/dep-05f89f0d.js');
require('../../_chunks/dep-990979bb.js');
require('../../_chunks/dep-0813861e.js');
require('../../_chunks/dep-06a7e589.js');
require('../../_chunks/dep-4d2ef282.js');
require('../../_chunks/dep-e27ea667.js');
require('../../_chunks/dep-165ca38a.js');
require('../../_chunks/dep-dc4bbc14.js');
require('../../_chunks/dep-5f52cd42.js');
require('../../_chunks/dep-929933ce.js');
require('../../_chunks/dep-d45110a6.js');
require('../../_chunks/dep-733b2b51.js');
require('../../_chunks/dep-ac11336c.js');
require('../../_chunks/dep-80a478d7.js');
require('../../_chunks/dep-a8a3d718.js');
require('../../_chunks/dep-f57bcb19.js');
require('../../_chunks/dep-71fa6bfc.js');
require('../../_chunks/dep-92e23f17.js');
require('../../_chunks/dep-0ff616fe.js');
require('../../_chunks/dep-32412d92.js');
require('../../_chunks/dep-6b1f0ef8.js');
require('../../_chunks/dep-04599720.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _slicedToArray__default = /*#__PURE__*/_interopDefaultLegacy(_slicedToArray);
var _defineProperty__default = /*#__PURE__*/_interopDefaultLegacy(_defineProperty);

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty__default["default"](e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function useRowEdit(props) {
  var _toRefs = Vue.toRefs(props),
    editableRowKeys = _toRefs.editableRowKeys;
  var cellRuleMap = /* @__PURE__ */new Map();
  var errorListMap = Vue.ref({});
  var editableKeysMap = Vue.computed(function () {
    return utils.getEditableKeysMap(props.editableRowKeys, props.data, props.rowKey || "id");
  });
  var editingCells = Vue.ref({});
  var editedFormData = Vue.ref({});
  var getErrorListMapByErrors = function getErrorListMapByErrors(errors) {
    var errorMap = {};
    errors.forEach(function (_ref) {
      var row = _ref.row,
        col = _ref.col,
        errorList = _ref.errorList;
      var rowValue = get.get(row, props.rowKey || "id");
      var key = [rowValue, col.colKey].join("__");
      if (errorList !== null && errorList !== void 0 && errorList.length) {
        errorMap[key] = errorList;
      } else {
        delete errorMap[key];
      }
    });
    return errorMap;
  };
  var validateOneRowData = function validateOneRowData(rowValue) {
    var rowRules = cellRuleMap.get(rowValue);
    if (!rowRules) return;
    var list = rowRules.map(function (item) {
      return new Promise(function (resolve) {
        var editedRow = item.editedRow,
          col = item.col;
        var rules = isFunction.isFunction(col.edit.rules) ? col.edit.rules(item) : col.edit.rules;
        if (!col.edit || !rules || !rules.length) {
          resolve(_objectSpread(_objectSpread({}, item), {}, {
            errorList: []
          }));
          return;
        }
        form_utils_formModel.validate(get.get(editedRow, col.colKey), rules).then(function (r) {
          resolve(_objectSpread(_objectSpread({}, item), {}, {
            errorList: r.filter(function (t) {
              return !t.result;
            })
          }));
        });
      });
    });
    return new Promise(function (resolve, reject) {
      Promise.all(list).then(function (errors) {
        resolve({
          errors: errors.filter(function (t) {
            var _t$errorList;
            return (_t$errorList = t.errorList) === null || _t$errorList === void 0 ? void 0 : _t$errorList.length;
          }),
          errorMap: getErrorListMapByErrors(errors)
        });
      }, reject);
    });
  };
  var validateRowData = function validateRowData(rowValue) {
    return new Promise(function (resolve, reject) {
      validateOneRowData(rowValue).then(function (_ref2) {
        var _props$onRowValidate;
        var errors = _ref2.errors,
          errorMap = _ref2.errorMap;
        errorListMap.value = errorMap;
        var tTrigger = "parent";
        (_props$onRowValidate = props.onRowValidate) === null || _props$onRowValidate === void 0 || _props$onRowValidate.call(props, {
          trigger: tTrigger,
          result: errors
        });
        resolve({
          trigger: tTrigger,
          result: errors
        });
      }, reject);
    });
  };
  var validateTableCellData = function validateTableCellData() {
    var cellKeys = Object.keys(editingCells.value);
    var existKeys = props.data.map(function (v) {
      var _v$props$rowKey;
      return (_v$props$rowKey = v[props.rowKey]) === null || _v$props$rowKey === void 0 ? void 0 : _v$props$rowKey.toString();
    });
    var promiseList = cellKeys.filter(function (v) {
      return existKeys.includes(table_hooks_useRowspanAndColspan.getRowKeyFromCell(v));
    }).map(function (cellKey) {
      return editingCells.value[cellKey].validateEdit("parent");
    });
    return new Promise(function (resolve, reject) {
      Promise.all(promiseList).then(function (arr) {
        var _props$onValidate;
        var allErrorListMap = {};
        arr.forEach(function (result, index) {
          if (result === true) return;
          allErrorListMap[cellKeys[index]] = result;
        });
        (_props$onValidate = props.onValidate) === null || _props$onValidate === void 0 || _props$onValidate.call(props, {
          result: allErrorListMap
        });
        resolve({
          result: allErrorListMap
        });
      }, reject);
    });
  };
  var validateTableData = function validateTableData() {
    if (Object.keys(editingCells.value).length) {
      return validateTableCellData();
    }
    var promiseList = [];
    var data = props.data || [];
    for (var i = 0, len = data.length; i < len; i++) {
      var rowValue = get.get(data[i], props.rowKey || "id");
      promiseList.push(validateOneRowData(rowValue));
    }
    return new Promise(function (resolve, reject) {
      Promise.all(promiseList).then(function (rList) {
        var _props$onValidate2;
        var allErrorListMap = {};
        rList.forEach(function () {
          var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
              errors: [],
              errorMap: {}
            },
            errorMap = _ref3.errorMap;
          errorMap && Object.assign(allErrorListMap, errorMap);
        });
        errorListMap.value = allErrorListMap;
        (_props$onValidate2 = props.onValidate) === null || _props$onValidate2 === void 0 || _props$onValidate2.call(props, {
          result: allErrorListMap
        });
        resolve({
          result: allErrorListMap
        });
      }, reject);
    });
  };
  var onUpdateEditedCell = function onUpdateEditedCell(rowValue, lastRowData, data) {
    if (!editedFormData.value[rowValue]) {
      editedFormData.value[rowValue] = cloneDeep.cloneDeep(lastRowData);
    }
    Object.entries(data).forEach(function (_ref4) {
      var _ref5 = _slicedToArray__default["default"](_ref4, 2),
        key = _ref5[0],
        val = _ref5[1];
      set.set(editedFormData.value[rowValue], key, val);
    });
  };
  var onRuleChange = function onRuleChange(context) {
    if (props.editableRowKeys) {
      var rowValue = get.get(context.row, props.rowKey || "id");
      var rules = cellRuleMap.get(rowValue);
      if (rules) {
        var index = rules.findIndex(function (t) {
          return t.col.colKey === context.col.colKey;
        });
        if (index === -1) {
          rules.push(context);
        } else {
          rules[index] = context;
        }
        cellRuleMap.set(rowValue, rules);
      } else {
        cellRuleMap.set(rowValue, [context]);
      }
    }
  };
  var clearValidateData = function clearValidateData() {
    errorListMap.value = {};
  };
  var onPrimaryTableCellEditChange = function onPrimaryTableCellEditChange(params) {
    var cellKey = table_hooks_useRowspanAndColspan.getCellKey(params.row, props.rowKey, params.col.colKey, params.colIndex);
    if (params.isEdit) {
      editingCells.value[cellKey] = params;
    } else {
      delete editingCells.value[cellKey];
    }
  };
  var getEditRowData = function getEditRowData(_ref6) {
    var _props$editableRowKey;
    var row = _ref6.row,
      col = _ref6.col;
    var rowValue = get.get(row, props.rowKey || "id");
    var editedRowData = editedFormData.value[rowValue];
    if (editedRowData && (_props$editableRowKey = props.editableRowKeys) !== null && _props$editableRowKey !== void 0 && _props$editableRowKey.includes(rowValue)) {
      var tmpRow = _objectSpread({}, editedRowData);
      set.set(tmpRow, col.colKey, get.get(editedRowData, col.colKey));
      return tmpRow;
    }
    return row;
  };
  Vue.watch(function () {
    var _editableRowKeys$valu;
    return (_editableRowKeys$valu = editableRowKeys.value) === null || _editableRowKeys$valu === void 0 ? void 0 : _editableRowKeys$valu.join(",");
  }, function (keyStr) {
    var editableRowKeys2 = keyStr.split(",");
    var rowValueList = Object.keys(editedFormData.value);
    rowValueList.forEach(function (key) {
      if (!editableRowKeys2.includes(key)) {
        delete editedFormData.value[key];
      }
    });
  });
  return {
    editedFormData: editedFormData,
    errorListMap: errorListMap,
    editableKeysMap: editableKeysMap,
    validateTableData: validateTableData,
    validateTableCellData: validateTableCellData,
    validateRowData: validateRowData,
    onRuleChange: onRuleChange,
    clearValidateData: clearValidateData,
    onUpdateEditedCell: onUpdateEditedCell,
    getEditRowData: getEditRowData,
    onPrimaryTableCellEditChange: onPrimaryTableCellEditChange
  };
}

exports["default"] = useRowEdit;
//# sourceMappingURL=useEditableRow.js.map
