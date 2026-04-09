//singleton means only one instance of the class can be created
//object is a collection of key-value pairs and is a reference data type in JavaScript
//objects are mutable (can be changed) and are stored by reference and used in call by reference

// object literal
const mySym = Symbol("key1")

const Jsuser = {
    name: "harshit",
    "full name": "harshit thakur",
    //mySym: "symbol value",// this is a property with a symbol as a key but it types as a string key in the object
    [mySym]: "symbol value",// this is a property with a symbol as a key and it will be treated as a symbol key in the object
    age: 22,
    isLoggedIn: false,
    email: "h@h.com",
    location: "Solan"

}
console.log(Jsuser.email)
console.log(Jsuser["email"])
// diff between dot notation and bracket notation is that dot notation is used when we know the name of the property and it is a valid identifier, 
// while bracket notation is used when we want to access a property using a variable or when the property name is not a valid identifier.
console.log(Jsuser["full name"])
// we cannot access the property "full name" using dot notation because it is not a valid identifier (it has a space in it)
console.log(Jsuser[mySym])// this is how we can access the property with a symbol key in the object

Jsuser.email = "h@123.com"
//Object.freeze(Jsuser) // this will make the object immutable (cannot be changed)
Jsuser.email = "h@1265.com"// this will not work because the object is frozen
console.log(Jsuser)

Jsuser.greeting = function(){
    console.log("hello")
}
Jsuser.greetingTwo = function(){
    console.log(`hello, ${this.name}`)

}

console.log(Jsuser.greeting)
Jsuser.greeting()
console.log(Jsuser.greeting())
console.log(Jsuser.greetingTwo())

