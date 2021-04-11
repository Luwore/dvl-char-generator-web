"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateRace = exports.raceInt = void 0;
var diceRoller_1 = require("./diceRoller");
function generateRace() {
    var r = diceRoller_1.d66Roller();
    if (r < 23) {
        exports.raceInt = 0;
        return "Erlenländer (Mensch)";
    }
    else if (r < 32) {
        exports.raceInt = 1;
        return "Aslene (Mensch)";
    }
    else if (r < 35) {
        exports.raceInt = 2;
        return "Ailander (Mensch)";
    }
    else if (r < 42) {
        exports.raceInt = 3;
        return "Halbelf";
    }
    else if (r < 45) {
        exports.raceInt = 4;
        return "Halbling";
    }
    else if (r < 53) {
        exports.raceInt = 5;
        return "Goblin";
    }
    else if (r < 61) {
        exports.raceInt = 6;
        return "Ork";
    }
    else if (r < 63) {
        exports.raceInt = 7;
        return "Wolfsmensch";
    }
    else if (r < 65) {
        exports.raceInt = 8;
        return "Zwerg";
    }
    else if (r <= 66) {
        exports.raceInt = 9;
        return "Elf";
    }
    else {
        return "Fehler";
    }
}
exports.generateRace = generateRace;
