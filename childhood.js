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
                exports.childhood = "Tr??umer";
                exports.childAttributes = [3, 3, 4, 5];
                exports.skill[9] = 2;
                exports.skill[13] = 2;
                exports.skill[12] = 1;
                exports.skill[15] = 1;
                //Skills tr??umerS = new Skills(skill);
                break;
            case 3:
                exports.childhood = "Die st??rkste des Clan";
                exports.childAttributes = [5, 3, 3, 4];
                exports.skill[0] = 2;
                exports.skill[2] = 2;
                exports.skill[1] = 1;
                exports.skill[15] = 1;
                //Skills dieSt??rksteDesClanS = new Skills(skill);
                break;
            case 4:
                exports.childhood = "Sch??ler einer weisen Frau";
                exports.childAttributes = [3, 3, 5, 4];
                exports.skill[9] = 2;
                exports.skill[11] = 1;
                exports.skill[14] = 2;
                exports.skill[15] = 1;
                //Skills sch??lerEinerWeisenFraS = new Skills(skill);
                break;
            case 5:
                exports.childhood = "J??ger";
                exports.childAttributes = [3, 4, 4, 4];
                exports.skill[7] = 2;
                exports.skill[8] = 2;
                exports.skill[10] = 1;
                exports.skill[15] = 1;
                //Skills j??gerS = new Skills(skill);
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
                exports.childhood = "Besch??tzer";
                exports.childAttributes = [5, 4, 3, 3];
                exports.skill[2] = 2;
                exports.skill[7] = 2;
                exports.skill[6] = 1;
                exports.skill[0] = 1;
                //Skills besch??tzerS = new Skills(skill);
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
                exports.childhood = "K??nstler";
                exports.childAttributes = [3, 3, 4, 5];
                exports.skill[3] = 2;
                exports.skill[13] = 2;
                exports.skill[6] = 1;
                exports.skill[9] = 1;
                //Skills k??nstlerS = new Skills(skill);
                break;
            case 3:
                exports.childhood = "Sch??ler";
                exports.childAttributes = [3, 4, 5, 3];
                exports.skill[9] = 3;
                exports.skill[3] = 1;
                exports.skill[11] = 1;
                exports.skill[14] = 1;
                //Skills sch??lerS = new Skills(skill);
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
                exports.childhood = "K??mpfer";
                exports.childAttributes = [4, 5, 3, 3];
                exports.skill[2] = 2;
                exports.skill[7] = 2;
                exports.skill[0] = 1;
                exports.skill[1] = 1;
                //Skills k??mpferS = new Skills(skill);
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
                exports.childhood = "B??ckerlehrling";
                exports.childAttributes = [4, 4, 3, 4];
                exports.skill[3] = 2;
                exports.skill[5] = 1;
                exports.skill[9] = 1;
                exports.skill[10] = 1;
                exports.skill[13] = 1;
                //Skills b??ckerlehrlingS = new Skills(skill);
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
                exports.childhood = "K??chenkind";
                exports.childAttributes = [4, 4, 3, 4];
                exports.skill[3] = 2;
                exports.skill[5] = 1;
                exports.skill[9] = 1;
                exports.skill[10] = 1;
                exports.skill[15] = 1;
                //Skills k??chenkindS = new Skills(skill);
                break;
            case 5:
                exports.childhood = "B??cherwurm";
                exports.childAttributes = [3, 3, 5, 4];
                exports.skill[9] = 3;
                exports.skill[11] = 1;
                exports.skill[12] = 1;
                exports.skill[14] = 1;
                //Skills b??cherwurmS = new Skills(skill);
                break;
            case 6:
                exports.childhood = "Einzelg??nger";
                exports.childAttributes = [4, 4, 4, 3];
                exports.skill[4] = 2;
                exports.skill[5] = 1;
                exports.skill[8] = 1;
                exports.skill[12] = 1;
                exports.skill[2] = 1;
                //Skills einzelg??ngerS = new Skills(skill);
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
                exports.childhood = "Kind der W??lder";
                exports.childAttributes = [4, 4, 4, 3];
                exports.skill[10] = 2;
                exports.skill[1] = 1;
                exports.skill[6] = 1;
                exports.skill[7] = 1;
                exports.skill[8] = 1;
                //Skills kindDerW??lderS = new Skills(skill);
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
                exports.childhood = "Geschichtenerz??hler";
                exports.childAttributes = [3, 4, 3, 5];
                exports.skill[13] = 3;
                exports.skill[12] = 2;
                exports.skill[9] = 1;
                //Skills geschichtenerz??hlerS = new Skills(skill);
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
                exports.childhood = "R??uber";
                exports.childAttributes = [4, 4, 4, 3];
                exports.skill[2] = 2;
                exports.skill[4] = 1;
                exports.skill[5] = 1;
                exports.skill[8] = 1;
                exports.skill[10] = 1;
                //Skills r??uberS = new Skills(skill);
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
                exports.childhood = "Einzelg??nger";
                exports.childAttributes = [4, 3, 5, 3];
                exports.skill[11] = 2;
                exports.skill[10] = 2;
                exports.skill[2] = 1;
                exports.skill[8] = 1;
                //Skills einzelg??ngerS = new Skills(skill);
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
                exports.childhood = "J??ger";
                exports.childAttributes = [4, 4, 4, 3];
                exports.skill[8] = 2;
                exports.skill[10] = 2;
                exports.skill[1] = 1;
                exports.skill[2] = 1;
                //Skills j??gerS = new Skills(skill);
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
                exports.childhood = "F??hrtenleser";
                exports.childAttributes = [3, 4, 5, 3];
                exports.skill[8] = 3;
                exports.skill[4] = 2;
                exports.skill[10] = 1;
                //Skills f??hrtenleserS = new Skills(skill);
                break;
            case 5:
                exports.childhood = "K??mpfer";
                exports.childAttributes = [5, 4, 3, 3];
                exports.skill[2] = 3;
                exports.skill[0] = 2;
                exports.skill[6] = 1;
                //Skills k??mpferS = new Skills(skill);
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
                exports.childhood = "W??chter in Ausbildung";
                exports.childAttributes = [5, 4, 3, 3];
                exports.skill[0] = 2;
                exports.skill[2] = 2;
                exports.skill[7] = 1;
                exports.skill[1] = 1;
                //Skills w??chterInAusbildungS = new Skills(skill);
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
                exports.childhood = "Einzelg??nger";
                exports.childAttributes = [4, 3, 5, 3];
                exports.skill[11] = 2;
                exports.skill[10] = 2;
                exports.skill[2] = 1;
                exports.skill[8] = 1;
                //Skills einzelg??ngerS = new Skills(skill);
                break;
            case 2:
                exports.childhood = "K??mpfer";
                exports.childAttributes = [4, 5, 3, 3];
                exports.skill[2] = 2;
                exports.skill[7] = 2;
                exports.skill[0] = 1;
                exports.skill[1] = 1;
                //Skills k??mpferS = new Skills(skill);
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
