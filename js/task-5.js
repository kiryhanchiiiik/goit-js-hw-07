function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const body = document.body;
const changeButton = document.querySelector(".change-color");
const spanColor = document.querySelector(".color");

changeButton.addEventListener("click", (event) => {
  const randomColor = getRandomHexColor();

  body.style.backgroundColor = randomColor;
  spanColor.textContent = randomColor;
});
