// callback

console.log("started");
setTimeout(function callback() {
  console.log("callback");
}, 5000);

console.log("ended");

// but what if our code is not that simple lets deep dive what i am try to say

// lets take example of ordering food;

const order = ["pizza", "burger", "coke"];

function createOrder(order, callback) {
  console.log("Order created:", order);
  callback();
}

function cookOrder(callback) {
  console.log("Order is being cooked");
  callback();
}

function deliverOrder(callback) {
  console.log("Order is being delivered");
  callback();
}

function payBill(callback) {
  console.log("Bill is being paid");
  callback();
}

function eatOrder(callback) {
  console.log("Order is being eaten");
  callback();
}

// Kicking off the whole process in pure callback hell style
createOrder("Pizza", function () {
  cookOrder(function () {
    deliverOrder(function () {
      payBill(function () {
        eatOrder(function () {
          console.log("Done");
        });
      });
    });
  });
});

// another big problem is inversion of control what is it ? lets see

createOrder("Pizza", function () {
  payBill(); // here we blindly trust on createOrder that it will call payBill but what if it does not make call
  // what if they make call twice
  // what if they have lots of bug
  // what if createOrder are placed in different location on different codefile
});
