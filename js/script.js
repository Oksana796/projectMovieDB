"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const movieDB = {
    movies: [
      "Логан",
      "Лига справедливости",
      "Ла-ла лэнд",
      "Одержимость",
      "Скотт Пилигрим против...",
    ],
  };

  let advertising = document.querySelectorAll(".promo__adv img");
  let elGenre = document.querySelector(".promo__genre");
  let movieList = document.querySelector(".promo__interactive-list");
  let formAdd = document.querySelector(".add");
  let inputAdd = document.querySelector(".adding__input");
  let checkboxAdd = document.querySelector('[type = "checkbox"]');

  formAdd.addEventListener("submit", (event) => {
    event.preventDefault();

    let newFilm = inputAdd.value;
    let fav = checkboxAdd.checked;

    if (newFilm) {
      if (newFilm.length > 21) {
        newFilm = `${newFilm.substring(0, 22)}...`;
      }
      if (fav) {
        console.log("Adding favorite film");
      }

      movieDB.movies.push(newFilm);
      movieDB.movies.sort();
      createMovieList(movieDB.movies, movieList);
    }
    event.target.reset();
  });

  let deleteAdv = () => {
    advertising.forEach((item) => {
      item.remove();
    });
  };

  let changes = () => {
    elGenre.textContent = "Drama";
    document.querySelector(".promo__bg").style.backgroundImage =
      "url('img/bg.jpg')";
  };

  function createMovieList() {
    movieList.innerHTML = "";
    movieDB.movies.sort();

    movieDB.movies.forEach((film, i) => {
      movieList.innerHTML += `<li class="promo__interactive-item">
      ${i + 1}. ${film}
      <div class="delete"></div>
      </li>`;
    });

    document.querySelectorAll(".delete").forEach((icon, i) => {
      icon.addEventListener("click", () => {
        icon.parentElement.remove();
        movieDB.movies.splice(i, 1);

        createMovieList(movieDB.movies, movieList);
      });
    });
  }

  deleteAdv();
  changes();
  createMovieList(movieDB.movies, movieList);
});
