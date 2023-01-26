// let num = 0;

// // for (; num <= 10; num += 1) {
// //   //   console.log(num);
// //   if (num == 3) continue;
// //   console.log(`Я нашел `, num);
// // }

// while (num < 11) {
//   console.log(num);
//   num++;
// }
// function createArrayOfNumbers(min, max) {
//   let numbers = [];
//   // Change code below this line
//   for (let i = min; i <= max; i++) {
//     numbers.push(i);
//   }
//   // Change code above this line

//   return numbers;
// }

// console.log(createArrayOfNumbers(1, 3));

function filterArray(numbers, value) {
  // Change code below this line
  let newArray = [];
  for (const numb of numbers) {
    if (numb > value) {
      newArray.push(numb);
    }
    // console.log(newArray);
  }
  return newArray;
  // Change code above this line
}
console.log(filterArray([1, 2, 3, 4, 5], 3));

function checkFruit(fruit) {
  const fruits = ["apple", "plum", "pear", "orange"];

  return fruits.includes(fruit) ? true : false;
  // Change this line
}

console.log(checkFruit("plum"));

function getCommonElements(array1, array2) {
  // Change code below this line
  let commonNumb = [];
  // Change code above this line
  for (const numb of array1) {
    for (const sec of array2) {
      if (numb === sec) {
        commonNumb.push(numb);
      }
    }
  }

  return commonNumb;
}
console.log(getCommonElements([21, 11, 31], [21, 41]));
