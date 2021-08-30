
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

refs.startBtn.addEventListener("click", onStartChangeColor);
refs.stopBtn.addEventListener("click", onStopChangeColor);

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function changeColorBody() {
  document.body.style.backgroundColor =
    colors[randomIntegerFromInterval(0, colors.length - 1)];
}

let intervalId = null;

function onStartChangeColor() {
  refs.startBtn.setAttribute("disabled", true);
  intervalId = setInterval(changeColorBody, 500);
}

function onStopChangeColor() {
  refs.startBtn.removeAttribute("disabled", true);
  clearInterval(intervalId);
}