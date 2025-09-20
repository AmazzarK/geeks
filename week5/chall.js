// 1st Daily Challenge
// Function to uppercase all words if all are strings
function makeAllCaps(words) {
  return new Promise((resolve, reject) => {
    if (words.every(word => typeof word === 'string')) {
      resolve(words.map(word => word.toUpperCase()));
    } else {
      reject('All items in the array must be strings.');
    }
  });
}

// Function to sort words if array length > 4
function sortWords(words) {
  return new Promise((resolve, reject) => {
    if (words.length > 4) {
      resolve(words.sort());
    } else {
      reject('Array length must be greater than 4.');
    }
  });
}

// Test cases
makeAllCaps([1, "pear", "banana"])
  .then(arr => sortWords(arr))
  .then(result => console.log(result))
  .catch(error => console.log(error));

makeAllCaps(["apple", "pear", "banana"])
  .then(arr => sortWords(arr))
  .then(result => console.log(result))
  .catch(error => console.log(error));

makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
  .then(arr => sortWords(arr))
  .then(result => console.log(result))
  .catch(error => console.log(error));

// 2nd Daily Challenge
const morse = `{ ... }`; // Replace ... with the full morse JSON string from the instructions

function toJs() {
  return new Promise((resolve, reject) => {
    try {
      const morseJS = JSON.parse(morse);
      if (Object.keys(morseJS).length === 0) {
        reject('Morse JS object is empty.');
      } else {
        resolve(morseJS);
      }
    } catch (e) {
      reject('Invalid JSON.');
    }
  });
}

function toMorse(morseJS) {
  return new Promise((resolve, reject) => {
    const userInput = prompt('Enter a word or sentence:').toLowerCase();
    const translation = [];
    for (let char of userInput) {
      if (morseJS[char]) {
        translation.push(morseJS[char]);
      } else {
        reject(`Character '${char}' not in Morse JS object.`);
        return;
      }
    }
    resolve(translation);
  });
}

function joinWords(morseTranslation) {
  document.body.innerHTML = morseTranslation.join('<br>');
}

// Example chain (uncomment to use in browser)
// toJs()
//   .then(toMorse)
//   .then(joinWords)
//   .catch(error => alert(error));
