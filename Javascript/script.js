// let input = document.getElementById("demo");
// input.innerHTML = "";
console.log("!Hello world")

// making the color changer area in javascript
let colorBoard = document.getElementById("board");
colorBoard.addEventListener("mousemove", (e) => {
  const x = e.clientX;
  const y = e.clientY;
  colorBoard.innerHTML = `${x} ${y}`;
  colorBoard.style.backgroundColor = `rgb(${x},${y}, 200 )`;
});

// if else in javascript
// 

let grade = 80;
if (grade < 90) {
  console.log("your  grade is", grade)
}
