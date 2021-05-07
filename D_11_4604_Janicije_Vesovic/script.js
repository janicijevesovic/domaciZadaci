// 1. Zadatak

function suma(n, m) {
    let sumaKubova = 0;
    for (let i = n; i <= m; i++) {
        sumaKubova += i ** 3;
    }
    return sumaKubova;
}

console.log(suma(-3, 5));

// 2. Zadatak

function godine(godRodjenja) {
    let datum = new Date();
    let trenutnaGodina = datum.getFullYear();
    return trenutnaGodina - godRodjenja;
}

console.log(godine(1995));

// 3. Zadatak

function deljiv(n, m, k) {
    let brojBrojeva = 0;
    for (let i = n; i <= m; i++) {
        if (i % k == 0) {
            brojBrojeva += 1;
        }
    }
    console.log(`Broj brojeva od ${n} do ${m} koji su deljivi brojem ${k} je ${brojBrojeva}.`);
}

deljiv(8, 15, 3);