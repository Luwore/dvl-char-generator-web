import {generateRace} from "./race";
import {generateHomeregion} from "./homeregion";

function printChar() {
    console.log("Volk: " + generateRace())
    console.log("Heimatregion: " + generateHomeregion())
}

printChar()



