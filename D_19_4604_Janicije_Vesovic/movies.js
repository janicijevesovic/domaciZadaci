export class Movie {
    constructor(name, director, release_year, genres, rating) {
        this.name = name;
        this.director = director;
        this.release_year = release_year;
        this.genres = genres;
        this.rating = rating;
    }

    // Seteri
    set name(name) {
        this._name = name;
    }
    set director(director) {
        this._director = director;
    }
    set release_year(release_year) {
        this._release_year = release_year;
    }
    set genres(genres) {
        this._genres = genres;
    }
    set rating(rating) {
        this._rating = rating;
    }

    // Geteri
    get name() {
        return this._name;
    }
    get director() {
        return this._director;
    }
    get release_year() {
        return this._release_year;
    }
    get genres() {
        return this._genres;
    }
    get rating() {
        return this._rating;
    }
}
