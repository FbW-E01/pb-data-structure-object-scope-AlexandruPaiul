// # Scope

// **Instructions**
// 1. Create the following object: 
// ```javascript
// const student = { 
//   firstName: "John", 
//   lastName: "Smith", 
//   class: 12,
// };
// ```
const student = { 
  firstName: "John", 
  lastName: "Smith", 
  class: 12,
  addString(){console.log(`${this.firstName} ${this.lastName} is a student in class ${this.class} `)}
};

// 2. Create a method that prints the following: 
// ```javascript
// "John smith is a student in class 12"
// ```
student.addString()

// 3. Create a person object. Include the person's first and last name, age, job, city etc.
//  Create a method to print data from the object e.g. "John Smith is a 41 year old engineer living in France".
console.log("Task2:")
const person ={
    first:"John",
    last:"Smith",
    age:41,
    job:"engineer",
    country:"France",
    addResult() {console.log(`${this.first} ${this.last} is a ${this.age} year old ${this.job} living in ${this.country}`)},
    lengthObject(){ let result = 0; for(const element in person)
    result++; console.log(result)}
};
person.addResult();


// ## Bonus

// 3. Write a method to get the length of the person object.
console.log("Task3:");
person.lengthObject()