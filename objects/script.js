// OBJECTS

// Objects are used to represent real life datas

// Objects is an unordered collection of related data in form of key and value pairs

const firstName = "Soliu";

const person = {
    firstName,
    surname: "Hayzed",
    age: 158,
    children: {
        firstChild: "Eef",
        secondChild: "Nafisat"
    }
}
   
console.log(person)


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
