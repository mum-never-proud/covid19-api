"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _responseAttributes = _interopRequireDefault(require("../constants/response-attributes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _default(stats, responseType) {
  var responseAttribute = _responseAttributes["default"][responseType];
  var obj = {};

  if (responseAttribute) {
    responseAttribute.forEach(function (attr) {
      obj[attr.name] = stats.eq(attr.col).text().trim() || '0';
    });
  }

  return obj;
}