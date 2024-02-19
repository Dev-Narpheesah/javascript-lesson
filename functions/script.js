//  Function declaration.

function square(number) { 
    // statement
}

square() 

// Function Expression
const nameFunction = function(params) {}

// Arrow Function
const arrowFn = () => {}


function sayHello(firstName) {
    console.log(`Hello ${firstName}`);
}

sayHello(`HayZed`)
sayHello(`Class Captain 🙅‍♂️`)
sayHello(`Nafisah`)


const division = (number) => {
    return number / number;
}

const answer = division(4)
console.log(answer);

const square2 = number => {return number * number}
const square3 = number => number * number

function add(number) {
    return number + number
}

const sum = add(2);
console.log(sum)


const para = (age, height) => {
    return (age - height);
}

const sol = para (50, 20)
console.log(sol);


// NESTED is a function written inside another function
function getScore() {
    const num1 = 2;
    const num2 = 3;
    const name = "DLT Africa"

    function add() {
        return `${name} is ${num1 + num2} years old`
    }
    return add();
}

console.log(getScore());


const nestedFunction = (a, b, c) => {

    const anotherFunction = () => {
        return `${a + b + c}`;
    }

    return anotherFunction();
};

console.log(nestedFunction(2, 4, 6));

// ACTIVITY ::: Declare a function with two parameters, check if the addittion of the two params is >= 10, it should return a ststement showing `Sum is greater than or equal to 10`, if not we shold have params a = params b 

function activeFunction(numb1, numb2)  {
  let sum = numb1 + numb2;
    return sum >= 10 ? `Sum is greater than or equal to 10` : numb1 + numb2;
    
}
const result = activeFunction(3, 5);
console.log(result);

function addNumbers(a, b) {
    return a + b >= 10 ? "Sum is greater than or equals to 10" : a + b;
}

const greater = addNumbers(9, 10);
console.log(greater);

const lesser = addNumbers(3, 4);
console.log(lesser);

// check for even numbers 
const isEven = (nestedGame) => {
    return nestedGame % 2 === 0 ? true : false;
}

const even = isEven(6);
console.log(even);

const odd = isEven(7);
console.log(odd);

const isPrime = (number) => {
    if(number <= 1) {
        return  false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if(number % i === 0) {
            return false;
        }
    }
    return true;
}

const prime = isPrime(3);
console.log(prime)

