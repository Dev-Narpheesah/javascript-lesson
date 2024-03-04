// ASYNCHRONOUS JAVASCRIPT

// const interval =  setInterval(() =>  console.log("Hello World!"), 1000);
// clearInterval(interval);

const myInterval = setTimeout(() => console.log("Hello World!"), 1000);

// SYNCHRONOUS JAVASCRIPT

const functionOne = () => {
    console.log("Function One");

    functionTwo()
    console.log("Function One, part two");
}

const functionTwo = () => {
   
    setTimeout(() =>  console.log("Function Two"), 2000);
}

// console.log(functionOne());
functionOne()


