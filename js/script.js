"use strict";

document.addEventListener("DOMContentLoaded", () => {
	const movieDB = {
		movies: ["Логан", "Лига справедливости", "Ла-ла лэнд", "Одержимость", "Скотт Пилигрим против..."],
	};

	const promoAdv = document.querySelectorAll(".promo__adv img"),
		promoGenre = document.querySelector("main.promo .promo__genre"),
		promoBG = document.querySelector(".promo__content .promo__bg"),
		promoInteractive = document.querySelector(".promo__interactive-list"),
		formInput = document.querySelector(".adding__input"),
		form = document.querySelector("form.add"),
		formCheckbox = document.querySelector('.add input[type="checkbox"]');

	const DeleteAdv = function () {
		promoAdv.forEach((item) => {
			item.remove();
		});
	};
	function sortArr(arr) {
		arr.sort();
	}

	function Change() {
		promoGenre.textContent = "драма";
		promoBG.style.cssText = `background: url(img/bg.jpg) top center / cover no-repeat; `;
		promoInteractive.innerHTML = "";
	}

	form.addEventListener("submit", (event) => {
		event.preventDefault();
		let newFilm = formInput.value;
		const favoriteFilm = formCheckbox.checked;
		if (newFilm) {
			if (newFilm.length > 21) {
				newFilm = `${newFilm.substing(0, 22)}...`;
			}
			movieDB.movies.push(newFilm);
			if (favoriteFilm) {
				console.log("Добавляемо новий фільм");
			}
		}
		sortArr(movieDB.movies);
		CreateMovieList(movieDB.movies, promoInteractive);
		form.reset();
	});

	function CreateMovieList(film, parent) {
		parent.innerHTML = "";
		sortArr(film);
		film.forEach((Element, i) => {
			parent.innerHTML += `
			<li class="promo__interactive-item"> 
			${i + 1}. ${Element}
					<div class="delete"></div>
			</li>`;
		});
		document.querySelectorAll(".delete").forEach((btn, i) => {
			btn.addEventListener("click", () => {
				btn.parentElement.remove();
				movieDB.movies.splice(i, 1);
				CreateMovieList(movieDB.movies, promoInteractive);
			});
		});
	}

	DeleteAdv();
	Change();
	sortArr(movieDB.movies);
	CreateMovieList(movieDB.movies, promoInteractive);
});
