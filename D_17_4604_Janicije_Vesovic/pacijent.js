export class Pacijent {
    constructor(ime, visina, tezina) {
        this.ime = ime;
        this.visina = visina;
        this.tezina = tezina;
    }

    // Seteri
    set ime(ime) {
        this._ime = ime;
    }
    set visina(visina) {
        if (visina > 0 && visina < 250) {
            this._visina = visina;
        }
        else {
            this._visina = 0;
        }
    }
    set tezina(tezina) {
        if (tezina > 0 && tezina < 550) {
            this._tezina = tezina;
        }
        else {
            this._tezina = 0;
        }
    }

    // Geteri
    get ime() {
        return this._ime;
    }
    get visina() {
        return this._visina;
    }
    get tezina() {
        return this._tezina;
    }

    // Metode
    stampaj() {
        console.log(this.ime, this.visina, this.tezina);
    }

    bmi() {
        return this.tezina / ((this.visina / 100) ** 2);
    }

    kritican() {
        if (this.bmi() < 15 || this.bmi() > 40) {
            return true;
        }
        else {
            return false;
        }
    }
}




