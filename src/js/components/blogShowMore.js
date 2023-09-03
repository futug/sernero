const posts = document?.querySelectorAll(".blog-item__post");

posts?.forEach((post) => {
  const postWords = post.textContent.split(" ");

  if (postWords.length > 120) {
    const visibleWords = postWords.slice(0, 120).join(" ");
    const hiddenWords = postWords.slice(120).join(" ");

    post.innerHTML = `
      <p>${visibleWords}<span class="read-more" style="display:none">${hiddenWords}</span></p>
      <span class="read-more-button">Читать далее...</span>
      <span class="read-less-button" style="display:none">Скрыть...</span>
    `;

    const readMoreButton = post.querySelector(".read-more-button");
    const readLessButton = post.querySelector(".read-less-button");
    const hiddenWordsElement = post.querySelector(".read-more");

    readMoreButton.addEventListener("click", () => {
      readMoreButton.style.display = "none";
      readLessButton.style.display = "inline";
      hiddenWordsElement.style.display = "inline";
    });

    readLessButton.addEventListener("click", () => {
      readMoreButton.style.display = "inline";
      readLessButton.style.display = "none";
      hiddenWordsElement.style.display = "none";
    });
  }
});
