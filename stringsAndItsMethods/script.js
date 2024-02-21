//  Types of strings

// single qoute ('')
// const world = 'ï am a boy'

// // double qoute ("")
// const words = "ï am a boy"


// backticks(``)
// const worlds = `ï am a boy`

// // console.log(world, words, worlds)


// const age = 12
// const school = 'DLT'
// const name = `Eef`

// const sentence = `my name is ${name}, I am ${age} years old and i go to ${school} school`

// console.log(sentence)


// const math = "2 + 2"

// const mathematics = `${2 + 2}`

// const lines = `1
// 2
// 3
// 4
// 5`

// console.log(lines);

// const numerals = `Hello i'm Aliyu and iam from "kogi state"`
// console.log(numerals)

// Checking the lenght of a string

const name = "Hayzed"

console.log(name.length)

console.log(name[0])



//  Changing the case of string

const words = "i am a boy"

const word = "SHE IS A GIRL"

console.log(words.toUpperCase())
console.log(word.toLowerCase())

// Checking for Substring

const man = "I love coding and my favourite language is Javascript"

const final = man.indexOf(' ')
console.log(final)

const check = man.includes('favourite')

const starting = man.startsWith('I')
const ending = man.endsWith('t')



console.log(check)
console.log(starting)
console.log(ending)



  //   Getting a substring 

//    SLICE METHOD
  const exampleString = "Hotdog"
  console.log(exampleString.slice(0, 3))
  console.log(exampleString.slice( 3))
  console.log(exampleString.slice(-1))

//   SPLIT METHOD
const sentence1 = "The quick brown fox jumped over the lazy dog";
console.log(sentence1.split(' '));

const name42 = "Nafisah and Zainab";
const split11 = name42.split(' ')
console.log(split11);

// // REVERSE() AND JOIN() METHOD
const name4 = "Nafisah and Zainab";
const split1 = name4.split(' ')
// console.log(split1);

const reverse$ = split1.reverse()
console.log(reverse$);


const join1 = reverse$.join('-')
console.log(join1);


//  REPEAT ()
const dogSays = "woof ";
console.log(dogSays.repeat(2));

// TRIM() METHOD

const trim = " @example.com "
console.log(trim.trim())