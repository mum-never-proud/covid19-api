"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _duration = _interopRequireDefault(require("dayjs/plugin/duration"));

var _dayjs = _interopRequireDefault(require("dayjs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_dayjs["default"].extend(_duration["default"]);

function _default(timestamp) {
  var threshold = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : process.env.COVID_DATA_EXPIRES_IN_MINUTES;
  return _dayjs["default"].duration((0, _dayjs["default"])().diff(timestamp)).asMinutes() > threshold;
}