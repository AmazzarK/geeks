// Exercise 5 : 

const family = {
  father: "Ali",
  mother: "Fatima",
  son: "Omar",
  daughter: "Sara"
};


for (let key in family) {
  console.log("Key:", key);
}


for (let key in family) {
  console.log("Value:", family[key]);
}
