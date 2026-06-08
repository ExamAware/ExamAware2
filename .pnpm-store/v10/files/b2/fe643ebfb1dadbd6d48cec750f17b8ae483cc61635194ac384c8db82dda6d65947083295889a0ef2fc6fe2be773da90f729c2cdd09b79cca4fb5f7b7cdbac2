/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import _toConsumableArray from '@babel/runtime/helpers/toConsumableArray';
import _defineProperty from '@babel/runtime/helpers/defineProperty';
import _slicedToArray from '@babel/runtime/helpers/slicedToArray';
import { ref, toRefs, computed } from 'vue';
import { isFunction, isNumber, merge } from 'lodash-es';
import _toArray from '@babel/runtime/helpers/toArray';
import { f as getCurrentDate, i as isOverSizeLimit, h as getFileList } from '../../_chunks/dep-7d14e543.js';
import _typeof from '@babel/runtime/helpers/typeof';
import { l as log } from '../../_chunks/dep-8295e674.js';
import '../../_chunks/dep-fe23be6e.js';
import { useConfig } from '../../config-provider/hooks/useConfig.js';
import '../../_chunks/dep-880d05b9.js';
import { u as useVModel } from '../../_chunks/dep-51e5a827.js';
import '../../_chunks/dep-81b01cae.js';
import '../../config-provider/utils/context.js';
import '../../_chunks/dep-938cd955.js';
import 'dayjs';
import '@babel/runtime/helpers/createClass';
import '@babel/runtime/helpers/classCallCheck';

function ownKeys$2(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$2(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$2(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$2(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function xhr(_ref) {
  var _files$;
  var _ref$method = _ref.method,
    method = _ref$method === void 0 ? "POST" : _ref$method,
    action = _ref.action,
    _ref$withCredentials = _ref.withCredentials,
    withCredentials = _ref$withCredentials === void 0 ? false : _ref$withCredentials,
    _ref$headers = _ref.headers,
    headers = _ref$headers === void 0 ? {} : _ref$headers,
    _ref$data = _ref.data,
    data = _ref$data === void 0 ? {} : _ref$data,
    file = _ref.file,
    _ref$files = _ref.files,
    files = _ref$files === void 0 ? [] : _ref$files,
    _ref$name = _ref.name,
    name = _ref$name === void 0 ? "file" : _ref$name,
    _ref$useMockProgress = _ref.useMockProgress,
    useMockProgress = _ref$useMockProgress === void 0 ? true : _ref$useMockProgress,
    _ref$mockProgressDura = _ref.mockProgressDuration,
    mockProgressDuration = _ref$mockProgressDura === void 0 ? 300 : _ref$mockProgressDura,
    formatRequest = _ref.formatRequest,
    onError = _ref.onError,
    onProgress = _ref.onProgress,
    onSuccess = _ref.onSuccess;
  var innerFiles = files || [];
  var percent = 0;
  var xhr2 = new XMLHttpRequest();
  if (withCredentials) {
    xhr2.withCredentials = true;
  }
  var timer1;
  var timer2;
  if (useMockProgress && ((_files$ = files[0]) === null || _files$ === void 0 ? void 0 : _files$.status) === "progress") {
    var timer22 = setTimeout(function () {
      timer1 = setInterval(function () {
        if (percent + 10 < 100) {
          percent = Math.max(percent + 10, percent);
          if (files[0] && percent !== files[0].percent) {
            files[0].percent = percent;
            onProgress({
              percent: percent,
              file: file || innerFiles[0],
              files: innerFiles.map(function (file2) {
                return _objectSpread$2(_objectSpread$2({}, file2), {}, {
                  percent: percent
                });
              }),
              type: "mock",
              XMLHttpRequest: xhr2
            });
          }
        } else {
          clearInterval(timer1);
        }
      }, mockProgressDuration);
      clearTimeout(timer22);
    }, mockProgressDuration);
  }
  var requestData = {};
  if (data) {
    var extraData = isFunction(data) ? data(innerFiles) : data;
    Object.assign(requestData, extraData);
  }
  innerFiles.forEach(function (file2, index) {
    var fileField = innerFiles.length > 1 ? "".concat(name, "[").concat(index, "]") : name;
    requestData[fileField] = file2.raw;
  });
  if (innerFiles.length === 1) {
    requestData[name] = innerFiles[0].raw;
  } else {
    requestData[name] = innerFiles.map(function (file2) {
      return file2.raw;
    });
  }
  requestData.length = innerFiles.length;
  if (formatRequest) {
    requestData = formatRequest(requestData);
  }
  var formData = new FormData();
  Object.keys(requestData).forEach(function (key) {
    var dataValue = requestData[key];
    if (Array.isArray(dataValue)) {
      dataValue.forEach(function (value) {
        formData.append(key, value);
      });
    } else {
      formData.append(key, dataValue);
    }
  });
  xhr2.open(method, action, true);
  Object.keys(headers).forEach(function (key) {
    xhr2.setRequestHeader(key, headers[key]);
  });
  xhr2.onerror = function (event) {
    onError({
      event: event,
      file: file,
      files: innerFiles,
      XMLHttpRequest: xhr2
    });
    clearInterval(timer1);
    clearTimeout(timer2);
  };
  xhr2.ontimeout = function (event) {
    onError({
      event: event,
      file: file,
      files: innerFiles,
      XMLHttpRequest: xhr2
    });
  };
  if (xhr2.upload) {
    xhr2.upload.onprogress = function (event) {
      var _innerFiles$;
      var realPercent = 0;
      if (event.total > 0) {
        realPercent = Math.round(event.loaded / event.total * 100);
      }
      percent = Math.max(realPercent, percent);
      if (percent !== realPercent && ((_innerFiles$ = innerFiles[0]) === null || _innerFiles$ === void 0 ? void 0 : _innerFiles$.percent) !== percent) {
        var progressFiles = innerFiles.map(function (item) {
          return _objectSpread$2(_objectSpread$2({}, item), {}, {
            percent: percent
          });
        });
        onProgress({
          event: event,
          percent: percent,
          file: file || progressFiles[0],
          files: progressFiles,
          type: "real",
          XMLHttpRequest: xhr2
        });
      }
    };
  }
  xhr2.onload = function (event) {
    var response = {};
    response.XMLHttpRequest = xhr2;
    var isFail = xhr2.status < 200 || xhr2.status >= 300;
    if (isFail) {
      return onError({
        event: event,
        file: file,
        files: innerFiles,
        response: response,
        XMLHttpRequest: xhr2
      });
    }
    var text = xhr2.responseText || xhr2.response;
    try {
      response = JSON.parse(text);
    } catch (e) {
      response = text;
      log.error("Upload", "response does not a valid json");
    }
    clearInterval(timer1);
    clearTimeout(timer2);
    innerFiles.forEach(function (file2) {
      var _response;
      file2.percent = 100;
      file2.status = "success";
      file2.uploadTime = ((_response = response) === null || _response === void 0 ? void 0 : _response.uploadTime) || getCurrentDate();
    });
    if (_typeof(response) === "object") {
      response.XMLHttpRequest = xhr2;
    }
    onSuccess({
      event: event,
      file: file || innerFiles[0],
      files: _toConsumableArray(innerFiles),
      XMLHttpRequest: xhr2,
      response: response
    });
  };
  xhr2.send(formData);
  xhr2.upload.requestParams = requestData;
  xhr2.upload.requestHeaders = headers;
  return xhr2;
}

function ownKeys$1(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$1(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$1(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$1(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function handleBeforeUpload(file, params) {
  var sizeLimit = params.sizeLimit,
    beforeUpload = params.beforeUpload;
  var sizePromise = new Promise(function (resolve) {
    var result = null;
    if (sizeLimit) {
      var sizeLimitObj = isNumber(sizeLimit) ? {
        size: sizeLimit,
        unit: "KB"
      } : sizeLimit;
      var limit = isOverSizeLimit(file.size, sizeLimitObj.size, sizeLimitObj.unit);
      if (limit) {
        result = sizeLimitObj;
      }
    }
    resolve(result);
  });
  var promiseList = [sizePromise, void 0];
  if (isFunction(beforeUpload)) {
    var r = beforeUpload(file);
    var p = r instanceof Promise ? r : new Promise(function (resolve) {
      resolve(r);
    });
    promiseList[1] = p;
  }
  return new Promise(function (resolve) {
    Promise.all(promiseList).then(function (r) {
      resolve(r);
    });
  });
}
function handleError(options) {
  var event = options.event,
    files = options.files,
    response = options.response,
    XMLHttpRequest = options.XMLHttpRequest,
    formatResponse = options.formatResponse;
  var res = response;
  if (isFunction(formatResponse)) {
    res = formatResponse(response, {
      file: files[0],
      currentFiles: files
    });
  }
  files.forEach(function (file) {
    file.status = "fail";
    file.response = res;
  });
  return {
    response: res,
    event: event,
    files: files,
    XMLHttpRequest: XMLHttpRequest
  };
}
function handleSuccess(params) {
  var event = params.event,
    files = params.files,
    response = params.response,
    XMLHttpRequest = params.XMLHttpRequest;
  if ((files === null || files === void 0 ? void 0 : files.length) <= 0) {
    log.error("Upload", "Empty File in Success Callback");
  }
  files.forEach(function (file) {
    var _file$response;
    file.percent = 100;
    file.status = "success";
    (_file$response = file.response) === null || _file$response === void 0 || delete _file$response.error;
  });
  var res = response;
  files[0].url = res.url || files[0].url;
  return {
    response: res,
    event: event,
    files: files,
    XMLHttpRequest: XMLHttpRequest
  };
}
function handleRequestMethodResponse(res) {
  if (!res) {
    log.error("Upload", "`requestMethodResponse` is required.");
    return false;
  }
  if (!res.status) {
    log.error("Upload", "`requestMethodResponse.status` is missing, which value only can be `success` or `fail`");
    return false;
  }
  if (!["success", "fail"].includes(res.status)) {
    log.error("Upload", "`requestMethodResponse.status` must be `success` or `fail`, examples `{ status: 'success', response: { url: '' } }`");
    return false;
  }
  if (res.status === "success" && (!res.response || !res.response.url && !res.response.files)) {
    log.warn("Upload", "`requestMethodResponse.response.url` or `requestMethodResponse.response.files` is required if `status` is `success`");
  }
  return true;
}
function uploadOneRequest(params) {
  var action = params.action,
    toUploadFiles = params.toUploadFiles,
    requestMethod = params.requestMethod;
  return new Promise(function (resolve) {
    if (!action && !requestMethod) {
      log.error("Upload", "one of action and requestMethod must be exist.");
      resolve({});
      return;
    }
    if (!toUploadFiles || !toUploadFiles.length) {
      log.warn("Upload", "No files need to be uploaded");
      resolve({});
      return;
    }
    toUploadFiles.forEach(function (file) {
      file.status = "progress";
    });
    if (requestMethod) {
      requestMethod(params.multiple ? toUploadFiles : toUploadFiles[0]).then(function (res) {
        if (!handleRequestMethodResponse(res)) {
          resolve({});
          return;
        }
        var response = res.response || {};
        if (isFunction(params.formatResponse)) {
          response = params.formatResponse(response, {
            file: toUploadFiles[0],
            currentFiles: toUploadFiles
          });
        }
        if (res.status === "fail") {
          response.error = res.error || response.error;
        }
        var resultFiles = [];
        if (res.status === "success" && response.files) {
          resultFiles = response.files.map(function (file) {
            var fileInfo = toUploadFiles.find(function (toFile) {
              return file.name && toFile.name === file.name || file.raw && toFile.raw === file.raw;
            });
            return _objectSpread$1(_objectSpread$1(_objectSpread$1({}, fileInfo), file), {}, {
              status: res.status,
              response: response
            });
          });
        } else {
          toUploadFiles.forEach(function (file) {
            var _response;
            file.status = res.status;
            file.response = response;
            file.url = response.url;
            file.percent = res.status === "success" ? 100 : 0;
            file.uploadTime = ((_response = response) === null || _response === void 0 ? void 0 : _response.uploadTime) || getCurrentDate();
          });
          resultFiles = toUploadFiles;
        }
        var result = {
          response: response,
          file: resultFiles[0],
          files: resultFiles
        };
        if (res.status === "success") {
          var _params$onResponseSuc;
          (_params$onResponseSuc = params.onResponseSuccess) === null || _params$onResponseSuc === void 0 || _params$onResponseSuc.call(params, result);
        } else if (res.status === "fail") {
          var _params$onResponseErr;
          (_params$onResponseErr = params.onResponseError) === null || _params$onResponseErr === void 0 || _params$onResponseErr.call(params, result);
        }
        resolve({
          status: res.status,
          data: result
        });
      });
    } else {
      var _params$setXhrObject;
      var xhrReq = xhr({
        action: params.action,
        files: params.toUploadFiles,
        useMockProgress: params.useMockProgress,
        mockProgressDuration: params.mockProgressDuration,
        onError: function onError(p) {
          var _params$onResponseErr2;
          var r = handleError(_objectSpread$1(_objectSpread$1({}, p), {}, {
            formatResponse: params.formatResponse
          }));
          (_params$onResponseErr2 = params.onResponseError) === null || _params$onResponseErr2 === void 0 || _params$onResponseErr2.call(params, r);
          resolve({
            status: "fail",
            data: r
          });
        },
        onProgress: params.onResponseProgress,
        onSuccess: function onSuccess(p) {
          var formatResponse = params.formatResponse;
          var res = p.response;
          if (isFunction(formatResponse)) {
            res = formatResponse(p.response, {
              file: p.file,
              currentFiles: p.files
            });
          }
          if (res.error) {
            var _params$onResponseErr3;
            var r = handleError(_objectSpread$1(_objectSpread$1({}, p), {}, {
              response: res
            }));
            (_params$onResponseErr3 = params.onResponseError) === null || _params$onResponseErr3 === void 0 || _params$onResponseErr3.call(params, r);
            resolve({
              status: "fail",
              data: r
            });
          } else {
            var _params$onResponseSuc2;
            p.file.response = res;
            p.files[0].response = res;
            var _r = handleSuccess(_objectSpread$1(_objectSpread$1({}, p), {}, {
              response: res
            }));
            (_params$onResponseSuc2 = params.onResponseSuccess) === null || _params$onResponseSuc2 === void 0 || _params$onResponseSuc2.call(params, _r);
            resolve({
              status: "success",
              data: _r
            });
          }
        },
        formatRequest: params.formatRequest,
        data: params.data,
        name: params.name,
        headers: params.headers,
        withCredentials: params.withCredentials,
        method: params.method
      });
      (_params$setXhrObject = params.setXhrObject) === null || _params$setXhrObject === void 0 || _params$setXhrObject.call(params, {
        files: params.toUploadFiles,
        xhrReq: xhrReq
      });
    }
  });
}
function updateUploadedFiles(uploadFiles, resultFiles) {
  var existFiles = uploadFiles.filter(function (t) {
    return t.url;
  });
  var newFiles = existFiles;
  var _loop = function _loop() {
    var file = resultFiles[i];
    var index = uploadFiles.findIndex(function (item) {
      return item.raw && item.raw === file.raw || item.name && item.name === file.name;
    });
    var tmpFile = index >= 0 ? _objectSpread$1(_objectSpread$1({}, uploadFiles[index]), file) : file;
    newFiles.push(tmpFile);
  };
  for (var i = 0, len = resultFiles.length; i < len; i++) {
    _loop();
  }
  return newFiles;
}
function upload(params) {
  var uploadAllFilesInOneRequest = params.uploadAllFilesInOneRequest,
    toUploadFiles = params.toUploadFiles,
    uploadedFiles = params.uploadedFiles,
    isBatchUpload = params.isBatchUpload;
  var thisUploadFiles = toUploadFiles.filter(function (t) {
    return !t.response || t.response && !t.response.error;
  });
  return new Promise(function (resolve) {
    if (uploadAllFilesInOneRequest || !params.multiple) {
      uploadOneRequest(params).then(function (r) {
        if (r.status === "success") {
          r.data.files = isBatchUpload || !params.multiple ? r.data.files : updateUploadedFiles(uploadedFiles, r.data.files);
        }
        var failedFiles = r.status === "fail" ? r.data.files : [];
        resolve(_objectSpread$1(_objectSpread$1({}, r), {}, {
          failedFiles: failedFiles
        }));
      });
      return;
    }
    var list = thisUploadFiles.map(function (file) {
      return uploadOneRequest(_objectSpread$1(_objectSpread$1({}, params), {}, {
        toUploadFiles: [file]
      }));
    });
    Promise.all(list).then(function (arr) {
      var files = [];
      var failedFiles = [];
      arr.forEach(function (one) {
        if (one.status === "success") {
          files.push(one.data.files[0]);
        } else if (one.status === "fail") {
          failedFiles.push(one.data.files[0]);
        }
      });
      var tFiles = params.autoUpload ? uploadedFiles.concat(files) : uploadedFiles;
      var newFiles = isBatchUpload || !params.multiple ? files : tFiles;
      resolve({
        status: files.length ? "success" : "fail",
        data: {
          files: newFiles
        },
        failedFiles: failedFiles,
        list: arr
      });
    });
  });
}
function formatToUploadFile(files, format) {
  var status = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : void 0;
  var percent = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
  return files.map(function (fileRaw) {
    var file = fileRaw;
    if (isFunction(format)) {
      file = format(fileRaw);
    }
    var uploadFile = _objectSpread$1({
      raw: fileRaw,
      lastModified: fileRaw.lastModified,
      name: fileRaw.name,
      size: fileRaw.size,
      type: fileRaw.type,
      percent: percent,
      status: status
    }, file);
    return uploadFile;
  });
}
function validateFile(params) {
  var files = params.files,
    uploadValue = params.uploadValue,
    max = params.max,
    allowUploadDuplicateFile = params.allowUploadDuplicateFile,
    _params$capture = params.capture,
    capture = _params$capture === void 0 ? "" : _params$capture;
  return new Promise(function (resolve) {
    var tmpFiles = files.filter(function (file) {
      if (allowUploadDuplicateFile || !!capture) return true;
      var sameNameFile = uploadValue.find(function (t) {
        return t.name === file.name;
      });
      return !sameNameFile;
    });
    var hasSameNameFile = false;
    if (tmpFiles.length < files.length) {
      hasSameNameFile = true;
    }
    if (!tmpFiles.length) {
      var tFiles = formatToUploadFile(files, params.format, params.autoUpload ? "progress" : "waiting");
      resolve({
        hasSameNameFile: hasSameNameFile,
        file: tFiles === null || tFiles === void 0 ? void 0 : tFiles[0],
        files: tFiles,
        validateResult: {
          type: "FILTER_FILE_SAME_NAME"
        }
      });
      return;
    }
    var lengthOverLimit = false;
    if (max && tmpFiles.length && !params.isBatchUpload) {
      var tmpFilesLenToBeAdded = tmpFiles.length;
      tmpFiles = tmpFiles.slice(0, max - uploadValue.length);
      if (tmpFilesLenToBeAdded + uploadValue.length > max) {
        lengthOverLimit = true;
      }
    }
    var formattedFiles = formatToUploadFile(tmpFiles, params.format, params.autoUpload ? "progress" : "waiting");
    var allFileValidatePromise;
    if (params.beforeAllFilesUpload) {
      var _params$beforeAllFile;
      var r = (_params$beforeAllFile = params.beforeAllFilesUpload) === null || _params$beforeAllFile === void 0 ? void 0 : _params$beforeAllFile.call(params, formattedFiles);
      allFileValidatePromise = r instanceof Promise ? r : new Promise(function (resolve2) {
        resolve2(r);
      });
    }
    var promiseList = formattedFiles.map(function (file) {
      return new Promise(function (resolve2) {
        handleBeforeUpload(file, {
          beforeUpload: params.beforeUpload,
          sizeLimit: params.sizeLimit
        }).then(function (_ref) {
          var _ref2 = _slicedToArray(_ref, 2),
            sizeResult = _ref2[0],
            customResult = _ref2[1];
          if (sizeResult) {
            resolve2({
              file: file,
              validateResult: {
                type: "FILE_OVER_SIZE_LIMIT",
                extra: sizeResult
              }
            });
          } else if (customResult === false) {
            resolve2({
              file: file,
              validateResult: {
                type: "CUSTOM_BEFORE_UPLOAD"
              }
            });
          }
          resolve2({
            file: file
          });
        });
      });
    });
    Promise.all([allFileValidatePromise].concat(promiseList)).then(function (results) {
      var _results = _toArray(results),
        allFilesResult = _results[0],
        others = _results.slice(1);
      if (allFilesResult === false) {
        resolve({
          lengthOverLimit: lengthOverLimit,
          hasSameNameFile: hasSameNameFile,
          validateResult: {
            type: "BEFORE_ALL_FILES_UPLOAD"
          },
          files: formattedFiles
        });
      } else {
        resolve({
          lengthOverLimit: lengthOverLimit,
          hasSameNameFile: hasSameNameFile,
          fileValidateList: others,
          files: formattedFiles
        });
      }
    });
  });
}
function getFilesAndErrors(fileValidateList, getError) {
  var sizeLimitErrors = [];
  var beforeUploadErrorFiles = [];
  var toFiles = [];
  fileValidateList.forEach(function (oneFile) {
    var _oneFile$validateResu, _oneFile$validateResu2;
    if (((_oneFile$validateResu = oneFile.validateResult) === null || _oneFile$validateResu === void 0 ? void 0 : _oneFile$validateResu.type) === "CUSTOM_BEFORE_UPLOAD") {
      beforeUploadErrorFiles.push(oneFile.file);
      return;
    }
    if (((_oneFile$validateResu2 = oneFile.validateResult) === null || _oneFile$validateResu2 === void 0 ? void 0 : _oneFile$validateResu2.type) === "FILE_OVER_SIZE_LIMIT") {
      if (!oneFile.file.response) {
        oneFile.file.response = {};
      }
      oneFile.file.response.error = oneFile.file.response.error || getError(oneFile.validateResult.extra);
      sizeLimitErrors.push(oneFile);
      return;
    }
    toFiles.push(oneFile.file);
  });
  return {
    sizeLimitErrors: sizeLimitErrors,
    beforeUploadErrorFiles: beforeUploadErrorFiles,
    toFiles: toFiles
  };
}
function getTriggerTextField(p) {
  if (p.isBatchUpload && p.status) return "reupload";
  if (p.status === "fail") return "reupload";
  if (p.status === "progress") return "uploading";
  if (p.status === "success" || !p.autoUpload && p.status === "waiting") {
    return p.multiple ? "continueUpload" : "reupload";
  }
  return "fileInput";
}
function getDisplayFiles(params) {
  var multiple = params.multiple,
    uploadValue = params.uploadValue,
    toUploadFiles = params.toUploadFiles,
    autoUpload = params.autoUpload;
  var waitingUploadFiles = autoUpload ? toUploadFiles : toUploadFiles.filter(function (file) {
    return file.status !== "success";
  });
  if (multiple && !params.isBatchUpload) {
    if (!autoUpload) return uploadValue;
    return (waitingUploadFiles.length ? uploadValue.concat(waitingUploadFiles) : uploadValue) || [];
  }
  return (waitingUploadFiles.length ? waitingUploadFiles : uploadValue) || [];
}

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function useUpload(props) {
  var inputRef = ref();
  var _toRefs = toRefs(props),
    disabled = _toRefs.disabled,
    autoUpload = _toRefs.autoUpload,
    isBatchUpload = _toRefs.isBatchUpload,
    multiple = _toRefs.multiple,
    files = _toRefs.files,
    modelValue = _toRefs.modelValue,
    defaultFiles = _toRefs.defaultFiles;
  var _useConfig = useConfig("upload"),
    globalConfig = _useConfig.globalConfig,
    t = _useConfig.t,
    classPrefix = _useConfig.classPrefix;
  var _useVModel = useVModel(files, modelValue, defaultFiles.value, props.onChange, "files"),
    _useVModel2 = _slicedToArray(_useVModel, 2),
    uploadValue = _useVModel2[0],
    setUploadValue = _useVModel2[1];
  var xhrReq = ref([]);
  var toUploadFiles = ref([]);
  var sizeOverLimitMessage = ref("");
  var locale = computed(function () {
    return merge({}, globalConfig.value, props.locale);
  });
  var tipsClasses = "".concat(classPrefix.value, "-upload__tips ").concat(classPrefix.value, "-size-s");
  var errorClasses = [tipsClasses].concat("".concat(classPrefix.value, "-upload__tips-error"));
  var placeholderClass = "".concat(classPrefix.value, "-upload__placeholder");
  var triggerUploadText = computed(function () {
    var _uploadValue$value;
    var field = getTriggerTextField({
      isBatchUpload: isBatchUpload.value,
      multiple: multiple.value,
      status: (_uploadValue$value = uploadValue.value) === null || _uploadValue$value === void 0 || (_uploadValue$value = _uploadValue$value[0]) === null || _uploadValue$value === void 0 ? void 0 : _uploadValue$value.status,
      autoUpload: autoUpload.value
    });
    return locale.value.triggerUploadText[field];
  });
  var uploading = ref(false);
  var displayFiles = computed(function () {
    return getDisplayFiles({
      multiple: props.multiple,
      toUploadFiles: toUploadFiles.value,
      uploadValue: uploadValue.value,
      autoUpload: autoUpload.value,
      isBatchUpload: isBatchUpload.value
    });
  });
  var uploadFilePercent = function uploadFilePercent(params) {
    var file = params.file,
      percent = params.percent;
    var operationUploadFiles = autoUpload.value ? toUploadFiles : uploadValue;
    var index = operationUploadFiles.value.findIndex(function (item) {
      return file.raw === item.raw;
    });
    operationUploadFiles.value[index] = _objectSpread(_objectSpread({}, operationUploadFiles.value[index]), {}, {
      percent: percent
    });
  };
  var updateFilesProgress = function updateFilesProgress() {
    if (props.autoUpload) {
      toUploadFiles.value = _toConsumableArray(toUploadFiles.value);
    }
  };
  var onResponseError = function onResponseError(p) {
    var _props$onOneFileFail;
    if (!p || !p.files || !p.files[0]) return;
    var response = p.response,
      event = p.event,
      files2 = p.files;
    updateFilesProgress();
    (_props$onOneFileFail = props.onOneFileFail) === null || _props$onOneFileFail === void 0 || _props$onOneFileFail.call(props, {
      e: event,
      file: files2 === null || files2 === void 0 ? void 0 : files2[0],
      currentFiles: files2,
      failedFiles: files2,
      response: response
    });
    if (!props.multiple || props.isBatchUpload) {
      setUploadValue([], {
        trigger: "progress-fail",
        e: p.event,
        file: p.files[0]
      });
    }
  };
  var onResponseProgress = function onResponseProgress(p) {
    var _props$onProgress;
    updateFilesProgress();
    (_props$onProgress = props.onProgress) === null || _props$onProgress === void 0 || _props$onProgress.call(props, {
      e: p.event,
      file: p.file,
      currentFiles: p.files,
      percent: p.percent,
      type: p.type,
      XMLHttpRequest: p.XMLHttpRequest
    });
  };
  var onResponseSuccess = function onResponseSuccess(p) {
    if (props.multiple && !props.uploadAllFilesInOneRequest) {
      var _props$onOneFileSucce;
      updateFilesProgress();
      (_props$onOneFileSucce = props.onOneFileSuccess) === null || _props$onOneFileSucce === void 0 || _props$onOneFileSucce.call(props, {
        e: p.event,
        file: p.files[0],
        response: p.response
      });
    }
  };
  function getSizeLimitError(sizeLimitObj) {
    var limit = sizeLimitObj;
    return limit.message ? t(limit.message, {
      sizeLimit: limit.size
    }) : "".concat(t(locale.value.sizeLimitMessage, {
      sizeLimit: limit.size
    }), " ").concat(limit.unit);
  }
  var handleNotAutoUpload = function handleNotAutoUpload(toFiles) {
    var tmpFiles = props.multiple && !isBatchUpload.value ? uploadValue.value.concat(toFiles) : toFiles;
    if (!tmpFiles.length) return;
    setUploadValue(tmpFiles, {
      trigger: "add",
      index: uploadValue.value.length,
      file: toFiles[0],
      files: toFiles
    });
    toUploadFiles.value = [];
  };
  var onFileChange = function onFileChange(files2) {
    var _props$onSelectChange;
    if (disabled.value) return;
    var params = {
      currentSelectedFiles: formatToUploadFile(_toConsumableArray(files2), props.format)
    };
    (_props$onSelectChange = props.onSelectChange) === null || _props$onSelectChange === void 0 || _props$onSelectChange.call(props, _toConsumableArray(files2), params);
    validateFile({
      uploadValue: uploadValue.value,
      files: _toConsumableArray(files2),
      allowUploadDuplicateFile: props.allowUploadDuplicateFile,
      max: props.multiple ? props.max : 0,
      sizeLimit: props.sizeLimit,
      isBatchUpload: isBatchUpload.value,
      autoUpload: autoUpload.value,
      format: props.format,
      beforeUpload: props.beforeUpload,
      beforeAllFilesUpload: props.beforeAllFilesUpload
    }).then(function (args) {
      var _args$validateResult;
      if (((_args$validateResult = args.validateResult) === null || _args$validateResult === void 0 ? void 0 : _args$validateResult.type) === "BEFORE_ALL_FILES_UPLOAD") {
        var _props$onValidate;
        var params2 = {
          type: "BEFORE_ALL_FILES_UPLOAD",
          files: args.files
        };
        (_props$onValidate = props.onValidate) === null || _props$onValidate === void 0 || _props$onValidate.call(props, params2);
        return;
      }
      if (args.lengthOverLimit) {
        var _props$onValidate2;
        var _params = {
          type: "FILES_OVER_LENGTH_LIMIT",
          files: args.files
        };
        (_props$onValidate2 = props.onValidate) === null || _props$onValidate2 === void 0 || _props$onValidate2.call(props, _params);
        if (!args.files.length) return;
      }
      if (args.hasSameNameFile) {
        var _props$onValidate3;
        var _params2 = {
          type: "FILTER_FILE_SAME_NAME",
          files: args.files
        };
        (_props$onValidate3 = props.onValidate) === null || _props$onValidate3 === void 0 || _props$onValidate3.call(props, _params2);
      }
      if (args.fileValidateList instanceof Array) {
        var _props$onWaitingUploa;
        var _getFilesAndErrors = getFilesAndErrors(args.fileValidateList, getSizeLimitError),
          sizeLimitErrors = _getFilesAndErrors.sizeLimitErrors,
          beforeUploadErrorFiles = _getFilesAndErrors.beforeUploadErrorFiles,
          toFiles = _getFilesAndErrors.toFiles;
        var tmpWaitingFiles = autoUpload.value ? toFiles : toUploadFiles.value.concat(toFiles);
        toUploadFiles.value = tmpWaitingFiles;
        (_props$onWaitingUploa = props.onWaitingUploadFilesChange) === null || _props$onWaitingUploa === void 0 || _props$onWaitingUploa.call(props, {
          files: tmpWaitingFiles,
          trigger: "validate"
        });
        if (sizeLimitErrors[0]) {
          var _props$onValidate4;
          sizeOverLimitMessage.value = sizeLimitErrors[0].file.response.error;
          (_props$onValidate4 = props.onValidate) === null || _props$onValidate4 === void 0 || _props$onValidate4.call(props, {
            type: "FILE_OVER_SIZE_LIMIT",
            files: sizeLimitErrors.map(function (t2) {
              return t2.file;
            })
          });
        } else {
          sizeOverLimitMessage.value = "";
          if (beforeUploadErrorFiles.length) {
            var _props$onValidate5;
            var _params3 = {
              type: "CUSTOM_BEFORE_UPLOAD",
              files: beforeUploadErrorFiles
            };
            (_props$onValidate5 = props.onValidate) === null || _props$onValidate5 === void 0 || _props$onValidate5.call(props, _params3);
          }
        }
        if (autoUpload.value) {
          uploadFiles(tmpWaitingFiles);
        } else {
          handleNotAutoUpload(tmpWaitingFiles);
        }
      }
    });
    inputRef.value.value = null;
  };
  var onNormalFileChange = function onNormalFileChange(e) {
    var fileList = getFileList(e.target.files);
    onFileChange === null || onFileChange === void 0 || onFileChange(fileList);
  };
  function onDragFileChange(files2) {
    onFileChange === null || onFileChange === void 0 || onFileChange(files2);
  }
  function onPasteFileChange(e) {
    onFileChange === null || onFileChange === void 0 || onFileChange(_toConsumableArray(e.clipboardData.files));
  }
  function uploadFiles(toFiles) {
    var notUploadedFiles = uploadValue.value.filter(function (t2) {
      return t2.status !== "success";
    });
    var files2 = autoUpload.value ? toFiles || toUploadFiles.value : notUploadedFiles;
    if (!files2 || !files2.length) return;
    uploading.value = true;
    xhrReq.value = [];
    upload({
      action: props.action,
      headers: props.headers,
      method: props.method,
      name: props.name,
      withCredentials: props.withCredentials,
      uploadedFiles: uploadValue.value,
      toUploadFiles: files2,
      multiple: props.multiple,
      isBatchUpload: isBatchUpload.value,
      autoUpload: props.autoUpload,
      uploadAllFilesInOneRequest: props.uploadAllFilesInOneRequest,
      useMockProgress: props.useMockProgress,
      data: props.data,
      mockProgressDuration: props.mockProgressDuration,
      requestMethod: props.requestMethod,
      formatRequest: props.formatRequest,
      formatResponse: props.formatResponse,
      onResponseProgress: onResponseProgress,
      onResponseSuccess: onResponseSuccess,
      onResponseError: onResponseError,
      setXhrObject: function setXhrObject(xhr) {
        var _xhr$files$;
        if ((_xhr$files$ = xhr.files[0]) !== null && _xhr$files$ !== void 0 && _xhr$files$.raw && xhrReq.value.find(function (item) {
          var _item$files$;
          return ((_item$files$ = item.files[0]) === null || _item$files$ === void 0 ? void 0 : _item$files$.raw) === xhr.files[0].raw;
        })) return;
        xhrReq.value = xhrReq.value.concat(xhr);
      }
    }).then(function (_ref) {
      var status = _ref.status,
        data = _ref.data,
        list = _ref.list,
        failedFiles = _ref.failedFiles;
      uploading.value = false;
      if (status === "success") {
        var _props$onSuccess;
        setUploadValue(_toConsumableArray(data.files), {
          trigger: "add",
          file: data.files[0]
        });
        xhrReq.value = [];
        (_props$onSuccess = props.onSuccess) === null || _props$onSuccess === void 0 || _props$onSuccess.call(props, {
          fileList: data.files,
          currentFiles: files2,
          file: files2[0],
          results: list === null || list === void 0 ? void 0 : list.map(function (t2) {
            return t2.data;
          }),
          response: data.response || list.map(function (t2) {
            return t2.data.response;
          }),
          XMLHttpRequest: data.XMLHttpRequest
        });
      } else if (failedFiles !== null && failedFiles !== void 0 && failedFiles[0]) {
        var _props$onFail;
        (_props$onFail = props.onFail) === null || _props$onFail === void 0 || _props$onFail.call(props, {
          e: data.event,
          file: failedFiles[0],
          failedFiles: failedFiles,
          currentFiles: files2,
          response: data.response,
          XMLHttpRequest: data.XMLHttpRequest
        });
      }
      if (autoUpload.value) {
        var _props$onWaitingUploa2;
        toUploadFiles.value = failedFiles;
        (_props$onWaitingUploa2 = props.onWaitingUploadFilesChange) === null || _props$onWaitingUploa2 === void 0 || _props$onWaitingUploa2.call(props, {
          files: failedFiles,
          trigger: "uploaded"
        });
      }
    });
  }
  function onInnerRemove(p) {
    var _p$e$stopPropagation, _p$e, _props$onRemove;
    sizeOverLimitMessage.value = "";
    (_p$e$stopPropagation = (_p$e = p.e).stopPropagation) === null || _p$e$stopPropagation === void 0 || _p$e$stopPropagation.call(_p$e);
    var changePrams = {
      e: p.e,
      trigger: "remove",
      index: p.index,
      file: p.file
    };
    if (props.isBatchUpload || !props.multiple) {
      var _props$onWaitingUploa3;
      toUploadFiles.value = [];
      (_props$onWaitingUploa3 = props.onWaitingUploadFilesChange) === null || _props$onWaitingUploa3 === void 0 || _props$onWaitingUploa3.call(props, {
        files: [],
        trigger: "remove"
      });
      setUploadValue([], changePrams);
    } else if (!props.autoUpload) {
      uploadValue.value.splice(p.index, 1);
      setUploadValue(_toConsumableArray(uploadValue.value), changePrams);
    } else {
      if (p.index < uploadValue.value.length) {
        uploadValue.value.splice(p.index, 1);
        setUploadValue(_toConsumableArray(uploadValue.value), changePrams);
      } else {
        var _props$onWaitingUploa4;
        toUploadFiles.value.splice(p.index - uploadValue.value.length, 1);
        toUploadFiles.value = _toConsumableArray(toUploadFiles.value);
        (_props$onWaitingUploa4 = props.onWaitingUploadFilesChange) === null || _props$onWaitingUploa4 === void 0 || _props$onWaitingUploa4.call(props, {
          files: _toConsumableArray(toUploadFiles.value),
          trigger: "remove"
        });
      }
    }
    (_props$onRemove = props.onRemove) === null || _props$onRemove === void 0 || _props$onRemove.call(props, p);
  }
  var triggerUpload = function triggerUpload(e) {
    var _e$stopPropagation;
    if (disabled.value || !inputRef.value) return;
    e === null || e === void 0 || (_e$stopPropagation = e.stopPropagation) === null || _e$stopPropagation === void 0 || _e$stopPropagation.call(e);
    inputRef.value.click();
  };
  var cancelUpload = function cancelUpload(context) {
    var _xhrReq$value, _props$onCancelUpload;
    (_xhrReq$value = xhrReq.value) === null || _xhrReq$value === void 0 || _xhrReq$value.forEach(function (item) {
      var _item$xhrReq;
      (_item$xhrReq = item.xhrReq) === null || _item$xhrReq === void 0 || _item$xhrReq.abort();
    });
    uploading.value = false;
    if (autoUpload.value) {
      toUploadFiles.value = [];
    } else {
      setUploadValue(uploadValue.value.map(function (item) {
        if (item.status !== "success") {
          return _objectSpread(_objectSpread({}, item), {}, {
            status: "waiting"
          });
        }
        return item;
      }), {
        trigger: "abort"
      });
    }
    if (context !== null && context !== void 0 && context.file && !autoUpload.value) {
      onInnerRemove === null || onInnerRemove === void 0 || onInnerRemove({
        file: context.file,
        e: context.e,
        index: 0
      });
    }
    (_props$onCancelUpload = props.onCancelUpload) === null || _props$onCancelUpload === void 0 || _props$onCancelUpload.call(props);
  };
  return {
    t: t,
    locale: locale,
    classPrefix: classPrefix,
    triggerUploadText: triggerUploadText,
    toUploadFiles: toUploadFiles,
    uploadValue: uploadValue,
    displayFiles: displayFiles,
    sizeOverLimitMessage: sizeOverLimitMessage,
    uploading: uploading,
    tipsClasses: tipsClasses,
    errorClasses: errorClasses,
    placeholderClass: placeholderClass,
    inputRef: inputRef,
    disabled: disabled,
    xhrReq: xhrReq,
    uploadFilePercent: uploadFilePercent,
    uploadFiles: uploadFiles,
    onFileChange: onFileChange,
    onNormalFileChange: onNormalFileChange,
    onDragFileChange: onDragFileChange,
    onPasteFileChange: onPasteFileChange,
    onInnerRemove: onInnerRemove,
    triggerUpload: triggerUpload,
    cancelUpload: cancelUpload
  };
}

export { useUpload as default };
//# sourceMappingURL=useUpload.js.map
