/* let personalMovieDB = {
	count: 0,
	movies: {},
	actors: {},
	genres: [],
	privat: true,
	start: function() {
		personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
	
		while(personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
			personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
		}
	},
	yoursFilms: function() {
		for (let i = 0; i <= 1; i++) {
			a = prompt('какой последний фильм?', '');
			b =	prompt('во сколько вы его оцените?', '');
			 
			if (a !== '' && b !== '' && a !== null && b !== null && a.length < 50) {
				personalMovieDB.movies[a] = b;
			} else {
				i--
			}
		}
	},
	howManyFilms: function() {
		if (personalMovieDB.count < 10) {
			console.log('little bit')
		} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
			console.log('middle user')
		} else if (personalMovieDB.count >= 30) {
			console.log('you are kinoman')
		}
	},
	showMyDB: function() {
		if (personalMovieDB.privat == false) {
			console.log(personalMovieDB)
		}
	},
	writeYourGanres: function() {
		for (let i = 1; i <= 3; i++ ) {
			let ganre = prompt(`Your faworite ganers has number ${i}`)
			if (ganre === null || ganre === '') {
				i--
			} else {
				personalMovieDB.genres[i - 1] = ganre
			}
			
		}
		personalMovieDB.genres.forEach(function(elem, i) {
			console.log(`favorite ganre ${i + 1} is ${elem}`)
		});
		
	},
	toggleVizibleMyDB: function() {
		if (personalMovieDB.privat === false) {
			personalMovieDB.privat = true
		} else if (personalMovieDB.privat === true) {
			personalMovieDB.privat = false
		}
	}
};
//personalMovieDB.toggleVizibleMyDB()
//personalMovieDB.yoursFilms()
//personalMovieDB.howManyFilms()
//personalMovieDB.showMyDB()
//personalMovieDB.writeYourGanres()
	


function compareNumber(a, b) {
    return a - b
}

let arr = [3, 12, 4, 10]
arr.sort(compareNumber)
 */
	

let numberOfFilms = prompt('how many films did you wached?')

let personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
}

const a  = prompt('one of the last film which you watched?')
b = prompt('how much do you evaluete it?')
c = prompt('one of the last film which you watched?')
d = prompt('how much do you evaluete it?')


personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;
