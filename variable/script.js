//  Variables are like container that holds reuseable data.

// let - the variable declation of let allows u to change the value
// const -cannot be changed it remains constant

let message = "Hello Eef!"
message =   "Hello Zainab!"
message = "Hayzed"
console.log(message);

const greeting = "Good Morning my Neigbour";
console.log(greeting);

const _name$ = "Al Fulaaniy Ileya 🛖"
console.log(_name$);

console.log(message, greeting,_name$)


// 1. Create a variable, call it student name and any value, Make sure the value can be reassigned in the future

let studentName = "Hayzed";
studentName = "Narpheesah";
console.log(studentName);

const _var = "Good Afternoon,";
const var$ = "How are u doing";
const var3 = "Today";

console.log(_var, var$, var3);


// Data Type
// String - Number - BigInt - Boolean -  Symbol - Null - Symbol - Undefined - typeOf - NAN ***  Object - Array - Date


// String
//  Single String - ''
// Double String - ""
//  Back Ticks - ``

const singleQoute = 'Who am I?'
const doubleQoute = "Who are you?"

console.log(singleQoute);
console.log(doubleQoute);

let name = "Team Lead";
const backTick = `Hello ${name}`;
console.log(backTick);

let newName = 'Toheeb';
let favouriteDrink = 'Bobo';

const details = `My name is ${newName}, and my favourite drink is ${favouriteDrink}`
console.log(details);


const numberOne = 45;
const numberTwo = 10;

const add = numberOne + numberTwo;
console.log(add);

const sub = numberOne - numberTwo;
console.log(sub);

const div = numberOne / numberTwo;
console.log(div);

const mul = numberOne * numberTwo;
console.log(mul);

console.log(10 + "15");
console.log(10 - "15");

// Boolean - True / False

const isBeautiful = false;
// console.log(typeof isBeautiful)


if (!isBeautiful) {
    console.log("This Woman is beautiful")
} else {
    console.log("This Woman is ugly")
}

// NULL
let age = null;
console.log(age);

// UNDEFINED
let x;
console.log(x);

// SYMBOL
const value1 = Symbol("hello");
const value2 = Symbol("hello");
console.log(value1.description);
