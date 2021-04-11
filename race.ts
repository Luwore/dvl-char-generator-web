import {d66Roller} from "./diceRoller"

export let raceInt:number;

export function generateRace():String {
    const r = d66Roller();

    if (r < 23) {
        raceInt = 0;
        return "Erlenländer (Mensch)";
    } else if (r < 32) {
        raceInt = 1;
        return "Aslene (Mensch)";
    } else if (r < 35) {
        raceInt = 2;
        return "Ailander (Mensch)";
    } else if (r < 42) {
        raceInt = 3;
        return "Halbelf";
    } else if (r < 45) {
        raceInt = 4;
        return "Halbling";
    } else if (r < 53) {
        raceInt = 5;
        return "Goblin";
    } else if (r < 61) {
        raceInt = 6;
        return "Ork";
    } else if (r < 63) {
        raceInt = 7;
        return "Wolfsmensch";
    } else if (r < 65) {
        raceInt = 8;
        return "Zwerg";
    } else if (r <= 66) {
        raceInt = 9;
        return "Elf";
    } else {
        return "Fehler";
    }
}