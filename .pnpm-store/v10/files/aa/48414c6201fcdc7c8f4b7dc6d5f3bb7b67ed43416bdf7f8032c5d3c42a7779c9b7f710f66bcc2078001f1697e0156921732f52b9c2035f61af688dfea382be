/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _asyncToGenerator = require('@babel/runtime/helpers/asyncToGenerator');
var Vue = require('vue');
var _defineProperty = require('@babel/runtime/helpers/defineProperty');
var _regeneratorRuntime = require('@babel/runtime/regenerator');
var tdesignIconsVueNext = require('tdesign-icons-vue-next');
var form_utils_formModel = require('./utils/form-model.js');
var form_formItemProps = require('./form-item-props.js');
var form_consts_index = require('./consts/index.js');
require('@babel/runtime/helpers/toConsumableArray');
require('@babel/runtime/helpers/typeof');
require('../_chunks/dep-953a77eb.js');
var index = require('../_chunks/dep-47c460dd.js');
var index$2 = require('../_chunks/dep-ecaaae91.js');
var index$1 = require('../_chunks/dep-31c76dc6.js');
require('@babel/runtime/helpers/slicedToArray');
require('../_chunks/dep-cc66acf1.js');
var form_utils_formItem = require('./utils/form-item.js');
var isNil = require('../_chunks/dep-6f2064e4.js');
var isNumber = require('../_chunks/dep-990979bb.js');
var get = require('../_chunks/dep-cd8cfdc0.js');
var cloneDeep = require('../_chunks/dep-8adeee89.js');
var isBoolean = require('../_chunks/dep-d45110a6.js');
var isArray = require('../_chunks/dep-87589faa.js');
var set = require('../_chunks/dep-e37d2fc0.js');
var isString = require('../_chunks/dep-a55e8a08.js');
var configProvider_hooks_useConfig = require('../config-provider/hooks/useConfig.js');
require('../_chunks/dep-8abdfb41.js');
require('../_chunks/dep-55c70201.js');
require('@babel/runtime/helpers/objectWithoutProperties');
require('../_chunks/dep-fd5a369e.js');
require('../_chunks/dep-4ccaead1.js');
require('../_chunks/dep-0813861e.js');
require('../_chunks/dep-06a7e589.js');
require('../_chunks/dep-4d2ef282.js');
require('../_chunks/dep-e27ea667.js');
require('../_chunks/dep-b3b464e8.js');
require('../_chunks/dep-165ca38a.js');
require('../_chunks/dep-48f60c78.js');
require('../_chunks/dep-05f89f0d.js');
require('../_chunks/dep-dc4bbc14.js');
require('../_chunks/dep-5f52cd42.js');
require('../_chunks/dep-929933ce.js');
require('../_chunks/dep-06276759.js');
require('../_chunks/dep-4fa46641.js');
require('../_chunks/dep-422dd97f.js');
require('../_chunks/dep-71fa6bfc.js');
require('../_chunks/dep-80a478d7.js');
require('../_chunks/dep-427dabac.js');
require('../_chunks/dep-72c4cc44.js');
require('../_chunks/dep-ee355a9a.js');
require('../_chunks/dep-23f77e26.js');
require('../_chunks/dep-5d7e2375.js');
require('../_chunks/dep-94a7dc2d.js');
require('dayjs');
require('../_chunks/dep-92e23f17.js');
require('../_chunks/dep-0ff616fe.js');
require('../_chunks/dep-f57bcb19.js');
require('../_chunks/dep-32412d92.js');
require('../_chunks/dep-a8a3d718.js');
require('../_chunks/dep-54e566d9.js');
require('../_chunks/dep-591a72de.js');
require('@babel/runtime/helpers/createClass');
require('@babel/runtime/helpers/classCallCheck');
require('../_chunks/dep-ac11336c.js');
require('../_chunks/dep-6b1f0ef8.js');
require('../_chunks/dep-04599720.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _asyncToGenerator__default = /*#__PURE__*/_interopDefaultLegacy(_asyncToGenerator);
var _defineProperty__default = /*#__PURE__*/_interopDefaultLegacy(_defineProperty);
var _regeneratorRuntime__default = /*#__PURE__*/_interopDefaultLegacy(_regeneratorRuntime);

function template(str, vars) {
  return str.replace(/\${(.*?)}/g, function (_, prop) {
    var _vars$prop$trim;
    return (_vars$prop$trim = vars[prop.trim()]) !== null && _vars$prop$trim !== void 0 ? _vars$prop$trim : "";
  });
}

var _FormItem = Vue.defineComponent({
  name: "TFormItem",
  props: form_formItemProps["default"],
  setup: function setup(props2, _ref) {
    var slots = _ref.slots;
    var renderContent = index.useTNodeJSX();
    var CLASS_NAMES = form_consts_index.useCLASSNAMES();
    var _useConfig = configProvider_hooks_useConfig.useConfig("form"),
      globalConfig = _useConfig.globalConfig;
    var _useGlobalIcon = index$1.useGlobalIcon({
        CheckCircleFilledIcon: tdesignIconsVueNext.CheckCircleFilledIcon,
        CloseCircleFilledIcon: tdesignIconsVueNext.CloseCircleFilledIcon,
        ErrorCircleFilledIcon: tdesignIconsVueNext.ErrorCircleFilledIcon
      }),
      CheckCircleFilledIcon = _useGlobalIcon.CheckCircleFilledIcon,
      CloseCircleFilledIcon = _useGlobalIcon.CloseCircleFilledIcon,
      ErrorCircleFilledIcon = _useGlobalIcon.ErrorCircleFilledIcon;
    var form = Vue.inject(form_consts_index.FormInjectionKey, void 0);
    var classPrefix = index$2.usePrefixClass();
    var formItemClassPrefix = index$2.usePrefixClass("form-item");
    var needRequiredMark = Vue.computed(function () {
      var _ref2, _props2$requiredMark;
      var requiredMark = (_ref2 = (_props2$requiredMark = props2.requiredMark) !== null && _props2$requiredMark !== void 0 ? _props2$requiredMark : form === null || form === void 0 ? void 0 : form.requiredMark) !== null && _ref2 !== void 0 ? _ref2 : globalConfig.value.requiredMark;
      var isRequired = innerRules.value.filter(function (rule) {
        return rule.required;
      }).length > 0;
      return requiredMark !== null && requiredMark !== void 0 ? requiredMark : isRequired;
    });
    var requiredMarkPosition = Vue.computed(function () {
      var _form$requiredMarkPos;
      return (_form$requiredMarkPos = form === null || form === void 0 ? void 0 : form.requiredMarkPosition) !== null && _form$requiredMarkPos !== void 0 ? _form$requiredMarkPos : globalConfig.value.requiredMarkPosition;
    });
    var hasLabel = Vue.computed(function () {
      return slots.label || props2.label;
    });
    var hasColon = Vue.computed(function () {
      return !!(form !== null && form !== void 0 && form.colon && hasLabel.value);
    });
    var FROM_LABEL = index$2.usePrefixClass("form__label");
    var labelAlign = Vue.computed(function () {
      return isNil.isNil(props2.labelAlign) ? form === null || form === void 0 ? void 0 : form.labelAlign : props2.labelAlign;
    });
    var labelWidth = Vue.computed(function () {
      return isNil.isNil(props2.labelWidth) ? form === null || form === void 0 ? void 0 : form.labelWidth : props2.labelWidth;
    });
    var labelClasses = Vue.computed(function () {
      return [CLASS_NAMES.value.label, _defineProperty__default["default"](_defineProperty__default["default"](_defineProperty__default["default"](_defineProperty__default["default"](_defineProperty__default["default"]({}, "".concat(FROM_LABEL.value, "--required"), needRequiredMark.value), "".concat(FROM_LABEL.value, "--required-right"), needRequiredMark.value && requiredMarkPosition.value === "right"), "".concat(FROM_LABEL.value, "--top"), hasLabel.value && (labelAlign.value === "top" || !labelWidth.value)), "".concat(FROM_LABEL.value, "--left"), labelAlign.value === "left" && labelWidth.value), "".concat(FROM_LABEL.value, "--right"), labelAlign.value === "right" && labelWidth.value)];
    });
    var statusClass = Vue.computed(function () {
      return "".concat(classPrefix.value, "-is-").concat(props2.status || "default", " ").concat(props2.status === "success" ? CLASS_NAMES.value.successBorder : "");
    });
    var renderLabel = function renderLabel() {
      if (Number(labelWidth.value) === 0) return;
      var labelStyle = {};
      if (labelWidth.value && labelAlign.value !== "top") {
        if (isNumber.isNumber(labelWidth.value)) {
          labelStyle = {
            width: "".concat(labelWidth.value, "px")
          };
        } else {
          labelStyle = {
            width: labelWidth.value
          };
        }
      }
      return Vue.createVNode("div", {
        "class": labelClasses.value,
        "style": labelStyle
      }, [Vue.createVNode("label", {
        "for": props2["for"] || null
      }, [renderContent("label")]), hasColon.value && globalConfig.value.colonText]);
    };
    var getDefaultIcon = function getDefaultIcon() {
      var resultIcon = function resultIcon(Icon) {
        return Vue.createVNode("span", {
          "class": CLASS_NAMES.value.status
        }, [Vue.createVNode(Icon, null, null)]);
      };
      var list = errorList.value;
      if (verifyStatus.value === form_consts_index.ValidateStatus.SUCCESS) {
        return resultIcon(CheckCircleFilledIcon);
      }
      if (list !== null && list !== void 0 && list[0]) {
        var type = list[0].type || "error";
        var icon = {
          error: CloseCircleFilledIcon,
          warning: ErrorCircleFilledIcon,
          success: CheckCircleFilledIcon
        }[type];
        return resultIcon(icon);
      }
      return null;
    };
    var renderSuffixIcon = function renderSuffixIcon() {
      var statusIcon = props2.statusIcon;
      if (statusIcon === false) return;
      var resultIcon = renderContent("statusIcon", {
        defaultNode: getDefaultIcon()
      });
      if (resultIcon) return Vue.createVNode("span", {
        "class": CLASS_NAMES.value.status
      }, [resultIcon]);
      if (resultIcon === false) return;
      resultIcon = form === null || form === void 0 ? void 0 : form.renderContent("statusIcon", {
        defaultNode: getDefaultIcon(),
        params: props2
      });
      if (resultIcon) return resultIcon;
    };
    var statusClasses = Vue.computed(function () {
      if (!showErrorMessage.value) return "";
      if (verifyStatus.value === form_consts_index.ValidateStatus.SUCCESS) {
        return props2.successBorder ? [CLASS_NAMES.value.success, CLASS_NAMES.value.successBorder].join(" ") : CLASS_NAMES.value.success;
      }
      if (!errorList.value.length) return;
      var type = errorList.value[0].type || "error";
      if (props2.status) return statusClass.value;
      return type === "error" ? CLASS_NAMES.value.error : CLASS_NAMES.value.warning;
    });
    var contentClasses = Vue.computed(function () {
      return [CLASS_NAMES.value.controls, statusClasses.value];
    });
    var contentStyle = Vue.computed(function () {
      var contentStyle2 = {};
      if (labelWidth.value && labelAlign.value !== "top") {
        if (isNumber.isNumber(labelWidth.value)) {
          contentStyle2 = {
            marginLeft: "".concat(labelWidth.value, "px")
          };
        } else {
          contentStyle2 = {
            marginLeft: labelWidth.value
          };
        }
      }
      return contentStyle2;
    });
    var errorList = Vue.ref([]);
    var successList = Vue.ref([]);
    var verifyStatus = Vue.ref(form_consts_index.ValidateStatus.TO_BE_VALIDATED);
    var resetValidating = Vue.ref(false);
    var needResetField = Vue.ref(false);
    var resetHandler = function resetHandler() {
      needResetField.value = false;
      errorList.value = [];
      successList.value = [];
      verifyStatus.value = form_consts_index.ValidateStatus.TO_BE_VALIDATED;
    };
    var getEmptyValue = function getEmptyValue() {
      var type = Object.prototype.toString.call(get.get(form === null || form === void 0 ? void 0 : form.data, props2.name));
      var emptyValue;
      if (type === "[object String]") {
        emptyValue = "";
      }
      if (type === "[object Array]") {
        emptyValue = [];
      }
      if (type === "[object Object]") {
        emptyValue = {};
      }
      return emptyValue;
    };
    var resetField = /*#__PURE__*/function () {
      var _ref4 = _asyncToGenerator__default["default"](/*#__PURE__*/_regeneratorRuntime__default["default"].mark(function _callee() {
        var resetType,
          _args = arguments;
        return _regeneratorRuntime__default["default"].wrap(function (_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              resetType = _args.length > 0 && _args[0] !== undefined ? _args[0] : form === null || form === void 0 ? void 0 : form.resetType;
              if (props2.name) {
                _context.next = 1;
                break;
              }
              return _context.abrupt("return");
            case 1:
              if (resetType === "empty") set.set(form === null || form === void 0 ? void 0 : form.data, props2.name, getEmptyValue());else if (resetType === "initial") set.set(form === null || form === void 0 ? void 0 : form.data, props2.name, initialValue.value);
              _context.next = 2;
              return Vue.nextTick();
            case 2:
              if (resetValidating.value) {
                needResetField.value = true;
              } else {
                resetHandler();
              }
            case 3:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      return function resetField() {
        return _ref4.apply(this, arguments);
      };
    }();
    var errorMessages = Vue.computed(function () {
      var _form$errorMessage;
      return (_form$errorMessage = form === null || form === void 0 ? void 0 : form.errorMessage) !== null && _form$errorMessage !== void 0 ? _form$errorMessage : globalConfig.value.errorMessage;
    });
    var innerRules = Vue.computed(function () {
      var _props2$rules;
      if ((_props2$rules = props2.rules) !== null && _props2$rules !== void 0 && _props2$rules.length) return props2.rules;
      if (!props2.name) return [];
      return get.get(form === null || form === void 0 ? void 0 : form.rules, props2.name) || [];
    });
    var analysisValidateResult = /*#__PURE__*/function () {
      var _ref5 = _asyncToGenerator__default["default"](/*#__PURE__*/_regeneratorRuntime__default["default"].mark(function _callee2(trigger) {
        var _result$rules;
        var result;
        return _regeneratorRuntime__default["default"].wrap(function (_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              result = {
                successList: [],
                errorList: [],
                rules: [],
                resultList: [],
                allowSetValue: false
              };
              result.rules = trigger === "all" ? innerRules.value : innerRules.value.filter(function (item) {
                return (item.trigger || "change") === trigger;
              });
              if (!(innerRules.value.length && !((_result$rules = result.rules) !== null && _result$rules !== void 0 && _result$rules.length))) {
                _context2.next = 1;
                break;
              }
              return _context2.abrupt("return", result);
            case 1:
              result.allowSetValue = true;
              _context2.next = 2;
              return form_utils_formModel.validate(value.value, result.rules);
            case 2:
              result.resultList = _context2.sent;
              result.errorList = result.resultList.filter(function (item) {
                return item.result !== true;
              }).map(function (item) {
                Object.keys(item).forEach(function (key) {
                  if (!item.message && errorMessages.value[key]) {
                    var name2 = isString.isString(props2.label) ? props2.label : props2.name;
                    item.message = template(errorMessages.value[key], {
                      name: name2,
                      validate: item[key]
                    });
                  }
                });
                return item;
              });
              result.successList = result.resultList.filter(function (item) {
                return item.result === true && item.message && item.type === "success";
              });
              return _context2.abrupt("return", result);
            case 3:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }));
      return function analysisValidateResult(_x) {
        return _ref5.apply(this, arguments);
      };
    }();
    var validateHandler = /*#__PURE__*/function () {
      var _ref6 = _asyncToGenerator__default["default"](/*#__PURE__*/_regeneratorRuntime__default["default"].mark(function _callee3(trigger, showErrorMessage2) {
        var _yield$analysisValida, innerSuccessList, innerErrorList, rules, resultList, allowSetValue;
        return _regeneratorRuntime__default["default"].wrap(function (_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              resetValidating.value = true;
              freeShowErrorMessage.value = showErrorMessage2;
              _context3.next = 1;
              return analysisValidateResult(trigger);
            case 1:
              _yield$analysisValida = _context3.sent;
              innerSuccessList = _yield$analysisValida.successList;
              innerErrorList = _yield$analysisValida.errorList;
              rules = _yield$analysisValida.rules;
              resultList = _yield$analysisValida.resultList;
              allowSetValue = _yield$analysisValida.allowSetValue;
              if (allowSetValue) {
                successList.value = innerSuccessList;
                errorList.value = innerErrorList;
              }
              if (rules.length) {
                verifyStatus.value = innerErrorList.length ? form_consts_index.ValidateStatus.FAIL : form_consts_index.ValidateStatus.SUCCESS;
              }
              if (needResetField.value) {
                resetHandler();
              }
              resetValidating.value = false;
              return _context3.abrupt("return", _defineProperty__default["default"]({}, props2.name, innerErrorList.length === 0 ? true : resultList));
            case 2:
            case "end":
              return _context3.stop();
          }
        }, _callee3);
      }));
      return function validateHandler(_x2, _x3) {
        return _ref6.apply(this, arguments);
      };
    }();
    var validateOnly = /*#__PURE__*/function () {
      var _ref8 = _asyncToGenerator__default["default"](/*#__PURE__*/_regeneratorRuntime__default["default"].mark(function _callee4(trigger) {
        var _yield$analysisValida2, innerErrorList, resultList;
        return _regeneratorRuntime__default["default"].wrap(function (_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 1;
              return analysisValidateResult(trigger);
            case 1:
              _yield$analysisValida2 = _context4.sent;
              innerErrorList = _yield$analysisValida2.errorList;
              resultList = _yield$analysisValida2.resultList;
              return _context4.abrupt("return", _defineProperty__default["default"]({}, props2.name, innerErrorList.length === 0 ? true : resultList));
            case 2:
            case "end":
              return _context4.stop();
          }
        }, _callee4);
      }));
      return function validateOnly(_x4) {
        return _ref8.apply(this, arguments);
      };
    }();
    var setValidateMessage = function setValidateMessage(validateMessage) {
      if (!validateMessage || !isArray.isArray(validateMessage)) return;
      errorList.value = [];
      successList.value = [];
      if (validateMessage.length === 0) {
        verifyStatus.value = form_consts_index.ValidateStatus.SUCCESS;
        return;
      }
      var errors = validateMessage.filter(function (item) {
        return item.type === "error" || item.type === "warning";
      });
      var successes = validateMessage.filter(function (item) {
        return item.type === "success";
      });
      errorList.value = errors.map(function (item) {
        return {
          message: item.message,
          type: item.type,
          result: false
        };
      });
      successList.value = successes.map(function (item) {
        return {
          message: item.message,
          type: item.type,
          result: true
        };
      });
      verifyStatus.value = errors.length > 0 ? form_consts_index.ValidateStatus.FAIL : form_consts_index.ValidateStatus.SUCCESS;
    };
    var value = Vue.computed(function () {
      return (form === null || form === void 0 ? void 0 : form.data) && get.get(form === null || form === void 0 ? void 0 : form.data, props2.name);
    });
    var initialValue = Vue.ref(void 0);
    var _toRefs = Vue.toRefs(props2),
      name = _toRefs.name;
    var context = Vue.reactive({
      name: name,
      resetHandler: resetHandler,
      resetField: resetField,
      validate: validateHandler,
      validateOnly: validateOnly,
      setValidateMessage: setValidateMessage
    });
    Vue.onMounted(function () {
      initialValue.value = cloneDeep.cloneDeep(value.value);
      form === null || form === void 0 || form.children.push(context);
    });
    Vue.onBeforeUnmount(function () {
      if (form) form.children = form === null || form === void 0 ? void 0 : form.children.filter(function (ctx) {
        return ctx !== context;
      });
    });
    Vue.watch(value, /*#__PURE__*/_asyncToGenerator__default["default"](/*#__PURE__*/_regeneratorRuntime__default["default"].mark(function _callee5() {
      return _regeneratorRuntime__default["default"].wrap(function (_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 1;
            return validateHandler("change");
          case 1:
          case "end":
            return _context5.stop();
        }
      }, _callee5);
    })), {
      deep: true
    });
    Vue.watch(function () {
      return [props2.name, JSON.stringify(props2.rules)].join(",");
    }, function () {
      validateHandler("change");
    });
    var freeShowErrorMessage = Vue.ref(void 0);
    var showErrorMessage = Vue.computed(function () {
      if (isBoolean.isBoolean(freeShowErrorMessage.value)) return freeShowErrorMessage.value;
      if (isBoolean.isBoolean(props2.showErrorMessage)) return props2.showErrorMessage;
      return form === null || form === void 0 ? void 0 : form.showErrorMessage;
    });
    var classes = Vue.computed(function () {
      return [CLASS_NAMES.value.formItem, form_utils_formItem.getFormItemClassName(formItemClassPrefix.value, props2.name), _defineProperty__default["default"](_defineProperty__default["default"]({}, CLASS_NAMES.value.formItemWithHelp, helpNode.value), CLASS_NAMES.value.formItemWithExtra, extraNode.value)];
    });
    var helpNode = Vue.computed(function () {
      var help = renderContent("help");
      if (help) return Vue.createVNode("div", {
        "class": CLASS_NAMES.value.help
      }, [help]);
      return null;
    });
    var extraNode = Vue.computed(function () {
      var _list$;
      var getExtraNode = function getExtraNode(content) {
        return Vue.createVNode("div", {
          "class": CLASS_NAMES.value.extra,
          "title": content
        }, [content]);
      };
      var list = errorList.value;
      if (showErrorMessage.value && list !== null && list !== void 0 && (_list$ = list[0]) !== null && _list$ !== void 0 && _list$.message) {
        return getExtraNode(list[0].message);
      }
      if (successList.value.length) {
        return getExtraNode(successList.value[0].message);
      }
      return null;
    });
    var tipsNode = Vue.computed(function () {
      var tmpTips = renderContent("tips");
      if (!tmpTips) return null;
      var tmpClasses = ["".concat(formItemClassPrefix.value, "-tips"), "".concat(classPrefix.value, "-tips"), statusClass.value];
      return Vue.createVNode("div", {
        "class": tmpClasses
      }, [tmpTips]);
    });
    var handleBlur = /*#__PURE__*/function () {
      var _ref10 = _asyncToGenerator__default["default"](/*#__PURE__*/_regeneratorRuntime__default["default"].mark(function _callee6() {
        return _regeneratorRuntime__default["default"].wrap(function (_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              _context6.next = 1;
              return validateHandler("blur");
            case 1:
            case "end":
              return _context6.stop();
          }
        }, _callee6);
      }));
      return function handleBlur() {
        return _ref10.apply(this, arguments);
      };
    }();
    Vue.provide(form_consts_index.FormItemInjectionKey, {
      handleBlur: handleBlur
    });
    return function () {
      return Vue.createVNode("div", {
        "class": classes.value
      }, [renderLabel(), Vue.createVNode("div", {
        "class": contentClasses.value,
        "style": contentStyle.value
      }, [Vue.createVNode("div", {
        "class": CLASS_NAMES.value.controlsContent
      }, [renderContent("default"), renderSuffixIcon()]), helpNode.value, tipsNode.value, extraNode.value])]);
    };
  }
});

exports["default"] = _FormItem;
//# sourceMappingURL=form-item.js.map
