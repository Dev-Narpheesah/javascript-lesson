const rectangleArea = function(length, breadth) {
    return length * breadth;
};


const length = 4;
const breadth = 5;
const area = rectangleArea(length, breadth);
console.log(area);


//OOP --. Object Oriented Programming.

//  Object Literal
let person = {
    first_name : "Salman",
    last_name : "Kofoshi",

    getFunction : function() { //method --> a property whose value is a function
        return  `My name is ${person.first_name} ${person.last_name}`
    },

    phoneNumber : {
        mobile: "12345",
        landline: "6789"
    }
}

console.log(person.getFunction());
console.log(person.phoneNumber.landline);

// Object constructor.
function personTwo(first_name, last_name) {
    this.first_name = first_name,
    this.last_name = last_name
}

let person1 = new personTwo("Hayzed", "Mabululu");
console.log(person1)


// The NEW keyword --> creates a new empty object
const student = {} //simple object

const studentTwo = Object();

console.log(studentTwo);

const arr = [1,2,3];
const newArr = new Array(1,2,3);

console.log(arr, newArr);

// Date
const myBirthtday = new Date()
console.log(myBirthtday);

const myNumber = new Number(100.00)
console.log(myNumber.toFixed(0));


// THIS keyword --> is used to reference the object that is executing the current function.         In otherwords every function has a reference to its current executon context

function Sentence(words) { //constructor function syntax
    this.words = words;
    console.log(this)
}

const $_ = new Sentence(`Hello there! We're learning about this keyword`); 