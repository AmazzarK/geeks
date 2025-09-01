// 🌟 Exercise 3 : 

let num;
do {
  num = prompt("Enter a number (>= 10):");
  num = Number(num);
} while (typeof num === "number" && num < 10);


