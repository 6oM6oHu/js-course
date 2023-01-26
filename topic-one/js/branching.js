if (1) {
  console.log(`не покатит`);
} else {
  console.log(`покатит`);
}

const salary = 4000;

if (salary < 500) {
  console.log("Маловато");
} else if (salary > 1000 && salary < 1500) {
  console.log("Норм");
} else if (salary > 2000 && salary < 3000) {
  console.log("Ты богач");
} else {
  console.log("хз");
}

const balance = -2000;

// let message;

const message = balance >= 0 ? "Позитивный баланс" : "Негативный баланс";

console.log(message);
