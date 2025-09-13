// Exercise 1: Location

console.log("=== EXERCISE 1: LOCATION - DESTRUCTURING ANALYSIS ===\n");

// Code to analyze:
const person = {
    name: 'John Doe',
    age: 25,
    location: {
        country: 'Canada',
        city: 'Vancouver',
        coordinates: [49.2827, -123.1207]
    }
}

const {name, location: {country, city, coordinates: [lat, lng]}} = person;

console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);

console.log("\n=== ANALYSIS ===");

console.log("PREDICTED OUTPUT:");
console.log("I am John Doe from Vancouver, Canada. Latitude(49.2827), Longitude(-123.1207)");

console.log("\n=== DESTRUCTURING BREAKDOWN ===");

console.log("1. Object Destructuring:");
console.log("   - Extract 'name' from person object");
console.log("   - name = 'John Doe'");

console.log("\n2. Nested Object Destructuring:");
console.log("   - Extract properties from person.location object");
console.log("   - country = 'Canada'");
console.log("   - city = 'Vancouver'");

console.log("\n3. Array Destructuring within Object Destructuring:");
console.log("   - Extract elements from person.location.coordinates array");
console.log("   - coordinates: [lat, lng] destructures the array [49.2827, -123.1207]");
console.log("   - lat = 49.2827 (first element)");
console.log("   - lng = -123.1207 (second element)");

console.log("\n=== STEP-BY-STEP EXPLANATION ===");

console.log("The destructuring assignment:");
console.log("const {name, location: {country, city, coordinates: [lat, lng]}} = person;");
console.log("\nBreaks down as:");
console.log("1. name ← person.name");
console.log("2. country ← person.location.country");
console.log("3. city ← person.location.city");
console.log("4. lat ← person.location.coordinates[0]");
console.log("5. lng ← person.location.coordinates[1]");

console.log("\n=== VARIABLE VALUES ===");
console.log(`name: "${name}"`);
console.log(`country: "${country}"`);
console.log(`city: "${city}"`);
console.log(`lat: ${lat}`);
console.log(`lng: ${lng}`);

console.log("\n=== FINAL OUTPUT ===");
console.log("The console.log statement will output:");
console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);

console.log("\n=== KEY CONCEPTS DEMONSTRATED ===");
console.log("✅ Object Destructuring - Extract properties from objects");
console.log("✅ Nested Destructuring - Extract from nested objects");
console.log("✅ Array Destructuring - Extract elements from arrays");
console.log("✅ Renaming in Destructuring - coordinates: [lat, lng] renames array elements");
console.log("✅ Template Literals - Using ${} for variable interpolation");
