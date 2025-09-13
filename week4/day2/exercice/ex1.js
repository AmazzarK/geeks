// Exercise 1: Colors

const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

// Part 1: Display colors in the specified format
console.log("=== Color Choices ===");
colors.forEach((color, index) => {
    console.log(`${index + 1}# choice is ${color}.`);
});

// Part 2: Check if "Violet" exists in the array
console.log("\n=== Checking for Violet ===");
const hasViolet = colors.some(color => color === "Violet");

if (hasViolet) {
    console.log("Yeah");
} else {
    console.log("No...");
}

// Alternative way using includes() method
console.log("\n=== Alternative check using includes() ===");
if (colors.includes("Violet")) {
    console.log("Yeah");
} else {
    console.log("No...");
}
