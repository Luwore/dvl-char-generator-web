"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.d3Roller = exports.d4Roller = exports.d66Roller = exports.d6Roller = void 0;
function d6Roller() {
    return Math.floor(Math.random() * 6) + 1;
}
exports.d6Roller = d6Roller;
function d66Roller() {
    return Math.floor(Math.random() * 66) + 1;
}
exports.d66Roller = d66Roller;
function d4Roller() {
    return Math.floor(Math.random() * 4) + 1;
}
exports.d4Roller = d4Roller;
function d3Roller() {
    return Math.floor(Math.random() * 3) + 1;
}
exports.d3Roller = d3Roller;
