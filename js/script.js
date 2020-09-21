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
const adv = document.querySelector('.promo__adv');
const genre = document.querySelector('.promo__genre');
const bg = document.querySelector('.promo__bg');
const li = document.createElement('li');
const ul = document.querySelector('.promo__interactive-list');




movieDB.movies.sort();
adv.remove();
genre.innerHTML = 'драма';
bg.style.cssText = 'background-image: url(img/bg.jpg)';





const createList = () => {
    ul.innerHTML = '';
    for (let i in movieDB.movies) {
    let counter = +i + 1;
    const li = document.createElement('li');
    li.innerHTML = `${counter} ${movieDB.movies[i]}`;
    li.classList.add('promo__interactive-item');
    li.insertAdjacentHTML('beforeend', '<div class="delete"></div>');
    ul.append(li);
}
};
createList();









const input = document.querySelectorAll('input');
const filmName = document.querySelector('.adding__input');
const btn = document.querySelector('button');









btn.addEventListener('click', (e) => {
    e.preventDefault();
    if (filmName.value != '') {
        let finalFilm = filmName.value[0].toUpperCase();
        if (filmName.value.length > 23) {
            finalFilm += filmName.value.slice(1, 10);
            finalFilm += '...';
            console.log(finalFilm);
        } else {
            finalFilm += filmName.value.slice(1, filmName.value.lemgth);
        }

        movieDB.movies.push(finalFilm);
        movieDB.movies.sort();
        createList();
        if (input[2].checked) {
            console.log('Добавляем любимый фильм');
        }
    }
    rec();
});


const rec = () => {
    const deleteItem = document.querySelectorAll('.delete');
    deleteItem.forEach(item => {
        item.addEventListener('click', () => {
            let myText = '';
            let text = item.parentElement.textContent;
            
            for (let i in text) {
                if (text[i] == ' ') {
                    myText = text.slice(+i + 1, text.length);
                    break;
                }
            }
            for (let i in movieDB.movies) {
                if (movieDB.movies[i] == myText) {
                    movieDB.movies.splice(i, 1);
                }
            }
            createList();
            rec();
        });
    });
};
rec();