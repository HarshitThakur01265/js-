let a = 10 // this is a global variable because it is declared outside any function or block
if (true){
    let a = 10
    const b = 20
    var c = 30
    console.log(a) // 10 because a is a block scope variable and it is accessible only inside the block
}
// console.log(a) // ReferenceError: a is not defined because a is a block scope variable and it is not accessible outside the block
// console.log(b) // ReferenceError: b is not defined because b is a block scope variable and it is not accessible outside the block
console.log(c) // 30 because c is a function scope variable and it is accessible outside the block
// here we can see that a and b are block scope variables and c is a function scope variable
console.log(a) // 10 because a is a global variable and it is accessible anywhere in the code, (global scope)
// var is function scope variable and it is accessible outside the block but let and const are block scope variables and they are not accessible outside the block
