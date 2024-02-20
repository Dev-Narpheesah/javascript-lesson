//  Global scope,
// const name = "Zainab";
// const age = 17;
// const school = "Agege Primary School, Orile";

// const one  = () => {
//     return `${name} of ${age} years attented ${school}`;
// }

// const answer = one()
// console.log(answer)

// const file = () => {
//     return `${name} likes eating ${age} wraps of Semo in ${school}`
// }

// const sentence = file();
// console.log(sentence)

// Local scope
const localScope = () => {
    const name = "Oloye Pupo";
    const religion = "Muslim";
    const activity = "Drinking of Wine!";

    return `${name} who is a ${religion} enjoys ${activity}`;
}

const oloye = localScope()
console.log(oloye);


// block scope
const religion = "christian";

const exampleThree = () => {
    const name = "chima"
    if(true){
        const schoolName = "LASU"

        console.log(`${name} is a ${religion} and goes to ${schoolName}`)
    }
}
// exampleThree()


//  HOISTING

const a = 2
const b = 3

const result = exampleFive()
console.log(result)

function exampleFive() {
    return 2 + 2
}

const me = function () {}

const m = 2



//  CLOSURE // The scope regarding a function inside a function

const outerFunction = () => {
    const ben = 5

    const innnerFunction = () => {
        const man = 7

        return ben + man
    }

      const final = innnerFunction()
     console.log(final * 2)

}

 outerFunction()


// const mFunction = () => {
//     const b = 10

//     if (b = 10) {
//         return b >= 10 ? 20 : 100;
//     }

//     }
//     const finalFunction= mFunction() 
//     console.log(finalFunction * 4)


const firstFunc = () => {
    const div = 2


    const secondFunc = () => {
        const condition = true
        let certainNumber
        const mult = 4



        if (condition) {
            certainNumber = 5
        }

        const ans = certainNumber * mult
        return ans
    }

    const initialAnswer = secondFunc()

    const finalAnswer = initialAnswer / div

    console.log(finalAnswer) 
}


      firstFunc()