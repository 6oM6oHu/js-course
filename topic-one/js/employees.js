// // 1. сделать переменные
// const employees = 9;
// let totalSalary = 0;

// let min = 500;
// let max = 5000;

// const salary = Math.round(Math.random() * (max - min) + min);

// // console.log(salary);

// // console.log(totalSalary);

// for (let i = 1; i <= employees; i += 1) {
//   const salary = Math.round(Math.random() * (max - min) + min);
//   console.log(`ЗП работников ${i} - ${salary}`);

//   totalSalary += salary;
// }
// console.log(totalSalary);

// перебрать роботников в цикле

// сгенерить случаюную зп

// прибавить к тоталу

// лог

// Задачка на подсчет суммы чисел

const min = 6;
const max = 13;
let total = 0;

for (let i = min; i <= max; i += 1) {
  if (i % 2 !== 0) {
    console.log(`Не четное:`, i);
    continue;
  }
  console.log(`четное:`, i);
  total += i;
}

console.log(`общая сумма четных чисел ${total}`);
