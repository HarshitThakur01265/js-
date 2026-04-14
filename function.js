// function definition
function saymyname(){
    console.log("My name is harshit");
    
}
// function call
saymyname() // My name is harshit
saymyname // this will give the function definition but not call the function

function sum(a,b){
    console.log(a+b);
    
}
sum(2,3) // 5
sum() // NaN (Not a Number) because we are trying to add undefined values
sum(2 , "4") // 24 (string concatenation) because we are trying to add a number and a string
// here a nd b are parameters and 2 and 3 are arguments

function sum(a,b){
    //let total = a + b
    //return total // this will return the value of total to the caller function
    //console.log("This will not be executed") // this will not be executed because it is after the return statement
    return a + b // this will return the value of a + b to the caller function
}
const result = sum(2,3) // 5
console.log("result:", result) // 5


function loginIUser(username = "Guest"){ // this is a default parameter and it will be used if the caller function does not pass any argument to the function
    if(!username ){ // (username === undefined || username === null || username === "") this is the same as !username because if username is undefined, null or empty string it will be falsy value and !username will be true
        return "Please provide a username"
        return // this will return undefined to the caller function and it will not execute the code after this line
    }
    return `Welcome ${username} to the website`

}
loginIUser("Harshit") // it will not print anything because we are not storing the return value in a variable or printing it
//console.log(loginIUser("Harshit")) // Welcome Harshit to the website 
console.log(loginIUser()) // Welcome Guest to the website because we are not passing any argument to the function and it is trying to access the username parameter which is undefined
console.log(loginIUser("harshit")) // it will overwrite the previous function definition and it will work as expected

function calculateCartPrice(val1, val2, ...num1){
    return num1
}
console.log(calculateCartPrice(100, 200, 300)) // 100, 200, 300
// here ...num1 is a rest parameter because the ...num1 will take all the arguments passed to the function and store them in an array called num1

// objects and functions
const user = {
    name: "Harshit",
    age: 24,
    
}
function handleObject(anyObject){
    console.log(`Name: ${anyObject.name}, Age: ${anyObject.age}`);

}
handleObject(user) // Name: Harshit, Age: 24
handleObject({name: "John", age: 30}) // Name: John, Age: 30

// arrays and functions
const numbers = [1, 2, 3, 4, 5]
function handleArray(getArray){
    return getArray[0]
}
console.log(handleArray(numbers)) // 1
console.log(handleArray([10, 20, 30, 40, 50])) // 10



