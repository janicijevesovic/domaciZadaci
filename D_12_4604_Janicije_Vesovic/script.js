// Zadatak 1
let indeksMinElem = celobrojniNiz => {
    let minElem = celobrojniNiz[0];
    let minIndeks = 0;
    celobrojniNiz.forEach((elem, i) => { // Petlja prolazi kroz sve elemente niza
        if (elem <= minElem) {
            minElem = elem;
            minIndeks = i;
        }
    });
    return minIndeks;
}

console.log(indeksMinElem([2, 4, 0, 5, 0, 2]));

// Zadatak 2

let sumaElemSaParnimIndeksom = celobrojniNiz => {
    let suma = 0;
    for (let i = 0; i < celobrojniNiz.length; i += 2) { // Petlja prolazi samo kroz elemente sa parnim indeksom
        suma += celobrojniNiz[i];
    }
    return suma;
}

console.log(sumaElemSaParnimIndeksom([2, 5, -2, 3, 4, -5, 3]));

// Zadatak 3

let promeniZnak = celobrojniNiz => {
    for (let i = 0; i < celobrojniNiz.length; i += 2) {
        if (celobrojniNiz.length[i] % 2 != 0) {
            celobrojniNiz[i] *= -1;
        }
    }
    console.log(celobrojniNiz);
}

promeniZnak([-5, 2, 3, 1, 7, 5]);
