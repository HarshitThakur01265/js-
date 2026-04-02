const score = 100;
console.log(score) // 100

const balance = new Number(1000)
console.log(balance) // [Number: 1000]

console.log(balance.toString()) // 1000
console.log(balance.toString().length) // 4
// toString method converts a number to a string and returns the string representation of the number

console.log(balance.toFixed(2)) // 1000.00
// toFixed method formats a number using fixed-point notation and returns a string representation of the number with a specified number of decimal places   

const otherNumber = 23.456789
console.log(otherNumber.toPrecision(2)) // 23
console.log(otherNumber.toPrecision(4)) // 23.46
// toPrecision method formats a number to a specified number of significant digits and returns a string representation of the formatted number
const anotherNumber = 123.8966
console.log(anotherNumber.toPrecision(4)) // 123.9
console.log(anotherNumber.toPrecision(2)) // 1.2e+2


const hundreds = 1000000
const millions = 1000000000
console.log(hundreds.toLocaleString("en-US")) // 
console.log(millions.toLocaleString("en-IN")) //
console.log(hundreds.toLocaleString("en-IN")) // 10,00,000

// toLocaleString method converts a number to a string using locale-specific formatting and returns the formatted string representation of the number

///++++++++++++++++++++++++++++++++++++math object+++++++++++++++++++++++++++++++++++++++

console.log(Math)
console.log(Math.abs(-5)) // 5
console.log(Math.round(4.6)) // 5
console.log(Math.ceil(4.2)) // 5
console.log(Math.floor(4.8)) // 4
console.log(Math.max(5,6,8,3,7)) // 8
console.log(Math.min(5,6,8,3,7)) // 3
console.log(Math.random()) // returns a random number between 0 (inclusive) and 1 (exclusive)
console.log(Math.random()*10) // returns a random number between 0 and 10
console.log(Math.floor(Math.random()*10)) // returns a random integer between 0 and 9
//by using math.floor method we can round down the random number to the nearest integer and by multiplying it with the range we can get a random integer between 0 and the range-1
console.log((Math.random()*10) + 1) // returns a random integer between 1 and 10
//by adding 1 to the random number we can get a random integer between 1 and the range

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min) // returns a random integer between min and max (inclusive)



