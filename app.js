const colors = [
  "green",
  "blue",
  "red",
  "yellow",
  "#f15025",
  "rgba(133,122,200)",
  "violet",
  "#000000",
  "purple",
];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  const randomNunber = getRandomNumber();
  console.log(randomNunber);
  document.body.style.backgroundColor = colors[randomNunber];
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
