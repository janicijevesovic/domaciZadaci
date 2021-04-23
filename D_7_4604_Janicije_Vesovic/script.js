// Zadatak 1
let v = 50; // Broj kvadratnih metara
let n = 16; // Broj gostiju
if (n * 3 > v) {
    let visakLjudi = Math.ceil(n - v / 3);
    document.body.innerHTML = `<p style="color: red;">Ne</p>`;
    document.body.innerHTML += `<p style="color: red;">Broj ljudi koji mora da napusti lokal je ${visakLjudi}.</p>`;
}
else {
    document.body.innerHTML = `<p style="color: green;">Da</p>`;
}

// Zadatak 2
let datum = new Date();
let trenutnaGodina = datum.getFullYear();
let godinaRodjenja = 1995;
if (trenutnaGodina - godinaRodjenja < 18) {
    document.body.innerHTML += `<p style="color: blue;">Osoba je maloletna.</p>`;
}
else {
    document.body.innerHTML += `<p style="color: blue;">Osoba je punoletna.</p>`;
}
