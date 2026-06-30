/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { _ as _defineProperty } from './dep-1dacc319.mjs';
import { _ as _toConsumableArray } from './dep-00b4e06a.mjs';
import { _ as _slicedToArray } from './dep-9003fde5.mjs';
import { toRefs, ref, watch, nextTick } from 'vue';
import { k as useDefaultValue } from './dep-7673347f.mjs';
import { _ as _classCallCheck, a as _createClass } from './dep-84fd47b3.mjs';
import { get, isUndefined, set } from 'lodash-es';
import { i as isRowSelectedDisabled } from './dep-ec9bd76e.mjs';
import './dep-6d2705e1.mjs';
import { l as log } from './dep-97ecacde.mjs';

function ownKeys$1(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$1(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$1(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$1(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var TABLE_TREE_ERROR_CODE_NOT_SAME_LEVEL = {
  code: 1001,
  reason: "The same level of rows can not be swapped."
};
function getUniqueRowValue(row, colKey) {
  var rowIndex = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var level = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
  var rowValue = get(row, colKey);
  return rowIndex || level ? "".concat(rowValue, "_").concat(rowIndex || 0, "_").concat(level || 0, "}") : rowValue;
}
var TableTreeStore = /*#__PURE__*/function () {
  function TableTreeStore() {
    _classCallCheck(this, TableTreeStore);
    _defineProperty(this, "treeDataMap", /* @__PURE__ */new Map());
    _defineProperty(this, "expandAllRowIndex", void 0);
    this.treeDataMap = /* @__PURE__ */new Map();
  }
  return _createClass(TableTreeStore, [{
    key: "initialTreeStore",
    value: function initialTreeStore(dataSource, columns, keys) {
      var _this$treeDataMap;
      (_this$treeDataMap = this.treeDataMap) === null || _this$treeDataMap === void 0 || _this$treeDataMap.clear();
      this.initialTreeDataMap(this.treeDataMap, dataSource, columns.find(function (col) {
        return col.colKey === "row-select";
      }), keys);
    }
  }, {
    key: "getAllUniqueKeys",
    value: function getAllUniqueKeys(data, keys) {
      var arr = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
      for (var i = 0, len = data.length; i < len; i++) {
        var item = data[i];
        arr.push(getUniqueRowValue(item, keys.rowKey));
        var children = get(item, keys.childrenKey);
        if (children !== null && children !== void 0 && children.length) {
          this.getAllUniqueKeys(children, keys, arr);
        }
      }
      return arr;
    }
  }, {
    key: "getExpandedChildrenKeys",
    value: function getExpandedChildrenKeys(data, keys) {
      var arr = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
      for (var i = 0, len = data.length; i < len; i++) {
        var item = data[i];
        var rowValue = getUniqueRowValue(item, keys.rowKey);
        var rowState = this.treeDataMap.get(rowValue);
        if (rowState.expanded) {
          arr.push(rowValue);
        }
        var children = get(item, keys.childrenKey);
        if (children !== null && children !== void 0 && children.length) {
          this.getExpandedChildrenKeys(children, keys, arr);
        }
      }
      return arr;
    }
  }, {
    key: "expandTreeNode",
    value: function expandTreeNode(rowList, dataSource, keys) {
      var _this = this;
      if (!rowList.length) return dataSource;
      rowList.forEach(function (rowValue) {
        var rowState = _this.treeDataMap.get(rowValue);
        if (!rowState) return;
        _this.toggleExpandData({
          row: rowState.row,
          rowIndex: rowState.rowIndex
        }, dataSource, keys, "expand");
      });
      return dataSource;
    }
  }, {
    key: "foldTreeNode",
    value: function foldTreeNode(rowList, dataSource, keys) {
      var _this2 = this;
      if (!rowList.length) return dataSource;
      rowList.forEach(function (rowValue) {
        var rowState = _this2.treeDataMap.get(rowValue);
        if (!rowState) return;
        _this2.toggleExpandData({
          row: rowState.row,
          rowIndex: rowState.rowIndex
        }, dataSource, keys, "fold");
      });
      return dataSource;
    }
  }, {
    key: "toggleExpandData",
    value: function toggleExpandData(p, dataSource, keys, type) {
      var _r$rowIndex;
      if (!p) {
        log.error("EnhancedTable", "the node toggleExpanded doest not exist in `data`");
        return dataSource;
      }
      var rowValue = get(p.row, keys.rowKey);
      if (isUndefined(rowValue)) {
        log.error("EnhancedTable", "`rowKey` could be wrong, can not get rowValue from `data` by `rowKey`.");
        return [];
      }
      var childrenNodes = get(p.row, keys.childrenKey);
      if (childrenNodes === true) return dataSource;
      var r = this.treeDataMap.get(rowValue);
      if (type === "expand" && r.expanded) return dataSource;
      if (type === "fold" && !r.expanded) return dataSource;
      r.rowIndex = (_r$rowIndex = r.rowIndex) !== null && _r$rowIndex !== void 0 ? _r$rowIndex : p.rowIndex;
      r.expanded = !r.expanded;
      this.treeDataMap.set(rowValue, r);
      return this.updateExpandRow(r, dataSource, keys);
    }
  }, {
    key: "updateExpandRow",
    value: function updateExpandRow(changeRow, dataSource, keys) {
      var row = changeRow.row,
        rowIndex = changeRow.rowIndex,
        expanded = changeRow.expanded;
      var treeDataMap = this.treeDataMap;
      var childrenNodes = get(row, keys.childrenKey);
      if (!row || !childrenNodes) return dataSource;
      if (expanded) {
        updateChildrenRowState(treeDataMap, changeRow, expanded, keys);
        updateRowExpandLength(treeDataMap, row, childrenNodes.length, "expand", keys);
        dataSource.splice.apply(dataSource, [rowIndex + 1, 0].concat(childrenNodes));
      } else {
        updateChildrenRowState(treeDataMap, changeRow, expanded, keys);
        var len = changeRow.expandChildrenLength || childrenNodes.length;
        updateRowExpandLength(treeDataMap, row, -1 * len, "fold", keys);
        dataSource.splice(rowIndex + 1, len);
      }
      updateRowIndex(treeDataMap, dataSource, {
        rowKey: keys.rowKey,
        minRowIndex: rowIndex + 1
      });
      return dataSource;
    }
  }, {
    key: "getData",
    value: function getData(key) {
      return this.treeDataMap.get(key);
    }
  }, {
    key: "updateData",
    value: function updateData(rowValue, newRowData, dataSource, keys) {
      var newRowValue = getUniqueRowValue(newRowData, keys.rowKey);
      var rowState = this.treeDataMap.get(rowValue);
      if (!rowState || rowState.rowIndex === -1) {
        updateRowData(dataSource, rowValue, newRowData, {
          rowKey: keys.rowKey,
          childrenKey: keys.childrenKey
        });
        return -1;
      }
      if (get(newRowData, keys.childrenKey) === true) {
        var oldChildren = get(rowState.row, keys.childrenKey);
        if (oldChildren !== null && oldChildren !== void 0 && oldChildren.length) {
          for (var i = 0, len = oldChildren.length; i < len; i++) {
            var rowValue2 = getUniqueRowValue(oldChildren[i], keys.rowKey);
            var state = this.treeDataMap.get(rowValue2);
            if (state) {
              this.treeDataMap["delete"](rowValue2);
            }
          }
        }
      }
      var currentRowIndex = rowState.rowIndex;
      rowState.row = newRowData;
      rowState.id = newRowValue;
      if (rowState.parent) {
        var siblings = get(rowState.parent.row, keys.childrenKey);
        var index = siblings.findIndex(function (item) {
          return getUniqueRowValue(item, keys.rowKey) === rowValue;
        });
        siblings[index] = newRowData;
      }
      this.treeDataMap.set(newRowValue, rowState);
      if (rowValue !== newRowValue) {
        this.treeDataMap["delete"](rowValue);
      }
      return currentRowIndex;
    }
  }, {
    key: "remove",
    value: function remove(key, dataSource, keys) {
      var r = this.treeDataMap.get(key);
      if (r && r.rowIndex >= 0) {
        var removeNumber = (r.expandChildrenLength || 0) + 1;
        dataSource.splice(r.rowIndex, removeNumber);
        if (r.parent) {
          var siblings = get(r.parent.row, keys.childrenKey);
          var index = siblings.findIndex(function (item) {
            return get(item, keys.rowKey) === key;
          });
          siblings.splice(index, 1);
          updateRowExpandLength(this.treeDataMap, r.parent.row, -1 * removeNumber, "delete", keys);
        }
        this.treeDataMap["delete"](key);
        updateRowIndex(this.treeDataMap, dataSource, {
          minRowIndex: r.rowIndex,
          rowKey: keys.rowKey,
          type: "remove"
        });
      } else {
        log.warn("EnhancedTable", "Can not remove this node, which is not appeared.");
      }
      return dataSource;
    }
  }, {
    key: "removeChildren",
    value: function removeChildren(key, dataSource, keys) {
      var r = this.treeDataMap.get(key);
      if (r && r.rowIndex >= 0) {
        var removeNumber = r.expandChildrenLength || 0;
        if (removeNumber) {
          dataSource.splice(r.rowIndex + 1, removeNumber);
        }
        if (r.parent) {
          updateRowExpandLength(this.treeDataMap, r.parent.row, -1 * removeNumber, "delete", keys);
        }
        r.expandChildrenLength = 0;
        r.expanded = false;
        set(r.row, keys.childrenKey, void 0);
        this.treeDataMap.set(key, r);
        if (removeNumber) {
          updateRowIndex(this.treeDataMap, dataSource, {
            minRowIndex: r.rowIndex + 1,
            rowKey: keys.rowKey,
            type: "remove"
          });
        }
      } else {
        log.warn("EnhancedTable", "Can not remove this node's children, which is not appeared.");
      }
      return dataSource;
    }
  }, {
    key: "appendTo",
    value: function appendTo(rowValue, newData, dataSource, keys) {
      var state = this.treeDataMap.get(rowValue);
      if (!this.validateDataExist(state, rowValue)) return dataSource;
      var children = get(state.row, keys.childrenKey);
      var isShowNewNode = state.expanded || !(children !== null && children !== void 0 && children.length);
      var tmpData = newData instanceof Array ? newData : [newData];
      var newChildrenData = [];
      var newChildrenStates = [];
      var firstNewChildrenIndex = -1;
      for (var i = 0, len = tmpData.length; i < len; i++) {
        var oneData = tmpData[i];
        var newRowValue = getUniqueRowValue(oneData, keys.rowKey);
        var mapState = this.treeDataMap.get(newRowValue);
        if (!this.validateDataDoubleExist(mapState, newRowValue)) {
          log.warn("Table", "Duplicated Data `".concat(newRowValue, "` has been removed."));
        } else {
          var rowIndex = isShowNewNode ? state.rowIndex + (state.expandChildrenLength || 0) + (i + 1) : -1;
          if (i === 0) {
            firstNewChildrenIndex = rowIndex;
          }
          var newState = {
            id: newRowValue,
            row: oneData,
            rowIndex: rowIndex,
            level: state.level + 1,
            expanded: false,
            expandChildrenLength: 0,
            disabled: false,
            path: _toConsumableArray(state.path),
            parent: state
          };
          newState.path = newState.path.concat(newState);
          newChildrenData.push(oneData);
          newChildrenStates.push(newState);
          this.treeDataMap.set(newRowValue, newState);
        }
      }
      if (!newChildrenData.length) return dataSource;
      if (children !== null && children !== void 0 && children.length) {
        state.row[keys.childrenKey] = state.row[keys.childrenKey].concat(newChildrenData);
      } else {
        state.row[keys.childrenKey] = newChildrenData;
        state.expanded = true;
      }
      if (isShowNewNode) {
        dataSource.splice.apply(dataSource, [firstNewChildrenIndex, 0].concat(newChildrenData));
        var newChildrenCount = newChildrenData.length || 1;
        updateRowExpandLength(this.treeDataMap, state.row, newChildrenCount, "insert", {
          rowKey: keys.rowKey,
          childrenKey: keys.childrenKey
        });
        updateRowIndex(this.treeDataMap, dataSource, {
          minRowIndex: firstNewChildrenIndex + newChildrenData.length - 1,
          rowKey: keys.rowKey,
          type: "add",
          count: 1
        });
      }
      return dataSource;
    }
  }, {
    key: "appendToRoot",
    value: function appendToRoot(newData, dataSource, keys) {
      var newDataSource = dataSource.concat(newData);
      var tmpNewData = newData instanceof Array ? newData : [newData];
      var dataSourceLen = dataSource.length;
      for (var i = 0, len = tmpNewData.length; i < len; i++) {
        var rowValue = get(tmpNewData[i], keys.rowKey);
        if (!rowValue) {
          log.error("Table", "`rowKey` could be wrong, can not get rowValue from `data` by `rowKey`.");
          continue;
        }
        var state = {
          id: rowValue,
          row: tmpNewData[i],
          rowIndex: dataSourceLen + i,
          level: 0,
          expanded: false,
          expandChildrenLength: 0,
          disabled: false
        };
        state.path = [state];
        this.treeDataMap.set(rowValue, state);
      }
      return newDataSource;
    }
  }, {
    key: "insertAfter",
    value: function insertAfter(rowValue, newData, dataSource, keys) {
      return this.insert(rowValue, newData, dataSource, keys, "after");
    }
  }, {
    key: "insertBefore",
    value: function insertBefore(rowValue, newData, dataSource, keys) {
      return this.insert(rowValue, newData, dataSource, keys, "before");
    }
  }, {
    key: "insert",
    value: function insert(rowValue, newData, dataSource, keys, type) {
      var state = this.treeDataMap.get(rowValue);
      if (!this.validateDataExist(state, rowValue)) return dataSource;
      var newRowValue = get(newData, keys.rowKey);
      var mapState = this.treeDataMap.get(newRowValue);
      if (!this.validateDataDoubleExist(mapState, newRowValue)) return dataSource;
      var rowIndex = type === "after" ? state.rowIndex + 1 : state.rowIndex;
      var newState = {
        id: newRowValue,
        row: newData,
        rowIndex: rowIndex,
        level: state.level,
        expanded: false,
        expandChildrenLength: 0,
        disabled: false,
        path: state.path.slice(0, -1),
        parent: state.parent
      };
      newState.path = newState.path.concat(newState);
      var dataIndex = type === "after" ? state.rowIndex + (state.expandChildrenLength + 1) : state.rowIndex;
      dataSource.splice(dataIndex, 0, newData);
      var distance = type === "after" ? 1 : 0;
      if (state.parent) {
        var childrenIndex = state.parent.row[keys.childrenKey].findIndex(function (t) {
          return rowValue === get(t, keys.rowKey);
        });
        state.parent.row[keys.childrenKey].splice(childrenIndex + distance, 0, newData);
        updateRowExpandLength(this.treeDataMap, state.parent.row, 1, "insert", keys);
      }
      this.treeDataMap.set(newRowValue, newState);
      updateRowIndex(this.treeDataMap, dataSource, {
        rowKey: keys.rowKey,
        minRowIndex: state.rowIndex + 1,
        type: "add"
      });
      return dataSource;
    }
  }, {
    key: "swapData",
    value: function swapData(dataSource, params, keys) {
      var startIndex = params.currentIndex;
      var endIndex = params.targetIndex;
      if (startIndex === endIndex) return {
        dataSource: dataSource,
        result: true
      };
      var startRowValue = get(params.current, keys.rowKey);
      var endRowValue = get(params.target, keys.rowKey);
      var startState = this.treeDataMap.get(startRowValue);
      var endState = this.treeDataMap.get(endRowValue);
      if (startState.level !== endState.level) {
        return {
          dataSource: dataSource,
          result: false,
          code: TABLE_TREE_ERROR_CODE_NOT_SAME_LEVEL.code,
          reason: TABLE_TREE_ERROR_CODE_NOT_SAME_LEVEL.reason
        };
      }
      var startLastIndex = startIndex + startState.expandChildrenLength + 1;
      var endLastIndex = endIndex + endState.expandChildrenLength + 1;
      var startRowList = dataSource.slice(startIndex, startLastIndex);
      var endRowList = dataSource.slice(endIndex, endLastIndex);
      if (startIndex > endIndex) {
        var middleRowList = dataSource.slice(endLastIndex, startIndex);
        var allSwapList = startRowList.concat(endRowList, middleRowList);
        dataSource.splice(endIndex, allSwapList.length);
        dataSource.splice.apply(dataSource, [endIndex, 0].concat(_toConsumableArray(allSwapList)));
        updateRowIndex(this.treeDataMap, dataSource, {
          rowKey: keys.rowKey,
          minRowIndex: endIndex,
          maxRowIndex: startLastIndex
        });
      } else {
        var _middleRowList = dataSource.slice(startLastIndex, endIndex);
        var _allSwapList = _middleRowList.concat(endRowList, startRowList);
        dataSource.splice(startIndex, _allSwapList.length);
        dataSource.splice.apply(dataSource, [startIndex, 0].concat(_toConsumableArray(_allSwapList)));
        updateRowIndex(this.treeDataMap, dataSource, {
          rowKey: keys.rowKey,
          minRowIndex: startIndex,
          maxRowIndex: endLastIndex
        });
      }
      if (startState.parent) {
        var children = startState.parent.row[keys.childrenKey];
        var count = 0;
        var targetIndex = -1;
        var currentIndex = -1;
        for (var i = 0, len = children.length; i < len; i++) {
          if (get(children[i], keys.rowKey) === startRowValue) {
            currentIndex = i;
            count += 1;
          }
          if (get(children[i], keys.rowKey) === endRowValue) {
            targetIndex = i;
            count += 1;
          }
          if (count >= 2) break;
        }
        if (currentIndex < targetIndex) {
          children.splice(targetIndex + 1, 0, params.current);
          children.splice(currentIndex, 1);
        } else {
          children.splice(currentIndex, 1);
          children.splice(targetIndex, 0, params.current);
        }
      }
      return {
        dataSource: dataSource,
        result: true
      };
    }
  }, {
    key: "expandAll",
    value: function expandAll(dataSource, keys) {
      var _this3 = this;
      this.expandAllRowIndex = 0;
      var newData = [];
      var _expandLoop = function expandLoop(dataSource2, keys2) {
        var parent = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
        for (var i = 0, len = dataSource2.length; i < len; i++) {
          var item = dataSource2[i];
          var rowValue = get(item, keys2.rowKey);
          var state = _this3.treeDataMap.get(rowValue);
          var children = get(item, keys2.childrenKey);
          state.rowIndex = _this3.expandAllRowIndex;
          if (children !== true && children !== null && children !== void 0 && children.length) {
            state.expanded = true;
          }
          state.expandChildrenLength = (children === null || children === void 0 ? void 0 : children.length) || 0;
          _this3.expandAllRowIndex += 1;
          newData.push(item);
          _this3.treeDataMap.set(rowValue, state);
          if (children !== null && children !== void 0 && children.length) {
            var tmpParent = parent;
            while ((_tmpParent = tmpParent) !== null && _tmpParent !== void 0 && _tmpParent.row) {
              var _tmpParent;
              tmpParent.expandChildrenLength += children.length;
              _this3.treeDataMap.set(tmpParent.id, tmpParent);
              tmpParent = tmpParent.parent;
            }
            _expandLoop(children, keys2, state);
          }
        }
      };
      _expandLoop(dataSource, keys);
      return newData;
    }
  }, {
    key: "foldAll",
    value: function foldAll(dataSource, keys) {
      var newData = [];
      var index = 0;
      for (var i = 0, len = dataSource.length; i < len; i++) {
        var item = dataSource[i];
        var rowValue = get(item, keys.rowKey);
        var state = this.treeDataMap.get(rowValue);
        state.rowIndex = state.level === 0 ? index : -1;
        state.expanded = false;
        state.expandChildrenLength = 0;
        if (state.level === 0) {
          newData.push(item);
          index += 1;
        }
        var children = get(item, keys.childrenKey);
        if (children !== null && children !== void 0 && children.length) {
          this.foldAll(children, keys);
        }
      }
      return newData;
    }
  }, {
    key: "getTreeNode",
    value: function getTreeNode(dataSource, keys) {
      var treeData = [];
      for (var i = 0, len = dataSource.length; i < len; i++) {
        var item = dataSource[i];
        var rowValue = get(item, keys.rowKey);
        var state = this.treeDataMap.get(rowValue);
        if (state.level === 0) {
          treeData.push(item);
        }
      }
      return treeData;
    }
  }, {
    key: "getTreeExpandedRow",
    value: function getTreeExpandedRow(dataSource, keys) {
      var _this4 = this;
      var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "data";
      var arr = [];
      dataSource.forEach(function (item) {
        var rowValue = get(item, keys.rowKey);
        var rowState = _this4.treeDataMap.get(rowValue);
        if (!rowState.expanded) return;
        if (type === "unique") {
          arr.push(rowValue);
        } else if (type === "data") {
          arr.push(item);
        } else {
          arr.push(rowState);
        }
      });
      return arr;
    }
  }, {
    key: "initialTreeDataMap",
    value: function initialTreeDataMap(treeDataMap, dataSource, column, keys) {
      var level = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
      var parent = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : null;
      for (var i = 0, len = dataSource.length; i < len; i++) {
        var item = dataSource[i];
        var rowValue = getUniqueRowValue(item, keys.rowKey);
        if (isUndefined(rowValue)) {
          log.error("EnhancedTable", "`rowKey` could be wrong, can not get rowValue from `data` by `rowKey`.");
          return;
        }
        var children = get(item, keys.childrenKey);
        var state = {
          id: rowValue,
          row: item,
          rowIndex: level === 0 ? i : -1,
          level: level,
          expanded: false,
          expandChildrenLength: 0,
          disabled: isRowSelectedDisabled(column, item, i),
          parent: parent
        };
        state.path = parent ? parent.path.concat(state) : [state];
        treeDataMap.set(rowValue, state);
        if (children !== null && children !== void 0 && children.length) {
          this.initialTreeDataMap(treeDataMap, children, column, keys, level + 1, state);
        }
      }
    }
  }, {
    key: "updateDisabledState",
    value: function updateDisabledState(dataSource, column, keys) {
      for (var i = 0, len = dataSource.length; i < len; i++) {
        var item = dataSource[i];
        var rowValue = get(item, keys.rowKey);
        if (isUndefined(rowValue)) {
          log.error("EnhancedTable", "`rowKey` could be wrong, can not get rowValue from `data` by `rowKey`.");
          return;
        }
        var state = this.treeDataMap.get(rowValue);
        state.disabled = isRowSelectedDisabled(column, item, i);
        this.treeDataMap.set(rowValue, state);
        var children = get(item, keys.childrenKey);
        if (children !== null && children !== void 0 && children.length) {
          this.updateDisabledState(children, column, keys);
        }
      }
    }
  }, {
    key: "validateDataExist",
    value: function validateDataExist(state, rowValue) {
      if (!state) {
        log.warn("EnhancedTable", "".concat(rowValue, " does not exist."));
        return false;
      }
      return true;
    }
  }, {
    key: "validateDataDoubleExist",
    value: function validateDataDoubleExist(state, rowValue) {
      if (state) {
        log.warn("EnhancedTable", "Duplicated Key. ".concat(rowValue, " already exists."));
        return false;
      }
      return true;
    }
  }]);
}();
function updateRowExpandLength(treeDataMap, row, distance, type, keys) {
  var tmp = row;
  while (tmp) {
    var _state$parent;
    var state = treeDataMap.get(get(tmp, keys.rowKey));
    var expandLen = (state.expandChildrenLength || 0) + distance;
    state.expandChildrenLength = Math.max(0, expandLen);
    tmp = state === null || state === void 0 || (_state$parent = state.parent) === null || _state$parent === void 0 ? void 0 : _state$parent.row;
  }
  if (type === "fold") {
    clearRowExpandLength(treeDataMap, row, keys);
  }
}
function clearRowExpandLength(treeDataMap, row, keys) {
  var children = get(row, keys.childrenKey);
  if (children !== null && children !== void 0 && children.length) {
    children.forEach(function (item) {
      var state = treeDataMap.get(get(item, keys.rowKey));
      if (!state) return;
      state.expandChildrenLength = 0;
      clearRowExpandLength(treeDataMap, state.row, keys);
    });
  }
}
function updateChildrenRowState(treeDataMap, rowState, expanded, keys) {
  var row = rowState.row,
    rowIndex = rowState.rowIndex;
  var childrenNodes = get(row, keys.childrenKey);
  childrenNodes.forEach(function (item, kidRowIndex) {
    var rowValue = get(item, keys.rowKey);
    var index = expanded ? rowIndex + 1 + kidRowIndex : -1;
    var curState = treeDataMap.get(rowValue);
    var newState = _objectSpread$1(_objectSpread$1({}, curState), {}, {
      row: item,
      rowIndex: index,
      expanded: false,
      parent: rowState
    });
    treeDataMap.set(rowValue, newState);
    if (!expanded) {
      var children = get(item, keys.childrenKey);
      if (children !== null && children !== void 0 && children.length) {
        updateChildrenRowState(treeDataMap, _objectSpread$1(_objectSpread$1({}, newState), {}, {
          rowIndex: -1,
          expanded: false
        }), expanded, keys);
      }
    }
  });
}
function updateRowData(data, key, newData, keys) {
  for (var i = 0, len = data.length; i < len; i++) {
    var item = data[i];
    if (get(item, keys.rowKey) === key) {
      data[i] = newData;
      return;
    }
    var children = get(item, keys.childrenKey) || [];
    if (children !== null && children !== void 0 && children.length) {
      updateRowData(children, key, newData, keys);
    }
  }
}
function updateRowIndex(treeDataMap, dataSource, extra) {
  var start = extra.minRowIndex || 0;
  var end = extra.maxRowIndex || dataSource.length;
  for (var rowIndex = start; rowIndex < end; rowIndex++) {
    var item = dataSource[rowIndex];
    var state = treeDataMap.get(get(item, extra.rowKey));
    if (!state) {
      log.warn("Table", "tree map went wrong");
    }
    state.rowIndex = rowIndex + ((extra === null || extra === void 0 ? void 0 : extra.count) || 1) - 1;
  }
}
function diffExpandedTreeNode() {
  var newExpandedNode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var oldExpandedNode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var removedList = [];
  var addedList = [];
  var newExpandedNodeMap = /* @__PURE__ */new Map();
  var oldExpandedNodeMap = /* @__PURE__ */new Map();
  for (var i = 0, len = newExpandedNode.length; i < len; i++) {
    newExpandedNodeMap.set(newExpandedNode[i], true);
  }
  for (var _i = 0, _len = oldExpandedNode.length; _i < _len; _i++) {
    oldExpandedNodeMap.set(oldExpandedNode[_i], true);
  }
  for (var _i2 = 0, _len2 = newExpandedNode.length; _i2 < _len2; _i2++) {
    if (!oldExpandedNodeMap.get(newExpandedNode[_i2])) {
      addedList.push(newExpandedNode[_i2]);
    }
  }
  for (var _i3 = 0, _len3 = oldExpandedNode.length; _i3 < _len3; _i3++) {
    if (!newExpandedNodeMap.get(oldExpandedNode[_i3])) {
      removedList.push(oldExpandedNode[_i3]);
    }
  }
  return {
    removedList: removedList,
    addedList: addedList
  };
}

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function useTreeDataExpand(props, params) {
  var store = params.store,
    dataSource = params.dataSource,
    rowDataKeys = params.rowDataKeys;
  var _toRefs = toRefs(props),
    data = _toRefs.data,
    expandedTreeNodes = _toRefs.expandedTreeNodes,
    tree = _toRefs.tree;
  var isDefaultExpandAllExecute = ref(false);
  var isDefaultExpandedTreeNodesExecute = ref(false);
  var _useDefaultValue = useDefaultValue(expandedTreeNodes, props.defaultExpandedTreeNodes, props.onExpandedTreeNodesChange, "expandedTreeNodes"),
    _useDefaultValue2 = _slicedToArray(_useDefaultValue, 2),
    tExpandedTreeNode = _useDefaultValue2[0],
    setTExpandedTreeNode = _useDefaultValue2[1];
  var changedExpandTreeNode = ref({
    type: "props-change"
  });
  function expandAll() {
    var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "expand-all";
    var list = arguments.length > 1 ? arguments[1] : undefined;
    var newData = list || data.value;
    dataSource.value = store.value.expandAll(newData, rowDataKeys.value);
    var expandedNode = dataSource.value.map(function (t) {
      return getUniqueRowValue(t, rowDataKeys.value.rowKey);
    });
    setTExpandedTreeNode(expandedNode, {
      row: void 0,
      rowState: void 0,
      rowIndex: void 0,
      type: "expand",
      trigger: type
    });
    changedExpandTreeNode.value.type = "expand-all";
  }
  function foldAll() {
    dataSource.value = _toConsumableArray(store.value.foldAll(dataSource.value, rowDataKeys.value));
    setTExpandedTreeNode([], {
      row: void 0,
      rowState: void 0,
      rowIndex: void 0,
      type: "fold",
      trigger: "fold-all"
    });
  }
  function onExpandFoldIconClick(p, trigger) {
    var _props$onTreeExpandCh;
    var row = p.row,
      rowIndex = p.rowIndex;
    changedExpandTreeNode.value = _objectSpread({
      type: "user-reaction-change"
    }, p);
    var rowValue = getUniqueRowValue(row, rowDataKeys.value.rowKey);
    var rowState = store.value.treeDataMap.get(rowValue);
    var expandedNodes = _toConsumableArray(tExpandedTreeNode.value);
    if (rowState.expanded) {
      var expandedChildrenKeys = store.value.getExpandedChildrenKeys([row], rowDataKeys.value);
      for (var i = 0, len = expandedNodes.length; i < len; i++) {
        var nodeValue = expandedNodes[i];
        if (expandedChildrenKeys.includes(nodeValue)) {
          expandedNodes[i] = void 0;
        }
      }
      expandedNodes = expandedNodes.filter(Boolean);
    } else {
      expandedNodes.push(rowValue);
    }
    var params2 = {
      row: row,
      rowIndex: rowIndex,
      rowState: rowState,
      trigger: trigger
    };
    setTExpandedTreeNode(expandedNodes, _objectSpread(_objectSpread({}, params2), {}, {
      type: rowState.expanded ? "fold" : "expand"
    }));
    (_props$onTreeExpandCh = props.onTreeExpandChange) === null || _props$onTreeExpandCh === void 0 || _props$onTreeExpandCh.call(props, params2);
  }
  function updateExpandState(data2, tExpandedTreeNode2) {
    var oldExpandedTreeNode = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
    var _diffExpandedTreeNode = diffExpandedTreeNode(tExpandedTreeNode2, oldExpandedTreeNode),
      addedList = _diffExpandedTreeNode.addedList,
      removedList = _diffExpandedTreeNode.removedList;
    store.value.expandTreeNode(addedList, data2, rowDataKeys.value);
    store.value.foldTreeNode(removedList, data2, rowDataKeys.value);
    return _toConsumableArray(data2);
  }
  watch([tExpandedTreeNode, data], function (_ref, _ref2) {
    var _ref3 = _slicedToArray(_ref, 1),
      tExpandedTreeNode2 = _ref3[0];
    var _ref4 = _slicedToArray(_ref2, 1),
      oldExpandedTreeNode = _ref4[0];
    if (!store.value.treeDataMap.size || !data.value.length) return;
    if (changedExpandTreeNode.value.type === "user-reaction-change") {
      var _ref5 = changedExpandTreeNode.value || {},
        row = _ref5.row,
        rowIndex = _ref5.rowIndex;
      dataSource.value = _toConsumableArray(store.value.toggleExpandData({
        row: row,
        rowIndex: rowIndex
      }, _toConsumableArray(dataSource.value), rowDataKeys.value));
    } else if (changedExpandTreeNode.value.type === "props-change") {
      updateExpandState(dataSource.value, tExpandedTreeNode2, oldExpandedTreeNode);
    }
    changedExpandTreeNode.value.type = "props-change";
  });
  var updateExpandOnDataChange = function updateExpandOnDataChange(data2) {
    var _tree$value, _tExpandedTreeNode$va;
    if ((_tree$value = tree.value) !== null && _tree$value !== void 0 && _tree$value.defaultExpandAll && !isDefaultExpandAllExecute.value) {
      expandAll("default-expand-all", _toConsumableArray(data2));
      isDefaultExpandAllExecute.value = true;
    } else if ((_tExpandedTreeNode$va = tExpandedTreeNode.value) !== null && _tExpandedTreeNode$va !== void 0 && _tExpandedTreeNode$va.length) {
      nextTick(function () {
        dataSource.value = updateExpandState(_toConsumableArray(data2), tExpandedTreeNode.value, []);
      });
    }
  };
  return {
    tExpandedTreeNode: tExpandedTreeNode,
    isDefaultExpandAllExecute: isDefaultExpandAllExecute,
    isDefaultExpandedTreeNodesExecute: isDefaultExpandedTreeNodesExecute,
    expandAll: expandAll,
    foldAll: foldAll,
    onExpandFoldIconClick: onExpandFoldIconClick,
    updateExpandOnDataChange: updateExpandOnDataChange
  };
}

export { TableTreeStore as T, useTreeDataExpand as u };
//# sourceMappingURL=dep-8d7b8b7d.mjs.map
