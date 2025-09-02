// Exercise 7 

const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];

const secretName = names.map(name => name[0]).sort().join("");
console.log(secretName); 