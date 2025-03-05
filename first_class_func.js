// difference between function statement and function expression is hoisting
// function statement is hoisted means it can be called before it is declared
// function expression is not hoisted means it is treated as a variable here

const console = require("console");

greet(); // return hi
//greetMe(); // return error , because firstly js treat it as a variable and on that variable we are calling a function
// so it tell us that greetMe is not a function
//  TypeError: greetMe is not a function

// function statement and function declaration are same thing
function greet() {
  console.log("hi from function statement");
}

//function expression
var greetMe = function () {
  console.log("hi many from function expression");
};

// anonymous function
// function without name is called anonymous function
// it used when we want to use function as value like above one
//

// named function expression

var g = function xyz() {
  console.log("hi many from named function expression");
};

g(); // it return hi many from named function expression
// xyz(); // it return error because xyz is not defined here
// xyz is defined on another memory location which is not accessible thorugh global scope

// params and arguments
function log(a) {
  // here a is params
  console.log(a);
}

log(3); // here 3 is arguments

//first classs fucntion
// function can be passed as agrument to another function and can be returned from another function
function log(a) {
  console.log(a);
}

function a() {
  console.log("hi from a");
}

log(a);

// arrow function
// it is introduced in es6
// it is shorter syntax for writing funtion expression

var log = (a) => {
  console.log(a);
};

// high order function

function x() {
  console.log("my name is ajay");
}

function y(x) {
  return x();
}

y(x);
