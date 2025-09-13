// Exercise 3: Analyzing

console.log("=== ANALYSIS OF CODE SNIPPETS ===\n");

// ------1------
console.log("------1------");
console.log("CODE:");
console.log(`const fruits = ["apple", "orange"];`);
console.log(`const vegetables = ["carrot", "potato"];`);
console.log(`const result = ['bread', ...vegetables, 'chicken', ...fruits];`);
console.log(`console.log(result);`);

console.log("\nPREDICTION:");
console.log("The spread operator (...) will expand the arrays inline.");
console.log("Expected output: ['bread', 'carrot', 'potato', 'chicken', 'apple', 'orange']");

console.log("\nACTUAL OUTPUT:");
const fruits = ["apple", "orange"];
const vegetables = ["carrot", "potato"];
const result = ['bread', ...vegetables, 'chicken', ...fruits];
console.log(result);

console.log("\nEXPLANATION:");
console.log("The spread operator (...) unpacks/expands array elements.");
console.log("...vegetables becomes 'carrot', 'potato'");
console.log("...fruits becomes 'apple', 'orange'");
console.log("All elements are combined into a single new array.\n");

// ------2------
console.log("------2------");
console.log("CODE:");
console.log(`const country = "USA";`);
console.log(`console.log([...country]);`);

console.log("\nPREDICTION:");
console.log("The spread operator will convert the string into individual characters.");
console.log("Expected output: ['U', 'S', 'A']");

console.log("\nACTUAL OUTPUT:");
const country = "USA";
console.log([...country]);

console.log("\nEXPLANATION:");
console.log("Strings are iterable in JavaScript.");
console.log("The spread operator treats each character as a separate element.");
console.log("The square brackets [] create a new array containing these characters.\n");

// ------Bonus------
console.log("------Bonus------");
console.log("CODE:");
console.log(`let newArray = [...[,,]];`);
console.log(`console.log(newArray);`);

console.log("\nPREDICTION:");
console.log("The array [,,] creates an array with 3 empty slots (sparse array).");
console.log("The spread operator will convert empty slots to undefined values.");
console.log("Expected output: [undefined, undefined, undefined]");

console.log("\nACTUAL OUTPUT:");
let newArray = [...[,,]];
console.log(newArray);

console.log("\nEXPLANATION:");
console.log("[,,] creates a sparse array with 3 empty slots (holes).");
console.log("When spread operator encounters holes, it converts them to undefined.");
console.log("The result is a dense array with undefined values.");

console.log("\n=== SUMMARY ===");
console.log("1. Spread operator (...) expands iterables (arrays, strings, etc.)");
console.log("2. It can combine multiple arrays into one");
console.log("3. It converts strings into arrays of characters");
console.log("4. It turns sparse array holes into undefined values");
