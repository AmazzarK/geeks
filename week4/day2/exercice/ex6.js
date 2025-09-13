// Exercise 6: Employees #2

const students = [
    {name: "Ray", course: "Computer Science", isPassed: true}, 
    {name: "Liam", course: "Computer Science", isPassed: false}, 
    {name: "Jenner", course: "Information Technology", isPassed: true}, 
    {name: "Marco", course: "Robotics", isPassed: true}, 
    {name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
    {name: "Jamie", course: "Big Data", isPassed: false}
];

console.log("=== EXERCISE 6: EMPLOYEES #2 ===\n");

console.log("Original students array:");
console.log(students);

// Using filter() method to create a new array containing students that passed
console.log("\n1. Using filter() method - Students who passed:");
const passedStudents = students.filter(student => student.isPassed === true);

console.log("Students who passed the course:");
console.log(passedStudents);

console.log("\nPassed students names and courses:");
passedStudents.forEach(student => {
    console.log(`- ${student.name} (${student.course})`);
});

// Bonus: Chain filter() with forEach() to congratulate students
console.log("\n=== BONUS: Congratulations Messages ===");
console.log("Chaining filter() with forEach() to congratulate passed students:\n");

students
    .filter(student => student.isPassed === true)
    .forEach(student => {
        console.log(`Good job ${student.name}, you passed the course in ${student.course}`);
    });

// Additional demonstration
console.log("\n=== SUMMARY ===");
console.log(`Total students: ${students.length}`);
console.log(`Students who passed: ${passedStudents.length}`);
console.log(`Pass rate: ${((passedStudents.length / students.length) * 100).toFixed(1)}%`);
