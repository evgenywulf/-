"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var PlaceholderImage =
/*#__PURE__*/
function (_React$Component) {
  _inherits(PlaceholderImage, _React$Component);

  function PlaceholderImage() {
    _classCallCheck(this, PlaceholderImage);

    return _possibleConstructorReturn(this, _getPrototypeOf(PlaceholderImage).apply(this, arguments));
  }

  _createClass(PlaceholderImage, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          width = _this$props.width,
          height = _this$props.height;
      return _react["default"].createElement("svg", {
        width: width,
        height: height,
        style: {
          display: 'inline'
        }
      }, _react["default"].createElement("rect", {
        width: "100%",
        height: "100%",
        style: {
          fill: '#eee',
          strokeWidth: 1,
          stroke: 'gray'
        }
      }), _react["default"].createElement("line", {
        x1: "0",
        y1: "0",
        x2: "100%",
        y2: "100%",
        style: {
          stroke: 'lightgray',
          strokeWidth: 1
        }
      }), _react["default"].createElement("line", {
        x1: "100%",
        y1: "0",
        x2: "0",
        y2: "100%",
        style: {
          stroke: 'lightgray',
          strokeWidth: 1
        }
      }), _react["default"].createElement("text", {
        alignmentBaseline: "middle",
        textAnchor: "middle",
        x: "50%",
        y: "50%",
        style: {
          stroke: 'lightgray',
          fill: 'lightgray'
        }
      }, width, " x ", height), _react["default"].createElement("text", null));
    }
  }]);

  return PlaceholderImage;
}(_react["default"].Component);

exports["default"] = PlaceholderImage;