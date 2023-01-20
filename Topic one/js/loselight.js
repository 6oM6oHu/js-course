// const fruits = ["apple", "plum", "pear", "orange"];

// const firstElement = fruits[0];
// const secondElement = fruits[1];
// const lastElement = fruits.at(-1);
// // Change code below this line

// console.log(firstElement);
// console.log(secondElement);
// console.log(lastElement);

// const fruitsTwo = ["apple", "plum", "pear", "orange"];

// // Write your code under this line

// fruitsTwo[1] = "peach";
// fruitsTwo[3] = "banana";

// console.log(fruitsTwo);

// const fruits = ["apple", "peach", "pear", "banana"];

// // Change code below this line
// const fruitsArrayLength = fruits.length;
// console.log(fruitsArrayLength);

// const fruits = ["apple", "peach", "pear", "banana"];

// // Change code below this line
// const lastElementIndex = fruits.length - 1;
// const lastElement = fruits[lastElementIndex];
// console.log(lastElement);

// t-9

// function getExtremeElements(array) {
//   //   const firstElement = [array[0]];
//   //   //   const secondElement = [array.lengt];
//   //   const secondElement = [array.pop()];
//   //   const newArray = firstElement.concat(secondElement);

//   //   //   newArray = newArray.split("");

//   //   console.log(newArray);

//   return console.log([array[0], array[array.length - 1]]);
// }

// getExtremeElements([1, 2, 3, 4, 5]);
// getExtremeElements(["Earth", "Mars", "Venus"]);
// getExtremeElements(["apple", "peach", "pear", "banana"]);

// function splitMessage(message, delimiter) {
//   let words = message.split(delimiter);
//   // Change code below this line
//   console.log(words);
//   // Change code above this line
//   return words;
// }
// splitMessage("Mango hurries to the train", " ");
// splitMessage("Mango", "");
// splitMessage("best_for_week", "_");

// function calculateEngravingPrice(message, pricePerWord) {
//   const totalPrice = message.split(" ").length * pricePerWord;
//   return totalPrice;
// }
// calculateEngravingPrice("JavaScript is in my blood", 10);
// calculateEngravingPrice("JavaScript is in my blood", 20);
// calculateEngravingPrice("Web-development is creative work", 40);

// function makeStringFromArray(array, delimiter) {
//   let string = array.join(delimiter);
//   // Change code below this line
//   console.log(string);
//   // Change code above this line
//   return string;
// }
// makeStringFromArray(["Mango", "hurries", "to", "the", "train"], " ");
// makeStringFromArray(["M", "a", "n", "g", "o"], "");
// makeStringFromArray(["top", "picks", "for", "you"], "_");

// function slugify(title) {
//   //   Change code below this line

//   let slugLink = title.toLowerCase().split(" ").join("-");
//   console.log(slugLink);
//   return slugLink;

//   //   // Change code above this line
// }
// slugify("Arrays for begginers");
// slugify("English for developer");
// slugify("Ten secrets of JavaScript");
// slugify("How to become a JUNIOR developer in TWO WEEKS");

// const fruits = ["apple", "plum", "pear", "orange", "banana"];

// // Change code below this line
// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, 4);
// let lastThreeEls = fruits.slice(2, 5);
// // lastThreeEls = fruits;

// console.log(firstTwoEls);
// console.log(nonExtremeEls);
// console.log(lastThreeEls);

// const oldClients = ["Mango", "Ajax", "Poly", "Kiwi"];
// const newClients = ["Peach", "Houston"];

// const allClients = oldClients.concat(newClients); // Change this line
// console.log(allClients);

function makeArray(firstArray, secondArray, maxLength) {
  // Change code below this line
  let newArray = [[firstArray] + [secondArray]].slice(" ");
  //   newArray = newArray.slice(" ");
  console.log(newArray);
  return newArray;
  // Change code above this line
}
makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3);
