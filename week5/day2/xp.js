// Exercise 1: Giphy API
// Retrieve data from Giphy API for "hilarious" gifs
console.log("=== Exercise 1: Giphy API ===");

const giphyUrl = "https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";

fetch(giphyUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    console.log("Exercise 1 - Hilarious gifs data:", data);
  })
  .catch(error => {
    console.error("Exercise 1 - Error fetching data:", error);
  });

// Exercise 2: Giphy API - 10 gifs about "sun" starting at position 2
console.log("\n=== Exercise 2: Giphy API - Sun gifs ===");

const sunGifsUrl = "https://api.giphy.com/v1/gifs/search?q=sun&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My&limit=10&offset=2";

fetch(sunGifsUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    console.log("Exercise 2 - Sun gifs data:", data);
  })
  .catch(error => {
    console.error("Exercise 2 - Error fetching data:", error);
  });

// Exercise 3: Async function for Star Wars API
console.log("\n=== Exercise 3: Async function ===");

async function getStarWarsShip() {
  try {
    const response = await fetch("https://www.swapi.tech/api/starships/9/");
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const objectStarWars = await response.json();
    console.log("Exercise 3 - Star Wars ship data:", objectStarWars.result);
  } catch (error) {
    console.error("Exercise 3 - Error fetching Star Wars data:", error);
  }
}

getStarWarsShip();

// Exercise 4: Analyze the code
console.log("\n=== Exercise 4: Code Analysis ===");

/*
Analysis of the provided code:

function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}

async function asyncCall() {
    console.log('calling');
    let result = await resolveAfter2Seconds();
    console.log(result);
}

asyncCall();

Expected outcome:
1. "calling" will be logged immediately
2. The function will wait 2 seconds (due to setTimeout)
3. After 2 seconds, "resolved" will be logged

The sequence will be:
- "calling" (immediately)
- "resolved" (after 2 seconds)

The await keyword pauses the execution of asyncCall() until the Promise returned by resolveAfter2Seconds() resolves.
*/

function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}

async function asyncCall() {
    console.log('calling');
    let result = await resolveAfter2Seconds();
    console.log(result);
}

console.log("Exercise 4 - Running the analyzed code:");
asyncCall();
