// Daily Challenge: HTTP, Forms, and JSON

console.log("=== DAILY CHALLENGE: HTTP, FORMS, AND JSON ===\n");

// This JavaScript will be used with an HTML form
// The HTML form should have inputs for name and lastName

document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM loaded - Setting up form event listeners");
    
    // Get form elements
    const form = document.getElementById('userForm');
    const nameInput = document.getElementById('name');
    const lastNameInput = document.getElementById('lastName');
    const outputDiv = document.getElementById('output');
    
    // Prevent default form submission and handle it with JavaScript
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent page reload
        console.log("Form submitted!");
        
        // Retrieve data from inputs
        const userData = {
            name: nameInput.value.trim(),
            lastName: lastNameInput.value.trim()
        };
        
        console.log("Retrieved data:", userData);
        
        // Convert to JSON string
        const jsonString = JSON.stringify(userData);
        console.log("JSON string:", jsonString);
        
        // Pretty print JSON for better readability
        const prettyJsonString = JSON.stringify(userData, null, 2);
        console.log("Pretty JSON string:", prettyJsonString);
        
        // Append JSON to DOM
        appendJsonToDom(jsonString, prettyJsonString);
        
        // Log the process
        logFormSubmissionProcess(userData, jsonString);
    });
    
    function appendJsonToDom(jsonString, prettyJsonString) {
        // Create a new div element for this submission
        const resultDiv = document.createElement('div');
        resultDiv.className = 'json-result';
        
        // Add timestamp
        const timestamp = new Date().toLocaleTimeString();
        
        resultDiv.innerHTML = `
            <div class="submission-header">
                <h3>Form Submission - ${timestamp}</h3>
            </div>
            <div class="json-display">
                <h4>JSON Output:</h4>
                <pre class="json-code">${prettyJsonString}</pre>
                <p><strong>Raw JSON String:</strong> <code>${jsonString}</code></p>
            </div>
        `;
        
        // Append to output div (most recent first)
        outputDiv.insertBefore(resultDiv, outputDiv.firstChild);
        
        // Add visual feedback
        resultDiv.style.animation = 'fadeIn 0.5s ease-in';
        
        console.log("JSON appended to DOM successfully");
    }
    
    function logFormSubmissionProcess(userData, jsonString) {
        console.log("\n=== FORM SUBMISSION PROCESS ===");
        console.log("1. Form submit event triggered");
        console.log("2. preventDefault() called to stop page reload");
        console.log("3. Input values retrieved:");
        console.log("   - Name:", userData.name);
        console.log("   - Last Name:", userData.lastName);
        console.log("4. Data converted to JavaScript object");
        console.log("5. Object converted to JSON string:", jsonString);
        console.log("6. JSON string appended to DOM");
        console.log("7. Process completed successfully");
    }
    
    // Additional utility functions for demonstration
    function clearOutput() {
        outputDiv.innerHTML = '';
        console.log("Output cleared");
    }
    
    function validateForm() {
        const name = nameInput.value.trim();
        const lastName = lastNameInput.value.trim();
        
        if (!name || !lastName) {
            alert('Please fill in both name and last name fields');
            return false;
        }
        return true;
    }
    
    // Add clear button functionality if it exists
    const clearButton = document.getElementById('clearButton');
    if (clearButton) {
        clearButton.addEventListener('click', clearOutput);
    }
    
    // Demonstrate HTTP concepts
    console.log("\n=== HTTP CONCEPTS DEMONSTRATED ===");
    console.log("• Form Handling: Intercepting form submission");
    console.log("• Data Processing: Converting form data to JSON");
    console.log("• DOM Manipulation: Adding content dynamically");
    console.log("• Event Prevention: Using preventDefault() to control form behavior");
    
    // Demonstrate JSON concepts
    console.log("\n=== JSON CONCEPTS DEMONSTRATED ===");
    console.log("• Object to JSON: Using JSON.stringify()");
    console.log("• Pretty Printing: JSON.stringify() with indentation");
    console.log("• Data Structure: Converting form inputs to structured data");
    console.log("• Display Format: Showing JSON in readable format");
});

// Example of how the data flow works
console.log("\n=== DATA FLOW EXAMPLE ===");
console.log("Input: name='John', lastName='Doe'");
console.log("JavaScript Object: { name: 'John', lastName: 'Doe' }");
console.log("JSON String: '{\"name\":\"John\",\"lastName\":\"Doe\"}'");
console.log("Pretty JSON:");
console.log(JSON.stringify({ name: 'John', lastName: 'Doe' }, null, 2));

// HTTP method information
console.log("\n=== HTTP METHOD CONCEPTS ===");
console.log("This form demonstrates client-side processing, but could use:");
console.log("• GET method: Data in URL parameters (visible)");
console.log("• POST method: Data in request body (hidden)");
console.log("• Current approach: JavaScript processing (no server request)");
