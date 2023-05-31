let numberOfFilms = +prompt("How many films have you seen?");

const personalMovieDb = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
}

const answer1 = prompt("One the last watching film?"),
      answer2 = prompt("How do you rate it ?"),
      answer3 = prompt("One the last watching film?"),
      answer4 = prompt("How do you rate it ?");

personalMovieDb.movies[answer1] = answer2;
personalMovieDb.movies[answer3] = answer4;

console.log(personalMovieDb);