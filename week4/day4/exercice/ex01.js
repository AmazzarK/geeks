// Exercise 1: HTML Form - Explanation

console.log("=== EXERCISE 1: HTML FORM EXPLANATION ===\n");

console.log("HTML Form Structure:");
console.log("- Method: GET");
console.log("- Action: ex01.html (same file)");
console.log("- Input 1: text input for 'name'");
console.log("- Input 2: textarea for 'message'");
console.log("- Input 3: submit button 'Send'");

console.log("\n=== ANSWER: Where will the sent data appear? ===");
console.log("The sent data will appear in the URL (address bar) as query parameters!");

console.log("\nExplanation:");
console.log("1. GET method sends data via URL query string");
console.log("2. Data is appended after the '?' character");
console.log("3. Multiple parameters are separated by '&'");
console.log("4. Format: filename.html?parameter1=value1&parameter2=value2");

console.log("\nExample URLs after form submission:");
console.log("Input: Name='John', Message='Hello World'");
console.log("Result URL: ex01.html?name=John&message=Hello+World");

console.log("\nInput: Name='Alice Smith', Message='How are you?'");
console.log("Result URL: ex01.html?name=Alice+Smith&message=How+are+you%3F");

console.log("\n=== KEY CONCEPTS ===");
console.log("• GET vs POST methods:");
console.log("  - GET: Data visible in URL, limited size, good for searches");
console.log("  - POST: Data hidden in request body, larger size, good for sensitive data");

console.log("• URL Encoding:");
console.log("  - Spaces become '+' or '%20'");
console.log("  - Special characters are encoded (e.g., '?' becomes '%3F')");
console.log("  - This ensures URL safety and proper data transmission");

console.log("• Security Considerations:");
console.log("  - GET method exposes data in URL");
console.log("  - Visible in browser history, server logs, and can be shared");
console.log("  - Never use GET for passwords or sensitive information");

console.log("\n=== PRACTICAL DEMONSTRATION ===");
console.log("To test the form:");
console.log("1. Open ex01.html in a web browser");
console.log("2. Fill in the name and message fields");
console.log("3. Click 'Send' button");
console.log("4. Observe the URL change in the address bar");
console.log("5. The form data will be visible as query parameters");

// Simulate URL parsing (if this were in a browser environment)
function parseURLExample() {
    const exampleURL = "ex01.html?name=John&message=Hello+World";
    console.log(`\nParsing example URL: ${exampleURL}`);
    
    const urlParts = exampleURL.split('?');
    if (urlParts[1]) {
        const params = urlParts[1].split('&');
        console.log("Extracted parameters:");
        params.forEach(param => {
            const [key, value] = param.split('=');
            console.log(`  ${key}: ${decodeURIComponent(value.replace(/\+/g, ' '))}`);
        });
    }
}

parseURLExample();
