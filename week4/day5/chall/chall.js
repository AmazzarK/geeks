/**
 * ANAGRAM CHECKER CHALLENGE
 * ========================
 * 
 * What You Will Learn:
 * - Functions
 * - Array methods
 * - String manipulation
 * 
 * Challenge: Create a function that checks if two strings are anagrams
 * 
 * What is an anagram?
 * An anagram is another word or phrase formed by rearranging letters of the first word or phrase.
 * 
 * Examples:
 * - "Astronomer" is an anagram of "Moon starer"
 * - "School master" is an anagram of "The classroom"
 * - "The Morse Code" is an anagram of "Here come dots"
 */

// =======================================
// SOLUTION 1: Using Array Sort Method
// =======================================

/**
 * Checks if two strings are anagrams using array sorting
 * @param {string} str1 - First string
 * @param {string} str2 - Second string
 * @returns {boolean} - True if strings are anagrams, false otherwise
 */
function isAnagram(str1, str2) {
    // Helper function to normalize strings
    const normalizeString = (str) => {
        return str
            .trim()                    // Remove whitespace
            .toLowerCase()             // Convert to lowercase
            .replace(/\s+/g, '')      // Remove all spaces
            .split('')                // Convert to array
            .sort()                   // Sort alphabetically
            .join('');                // Join back to string
    };
    
    // Compare normalized strings
    return normalizeString(str1) === normalizeString(str2);
}

// =======================================
// SOLUTION 2: Using Character Frequency Count
// =======================================

/**
 * Checks if two strings are anagrams using character frequency counting
 * @param {string} str1 - First string
 * @param {string} str2 - Second string
 * @returns {boolean} - True if strings are anagrams, false otherwise
 */
function isAnagramFrequency(str1, str2) {
    // Helper function to count character frequencies
    const getCharFrequency = (str) => {
        const frequency = {};
        const normalized = str.trim().toLowerCase().replace(/\s+/g, '');
        
        for (const char of normalized) {
            frequency[char] = (frequency[char] || 0) + 1;
        }
        
        return frequency;
    };
    
    const freq1 = getCharFrequency(str1);
    const freq2 = getCharFrequency(str2);
    
    // Check if both have same number of unique characters
    const keys1 = Object.keys(freq1);
    const keys2 = Object.keys(freq2);
    
    if (keys1.length !== keys2.length) {
        return false;
    }
    
    // Check if all characters have same frequency
    return keys1.every(char => freq1[char] === freq2[char]);
}

// =======================================
// SOLUTION 3: Using Array Methods (forEach, filter, every)
// =======================================

/**
 * Checks if two strings are anagrams using advanced array methods
 * @param {string} str1 - First string
 * @param {string} str2 - Second string
 * @returns {boolean} - True if strings are anagrams, false otherwise
 */
function isAnagramAdvanced(str1, str2) {
    // Normalize both strings
    const normalize = (str) => str.trim().toLowerCase().replace(/\s+/g, '');
    const norm1 = normalize(str1);
    const norm2 = normalize(str2);
    
    // Quick length check
    if (norm1.length !== norm2.length) {
        return false;
    }
    
    // Convert to arrays
    const arr1 = norm1.split('');
    const arr2 = norm2.split('');
    
    // Check if every character in arr1 exists in arr2 with same frequency
    return arr1.every(char => {
        const count1 = arr1.filter(c => c === char).length;
        const count2 = arr2.filter(c => c === char).length;
        return count1 === count2;
    });
}

// =======================================
// TEST CASES
// =======================================

console.log("ANAGRAM CHECKER TESTS");
console.log("========================");

// Test cases with expected results
const testCases = [
    // Basic anagrams
    ["listen", "silent", true],
    ["elbow", "below", true],
    ["study", "dusty", true],
    
    // Phrase anagrams (with spaces)
    ["Astronomer", "Moon starer", true],
    ["School master", "The classroom", true],
    ["The Morse Code", "Here come dots", true],
    
    // Case sensitivity tests
    ["Listen", "Silent", true],
    ["ELBOW", "below", true],
    
    // Non-anagrams
    ["hello", "world", false],
    ["programming", "coding", false],
    ["anagram", "grammar", false],
    
    // Edge cases
    ["", "", true],
    ["a", "a", true],
    ["ab", "ba", true],
    ["abc", "def", false]
];

// Test all solutions
const solutions = [
    { name: "Sort Method", func: isAnagram },
    { name: "Frequency Count", func: isAnagramFrequency },
    { name: "Advanced Array Methods", func: isAnagramAdvanced }
];

solutions.forEach(solution => {
    console.log(`\nTesting: ${solution.name}`);
    console.log("-".repeat(30));
    
    testCases.forEach(([str1, str2, expected], index) => {
        const result = solution.func(str1, str2);
        const status = result === expected ? "PASS" : "FAIL";
        console.log(`Test ${index + 1}: "${str1}" & "${str2}" => ${result} ${status}`);
    });
});

// =======================================
// INTERACTIVE DEMO
// =======================================

/**
 * Interactive function to test anagrams
 * @param {string} word1 - First word/phrase
 * @param {string} word2 - Second word/phrase
 */
function checkAnagram(word1, word2) {
    console.log("\nANAGRAM CHECK");
    console.log("================");
    console.log(`String 1: "${word1}"`);
    console.log(`String 2: "${word2}"`);
    
    const result = isAnagram(word1, word2);
    
    if (result) {
        console.log("Result: These are ANAGRAMS!");
        console.log(`"${word1}" can be rearranged to form "${word2}"`);
    } else {
        console.log("Result: These are NOT anagrams");
        console.log("The letters don't match when rearranged");
    }
    
    // Show character breakdown
    const normalize = str => str.trim().toLowerCase().replace(/\s+/g, '').split('').sort().join('');
    console.log(`Normalized 1: "${normalize(word1)}"`);
    console.log(`Normalized 2: "${normalize(word2)}"`);
    
    return result;
}

// =======================================
// BONUS: ARRAY METHODS DEMONSTRATION
// =======================================

/**
 * Demonstrates various array methods used in anagram checking
 */
function demonstrateArrayMethods() {
    console.log("\nARRAY METHODS DEMONSTRATION");
    console.log("==============================");
    
    const word = "Programming";
    console.log(`Original word: "${word}"`);
    
    // Step by step transformation
    const step1 = word.trim();
    console.log(`After trim(): "${step1}"`);
    
    const step2 = step1.toLowerCase();
    console.log(`After toLowerCase(): "${step2}"`);
    
    const step3 = step2.replace(/\s+/g, '');
    console.log(`After removing spaces: "${step3}"`);
    
    const step4 = step3.split('');
    console.log(`After split(''): [${step4.map(c => `"${c}"`).join(', ')}]`);
    
    const step5 = step4.sort();
    console.log(`After sort(): [${step5.map(c => `"${c}"`).join(', ')}]`);
    
    const step6 = step5.join('');
    console.log(`After join(''): "${step6}"`);
    
    // Demonstrate other array methods
    console.log("\nOther Array Methods:");
    const chars = word.toLowerCase().split('');
    
    // forEach example
    console.log("forEach() - Character frequencies:");
    const frequency = {};
    chars.forEach(char => {
        frequency[char] = (frequency[char] || 0) + 1;
    });
    console.log(frequency);
    
    // filter example
    const vowels = chars.filter(char => 'aeiou'.includes(char));
    console.log(`filter() - Vowels: [${vowels.map(c => `"${c}"`).join(', ')}]`);
    
    // every example
    const allLetters = chars.every(char => /[a-z]/.test(char));
    console.log(`every() - All lowercase letters: ${allLetters}`);
    
    // some example
    const hasVowels = chars.some(char => 'aeiou'.includes(char));
    console.log(`some() - Has vowels: ${hasVowels}`);
}

// =======================================
// RUN EXAMPLES
// =======================================

// Run the demonstration
demonstrateArrayMethods();

// Test some famous anagrams
console.log("\nFAMOUS ANAGRAM EXAMPLES");
console.log("==========================");
checkAnagram("Astronomer", "Moon starer");
checkAnagram("The Eyes", "They See");
checkAnagram("Dormitory", "Dirty Room");

console.log("\nChallenge Complete! You've learned:");
console.log("- Function creation and parameters");
console.log("- String manipulation methods");
console.log("- Array methods: split(), sort(), join(), filter(), every(), some(), forEach()");
console.log("- Boolean logic and comparison");
console.log("- Edge case handling");