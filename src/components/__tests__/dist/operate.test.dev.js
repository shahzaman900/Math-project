"use strict";

var _operate = _interopRequireDefault(require("../../logic/operate"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe('operate', function () {
  test('adds two numbers correctly', function () {
    var result = (0, _operate["default"])(2, 3, '+');
    expect(result).toBe('5');
  });
  test('subtracts two numbers correctly', function () {
    var result = (0, _operate["default"])(5, 3, '-');
    expect(result).toBe('2');
  });
  test('multiplies two numbers correctly', function () {
    var result = (0, _operate["default"])(4, 7, 'x');
    expect(result).toBe('28');
  });
  test('divides two numbers correctly', function () {
    var result = (0, _operate["default"])(10, 2, '÷');
    expect(result).toBe('5');
  });
});