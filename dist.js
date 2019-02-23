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

var useMap = function useMap(data, type, check) {
  if (!Array.isArray(data)) return;
  return mapHandler(data);
};

var _default = useMap;
exports.default = _default;
