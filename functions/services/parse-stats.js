"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _cheerio = _interopRequireDefault(require("cheerio"));

var _equalsIgnoreCase = _interopRequireDefault(require("../utils/equals-ignore-case"));

var _objectFromHtml = _interopRequireDefault(require("../utils/object-from-html"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _default(stats, country) {
  return new Promise(function (resolve, reject) {
    var $ = _cheerio["default"].load(stats);

    var table = $('#main_table_countries_today>tbody').first();
    var countryStats = table.children().not('tr.row_continent');
    var countryStat = null;
    countryStats // eslint-disable-next-line consistent-return
    .each(function (_, row) {
      var children = $(row).children();

      if ((0, _equalsIgnoreCase["default"])(children.eq(1).text(), country)) {
        countryStat = children;
        return false;
      }
    });

    if (countryStat) {
      resolve((0, _objectFromHtml["default"])(countryStat, 'minimal'));
    } else {
      reject(Error("error parsing stat for ".concat(country)));
    }
  });
}