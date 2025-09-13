// Exercise 6: Challenges

console.log("=== EXERCISE 6: CHALLENGES ===\n");

// Challenge 1: Evaluate these (True or False)
console.log("CHALLENGE 1: Equality Evaluation\n");

console.log("Evaluating: [2] === [2]");
console.log("Result:", [2] === [2]);
console.log("Answer: FALSE");
console.log("Explanation: Arrays are objects, and objects are compared by reference, not by value.");
console.log("Each array literal creates a new object in memory, so they have different references.\n");

console.log("Evaluating: {} === {}");
console.log("Result:", {} === {});
console.log("Answer: FALSE");
console.log("Explanation: Objects are compared by reference, not by value.");
console.log("Each object literal creates a new object in memory, so they have different references.\n");

console.log("=".repeat(60) + "\n");

// Challenge 2: Object references
console.log("CHALLENGE 2: Object References\n");

console.log("Initial setup:");
const object1 = { number: 5 };
const object2 = object1;
const object3 = object2;
const object4 = { number: 5 };

console.log("const object1 = { number: 5 };");
console.log("const object2 = object1;");
console.log("const object3 = object2;");
console.log("const object4 = { number: 5 };");

console.log("\nAfter: object1.number = 4;");
object1.number = 4;

console.log("\nResults:");
console.log("object2.number =", object2.number);
console.log("object3.number =", object3.number);
console.log("object4.number =", object4.number);

console.log("\nExplanation:");
console.log("- object1, object2, and object3 all reference the SAME object in memory");
console.log("- When object1.number changes to 4, object2 and object3 see the same change");
console.log("- object4 is a DIFFERENT object with the same initial value, so it remains 5");
console.log("- object2.number = 4 (references same object as object1)");
console.log("- object3.number = 4 (references same object as object1)");
console.log("- object4.number = 5 (different object, unchanged)");

console.log("\n" + "=".repeat(60) + "\n");

// Challenge 3: Animal Class
console.log("CHALLENGE 3: Class Implementation\n");

// Create Animal class
class Animal {
    constructor(name, type, color) {
        this.name = name;
        this.type = type;
        this.color = color;
    }
}

console.log("Animal class created with attributes: name, type, color");

// Create Mammal class that extends Animal
class Mammal extends Animal {
    constructor(name, type, color) {
        super(name, type, color);
    }
    
    sound(animalSound) {
        return `${animalSound} I'm a ${this.type}, named ${this.name} and I'm ${this.color}`;
    }
}

console.log("Mammal class created extending Animal with sound() method");

// Create farmerCow object
const farmerCow = new Mammal("Lily", "cow", "brown and white");

console.log("\nfarmerCow object created:");
console.log("const farmerCow = new Mammal('Lily', 'cow', 'brown and white');");

console.log("\nCalling farmerCow.sound('Moooo'):");
const cowSound = farmerCow.sound("Moooo");
console.log(cowSound);

console.log("\nExpected output: 'Moooo I'm a cow, named Lily and I'm brown and white'");

// Additional examples
console.log("\n=== ADDITIONAL EXAMPLES ===");

const farmDog = new Mammal("Rex", "dog", "golden");
console.log("Farm dog:", farmDog.sound("Woof"));

const cat = new Mammal("Whiskers", "cat", "black");
console.log("Cat:", cat.sound("Meow"));

console.log("\n=== CLASS STRUCTURE SUMMARY ===");
console.log("Animal Class:");
console.log("- Attributes: name, type, color");
console.log("- Constructor: initializes the three attributes");

console.log("\nMammal Class:");
console.log("- Extends: Animal class");
console.log("- Inherits: name, type, color attributes");
console.log("- Method: sound(animalSound) - returns formatted string with animal details and sound");

console.log("\nfarmerCow Object:");
console.log("- Instance of: Mammal class");
console.log("- Properties: name='Lily', type='cow', color='brown and white'");
console.log("- Method call: sound('Moooo') returns the complete animal description");
