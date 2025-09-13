// Daily Challenge: Advanced Array Methods

const gameInfo = [
 {
   username: "john",
   team: "red",
   score: 5,
   items: ["ball", "book", "pen"]
 },
 {
   username: "becky",
   team: "blue",
   score: 10,
   items: ["tape", "backpack", "pen"]
 },
 {
   username: "susy",
   team: "red",
   score: 55,
   items: ["ball", "eraser", "pen"]
 },
 {
   username: "tyson",
   team: "green",
   score: 1,
   items: ["book", "pen"]
 },
];

console.log("=== DAILY CHALLENGE: ADVANCED ARRAY METHODS ===\n");

console.log("Original gameInfo array:");
console.log(gameInfo);

// 1. Create an array using forEach that contains all usernames with exclamation point
console.log("\n1. Using forEach - All usernames with exclamation point:");

const usernames = [];
gameInfo.forEach(player => {
    usernames.push(player.username + "!");
});

console.log("Usernames array:");
console.log(usernames);
console.log('Expected: ["john!", "becky!", "susy!", "tyson!"]');

// 2. Create an array using forEach that contains usernames of players with score > 5
console.log("\n2. Using forEach - Players with score bigger than 5:");

const winners = [];
gameInfo.forEach(player => {
    if (player.score > 5) {
        winners.push(player.username);
    }
});

console.log("Winners array:");
console.log(winners);
console.log('Expected: ["becky", "susy"]');

// 3. Find and display the total score of all users
console.log("\n3. Calculate total score of all users:");

let totalScore = 0;
gameInfo.forEach(player => {
    totalScore += player.score;
});

console.log(`Total score: ${totalScore}`);
console.log("Expected: 71");

// Verification of the calculation
console.log("\nScore breakdown:");
gameInfo.forEach(player => {
    console.log(`${player.username}: ${player.score}`);
});
console.log(`Sum: ${gameInfo.map(p => p.score).join(' + ')} = ${totalScore}`);

// Bonus: Alternative methods for comparison
console.log("\n=== BONUS: Alternative Methods ===");

// Alternative for task 1 using map()
const usernamesMap = gameInfo.map(player => player.username + "!");
console.log("Task 1 using map():", usernamesMap);

// Alternative for task 2 using filter() + map()
const winnersFilter = gameInfo
    .filter(player => player.score > 5)
    .map(player => player.username);
console.log("Task 2 using filter() + map():", winnersFilter);

// Alternative for task 3 using reduce()
const totalScoreReduce = gameInfo.reduce((total, player) => total + player.score, 0);
console.log("Task 3 using reduce():", totalScoreReduce);

console.log("\n=== SUMMARY ===");
console.log("✅ All tasks completed using forEach as requested");
console.log("✅ Alternative methods shown for educational comparison");
console.log("✅ All expected results achieved");
