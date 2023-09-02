const gallery = document.querySelectorAll('[data-lightbox="gallery"]');

if (gallery.length > 0) {
  const overlay = document.querySelector('.overlay');
  const lightBox = document.querySelector('.lightbox');
  const img = document.querySelector('.lightbox__image');
  const closeButton = document.querySelector('.close-button');

  gallery.forEach((item) => {
    item.addEventListener('click', (e) => {
      e.stopPropagation();
      const src = item.getAttribute('src');
      img.src = src;
      overlay.classList.toggle('overlay_active');
      document.body.style.overflow = 'hidden';
    });
  });

  overlay.addEventListener('click', (e) => {
    e.stopPropagation();
    if (e.target.className !=='lightbox__image') {
      overlay.classList.remove('overlay_active');
      document.body.style.overflow = 'auto';
    }
  });

  document.body.addEventListener("keydown", (e) => {
    if (e.code == "Escape" && overlay.classList.contains('overlay_active')) {
      overlay.classList.remove('overlay_active');
      document.body.style.overflow = 'auto';
    }
  });
}

