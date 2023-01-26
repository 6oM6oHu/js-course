let monthSalary = "Какая месячная зарплата сотрудника?";

let yearsSalary = Number(prompt(monthSalary));
console.log(yearsSalary);
console.log("Умножаю данную цифру  на 12 месяцев");
yearsSalary = yearsSalary * 12;
console.log(`Годавая зарплата сотрудника составляет ${yearsSalary}`);

let procent = "Какой % от этой суммы получает ваша компания?";
procent = Number(prompt(procent));
console.log(`Процент компании составляет ${procent}`);
procent = procent / 100;

let resultCompany = Number(parseInt(yearsSalary * procent));
console.log(`Сумма прибыли компании ${resultCompany}`);

let yourProcent = "Какой ваш % от закрытия позиции";
yourProcent = Number(prompt(yourProcent));
console.log(`Ваш процент составляет ${yourProcent}`);

yourProcent = yourProcent / 100;

let yourSalary = Number(resultCompany * yourProcent);
console.log(`Оплата за эту позицию составит ${yourSalary}`);
