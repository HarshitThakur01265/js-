// Dates
let myDate = new Date() // this will create a new date object with the current date and time
console.log(myDate) 
console.log(myDate.toString())
console.log(myDate.toDateString()) // this will return the date portion of the date object as a string
console.log(myDate.toTimeString()) // this will return the time portion of the date object as a string
console.log(myDate.toLocaleString()) // this will return the date and time portion of the date object as a string in the local format
console.log(myDate.getFullYear()) // this will return the year portion of the date object as a number
console.log(myDate.getMonth()) // this will return the month portion of the date object as a number (0-11)
console.log(myDate.getDate()) // this will return the day portion of the date object as a number (1-31)
console.log(myDate.getHours()) // this will return the hours portion of the date object as a number (0-23)
console.log(myDate.getMinutes()) // this will return the minutes portion of the date object as a number (0-59)
console.log(myDate.getSeconds()) // this will return the seconds portion of the date object as a number (0-59)

//in getmonth method January is represented as 0 and December is represented as 11, so we need to add 1 to the month number to get the correct month number
console.log(myDate.getMonth() + 1) // this will return the correct month number (1-12)
console.log(typeof myDate) // this will return the type of the date object which is "object"

let mycustomDate = new Date(2022, 0, 1) // this will create a new date object with the specified date
console.log(mycustomDate)
console.log(mycustomDate.toString())

let mycustomDate2 = new Date(2022, 0, 1, 5, 3, 2) // this will create a new date object with the specified date and time
console.log(mycustomDate2)
console.log(mycustomDate2.toLocaleString())

let mycustomDate3 = new Date("2022-01-01") // this will create a new date object with the specified date in ISO format
console.log(mycustomDate3)
console.log(mycustomDate3.toLocaleString())

let myTimestamp = Date.now() // this will return the number of milliseconds since January 1, 1970
console.log(myTimestamp)
console.log(mycustomDate3.getTime()) // this will return the number of milliseconds since January 1, 1970 for the specified date

console.log(Math.floor(Date.now()/1000)) // this will return the number of seconds since January 1, 1970 by dividing the number of milliseconds by 1000 and rounding down to the nearest integern

// `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}` 
//this will return the current time in the format of "HH:MM:SS" by using template literals and the getHours, getMinutes, and getSeconds methods of the date object
let newDate = new Date()
console.log(newDate.toLocaleString('default', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
})) // this will return the date in a more readable format by using the toLocaleString method with options for weekday, year, month, and day
