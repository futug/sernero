window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 300 ||
    document.documentElement.scrollTop > 300
  ) {
    document.querySelector(".to-top").classList.add("to-top--active");
  } else {
    document.querySelector(".to-top").classList.remove("to-top--active");
  }
}

document.querySelector(".to-top").addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
