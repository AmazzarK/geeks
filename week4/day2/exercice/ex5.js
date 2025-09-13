// Exercise 5: Star Wars

const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

console.log("=== EXERCISE 5: STAR WARS ===\n");

console.log("Original array:");
console.log(epic);

// Using reduce() method to combine all elements into a single string
console.log("\nUsing reduce() method to combine into a single string:");

const epicString = epic.reduce((accumulator, currentValue) => {
    return accumulator + ' ' + currentValue;
});

console.log("Result:");
console.log(epicString);

// Alternative approach with cleaner output (removing extra space at beginning)
console.log("\nAlternative approach (cleaner output):");

const epicStringClean = epic.reduce((accumulator, currentValue, index) => {
    return index === 0 ? currentValue : accumulator + ' ' + currentValue;
});

console.log("Result:");
console.log(epicStringClean);

// Another approach using reduce with initial value
console.log("\nUsing reduce with initial empty string:");

const epicStringWithInitial = epic.reduce((accumulator, currentValue) => {
    return accumulator + (accumulator ? ' ' : '') + currentValue;
}, '');

console.log("Result:");
console.log(epicStringWithInitial);

// Bonus: Comparison with join() method
console.log("\n=== BONUS: Comparison with join() method ===");
const epicStringJoin = epic.join(' ');
console.log("Using join(' '):");
console.log(epicStringJoin);

console.log("\n=== EXPLANATION ===");
console.log("reduce() method explanation:");
console.log("- Takes a callback function with accumulator and currentValue parameters");
console.log("- Accumulator stores the running total/result");
console.log("- CurrentValue is the current array element being processed");
console.log("- Returns a single value after processing all elements");
console.log("\nStep by step process:");
console.log("1. 'a' + ' ' + 'long' = 'a long'");
console.log("2. 'a long' + ' ' + 'time' = 'a long time'");
console.log("3. 'a long time' + ' ' + 'ago' = 'a long time ago'");
console.log("...and so on until all elements are combined");
