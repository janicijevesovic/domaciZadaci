// Zadatak 3

let reqZad3 = new XMLHttpRequest();
reqZad3.addEventListener('readystatechange', () => {
    if (reqZad3.readyState === 4 && reqZad3.status === 200) {
        let data = JSON.parse(reqZad3.responseText);
        data.forEach(user => {
            if (user.name.includes('Clementin')) {
                console.log(user.name);
            }
        });
    }
    else if (reqZad3.readyState === 4) {
        console.log('Server nije u stanju da obradi zahtev');
    }
});
reqZad3.open('GET', 'https://jsonplaceholder.typicode.com/users');
reqZad3.send();

// Zadatak 4

let reqZad4 = new XMLHttpRequest();
reqZad4.addEventListener('readystatechange', () => {
    if (reqZad4.readyState === 4 && reqZad4.status === 200) {
        let data = JSON.parse(reqZad4.responseText);
        data.forEach(user => {
            if (user.company.name.includes('Group') || user.company.name.includes('LLC')) {
                console.log(user.name);
            }
        });
    }
    else if (reqZad4.readyState === 4) {
        console.log('Server nije u stanju da obradi zahtev');
    }
});
reqZad4.open('GET', 'https://jsonplaceholder.typicode.com/users');
reqZad4.send();

// Zadatak 5 

let reqZad5 = new XMLHttpRequest();
reqZad5.addEventListener('readystatechange', () => {
    if (reqZad5.readyState === 4 && reqZad5.status === 200) {
        let data = JSON.parse(reqZad5.responseText);
        let cities = [];
        data.forEach(user => {
            if (!(cities.includes(user.address.city))) { // Ako se grad vec ne nalazi u nizu, dodaje se. U suprotnom se ne dodaje (nece biti duplih unosa).
                cities.push(user.address.city);
            }
        });
        console.log(cities);
    }
    else if (reqZad5.readyState === 4) {
        console.log('Server nije u stanju da obradi zahtev');
    }
});
reqZad5.open('GET', 'https://jsonplaceholder.typicode.com/users');
reqZad5.send();

// Zadatak 6

let reqZad6 = new XMLHttpRequest();
reqZad6.addEventListener('readystatechange', () => {
    if (reqZad6.readyState === 4 && reqZad6.status === 200) {
        let data = JSON.parse(reqZad6.responseText);
        let numOfUsers = 0;
        data.forEach(user => {
            if (user.address.geo.lat < 0 && user.address.geo.lng < 0) {
                numOfUsers += 1;
            }
        });
        console.log(`Broj korisnika cije su vrednosti geografske sirine i duzine negativni brojevi je ${numOfUsers}.`);
    }
    else if (reqZad6.readyState === 4) {
        console.log('Server nije u stanju da obradi zahtev');
    }
});
reqZad6.open('GET', 'https://jsonplaceholder.typicode.com/users');
reqZad6.send();