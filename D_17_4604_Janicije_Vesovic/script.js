import { Pacijent } from "./pacijent.js";

let pacijent1 = new Pacijent("Pera", 180, 75);
let pacijent2 = new Pacijent("Mika", 183, 95);
let pacijent3 = new Pacijent("Laza", 185, 80);
let pacijent4 = new Pacijent("Fica", 175, 70);

let arrPacijenti = [pacijent1, pacijent2, pacijent3, pacijent4];

// Ispisati podatke o pacijentu sa najmanjom težinom.
let ispisiNajmanjaTezina = nizPacijenata => {
    let pacijentIspis = nizPacijenata[0];
    let najmanjaTezina = nizPacijenata[0].tezina;
    
    nizPacijenata.forEach(pacijent => {
        if (pacijent.tezina < najmanjaTezina) {
            najmanjaTezina = pacijent.tezina;
            pacijentIspis = pacijent;
        }
    });
    pacijentIspis.stampaj();
}

ispisiNajmanjaTezina(arrPacijenti);

// Ispisati podatke o pacijentu sa najvećom bmi vrednošću.
let ispisiNajveciBmi = nizPacijenata => {
    let pacijentIspis = nizPacijenata[0];
    let najveciBMI = nizPacijenata[0].bmi();

    nizPacijenata.forEach(pacijent => {
        if (pacijent.bmi() > najveciBMI) {
            najveciBMI = pacijent.bmi();
            pacijentIspis = pacijent;
        }
    });
    pacijentIspis.stampaj();
}

ispisiNajveciBmi(arrPacijenti);

// Ispisati sve pacijente čije ime sadrži slovo A.
let ispisiSaA = nizPacijenata => {
    let nizZaIspis = [];
    nizPacijenata.forEach(pacijent => {
        if (pacijent.ime.includes("a") || pacijent.ime.includes("A")) {
            nizZaIspis.push(pacijent.ime);
        }
    });
    return nizZaIspis;
}

console.log(ispisiSaA(arrPacijenti));

// Odredjivanje srednje visine
let srednjaVisina = nizPacijenata => {
    let ukupnaVisina = 0;
    nizPacijenata.forEach(pacijent => {
        ukupnaVisina += pacijent.visina;
    });
    return ukupnaVisina / nizPacijenata.length;
}

console.log(srednjaVisina(arrPacijenti));