// const rectangleArea = function(length, breadth) {
//     return length * breadth;
// };


// const length = 4;
// const breadth = 5;
// const area = rectangleArea(length, breadth);
// console.log(area);


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

function Car(color, brand, wheels, id) {
    this.color = color;
    this.brand = brand;
    this.wheels = wheels;
    this.id = id;

    console.log(this);
}

const blueCar = new Car("Blue", "BMW", 4, "🚓");
const redCar = new Car("Red", "Ferrari", 4, "🏎️");

// create a cohort function with params (name, age, favFood, phoneNo, birthday), create new instance for three different cohorts, log the params argumument onto the console --> birthday should be a new date instance. 10minutes.

function Cohort(name, age, favFood, phoneNo, baiday) {
    this.name = name;
    this.age = age;
    this.favFood = favFood;
    this.phoneNo = phoneNo;
    this.baiday = baiday;

    console.log(this);
}

const newCohort = new Cohort("Hayzed", 25, "Fufu", 1234, new Date("january 12, 2000"));

const newCohort$ = new Cohort("Eef", 24, "Pounded yam", 4567, new Date("february 11, 2001"));

const new$Cohort = new Cohort("Soliu", 23, "Semo", 7890, new Date("march 10, 2002"));

// Class keyword --> is a schema that can save many many many values   just as u can define function declaration & expression.
// it can be defined as
// 1. Class derclaration
// 2. Class expression

class Shape1 {
    constructor (width, height) {
        this.width = width;
        this.height = height;

        console.log(this)
    }
}

const area = new Shape1(10, 2);

// class expression
// /i  --> anonymous

const Shape = class {
    constructor (width, height) {
        this.width = width;
        this.height = height;

        console.log(this)
    }
}

const area1 = new Shape(10, 2);

// ii --> unanonymous
const BigBoy = class Bigie {
    constructor (name, age) {
        this.name = name;
        this.age = age;
    }

    // getter function
    get him () {
        return this.coder();
    }

    // method
    coder() {
        return {name : this.name, age: this.age}
    }
}

const instance = new BigBoy("Paiko", 40);
console.log(instance.him);

const School = class Academy {
    constructor(name, location) {
        this.name =name;
        this.location =location;
    }

    get principal() {
        return this.seniorBoy()
    }

    seniorBoy() {
        return {name: this.name, location: this.location}
    }
}

const headMaster = new School ("Hayzed", "PEGAMUT");
console.log(headMaster.principal);


const RectShape = class RectShape {
    constructor(lenght, breadth) {
        this.lenght = lenght;
        this.breadth = breadth;
    }

    get area () {
        return this.calc()
    }

    calc() {
      
        return this.breadth * this.lenght
    }

}

const square = new RectShape (10, 10)
console.log(square.area)
