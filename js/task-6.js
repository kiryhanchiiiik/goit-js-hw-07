function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector("#controls input");
const createButton = document.querySelector("[data-create]");
const destroyButton = document.querySelector("[data-destroy]");
const box = document.querySelector("#boxes");

destroyBoxes();

let boxesAdd = "";

function createBoxes(amount) {
  for (let i = 0; i < amount; i++) {
    const width = 30 * i + 10;
    const height = 30 * i + 10;
    const backgroundColor = getRandomHexColor();
    boxesAdd += `<div style="width: ${width}px; height: ${height}px; background-color: ${backgroundColor};"></div>`;
  }
  box.insertAdjacentHTML("beforeend", boxesAdd);
}

function destroyBoxes() {
  box.innerHTML = "";
}

createButton.addEventListener("click", () => {
  const amount = Number(input.value);
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    input.value = "";
  }
});

destroyButton.addEventListener("click", () => {
  destroyBoxes();
});
