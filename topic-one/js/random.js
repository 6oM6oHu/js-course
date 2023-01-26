// const max = 50;
// const min = 10;

// const result = Math.round(Math.random() * (max - min) + min);

// console.log(result);

const colors = ["teal", "tomato", "orange", "gray", "purple"];
const max = colors.length - 1;
const min = 0;
const index = Math.round(Math.random() * (max - min) + min);

const color = colors[index];

console.log(color);

document.body.style.backgroundColor = color;
