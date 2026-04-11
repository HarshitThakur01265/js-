//const tinderUser = new Object() // singleton syntax
const tinderUser2 = {} // object literal syntax and it is non singleton syntax because we can create multiple objects using this syntax
tinderUser2.id = "123abc"
tinderUser2.name = "harshit"
tinderUser2.isLoggedIn = false
//console.log(tinderUser2) // {}

const regularUser = {
    email : "h@h.com",
    fullname : {
        userfullname : {
            firstname : "harshit",
            lastname : "thakur"
        }
    }
}
//console.log(regularUser.fullname.userfullname.firstname)

const obj1 = { 1: "one", 2: "two" }
const obj2 = { 3: "one", 4: "two" }
const obj4 = { 5: "one", 6: "two" }
const obj3 = Object.assign({}, obj1, obj2, obj4) // this will create a new object by merging the properties of obj1, obj2 and obj4 and it will not modify the original objects
console.log(obj3) 

const obj5 = {...obj1, ...obj2, ...obj4} // this will create a new object by merging the properties of obj1, obj2 and obj4 and it will not modify the original objects
// this is called spread operator and it is used to spread the properties of an object into another object
console.log(obj5)

const users = [
    {
        id: 1,
        email: "h@h.com"
    },
    {
        id: 2,
        email: "h@h2.com"
    },
    {
        id: 3,
        email: "h@h3.com"
    }
]
console.log(users[2].email)

console.log(Object.keys(users)) // this will return an array of keys of the object
console.log(Object.values(users)) // this will return an array of values of the object
console.log(Object.entries(users)) // this will return an array of key-value pairs of the object
console.log(users.hasOwnProperty("email")) // this will return false because the object does not have a property called "email"
// but users have email property in the objects inside the array but not in the array itself
console.log(users[0].hasOwnProperty("email")) // this will return true because the first object in the array has a property called "email"
console.log(tinderUser2.hasOwnProperty("isLoggedIn")) // this will return true because the object tinderUser2 has a property called "isLoggedIn"
