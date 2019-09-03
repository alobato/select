"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.SelectRaw = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject5() {
  var data = _taggedTemplateLiteral(["border-radius: ", "px;"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["border-color: ", ";"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["width: ", ";"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["max-width: ", ";"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\t-moz-appearance: none;\n\t-webkit-appearance: none;\n  appearance: none;\n\n  font-family: inherit;\n  font-size: inherit;\n  line-height: inherit;\n  color: inherit;\n  outline: 0;\n  cursor: pointer;\n  transition: all 0.3s;\n\n  padding: 0px 30px 0px 10px;\n  \n  background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20width%3D%2232%22%20height%3D%2232%22%3E%3Cpath%20fill%3D%22grey%22%20d%3D%22M16.59%208.59L12%2013.17%207.41%208.59%206%2010l6%206%206-6z%22%2F%3E%3C%2Fsvg%3E'), linear-gradient(to bottom, ", " 0%,", " 100%);\n\tbackground-repeat: no-repeat, repeat;\n\tbackground-position: right .3em top 50%, 0 0;\n  background-size: 1.25em auto, 100%;\n\n  height: ", ";\n  ", "\n  ", "\n  ", "\n\n  ", "\n  border: 1px solid ", ";\n  background-color: ", ";\n\n  &:focus {\n    box-shadow: 0 0 0 3px ", ";\n    border: 1px solid ", ";\n  }\n\n\t&:disabled {\n\t\tbackground-color: ", ";\n    background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20width%3D%2232%22%20height%3D%2232%22%3E%3Cpath%20fill%3D%22grey%22%20d%3D%22M16.59%208.59L12%2013.17%207.41%208.59%206%2010l6%206%206-6z%22%2F%3E%3C%2Fsvg%3E'),linear-gradient(to bottom,", " 0%,", " 100%);\n\t\tborder: 1px solid ", ";\n\t\tcursor: not-allowed;\n\t}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var SelectRaw = function SelectRaw(_ref) {
  var children = _ref.children,
      _ref$placeholder = _ref.placeholder,
      placeholder = _ref$placeholder === void 0 ? null : _ref$placeholder,
      withError = _ref.withError,
      className = _ref.className,
      rest = _objectWithoutProperties(_ref, ["children", "placeholder", "withError", "className"]);

  return _react["default"].createElement("select", _extends({
    className: className
  }, rest), placeholder && _react["default"].createElement("option", {
    value: ""
  }, placeholder), children);
};

exports.SelectRaw = SelectRaw;

var _default = (0, _styledComponents["default"])(SelectRaw)(_templateObject(), function (props) {
  return props.theme && props.theme.colors && props.theme.colors.white ? props.theme.colors.white : 'white';
}, function (props) {
  return props.theme && props.theme.colors && props.theme.colors.white ? props.theme.colors.white : 'white';
}, function (props) {
  return props.height ? props.height : '35px';
}, function (props) {
  return props.maxWidth && (0, _styledComponents.css)(_templateObject2(), props.maxWidth);
}, function (props) {
  return props.width && (0, _styledComponents.css)(_templateObject3(), props.width);
}, function (props) {
  return props.withError && (0, _styledComponents.css)(_templateObject4(), props.theme && props.theme.colors && props.theme.colors.error ? props.theme.colors.error : 'hsla(6, 66%, 47%, 1)');
}, function (props) {
  return props.theme && props.theme.borderRadius && (0, _styledComponents.css)(_templateObject5(), props.theme.borderRadius);
}, function (props) {
  return props.theme && props.theme.colors && props.theme.colors.grey300 ? props.theme.colors.grey300 : 'hsla(203, 20%, 76%, 1)';
}, function (props) {
  return props.theme && props.theme.colors && props.theme.colors.white ? props.theme.colors.white : 'white';
}, function (props) {
  return props.theme && props.theme.colors && props.theme.colors.primary200 ? props.theme.colors.primary200 : 'hsla(202, 81%, 86%, 1)';
}, function (props) {
  return props.theme && props.theme.colors && props.theme.colors.primary400 ? props.theme.colors.primary400 : 'hsla(205, 79%, 66%, 1)';
}, function (props) {
  return props.theme && props.theme.colors && props.theme.colors.grey100 ? props.theme.colors.grey100 : 'hsla(201, 20%, 96%, 1)';
}, function (props) {
  return props.theme && props.theme.colors && props.theme.colors.grey100 ? props.theme.colors.grey100 : 'hsla(201, 20%, 96%, 1)';
}, function (props) {
  return props.theme && props.theme.colors && props.theme.colors.grey100 ? props.theme.colors.grey100 : 'hsla(201, 20%, 96%, 1)';
}, function (props) {
  return props.theme && props.theme.colors && props.theme.colors.grey200 ? props.theme.colors.grey200 : 'hsla(202, 20%, 86%, 1)';
});

exports["default"] = _default;
