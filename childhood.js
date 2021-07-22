"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateChildhood = exports.childAttributes = exports.childhood = exports.skill = void 0;
var diceRoller_1 = require("./diceRoller");
var race_1 = require("./race");
exports.skill = [];
exports.childAttributes = [];
function generateChildhood() {
    setDefaultSkills();
    //generateRace()
    generateChildhoodSkills(race_1.raceInt);
}
exports.generateChildhood = generateChildhood;
function setDefaultSkills() {
    exports.skill = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
}
function generateChildhoodSkills(raceNumber) {
    var r = diceRoller_1.d6Roller();
    if (raceNumber === 0) {
        switch (r) {
            case 1:
                exports.childhood = "Weise";
                exports.childAttributes = [3, 5, 3, 4];
                exports.skill[1] = 1;
                exports.skill[2] = 1;
                exports.skill[8] = 1;
                exports.skill[5] = 1;
                exports.skill[10] = 1;
                exports.skill[11] = 1;
                //Skills waiseS = new Skills(skill);
                break;
            case 2:
                exports.childhood = "Hirte";
                exports.childAttributes = [4, 4, 3, 4];
                exports.skill[8] = 2;
                exports.skill[15] = 2;
                exports.skill[0] = 1;
                exports.skill[3] = 1;
                //Skills hirteS = new Skills(skill);
                break;
            case 3:
                exports.childhood = "Herumtreiber";
                exports.childAttributes = [4, 4, 4, 3];
                exports.skill[10] = 2;
                exports.skill[1] = 1;
                exports.skill[2] = 1;
                exports.skill[8] = 1;
                exports.skill[11] = 1;
                //Skills herumtreiberS = new Skills(skill);
                break;
            case 4:
                exports.childhood = "Knappe";
                exports.childAttributes = [4, 4, 3, 4];
                exports.skill[2] = 2;
                exports.skill[1] = 1;
                exports.skill[7] = 1;
                exports.skill[6] = 1;
                exports.skill[14] = 1;
                //Skills knappeS = new Skills(skill);
                break;
            case 5:
                exports.childhood = "Arbeiter";
                exports.childAttributes = [5, 3, 3, 4];
                exports.skill[0] = 2;
                exports.skill[2] = 1;
                exports.skill[3] = 1;
                exports.skill[10] = 1;
                exports.skill[15] = 1;
                //Skills arbeiterS = new Skills(skill);
                break;
            case 6:
                exports.childhood = "Harte Lehrjahre";
                exports.childAttributes = [3, 3, 5, 4];
                exports.skill[9] = 3;
                exports.skill[3] = 1;
                exports.skill[11] = 1;
                exports.skill[12] = 1;
                //Skills harteLehrjahreS = new Skills(skill);
                break;
        }
    }
    else if (raceNumber === 1) {
        switch (r) {
            case 1:
                exports.childhood = "Im Sattel geboren";
                exports.childAttributes = [4, 5, 3, 3];
                exports.skill[6] = 2;
                exports.skill[10] = 2;
                exports.skill[15] = 2;
                //Skills imSattelGeborenS = new Skills(skill);
                break;
            case 2:
                exports.childhood = "Träumer";
                exports.childAttributes = [3, 3, 4, 5];
                exports.skill[9] = 2;
                exports.skill[13] = 2;
                exports.skill[12] = 1;
                exports.skill[15] = 1;
                //Skills träumerS = new Skills(skill);
                break;
            case 3:
                exports.childhood = "Die stärkste des Clan";
                exports.childAttributes = [5, 3, 3, 4];
                exports.skill[0] = 2;
                exports.skill[2] = 2;
                exports.skill[1] = 1;
                exports.skill[15] = 1;
                //Skills dieStärksteDesClanS = new Skills(skill);
                break;
            case 4:
                exports.childhood = "Schüler einer weisen Frau";
                exports.childAttributes = [3, 3, 5, 4];
                exports.skill[9] = 2;
                exports.skill[11] = 1;
                exports.skill[14] = 2;
                exports.skill[15] = 1;
                //Skills schülerEinerWeisenFraS = new Skills(skill);
                break;
            case 5:
                exports.childhood = "Jäger";
                exports.childAttributes = [3, 4, 4, 4];
                exports.skill[7] = 2;
                exports.skill[8] = 2;
                exports.skill[10] = 1;
                exports.skill[15] = 1;
                //Skills jägerS = new Skills(skill);
                break;
            case 6:
                exports.childhood = "Kind der Winde";
                exports.childAttributes = [4, 4, 3, 4];
                exports.skill[10] = 2;
                exports.skill[2] = 1;
                exports.skill[7] = 1;
                exports.skill[1] = 1;
                exports.skill[15] = 1;
                //Skills kindDerWindeS = new Skills(skill);
                break;
        }
    }
    else if (raceNumber === 2) {
        switch (r) {
            case 1:
                exports.childhood = "Kind des Raben";
                exports.childAttributes = [3, 4, 4, 4];
                exports.skill[9] = 2;
                exports.skill[3] = 1;
                exports.skill[6] = 1;
                exports.skill[8] = 1;
                exports.skill[11] = 1;
                //Skills kindDerRabenS = new Skills(skill);
                break;
            case 2:
                exports.childhood = "Druidenlehrling";
                exports.childAttributes = [3, 4, 5, 3];
                exports.skill[10] = 2;
                exports.skill[8] = 1;
                exports.skill[9] = 1;
                exports.skill[14] = 1;
                exports.skill[15] = 1;
                //Skills druidenlehrlingS = new Skills(skill);
                break;
            case 3:
                exports.childhood = "Beschützer";
                exports.childAttributes = [5, 4, 3, 3];
                exports.skill[2] = 2;
                exports.skill[7] = 2;
                exports.skill[6] = 1;
                exports.skill[0] = 1;
                //Skills beschützerS = new Skills(skill);
                break;
            case 4:
                exports.childhood = "Wanderer";
                exports.childAttributes = [4, 4, 3, 4];
                exports.skill[10] = 2;
                exports.skill[1] = 1;
                exports.skill[2] = 1;
                exports.skill[8] = 1;
                exports.skill[15] = 1;
                //Skills wandererS = new Skills(skill);
                break;
            case 5:
                exports.childhood = "Arbeiter";
                exports.childAttributes = [5, 3, 3, 4];
                exports.skill[0] = 2;
                exports.skill[2] = 1;
                exports.skill[3] = 1;
                exports.skill[10] = 1;
                exports.skill[15] = 1;
                //Skills arbeiterS = new Skills(skill);
                break;
            case 6:
                exports.childhood = "Hirte";
                exports.childAttributes = [4, 4, 3, 4];
                exports.skill[8] = 2;
                exports.skill[15] = 2;
                exports.skill[0] = 1;
                exports.skill[3] = 1;
                //Skills hirteS = new Skills(skill);
                break;
        }
    }
    else if (raceNumber === 3) {
        switch (r) {
            case 1:
                exports.childhood = "Auf der Flucht";
                exports.childAttributes = [4, 5, 3, 3];
                exports.skill[4] = 2;
                exports.skill[8] = 2;
                exports.skill[11] = 1;
                exports.skill[2] = 1;
                //Skills aufDerFluchtS = new Skills(skill);
                break;
            case 2:
                exports.childhood = "Künstler";
                exports.childAttributes = [3, 3, 4, 5];
                exports.skill[3] = 2;
                exports.skill[13] = 2;
                exports.skill[6] = 1;
                exports.skill[9] = 1;
                //Skills künstlerS = new Skills(skill);
                break;
            case 3:
                exports.childhood = "Schüler";
                exports.childAttributes = [3, 4, 5, 3];
                exports.skill[9] = 3;
                exports.skill[3] = 1;
                exports.skill[11] = 1;
                exports.skill[14] = 1;
                //Skills schülerS = new Skills(skill);
                break;
            case 4:
                exports.childhood = "Akrobat";
                exports.childAttributes = [3, 5, 3, 4];
                exports.skill[6] = 2;
                exports.skill[5] = 2;
                exports.skill[13] = 1;
                exports.skill[4] = 1;
                //Skills akrobatS = new Skills(skill);
                break;
            case 5:
                exports.childhood = "Kämpfer";
                exports.childAttributes = [4, 5, 3, 3];
                exports.skill[2] = 2;
                exports.skill[7] = 2;
                exports.skill[0] = 1;
                exports.skill[1] = 1;
                //Skills kämpferS = new Skills(skill);
                break;
            case 6:
                exports.childhood = "Geisterkind";
                exports.childAttributes = [3, 4, 4, 4];
                exports.skill[4] = 2;
                exports.skill[5] = 2;
                exports.skill[11] = 1;
                exports.skill[2] = 1;
                //Skills geisterkindS = new Skills(skill);
                break;
        }
    }
    else if (raceNumber === 4) {
        switch (r) {
            case 1:
                exports.childhood = "Bäckerlehrling";
                exports.childAttributes = [4, 4, 3, 4];
                exports.skill[3] = 2;
                exports.skill[5] = 1;
                exports.skill[9] = 1;
                exports.skill[10] = 1;
                exports.skill[13] = 1;
                //Skills bäckerlehrlingS = new Skills(skill);
                break;
            case 2:
                exports.childhood = "Arbeiter";
                exports.childAttributes = [4, 4, 3, 4];
                exports.skill[0] = 2;
                exports.skill[2] = 1;
                exports.skill[3] = 1;
                exports.skill[10] = 1;
                exports.skill[15] = 1;
                //Skills arbeiterS = new Skills(skill);
                break;
            case 3:
                exports.childhood = "Handwerker";
                exports.childAttributes = [3, 4, 4, 4];
                exports.skill[3] = 3;
                exports.skill[9] = 1;
                exports.skill[11] = 1;
                exports.skill[2] = 1;
                //Skills handwerkerS = new Skills(skill);
                break;
            case 4:
                exports.childhood = "Küchenkind";
                exports.childAttributes = [4, 4, 3, 4];
                exports.skill[3] = 2;
                exports.skill[5] = 1;
                exports.skill[9] = 1;
                exports.skill[10] = 1;
                exports.skill[15] = 1;
                //Skills küchenkindS = new Skills(skill);
                break;
            case 5:
                exports.childhood = "Bücherwurm";
                exports.childAttributes = [3, 3, 5, 4];
                exports.skill[9] = 3;
                exports.skill[11] = 1;
                exports.skill[12] = 1;
                exports.skill[14] = 1;
                //Skills bücherwurmS = new Skills(skill);
                break;
            case 6:
                exports.childhood = "Einzelgänger";
                exports.childAttributes = [4, 4, 4, 3];
                exports.skill[4] = 2;
                exports.skill[5] = 1;
                exports.skill[8] = 1;
                exports.skill[12] = 1;
                exports.skill[2] = 1;
                //Skills einzelgängerS = new Skills(skill);
                break;
        }
    }
    else if (raceNumber === 5) {
        switch (r) {
            case 1:
                exports.childhood = "Wolfling";
                exports.childAttributes = [4, 5, 3, 3];
                exports.skill[15] = 2;
                exports.skill[1] = 1;
                exports.skill[2] = 1;
                exports.skill[4] = 1;
                exports.skill[6] = 1;
                //Skills wolflingS = new Skills(skill);
                break;
            case 2:
                exports.childhood = "Langfinger";
                exports.childAttributes = [3, 5, 3, 4];
                exports.skill[4] = 2;
                exports.skill[8] = 2;
                exports.skill[11] = 1;
                exports.skill[12] = 1;
                //Skills langfingerS = new Skills(skill);
                break;
            case 3:
                exports.childhood = "Kind der Wälder";
                exports.childAttributes = [4, 4, 4, 3];
                exports.skill[10] = 2;
                exports.skill[1] = 1;
                exports.skill[6] = 1;
                exports.skill[7] = 1;
                exports.skill[8] = 1;
                //Skills kindDerWälderS = new Skills(skill);
                break;
            case 4:
                exports.childhood = "Wildling";
                exports.childAttributes = [4, 4, 3, 4];
                exports.skill[2] = 2;
                exports.skill[6] = 2;
                exports.skill[10] = 1;
                exports.skill[0] = 1;
                //Skills wildlingS = new Skills(skill);
                break;
            case 5:
                exports.childhood = "Wanderer";
                exports.childAttributes = [4, 4, 4, 3];
                exports.skill[10] = 2;
                exports.skill[1] = 1;
                exports.skill[2] = 1;
                exports.skill[8] = 1;
                exports.skill[15] = 1;
                //Skills wandererS = new Skills(skill);
                break;
            case 6:
                exports.childhood = "Geschichtenerzähler";
                exports.childAttributes = [3, 4, 3, 5];
                exports.skill[13] = 3;
                exports.skill[12] = 2;
                exports.skill[9] = 1;
                //Skills geschichtenerzählerS = new Skills(skill);
                break;
        }
    }
    else if (raceNumber === 6) {
        switch (r) {
            case 1:
                exports.childhood = "Barde";
                exports.childAttributes = [3, 3, 4, 5];
                exports.skill[13] = 3;
                exports.skill[9] = 1;
                exports.skill[11] = 1;
                exports.skill[12] = 1;
                //Skills bardeS = new Skills(skill);
                break;
            case 2:
                exports.childhood = "Arbeiter";
                exports.childAttributes = [5, 4, 3, 3];
                exports.skill[0] = 2;
                exports.skill[1] = 2;
                exports.skill[3] = 2;
                //Skills arbeiterS = new Skills(skill);
                break;
            case 3:
                exports.childhood = "Räuber";
                exports.childAttributes = [4, 4, 4, 3];
                exports.skill[2] = 2;
                exports.skill[4] = 1;
                exports.skill[5] = 1;
                exports.skill[8] = 1;
                exports.skill[10] = 1;
                //Skills räuberS = new Skills(skill);
                break;
            case 4:
                exports.childhood = "Streuner";
                exports.childAttributes = [4, 4, 3, 4];
                exports.skill[10] = 2;
                exports.skill[1] = 1;
                exports.skill[2] = 1;
                exports.skill[8] = 1;
                exports.skill[15] = 1;
                //Skills streunerS = new Skills(skill);
                break;
            case 5:
                exports.childhood = "Krieger";
                exports.childAttributes = [5, 4, 3, 3];
                exports.skill[2] = 2;
                exports.skill[7] = 2;
                exports.skill[6] = 1;
                exports.skill[0] = 1;
                //Skills kriegerS = new Skills(skill);
                break;
            case 6:
                exports.childhood = "Einzelgänger";
                exports.childAttributes = [4, 3, 5, 3];
                exports.skill[11] = 2;
                exports.skill[10] = 2;
                exports.skill[2] = 1;
                exports.skill[8] = 1;
                //Skills einzelgängerS = new Skills(skill);
                break;
        }
    }
    else if (raceNumber === 7) {
        switch (r) {
            case 1:
                exports.childhood = "Heuler";
                exports.childAttributes = [3, 4, 4, 4];
                exports.skill[13] = 3;
                exports.skill[9] = 1;
                exports.skill[12] = 1;
                exports.skill[10] = 1;
                //Skills heulerS = new Skills(skill);
                break;
            case 2:
                exports.childhood = "Jäger";
                exports.childAttributes = [4, 4, 4, 3];
                exports.skill[8] = 2;
                exports.skill[10] = 2;
                exports.skill[1] = 1;
                exports.skill[2] = 1;
                //Skills jägerS = new Skills(skill);
                break;
            case 3:
                exports.childhood = "Ausgestossener";
                exports.childAttributes = [4, 3, 5, 3];
                exports.skill[11] = 2;
                exports.skill[10] = 2;
                exports.skill[2] = 1;
                exports.skill[8] = 1;
                //Skills ausgestossenerS = new Skills(skill);
                break;
            case 4:
                exports.childhood = "Fährtenleser";
                exports.childAttributes = [3, 4, 5, 3];
                exports.skill[8] = 3;
                exports.skill[4] = 2;
                exports.skill[10] = 1;
                //Skills fährtenleserS = new Skills(skill);
                break;
            case 5:
                exports.childhood = "Kämpfer";
                exports.childAttributes = [5, 4, 3, 3];
                exports.skill[2] = 3;
                exports.skill[0] = 2;
                exports.skill[6] = 1;
                //Skills kämpferS = new Skills(skill);
                break;
            case 6:
                exports.childhood = "Kind des Waldes";
                exports.childAttributes = [3, 4, 4, 4];
                exports.skill[10] = 3;
                exports.skill[9] = 2;
                exports.skill[8] = 1;
                //Skills kindDesWaldesS = new Skills(skill);
                break;
        }
    }
    else if (raceNumber === 8) {
        switch (r) {
            case 1:
                exports.childhood = "Schmiedelehrling";
                exports.childAttributes = [5, 3, 4, 3];
                exports.skill[3] = 3;
                exports.skill[0] = 1;
                exports.skill[1] = 1;
                exports.skill[2] = 1;
                //Skills schmiedelehrlingS = new Skills(skill);
                break;
            case 2:
                exports.childhood = "Minenkind";
                exports.childAttributes = [4, 4, 4, 3];
                exports.skill[1] = 2;
                exports.skill[10] = 2;
                exports.skill[3] = 1;
                exports.skill[8] = 1;
                //Skills minenkindS = new Skills(skill);
                break;
            case 3:
                exports.childhood = "Kundschafterlehrling";
                exports.childAttributes = [4, 4, 4, 3];
                exports.skill[4] = 2;
                exports.skill[8] = 2;
                exports.skill[10] = 1;
                exports.skill[2] = 1;
                //Skills kundschafterlehrlingS = new Skills(skill);
                break;
            case 4:
                exports.childhood = "Wächter in Ausbildung";
                exports.childAttributes = [5, 4, 3, 3];
                exports.skill[0] = 2;
                exports.skill[2] = 2;
                exports.skill[7] = 1;
                exports.skill[1] = 1;
                //Skills wächterInAusbildungS = new Skills(skill);
                break;
            case 5:
                exports.childhood = "Steinmetz";
                exports.childAttributes = [4, 3, 5, 3];
                exports.skill[3] = 2;
                exports.skill[9] = 2;
                exports.skill[10] = 1;
                exports.skill[0] = 1;
                //Skills steinmetzS = new Skills(skill);
                break;
            case 6:
                exports.childhood = "Harte Lehrjahre";
                exports.childAttributes = [3, 3, 5, 4];
                exports.skill[9] = 3;
                exports.skill[3] = 1;
                exports.skill[11] = 1;
                exports.skill[12] = 1;
                //Skills harteLehrjahreS = new Skills(skill);
                break;
        }
    }
    else if (raceNumber === 9) {
        switch (r) {
            case 1:
                exports.childhood = "Einzelgänger";
                exports.childAttributes = [4, 3, 5, 3];
                exports.skill[11] = 2;
                exports.skill[10] = 2;
                exports.skill[2] = 1;
                exports.skill[8] = 1;
                //Skills einzelgängerS = new Skills(skill);
                break;
            case 2:
                exports.childhood = "Kämpfer";
                exports.childAttributes = [4, 5, 3, 3];
                exports.skill[2] = 2;
                exports.skill[7] = 2;
                exports.skill[0] = 1;
                exports.skill[1] = 1;
                //Skills kämpferS = new Skills(skill);
                break;
            case 3:
                exports.childhood = "Kind des Waldes";
                exports.childAttributes = [3, 4, 4, 4];
                exports.skill[10] = 3;
                exports.skill[9] = 2;
                exports.skill[8] = 1;
                //Skills kindDesWaldesS = new Skills(skill);
                break;
            case 4:
                exports.childhood = "Harte Lehrjahre";
                exports.childAttributes = [3, 3, 5, 4];
                exports.skill[9] = 3;
                exports.skill[3] = 1;
                exports.skill[11] = 1;
                exports.skill[12] = 1;
                //Skills harteLehrjahreS = new Skills(skill);
                break;
            case 5:
                exports.childhood = "Wanderer";
                exports.childAttributes = [4, 4, 3, 4];
                exports.skill[10] = 2;
                exports.skill[1] = 1;
                exports.skill[2] = 1;
                exports.skill[8] = 1;
                exports.skill[15] = 1;
                //Skills wandererS = new Skills(skill);
                break;
            case 6:
                exports.childhood = "Druidenlehrling";
                exports.childAttributes = [3, 4, 5, 3];
                exports.skill[10] = 2;
                exports.skill[8] = 1;
                exports.skill[9] = 1;
                exports.skill[14] = 1;
                exports.skill[15] = 1;
                //Skills druidenlehrlingS = new Skills(skill);
                break;
        }
    }
    else {
        console.log("Fehler!!!");
    }
}
