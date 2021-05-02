let neparanRed = true;
for (i = 1; i <= 64; i++) {
    if (neparanRed) { // Provera da li je red neparan kako bi se izvrsio upis elemenata, tako da parni budu obojeni u crno a neparni u belo
        if (i % 2 == 0) {
            document.body.innerHTML += `<span class="crno">${i}</span>`;
        }
        else {
            document.body.innerHTML += `<span>${i}</span>`;
        }
        if (i % 8 == 0) { // Kada brojac dodje do poslednjeg (osmog) clana, prelazi se u nov red, a takodje se i menja osobina samog reda - postaje paran
            document.body.innerHTML += `<br><br>`;
            neparanRed = false;
        }
    }
    else { // Ispis elemenata u parnom redu koji je suprotan neparnom
        if (i % 2 == 0) {
            document.body.innerHTML += `<span>${i}</span>`;
        }
        else {
            document.body.innerHTML += `<span class="crno">${i}</span>`;
        }
        if (i % 8 == 0) { // Prelazak u novi red, kao i promena osobine samog reda (iz parnog u neparan)
            document.body.innerHTML += `<br><br>`;
            neparanRed = true;
        }
    }
}
