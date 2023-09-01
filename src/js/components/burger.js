// <BURGER>

const header = document.querySelector('header');
const headerContainer = document.querySelector('.header__inner');
const menu = document.querySelector('.header__nav');
const burgerButton = document.querySelector('.header__burger');

burgerButton?.addEventListener('click', (e) => {
  e.stopPropagation();
  menu.classList.toggle('header__nav_active');
  burgerButton.classList.toggle('active');
  if (document.body.style.overflow !== 'hidden') {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }
});

document.body.addEventListener('click', (e) => {
  if (menu.classList.contains('header__nav_active')) {
    menu.classList.remove('header__nav_active');
    document.body.style.overflow = 'auto';
    burgerButton.classList.remove('active');
  }
});

document.body.addEventListener("keydown", (e) => {
  if (e.code == "Escape" && menu.classList.contains('header__nav_active')) {
    menu.classList.remove('header__nav_active');
    document.body.style.overflow = 'auto';
    burgerButton.classList.toggle('active');
  }
});

// </BURGER>

// <HEADER SCROLLER>

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY || window.pageYOffset;
  const scrollTrigger = 40;

  if (scrollY > scrollTrigger) {
    header.classList.add('header_scrolled')
  } else {
    header.classList.remove('header_scrolled');
  }
});

// </HEADER SCROLLER>



