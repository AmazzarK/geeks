// Exercise 4: Employees

const users = [
    { firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
    { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
    { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
    { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
    { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
    { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
    { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor' }
];

console.log("=== EXERCISE 4: EMPLOYEES - SPECIFIC REQUIREMENTS ===\n");

// 1. Using map() method to create welcome messages array
console.log("1. Using map() method - Welcome Messages:");
const welcomeStudents = users.map(user => `Hello ${user.firstName}`);
console.log(welcomeStudents);
console.log("\nExpected format:");
console.log('["Hello Bradley", "Hello Chloe", "Hello Jonathan", "Hello Michael", "Hello Robert", "Hello Wes", "Hello Zach"]');

// 2. Using filter() method - Full Stack Residents only
console.log("\n2. Using filter() method - Full Stack Residents only:");
const fullStackResidents = users.filter(user => user.role === 'Full Stack Resident');
console.log("Full Stack Residents array:");
console.log(fullStackResidents);

console.log("\nFull Stack Residents names:");
fullStackResidents.forEach(user => {
    console.log(`- ${user.firstName} ${user.lastName}`);
});

// 3. Bonus: Chain filter() with map() - Get lastName of Full Stack Residents only
console.log("\n3. Bonus - Chaining filter() and map() methods:");
console.log("Getting only the lastName of Full Stack Residents:");

const fullStackResidentsLastNames = users
    .filter(user => user.role === 'Full Stack Resident')
    .map(user => user.lastName);

console.log("Last names of Full Stack Residents:");
console.log(fullStackResidentsLastNames);
console.log("\nExpected: ['Bouley', 'Alnaji', 'Hajek']");

// Additional demonstration of method chaining
console.log("\n--- Method Chaining Explanation ---");
console.log("Step 1 - Filter: Keep only Full Stack Residents");
console.log("Step 2 - Map: Extract only the lastName property");
console.log("Result: Array containing only last names of Full Stack Residents");
