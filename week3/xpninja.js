// Exercise 1 : 

const person1 = {
  fullName: "Alice Smith",
  mass: 68, 
  height: 1.65, 
  calcBMI: function() {
    return this.mass / (this.height * this.height);
  }
};

const person2 = {
  fullName: "Bob Johnson",
  mass: 85, 
  height: 1.75, 
  calcBMI: function() {
    return this.mass / (this.height * this.height);
  }
};

function compareBMI(p1, p2) {
  const bmi1 = p1.calcBMI();
  const bmi2 = p2.calcBMI();
  if (bmi1 > bmi2) {
    console.log(`${p1.fullName} has the largest BMI (${bmi1.toFixed(2)})`);
  } else if (bmi2 > bmi1) {
    console.log(`${p2.fullName} has the largest BMI (${bmi2.toFixed(2)})`);
  } else {
    console.log(`Both have the same BMI (${bmi1.toFixed(2)})`);
  }
}

compareBMI(person1, person2);

// Exercise 2 : 

function calcAvg(gradesList) {
  let sum = 0;
  for (let i = 0; i < gradesList.length; i++) {
    sum += gradesList[i];
  }
  return sum / gradesList.length;
}

function findAvg(gradesList) {
  const avg = calcAvg(gradesList);
  console.log("Average:", avg);
  if (avg > 65) {
    console.log("You passed!");
  } else {
    console.log("You failed and must repeat the course.");
  }
}


findAvg([80, 90, 70]);
findAvg([50, 60, 55]);
