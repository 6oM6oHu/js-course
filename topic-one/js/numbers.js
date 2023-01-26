// const message = "Zhuzhuna Chapodze";

// console.log(message.length);

const firstName = "Zhuzhuna";
const lastName = "Chapodze";
// const fullName = firstName + " " + lastName;

// console.log(fullName);

// -----------------------
// Гость x y поселяется в z номер q

// 1 - создать переменные х- имя -y фамилия
// 2 переменная отель
// 3 номер

// const max = 1;
// const min = 18;

// let freeRoom = Number(Math.round(Math.random() * (max - min) + min));
// let floor = "Какой этаж вам по душе? от первого до 11";
// floor = prompt(floor);

// console.log(freeRoom);
// const floorZero = "0";

// if (freeRoom < 10) {
//   freeRoom = "0" + freeRoom;
// }

// const room = floor + freeRoom;
// const type = "All VIP";

// const result = `Гость ${firstName} ${lastName} поселяется в ${room} номер ${type}`;
// console.log(result);

//  let brand = prompt("Введите бренд");
// let brand = "Samsung";
// brand = brand.toLowerCase();
// console.log(brand);
// console.log(brand.slice(1).toLocaleLowerCase());

// brand = brand[0] + brand.slice(1).toLocaleLowerCase();
// console.log(brand);

const blackListW1 = "спам";
const blackListW2 = "грудь";

const string1 = "Привет, я хочу отпрвить тебе спам, прими пожалуйста";
const string2 = "Самая большая Грудь у нас на сайте";
const string3 = "Реклама твоей будущей машины";

console.log(string1.toLocaleLowerCase().includes(blackListW1));
console.log(string1.toLocaleLowerCase().includes(blackListW2));

console.log(string2.toLocaleLowerCase().includes(blackListW1));
console.log(string2.toLocaleLowerCase().includes(blackListW2));

console.log(string3.toLocaleLowerCase().includes(blackListW1));
console.log(string3.toLocaleLowerCase().includes(blackListW2));
