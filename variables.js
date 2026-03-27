const accoundId = 14453
let accountEmail = "harshit@gmail.com"
var accountPassword = "12345harshit"

console.log(accoundId);

// accountId = 12345; // This will throw an error because accoundId is a constant
let accountsState; // undefined

console.table([accoundId, accountEmail, accountPassword, accountsState]);

// use const and let instead of var for better scoping and to avoid hoisting issues