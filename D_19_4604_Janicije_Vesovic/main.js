import { Movie } from "./movies.js";

// Dodavanje filma u bazu
let newMovie = new Movie("Forrest Gump", {name: "Robert", surname: "Zemeckis"}, 1994, ["Drama", "Romance"], 8.8);

let addMovie = (movieID, movie) => {
    database.collection("movies").doc(movieID).set({
        name: movie.name,
        director: {
            name: movie.director.name,
            surname: movie.director.surname
        },
        release_year: movie.release_year,
        genres: movie.genres,
        rating: movie.rating
    })
    .then(() => {
        console.log("Movie successfully added!");
    })
    .catch(error => {
        console.log("Error adding movie:", error);
    });
}
addMovie("movie-02", newMovie);

newMovie = new Movie("Goodfellas", {name: "Martin", surname: "Scorsese"}, 1990, ["Biography", "Crime", "Drama"], 8.7);
addMovie("movie-03", newMovie);


let updateMovie = (movieID, property, newValue) => {
    let movie = database.doc(`movies/${movieID}`);
    let obj = {};
    obj[`${property}`] = newValue;
    movie.update(obj)
    .then(() => {console.log("Successfully")})
    .catch(err => {console.log("Error:", err)});
}
// updateMovie("movie-03", "rating", 6.6);
// updateMovie("movie-02", "release_year", 2001);

// Dodavanje zanra nekom filmu

let addGenre = (movieID, newValue) => {
    let movie = database.doc(`movies/${movieID}`);
    movie.update({
        genres: firebase.firestore.FieldValue.arrayUnion(newValue)
    });
}
// addGenre("movie-02", "Drama");

// Brisanje zanra nekom filmu

let deleteGenre = (movieID, value) => {
    let movie = database.doc(`movies/${movieID}`);
    movie.update({
        genres: firebase.firestore.FieldValue.arrayRemove(value)
    })
}
// deleteGenre("movie-02", "Drama");

// Menja ime ili prezime nekom reziseru

// updateMovie("movie-02", "director.name", "Novo ime");
// updateMovie("movie-02", "director.surname", "Novo prezime");


