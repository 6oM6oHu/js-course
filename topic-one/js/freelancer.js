// splice

// let arrayOne = ["Serhii", "Zhuzhuna", "Tetiana", "Anna", "Petya"];
// console.log(arrayOne);
// arrayOne.splice(1, 1); // удаление элемента с первой позиции (кол-во элементов 1)
// console.log(arrayOne);

// let arrayTwo = ["Serhii", "Zhuzhuna", "Tetiana", "Anna", "Petya"];
// console.log(arrayTwo);
// arrayTwo.splice(3, 0, "Кармен"); //Добавляет элемент, перед 3-м индексов
// console.log(arrayTwo);

// let arrayThree = ["Serhii", "Zhuzhuna", "Tetiana", "Anna", "Petya"];
// console.log(arrayThree);
// arrayThree.splice(3, 0, "Саша", "Аргон");
// console.log(arrayThree);

// let arrayFour = ["Serhii", "Zhuzhuna", "Tetiana", "Anna", "Petya"];
// console.log(arrayFour);
// arrayFour.splice(-1, 1);
// console.log(arrayFour);

// SLISE

// let arrayFive = ["Serhii", "Zhuzhuna", "Tetiana", "Anna", "Petya"];
// // console.table(arrayFive);
// let newArrayFive = arrayFive.slice(0, 4);
// // console.table(newArrayFive);

// let arrayFour = ["Serhii", "Zhuzhuna", "Tetiana", "Anna", "Petya"];
// console.table(arrayFour);
// let newArrayFour = arrayFour.slice(-5, 4);
// console.table(newArrayFour);

// let arraySix = ["Serhii", "Zhuzhuna", "Tetiana", "Anna", "Petya"];
// let result = arraySix.map(function (item, index, array) {
//   return item;
// });

// console.table(result);

let arrayNubm = [1, 4, 6, 7, 8];
let reduceValueOne = arrayNubm.reduce(function (
  previousValue,
  item,
  index,
  array
) {
  return item + previousValue;
},
0);

console.table(reduceValueOne);

const friends = [
  { name: "Kirirl", online: true },
  { name: "Pavel", online: false },
  { name: "Oleg", online: true },
  { name: "Helena", online: false },
];

// const findFriendsByName = function (allFriends, friendName) {
//   let friendOnline = [];

//   for (const friend of friends) {
//     console.log(friend.name);
//     if (friend.online) {
//       friendOnline.push(friend);
//     }
//   }
//   return friendOnline;
// };

// console.table(findFriendsByName(friends));

const getFriendsByStatus = function (allFriends) {
  const friendsByStatus = {
    online: [],
    offline: [],
  };
  for (const friend of allFriends) {
    // console.log(friend.name);
    if (friend.online) {
      friendsByStatus.online.push(friend);
      continue;
    }
    friendsByStatus.offline.push(friend);
  }
  return friendsByStatus;
};

console.log(getFriendsByStatus(friends));
