const portfolioList = document.querySelector('.portfolio-list__content');

if (portfolioList) {
  const footer = document.querySelector('footer');
  const items = portfolioList.querySelectorAll('.portfolio-list__item');

  const svgElement = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svgElement.setAttribute("class", "spinner");
  svgElement.setAttribute("viewBox", "0 0 50 50");
  const circleElement = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  circleElement.setAttribute("class", "path");
  circleElement.setAttribute("cx", "25");
  circleElement.setAttribute("cy", "25");
  circleElement.setAttribute("r", "20");
  circleElement.setAttribute("fill", "none");
  circleElement.setAttribute("stroke-width", "5");
  svgElement.appendChild(circleElement);

  const count = 3;
  let isReady = true;

  for (let i = 0; (i < count && i < items.length); i += 1) {
    items[i].classList.add('portfolio-list__item--show');
  }

  let start = count;
  let finish = start + count - 1;

  const options = {
    root: null,
    rootMargin: '90px',
    threshold: 0,
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && isReady) {
        isReady = false;
        portfolioList.appendChild(svgElement);
        setTimeout(() => {
          for (let i = start; (i <= finish && i < items.length); i += 1) {
            items[i].classList.add('portfolio-list__item--show');
          }
          start = start + count;
          finish = finish + count;
          if (start >= items.length) {
            observer.unobserve(entry.target);
          }
          isReady = true;
          const spinner = portfolioList.lastChild;
          spinner.remove();
        }, 1200);
      }
    })
  }, options);

  if (start < items.length) {
    observer.observe(footer);
  }
};

