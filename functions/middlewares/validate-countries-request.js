"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _chalk = _interopRequireDefault(require("chalk"));

var _countries = _interopRequireDefault(require("../constants/countries"));

var _equalsIgnoreCase = _interopRequireDefault(require("../utils/equals-ignore-case"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["{red.yellow country missing >>> ", "}"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _default(req, res, next) {
  var params = req.params;

  if (params.country) {
    if (_countries["default"].some(function (country) {
      return (0, _equalsIgnoreCase["default"])(country, params.country);
    })) {
      return next();
    }
  }

  console.log((0, _chalk["default"])(_templateObject(), params.country));
  return res.boom.notFound();
}