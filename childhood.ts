import {d6Roller} from "./diceRoller"
import {generateRace, raceInt} from "./race";


export let skill:number[] = []
export let childhood:String
export let childAttributes:number[] = []

export function generateChildhood() {
    setDefaultSkills()
    //generateRace()
    generateChildhoodSkills(raceInt)
}

function setDefaultSkills() {
    skill = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
}

function generateChildhoodSkills(raceNumber) {
    const r = d6Roller();

    if (raceNumber === 0) {
        switch (r) {
            case 1:
                childhood = "Weise";
                childAttributes = [3, 5, 3, 4];
                skill[1] = 1;
                skill[2] = 1;
                skill[8] = 1;
                skill[5] = 1;
                skill[10] = 1;
                skill[11] = 1;
                //Skills waiseS = new Skills(skill);
                break;
            case 2:
                childhood = "Hirte";
                childAttributes = [4, 4, 3, 4];
                skill[8] = 2;
                skill[15] = 2;
                skill[0] = 1;
                skill[3] = 1;
                //Skills hirteS = new Skills(skill);
                break;
            case 3:
                childhood = "Herumtreiber";
                childAttributes = [4, 4, 4, 3];
                skill[10] = 2;
                skill[1] = 1;
                skill[2] = 1;
                skill[8] = 1;
                skill[11] = 1;
                //Skills herumtreiberS = new Skills(skill);
                break;
            case 4:
                childhood = "Knappe";
                childAttributes = [4, 4, 3, 4];
                skill[2] = 2;
                skill[1] = 1;
                skill[7] = 1;
                skill[6] = 1;
                skill[14] = 1;
                //Skills knappeS = new Skills(skill);
                break;
            case 5:
                childhood = "Arbeiter";
                childAttributes = [5, 3, 3, 4];
                skill[0] = 2;
                skill[2] = 1;
                skill[3] = 1;
                skill[10] = 1;
                skill[15] = 1;
                //Skills arbeiterS = new Skills(skill);
                break;
            case 6:
                childhood = "Harte Lehrjahre";
                childAttributes = [3, 3, 5, 4];
                skill[9] = 3;
                skill[3] = 1;
                skill[11] = 1;
                skill[12] = 1;
                //Skills harteLehrjahreS = new Skills(skill);
                break;
        }
    } else if (raceNumber === 1) {
        switch (r) {
            case 1:
                childhood = "Im Sattel geboren";
                childAttributes = [4, 5, 3, 3];
                skill[6] = 2;
                skill[10] = 2;
                skill[15] = 2;
                //Skills imSattelGeborenS = new Skills(skill);
                break;
            case 2:
                childhood = "Träumer";
                childAttributes = [3, 3, 4, 5];
                skill[9] = 2;
                skill[13] = 2;
                skill[12] = 1;
                skill[15] = 1;
                //Skills träumerS = new Skills(skill);
                break;
            case 3:
                childhood = "Die stärkste des Clan";
                childAttributes = [5, 3, 3, 4];
                skill[0] = 2;
                skill[2] = 2;
                skill[1] = 1;
                skill[15] = 1;
                //Skills dieStärksteDesClanS = new Skills(skill);
                break;
            case 4:
                childhood = "Schüler einer weisen Frau";
                childAttributes = [3, 3, 5, 4];
                skill[9] = 2;
                skill[11] = 1;
                skill[14] = 2;
                skill[15] = 1;
                //Skills schülerEinerWeisenFraS = new Skills(skill);
                break;
            case 5:
                childhood = "Jäger";
                childAttributes = [3, 4, 4, 4];
                skill[7] = 2;
                skill[8] = 2;
                skill[10] = 1;
                skill[15] = 1;
                //Skills jägerS = new Skills(skill);
                break;
            case 6:
                childhood = "Kind der Winde";
                childAttributes = [4, 4, 3, 4];
                skill[10] = 2;
                skill[2] = 1;
                skill[7] = 1;
                skill[1] = 1;
                skill[15] = 1;
                //Skills kindDerWindeS = new Skills(skill);
                break;
        }
    } else if (raceNumber === 2) {
        switch (r) {
            case 1:
                childhood = "Kind des Raben";
                childAttributes = [3, 4, 4, 4];
                skill[9] = 2;
                skill[3] = 1;
                skill[6] = 1;
                skill[8] = 1;
                skill[11] = 1;
                //Skills kindDerRabenS = new Skills(skill);
                break;
            case 2:
                childhood = "Druidenlehrling";
                childAttributes = [3, 4, 5, 3];
                skill[10] = 2;
                skill[8] = 1;
                skill[9] = 1;
                skill[14] = 1;
                skill[15] = 1;
                //Skills druidenlehrlingS = new Skills(skill);
                break;
            case 3:
                childhood = "Beschützer";
                childAttributes = [5, 4, 3, 3];
                skill[2] = 2;
                skill[7] = 2;
                skill[6] = 1;
                skill[0] = 1;
                //Skills beschützerS = new Skills(skill);
                break;
            case 4:
                childhood = "Wanderer";
                childAttributes = [4, 4, 3, 4];
                skill[10] = 2;
                skill[1] = 1;
                skill[2] = 1;
                skill[8] = 1;
                skill[15] = 1;
                //Skills wandererS = new Skills(skill);
                break;
            case 5:
                childhood = "Arbeiter";
                childAttributes = [5, 3, 3, 4];
                skill[0] = 2;
                skill[2] = 1;
                skill[3] = 1;
                skill[10] = 1;
                skill[15] = 1;
                //Skills arbeiterS = new Skills(skill);
                break;
            case 6:
                childhood = "Hirte";
                childAttributes = [4, 4, 3, 4];
                skill[8] = 2;
                skill[15] = 2;
                skill[0] = 1;
                skill[3] = 1;
                //Skills hirteS = new Skills(skill);
                break;
        }

    } else if (raceNumber === 3) {
        switch (r) {
            case 1:
                childhood = "Auf der Flucht";
                childAttributes = [4, 5, 3, 3];
                skill[4] = 2;
                skill[8] = 2;
                skill[11] = 1;
                skill[2] = 1;
                //Skills aufDerFluchtS = new Skills(skill);
                break;
            case 2:
                childhood = "Künstler";
                childAttributes = [3, 3, 4, 5];
                skill[3] = 2;
                skill[13] = 2;
                skill[6] = 1;
                skill[9] = 1;
                //Skills künstlerS = new Skills(skill);
                break;
            case 3:
                childhood = "Schüler";
                childAttributes = [3, 4, 5, 3];
                skill[9] = 3;
                skill[3] = 1;
                skill[11] = 1;
                skill[14] = 1;
                //Skills schülerS = new Skills(skill);
                break;
            case 4:
                childhood = "Akrobat";
                childAttributes = [3, 5, 3, 4];
                skill[6] = 2;
                skill[5] = 2;
                skill[13] = 1;
                skill[4] = 1;
                //Skills akrobatS = new Skills(skill);
                break;
            case 5:
                childhood = "Kämpfer";
                childAttributes = [4, 5, 3, 3];
                skill[2] = 2;
                skill[7] = 2;
                skill[0] = 1;
                skill[1] = 1;
                //Skills kämpferS = new Skills(skill);
                break;
            case 6:
                childhood = "Geisterkind";
                childAttributes = [3, 4, 4, 4];
                skill[4] = 2;
                skill[5] = 2;
                skill[11] = 1;
                skill[2] = 1;
                //Skills geisterkindS = new Skills(skill);
                break;
        }

    } else if (raceNumber === 4) {
        switch (r) {
            case 1:
                childhood = "Bäckerlehrling";
                childAttributes = [4, 4, 3, 4];
                skill[3] = 2;
                skill[5] = 1;
                skill[9] = 1;
                skill[10] = 1;
                skill[13] = 1;
                //Skills bäckerlehrlingS = new Skills(skill);
                break;
            case 2:
                childhood = "Arbeiter";
                childAttributes = [4, 4, 3, 4];
                skill[0] = 2;
                skill[2] = 1;
                skill[3] = 1;
                skill[10] = 1;
                skill[15] = 1;
                //Skills arbeiterS = new Skills(skill);
                break;
            case 3:
                childhood = "Handwerker";
                childAttributes = [3, 4, 4, 4];
                skill[3] = 3;
                skill[9] = 1;
                skill[11] = 1;
                skill[2] = 1;
                //Skills handwerkerS = new Skills(skill);
                break;
            case 4:
                childhood = "Küchenkind";
                childAttributes = [4, 4, 3, 4];
                skill[3] = 2;
                skill[5] = 1;
                skill[9] = 1;
                skill[10] = 1;
                skill[15] = 1;
                //Skills küchenkindS = new Skills(skill);
                break;
            case 5:
                childhood = "Bücherwurm";
                childAttributes = [3, 3, 5, 4];
                skill[9] = 3;
                skill[11] = 1;
                skill[12] = 1;
                skill[14] = 1;
                //Skills bücherwurmS = new Skills(skill);
                break;
            case 6:
                childhood = "Einzelgänger";
                childAttributes = [4, 4, 4, 3];
                skill[4] = 2;
                skill[5] = 1;
                skill[8] = 1;
                skill[12] = 1;
                skill[2] = 1;
                //Skills einzelgängerS = new Skills(skill);
                break;
        }
    } else if (raceNumber === 5) {
        switch (r) {
            case 1:
                childhood = "Wolfling";
                childAttributes = [4, 5, 3, 3];
                skill[15] = 2;
                skill[1] = 1;
                skill[2] = 1;
                skill[4] = 1;
                skill[6] = 1;
                //Skills wolflingS = new Skills(skill);
                break;
            case 2:
                childhood = "Langfinger";
                childAttributes = [3, 5, 3, 4];
                skill[4] = 2;
                skill[8] = 2;
                skill[11] = 1;
                skill[12] = 1;
                //Skills langfingerS = new Skills(skill);
                break;
            case 3:
                childhood = "Kind der Wälder";
                childAttributes = [4, 4, 4, 3];
                skill[10] = 2;
                skill[1] = 1;
                skill[6] = 1;
                skill[7] = 1;
                skill[8] = 1;
                //Skills kindDerWälderS = new Skills(skill);
                break;
            case 4:
                childhood = "Wildling";
                childAttributes = [4, 4, 3, 4];
                skill[2] = 2;
                skill[6] = 2;
                skill[10] = 1;
                skill[0] = 1;
                //Skills wildlingS = new Skills(skill);
                break;
            case 5:
                childhood = "Wanderer";
                childAttributes = [4, 4, 4, 3];
                skill[10] = 2;
                skill[1] = 1;
                skill[2] = 1;
                skill[8] = 1;
                skill[15] = 1;
                //Skills wandererS = new Skills(skill);
                break;
            case 6:
                childhood = "Geschichtenerzähler";
                childAttributes = [3, 4, 3, 5];
                skill[13] = 3;
                skill[12] = 2;
                skill[9] = 1;
                //Skills geschichtenerzählerS = new Skills(skill);
                break;
        }
    } else if (raceNumber === 6) {
        switch (r) {
            case 1:
                childhood = "Barde";
                childAttributes = [3, 3, 4, 5];
                skill[13] = 3;
                skill[9] = 1;
                skill[11] = 1;
                skill[12] = 1;
                //Skills bardeS = new Skills(skill);
                break;
            case 2:
                childhood = "Arbeiter";
                childAttributes = [5, 4, 3, 3];
                skill[0] = 2;
                skill[1] = 2;
                skill[3] = 2;
                //Skills arbeiterS = new Skills(skill);
                break;
            case 3:
                childhood = "Räuber";
                childAttributes = [4, 4, 4, 3];
                skill[2] = 2;
                skill[4] = 1;
                skill[5] = 1;
                skill[8] = 1;
                skill[10] = 1;
                //Skills räuberS = new Skills(skill);
                break;
            case 4:
                childhood = "Streuner";
                childAttributes = [4, 4, 3, 4];
                skill[10] = 2;
                skill[1] = 1;
                skill[2] = 1;
                skill[8] = 1;
                skill[15] = 1;
                //Skills streunerS = new Skills(skill);
                break;
            case 5:
                childhood = "Krieger";
                childAttributes = [5, 4, 3, 3];
                skill[2] = 2;
                skill[7] = 2;
                skill[6] = 1;
                skill[0] = 1;
                //Skills kriegerS = new Skills(skill);
                break;
            case 6:
                childhood = "Einzelgänger";
                childAttributes = [4, 3, 5, 3];
                skill[11] = 2;
                skill[10] = 2;
                skill[2] = 1;
                skill[8] = 1;
                //Skills einzelgängerS = new Skills(skill);
                break;
        }
    } else if (raceNumber === 7) {
        switch (r) {
            case 1:
                childhood = "Heuler";
                childAttributes = [3, 4, 4, 4];
                skill[13] = 3;
                skill[9] = 1;
                skill[12] = 1;
                skill[10] = 1;
                //Skills heulerS = new Skills(skill);
                break;
            case 2:
                childhood = "Jäger";
                childAttributes = [4, 4, 4, 3];
                skill[8] = 2;
                skill[10] = 2;
                skill[1] = 1;
                skill[2] = 1;
                //Skills jägerS = new Skills(skill);
                break;
            case 3:
                childhood = "Ausgestossener";
                childAttributes = [4, 3, 5, 3];
                skill[11] = 2;
                skill[10] = 2;
                skill[2] = 1;
                skill[8] = 1;
                //Skills ausgestossenerS = new Skills(skill);
                break;
            case 4:
                childhood = "Fährtenleser";
                childAttributes = [3, 4, 5, 3];
                skill[8] = 3;
                skill[4] = 2;
                skill[10] = 1;
                //Skills fährtenleserS = new Skills(skill);
                break;
            case 5:
                childhood = "Kämpfer";
                childAttributes = [5, 4, 3, 3];
                skill[2] = 3;
                skill[0] = 2;
                skill[6] = 1;
                //Skills kämpferS = new Skills(skill);
                break;
            case 6:
                childhood = "Kind des Waldes";
                childAttributes = [3, 4, 4, 4];
                skill[10] = 3;
                skill[9] = 2;
                skill[8] = 1;
                //Skills kindDesWaldesS = new Skills(skill);
                break;
        }
    } else if (raceNumber === 8) {
        switch (r) {
            case 1:
                childhood = "Schmiedelehrling";
                childAttributes = [5, 3, 4, 3];
                skill[3] = 3;
                skill[0] = 1;
                skill[1] = 1;
                skill[2] = 1;
                //Skills schmiedelehrlingS = new Skills(skill);
                break;
            case 2:
                childhood = "Minenkind";
                childAttributes = [4, 4, 4, 3];
                skill[1] = 2;
                skill[10] = 2;
                skill[3] = 1;
                skill[8] = 1;
                //Skills minenkindS = new Skills(skill);
                break;
            case 3:
                childhood = "Kundschafterlehrling";
                childAttributes = [4, 4, 4, 3];
                skill[4] = 2;
                skill[8] = 2;
                skill[10] = 1;
                skill[2] = 1;
                //Skills kundschafterlehrlingS = new Skills(skill);
                break;
            case 4:
                childhood = "Wächter in Ausbildung";
                childAttributes = [5, 4, 3, 3];
                skill[0] = 2;
                skill[2] = 2;
                skill[7] = 1;
                skill[1] = 1;
                //Skills wächterInAusbildungS = new Skills(skill);
                break;
            case 5:
                childhood = "Steinmetz";
                childAttributes = [4, 3, 5, 3];
                skill[3] = 2;
                skill[9] = 2;
                skill[10] = 1;
                skill[0] = 1;
                //Skills steinmetzS = new Skills(skill);
                break;
            case 6:
                childhood = "Harte Lehrjahre";
                childAttributes = [3, 3, 5, 4];
                skill[9] = 3;
                skill[3] = 1;
                skill[11] = 1;
                skill[12] = 1;
                //Skills harteLehrjahreS = new Skills(skill);
                break;
        }
    } else if (raceNumber === 9) {
        switch (r) {
            case 1:
                childhood = "Einzelgänger";
                childAttributes = [4, 3, 5, 3];
                skill[11] = 2;
                skill[10] = 2;
                skill[2] = 1;
                skill[8] = 1;
                //Skills einzelgängerS = new Skills(skill);
                break;
            case 2:
                childhood = "Kämpfer";
                childAttributes = [4, 5, 3, 3];
                skill[2] = 2;
                skill[7] = 2;
                skill[0] = 1;
                skill[1] = 1;
                //Skills kämpferS = new Skills(skill);
                break;
            case 3:
                childhood = "Kind des Waldes";
                childAttributes = [3, 4, 4, 4];
                skill[10] = 3;
                skill[9] = 2;
                skill[8] = 1;
                //Skills kindDesWaldesS = new Skills(skill);
                break;
            case 4:
                childhood = "Harte Lehrjahre";
                childAttributes = [3, 3, 5, 4];
                skill[9] = 3;
                skill[3] = 1;
                skill[11] = 1;
                skill[12] = 1;
                //Skills harteLehrjahreS = new Skills(skill);
                break;
            case 5:
                childhood = "Wanderer";
                childAttributes = [4, 4, 3, 4];
                skill[10] = 2;
                skill[1] = 1;
                skill[2] = 1;
                skill[8] = 1;
                skill[15] = 1;
                //Skills wandererS = new Skills(skill);
                break;
            case 6:
                childhood = "Druidenlehrling";
                childAttributes = [3, 4, 5, 3];
                skill[10] = 2;
                skill[8] = 1;
                skill[9] = 1;
                skill[14] = 1;
                skill[15] = 1;
                //Skills druidenlehrlingS = new Skills(skill);
                break;
        }
    } else {
        console.log("Fehler!!!");
    }
}