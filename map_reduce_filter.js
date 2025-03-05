const console = require("console");

const arr = [1, 2, 3, 4, 5];

// double the values in the array

// map() is a method that creates a new array with the results of calling a provided function on every element in the calling array.

//
const double = arr.map((num) => num * 2);
console.log(double);

function square(num) {
  return num * num;
}

const sq = arr.map(square);

// we can write it like this also
const sq1 = arr.map(function square(num) {
  return num * num;
});

console.log(sq1);
