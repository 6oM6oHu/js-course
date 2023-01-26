const subscription = "LOG";
let access = subscription === "pro" || subscription === "VIP";

// if (subscription === "pro" || subscription === "VIP") {
//   access = true;
// } else {
//   access = false;
// }

console.log(`Доступ в группу ${access}`);
