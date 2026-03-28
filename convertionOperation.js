let score = "33"
console.log(typeof score) //number 
console.log(typeof(score)) //number

let valueInNumber = Number(score) //converting score to number
console.log(typeof valueInNumber) //number
// if we want to convert a string to a number, we can use the Number() function. This function takes a string as an argument and returns a number. If the string cannot be converted to a number, it will return NaN (Not a Number).
// if let score = "33abc" then valueInNumber will be NaN because "33abc" cannot be converted to a number.
// if let score = null then valueInNumber will be 0 because null is converted to 0 when using the Number() function.
// if let score = undefined then valueInNumber will be NaN because undefined cannot be converted to a number.
// if let score = true then valueInNumber will be 1 because true is converted to 1 when using the Number() function.
// if let score = "harshit" then valueInNumber will be NaN because "harshit" cannot be converted to a number.

let isloggedIn = 1
let booleanIsLoggedIn = Boolean(isloggedIn) //converting isloggedIn to boolean
console.log(booleanIsLoggedIn) //true
// if we want to convert a number to a boolean, we can use the Boolean() function. This function takes a number as an argument and returns a boolean. If the number is 0, it will return false. If the number is any other value, it will return true.
// if let isloggedIn = 0 then booleanIsLoggedIn will be false because 0 is converted to false when using the Boolean() function.
// if let isloggedIn = -1 then booleanIsLoggedIn will be true because -1 is converted to true when using the Boolean() function.
// if let isloggedIn = 100 then booleanIsLoggedIn will be true because 100 is converted to true when using the Boolean() function.
// if let isloggedIn = null then booleanIsLoggedIn will be false because null is converted to false when using the Boolean() function.
// if let isloggedIn = undefined then booleanIsLoggedIn will be false because undefined is converted to false when using the Boolean() function.
// if let isloggedIn = "harshit" then booleanIsLoggedIn will be true because "harshit" is converted to true when using the Boolean() function.
// if let isloggedIn = "" then booleanIsLoggedIn will be false because "" is converted to false when using the Boolean() function.

let someNumber = 55
let stringSomeNumber = String(someNumber) //converting someNumber to string
console.log(stringSomeNumber) // "55"
console.log(typeof stringSomeNumber) //string
// if we want to convert a number to a string, we can use the String() function. This function takes a number as an argument and returns a string. The number will be converted to its string representation.