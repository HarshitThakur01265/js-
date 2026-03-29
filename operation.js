let value = 3
let negativeValue = -value //negation operator
console.log(negativeValue) // -3

console.log(3 + 4) //addition operator
console.log(3 - 4) //subtraction operator
console.log(3 * 4) //multiplication operator
console.log(3 / 4) //division operator
console.log(3 % 4) //modulus operator
console.log(3 ** 4) //exponentiation operator

let str1 = "hello"
let str2 = " world"
console.log(str1 + str2) // concatenation operator // this will concatenate str1 and str2 and return "hello world"

let num1 = 3
let num2 = 4
console.log(num1 + num2) // this will add num1 and num2 and return 7

console.log("2" + 3) // this will concatenate "2" and 3 and return "23"
console.log("2" * 3) // this will convert "2" to a number and then multiply it with 3 and return 6
console.log("2" - 3) // this will convert "2" to a number and then subtract 3 from it and return -1
console.log("2" / 3) // this will convert "2" to a number and then divide it by 3 and return 0.6666666666666666
console.log("2" + 2 + 2) // this will convert "2" to a number and then add 2 and 2 to it and return 6
console.log("2" + (2 + 2)) // this will add 2 and 2 first and then concatenate it with "2" and return "24"
console.log(2 + 2 + "2") // this will add 2 and 2 first and then concatenate it with "2" and return "42"
// diff in 24 and 26 line is that in line 24, the addition operator is evaluated first and then the concatenation operator is evaluated. In line 26, the concatenation operator is evaluated first and then the addition operator is evaluated. This is because of the order of operations in JavaScript. The addition operator has a higher precedence than the concatenation operator, so it is evaluated first.

console.log(+true) // this will convert true to a number and return 1
console.log(+false) // this will convert false to a number and return 0
console.log(+"") // this will convert an empty string to a number and return 0
console.log(+" ") // this will convert a string with a space to a number and return 0
console.log(+"harshit") // this will convert "harshit" to a number and return NaN (Not a Number)

let num4, num5, num6
num4 = num5 = num6 = 5 // this will assign 5 to num6, then assign num6 to num5, and then assign num5 to num4. So all three variables will have the value 5.

let gameCounter = 100
gameCounter++ // this will increment the value of gameCounter by 1
console.log(gameCounter) // this will output 101
gameCounter-- // this will decrement the value of gameCounter by 1
console.log(gameCounter) // this will output 100
// postfix increment and decrement operators will return the value before incrementing or decrementing.
// prefix increment and decrement operators will return the value after incrementing or decrementing.
// So if we do console.log(gameCounter++) then it will output 100 and then increment gameCounter to 101. If we do console.log(++gameCounter) then it will increment gameCounter to 101 and then output 101.
// Similarly for decrement operator, if we do console.log(gameCounter--) then it will output 100 and then decrement gameCounter to 99. If we do console.log(--gameCounter) then it will decrement gameCounter to 99 and then output 99.