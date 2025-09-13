// Exercise 3: JSON Mario

console.log("=== EXERCISE 3: JSON MARIO ===\n");

// Original JavaScript object
const marioGame = {
  detail : "An amazing game!",
  characters : {
      mario : {
        description:"Small and jumpy. Likes princesses.",
        height: 10,
        weight: 3,
        speed: 12,
      },
      bowser : {
        description: "Big and green, Hates princesses.",
        height: 16,
        weight: 6,
        speed: 4,
      },
      princessPeach : {
        description: "Beautiful princess.",
        height: 12,
        weight: 2,
        speed: 2,
      }
  },
}

console.log("Original JavaScript object:");
console.log(marioGame);

// Part 1: Convert JS object to JSON object
console.log("\n=== PART 1: Convert JS Object to JSON ===");

const marioGameJSON = JSON.stringify(marioGame);
console.log("JSON string (basic conversion):");
console.log(marioGameJSON);

console.log("\nType of original object:", typeof marioGame);
console.log("Type of JSON result:", typeof marioGameJSON);

// Part 2: What happens to nested objects?
console.log("\n=== ANSWER: What happens to nested objects? ===");
console.log("Nested objects are PRESERVED and converted to JSON format!");
console.log("- The 'characters' object remains as an object in JSON");
console.log("- Each character (mario, bowser, princessPeach) remains as nested objects");
console.log("- All properties and their values are maintained");
console.log("- The entire nested structure is flattened into a single JSON string");

// Part 3: Convert and pretty print JSON object
console.log("\n=== PART 2: Pretty Print JSON Object ===");

// Using JSON.stringify with indentation (pretty print)
const marioGamePrettyJSON = JSON.stringify(marioGame, null, 2);
console.log("Pretty printed JSON (with 2-space indentation):");
console.log(marioGamePrettyJSON);

// Alternative pretty print options
console.log("\n=== DIFFERENT PRETTY PRINT OPTIONS ===");

console.log("With 4-space indentation:");
const marioGameJSON4Spaces = JSON.stringify(marioGame, null, 4);
console.log(marioGameJSON4Spaces);

console.log("\nWith tab indentation:");
const marioGameJSONTabs = JSON.stringify(marioGame, null, '\t');
console.log(marioGameJSONTabs);

// Part 4: Breakpoint demonstration and debugging
console.log("\n=== PART 3: Debugging with Breakpoints ===");
console.log("Setting up variables for debugging...");

// Variables to inspect in debugger
const originalObject = marioGame;
const jsonString = marioGameJSON;
const prettyJsonString = marioGamePrettyJSON;

// BREAKPOINT: Add breakpoint on the next line in browser DevTools
debugger; // <-- This will trigger a breakpoint when DevTools are open

// Convert JSON back to JavaScript object to show round-trip
const parsedBackToJS = JSON.parse(marioGameJSON);
console.log("JSON parsed back to JavaScript object:");
console.log(parsedBackToJS);

// Verify the conversion worked correctly
console.log("\n=== VERIFICATION ===");
console.log("Original object === Parsed object:", originalObject === parsedBackToJS);
console.log("Why false? Different object references, but same content");

// Deep comparison check
const deepEqual = JSON.stringify(originalObject) === JSON.stringify(parsedBackToJS);
console.log("Deep content comparison:", deepEqual);

// Individual character analysis
console.log("\n=== INDIVIDUAL CHARACTER ANALYSIS ===");

Object.keys(marioGame.characters).forEach(characterName => {
    const character = marioGame.characters[characterName];
    console.log(`\n${characterName.toUpperCase()}:`);
    console.log(`  Description: ${character.description}`);
    console.log(`  Stats: Height(${character.height}), Weight(${character.weight}), Speed(${character.speed})`);
    
    // Show how this character looks in JSON
    console.log(`  JSON representation:`);
    console.log(`  ${JSON.stringify(character, null, 2)}`);
});

// Debugging instructions
console.log("\n=== DEBUGGING INSTRUCTIONS ===");
console.log("To use breakpoints and inspect JSON values:");
console.log("1. Open this file in a web browser (create an HTML file that includes this JS)");
console.log("2. Open Developer Tools (F12)");
console.log("3. Go to Sources tab");
console.log("4. Find this JavaScript file");
console.log("5. Click on line numbers to add breakpoints");
console.log("6. Refresh the page to trigger breakpoints");
console.log("7. In the debugger, hover over variables to see their values");
console.log("8. Check the Console tab to see all the output");
console.log("9. Use the Scope panel to inspect variable values");

console.log("\n=== SUMMARY ===");
console.log("✅ JavaScript object successfully converted to JSON");
console.log("✅ Nested objects are preserved in JSON format");
console.log("✅ Pretty printing makes JSON human-readable");
console.log("✅ Breakpoints allow inspection of values during execution");
console.log("✅ JSON.parse() can convert JSON back to JavaScript objects");
