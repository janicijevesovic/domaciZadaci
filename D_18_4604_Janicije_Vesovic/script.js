let divStanje = document.querySelector("#stanje");
let formStanje = document.querySelector("#stanje form");
let inputDeoNaziva = document.querySelector("#deoNaziva");
let inputMinCena = document.querySelector("#minCena");
let inputMaxCena = document.querySelector("#maxCena");
let divTabela = document.querySelector("#tabela");


let proveriStanjePromise = resource => {
    return new Promise((resolve, reject) => {
        let request = new XMLHttpRequest();
        request.addEventListener('readystatechange', function () {
            if (this.readyState == 4 && this.status == 200) {
                let data = JSON.parse(this.responseText);
                resolve(data);
            }
            else if (this.readyState == 4) {
                reject("Could not fetch data!");
            }
        });
        request.open('GET', resource);
        request.send();
    });
}

let proveriStanje = e => {
    e.preventDefault();
    let deoNaziva = inputDeoNaziva.value.toLowerCase();
    let minCena = inputMinCena.value;
    let maxCena = inputMaxCena.value;
    let itemsInStock = [];
    let itemsStock = [];
    // let listaArtikala = document.createElement('ul');
    let tabelaArtikala = document.createElement('table');
    let prviRed = document.createElement('tr');

    let prvaKolona = document.createElement('th');
    prvaKolona.textContent = "Naziv artikla";
    prviRed.appendChild(prvaKolona);

    let drugaKolona = document.createElement('th');
    drugaKolona.textContent = "Stanje u magacinu";
    prviRed.appendChild(drugaKolona);

    let trecaKolona = document.createElement('th');
    trecaKolona.textContent = "Cena";
    prviRed.appendChild(trecaKolona);

    tabelaArtikala.appendChild(prviRed);

    proveriStanjePromise("./JSON/stock.json").then(data => {
        data.forEach(item => {
            if (item.stock != 0) {
                itemsInStock.push(item.id);
                itemsStock.push(item.stock);
            }
        });
        console.log(itemsInStock);
        console.log(itemsStock);
        return proveriStanjePromise("./JSON/prices.json");
        }).then(data => {
            data.forEach(item => {
                if (itemsInStock.includes(item.id) && item.item.toLowerCase().includes(deoNaziva) && minCena < item.price && maxCena > item.price) {
                    // let noviArtikal = document.createElement('li');
                    // noviArtikal.textContent = item.item;
                    // listaArtikala.appendChild(noviArtikal);
                    let noviRed = document.createElement('tr');

                    let prvaKolona = document.createElement('td');
                    prvaKolona.textContent = item.item;
                    noviRed.appendChild(prvaKolona);

                    let drugaKolona = document.createElement('td');
                    let indeks = itemsInStock.indexOf(item.id);
                    drugaKolona.textContent = itemsStock[indeks];
                    noviRed.appendChild(drugaKolona);

                    let trecaKolona = document.createElement('td');
                    trecaKolona.textContent = item.price.toFixed(2);
                    noviRed.appendChild(trecaKolona);

                    tabelaArtikala.appendChild(noviRed);
                }
            });
            // divLista.appendChild(listaArtikala);
            divTabela.appendChild(tabelaArtikala);
        }).catch(error => {
            console.log(error);
        });
    }

formStanje.addEventListener('submit', proveriStanje);
