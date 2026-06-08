/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function getNodeDepth(columns, depthMap) {
  var depth = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  var maxDepth = depth;
  for (var i = 0, len = columns.length; i < len; i++) {
    var _col$children;
    var col = columns[i];
    depthMap.set(col, depth);
    if (col !== null && col !== void 0 && (_col$children = col.children) !== null && _col$children !== void 0 && _col$children.length) {
      var deep = getNodeDepth(col.children, depthMap, depth + 1);
      if (deep > maxDepth) {
        maxDepth = deep;
      }
    }
  }
  return maxDepth;
}
function getChildrenNodeWidth(node) {
  var count = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var countNew = count;
  var childrenList = (node === null || node === void 0 ? void 0 : node.children) || [];
  for (var i = 0, len = childrenList.length; i < len; i++) {
    var item = childrenList[i];
    if (item.children) {
      countNew = getChildrenNodeWidth(item, countNew);
    } else {
      countNew += 1;
    }
  }
  return countNew;
}
function getThRowspanAndColspan(columns) {
  var depthMap = /* @__PURE__ */new Map();
  var columnsDepth = getNodeDepth(columns, depthMap);
  var rowspanAndColspanMap = /* @__PURE__ */new Map();
  var _loop = function loop(nodes, leafColumns2) {
    for (var i = 0, len = nodes.length; i < len; i++) {
      var _col$children2;
      var col = nodes[i];
      var rowspan = col.children ? 1 : columnsDepth - depthMap.get(col) + 1;
      var colspan = col.children ? getChildrenNodeWidth(col) : 1;
      var span = {};
      rowspan > 1 && (span.rowspan = rowspan);
      colspan > 1 && (span.colspan = colspan);
      rowspanAndColspanMap.set(col, span);
      if (col !== null && col !== void 0 && (_col$children2 = col.children) !== null && _col$children2 !== void 0 && _col$children2.length) {
        _loop(col.children, leafColumns2);
      } else {
        leafColumns2.push(col);
      }
    }
  };
  var leafColumns = [];
  _loop(columns, leafColumns);
  return {
    rowspanAndColspanMap: rowspanAndColspanMap,
    leafColumns: leafColumns
  };
}
function getThList(columns) {
  var _loop2 = function loop(nodes, thRows) {
    var _children;
    var thRowData = [];
    var children = [];
    for (var i = 0, len = nodes.length; i < len; i++) {
      var _node$children;
      var node = nodes[i];
      var thList = [node];
      thRowData = thRowData.concat(thList);
      if (node !== null && node !== void 0 && (_node$children = node.children) !== null && _node$children !== void 0 && _node$children.length) {
        children = children.concat(node.children);
      }
    }
    if ((_children = children) !== null && _children !== void 0 && _children.length) {
      _loop2(children, thRows);
    }
    thRows.push(thRowData);
    return thRowData;
  };
  var list = [];
  _loop2(columns, list);
  list = list.reverse();
  return list;
}

exports.getChildrenNodeWidth = getChildrenNodeWidth;
exports.getNodeDepth = getNodeDepth;
exports.getThList = getThList;
exports.getThRowspanAndColspan = getThRowspanAndColspan;
//# sourceMappingURL=useMultiHeader.js.map
