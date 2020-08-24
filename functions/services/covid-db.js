"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.read = read;
exports.write = write;
exports.update = update;

var _lowdb = _interopRequireDefault(require("lowdb"));

var _FileSync = _interopRequireDefault(require("lowdb/adapters/FileSync"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var adapter = new _FileSync["default"]('/tmp/db.json');
var db = (0, _lowdb["default"])(adapter);
db.defaults({
  covids: []
}).write();

function read(id) {
  return db.get('covids').find({
    id: id
  }).value();
}

function write(data) {
  if (_typeof(data) !== 'object') {
    return false;
  }

  var record = _objectSpread(_objectSpread({
    id: data.country.toLowerCase()
  }, data), {}, {
    updated_at: Date.now()
  });

  db.get('covids').push(record).write();
  return record;
}

function update(id, data) {
  return db.get('covids').find({
    id: id
  }).assign(_objectSpread(_objectSpread({}, data), {}, {
    updated_at: Date.now()
  })).write();
}