//ex01--Scope 


// #1
function funcOne() {
    let a = 5;
    if(a > 1) {
        a = 3;
    }
    alert(`inside the funcOne function ${a}`);
}

// #1.1 - run in the console:
funcOne()
// PREDICTION: Will alert "inside the funcOne function 3"
// EXPLANATION: 'a' is initialized to 5, then reassigned to 3 in the if block (since 5 > 1 is true)

// #1.2 What will happen if the variable is declared 
// with const instead of let ?
// PREDICTION: TypeError will occur when trying to reassign a = 3
// EXPLANATION: const variables cannot be reassigned after declaration

//#2
let a = 0;
function funcTwo() {
    a = 5;
}

function funcThree() {
    alert(`inside the funcThree function ${a}`);
}

// #2.1 - run in the console:
funcThree()
funcTwo()
funcThree()
// PREDICTION: First funcThree() will alert "inside the funcThree function 0"
//            Second funcThree() will alert "inside the funcThree function 5"
// EXPLANATION: Initially 'a' is 0. funcTwo() modifies the global variable 'a' from 0 to 5

// #2.2 What will happen if the variable is declared 
// with const instead of let ?
// PREDICTION: TypeError will occur in funcTwo() when trying to reassign a = 5
// EXPLANATION: const variables cannot be reassigned after declaration


//#3
function funcFour() {
    window.a = "hello";
}


function funcFive() {
    alert(`inside the funcFive function ${a}`);
}

// #3.1 - run in the console:
funcFour()
funcFive()
// PREDICTION: Will alert "inside the funcFive function hello"
// EXPLANATION: funcFour() creates a global property 'a' on the window object with value "hello"
//              funcFive() accesses this global variable 'a'

//#4
let a = 1;
function funcSix() {
    let a = "test";
    alert(`inside the funcSix function ${a}`);
}


// #4.1 - run in the console:
funcSix()
// PREDICTION: Will alert "inside the funcSix function test"
// EXPLANATION: The local variable 'a' inside funcSix shadows the global 'a'
//              Local scope takes precedence over global scope

// #4.2 What will happen if the variable is declared 
// with const instead of let ?
// PREDICTION: Same result - will alert "inside the funcSix function test"
// EXPLANATION: const behaves the same as let for variable shadowing in this case

//#5
let a = 2;
if (true) {
    let a = 5;
    alert(`in the if block ${a}`);
}
alert(`outside of the if block ${a}`);

// #5.1 - run the code in the console
// PREDICTION: First alert will show "in the if block 5"
//            Second alert will show "outside of the if block 2"
// EXPLANATION: Block scope - the 'a' inside the if block shadows the outer 'a'
//              The inner 'a' (value 5) only exists within the if block
//              The outer 'a' (value 2) remains unchanged

// #5.2 What will happen if the variable is declared 
// with const instead of let ?
// PREDICTION: Same result - first alert "in the if block 5", second alert "outside of the if block 2"
// EXPLANATION: const has the same block scoping behavior as let

// #5.3 What will happen if we remove the let and const declarations?
// PREDICTION: First alert will show "in the if block 5"
//            Second alert will show "outside of the if block 5"
// EXPLANATION: Without let/const, the assignment inside the if block modifies the outer variable 'a'
