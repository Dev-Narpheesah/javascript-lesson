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