1️⃣ map()

What it does: Creates a new array by applying a function to each element of the original array.

Returns: A new array of the same length.

Example:

const numbers = [1, 2, 3, 4, 5];

// Multiply each number by 2
const doubled = numbers.map(num => num * 2);

console.log(doubled); // [2, 4, 6, 8, 10]


Key: map does not change the original array.

2️⃣ filter()

What it does: Creates a new array with only the elements that pass a condition.

Returns: A new array (could be smaller than the original).

Example:

const numbers = [1, 2, 3, 4, 5];

// Keep only even numbers
const evenNumbers = numbers.filter(num => num % 2 === 0);

console.log(evenNumbers); // [2, 4]


Key: filter does not change the original array.

3️⃣ forEach()

What it does: Executes a function for each element of the array.

Returns: Nothing (undefined) — it’s just for side effects.

Example:

const numbers = [1, 2, 3, 4, 5];

numbers.forEach(num => {
  console.log(num * 2);
});

// Output:
// 2
// 4
// 6
// 8
// 10