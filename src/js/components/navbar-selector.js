const path = window.location.pathname;
console.log(path);

const activeLink = document.querySelector(`[data-link="${path}"]`);

activeLink.classList.add('nav__list-link--active');
