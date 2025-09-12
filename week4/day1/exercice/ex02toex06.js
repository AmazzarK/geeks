//ex02

const winBattle = () => {
    return true;
}

const experiencePoints = winBattle() ? 10 : 1;

console.log(experiencePoints);   


//ex03

let isString = (value) => {
    return typeof value === 'string' ? true : false;
}   
console.log(isString('hello'));
console.log(isString([1, 2, 4, 0]));

//ex04 find the sum
let sum = (a, b) => {
    return a + b;
}   
console.log(sum(3, 5));
console.log(sum(-3, -6));
console.log(sum(7, 3));

//ex05 kg and grams
let convertToGrams = (kg) => {
    return kg * 1000;
}
console.log(convertToGrams(1));
console.log(convertToGrams(3));
console.log(convertToGrams(5)); 

//ex06 fortune teller
let tellFortune = (jobTitle, location, partnerName, numChildren) => {
    return `You will be a ${jobTitle} in ${location}, and married to ${partnerName} with ${numChildren} kids.`
}

