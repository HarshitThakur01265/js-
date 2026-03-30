console.log(3 > 2) //true
console.log(3 < 2) //false
console.log(3 >= 2) //true
console.log(3 <= 2) //false
console.log(3 == 3) //true
console.log(2 != 3) //true
console.log("3" == 3) //true because == operator does type coercion and converts "3" to 3 before comparing
console.log("02" == 2) //true because == operator does type coercion and converts "02" to 2 before comparing

console.log(null == 0) //false because null is only equal to undefined and not equal to any other value
console.log(null >= 0) //true because null is converted to 0 when compared with a number
// In JavaScript, when you compare null with a number using the >= operator, null is converted to 0.
// So the expression null >= 0 is evaluated as 0 >= 0, which is true.
// However, when you compare null with a number using the == operator, null is not converted to a number and is only equal to undefined.
// As a result, Therefore, the expression null == 0 is evaluated as false. This is why null >= 0 returns true while null == 0 returns false.

console.log(undefined == 0) //false because undefined is only equal to null and not equal to any other value
console.log(undefined >= 0) //false because undefined is converted to NaN when compared with a number and NaN is not equal to any value including itself

// === 
console.log("3" === 3) //false because === operator does not do type coercion and compares both value and type
// In JavaScript, the === operator is known as the strict equality operator. 
// It compares both the value and the type of the operands without performing any type coercion.