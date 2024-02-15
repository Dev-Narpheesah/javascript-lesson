// IF statement

// if (condition) {
//     Block
// }


// const age = 18;

// const bianca = 12;


// if (bianca > age) {

//     console.log("You are granted Admission")
// }else if (bianca === age) {
//     console.log("Your admission have been postponed to the next year")
// }else {
//     console.log("Wait till u are above 18");
// }

//  Truthy and Falsy values

// Falsy values

// false
// ""
// 0
// null
// undefined
// NaN

// if ("096") {
//     console.log(`truthy Value`)
// }else{
//     console.log("falsy value")
// }

const password = "rapp"
const email = "ola@gmail.com"

if (password && email) {
    console.log("Login Approved")
}else if(password || email) {
    console.log("Password and email must be provided")
}else {
    console.log("Unapproved!!!")
} 

//  create good morning message if the time s less than 10:00am.
//  if not, but the time is less than 20:00, create a good day message, otherwise good evening

// const realtime = "10:00"
// const daytime = "20:00"

// if (daytime < realtime) {
//     console.log("Good Morning")
// }else if(realtime < daytime) {
//     console.log("Good Day")
// }else {
//     console.log("Good Evening")
// }


const time = 10

if  (time < 10) {
    console.log("Good Morning")
}else if (time < 20) {
    console.log("Good Day")
}else {
    console.log("Good Evening")
}

// const times = "Good Morning"

// if (!times) {
//     console.log("Good Afterfoon")
// }else {
//     console.log("Good Morning")
// }


// let temperature = 25;
// if(temperature > 30) {
//     console.log("It`s a hot day!")
// } else {
//     console.log("it`s not too hot today.")
// }

// let hour = new Date().getHours();
// if(hour < 12) {
//     console.log("Good Morning")
// } else if (hour >= 12  && hour < 18) {
//     console.log("Good Afternoon")
// } else {
//     console.log("Good evening")
// }


let hour = new Date().getHours();
if( hour < 10) {
    console.log("First period")
}else if(hour >= 10  && hour < 12) {
    console.log("Second period")
} else if (hour != 14) {
    console.log("Break time")
} else if (hour > 14) {
    console.log("Lesson Continues")
}else if(hour == 18) {
    console.log("Class is over for today")
}else {
    console.log("Go home!")
}


let score = 90;

if(score >= 90) {
    console.log("Execellent! you scored an A.")
} else if(score >=80) {
    console.log("Well done! you scored a B")
} else if(score >= 70) {
    console.log("Good job! you scored a C")
}else if(score >= 60) {
    console.log("You pass! YOU score a D")
} else {
    console.log("Sorry you failed. You scored an F")
}

// SWITCH STATEMENT

let superHero = "Captain America"

switch (superHero) {
    case 'Iron Man':
        console.log ("I am Iron Man..")
        break;
        case 'Thor':
        console.log ("That is my hammer!")
        break;
        case 'Captain America':
        console.log ("Never give up!")
        break;
        case 'Black widow':
        console.log ("One short, one kill...")
        break;
        default:
            console.log("Enter a valid Superhero Name");
}

console.log(superHero)

let day = new Date().getDay();
let dayName;

switch (day) {
    case 0:
        dayName = "Sunday";
        break;
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";
        break;
    case 4:
        dayName = "Thursday";
        break;
    case 5:
        dayName = "Friday";
        break;
    case 6:
        dayName = "Saturday";
        break;
        default:
            dayName = "Unknown";
}

console.log("Today is " + dayName);

let fruit = "Apple"
let message;

switch (fruit) {
    case "Mango":
        message = "I am tasty";
        break;
    case "Berries":
         message = "I am more tasty";
        break;
    case "Avocado":
        message ="I am absolutely tasty";
        break;
    case "Apple":
        message = "I am both crunchy and delicious";
        break;
        default:
        message = "Spoilt apple are disgusting"

}

console.log(message);



// TERNARY OPERATOR

const oldMan  = 80
let person;
if(oldMan >= 80) {
    console.log("you can drive")
}else {
    console.log("You may not drive")
}

oldMan >= 80 ? console.log("You can drive ") : console.log("You may not be drive");

let age = 18;
let canVote = age > 18 ? "YES, you can vote!" : age === 18 ? "You can cheer for Voters" : age === 17 ? "NO, you can't vote": "Voteeeee!"
console.log(canVote);