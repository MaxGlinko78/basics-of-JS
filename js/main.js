"use strict";

let numberOfFilms;

function start() {
  while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt("Сколько Фильмов вы уже псмотрели", "");
  }
}
//start();

const personalMoviesDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

function rememberMyFilms() {
  for (let i = 0; i < 2; i++) {
    const a = prompt("Один из последних просмотренных фильмов?", ""),
      b = prompt("насколько оцениет его?", "");

    if (a != null && b != null && a != "" && b != "" && a.length < 50) {
      personalMoviesDB.movies[a] = b;
      console.log("done");
    } else {
      console.log("Do it again");
      i--;
    }
  }
}
///rememberMyFilms();

function detectPersonalLevel() {
  if (personalMoviesDB.count < 10) {
    console.log('"Просмотрено довольно мало фильмов"');
  } else if (personalMoviesDB.count >= 10 && personalMoviesDB.count < 30) {
    console.log('"Вы классический зритель"');
  } else if (personalMoviesDB.count >= 30) {
    console.log('"Вы киноман"');
  } else {
    console.log('"Произошла ошибка"');
  }
}

// detectPersonalLevel();

function showMyDB(hidden) {
  if (!hidden) {
    console.log(personalMoviesDB);
  }
}
showMyDB(personalMoviesDB.privat);

function writeYourGenres() {
  for (let i = 1; i <= 3; i++) {
    const genre = prompt(`Ваш любимый жанр под номером${i}`);
    personalMoviesDB.genres[i - 1] = genre;
  }
}
writeYourGenres();
