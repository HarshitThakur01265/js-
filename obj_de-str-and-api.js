const course = {
    courseName: "De-Structuring and API",
    coursePrice: 999,
    courseInstructor: "Hitesh chai aur code"

}

//course.courseInstructor (gives Hitesh chai aur code)
// De-Structuring
const { courseInstructor: instructor } = course
console.log(instructor) // Hitesh chai aur code

// de-stucturing
const navBar = ({}) => {

}// this is a function that takes an object as an argument and de-structures it to get the properties of the object
navBar(company = "amazon")

// Json
const jsonData = {// this is a JSON object and it is used to store data in a structured way
    "courseName": "De-Structuring and API",
    "coursePrice": 999,
    "courseInstructor": "Hitesh chai aur code"
};

[// this is an array of objects and it is used to store data in a structured way
    {},
    {},
    {}
]

// to check take random json data from random user generator and check in json formatter



