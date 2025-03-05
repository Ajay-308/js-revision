// it help in making code reusability and code reading easy

function operation(a, b, operate) {
  return operate(a, b);
}

const add = (x, y) => {
  return x + y;
};

const multiply = (x, y) => {
  return x * y;
};

console.log(operation(5, 3, add));
console.log(operation(5, 3, multiply));
