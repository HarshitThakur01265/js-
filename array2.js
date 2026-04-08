const marvel_heroes = ["thor", "ironman", "spiderman"]
const dc_heroes = ["superman", "flash", "batman"]

//marvel_heroes.push(dc_heroes)
//console.log(marvel_heroes)

const all_heroes = marvel_heroes.concat(dc_heroes)
console.log(all_heroes)
// diff between push and concat is that push will add the entire array as a single element,
// while concat will merge the two arrays together.

const all_new_heroes = [...marvel_heroes, ...dc_heroes]
console.log(all_new_heroes)
// diff between concat and spread operator is that concat will create a new array and merge the two arrays together,
// while spread operator will create a new array and add the elements of the two arrays together

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7 ,[4, 5]]]
const real_annother_array = another_array.flat(Infinity)
console.log(real_annother_array)
// flat method will flatten the array by one level, if we want to flatten it completely we can use flat(Infinity) or flat(2) depending on the level of nesting.

Array.isArray("hello") // false
Array.isArray([1, 2, 3]) // true
console.log(Array.from("hello"))
console.log(Array.from({name: "john"}))//it will give an empty array because the object does not have a length property

let score1 = 100
let score2 = 200
let score3 = 300
const scores = [score1, score2, score3]
console.log(Array.of(score1, score2, score3)) // this will create a new array from the values of the variables (scores)
