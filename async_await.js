const console = require("console");

async function home() {
  return "hello ajay" || "hello";
}

const res = home();
console.log(res);

res.then(function (data) {
  console.log(data);
});
