let search = document.querySelector('.search__icon_header');
let searchBody = document.querySelector('.search__body');
let searchButton = document.querySelector('.search__button');
let searchClose = document.querySelector('.search__close');
let input = document.querySelector('.search__input');

search.onclick = () => {
    searchBody.style.transition = '1s';
    searchBody.style.display = 'block';
    search.replaceWith(searchBody);
    input.style.color = '#D1D1E5';
}

input.onfocus = () => {
    input.value = '';
    input.style.color = 'black';
}

searchClose.onclick = () => {
    input.style.color = '#D1D1E5';
    input.value = 'Найти';
}

searchBody.onblur = () => {
    if (input.value === '') {
        input.style.color = '#D1D1E5';
        input.value = 'Найти';
    }
}
