"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function map(num, inMin, inMax, outMin, outMax) {
    return (num - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}
exports.default = map;
