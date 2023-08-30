const servicePaths = ['google-ads',
  'google-search-ads',
  'video-marketing',
  'google-analytics',
  'audit',
  'landing-page',
  'seo',
];

const path = window.location.pathname;

const paths = path.split('/');

const lastPath = paths[paths.length - 1]?.replace(/\.html$/, "");

let activeLink = document.querySelector(`[data-link="${lastPath}"]`);
if (servicePaths.includes(lastPath)) {
  activeLink = document.querySelector('[data-link="services"]');
}

activeLink?.classList.add('nav__list-link--active');
