const preloader = document.querySelector(".preloader");

window.addEventListener("load", () => {
  console.log("Загружено");
  preloader.classList.add("preloader--hide");
});
