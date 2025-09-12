//ex08 -- juice bar
//part01

// Part I: Basic nested functions
function makeJuice(size) {
    // Inner function that receives 3 ingredients and displays the juice order
    function addIngredients(ingredient1, ingredient2, ingredient3) {
        const message = `The client wants a ${size} juice, containing ${ingredient1}, ${ingredient2}, ${ingredient3}`;
        document.body.innerHTML += `<p>${message}</p>`;
        console.log(message);
    }
    
    // Invoke the inner function ONCE inside the outer function
    addIngredients("apple", "banana", "orange");
}

// Invoke the outer function in the global scope
makeJuice("medium");

console.log("--- Part II ---");

// Part II: Enhanced version with ingredients array
function makeJuiceV2(size) {
    // Create an empty array named ingredients
    const ingredients = [];
    
    // Inner function that receives 3 ingredients and pushes them into the array
    function addIngredients(ingredient1, ingredient2, ingredient3) {
        ingredients.push(ingredient1, ingredient2, ingredient3);
    }
    
    // New inner function that displays the juice order
    function displayJuice() {
        const message = `The client wants a ${size} juice, containing ${ingredients.join(', ')}`;
        document.body.innerHTML += `<p>${message}</p>`;
        console.log(message);
    }
    
    // Invoke addIngredients function TWICE (for 6 ingredients total)
    addIngredients("strawberry", "mango", "pineapple");
    addIngredients("kiwi", "grape", "watermelon");
    
    // Invoke displayJuice function ONCE
    displayJuice();
}

// Invoke the makeJuiceV2 function in the global scope
makeJuiceV2("large");
