// Exercise 5: Dog class

console.log("=== EXERCISE 5: DOG CLASS EXTENSION ANALYSIS ===\n");

// Base Dog class
class Dog {
  constructor(name) {
    this.name = name;
  }
}

console.log("Base Dog class:");
console.log("class Dog {");
console.log("  constructor(name) {");
console.log("    this.name = name;");
console.log("  }");
console.log("}");

console.log("\n=== ANALYZING EXTENSION OPTIONS ===\n");

// Option 1 - INCORRECT
console.log("OPTION 1:");
console.log("class Labrador extends Dog {");
console.log("  constructor(name, size) {");
console.log("    this.size = size;");
console.log("  }");
console.log("};");

console.log("\nRESULT: WILL FAIL");
console.log("ERROR: ReferenceError - Must call super constructor before accessing 'this'");
console.log("EXPLANATION: When extending a class, you must call super() before using 'this'");

// Let's test this (commented out to avoid error)
// try {
//   class LabradorOption1 extends Dog {
//     constructor(name, size) {
//       this.size = size; // This will throw an error
//     }
//   }
// } catch (error) {
//   console.log("Error caught:", error.message);
// }

console.log("\n" + "=".repeat(50));

// Option 2 - CORRECT
console.log("\nOPTION 2:");
console.log("class Labrador extends Dog {");
console.log("  constructor(name, size) {");
console.log("    super(name);");
console.log("    this.size = size;");
console.log("  }");
console.log("};");

console.log("\nRESULT: WILL SUCCESS");
console.log("EXPLANATION: Calls super(name) first, then sets additional properties");

// Test Option 2
class LabradorOption2 extends Dog {
  constructor(name, size) {
    super(name);
    this.size = size;
  }
}

const lab2 = new LabradorOption2("Buddy", "Large");
console.log("Testing Option 2:");
console.log("new LabradorOption2('Buddy', 'Large'):", lab2);

console.log("\n" + "=".repeat(50));

// Option 3 - INCORRECT
console.log("\nOPTION 3:");
console.log("class Labrador extends Dog {");
console.log("  constructor(size) {");
console.log("    super(name);");
console.log("    this.size = size;");
console.log("  }");
console.log("};");

console.log("\nRESULT: WILL FAIL");
console.log("ERROR: ReferenceError - 'name' is not defined");
console.log("EXPLANATION: 'name' parameter is missing from constructor, but used in super()");

console.log("\n" + "=".repeat(50));

// Option 4 - INCORRECT
console.log("\nOPTION 4:");
console.log("class Labrador extends Dog {");
console.log("  constructor(name, size) {");
console.log("    this.name = name;");
console.log("    this.size = size;");
console.log("  }");
console.log("};");

console.log("\nRESULT: WILL FAIL");
console.log("ERROR: ReferenceError - Must call super constructor before accessing 'this'");
console.log("EXPLANATION: Tries to use 'this' before calling super()");

console.log("\n" + "=".repeat(50));

console.log("\n=== SUMMARY ===");
console.log("OPTION 2 is the ONLY CORRECT option");
console.log("\nRules for Class Extension:");
console.log("1. When extending a class, the child constructor MUST call super()");
console.log("2. super() must be called BEFORE using 'this'");
console.log("3. super() should receive the required parameters for parent constructor");
console.log("4. All parameters used in super() must be available in child constructor");

console.log("\nWhy Option 2 works:");
console.log("- Has both 'name' and 'size' parameters");
console.log("- Calls super(name) first to initialize parent class");
console.log("- Then sets additional property this.size");
console.log("- Follows proper inheritance rules");

console.log("\nWhy others fail:");
console.log("- Option 1: Uses 'this' before super()");
console.log("- Option 3: 'name' parameter is missing but used in super()");  
console.log("- Option 4: Uses 'this' before super()");

console.log("\n=== CORRECT USAGE EXAMPLE ===");
console.log("const myLabrador = new LabradorOption2('Rex', 'Medium');");
console.log("Result:", new LabradorOption2('Rex', 'Medium'));
