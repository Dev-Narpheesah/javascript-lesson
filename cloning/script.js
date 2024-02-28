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

const originalObjs = {
    name: "Bash",
    age: 20,
    address: {
        city: "Pegamut",
        state: "Origin"
    }
};

const cloneObjs = Object.assign({}, originalObjs);

cloneObjs.name = "Naphy";
cloneObjs.address.city = "Elejigbo";

console.log("originalObj", originalObjs);
console.log("cloneObjs", cloneObjs);


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


//  const details = {
//     firstName: "Kenny",
//     car: {
//         brand: "Toyota",
//         Wheels: 4,
//         color: 'red'
//     }
//  }
//  const newDetails = {...details};
//  newDetails.firstName = "Mike"

// newDetails.car.color  = "blue"

//  console.log(details);
//  console.log(newDetails);

// JSON.stringify()
 

 const details = {
    firstName: "Kenny",
    car: {
        brand: "Toyota",
        wheel: 4,
        color: 'red'
    }
};

const stringnifiedDetails = JSON.stringify(details)
console.log(stringnifiedDetails)

const newDetails = JSON.parse(stringnifiedDetails)
console.log(newDetails)

newDetails.car.color = "Blue";

console.log(details.car.color);
console.log(newDetails.car.color);

const originalObj = {
    name: "Zainab",
    age: 12,
    address: {
        local: "Agege wa",
        area: 'Baba Yemi'
    }
}

const cloneObj = JSON.parse(JSON.stringify(originalObj));

cloneObj.name = 'Soliu';
cloneObj.age = 54;
cloneObj.address.local = "Pegamut";
cloneObj.address.area = "Mujahiddun";

console.log(originalObj);
console.log(cloneObj)
