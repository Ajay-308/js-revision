// Description: This file demonstrates how to use promises in javaScript
//

createOrder("Pizza", function () {
  payBill(); // here we blindly trust on createOrder that it will call payBill but what if it does not make call
  // what if they make call twice
  // what if they have lots of bug
  // what if createOrder are placed in different location on different codefile
});

// lets see how we can solve this problem using promises

const promise = createOrder("pizza");

// run only one time when promise is resolved successfully

Promise.then(function (orderId) {
  // this is the success callback
  console.log("order created", orderId);
  payBill(orderId);
});
