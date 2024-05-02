let search = document.querySelector('.search__icon_header');
let searchBody = document.querySelector('.search__body');
let searchButton = document.querySelector('.search__button');

search.onclick = () => {
    searchBody.style.display = 'block';
    search.replaceWith(searchBody);
}

search.blur = () => {
    searchBody.style.display = '';
    searchBody.prepend.search;
}

