//exo 1

function displayNumbersDivisible() {
    for (let i = 0; i <= 500; i++) {
        console.log(i);
    }
}


// bonus 
function displayNumbersDivisible(divisor) {
    let sum = 0;
    for (let i = 0; i <= 500; i++) {
        if (i % divisor === 0) {
            console.log(i);
            sum += i;
        }
    }
    console.log("Sum:", sum);
}

// Ex 2

//qst 1
const stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}  

const prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
} 

//qst 2

const shoppingList =["banana", "orange", "apple"]

//qst 3-4

function myBill(){
    let total = 0;

    for ( let item of shoppingList){
        if( item in stock && stock[item] > 0){
            total += prices[item];
            stock[item] -= 1;
        }
    }

    return total;
}

//test
console.log("Total bill:", myBill());


//Ex 3

function changeEnough(itemPrice, amountOfChange) {
    const coinValues = [0.25, 0.10, 0.05, 0.01];
    let totalChange = 0;

    for (let i = 0; i < amountOfChange.length; i++) {
        totalChange += amountOfChange[i] * coinValues[i];
    }

    return totalChange >= itemPrice;

}

console.log(changeEnough(4.25, [25, 20, 5, 0]));     
console.log(changeEnough(14.11, [2, 100, 0, 0]));    
console.log(changeEnough(0.75, [0, 0, 20, 5]));      

//Ex 4

//qst1

function hotelCost(){
    let nights;
    do {
        nights=prompt("How many nights would you like to stay in the hotel?");
        nights = parseInt(nights);
    } while (isNaN(nights) || nights <= 0);

    const costPerNight = 140;
    return nights * costPerNight;

}


const totalHotelPrice = hotelCost();
console.log("Hotel cost: $" + totalHotelPrice);

//qst 2

function planeRideCost(){
    let destination;
    do {
        destination = prompt("What is your destination?");
    } while (!destination || typeof destination !== "string");

    destination = destination.toLowerCase();

    if (destination === "london") {
        return 183;
    } else if (destination === "paris") {
        return 220;
    } else {
        return 300;
    }

}

const flightCost = planeRideCost();
console.log("Plane ticket cost: $" + flightCost);


//qst 3

function rentalCarCost() {
    let days;

    
    do {
        days = prompt("How many days would you like to rent the car?");
        days = parseInt(days); 
    } while (isNaN(days) || days <= 0);

    const costPerDay = 40;
    let totalCost = days * costPerDay;

    
    if (days > 10) {
        totalCost *= 0.95;
    }

    return totalCost;
}


//qst 4

function totalVacationCost() {
    const hotel = hotelCost();
    const plane = planeRideCost();
    const car = rentalCarCost();

    const total = hotel + plane + car;

    console.log(`The car cost: $${car}`);
    console.log(`The hotel cost: $${hotel}`);
    console.log(`The plane tickets cost: $${plane}`);
    console.log(`Total vacation cost: $${total}`);

    return total;
}


const totalVacationCost = totalVacationCost();
console.log("total vacation cost: $" + totalVacationCost );


