/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { defineComponent, toRefs, provide, ref, reactive, computed, createVNode } from 'vue';
import _asyncToGenerator from '@babel/runtime/helpers/asyncToGenerator';
import _slicedToArray from '@babel/runtime/helpers/slicedToArray';
import _defineProperty from '@babel/runtime/helpers/defineProperty';
import _regeneratorRuntime from '@babel/runtime/regenerator';
import { isFunction, isBoolean, isArray, isEmpty } from 'lodash-es';
import { f as requestSubmit } from '../_chunks/dep-16bcfabc.js';
import props from './props.js';
import { FormInjectionKey, useCLASSNAMES } from './consts/index.js';
import '@babel/runtime/helpers/toConsumableArray';
import '@babel/runtime/helpers/objectWithoutProperties';
import { getFormItemClassName } from './utils/form-item.js';
import '@babel/runtime/helpers/typeof';
import { u as useTNodeJSX } from '../_chunks/dep-2accc95a.js';
import { u as usePrefixClass } from '../_chunks/dep-9e6d8a78.js';
import '../_chunks/dep-880d05b9.js';
import '../_chunks/dep-fe23be6e.js';
import '../_chunks/dep-81b01cae.js';
import '../_chunks/dep-fb805f69.js';
import '../config-provider/hooks/useConfig.js';
import '../config-provider/utils/context.js';
import '../_chunks/dep-938cd955.js';
import 'dayjs';
import '@babel/runtime/helpers/createClass';
import '@babel/runtime/helpers/classCallCheck';

var _Form = defineComponent({
  name: "TForm",
  props: props,
  setup: function setup(props2, _ref) {
    var expose = _ref.expose;
    var renderContent = useTNodeJSX();
    var _toRefs = toRefs(props2),
      disabled = _toRefs.disabled,
      readonly = _toRefs.readonly;
    provide("formDisabled", {
      disabled: disabled
    });
    provide("formReadonly", {
      readonly: readonly
    });
    var formRef = ref(null);
    var children = ref([]);
    var _toRefs2 = toRefs(props2),
      showErrorMessage = _toRefs2.showErrorMessage,
      labelWidth = _toRefs2.labelWidth,
      labelAlign = _toRefs2.labelAlign,
      data = _toRefs2.data,
      colon = _toRefs2.colon,
      requiredMark = _toRefs2.requiredMark,
      requiredMarkPosition = _toRefs2.requiredMarkPosition,
      rules = _toRefs2.rules,
      errorMessage = _toRefs2.errorMessage,
      resetType = _toRefs2.resetType;
    provide(FormInjectionKey, reactive({
      showErrorMessage: showErrorMessage,
      labelWidth: labelWidth,
      labelAlign: labelAlign,
      data: data,
      colon: colon,
      requiredMark: requiredMark,
      requiredMarkPosition: requiredMarkPosition,
      rules: rules,
      errorMessage: errorMessage,
      resetType: resetType,
      children: children,
      renderContent: renderContent
    }));
    var COMPONENT_NAME = usePrefixClass("form");
    var CLASS_NAMES = useCLASSNAMES();
    var formClass = computed(function () {
      return [CLASS_NAMES.value.form, _defineProperty({}, "".concat(COMPONENT_NAME.value, "-inline"), props2.layout === "inline")];
    });
    var FORM_ITEM_CLASS_PREFIX = usePrefixClass("form-item");
    var getFirstError = function getFirstError(result) {
      if (isBoolean(result)) return "";
      var _Object$keys = Object.keys(result),
        _Object$keys2 = _slicedToArray(_Object$keys, 1),
        firstKey = _Object$keys2[0];
      if (props2.scrollToFirstError) {
        var tmpClassName = getFormItemClassName(FORM_ITEM_CLASS_PREFIX.value, firstKey);
        scrollTo(tmpClassName);
      }
      var resArr = result[firstKey];
      if (!isArray(resArr)) return "";
      return resArr.filter(function (item) {
        return !item.result;
      })[0].message;
    };
    var scrollTo = function scrollTo(selector) {
      var _formRef$value$getEle = formRef.value.getElementsByClassName(selector),
        _formRef$value$getEle2 = _slicedToArray(_formRef$value$getEle, 1),
        dom = _formRef$value$getEle2[0];
      var behavior = props2.scrollToFirstError;
      if (behavior) {
        dom && dom.scrollIntoView({
          behavior: behavior
        });
      }
    };
    var needValidate = function needValidate(name, fields) {
      if (!fields || !isArray(fields)) return true;
      return fields.indexOf("".concat(name)) !== -1;
    };
    var formatValidateResult = function formatValidateResult(validateResultList) {
      var result = validateResultList.reduce(function (r, err) {
        return Object.assign(r || {}, err);
      }, {});
      Object.keys(result).forEach(function (key) {
        if (result[key] === true) {
          delete result[key];
        }
      });
      return isEmpty(result) ? true : result;
    };
    var validate = /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime.mark(function _callee(param) {
        var _props2$onValidate;
        var _ref4, fields, _ref4$trigger, trigger, showErrorMessage2, list, arr, result, firstError;
        return _regeneratorRuntime.wrap(function (_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _ref4 = param || {}, fields = _ref4.fields, _ref4$trigger = _ref4.trigger, trigger = _ref4$trigger === void 0 ? "all" : _ref4$trigger, showErrorMessage2 = _ref4.showErrorMessage;
              list = children.value.filter(function (child) {
                return isFunction(child.validate) && needValidate(String(child.name), fields);
              }).map(function (child) {
                return child.validate(trigger, showErrorMessage2);
              });
              _context.next = 1;
              return Promise.all(list);
            case 1:
              arr = _context.sent;
              result = formatValidateResult(arr);
              firstError = getFirstError(result);
              (_props2$onValidate = props2.onValidate) === null || _props2$onValidate === void 0 || _props2$onValidate.call(props2, {
                validateResult: result,
                firstError: firstError
              });
              return _context.abrupt("return", result);
            case 2:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      return function validate(_x) {
        return _ref3.apply(this, arguments);
      };
    }();
    var validateOnly = /*#__PURE__*/function () {
      var _ref5 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime.mark(function _callee2(params) {
        var _ref6, fields, _ref6$trigger, trigger, list, arr;
        return _regeneratorRuntime.wrap(function (_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _ref6 = params || {}, fields = _ref6.fields, _ref6$trigger = _ref6.trigger, trigger = _ref6$trigger === void 0 ? "all" : _ref6$trigger;
              list = children.value.filter(function (child) {
                return isFunction(child.validateOnly) && needValidate(String(child.name), fields);
              }).map(function (child) {
                return child.validateOnly(trigger);
              });
              _context2.next = 1;
              return Promise.all(list);
            case 1:
              arr = _context2.sent;
              return _context2.abrupt("return", formatValidateResult(arr));
            case 2:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }));
      return function validateOnly(_x2) {
        return _ref5.apply(this, arguments);
      };
    }();
    var submitParams = ref();
    var _onSubmit = function onSubmit(e) {
      if (props2.preventSubmitDefault && e) {
        e.preventDefault();
        e.stopPropagation();
      }
      validate(submitParams.value).then(function (r) {
        var _props2$onSubmit;
        (_props2$onSubmit = props2.onSubmit) === null || _props2$onSubmit === void 0 || _props2$onSubmit.call(props2, {
          validateResult: r,
          firstError: getFirstError(r),
          e: e
        });
      });
      submitParams.value = void 0;
    };
    var submit = /*#__PURE__*/function () {
      var _ref7 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime.mark(function _callee3(params) {
        return _regeneratorRuntime.wrap(function (_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              submitParams.value = params;
              requestSubmit(formRef.value);
            case 1:
            case "end":
              return _context3.stop();
          }
        }, _callee3);
      }));
      return function submit(_x3) {
        return _ref7.apply(this, arguments);
      };
    }();
    var resetParams = ref();
    var _onReset = function onReset(e) {
      var _props2$onReset;
      if (props2.preventSubmitDefault && e) {
        e.preventDefault();
        e.stopPropagation();
      }
      children.value.filter(function (child) {
        var _resetParams$value;
        return isFunction(child.resetField) && needValidate(String(child.name), (_resetParams$value = resetParams.value) === null || _resetParams$value === void 0 ? void 0 : _resetParams$value.fields);
      }).forEach(function (child) {
        var _resetParams$value2;
        return child.resetField((_resetParams$value2 = resetParams.value) === null || _resetParams$value2 === void 0 ? void 0 : _resetParams$value2.type);
      });
      resetParams.value = void 0;
      (_props2$onReset = props2.onReset) === null || _props2$onReset === void 0 || _props2$onReset.call(props2, {
        e: e
      });
    };
    var reset = function reset(params) {
      resetParams.value = params;
      formRef.value.reset();
    };
    var clearValidate = function clearValidate(fields) {
      children.value.forEach(function (child) {
        if (isFunction(child.resetHandler) && needValidate(String(child.name), fields)) {
          child.resetHandler();
        }
      });
    };
    var setValidateMessage = function setValidateMessage(validateMessage) {
      var keys = Object.keys(validateMessage);
      if (!keys.length) return;
      var list = children.value.filter(function (child) {
        return isFunction(child.setValidateMessage) && keys.includes("".concat(child.name));
      }).map(function (child) {
        return child.setValidateMessage(validateMessage[child.name]);
      });
      Promise.all(list);
    };
    expose({
      validate: validate,
      submit: submit,
      reset: reset,
      clearValidate: clearValidate,
      setValidateMessage: setValidateMessage,
      validateOnly: validateOnly
    });
    return function () {
      return createVNode("form", {
        "id": props2.id,
        "ref": formRef,
        "class": formClass.value,
        "onSubmit": function onSubmit(e) {
          return _onSubmit(e);
        },
        "onReset": function onReset(e) {
          return _onReset(e);
        }
      }, [renderContent("default")]);
    };
  }
});

export { _Form as default };
//# sourceMappingURL=form.js.map
