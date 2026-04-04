const myArr = [1, 2, 3, 4, 5];
console.log(myArr) // this will print the entire array
console.log(myArr[0]) // this will print the first element of the array which is 1
console.log(typeof myArr) // this will print the type of the array which is "object"

const myArr2 = ["Hello", "World", "JavaScript", "Array"];
const myArr3 = new Array(1, 2, 3, 4, 5); // this will create a new array using the Array constructor
console.log(myArr2) // this will print the entire array
console.log(myArr3) // this will print the entire array created using the Array constructor

// array methods
myArr.push(6) // this will add the element 6 to the end of the array
myArr.pop() // this will remove the last element of the array which is 6
myArr.unshift(0) // this will add the element 0 to the beginning of the array
myArr.shift() // this will remove the first element of the array which is 0
myArr.splice(2, 0, 10) // this will add the element 10 at index 2 without removing any elements
console.log(myArr) // this will print the updated array with the new element
console.log(myArr.indexOf(3)) // this will return the index of the element 3, or -1 if it's not found

console.log(myArr.includes(3)) // this will return true if the array includes the element 3, otherwise it will return false

const newArr = myArr.join()
console.log(newArr) // this will join all the elements of the array into a string separated by commas
console.log(typeof newArr) // this will print the type of the newArr which is "string"

// slice and splice
const myArr4 = [1, 2, 3, 4, 5];
const slicedArr = myArr4.slice(1, 4) // this will return a new array containing the elements from index 1 to index 3 (not including index 4)
console.log(myArr4) // this will print the original array which is [1, 2, 3, 4, 5]
console.log(slicedArr) // this will print the sliced array which is [2, 3, 4]
myArr4.splice(1, 2) // this will remove 2 elements starting from index 1 and return the removed elements
console.log(myArr4) // this will print the updated array after splicing which is [1, 4, 5]

// difference between slice and splice is that slice does not modify the original array while
// splice modifies the original array by adding or removing elements.