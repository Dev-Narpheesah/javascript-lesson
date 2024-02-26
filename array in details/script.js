const cohorts = [
  "Soliu",
  "Zainab",
  "Azeez",
  "Nafisat",
  "Sir kenny",
  "Baba oloye",
  "Abdul Lateef",
];
console.log(cohorts);

const change = (cohorts[1] = "Bash");

cohorts[7] = "Tolu";

//  ES5
for (let i = 0; i < cohorts.length; i++) {
  console.log(i, cohorts[i]);
}

// ES6

for (const ES6 of cohorts) {
  console.log(ES6);
}

const nested = [
  [1, 2],
  [3, 4],
  [5, 6],
];
const newArr = nested[0];
console.log(newArr);

const object = {
  name: "John",
  age: 60,
};

console.log(object);

const arr = [
  "Banana",
  10000,
  {
    name: "Bala blu",
    age: 80,
  },

  function name() {
    alert("Booooooooooooooo😊");
  },
];

console.log(arr);

/************2   METHOD***************/

/*************PUSH() METHOD***************/
const studets = ["Yemi", "Sola", "Grace", "Maryam", "Femi", "Bola"];
const pushed = studets.push("Babe", "Rahmat", "Rofiat");
console.log(pushed);
console.log(studets);

/***********POP() METHOD*******************/
const number = [3, 4, 5, 6, 7, 8, 9];
const popped = number.pop();
console.log(popped);
console.log(number);

/************SHIFT() METOD************** */
const colors = ["Violet", "Red", "Blue", "Black"];
console.log(colors);
const shifted = colors.shift();
console.log(shifted);
console.log(colors);

/************UNSHIFT() METOD************** */
const months = ["March", "July", "September", "January"];

console.log(months);

const adMonth = months.unshift("February");
console.log(adMonth);
console.log(months);

/************SPLICE() METOD************** */
const countries = ["Kenya", "Malaysia", "Canada", "Qatar", "Nigeria"];
console.log(countries);

 countries.splice(3, 0, "Eygpt", "Ghana", "Morroco");
countries.splice(3, 2, "Eygpt", "Ghana", "Morroco");
console.log(countries);

const wears = ["Gucci", "Versace", "D&G", "Nike", "LV"];
console.log(wears);

wears.splice(3);
console.log(wears);

const drinks = ["Coke", "Viju", "Gin", "Exotic", "Bobo"];
console.log(drinks);

drinks.splice(2, 1);
console.log(drinks);

/************SLICET() METOD************** */
const men = ["Tunmise", "Kenny", "Soliu", "Bode", "Abee", "HayZ"];
console.log(men.length);
const newMen = men.slice(2, 5);
console.log(newMen);

const coolest = men.slice(2);
console.log(coolest);

const newString = "Nafeesah";
console.log(newString.length);
const newSlice = newString.slice(2, 7);
console.log(newSlice);

const newName = "Adeola";
console.log(newName.length);
const sliced = newName.slice(2, 5);
console.log(sliced);

/************toSTRING() METOD************** */

const menSting = men.toString();
console.log(menSting);

const menInclude = men.includes("Abee");
console.log(menInclude);

const $menInclude = men.includes("Bash");
console.log($menInclude);

/************SORT() METOD************** */
men.sort();
console.log(men);

const alph = ["G", "F", "K", "A", "B", "Z"];
console.log(alph);

alph.sort();
console.log(alph);

const numbs = [9, 7, 6, 8, 15, 25, 35, 99, 5, 1, 3, 2, 4];
console.log(numbs);

numbs.sort((a, b) => a - b);
numbs.sort((a, b) => b - a);
console.log(numbs);

/************indexOf() METOD************** */

const $number = [1, 4, 3, 6, 2, 9, 8, 2, 4, 7, 5, 2];
console.log($number);

const indexOne = $number.indexOf(2);
console.log(indexOne);

const tutor = ["Abdullahi", "Naheem", "Anate", "Seyi", "Soliu", "Anate"];
console.log(tutor);

const indexTt = tutor.indexOf("Anate");
console.log(indexTt);

const indexTut = tutor.lastIndexOf("Anate");
console.log(indexTut);

const lastIndex = $number.lastIndexOf(2);
console.log(lastIndex);

/************forEach() METOD************** */
const _names = ["Zainab", "Bashirat", "Nafeesah"];

/******** ES5**** */
for (let i = 0; i < _names.length; i++) {
  console.log(i, _names[i]);
}

/******** ES6**** */

for (const _name of _names) {
  console.log(_name);
}

/*************forEach()*********** */

_names.forEach(function() {});

_names.forEach((name, i, arr) => {
    console.log(name.toUpperCase());
    console.log(i)
    console.log(arr);
});

const _$numbers = [2, 4, 3, 1, 2, 4];
_$numbers.forEach(function(number, i){
    console.log(number)
});



const mammals = ["Lion", "Cow", "Dog", "Cat"]

mammals.forEach((mammal, i) => {console.log(mammal, i)} );


let totalVal = 0;
const trans = [4, 45, 26, 4, 13, 16];

trans.forEach((tran) => {
    console.log(totalVal, (totalVal += tran), tran);
});
console.log(totalVal);

// EXAMPLE 4
_names.forEach((name) => console.log(`Congratulations ${name} unah dey smoke india hemp`));


/*************Map Method*********** */

// Example: 1

const inventory = [
    { name:"Rice", price:4000 },
    { name:"Beans", price:4000 },
    { name:"Semo", price:4000 },
    { name:"Yam", price:4000 },
    { name:"Garri", price:4000 }
];

inventory.map((value, i) => {
    console.log(value.name, i);
})

const price = inventory.map((value) => {
    return value.price
});
console.log(price)

const name = inventory.map((value) => {
    return value.name
});
console.log(name);

const commodities = inventory.map((commodity) => commodity.name)
console.log(commodities);

let double = [2, 3, 4, 5, 6, 7];

let $double = double.map((numb) => {
    return numb * 2
});
console.log($double);


 

// ARRAY FILTER
const numbers = [-10, 0, -2, 4, -9, 5, -8];

const filteredNumbers = numbers.filter((number)=> {
  return number < 0
})

console.log(filteredNumbers);

const filteredNumbers1 = []

for(let i = 0; i < numbers.length; i++) {
  if(numbers[i] < 0) {
    filteredNumbers1.push(numbers[i])
  }
}

console.log(filteredNumbers1);



const employees = [
  {name: "Muhamad", overtime: 10},
  {name: "Aisha", overtime: 5},
  {name: "Bolaji", overtime: 4},
  {name: "Chris", overtime: 7},
  {name: "Ben", overtime: 9},
  {name: "Munirat", overtime: 12},
]

const employeesToReward = employees.filter((employee) => {
  if(employee.overtime >= 7) {
    return true
  }
});

console.log(employeesToReward);

const employeesToRewardNames = employeesToReward.map((employee) => {
  return employee.name
})
  
console.log(employeesToReward)
console.log(employeesToRewardNames)

employeesToRewardNames.forEach((name) => console.log(`Hi ${name} Congratulations you have received an award`));


for(let i = 0; i < employees.length; i++) {
  if(employees[i, employees.overtime] >= 7) {
    employeesToReward.push(employees[i])
  }
}
console.log(employeesToReward);


const creatures = [
  {animal:"Shark", habitat:"Ocean"},
  {animal:"Whale", habitat:"Ocean"},
  {animal:"Hippopotamus", habitat:"Lake"},
  {animal:"Lion", habitat:"Savanna"},
  {animal:"Monkey", habitat:"Jungle"},
]


const aquaticAnimals = creatures.filter((creature) => {
  return creature.habitat === "Ocean" || creature.habitat === "Lake"
});

console.log(aquaticAnimals);


// ARRAY FIND

const digits = [1,2,3,4,5,6,7,8,9]

const value = digits.find((digit) => {
  return digit > 4
});

console.log(value);

const states = [
  'Ogun State',
  'Kogi State',
  'Anambra State',
  'Lagos State',
  'Benue State',
]

const state = states.find((state) => {
  return state.startsWith("L")
});

console.log(state);

// CLASS WORK

// A student Assessment took place, with a total mark of 10, Give us 7 students and mark them over 10, now give a reward to each students with a score over the mark of 6

const students = [
  {name: "Hayzed", score: 9},
  {name: "Basirat", score: 5},
  {name: "Soliu", score: 10},
  {name: "Bode", score: 7},
  {name: "Kenny", score: 4},
  {name: "Zainab", score: 6},
  {name: "Tunmise", score: 10}
]

const assess = students.filter((student) => {
  return student.score > 6
});
console.log(assess);

const studentsName = assess.map((student) => {
  return student.name
});
console.log(studentsName);

studentsName.forEach((name) => console.log(`Hello, ${name} you have been promoted to the next class`) );

// ARRAY SOME AND EVERY

const box = [1,2,3,4,5,6,7]

console.log(box.some((el) => {return el < 8}));
console.log(box.every((el) => {return el > 4}));


// ARRAY REDUCE

const boxes = [1,2,3,4,5,6,7,8,9,10]

const answer = boxes.reduce((accumulator, value) => {
  return accumulator + value
}, 0)

// 0 + 1 = 1 => accumulator
// 1 + 2 = 3 => accumulator
// 3 + 3 = 3 => accumulator
// 6 + 4 = 10 => accumulator

console.log(answer)