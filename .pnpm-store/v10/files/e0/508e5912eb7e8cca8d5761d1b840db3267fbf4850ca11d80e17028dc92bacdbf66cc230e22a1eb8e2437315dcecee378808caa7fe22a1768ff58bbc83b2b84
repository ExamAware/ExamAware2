/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { l as log } from './dep-97ecacde.mjs';

var IMAGE_REGEXP = /(.png|.jpg|.jpeg|.jpe|.webp|.avif|.svg|.gif|.bmp)/i;
var IMAGE_ALL_REGEXP = /(.png|.jpg|.jpeg|.jpe|.webp|.avif|.svg|.gif|.bmp|.dwg|.dxf|.svf|.tif|.tiff|.arw)/i;
var FILE_PDF_REGEXP = /(.pdf)/i;
var FILE_EXCEL_REGEXP = /(.xlsx|.xls|.csv|.xlc|.xlm|.xlt|.xlw)/i;
var FILE_WORD_REGEXP = /(.dox|docx|.document|.wps|.wdb|.msword)/i;
var FILE_PPT_REGEXP = /(.ppt|.pptx|.key)/i;
var VIDEO_REGEXP = /(.avi|.mp4|.wmv|.mpg|.mpeg|.mov|.rm|.ram|.swf|.flv|.rmvb|.flash|.mid|.3gp)/i;
var AUDIO_REGEXP = /(.mp2|.mp3|.mp4|.ogg|.3gpp|.ac3|.au)/i;
var INPUT_FILE_MAP = {
  "audio/*": AUDIO_REGEXP,
  "video/*": VIDEO_REGEXP,
  "image/*": IMAGE_ALL_REGEXP,
  ".jpg": /image\/jpeg|\.jpg$/i,
  ".ico": /image\/vnd.microsoft.icon/i,
  ".doc": /application\/msword/i,
  ".docx": /application\/vnd.openxmlformats-officedocument.wordprocessingml.document/i,
  ".xls": /application\/vnd.ms-excel/i,
  ".xlsx": /application\/vnd.openxmlformats-officedocument.spreadsheetml.sheet/i,
  ".ppt": /application\/vnd.ms-powerpoint/i,
  ".pptx": /application\/vnd.openxmlformats-officedocument.presentationml.presentation/i,
  ".vsd": /application\/vnd.visio/i,
  ".txt": /text\/plain/i,
  ".abw": /application\/x-abiword/i,
  ".avi": /video\/x-msvideo/i,
  ".azw": /application\/vnd.amazon.ebook/i,
  ".bin": /application\/octet-stream/i,
  ".cda": /application\/x-cdf/i,
  ".mpkg": /application\/vnd.apple.installer+xml/i,
  ".odp": /application\/vnd.oasis.opendocument.presentation/i,
  ".ods": /application\/vnd.oasis.opendocument.spreadsheet/i,
  ".odt": /application\/vnd.oasis.opendocument.text/i,
  ".oga": /audio\/ogg/i,
  ".ogv": /video\/ogg/i,
  ".ogx": /application\/ogg/i
};
var SIZE_MAP = {
  B: 1,
  KB: 1024,
  MB: 1048576,
  GB: 1073741824
};
function returnFileSize(number) {
  if (number < SIZE_MAP.KB) {
    return "".concat(number, " Bytes");
  }
  if (number >= SIZE_MAP.KB && number < SIZE_MAP.MB) {
    return "".concat((number / SIZE_MAP.KB).toFixed(1), " KB");
  }
  if (number >= SIZE_MAP.MB && number < SIZE_MAP.GB) {
    return "".concat((number / SIZE_MAP.MB).toFixed(1), " MB");
  }
  if (number >= SIZE_MAP.GB) {
    return "".concat((number / SIZE_MAP.GB).toFixed(1), " GB");
  }
  return "";
}
function getCurrentDate() {
  var needTime = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var d = new Date();
  var month = d.getMonth() + 1;
  month = month < 10 ? "0".concat(month) : month;
  var date = "".concat(d.getFullYear(), "-").concat(month, "-").concat(d.getDate());
  var time = "".concat(d.getHours(), ":").concat(d.getMinutes(), ":").concat(d.getSeconds());
  if (needTime) return [date, time].join(" ");
  return date;
}
function abridgeName(inputName) {
  var leftCount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 5;
  var rightCount = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 7;
  var name = inputName;
  var leftLength = 0;
  var rightLength = 0;
  if (!name) return "";
  for (var i = 0; i < name.length; i++) {
    var w = name[i];
    var isCn = escape(w).indexOf("%u") === 0;
    if (i < leftCount * 2 && leftLength < leftCount) {
      isCn ? leftLength += 1 : leftLength += 2;
    } else if (i > i - rightCount && rightLength < rightCount) {
      isCn ? rightLength += 1 : rightLength += 2;
    }
  }
  return name.replace(new RegExp("^(.{".concat(leftLength, "})(.+)(.{").concat(rightLength, "})$")), "$1\u2026$3");
}
function getFileSizeText(number) {
  if (number < 1024) {
    return "".concat(number, " Bytes");
  }
  if (number >= 1024 && number < 1048576) {
    return "".concat((number / 1024).toFixed(1), " KB");
  }
  if (number >= 1048576) {
    return "".concat((number / 1048576).toFixed(1), " MB");
  }
  return "";
}
function isOverSizeLimit(fileSize, sizeLimit, unit) {
  var units = ["B", "KB", "MB", "GB"];
  var KBIndex = 1;
  var index = units.indexOf(unit);
  if (index === -1) {
    log.warn("Upload", "`sizeLimit.unit` can only be one of ".concat(units.join()));
    index = KBIndex;
  }
  var num = SIZE_MAP[unit];
  return fileSize > sizeLimit * num;
}
function isOverSizeLimit1(fileSize, sizeLimit, unit) {
  var units = ["B", "KB", "MB", "GB"];
  var KBIndex = 1;
  var index = units.indexOf(unit);
  if (index === -1) {
    console.warn("TDesign Upload Warn: `sizeLimit.unit` can only be one of ".concat(units.join()));
    index = KBIndex;
  }
  var num = SIZE_MAP[unit];
  var limit = index < KBIndex ? sizeLimit / num : sizeLimit * num;
  return fileSize <= limit;
}
var urlCreator = function urlCreator() {
  return window.webkitURL || window.URL;
};
function getFileUrlByFileRaw(fileRaw) {
  return new Promise(function (resolve) {
    if (!fileRaw) {
      resolve("");
      return;
    }
    var reader = new FileReader();
    reader.readAsDataURL(fileRaw);
    reader.onload = function (event) {
      var _event$target;
      resolve((_event$target = event.target) === null || _event$target === void 0 ? void 0 : _event$target.result);
    };
  });
}
function validateFileType(accept, fileType, fileName) {
  var tmpFileType = fileType || fileName;
  if (!accept) return true;
  if (!tmpFileType) return false;
  var acceptList = accept.split(",").map(function (v) {
    return v.trim();
  });
  for (var i = 0, len = acceptList.length; i < len; i++) {
    var oneRule = acceptList[i];
    if (INPUT_FILE_MAP[oneRule] && INPUT_FILE_MAP[oneRule].test(tmpFileType)) {
      return true;
    }
    var regExp = new RegExp(oneRule, "i");
    if (regExp.test(tmpFileType)) {
      return true;
    }
  }
  return false;
}
function getFileList(files) {
  var accept = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
  var fileList = [];
  for (var i = 0; i < files.length; i++) {
    if (validateFileType(accept, files[i].type, files[i].name)) {
      fileList.push(files[i]);
    }
  }
  return fileList;
}

export { FILE_PDF_REGEXP as F, IMAGE_REGEXP as I, VIDEO_REGEXP as V, abridgeName as a, getFileSizeText as b, FILE_EXCEL_REGEXP as c, FILE_WORD_REGEXP as d, FILE_PPT_REGEXP as e, getCurrentDate as f, getFileUrlByFileRaw as g, getFileList as h, isOverSizeLimit as i, returnFileSize as r };
//# sourceMappingURL=dep-cdd448ec.mjs.map
