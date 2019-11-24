"use strict";

var _react = _interopRequireDefault(require("react"));

var _index = _interopRequireDefault(require("./index"));

var _enzyme = require("enzyme");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe('render', function () {
  it('renders without crashing', function () {
    (0, _enzyme.shallow)(_react["default"].createElement(_index["default"], null));
  });
});