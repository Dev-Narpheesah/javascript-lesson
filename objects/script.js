// OBJECTS

// Objects are used to represent real life datas

// Objects is an unordered collection of related data in form of key and value pairs

const firstName = "Soliu";

// const person = {
//     firstName,
//     surname: "Hayzed",
//     age: 158,
//     children: {
//         firstChild: "Eef",
//         secondChild: "Nafisat"
//     }
// }
   
// console.log(person)


//********* ASSESSING AND ADDING OF PROPERTIES TO AN OBJECT ************//

const human = {
    firstName: 'Abdullah',
    "DLT Africa location": "pegamut"
}

human.pet = {name: 'cobra', age: 3};
human.job = 'headmaster'
human.favFood = "Garri"

console.log(human.firstName)         // dot notation
console.log(human['firstName'])      // array 
console.log(human.pet.name)
console.log(human["DLT Africa location"])


console.log(human)



//**OBJECT BUILT IN METHOD ************************//


const pet = {
    petName: "Dog",
    petSound: () => {

        console.log("Woof! Woof!")
    }
}
pet.petSound()


const dog = {
    name: "Fluffy",
    age: 2,
    listAllProperties: function(){
        console.log(this.name, this.age);
    }
}
 dog.listAllProperties()


 const myObject = {
    myMethod1: () => {},   // arrow function
    myMethod2: function() {},   // function declaration
 }

 const animal = {
    name: "Fluffy orange",
    age: 10,

    bark: () => {
        console.log("Woof woof!")
    }
 }
 console.log(animal.name);
 animal.bark();


//  ojects.keys()

 const employees = {
    boss: "Besh",
    secretary: "Azeez",
    sales: "Zainab",
    account: "Bola",
    cleaner: "Ade"

 }


const employeeInfo = Object.keys(employees)
console.log(employeeInfo);

//  ojects.value()

const session = {
    id: 1,
    date: "27-feb-2024",
    device: "Mobile",
    browser: "Chrome"
}

const sessionValue = Object.values(session)
console.log(sessionValue);


//  ojects.entries()

const operatingSystem = {
    name: "Linux",
    version: 18.04,
    license: "Open source"
}

const operatingSystemInfo = Object.entries(operatingSystem)
console.log(operatingSystemInfo);

const user = {
    userName: "John",
    password: 12345
}

const userInfo = Object.freeze(user)
console.log(userInfo);

userInfo.userName = "Soliu"
console.log(userInfo);



const userOne = {
    userName: "John",
    password: 12345
}

const userInfoOne = Object.seal(userOne)
console.log(userInfoOne);

userInfoOne.userName = "Az"
userInfoOne.age = 32
console.log(userInfoOne);


let x;
let y;
const person = {
    name: "AZ",
    age: 35,
    isAdmin: true,
    address: {
        street: "23 Unity and Peace Estate",
        city: "Ilorin",
        state: "Kwara"
    },
    hobbies: ["Music", "Sports"]
}

//  Accessing an array inside an object

x = person.hobbies[0]
y = person.hobbies[1]
// let y = person["hobbies"][1]
console.log(x, y)

// updating a property
person.name = "Bode"
person.street = "Road C Pegamut Estate"
console.log(person)


// deleting a property
delete person.address.state
delete person.address.city
console.log(person)

// adding a function to an object with only function expression
person.greet = function() {
    console.log(`Hello, my name is ${this.name}`)
}

person.greet();

// value and reference
// copying primitive value

// copying numbers
let x1 = 1
let y1 = x1;

x1 = 2
console.log(x1);
console.log(y1);

// copying strings

let firstPerson = "Mark"
let secondPerson = firstPerson

firstPerson = "Austin";

console.log(firstPerson);
console.log(secondPerson);


// copying arrays

const animals = ["dogs", "cats"]
const otherAnimals = animals

animals.push("Goat");
// console.log(animals)
console.log(animal === otherAnimals)


const data = {
    firstName: "Zainab",
    lastName: "Abdullah"
}

const otherData = data;
// console.log(data);
console.log(data === otherData)



// EQUALITY

const person1 = {
    firstName: "Soliu"
}

const otherPerson1 = {
    firstName: "Soliu"
}

console.log(person1 === otherPerson1) // false

const otherPerson3 = person1
console.log(person1 === otherPerson3) //true