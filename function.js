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
console.log(loginIIUser("harshit")) // it will overwrite the previous function definition and it will work as expected




