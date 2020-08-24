"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _fetchStats = _interopRequireDefault(require("./fetch-stats"));

var _isOutdated = _interopRequireDefault(require("../utils/is-outdated"));

var _parseStats = _interopRequireDefault(require("./parse-stats"));

var _covidDb = require("./covid-db");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _default(country) {
  var cachedData = (0, _covidDb.read)(country);

  if (cachedData && !(0, _isOutdated["default"])(cachedData.updated_at)) {
    return Promise.resolve(cachedData);
  }

  return (0, _fetchStats["default"])().then(function (response) {
    return response.text();
  }).then(function (stats) {
    return (0, _parseStats["default"])(stats, country);
  }).then(function (stats) {
    return Promise.resolve(cachedData ? (0, _covidDb.update)(country, stats) : (0, _covidDb.write)(stats));
  });
}