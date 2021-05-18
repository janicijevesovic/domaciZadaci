let dan = {
    datum: "2021/05/18",
    kisa: false,
    sunce: true,
    oblacno: true,
    temperature: [7, 10, 23, -15, 26, 20, 26, -15],
    neuobicajen: function() {
        let tempIspodMinus5 = false;
        let tempIznadPlus25 = false;
        this.temperature.forEach(temp => { // Provera da li postoje vrednosti manje od -5 i vece od 25 stepeni
            if (temp < -5) {
                tempIspodMinus5 = true;
            }
            else if (temp > 25) {
                tempIznadPlus25 = true;
            }
        });
        let prviUslov = this.kisa && tempIspodMinus5;
        let drugiUslov = this.oblacno && tempIznadPlus25;
        let treciUslov = this.kisa && this.oblacno && this.sunce;
        return prviUslov || drugiUslov || treciUslov; // Ako je bilo koji od ova tri uslova ispunjen, dan je neuobicajen. U suprotnom nije.
    },
    maxTemperatura: function () { // Nalazenje vrednosti najvise temperature
        let max = this.temperature[0];
        this.temperature.forEach(temp => {
            if (temp > max) {
                max = temp;
            }
        });
        return max;
    },
    minTemperatura: function () { // Nalazenje vrednosti najmanje temperature
        let min = this.temperature[0];
        this.temperature.forEach(temp => {
            if (temp < min) {
                min = temp;
            }
        });
        return min;
    },
    ispisiTemperature: function () { // Ispis temperature uz pomoc neuredjene liste. Ukoliko je temperatura maksimalna ili minimalna taj element ce biti obojen. U suprotnom se samo dodaje novi element bez boje.
        let max = this.maxTemperatura();
        let min = this.minTemperatura();
        let lista = `<ul>`;
        this.temperature.forEach(temp => {
            if (temp == max) {
                lista += `<li style="color:red;">${temp}</li>`;
            }
            else if (temp == min) {
                lista += `<li style="color:blue;">${temp}</li>`;
            }
            else {
                lista += `<li>${temp}</li>`;
            }
        });
        lista += `</ul>`;
        return lista;
    }
};

console.log(dan.neuobicajen());
document.body.innerHTML += dan.ispisiTemperature();
