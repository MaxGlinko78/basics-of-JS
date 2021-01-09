const numberOfFilms = +prompt("Сколько Фильмов вы уже псмотрели",'');


const personalMoviesDB = {
    count: numberOfFilms,
    movies:{}, 
    actors:{},
    genres:[],
    privat: false

};

for (let i = 0; i<2; i++){
    const   a = prompt("Один из последних просмотренных фильмов?",''),
            b = prompt("насколько оцениет его?",'');

if (a != null && b != null && a !='' && b != '' && a.length < 50) {
    personalMoviesDB.movies[a] = b;  
    console.log('done');    
} else{
    console.log('Do it again')
    i--; 
}
}

if (personalMoviesDB.count < 10){
    console.log('"Просмотрено довольно мало фильмов"');
} else if(personalMoviesDB.count >=10 && personalMoviesDB.count < 30){
    console.log('"Вы классический зритель"');   
} else if(personalMoviesDB.count >= 30){
    console.log('"Вы киноман"');
}else{
    console.log('"Произошла ошибка"');
}

    console.log(personalMoviesDB);
