"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var race_1 = require("./race");
var homeregion_1 = require("./homeregion");
function printChar() {
    console.log("Volk: " + race_1.generateRace());
    console.log("Heimatregion: " + homeregion_1.generateHomeregion());
}
printChar();
