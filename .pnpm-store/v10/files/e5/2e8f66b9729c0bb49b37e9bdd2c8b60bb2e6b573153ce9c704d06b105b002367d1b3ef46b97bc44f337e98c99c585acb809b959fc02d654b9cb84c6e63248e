/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { _ as _asyncToGenerator, a as _regeneratorRuntime } from '../_chunks/dep-88e5a7b0.mjs';
import { defineComponent, inject, computed, createVNode, ref, nextTick, toRefs, reactive, onMounted, onBeforeUnmount, watch, provide } from 'vue';
import { _ as _defineProperty } from '../_chunks/dep-1dacc319.mjs';
import { CheckCircleFilledIcon, CloseCircleFilledIcon, ErrorCircleFilledIcon } from 'tdesign-icons-vue-next';
import { isNil, isNumber, get, set, isString, isArray, cloneDeep, isBoolean } from 'lodash-es';
import { validate } from './utils/form-model.mjs';
import props from './form-item-props.mjs';
import { useCLASSNAMES, FormInjectionKey, ValidateStatus, FormItemInjectionKey } from './consts/index.mjs';
import { a as useTNodeJSX, i as useGlobalIcon, u as usePrefixClass } from '../_chunks/dep-7673347f.mjs';
import './utils/index.mjs';
import { useConfig } from '../config-provider/hooks/useConfig.mjs';
import { getFormItemClassName } from './utils/form-item.mjs';
import '../_chunks/dep-257428bc.mjs';
import '../_chunks/dep-fe644854.mjs';
import '../_chunks/dep-0cde7579.mjs';
import '../_chunks/dep-00b4e06a.mjs';
import '../_chunks/dep-9f459d8b.mjs';
import '../_chunks/dep-0dcc778a.mjs';
import '../_chunks/dep-9003fde5.mjs';
import '../_chunks/dep-51a43106.mjs';
import '../_chunks/dep-22ebd6af.mjs';
import '../_chunks/dep-cdd448ec.mjs';
import '../_chunks/dep-97ecacde.mjs';
import '../config-provider/utils/context.mjs';
import '../_chunks/dep-a4c09318.mjs';
import '../_chunks/dep-ffb85102.mjs';
import '../_chunks/dep-ad588525.mjs';
import '../_chunks/dep-84fd47b3.mjs';
import '../_chunks/dep-d36c4a3f.mjs';

function template(str, vars) {
  return str.replace(/\${(.*?)}/g, function (_, prop) {
    var _vars$prop$trim;
    return (_vars$prop$trim = vars[prop.trim()]) !== null && _vars$prop$trim !== void 0 ? _vars$prop$trim : "";
  });
}

var _FormItem = defineComponent({
  name: "TFormItem",
  props: props,
  setup: function setup(props2, _ref) {
    var slots = _ref.slots;
    var renderContent = useTNodeJSX();
    var CLASS_NAMES = useCLASSNAMES();
    var _useConfig = useConfig("form"),
      globalConfig = _useConfig.globalConfig;
    var _useGlobalIcon = useGlobalIcon({
        CheckCircleFilledIcon: CheckCircleFilledIcon,
        CloseCircleFilledIcon: CloseCircleFilledIcon,
        ErrorCircleFilledIcon: ErrorCircleFilledIcon
      }),
      CheckCircleFilledIcon$1 = _useGlobalIcon.CheckCircleFilledIcon,
      CloseCircleFilledIcon$1 = _useGlobalIcon.CloseCircleFilledIcon,
      ErrorCircleFilledIcon$1 = _useGlobalIcon.ErrorCircleFilledIcon;
    var form = inject(FormInjectionKey, void 0);
    var classPrefix = usePrefixClass();
    var formItemClassPrefix = usePrefixClass("form-item");
    var needRequiredMark = computed(function () {
      var _ref2, _props2$requiredMark;
      var requiredMark = (_ref2 = (_props2$requiredMark = props2.requiredMark) !== null && _props2$requiredMark !== void 0 ? _props2$requiredMark : form === null || form === void 0 ? void 0 : form.requiredMark) !== null && _ref2 !== void 0 ? _ref2 : globalConfig.value.requiredMark;
      var isRequired = innerRules.value.filter(function (rule) {
        return rule.required;
      }).length > 0;
      return requiredMark !== null && requiredMark !== void 0 ? requiredMark : isRequired;
    });
    var requiredMarkPosition = computed(function () {
      var _form$requiredMarkPos;
      return (_form$requiredMarkPos = form === null || form === void 0 ? void 0 : form.requiredMarkPosition) !== null && _form$requiredMarkPos !== void 0 ? _form$requiredMarkPos : globalConfig.value.requiredMarkPosition;
    });
    var hasLabel = computed(function () {
      return slots.label || props2.label;
    });
    var hasColon = computed(function () {
      return !!(form !== null && form !== void 0 && form.colon && hasLabel.value);
    });
    var FROM_LABEL = usePrefixClass("form__label");
    var labelAlign = computed(function () {
      return isNil(props2.labelAlign) ? form === null || form === void 0 ? void 0 : form.labelAlign : props2.labelAlign;
    });
    var labelWidth = computed(function () {
      return isNil(props2.labelWidth) ? form === null || form === void 0 ? void 0 : form.labelWidth : props2.labelWidth;
    });
    var labelClasses = computed(function () {
      return [CLASS_NAMES.value.label, _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "".concat(FROM_LABEL.value, "--required"), needRequiredMark.value), "".concat(FROM_LABEL.value, "--required-right"), needRequiredMark.value && requiredMarkPosition.value === "right"), "".concat(FROM_LABEL.value, "--top"), hasLabel.value && (labelAlign.value === "top" || !labelWidth.value)), "".concat(FROM_LABEL.value, "--left"), labelAlign.value === "left" && labelWidth.value), "".concat(FROM_LABEL.value, "--right"), labelAlign.value === "right" && labelWidth.value)];
    });
    var statusClass = computed(function () {
      return "".concat(classPrefix.value, "-is-").concat(props2.status || "default", " ").concat(props2.status === "success" ? CLASS_NAMES.value.successBorder : "");
    });
    var renderLabel = function renderLabel() {
      if (Number(labelWidth.value) === 0) return;
      var labelStyle = {};
      if (labelWidth.value && labelAlign.value !== "top") {
        if (isNumber(labelWidth.value)) {
          labelStyle = {
            width: "".concat(labelWidth.value, "px")
          };
        } else {
          labelStyle = {
            width: labelWidth.value
          };
        }
      }
      return createVNode("div", {
        "class": labelClasses.value,
        "style": labelStyle
      }, [createVNode("label", {
        "for": props2["for"] || null
      }, [renderContent("label")]), hasColon.value && globalConfig.value.colonText]);
    };
    var getDefaultIcon = function getDefaultIcon() {
      var resultIcon = function resultIcon(Icon) {
        return createVNode("span", {
          "class": CLASS_NAMES.value.status
        }, [createVNode(Icon, null, null)]);
      };
      var list = errorList.value;
      if (verifyStatus.value === ValidateStatus.SUCCESS) {
        return resultIcon(CheckCircleFilledIcon$1);
      }
      if (list !== null && list !== void 0 && list[0]) {
        var type = list[0].type || "error";
        var icon = {
          error: CloseCircleFilledIcon$1,
          warning: ErrorCircleFilledIcon$1,
          success: CheckCircleFilledIcon$1
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
      if (resultIcon) return createVNode("span", {
        "class": CLASS_NAMES.value.status
      }, [resultIcon]);
      if (resultIcon === false) return;
      resultIcon = form === null || form === void 0 ? void 0 : form.renderContent("statusIcon", {
        defaultNode: getDefaultIcon(),
        params: props2
      });
      if (resultIcon) return resultIcon;
    };
    var statusClasses = computed(function () {
      if (!showErrorMessage.value) return "";
      if (verifyStatus.value === ValidateStatus.SUCCESS) {
        return props2.successBorder ? [CLASS_NAMES.value.success, CLASS_NAMES.value.successBorder].join(" ") : CLASS_NAMES.value.success;
      }
      if (!errorList.value.length) return;
      var type = errorList.value[0].type || "error";
      if (props2.status) return statusClass.value;
      return type === "error" ? CLASS_NAMES.value.error : CLASS_NAMES.value.warning;
    });
    var contentClasses = computed(function () {
      return [CLASS_NAMES.value.controls, statusClasses.value];
    });
    var contentStyle = computed(function () {
      var contentStyle2 = {};
      if (labelWidth.value && labelAlign.value !== "top") {
        if (isNumber(labelWidth.value)) {
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
    var errorList = ref([]);
    var successList = ref([]);
    var verifyStatus = ref(ValidateStatus.TO_BE_VALIDATED);
    var resetValidating = ref(false);
    var needResetField = ref(false);
    var resetHandler = function resetHandler() {
      needResetField.value = false;
      errorList.value = [];
      successList.value = [];
      verifyStatus.value = ValidateStatus.TO_BE_VALIDATED;
    };
    var getEmptyValue = function getEmptyValue() {
      var type = Object.prototype.toString.call(get(form === null || form === void 0 ? void 0 : form.data, props2.name));
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
      var _ref4 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
        var resetType,
          _args = arguments;
        return _regeneratorRuntime.wrap(function (_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              resetType = _args.length > 0 && _args[0] !== undefined ? _args[0] : form === null || form === void 0 ? void 0 : form.resetType;
              if (props2.name) {
                _context.next = 1;
                break;
              }
              return _context.abrupt("return");
            case 1:
              if (resetType === "empty") set(form === null || form === void 0 ? void 0 : form.data, props2.name, getEmptyValue());else if (resetType === "initial") set(form === null || form === void 0 ? void 0 : form.data, props2.name, initialValue.value);
              _context.next = 2;
              return nextTick();
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
    var errorMessages = computed(function () {
      var _form$errorMessage;
      return (_form$errorMessage = form === null || form === void 0 ? void 0 : form.errorMessage) !== null && _form$errorMessage !== void 0 ? _form$errorMessage : globalConfig.value.errorMessage;
    });
    var innerRules = computed(function () {
      var _props2$rules;
      if ((_props2$rules = props2.rules) !== null && _props2$rules !== void 0 && _props2$rules.length) return props2.rules;
      if (!props2.name) return [];
      return get(form === null || form === void 0 ? void 0 : form.rules, props2.name) || [];
    });
    var analysisValidateResult = /*#__PURE__*/function () {
      var _ref5 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime.mark(function _callee2(trigger) {
        var _result$rules;
        var result;
        return _regeneratorRuntime.wrap(function (_context2) {
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
              return validate(value.value, result.rules);
            case 2:
              result.resultList = _context2.sent;
              result.errorList = result.resultList.filter(function (item) {
                return item.result !== true;
              }).map(function (item) {
                Object.keys(item).forEach(function (key) {
                  if (!item.message && errorMessages.value[key]) {
                    var name2 = isString(props2.label) ? props2.label : props2.name;
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
      var _ref6 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime.mark(function _callee3(trigger, showErrorMessage2) {
        var _yield$analysisValida, innerSuccessList, innerErrorList, rules, resultList, allowSetValue;
        return _regeneratorRuntime.wrap(function (_context3) {
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
                verifyStatus.value = innerErrorList.length ? ValidateStatus.FAIL : ValidateStatus.SUCCESS;
              }
              if (needResetField.value) {
                resetHandler();
              }
              resetValidating.value = false;
              return _context3.abrupt("return", _defineProperty({}, props2.name, innerErrorList.length === 0 ? true : resultList));
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
      var _ref8 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime.mark(function _callee4(trigger) {
        var _yield$analysisValida2, innerErrorList, resultList;
        return _regeneratorRuntime.wrap(function (_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 1;
              return analysisValidateResult(trigger);
            case 1:
              _yield$analysisValida2 = _context4.sent;
              innerErrorList = _yield$analysisValida2.errorList;
              resultList = _yield$analysisValida2.resultList;
              return _context4.abrupt("return", _defineProperty({}, props2.name, innerErrorList.length === 0 ? true : resultList));
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
      if (!validateMessage || !isArray(validateMessage)) return;
      errorList.value = [];
      successList.value = [];
      if (validateMessage.length === 0) {
        verifyStatus.value = ValidateStatus.SUCCESS;
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
      verifyStatus.value = errors.length > 0 ? ValidateStatus.FAIL : ValidateStatus.SUCCESS;
    };
    var value = computed(function () {
      return (form === null || form === void 0 ? void 0 : form.data) && get(form === null || form === void 0 ? void 0 : form.data, props2.name);
    });
    var initialValue = ref(void 0);
    var _toRefs = toRefs(props2),
      name = _toRefs.name;
    var context = reactive({
      name: name,
      resetHandler: resetHandler,
      resetField: resetField,
      validate: validateHandler,
      validateOnly: validateOnly,
      setValidateMessage: setValidateMessage
    });
    onMounted(function () {
      initialValue.value = cloneDeep(value.value);
      form === null || form === void 0 || form.children.push(context);
    });
    onBeforeUnmount(function () {
      if (form) form.children = form === null || form === void 0 ? void 0 : form.children.filter(function (ctx) {
        return ctx !== context;
      });
    });
    watch(value, /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime.mark(function _callee5() {
      return _regeneratorRuntime.wrap(function (_context5) {
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
    watch(function () {
      return [props2.name, JSON.stringify(props2.rules)].join(",");
    }, function () {
      validateHandler("change");
    });
    var freeShowErrorMessage = ref(void 0);
    var showErrorMessage = computed(function () {
      if (isBoolean(freeShowErrorMessage.value)) return freeShowErrorMessage.value;
      if (isBoolean(props2.showErrorMessage)) return props2.showErrorMessage;
      return form === null || form === void 0 ? void 0 : form.showErrorMessage;
    });
    var classes = computed(function () {
      return [CLASS_NAMES.value.formItem, getFormItemClassName(formItemClassPrefix.value, props2.name), _defineProperty(_defineProperty({}, CLASS_NAMES.value.formItemWithHelp, helpNode.value), CLASS_NAMES.value.formItemWithExtra, extraNode.value)];
    });
    var helpNode = computed(function () {
      var help = renderContent("help");
      if (help) return createVNode("div", {
        "class": CLASS_NAMES.value.help
      }, [help]);
      return null;
    });
    var extraNode = computed(function () {
      var _list$;
      var getExtraNode = function getExtraNode(content) {
        return createVNode("div", {
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
    var tipsNode = computed(function () {
      var tmpTips = renderContent("tips");
      if (!tmpTips) return null;
      var tmpClasses = ["".concat(formItemClassPrefix.value, "-tips"), "".concat(classPrefix.value, "-tips"), statusClass.value];
      return createVNode("div", {
        "class": tmpClasses
      }, [tmpTips]);
    });
    var handleBlur = /*#__PURE__*/function () {
      var _ref10 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime.mark(function _callee6() {
        return _regeneratorRuntime.wrap(function (_context6) {
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
    provide(FormItemInjectionKey, {
      handleBlur: handleBlur
    });
    return function () {
      return createVNode("div", {
        "class": classes.value
      }, [renderLabel(), createVNode("div", {
        "class": contentClasses.value,
        "style": contentStyle.value
      }, [createVNode("div", {
        "class": CLASS_NAMES.value.controlsContent
      }, [renderContent("default"), renderSuffixIcon()]), helpNode.value, tipsNode.value, extraNode.value])]);
    };
  }
});

export { _FormItem as default };
//# sourceMappingURL=form-item.mjs.map
