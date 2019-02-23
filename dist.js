"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var mapHandler = function mapHandler(data) {
  return data.map(function (value) {
    return value;
  });
};

var useHooktest = function useHooktest(data, type, check) {
  if (!Array.isArray(data)) return;

  if (type === "map") {
    return mapHandler(data);
  }
};

var _default = useHooktest;
exports.default = _default;
