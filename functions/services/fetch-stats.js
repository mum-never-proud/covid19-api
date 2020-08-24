"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _nodeFetch = _interopRequireDefault(require("node-fetch"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _default() {
  var WORLD_METER_ENDPOINT = process.env.WORLD_METER_ENDPOINT;
  return (0, _nodeFetch["default"])(WORLD_METER_ENDPOINT);
}