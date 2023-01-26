// Напиши фукнцию, slugify(string) которая получает  сроку  и возвращает URL-slug
// Строка состоит только из букв и пробелов

// const title = "This is my favorite alcohol";

// function slugify(string) {
//   return console.log(string.toLowerCase().split(" ").join("-"));
// }

// slugify(title);
// slugify("Come And get my love");

// Создаем массив

// function fn(a, b, ...args) {
//   console.log(`${a} ${b}`);
//   console.log(args);
// }

// fn(1, 2, 3, 4, 5, 6);
// fn("ds", 23, 21, "asd");

// Напиши фукнцию add для солежния произвольного колличества аргументов (чисел)
// операция ...rest

// function add(...rest) {
//   let total = 0;
//   for (const number of rest) {
//     total += number;
//   }
//   return total;
// }

// console.log(add(5, 4, 3));
// console.log(add(5, 4, 3, 2414, 23));

//Напиши функцию которая фильтрует цифры filterNumbers(array [, number1, ...])
//
function filterNumbers(array, ...args) {
  console.log(array);
  console.log(args);
  const uniqElements = [];

  for (const element of array) {
    if (args.includes(element)) {
      uniqElements.push(element);

      console.log(`${element} есть такое!`);
    }
  }

  return uniqElements;
}

console.log(filterNumbers([1, 2, 3, 6], 10, 2, 20, 402, 40, 6, 3));
