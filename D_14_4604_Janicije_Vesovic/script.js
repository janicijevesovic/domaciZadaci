let dan1 = {
    datum: "2021/05/24",
    kisa: true,
    sunce: true,
    oblacno: true,
    temperature: [13, 12, 17, 22, 29, 30, 24]
};

let dan2 = {
    datum: "2021/05/25",
    kisa: true,
    sunce: true,
    oblacno: false,
    temperature: [3, 6, 11, 12, 3]
};

let dan3 = {
    datum: "2021/05/26",
    kisa: true,
    sunce: false,
    oblacno: false,
    temperature: [16, 13, 23, 25, 21, 18]
};

let dan4 = {
    datum: "2021/05/27",
    kisa: false,
    sunce: false,
    oblacno: true,
    temperature: [8, 11, 6, 5, 4, -2, 3]
};

let dan5 = {
    datum: "2021/05/28",
    kisa: true,
    sunce: false,
    oblacno: true,
    temperature: [16, 17, 22, 26, 23, 17]
};

let nizDana = [dan1, dan2, dan3, dan4, dan5];

// Funkcija koja u konzoli ispisuje datum u kome je najvise puta izmerena temperatura (poslednji od njih)
let najviseMerenjaTemperature = nizDana => {
    let maxMerenja = nizDana[0].temperature.length;
    let datumZaIspis = nizDana[0].datum;
    nizDana.forEach(dan => {
        if (dan.temperature.length >= maxMerenja) {
            maxMerenja = dan.temperature.length;
            datumZaIspis = dan.datum;
        }
    });
    console.log(`Datum u kome je najvise puta izmerena temperatura je ${datumZaIspis}.`);
}
najviseMerenjaTemperature(nizDana);

// Funkcija koja prebrojava i u konzoli ispisuje koliko je bilo kisnih dana, koliko je bilo sunčanih dana i koliko je bilo oblačnih dana
let osobineDana = nizDana => {
    let brojKisnih = 0;
    let brojSuncanih = 0;
    let brojOblacnih = 0;
    nizDana.forEach(dan => {
        if (dan.kisa == true) {
            brojKisnih += 1;
        }
        if (dan.sunce == true) {
            brojSuncanih += 1;
        }
        if (dan.oblacno == true) {
            brojOblacnih += 1;
        }
    });
    console.log(`Broj kisnih dana iznosi ${brojKisnih}.`);
    console.log(`Broj suncanih dana iznosi ${brojSuncanih}.`);
    console.log(`Broj oblacnih dana iznosi ${brojOblacnih}.`);
}
osobineDana(nizDana);

// Funkcija koja racuna i vraca koliko je bilo dana sa natprosecnom temperaturom.

let prosecnaTemperatura = nizDana => { // Pomocna funkcija za izracunavanje prosecne temperature
    let sumaTemperatura = 0;
    let brojMerenja = 0;
    nizDana.forEach(dan => {
        dan.temperature.forEach(temp => {
            sumaTemperatura += temp;
            brojMerenja += 1;
        });
    });
    return sumaTemperatura / brojMerenja;
}

let daniNatprosecneTemperature = nizDana => {
    let prosTemp = prosecnaTemperatura(nizDana);
    let brojDana = 0;
    nizDana.forEach(dan => {
        for (let i = 0; i < dan.temperature.length; i++) {
            if (dan.temperature[i] > prosTemp) {
                brojDana += 1;
                break;
            }
        }
    });
    return brojDana;
}
console.log(daniNatprosecneTemperature(nizDana));
