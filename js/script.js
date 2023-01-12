"use strict";

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

promoAdv.forEach((item) => {
	item.remove();
});

movieDB.movies.sort();
promoGenre.textContent = "драма";
promoBG.style.cssText = `background: url(img/bg.jpg) top center / cover no-repeat; `;
promoInteractive.innerHTML = "";

movieDB.movies.forEach((Element, i) => {
	promoInteractive.innerHTML += `
	<li class="promo__interactive-item"> 
	${i + 1}. ${Element}
			<div class="delete"></div>
	</li>`;
});

form.addEventListener("submit", (event) => {
	event.preventDefault();
	const newFilm = formInput.value;
	const favoriteFilm = formCheckbox.checked;
	if (favoriteFilm === true) {
		console.log("Добавляемо новий фільм");
	}
	movieDB.movies.push(newFilm);
	let i = movieDB.movies.length;
	promoInteractive.innerHTML += `
	<li class="promo__interactive-item"> ${i} . ${newFilm}
			<div class="delete"></div>
	</li>`;
});
