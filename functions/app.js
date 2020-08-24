"use strict";

var _express = _interopRequireDefault(require("express"));

var _serverlessHttp = _interopRequireDefault(require("serverless-http"));

var _expressBoom = _interopRequireDefault(require("express-boom"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _morgan = _interopRequireDefault(require("morgan"));

var _stats = _interopRequireDefault(require("./routes/stats"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_dotenv["default"].config();

var app = new _express["default"]();
app.use((0, _expressBoom["default"])());
app.use((0, _morgan["default"])('combined'));
app.use('/.netlify/functions/app/stats', _stats["default"]);
app.use(function (_, res) {
  return res.boom.notFound();
});
module.exports = app;
module.exports.handler = (0, _serverlessHttp["default"])(app);