// Zadatak 2.

// 1. Za uneti redni broj dana ispisati koji je to dan u nedelji (1. dan je ponedeljak).

let redniBroj = 3;
switch (redniBroj)
{
    case 1:
        console.log("Ponedeljak");
        break;
    case 2:
        console.log("Utorak");
        break;
    case 3:
        console.log("Sreda");
        break;
    case 4:
        console.log("Cetvrtak");
        break;
    case 5:
        console.log("Petak");
        break;
    case 6:
        console.log("Subota");
        break;
    case 7:
        console.log("Nedelja");
        break;
    default:
        console.log("Pogresan unos");
}

// 2. Za unetu ocenu učenika (ceo broj od 1 do 5) ispisati njegov uspeh te školske godine (nedovoljan, …, odličan).

let ocena = 4;
switch (ocena)
{
    case 1:
        console.log("Nedovoljan");
        break;
    case 2:
        console.log("Dovoljan");
        break;
    case 3:
        console.log("Dobar");
        break;
    case 4:
        console.log("Vrlo dobar");
        break;
    case 5:
        console.log("Odlican");
        break;
    default:
        console.log("Pogresan unos");
}

// 3. Za uneti paran broj manji od 10 ispitati da li je uneti broj nula, dvojka, četvorka, šestica, osmica ili je unos pogrešan.

let paranBroj = 11;
switch (paranBroj)
{
    case 0:
        console.log("Broj je 0");
        break;
    case 2:
        console.log("Broj je 2");
        break;
    case 4:
        console.log("Broj je 4");
        break;
    case 6:
        console.log("Broj je 6");
        break;
    case 8:
        console.log("Broj je 8");
        break;
    default:
        console.log("Pogresan unos");
}

// 4. Za uneta dva broja i karakter napraviti kalkulator koji vrši množenje ta dva broja ukoliko je uneto slovo ’m’, deljenje ukoliko je uneto slovo ’d’, sabiranje ukoliko je uneto slovo ’s’ ili oduzimanje ukoliko je uneto slovo ’o’.

let prviBroj = 3;
let drugiBroj = 10;
let operacija = "o";

switch (operacija)
{
    case "s":
        console.log(prviBroj + drugiBroj);
        break;
    case "o":
        console.log(prviBroj - drugiBroj);
        break;
    case "m":
        console.log(prviBroj * drugiBroj);
        break;
    case "d":
        console.log(prviBroj / drugiBroj);
        break;
    default:
        console.log("Pogresan unos");
}

// 5. Za preuzeti dan sa računara ispisati još koliko dana je preostalo do vikenda.

let datum = new Date();
let danasnjiDan = datum.getDay();
switch (danasnjiDan)
{
    case 0:
    case 6:
        console.log("Vec je vikend");
        break;
    case 1:
        console.log("5 dana do vikenda");
        break;
    case 2:
        console.log("4 dana do vikenda");
        break;
    case 3:
        console.log("3 dana do vikenda");
        break;
    case 4:
        console.log("2 dana do vikenda");
        break;
    case 5:
        console.log("1 dan do vikenda");
        break;
}

// 6. Preuzeti redni broj meseca sa računara i ispisati koji je to mesec u godini.
let trenutniMesec = datum.getMonth();
switch (trenutniMesec)
{
    case 0:
        console.log("Januar");
        break;
    case 1:
        console.log("Februar");
        break;
    case 2:
        console.log("Mart");
        break;
    case 3:
        console.log("April");
        break;
    case 4:
        console.log("Maj");
        break;
    case 5:
        console.log("Jun");
        break;
    case 6:
        console.log("Jul");
        break;
    case 7:
        console.log("Avgust");
        break;
    case 8:
        console.log("Septembar");
        break;
    case 9:
        console.log("Oktobar");
        break;
    case 10:
        console.log("Novembar");
        break;
    case 11:
        console.log("Decembar");
        break;
}

// 7. Preuzeti redni broj meseca sa računara i ispisati koliko taj mesec ima dana. Ukoliko je u pitanju mesec februar, preuzeti i godinu sa računara, ispitati da li je godina prestupna i na osnovu toga ispisati broj dana meseca februara.

switch (trenutniMesec)
{
    case 0:
    case 2:
    case 4:
    case 6:
    case 7:
    case 9:
    case 11:
        console.log("Trenutni mesec ima 31 dan.");
        break;
    case 3:
    case 5:
    case 8:
    case 10:
        console.log("Trenutni mesec ima 30 dana.");
        break;
    case 1:
        let trenutnaGodina = datum.getFullYear();
        if (((trenutnaGodina % 4 == 0) && (trenutnaGodina % 100 != 0)) || (trenutnaGodina % 400 == 0)) {
            console.log("Trenutni mesec ima 29 dana.");
        }
        else {
            console.log("Trenutni mesec ima 28 dana.");
        }
        break;
}

// 8. Na osnovu unete boje na engleskom jeziku obojiti tekst paragrafa u crveno, zeleno ili plavo. Ukoliko nije uneta ni jedna od ove tri boje, tekst paragrafa obojiti u žuto.

let color = "green";
switch (color)
{
    case "red":
        document.body.innerHTML += `<p style="color:red;">Paragraf za vezbanje Switch naredbe!</p>`
        break;
    case "green":
        document.body.innerHTML += `<p style="color:green;">Paragraf za vezbanje Switch naredbe!</p>`
        break;
    case "blue":
        document.body.innerHTML += `<p style="color:blue;">Paragraf za vezbanje Switch naredbe!</p>`
        break;
    default:
        document.body.innerHTML += `<p style="color:yellow;">Paragraf za vezbanje Switch naredbe!</p>`
}
document.body.innerHTML += `<hr>`;