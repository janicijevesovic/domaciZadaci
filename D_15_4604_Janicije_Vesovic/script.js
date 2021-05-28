let knjiga1 = {
    naziv: "1984",
    autor: "Dzordz Orvel",
    putanja: "1984.jpg",
    procitano: false
};

let knjiga2 = {
    naziv: "Plodovi gneva",
    autor: "Dzon Stajnbek",
    putanja: "PlodoviGneva.jpg",
    procitano: true
};

let knjiga3 = {
    naziv: "Farenhajt 451",
    autor: "Rej Bredberi",
    putanja: "Farenhajt451.jpg",
    procitano: true
};

let knjiga4 = {
    naziv: "Starac i more",
    autor: "Ernest Hemingvej",
    putanja: "StaracMore.jpeg",
    procitano: false
};

let nizKnjiga = [knjiga1, knjiga2, knjiga3, knjiga4]; // Formiranje niza objekata

let novaTabela = document.createElement('table');
document.body.appendChild(novaTabela); // Dodavanje tabele u body

nizKnjiga.forEach((knjiga, indeks) => {
    // Kreiranje novog reda sa dve kolone, za svaku knjigu
    let noviRed = document.createElement('tr');
    let prvaKolona = document.createElement('td');
    let drugaKolona = document.createElement('td');

    // Dodavanje prve kolone u red
    let slicicaKnjige = document.createElement('img');
    slicicaKnjige.src = knjiga.putanja;
    slicicaKnjige.width = 200;
    prvaKolona.appendChild(slicicaKnjige);
    noviRed.appendChild(prvaKolona);

    // Dodavanje druge kolone u red
    let paragrafKnjige = document.createElement('p');
    paragrafKnjige.textContent = `${knjiga.naziv} - ${knjiga.autor}`;
    if (knjiga.procitano == true) {
        paragrafKnjige.style.color = "blue";
    }
    else {
        paragrafKnjige.style.color = "gray";
    }
    drugaKolona.appendChild(paragrafKnjige);
    noviRed.appendChild(drugaKolona);

    // Dodavanje formiranog reda u tabelu
    if (indeks % 2 == 0) {
        noviRed.style.backgroundColor = "lightgreen";
    }
    else {
        noviRed.style.backgroundColor = "burlywood";
    }
    novaTabela.appendChild(noviRed);
});
