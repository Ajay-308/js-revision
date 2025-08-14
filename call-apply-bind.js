// call apply bind

const student = {
  name: "ajay",
  //   print: function () {
  //     console.log(this.name);
  //   },
};

let print = function (country, city) {
  console.log(this.name + " " + country + " " + city);
};

//student.print();
print.call(student);
const student2 = {
  name: "vikram",
};

// call method ka use karke mai student2 ke naam ko dekh sakta hu
// student2.print() // ye nahi kar sakte hum kyuki student 2 ke pass koi print nahi

//student.print.call(student2); // ye kaam karega

// hum log chahe print ko student ke ander as method rakhe ya
// bahar nikal le koi farak nhi padega
print.call(student2);

// ab agar hume or parameters pass karne ho print mai to hum log alag se pass kar sakte hai
print.call(student, "India", "Delhi");

//apply ke sath kya seen hai
print.apply(student, ["India", "Delhi"]); // isme parameters ko as array bejha jata hai

// bind mai kya seen hai

let printBind = print.bind(student, "India", "Delhi");
printBind();

// bind mai hum function ki copy bana lete hai or hum baad mai invoke kar sakte hai
