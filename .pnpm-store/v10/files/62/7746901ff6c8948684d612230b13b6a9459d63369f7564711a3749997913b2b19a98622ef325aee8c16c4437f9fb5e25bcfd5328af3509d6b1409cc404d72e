/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { _ as _slicedToArray } from '../../_chunks/dep-9003fde5.mjs';
import { _ as _defineProperty } from '../../_chunks/dep-1dacc319.mjs';
import { toRefs, ref, computed, watch } from 'vue';
import { get, isFunction, cloneDeep, set } from 'lodash-es';
import { c as getEditableKeysMap } from '../../_chunks/dep-ec9bd76e.mjs';
import { validate } from '../../form/utils/form-model.mjs';
import { getRowKeyFromCell, getCellKey } from './useRowspanAndColspan.mjs';
import '../../_chunks/dep-9f459d8b.mjs';
import '../../_chunks/dep-257428bc.mjs';
import '../../_chunks/dep-88e5a7b0.mjs';
import '../../_chunks/dep-fe644854.mjs';
import '../../_chunks/dep-0cde7579.mjs';
import '../../_chunks/dep-00b4e06a.mjs';
import '../../_chunks/dep-0dcc778a.mjs';
import '../../_chunks/dep-6d2705e1.mjs';
import '../../_chunks/dep-97ecacde.mjs';

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function useRowEdit(props) {
  var _toRefs = toRefs(props),
    editableRowKeys = _toRefs.editableRowKeys;
  var cellRuleMap = /* @__PURE__ */new Map();
  var errorListMap = ref({});
  var editableKeysMap = computed(function () {
    return getEditableKeysMap(props.editableRowKeys, props.data, props.rowKey || "id");
  });
  var editingCells = ref({});
  var editedFormData = ref({});
  var getErrorListMapByErrors = function getErrorListMapByErrors(errors) {
    var errorMap = {};
    errors.forEach(function (_ref) {
      var row = _ref.row,
        col = _ref.col,
        errorList = _ref.errorList;
      var rowValue = get(row, props.rowKey || "id");
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
        var rules = isFunction(col.edit.rules) ? col.edit.rules(item) : col.edit.rules;
        if (!col.edit || !rules || !rules.length) {
          resolve(_objectSpread(_objectSpread({}, item), {}, {
            errorList: []
          }));
          return;
        }
        validate(get(editedRow, col.colKey), rules).then(function (r) {
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
      return existKeys.includes(getRowKeyFromCell(v));
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
      var rowValue = get(data[i], props.rowKey || "id");
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
      editedFormData.value[rowValue] = cloneDeep(lastRowData);
    }
    Object.entries(data).forEach(function (_ref4) {
      var _ref5 = _slicedToArray(_ref4, 2),
        key = _ref5[0],
        val = _ref5[1];
      set(editedFormData.value[rowValue], key, val);
    });
  };
  var onRuleChange = function onRuleChange(context) {
    if (props.editableRowKeys) {
      var rowValue = get(context.row, props.rowKey || "id");
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
    var cellKey = getCellKey(params.row, props.rowKey, params.col.colKey, params.colIndex);
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
    var rowValue = get(row, props.rowKey || "id");
    var editedRowData = editedFormData.value[rowValue];
    if (editedRowData && (_props$editableRowKey = props.editableRowKeys) !== null && _props$editableRowKey !== void 0 && _props$editableRowKey.includes(rowValue)) {
      var tmpRow = _objectSpread({}, editedRowData);
      set(tmpRow, col.colKey, get(editedRowData, col.colKey));
      return tmpRow;
    }
    return row;
  };
  watch(function () {
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

export { useRowEdit as default };
//# sourceMappingURL=useEditableRow.mjs.map
