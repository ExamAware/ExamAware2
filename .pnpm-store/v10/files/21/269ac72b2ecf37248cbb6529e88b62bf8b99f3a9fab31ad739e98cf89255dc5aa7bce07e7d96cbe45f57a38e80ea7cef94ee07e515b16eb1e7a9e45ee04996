/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { merge, mergeWith as mergeWith$1, isArray } from 'lodash-es';
import { z as zhCn } from '../../_chunks/dep-a4c09318.mjs';
import '../../_chunks/dep-257428bc.mjs';
import '../../_chunks/dep-fe644854.mjs';
import '../../_chunks/dep-ffb85102.mjs';
import '../../_chunks/dep-ad588525.mjs';

var defaultConfig = {
  classPrefix: "t",
  animation: {
    include: ["ripple", "expand", "fade"],
    exclude: []
  },
  attach: null,
  calendar: {
    firstDayOfWeek: 1,
    fillWithZero: true,
    controllerConfig: void 0
  },
  icon: {},
  input: {
    autocomplete: ""
  },
  dialog: {
    closeOnEscKeydown: true,
    closeOnOverlayClick: true,
    confirmBtnTheme: {
      "default": "primary",
      info: "primary",
      warning: "primary",
      danger: "primary",
      success: "primary"
    }
  },
  message: {},
  popconfirm: {
    confirmBtnTheme: {
      "default": "primary",
      warning: "primary",
      danger: "primary"
    }
  },
  table: {
    expandIcon: void 0,
    sortIcon: void 0,
    filterIcon: void 0,
    treeExpandAndFoldIcon: void 0,
    hideSortTips: false,
    size: "medium"
  },
  select: {
    clearIcon: void 0,
    filterable: false
  },
  drawer: {
    closeOnEscKeydown: true,
    closeOnOverlayClick: true,
    size: "small"
  },
  tree: {
    folderIcon: void 0
  },
  datePicker: {
    firstDayOfWeek: 1
  },
  steps: {
    checkIcon: void 0,
    errorIcon: void 0
  },
  tag: {
    closeIcon: void 0
  },
  form: {
    requiredMark: void 0
  },
  empty: {
    titleText: {
      maintenance: void 0,
      success: void 0,
      fail: void 0,
      empty: void 0,
      networkError: void 0
    },
    image: {
      maintenance: void 0,
      success: void 0,
      fail: void 0,
      empty: void 0,
      networkError: void 0
    }
  }
};

var EAnimationType = /* @__PURE__ */function (EAnimationType2) {
  EAnimationType2["ripple"] = "ripple";
  EAnimationType2["expand"] = "expand";
  EAnimationType2["fade"] = "fade";
  return EAnimationType2;
}(EAnimationType || {});
var defaultGlobalConfig = merge(defaultConfig, zhCn);
var configProviderInjectKey = Symbol("configProvide");
var mergeWith = function mergeWith(defaultGlobalConfig2, injectConfig) {
  return mergeWith$1(defaultGlobalConfig2, injectConfig, function (objValue, srcValue) {
    if (isArray(objValue)) {
      return srcValue;
    }
  });
};

export { EAnimationType, configProviderInjectKey, defaultGlobalConfig, mergeWith };
//# sourceMappingURL=context.mjs.map
