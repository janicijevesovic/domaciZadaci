// Zadatak 1.
let datum = new Date();
let danasnjiDan = datum.getDay();

if (danasnjiDan == 6) {
    if (datum.getHours() < 10) {
        console.log("Butik ne radi.");
    }
    else if (datum.getHours() >= 18) {
        console.log("Butik ne radi.");
    }
    else {
        console.log("Butik radi.");
    }
}
else if (danasnjiDan == 0) {
    if (datum.getHours() < 10) {
        console.log("Butik ne radi.");
    }
    else if (datum.getHours() >= 18) {
        console.log("Butik ne radi.");
    }
    else {
        console.log("Butik radi.");
    }
}
else {
    if (datum.getHours() < 9) {
        console.log("Butik ne radi.");
    }
    else if (datum.getHours() >= 20) {
        console.log("Butik ne radi.");
    }
    else {
        console.log("Butik radi.");
    }
}

// Zadatak 2.
let ukupanBrojStanovnika = 20000;
let ukupanBrojTestiranih = 11000;
let ukupanBrojPozitivnih = 1500;

if (ukupanBrojPozitivnih * 100 / ukupanBrojTestiranih > 30) {
    if (ukupanBrojPozitivnih > ukupanBrojStanovnika / 10) {
        document.body.innerHTML = `<p style="color: red;">VANREDNO STANJE!</p>`;
    }
}
