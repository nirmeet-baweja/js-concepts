/* eslint-disable object-shorthand */
// this is window object in browser
// this is module.exports in nodeJs
console.log(`---------------------------------------------------------------`);
console.log(`console.log this keyword in global scope`);
console.log(this);

// this keyword`s value in function declaration
const printThis = function () {
  console.log(this);
};

// will display global object in nodeJS
// will display window object in browser
console.log(`---------------------------------------------------------------`);
console.log(`Calling "printThis" function in global scope`);
printThis();

const student = {
  name: `John Smith`,
  age: 10,
  printThis: printThis,
};

// in a function declaration, the value of this keyword
// is assigned at the time of program run.
// this takes the value of the object it is called with
// thus it will display the "student" object
console.log(`---------------------------------------------------------------`);
console.log(`Calling "printThis" method of student object`);
student.printThis();

const instructor = {
  name: `Jane Doe`,
  age: 50,
  printThis: printThis,
};

// Similarly here it will display the "instructor" object
console.log(`---------------------------------------------------------------`);
console.log(`Calling "printThis" method of instructor object`);
instructor.printThis();

// Nested objects
const car = {
  brand: `Honda`,
  model: `Civic`,
  colour: `grey`,
  year: 2020,
  printThis: printThis,
  specifications: {
    power: `300 bhp`,
    fuelEconomy: `200 mpg`,
    printThis: printThis,
  },
};

console.log(`---------------------------------------------------------------`);
console.log(`Calling "printThis" method of car object`);
car.printThis(); // car object
console.log(`---------------------------------------------------------------`);
console.log(`Calling "printThis" method of car.specifications object`);
car.specifications.printThis(); // specifications object

// Arrow functions
console.log(`<-----------------------Arrow function------------------------>`);
// this keyword`s value in arrow function
const printThisArrow = () => {
  console.log(this);
};

// will display global object in nodeJS
// will display window object in browser
console.log(`---------------------------------------------------------------`);
console.log(`Calling "printThisArrow" function in global scope`);
printThisArrow();

const studentArrow = {
  name: `John Smith`,
  age: 10,
  printThisArrow: printThisArrow,
};

// in an arrow function, the value of this keyword
// is assigned at the time of function creation.
// this takes the value of the object it was created in
// thus it will display the "module.exports" object
// which is an empty object at the moment in this file
console.log(`---------------------------------------------------------------`);
console.log(`Calling "printThisArrow" method of studentArrow object`);
studentArrow.printThisArrow();

const instructorArrow = {
  name: `Jane Doe`,
  age: 50,
  printThisArrow: printThisArrow,
};

// Similarly here it will display the "instructorArrow" object
console.log(`---------------------------------------------------------------`);
console.log(`Calling "printThisArrow" method of instructorArrow object`);
instructorArrow.printThisArrow();

// Nested objects
const carArrow = {
  brand: `Honda`,
  model: `Civic`,
  colour: `grey`,
  year: 2020,
  printThisArrow: printThisArrow,
  specificationsArrow: {
    power: `300 bhp`,
    fuelEconomy: `200 mpg`,
    printThisArrow: printThisArrow,
  },
};

console.log(`---------------------------------------------------------------`);
console.log(`Calling "printThisArrow" method of carArrow object`);
carArrow.printThisArrow(); // carArrow object
console.log(`---------------------------------------------------------------`);
console.log(
  `Calling "printThisArrow" method of carArrow.specificationsArrow object`
);
carArrow.specificationsArrow.printThisArrow(); // specifications object
console.log(`---------------------------------------------------------------`);
