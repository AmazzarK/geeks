// Daily Challenge: Pass By Value & Pass By Reference

let client = "John";

const groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        paid : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}

// Arrow function that displays the 3 fruits using forEach
const displayGroceries = () => {
    console.log("Fruits in groceries:");
    groceries.fruits.forEach(fruit => {
        console.log(fruit);
    });
}

// Arrow function to demonstrate cloning behavior
const cloneGroceries = () => {
    console.log("\n--- Inside cloneGroceries function ---");
    
    // Create a copy of the client variable (Pass by Value)
    let user = client;
    console.log(`Initial user: ${user}`);
    console.log(`Initial client: ${client}`);
    
    // Change the client variable
    client = "Betty";
    console.log(`After changing client to "Betty":`);
    console.log(`user: ${user}`);
    console.log(`client: ${client}`);
    console.log("ANSWER: We do NOT see the modification in the user variable.");
    console.log("WHY: Primitive values (strings) are passed by VALUE, so user gets a copy of the original value.");
    
    console.log("\n--- Object Reference Test ---");
    
    // Create a variable that references the groceries object (Pass by Reference)
    let shopping = groceries;
    console.log(`Initial totalPrice in groceries: ${groceries.totalPrice}`);
    console.log(`Initial totalPrice in shopping: ${shopping.totalPrice}`);
    
    // Change the totalPrice in groceries
    groceries.totalPrice = "35$";
    console.log(`After changing groceries.totalPrice to "35$":`);
    console.log(`groceries.totalPrice: ${groceries.totalPrice}`);
    console.log(`shopping.totalPrice: ${shopping.totalPrice}`);
    console.log("ANSWER: We DO see the modification in the shopping object.");
    console.log("WHY: Objects are passed by REFERENCE, so shopping points to the same object as groceries.");
    
    console.log("\n--- Nested Object Reference Test ---");
    
    console.log(`Initial paid status in groceries: ${groceries.other.paid}`);
    console.log(`Initial paid status in shopping: ${shopping.other.paid}`);
    
    // Change the paid value in the nested object
    groceries.other.paid = false;
    console.log(`After changing groceries.other.paid to false:`);
    console.log(`groceries.other.paid: ${groceries.other.paid}`);
    console.log(`shopping.other.paid: ${shopping.other.paid}`);
    console.log("ANSWER: We DO see the modification in the shopping object.");
    console.log("WHY: Nested objects are also passed by REFERENCE, so both variables point to the same nested object.");
}

// Display the fruits
console.log("=== DISPLAYING GROCERIES ===");
displayGroceries();

// Invoke the cloneGroceries function
console.log("\n=== CLONING GROCERIES TEST ===");
cloneGroceries();

// Final state check
console.log("\n=== FINAL STATE ===");
console.log(`Final client value: ${client}`);
console.log(`Final groceries.totalPrice: ${groceries.totalPrice}`);
console.log(`Final groceries.other.paid: ${groceries.other.paid}`);
