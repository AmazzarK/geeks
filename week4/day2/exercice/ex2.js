// Exercise 2: Colors #2

const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const ordinal = ["th", "st", "nd", "rd"];

console.log("=== Color Choices with Ordinal Numbers ===");

colors.forEach((color, index) => {
    const number = index + 1;
    
    // Determine the correct ordinal suffix using ternary operators
    const suffix = (number <= 3) ? ordinal[number] : ordinal[0];
    
    console.log(`${number}${suffix} choice is ${color}.`);
});

// Alternative more comprehensive approach for ordinal numbers
console.log("\n=== Alternative Approach (handles all ordinal rules) ===");

colors.forEach((color, index) => {
    const number = index + 1;
    
    // Function to get the correct ordinal suffix
    const getOrdinalSuffix = (num) => {
        // Special cases for 11th, 12th, 13th
        if (num >= 11 && num <= 13) {
            return ordinal[0]; // "th"
        }
        
        // Get the last digit
        const lastDigit = num % 10;
        
        // Use ternary operators to determine suffix
        return lastDigit === 1 ? ordinal[1] : // "st"
               lastDigit === 2 ? ordinal[2] : // "nd" 
               lastDigit === 3 ? ordinal[3] : // "rd"
               ordinal[0]; // "th"
    };
    
    const suffix = getOrdinalSuffix(number);
    console.log(`${number}${suffix} choice is ${color}.`);
});
