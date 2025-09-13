// Exercise 2: Display Student Info

console.log("=== EXERCISE 2: DISPLAY STUDENT INFO ===\n");

// Function using destructuring in the parameter
function displayStudentInfo(objUser) {
    // Destructuring the parameter object
    const {first, last} = objUser;
    
    // Return the formatted string
    return `Your full name is ${first} ${last}`;
}

// Test the function
console.log("Function call:");
console.log("displayStudentInfo({first: 'Elie', last:'Schoppik'});");

console.log("\nOutput:");
const result = displayStudentInfo({first: 'Elie', last:'Schoppik'});
console.log(result);

console.log("\nExpected output:");
console.log("'Your full name is Elie Schoppik'");

// Alternative approach: Destructuring directly in the parameter
console.log("\n=== ALTERNATIVE APPROACH ===");
console.log("Destructuring directly in the function parameter:");

function displayStudentInfoAlt({first, last}) {
    return `Your full name is ${first} ${last}`;
}

console.log("Function with parameter destructuring:");
console.log("function displayStudentInfoAlt({first, last}) { ... }");

console.log("\nResult:");
const resultAlt = displayStudentInfoAlt({first: 'Elie', last:'Schoppik'});
console.log(resultAlt);

// Additional examples
console.log("\n=== ADDITIONAL EXAMPLES ===");

console.log("Testing with different names:");
console.log(displayStudentInfo({first: 'John', last: 'Doe'}));
console.log(displayStudentInfoAlt({first: 'Jane', last: 'Smith'}));

// Example with default values
console.log("\n=== BONUS: WITH DEFAULT VALUES ===");

function displayStudentInfoWithDefaults({first = 'Unknown', last = 'Student'} = {}) {
    return `Your full name is ${first} ${last}`;
}

console.log("With missing properties:");
console.log(displayStudentInfoWithDefaults({first: 'Alice'})); // Missing last name
console.log(displayStudentInfoWithDefaults({last: 'Johnson'})); // Missing first name
console.log(displayStudentInfoWithDefaults({})); // Missing both
console.log(displayStudentInfoWithDefaults()); // No object passed

console.log("\n=== EXPLANATION ===");
console.log("Destructuring in functions allows us to:");
console.log("1. Extract specific properties from object parameters");
console.log("2. Use those properties as variables directly");
console.log("3. Make code more readable and concise");
console.log("4. Set default values for missing properties");
