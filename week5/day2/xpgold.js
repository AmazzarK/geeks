// Exercise 1: Giphy API #2
// Fetch a random gif and display it on the page

async function fetchRandomGif() {
    const apiKey = "hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";
    const url = `https://api.giphy.com/v1/gifs/search?q=funny&rating=g&api_key=${apiKey}&limit=50`;
    
    try {
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        
        if (data.data && data.data.length > 0) {
            // Get a random gif from the results
            const randomIndex = Math.floor(Math.random() * data.data.length);
            const randomGif = data.data[randomIndex];
            
            // Create img element and append to page
            const img = document.createElement('img');
            img.src = randomGif.images.fixed_height.url;
            img.alt = randomGif.title;
            img.style.margin = "10px";
            document.body.appendChild(img);
            
            console.log("Random gif added to page:", randomGif.title);
        } else {
            console.log("No gifs found");
        }
        
    } catch (error) {
        console.error("Error fetching gif:", error);
    }
}

// Uncomment to run in browser
// fetchRandomGif();

// Exercise 2: Analyze #2
console.log("=== Exercise 2 Analysis ===");

/*
Analysis of the sequential code:

The outcome will be:
1. "==SEQUENTIAL START=="
2. "starting slow promise"
3. After 2 seconds: "slow promise is done"
4. "slow"
5. "starting fast promise" 
6. After 1 second: "fast promise is done"
7. "fast"

Total time: ~3 seconds (2 + 1)
The promises execute one after another because of await - each waits for the previous one to complete.
*/

let resolveAfter2Seconds = function () {
    console.log("starting slow promise");
    return new Promise(resolve => {
        setTimeout(function () {
            resolve("slow");
            console.log("slow promise is done");
        }, 2000);
    });
};

let resolveAfter1Second = function () {
    console.log("starting fast promise");
    return new Promise(resolve => {
        setTimeout(function () {
            resolve("fast");
            console.log("fast promise is done");
        }, 1000);
    });
};

let sequentialStart = async function () {
    console.log('==SEQUENTIAL START==');
    const slow = await resolveAfter2Seconds();
    console.log(slow);
    const fast = await resolveAfter1Second();
    console.log(fast);
}

// sequentialStart();

// Exercise 3: Analyze #3
console.log("\n=== Exercise 3 Analysis ===");

/*
Analysis of the concurrent code:

The outcome will be:
1. "==CONCURRENT START with await=="
2. "starting slow promise"
3. "starting fast promise"
4. After 1 second: "fast promise is done"
5. After 2 seconds total: "slow promise is done"
6. "slow"
7. "fast"

Total time: ~2 seconds (the longest promise)
Both promises start at the same time but we await them sequentially.
The fast promise finishes first but we wait for slow before logging.
*/

let concurrentStart = async function () {
    console.log('==CONCURRENT START with await==');
    const slow = resolveAfter2Seconds();
    const fast = resolveAfter1Second();
    console.log(await slow);
    console.log(await fast);
}

// setTimeout(concurrentStart, 4000);

// Exercise 4: Modify fetch with Async/Await
console.log("\n=== Exercise 4: Modified Fetch ===");

const urls = [
    "https://jsonplaceholder.typicode.com/users",
    "https://jsonplaceholder.typicode.com/posts", 
    "https://jsonplaceholder.typicode.com/albums"
];

const getData = async function() {
    try {
        const promises = urls.map(async (url) => {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return await response.json();
        });
        
        const [users, posts, albums] = await Promise.all(promises);
        
        console.log('users', users);
        console.log('posts', posts);
        console.log('albums', albums);
        
    } catch (error) {
        console.log('ooooooops');
        console.error('Error details:', error);
    }
}

// Test with correct URLs
getData();

// Test with incorrect URL to trigger catch
const urlsWithError = [
    "https://jsonplaceholder.typicode.com/users",
    "https://invalid-url-that-will-fail.com/posts",  // This will cause an error
    "https://jsonplaceholder.typicode.com/albums"
];

const getDataWithError = async function() {
    try {
        const promises = urlsWithError.map(async (url) => {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return await response.json();
        });
        
        const [users, posts, albums] = await Promise.all(promises);
        
        console.log('users', users);
        console.log('posts', posts);
        console.log('albums', albums);
        
    } catch (error) {
        console.log('ooooooops');
        console.error('Error details:', error);
    }
}

// Uncomment to test error handling
// setTimeout(() => getDataWithError(), 2000);

