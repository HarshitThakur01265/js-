// primitive data types - are immutable (cannot be changed) and are stored by value and used in call by value
// string, number, boolean, null, undefined, symbol, bigint

const score = 100
const scorevalue = 100.5

const isLoggedIn = true
const outsideTemp = null
let userEmail //undefined

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId) //false because symbol is unique and each time you create a symbol,
//it will have a unique value even if the description is the same

const bigNumber = 9007199254740991n //bigint data type is used to represent integers that are larger than the maximum safe integer in JavaScript (2^53 - 1) which is 9007199254740991.
//It is denoted by appending 'n' at the end of the number.

// reference(non-primitive) data types - are mutable (can be changed) and are stored by reference and used in call by reference
// object, array, function

const heros = {"shaktiman": "doga", "krish": "john wick"} //object data type
let obj = {
    name: "harshit",
    age: 22,
    isLoggedIn: false
}

const myfunction = function() {
    console.log("hello world")
} //function data type

// console.log(typeof score) //number
// console.log(typeof isLoggedIn) //boolean
// console.log(typeof outsideTemp) //object (this is a quirk in JavaScript, null is considered an object)
// console.log(typeof userEmail) //undefined
// console.log(typeof id) //symbol
// console.log(typeof bigNumber) //bigint
// console.log(typeof heros) //object
// console.log(typeof obj) //object
// console.log(typeof myfunction) //function
// non primitive the return value of typeof operator is object for array and object data types and function for function data type.
// This is because in JavaScript, arrays and objects are considered as objects and functions are considered as a separate type.


//memory

// stack (primitive)
// heap (reference)

// primitive data types are stored in the stack and reference data types are stored in the heap

let myName = "harshit"
let anotherName = myName // this will create a copy of the value of myName and assign it to anotherName.
anotherName = "Spiderman" // this will change the value of anotherName to "Spiderman" 
//but it will not change the value of myName because they are stored in different memory locations in the stack.
console.log(myName) //harshit
console.log(anotherName) //Spiderman

let userOne = {"name": "harshit", "age": 22}
let userTwo = userOne // this will create a reference to the same object in the heap and assign it to userTwo.
userTwo.age = 23 // this will change the age property of the object in the heap to 23.
// Since both userOne and userTwo are referencing the same object in the heap, the change will be reflected when we access the age property through either userOne or userTwo.
console.log(userOne.age) //23
console.log(userTwo.age) //23
// this is because both userOne and userTwo are referencing the same object in the heap, 
// so any change made to the object through one reference will be reflected when accessed through the other reference.
