console.log("Welcome to my first weekend project Calculator!");

import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const calculatorData = require('./calculatorLibrary.json');
// Calculator display

type Operation = {
    name: string;
    description: string;
};

console.log(`app name: ${calculatorData.appName}, version: v${calculatorData.version}`);
console.log("Calculator is ready to use!");
(calculatorData.operations as Operation[]).forEach((op: Operation) => {
    console.log(`Operation: ${op.name}, Description: ${op.description}`)
});

// This is the calculator function to perform basic arithmetic operations

function add(a: number, b: number): number {
    return a + b;
} 

function subtract(a: number, b: number): number {
    return a -b;
}

function multiply(a: number, b:number):number{
    return a * b;
}
function divide(a: number, b: number): number {
    if (b === 0) {
        throw new Error("it cannot devide by zero");
    } else{
        return a / b;
    }
}

const operations: { [key: string]: (a: number, b: number) => number} = {
    add,
    subtract,
    multiply,
    divide
};


// Below is the function to perform the operation based on user input

const selectOperation = "add";  // example: but you can change this to any operation such as "subtract", "multiply", or "divide"

const result = operations[selectOperation](8, 8) // you can change the numbers to any two numbers you want

console.log(`The result of ${selectOperation} operation is: ${result}`);

// RUN "npm start" to execute the calculator 
// because we have set the "start" script in package.json