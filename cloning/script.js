console.log("Hello world!");


const person = {
    firstName: "Tunmise",
    middleName: "Paul"
}

const otherPerson = person;

person.firstName = "Makalele";
console.log(person);
console.log(otherPerson);

console.log(person === otherPerson);

// SHALLOW CLONING
// spread Operator (...)

const number = [1,2,3,4,5,6];
console.log(...number);

const newNumbr =[...number];
console.log(newNumbr);

// to get equality

const numbers = [1,2,3,4,5,6];
const copiedNumber = numbers
const newNumber = [...numbers];
const number$ = numbers.slice(2, 4)

numbers.push(8);

console.log(numbers);
console.log(copiedNumber);
console.log(newNumber);
console.log(number$)


console.log(numbers === copiedNumber);
console.log(numbers === newNumber);


// Object Cloning

const personDetails = {
    name: "Zainab",
    age: 40
}

const changeDetails = {...personDetails};
personDetails.name = "Soliu";

console.log(personDetails);
console.log(changeDetails);

const originalObj = {
    name: "Bash",
    age: 20,
    address: {
        city: "Pegamut",
        state: "Origin"
    }
};

const cloneObj = Object.assign({}, originalObj);

cloneObj.name = "Naphy";
cloneObj.address.city = "Elejigbo";

console.log("originalObj", originalObj);
console.log("cloneObj", cloneObj);


// Spreading Operator
const arr1 = [1,2,3,4];
const arr2 = [5,6,7,8];
const arr3 = [8,9]

const merged = [...arr1, ...arr2, ...arr3];

console.log(merged);


const text = {name: "Bode"};
const numbs = [1, 2, 3, 4];

const cloneMerged = {...text, number:[...numbs]}

cloneMerged.name = "Hayzed"
// cloneMerged.number(5);

console.log(text);
console.log(numbs);


const texts = {name: "bode"};
 const numb = [1,2,3,4];
texts.name = "Hayzed"
numb.push(7)
 const cloneMerge = {...text, ...numb };
 console.log(cloneMerge);


 