const gallery = document.querySelectorAll('[data-lightbox="gallery"]');
const overlay = document.querySelector('.overlay');
const lightBox = document.querySelector('.lightbox');
const closeButton = document.querySelector('.close-button');

gallery.forEach((item) => {
  item.addEventListener('click', (e) => {
    e.stopPropagation();
    const src = item.getAttribute('src');
    const img = document.createElement('img');
    img.src = src;
    img.className = 'lightbox__image';
    lightBox.append(img);
    overlay.classList.toggle('overlay_active');
    document.body.style.overflow = 'hidden';
  });
});

overlay?.addEventListener('click', (e) => {
  e.stopPropagation();
  if (e.target.className !=='lightbox__image') {
    overlay.classList.toggle('overlay_active');
    document.body.style.overflow = 'auto';
    lightBox?.replaceChildren();
  }
});
