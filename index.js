
const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

refs = {
  startBtn: document.querySelector('[data-action="start"]'),
  stopBtn: document.querySelector('[data-action="stop"]'),
};

refs.startBtn.addEventListener("click", onStart);
refs.stopBtn.addEventListener("click", onStop);

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function changeBodyColor() {
  document.body.style.backgroundColor =
    colors[randomIntegerFromInterval(0, colors.length - 1)];
}

let intervalId = null;

function onStart() {
  refs.startBtn.setAttribute("disabled", true);
  intervalId = setInterval(changeBodyColor, 1000);
}

function onStop() {
  refs.startBtn.removeAttribute("disabled", true);
  clearInterval(intervalId);
}