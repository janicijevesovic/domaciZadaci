// Zadatak 3.

// A Odrediti zbir cifara unetog celog broja i dobijeni zbir ispisati na ekranu.
let ceoBroj = 1005;
let zbirCifara = 0;

while (ceoBroj > 0) {
    zbirCifara += ceoBroj % 10;
    ceoBroj = Math.floor(ceoBroj / 10);
}
console.log(`Zbir cifara je ${zbirCifara}.`);


// B Odrediti proizvod brojeva od n do m koji su deljivi sa 7 a nisu sa 3, a potom od njega oduzeti zbir brojeva od n do m koji su deljivi sa 3 a nisu sa 7

// a) while petlja

let proizvod = 1;
let zbir = 0;
let n = 6;
let m = 12;
let i = n;

while (i <= m) {
    if (i % 7 == 0 && i % 3 != 0) {
        proizvod *= i;
    }
    else if (i % 3 == 0 && i % 7 != 0) {
        zbir += i;
    }
    i++;
}
console.log(`Resenje koje se dobija koriscenjem while petlje je ${proizvod - zbir}.`);

// b) for petlja

proizvod = 1;
zbir = 0;

for (i = n; i <= m; i++) {
    if (i % 7 == 0 && i % 3 != 0) {
        proizvod *= i;
    }
    else if (i % 3 == 0 && i % 7 != 0) {
        zbir += i;
    }
}
console.log(`Resenje koje se dobija koriscenjem for petlje je ${proizvod - zbir}.`);

// C Odrediti sumu kubova neparnih brojeva od n do m

// a) while petlja

let sumaKubovaNeparnih = 0;
i = n;
while (i <= m) {
    if (i % 2 == 1) {
        sumaKubovaNeparnih += i ** 3;
    }
    i++;
}
console.log(`Suma kubova neparnih brojeva od ${n} do ${m}, uz pomoc while petlje je ${sumaKubovaNeparnih}.`);

// b) for petlja

sumaKubovaNeparnih = 0;
for (i = n; i <= m; i++) {
    if (i % 2 == 1) {
        sumaKubovaNeparnih += i ** 3;
    }
}
console.log(`Suma kubova neparnih brojeva od ${n} do ${m}, uz pomoc for petlje je ${sumaKubovaNeparnih}.`);
