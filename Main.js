
// String
let myString = "Hello, world!";

// Number
let myNumber = 25;

// Boolean
let myBoolean = true;

// Null
let myNull = null;

// Undefined
let myUndefined;

// Object
let myObject = {
  name: "KEITH",
  age: 23
};

// Symbol
let mySymbol = Symbol("unique");
console.log("String:", myString);
console.log("Number:", myNumber);
console.log("Boolean:", myBoolean);
console.log("Null:", myNull);
console.log("Undefined:", myUndefined);
console.log("Object:", myObject);
console.log("Symbol:", mySymbol);


let numbers = [1, 2, 3, 4, 5, 6, 7, ];

let doubledNumbers = numbers.map(num => num * 2);
console.log("Doubled Numbers:", doubledNumbers);

let numbersGreaterThanTen = doubledNumbers.filter(num => num > 10);
console.log("Numbers Greater Than 10:", numbersGreaterThanTen);

let sumOfNumbers = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log("Sum of Numbers:", sumOfNumbers);

numbers.forEach(num => console.log("Number:", num));

function greet(keith) {
    console.log(`Hello, ${name}!`);
}

function sumArray(numbers) {
    return numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

function findMax(numbers) {
    return Math.max(...numbers);
}
