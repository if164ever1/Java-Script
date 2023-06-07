let numberOfFilms = +prompt("How many films have you seen?");

const personalMovieDb = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
}

for(let i = 0; i < 2; ++i){
    const a = prompt("One the last watching film?"),
          b = prompt("How do you rate it ?");
    
    if(a != null && b != null && a != '' && b != '' && a.length < 50){
        personalMovieDb.movies[a] = b;    
        console.log('done');
    }
    else{
        console.log('error');
        --i;
    }
}

if(personalMovieDb){}

console.log(personalMovieDb);