// 🌟 Exercise 1 : List of people

const people = ["Greg", "Mary", "Devon", "James"];

// Part I 
// 1. Remove “Greg” 
people.shift();

// 2. Replace “James” with “Jason”.
people[people.indexOf("James")] = "Jason";

// 3. Add your name to the end of the people array.
people.push("Kaoutar"); 

// 4. Console.log Mary’s index.
console.log(people.indexOf("Mary"));

// 5. Make a copy of the people array using slice, excluding “Mary” and your name.
const peopleCopy = people.slice(1, people.length - 1);
console.log(peopleCopy);

// 6. Index of “Foo”
console.log(people.indexOf("Foo")); 

// 7. Variable last is the last element of the array
const last = people[people.length - 1];
console.log(last);

// Part II - Loops

// 1. Iterate and console.log each person
for (let person of people) {
  console.log(person);
}

// 2. Iterate and exit after logging “Devon”
for (let person of people) {
  console.log(person);
  if (person === "Devon") break;
}

