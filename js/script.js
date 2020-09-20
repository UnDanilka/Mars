/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против...",
    ]
};
movieDB.movies.sort();
const adv = document.querySelector('.promo__adv');
adv.remove();
const genre = document.querySelector('.promo__genre');
genre.innerHTML = 'драма';
const bg = document.querySelector('.promo__bg');
bg.style.cssText = 'background-image: url(img/bg.jpg)';
const li = document.createElement('li');
const ul = document.querySelector('.promo__interactive-list');
li.innerHTML = 'im here';
li.classList.add('promo__interactive-item');
li.insertAdjacentHTML('beforeend', '<div class="delete"></div>');
ul.append(li);
ul.innerHTML = '';
for (let i in movieDB.movies){
    console.log(typeof(i));
    let counter = +i + 1;
    const li = document.createElement('li');
    li.innerHTML =  `${counter} ${movieDB.movies[i]}`;
    li.classList.add('promo__interactive-item');
    li.insertAdjacentHTML('beforeend', '<div class="delete"></div>');
    ul.append(li);
}


