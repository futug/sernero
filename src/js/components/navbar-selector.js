const servicePaths = ['/google-ads.html',
  '/google-search-ads.html',
  '/video-marketing.html',
  '/google-analytics.html',
  '/audit.html',
  '/landing-page.html',
  '/seo.html',
];

const path = window.location.pathname;

let activeLink = document.querySelector(`[data-link="${path}"]`);
if (servicePaths.includes(path)) {
  activeLink = document.querySelector('[data-link="/services.html"]');
}

if (activeLink) {
  activeLink.classList.add('nav__list-link--active');
}
