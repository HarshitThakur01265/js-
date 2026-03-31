const name = "harshit"
const repocount = 100
console.log(`hello ${name} you have ${repocount} repositories`)
//output: hello harshit you have 100 repositories

const gameName = new String("chess-ht")
console.log(gameName) // [String: 'chess-ht']
console.log(typeof gameName) // object
console.log(gameName.toUpperCase()) // CHESS

console.log(gameName[0]) // c
console.log(gameName.__proto__) // [String: 'chess-ht']

console.log(gameName.length)
console.log(gameName.charAt(0)) // c
console.log(gameName.indexOf("e")) // 2

const newString = gameName.substring(0, 4)//we cannot use negative index in substring method
console.log(newString) // chess

const anotherString = gameName.slice(0, 4)
console.log(anotherString) // chess
console.log(gameName.slice(-2)) // ht
console.log(gameName.slice(0, -3)) // chess 
//in slice method we can use negative index which counts from the end of the string

const newStringOne = "  hello world   "
console.log(newStringOne) //   hello world
console.log(newStringOne.trim()) // hello world
// trim method removes whitespace from both ends of the string but not from the middle

const url = "https://www.youtube.com/channel/UCW5YeuERMmlnqo4oq8vwUpg"
console.log(url.replace("https", "http")) // http://www.youtube.com/channel/UCW5YeuERMmlnqo4oq8vwUpg
// replace method replaces the first occurrence of the specified value with another value in a string and returns a new string without modifying the original string

console.log(url.includes("harshit")) // false
console.log(url.includes("UCW5YeuERMmlnqo4oq8vwUpg")) // true   
// includes method checks if a string contains a specified value and returns true or false accordingly

console.log(gameName.split("-")) // [ 'chess', 'ht' ]
// split method splits a string into an array of substrings based on a specified separator and returns the array

