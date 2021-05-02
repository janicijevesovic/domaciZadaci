// Zadatak 1.

// Unos pocetnih vrednosti
let pocSatLek1 = 14;
let pocMinLek1 = 30;
let krajSatLek1 = 20;
let krajMinLek1 = 45;

let pocSatLek2 = 8;
let pocMinLek2 = 30;
let krajSatLek2 = 16;
let krajMinLek2 = 12;

// Ispis pocetnih vrednosti u HTML dokumentu
document.body.innerHTML += `<p class="lekar1">Pocetak radnog vremena prvog lekara je ${pocSatLek1}h : ${pocMinLek1}min.</p>`;
document.body.innerHTML += `<p class="lekar1">Kraj radnog vremena prvog lekara je ${krajSatLek1}h : ${krajMinLek1}min.</p>`;
document.body.innerHTML += `<hr>`;
document.body.innerHTML += `<p class="lekar2">Pocetak radnog vremena drugog lekara je ${pocSatLek2}h : ${pocMinLek2}min.</p>`;
document.body.innerHTML += `<p class="lekar2">Kraj radnog vremena drugog lekara je ${krajSatLek2}h : ${krajMinLek2}min.</p>`;

// Pretvaranje unetih vrednosti u minute radi lakseg preracunavanja
let pocetakLek1 = pocSatLek1 * 60 + pocMinLek1;
let krajLek1 = krajSatLek1 * 60 + krajMinLek1;

let pocetakLek2 = pocSatLek2 * 60 + pocMinLek2;
let krajLek2 = krajSatLek2 * 60 + krajMinLek2;


// Ispitivanje preklapanja radnog vremena
if (krajLek1 <= pocetakLek2) {
    document.body.innerHTML += `<p class="radnoVreme">Nema preklapanja radnog vremena.</p>`;
}
else if (krajLek2 <= pocetakLek1) {
    document.body.innerHTML += `<p class="radnoVreme">Nema preklapanja radnog vremena.</p>`;
}
else {
    if (krajLek2 >= krajLek1 && pocetakLek2 >= pocetakLek1) {
        document.body.innerHTML += `<p class="radnoVreme">Radili su zajedno ${Math.floor((krajLek1 - pocetakLek2) / 60)}h i ${(krajLek1 - pocetakLek2) % 60}min.</p>`;
    }
    else if (krajLek2 >= krajLek1 && pocetakLek2 <= pocetakLek1) {
        document.body.innerHTML += `<p class="radnoVreme">Radili su zajedno ${Math.floor((krajLek1 - pocetakLek1) / 60)}h i ${(krajLek1 - pocetakLek1) % 60}min.</p>`;
    }
    else if (krajLek1 >= krajLek2 && pocetakLek2 >= pocetakLek1) {
        document.body.innerHTML += `<p class="radnoVreme">Radili su zajedno ${Math.floor((krajLek2 - pocetakLek2) / 60)}h i ${(krajLek2 - pocetakLek2) % 60}min.</p>`;
    }
    else {
        document.body.innerHTML += `<p class="radnoVreme">Radili su zajedno ${Math.floor((krajLek2 - pocetakLek1) / 60)}h i ${(krajLek2 - pocetakLek1) % 60}min.</p>`;
    }
}
document.body.innerHTML += `<hr>`;