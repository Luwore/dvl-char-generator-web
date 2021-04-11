import {generateRace} from "./race";
import {generateHomeregion} from "./homeregion";
import {childAttributes, childhood, generateChildhood, skill} from "./childhood";

function printChar() {
    console.log("Volk: " + generateRace())
    console.log("Heimatregion: " + generateHomeregion())
    generateChildhood()
    console.log("Kindheit: " + childhood)
    console.log("Deine Attribute sind " + childAttributes)
    console.log("Deine Skills sind " + skill)
}

printChar()



