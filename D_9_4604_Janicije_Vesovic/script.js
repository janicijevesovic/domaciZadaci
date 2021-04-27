let ceoBroj = 27;
let i = 1;
let brojDelioca = 0;

while (i <= ceoBroj) {
    if (ceoBroj % i == 0 && ((i % 2 == 1) && (i % 3 == 0))) {
        brojDelioca += 1;
    }
    i++;
}
console.log(`Broj delioca je ${brojDelioca}.`);
