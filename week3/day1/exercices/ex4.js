// Exercise 4 : 

const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
};

// 1. 
console.log("Number of floors:", building.numberOfFloors);

// 2. 
console.log("Apartments on 1st floor:", building.numberOfAptByFloor.firstFloor);
console.log("Apartments on 3rd floor:", building.numberOfAptByFloor.thirdFloor);

// 3. 
const secondTenant = building.nameOfTenants[1];
const roomsSecondTenant = building.numberOfRoomsAndRent[secondTenant.toLowerCase()][0];
console.log(`Second tenant: ${secondTenant}, Rooms: ${roomsSecondTenant}`);

// 4. 
const sarahRent = building.numberOfRoomsAndRent.sarah[1];
const davidRent = building.numberOfRoomsAndRent.david[1];
const danRent = building.numberOfRoomsAndRent.dan[1];

if (sarahRent + davidRent > danRent) {
    building.numberOfRoomsAndRent.dan[1] = 1200;
    console.log("Dan's rent increased to 1200.");
}

console.log(building);
