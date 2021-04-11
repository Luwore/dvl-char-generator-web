"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var race_1 = require("./race");
var homeregion_1 = require("./homeregion");
var childhood_1 = require("./childhood");
function printChar() {
    console.log("Volk: " + race_1.generateRace());
    console.log("Heimatregion: " + homeregion_1.generateHomeregion());
    childhood_1.generateChildhood();
    console.log("Kindheit: " + childhood_1.childhood);
    console.log("Deine Attribute sind " + childhood_1.childAttributes);
    console.log("Deine Skills sind " + childhood_1.skill);
}
printChar();
