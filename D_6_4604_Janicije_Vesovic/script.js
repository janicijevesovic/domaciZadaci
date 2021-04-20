// 1. Zadatak

let tempFarenhajt = -279.67;
let tempCelzijus = (tempFarenhajt - 32) * 5 / 9;
let tempKelvin = tempCelzijus + 273.15;
console.log(tempFarenhajt + " stepeni Farenhajta, jednako je " + tempKelvin.toFixed(2) + " stepeni Kelvina.");

let kelvinTemp = 100;
let celzijusTemp = kelvinTemp - 273.15;
let farenhajtTemp = celzijusTemp * 9 / 5 + 32;
console.log(kelvinTemp + " stepeni Kelvina, jednako je " + farenhajtTemp.toFixed(2) + " stepeni Farenhajta");

//  2. Zadatak

let n = 20;
let a = 6;
let ostalaPoglavlja = n - 2 * (a + 1);
console.log("Broj ostalih poglavlja je: ", ostalaPoglavlja);

// 3. Zadatak

let p = 1750;
let m = 1900;
let k = 950;
let cenaDzempera = (p + m - k) / 2;
console.log("Mikin kusur iznosi: ", m - cenaDzempera);
console.log("Perin kusur iznosi: ", p - cenaDzempera);