function paint(color) {
  const circle = document.getElementById("circleID");
  circle.style.backgroundColor = color;
}

function getRandomColor() {
  const r = Math.floor(Math.random() * 256); // Random value between 0 and 255
  const g = Math.floor(Math.random() * 256); // Random value between 0 and 255
  const b = Math.floor(Math.random() * 256); // Random value between 0 and 255
  const randomColor = `rgb(${r},${g},${b})`;

  const circle = document.getElementById("circleID");
  circle.style.backgroundColor = randomColor;
}
