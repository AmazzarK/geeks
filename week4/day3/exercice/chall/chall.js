// Daily Challenge: Create Objects

console.log("=== DAILY CHALLENGE: CREATE OBJECTS ===\n");

// Create a class named Video
class Video {
    constructor(title, uploader, time) {
        this.title = title;
        this.uploader = uploader;
        this.time = time;
    }
    
    // Method that displays the watch message
    watch() {
        console.log(`${this.uploader} watched all ${this.time} seconds of ${this.title}!`);
    }
}

console.log("Video class created with constructor(title, uploader, time) and watch() method");

// Instantiate a new Video instance and call the watch() method
console.log("\n1. First Video Instance:");
const video1 = new Video("JavaScript Tutorial", "John Doe", 1800);
console.log("Created: new Video('JavaScript Tutorial', 'John Doe', 1800)");
video1.watch();

// Instantiate a second Video instance with different values
console.log("\n2. Second Video Instance:");
const video2 = new Video("CSS Flexbox Guide", "Jane Smith", 900);
console.log("Created: new Video('CSS Flexbox Guide', 'Jane Smith', 900)");
video2.watch();

// Bonus: Use an array to store data for five Video instances
console.log("\n=== BONUS: Array of Video Data ===");

const videoDataArray = [
    { title: "Python Basics", uploader: "Alice Johnson", time: 2400 },
    { title: "React Components", uploader: "Bob Wilson", time: 1620 },
    { title: "Node.js Express", uploader: "Carol Brown", time: 3000 },
    { title: "Database Design", uploader: "David Lee", time: 2700 },
    { title: "Git Commands", uploader: "Emma Davis", time: 1200 }
];

console.log("Array of video data created:");
console.log(videoDataArray);

// Bonus: Loop through the array to instantiate those instances
console.log("\n=== BONUS: Loop Through Array to Create Instances ===");

const videoInstances = [];

videoDataArray.forEach((videoData, index) => {
    const videoInstance = new Video(videoData.title, videoData.uploader, videoData.time);
    videoInstances.push(videoInstance);
    
    console.log(`\nVideo ${index + 1}:`);
    console.log(`Created: new Video('${videoData.title}', '${videoData.uploader}', ${videoData.time})`);
    videoInstance.watch();
});

console.log("\n=== ALL VIDEO INSTANCES CREATED ===");
console.log(`Total videos created: ${videoInstances.length}`);

// Additional demonstration: Show all video titles
console.log("\nAll video titles:");
videoInstances.forEach((video, index) => {
    console.log(`${index + 1}. ${video.title} (${video.time} seconds)`);
});

// Calculate total watch time
const totalWatchTime = videoInstances.reduce((total, video) => total + video.time, 0);
console.log(`\nTotal watch time: ${totalWatchTime} seconds (${Math.round(totalWatchTime / 60)} minutes)`);

console.log("\n=== CLASS STRUCTURE SUMMARY ===");
console.log("Video Class:");
console.log("- Constructor parameters: title (string), uploader (string), time (number)");
console.log("- Method: watch() - displays formatted message");
console.log("- Data structure used: Array of objects for storing video data");
console.log("- Loop method used: forEach() to create instances from array data");
