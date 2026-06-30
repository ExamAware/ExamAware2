/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Vue = require('vue');
var _asyncToGenerator = require('@babel/runtime/helpers/asyncToGenerator');
var _slicedToArray = require('@babel/runtime/helpers/slicedToArray');
var _defineProperty = require('@babel/runtime/helpers/defineProperty');
var _regeneratorRuntime = require('@babel/runtime/regenerator');
var dom = require('../_chunks/dep-06276759.js');
var form_props = require('./props.js');
var form_consts_index = require('./consts/index.js');
require('@babel/runtime/helpers/toConsumableArray');
require('@babel/runtime/helpers/objectWithoutProperties');
var form_utils_formItem = require('./utils/form-item.js');
require('@babel/runtime/helpers/typeof');
var index = require('../_chunks/dep-47c460dd.js');
var index$1 = require('../_chunks/dep-ecaaae91.js');
require('../_chunks/dep-cc66acf1.js');
var isFunction = require('../_chunks/dep-48f60c78.js');
var isBoolean = require('../_chunks/dep-d45110a6.js');
var isArray = require('../_chunks/dep-87589faa.js');
var isEmpty = require('../_chunks/dep-06a7e589.js');
require('../_chunks/dep-953a77eb.js');
require('../_chunks/dep-8abdfb41.js');
require('../_chunks/dep-a55e8a08.js');
require('../_chunks/dep-b3b464e8.js');
require('../_chunks/dep-05f89f0d.js');
require('../_chunks/dep-4fa46641.js');
require('../_chunks/dep-0813861e.js');
require('../_chunks/dep-422dd97f.js');
require('../_chunks/dep-71fa6bfc.js');
require('../_chunks/dep-80a478d7.js');
require('../_chunks/dep-427dabac.js');
require('../_chunks/dep-72c4cc44.js');
require('../_chunks/dep-ee355a9a.js');
require('../_chunks/dep-23f77e26.js');
require('../config-provider/hooks/useConfig.js');
require('../_chunks/dep-5d7e2375.js');
require('../_chunks/dep-94a7dc2d.js');
require('dayjs');
require('../_chunks/dep-92e23f17.js');
require('../_chunks/dep-0ff616fe.js');
require('../_chunks/dep-5f52cd42.js');
require('../_chunks/dep-f57bcb19.js');
require('../_chunks/dep-dc4bbc14.js');
require('../_chunks/dep-e27ea667.js');
require('../_chunks/dep-165ca38a.js');
require('../_chunks/dep-32412d92.js');
require('../_chunks/dep-a8a3d718.js');
require('../_chunks/dep-54e566d9.js');
require('../_chunks/dep-591a72de.js');
require('../_chunks/dep-8adeee89.js');
require('../_chunks/dep-4d2ef282.js');
require('../_chunks/dep-929933ce.js');
require('../_chunks/dep-6b1f0ef8.js');
require('@babel/runtime/helpers/createClass');
require('@babel/runtime/helpers/classCallCheck');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _asyncToGenerator__default = /*#__PURE__*/_interopDefaultLegacy(_asyncToGenerator);
var _slicedToArray__default = /*#__PURE__*/_interopDefaultLegacy(_slicedToArray);
var _defineProperty__default = /*#__PURE__*/_interopDefaultLegacy(_defineProperty);
var _regeneratorRuntime__default = /*#__PURE__*/_interopDefaultLegacy(_regeneratorRuntime);

var _Form = Vue.defineComponent({
  name: "TForm",
  props: form_props["default"],
  setup: function setup(props2, _ref) {
    var expose = _ref.expose;
    var renderContent = index.useTNodeJSX();
    var _toRefs = Vue.toRefs(props2),
      disabled = _toRefs.disabled,
      readonly = _toRefs.readonly;
    Vue.provide("formDisabled", {
      disabled: disabled
    });
    Vue.provide("formReadonly", {
      readonly: readonly
    });
    var formRef = Vue.ref(null);
    var children = Vue.ref([]);
    var _toRefs2 = Vue.toRefs(props2),
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
    Vue.provide(form_consts_index.FormInjectionKey, Vue.reactive({
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
    var COMPONENT_NAME = index$1.usePrefixClass("form");
    var CLASS_NAMES = form_consts_index.useCLASSNAMES();
    var formClass = Vue.computed(function () {
      return [CLASS_NAMES.value.form, _defineProperty__default["default"]({}, "".concat(COMPONENT_NAME.value, "-inline"), props2.layout === "inline")];
    });
    var FORM_ITEM_CLASS_PREFIX = index$1.usePrefixClass("form-item");
    var getFirstError = function getFirstError(result) {
      if (isBoolean.isBoolean(result)) return "";
      var _Object$keys = Object.keys(result),
        _Object$keys2 = _slicedToArray__default["default"](_Object$keys, 1),
        firstKey = _Object$keys2[0];
      if (props2.scrollToFirstError) {
        var tmpClassName = form_utils_formItem.getFormItemClassName(FORM_ITEM_CLASS_PREFIX.value, firstKey);
        scrollTo(tmpClassName);
      }
      var resArr = result[firstKey];
      if (!isArray.isArray(resArr)) return "";
      return resArr.filter(function (item) {
        return !item.result;
      })[0].message;
    };
    var scrollTo = function scrollTo(selector) {
      var _formRef$value$getEle = formRef.value.getElementsByClassName(selector),
        _formRef$value$getEle2 = _slicedToArray__default["default"](_formRef$value$getEle, 1),
        dom = _formRef$value$getEle2[0];
      var behavior = props2.scrollToFirstError;
      if (behavior) {
        dom && dom.scrollIntoView({
          behavior: behavior
        });
      }
    };
    var needValidate = function needValidate(name, fields) {
      if (!fields || !isArray.isArray(fields)) return true;
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
      return isEmpty.isEmpty(result) ? true : result;
    };
    var validate = /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator__default["default"](/*#__PURE__*/_regeneratorRuntime__default["default"].mark(function _callee(param) {
        var _props2$onValidate;
        var _ref4, fields, _ref4$trigger, trigger, showErrorMessage2, list, arr, result, firstError;
        return _regeneratorRuntime__default["default"].wrap(function (_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _ref4 = param || {}, fields = _ref4.fields, _ref4$trigger = _ref4.trigger, trigger = _ref4$trigger === void 0 ? "all" : _ref4$trigger, showErrorMessage2 = _ref4.showErrorMessage;
              list = children.value.filter(function (child) {
                return isFunction.isFunction(child.validate) && needValidate(String(child.name), fields);
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
      var _ref5 = _asyncToGenerator__default["default"](/*#__PURE__*/_regeneratorRuntime__default["default"].mark(function _callee2(params) {
        var _ref6, fields, _ref6$trigger, trigger, list, arr;
        return _regeneratorRuntime__default["default"].wrap(function (_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _ref6 = params || {}, fields = _ref6.fields, _ref6$trigger = _ref6.trigger, trigger = _ref6$trigger === void 0 ? "all" : _ref6$trigger;
              list = children.value.filter(function (child) {
                return isFunction.isFunction(child.validateOnly) && needValidate(String(child.name), fields);
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
    var submitParams = Vue.ref();
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
      var _ref7 = _asyncToGenerator__default["default"](/*#__PURE__*/_regeneratorRuntime__default["default"].mark(function _callee3(params) {
        return _regeneratorRuntime__default["default"].wrap(function (_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              submitParams.value = params;
              dom.requestSubmit(formRef.value);
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
    var resetParams = Vue.ref();
    var _onReset = function onReset(e) {
      var _props2$onReset;
      if (props2.preventSubmitDefault && e) {
        e.preventDefault();
        e.stopPropagation();
      }
      children.value.filter(function (child) {
        var _resetParams$value;
        return isFunction.isFunction(child.resetField) && needValidate(String(child.name), (_resetParams$value = resetParams.value) === null || _resetParams$value === void 0 ? void 0 : _resetParams$value.fields);
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
        if (isFunction.isFunction(child.resetHandler) && needValidate(String(child.name), fields)) {
          child.resetHandler();
        }
      });
    };
    var setValidateMessage = function setValidateMessage(validateMessage) {
      var keys = Object.keys(validateMessage);
      if (!keys.length) return;
      var list = children.value.filter(function (child) {
        return isFunction.isFunction(child.setValidateMessage) && keys.includes("".concat(child.name));
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
      return Vue.createVNode("form", {
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

exports["default"] = _Form;
//# sourceMappingURL=form.js.map
