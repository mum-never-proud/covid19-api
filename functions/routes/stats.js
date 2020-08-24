"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _chalk = _interopRequireDefault(require("chalk"));

var _findOrFetchStats = _interopRequireDefault(require("../services/find-or-fetch-stats"));

var _responsify = _interopRequireDefault(require("../utils/responsify"));

var _validateCountriesRequest = _interopRequireDefault(require("../middlewares/validate-countries-request"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["{red.bold failed to fetch >> stats ", "}"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var router = new _express.Router();
router.get('/:country', _validateCountriesRequest["default"], function (req, res) {
  (0, _findOrFetchStats["default"])(req.params.country).then(function (stats) {
    return res.json((0, _responsify["default"])(stats)).status(200);
  })["catch"](function (err) {
    console.log((0, _chalk["default"])(_templateObject(), err));
    res.boom.badImplementation();
  });
});
var _default = router;
exports["default"] = _default;