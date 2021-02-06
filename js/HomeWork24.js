"use strict";

const personalMoviesDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,

  start: function () {
    while (
      personalMoviesDB.count == "" ||
      personalMoviesDB.count == null ||
      isNaN(personalMoviesDB.count)
    ) {
      personalMoviesDB.count = +prompt("Сколько Фильмов вы уже псмотрели", "");
    }
  },
  MyFilms: function () {
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
  },
  PersonalLevel: function () {
    if (personalMoviesDB.count < 10) {
      console.log('"Просмотрено довольно мало фильмов"');
    } else if (personalMoviesDB.count >= 10 && personalMoviesDB.count < 30) {
      console.log('"Вы классический зритель"');
    } else if (personalMoviesDB.count >= 30) {
      console.log('"Вы киноман"');
    } else {
      console.log('"Произошла ошибка"');
    }
  },
  showMyDB: function (hidden) {
    if (!hidden) {
      console.log(personalMoviesDB);
    }
  },
  toggleVisibleMyBD: function () {
    if (personalMoviesDB.privat) {
      personalMoviesDB.privat = false;
    } else {
      personalMoviesDB.privat = true;
    }
  },

  writeYourGenres: function () {
    for (let i = 1; i <= 3; i++) {
      let genre = prompt(`Ваш любимый жанр под номером${i}`);

      if (genre === "" || genre == null) {
        console.log("ВЫ не ввели данные ");
        i--;
      } else {
        personalMoviesDB.genres[i - 1] = genre;
      }
    }

    personalMoviesDB.genres.forEach((item, i) => {
      console.log(`Люимый жанр ${i + 1} - это ${item}`);
    });
  },
};
