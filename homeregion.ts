import {generateRace, raceInt} from "./race";
import {d6Roller} from "./diceRoller";


export function generateHomeregion():String {
    createHomeregions()
    let tempRegion = heimatregion[raceInt]
    return tempRegion[d6Roller() -1]
}

let heimatregion:Array<Array<string>> = []

function createHomeregions() {
    //Erländer
    heimatregion[0] = ["Am Rande des Arinawaldes", "Die Ebenen von Moldena", "Die Ebenen von Moldena", "Die Ufer vom Varda-See", "Die Felder von Margelda", "Die Harga-Wüste"]
    //Aslene
    heimatregion[1] = ["Die Felder von Margelda", "Die Felder von Margelda", "Die Yendra-Steppe", "Die Yendra-Steppe", "Die Ebenen von Moldena", "Die Finsternis des Leichentuchs"]
    //Ailander
    heimatregion[2]= ["Die Felder von Margelda", "Die Küste der Zornbucht", "Die Ebenen von Moldena", "Die Ebenen von Moldena", "Das Grasland von Vivend", "Das Ufer des Varda-Sees"]
    //Halbelf
    heimatregion[3]= ["Die Felder von Margelda", "Die Ebenen von Moldena", "Das Grasland von Vivend", "Am Rande des Fennwaldes", "Am Rande des Arinawaldes", "Die Harga-Wüste"]
    //Halbling
    heimatregion[4] = ["Die Auen von Belifar", "Die Auen von Belifar", "Die Auen von Belifar", "Die Auen von Belifar", "Die Felder von Margelda", "Die Ebenen von Moldena"]
    //Goblin
    heimatregion[5] = ["Im Schatten der Reißzahnwälder", "Im Schatten der Reißzahnwälder", "Im Schatten der Reißzahnwälder", "Die Haine des Leichentuchs", "Die Haine des Leichentuchs", "Tief in den Hainwäldern"]
    //Ork
    heimatregion[6] = ["Tief in den Hainwäldern", "Tief in den Hainwäldern", "In den Tiefen des Arinawaldes", "In den Tiefen des Arinawaldes", "In den Tiefen des Arinawaldes", "Die Harga-Wüste"]
    //Wolfsmensch
    heimatregion[7] = ["Im Schatten der Reißzahnwälder", "Im Schatten der Reißzahnwälder", "Tief in den Hainwäldern", "Tief in den Hainwäldern", "In den Tiefen des Arinawaldes", "Die Haine des Leichentuchs"]
    //Zwerg
    heimatregion[8] = ["Die Berge von Moldena", "Die Klippen von Fern-Vivend", "Die Klippen von Fern-Vivend", "Die Gipfel der nördlichen Feulenmark", "Die Gipfel der nördlichen Feulenmark", "Die nördlichen Berge von Belderand"]
    //Elf
    heimatregion[9]= ["In den Tiefen des Fennwaldes", "In den Tiefen des Fennwaldes", "Am Rande des Fennwaldes", "Die Siedlungen von Vivend", "Die Siedlungen von Fern-Vivend", "Die Insel Maidenholm"]
}