const block1 = document.querySelector('[data-list="list1"]');
const block2 = document.querySelector('[data-list="list2"]');

const item1 = block1.querySelector('.google-args__item:last-child');
const item2 = block2.querySelector('.google-args__item');

const resolvePadding = (block1, block2) => {
  const rect1 = block1.getBoundingClientRect();
  const rect2 = block2.getBoundingClientRect();
  const distanceX = Math.abs(rect2.left - rect1.right);
  document.documentElement.style.setProperty('--mark-padding', `-${distanceX/2}px`);
};

const resolveHeight = (item1, item2) => {
  const rect1 = item1.getBoundingClientRect();
  const rect2 = item2.getBoundingClientRect();

  const distanceY = Math.abs(rect2.top - rect1.top);
  document.documentElement.style.setProperty('--line-height', `${distanceY}px`);
}

if (block1 && block2) {
  resolvePadding(block1, block2);
  resolveHeight(item1, item2);

  window.addEventListener("resize", () => {
    resolvePadding(block1, block2);
    resolveHeight(item1, item2);
  });
}
