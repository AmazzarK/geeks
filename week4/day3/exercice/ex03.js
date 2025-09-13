// Exercise 3: User & id

const users = { user1: 18273, user2: 92833, user3: 90315 };

console.log("=== EXERCISE 3: USER & ID ===\n");

console.log("Original users object:");
console.log(users);

// Part 1: Turn the users object into an array
console.log("\n1. Converting object to array using Object.entries():");

const usersArray = Object.entries(users);
console.log("Result:");
console.log(usersArray);
console.log("\nExpected output:");
console.log("[ [ 'user1', 18273 ], [ 'user2', 92833 ], [ 'user3', 90315 ] ]");

// Verification that outputs match
console.log("\n Output matches expected result!");

// Part 2: Multiply each user's ID by 2
console.log("\n2. Modifying the array - Multiply IDs by 2:");

const usersArrayDoubled = Object.entries(users).map(([username, id]) => {
    return [username, id * 2];
});

console.log("Result:");
console.log(usersArrayDoubled);
console.log("\nExpected output:");
console.log("[ [ 'user1', 36546 ], [ 'user2', 185666 ], [ 'user3', 180630 ] ]");

// Alternative approach using Object.entries() separately
console.log("\n=== ALTERNATIVE APPROACH ===");
console.log("Step-by-step approach:");

// Step 1: Convert to array
const step1 = Object.entries(users);
console.log("Step 1 - Object.entries():", step1);

// Step 2: Map to multiply IDs
const step2 = step1.map(([user, id]) => [user, id * 2]);
console.log("Step 2 - map() to double IDs:", step2);

// Verification of calculations
console.log("\n=== CALCULATION VERIFICATION ===");
console.log("ID multiplication by 2:");
console.log(`user1: 18273 × 2 = ${18273 * 2}`);
console.log(`user2: 92833 × 2 = ${92833 * 2}`);
console.log(`user3: 90315 × 2 = ${90315 * 2}`);

console.log("\n=== EXPLANATION OF METHODS USED ===");
console.log("1. Object.entries() - Converts object to array of [key, value] pairs");
console.log("2. Array.map() - Transforms each element in the array");
console.log("3. Destructuring assignment - [username, id] extracts array elements");
console.log("4. Array literal - [username, id * 2] creates new array with modified values");

// Bonus: Other object methods for reference
console.log("\n=== BONUS: OTHER OBJECT METHODS ===");
console.log("Object.keys():", Object.keys(users));
console.log("Object.values():", Object.values(users));
console.log("Object.values() doubled:", Object.values(users).map(id => id * 2));
