/*  ********** Comparison with Datatypes ********* */

// in string this comparison will not equal mean false
let x = "2"; // it i string
let y = 2; // it is number

console.log(2 < 3); // True in Same cause if x=2   not x="2"
console.log(2 > 3);

console.log(x == y); // Equality Checking

console.log(x === y); // Strict Checking

let a = null;
let b = 0;
console.log(typeof b);
// in Number form Null is Equal to 0 null=0
console.log(null === 0); // in this case it will be false
console.log(null > 0);
console.log(null < 0);
console.log(null <= 0); // So it will be true

//it is short cut of all above consoles
console.table([
  2 < 3,
  2 > 3,
  x == y,
  x === y,
  typeof b,
  null === 0,
  null > 0,
  null > 0,
  null < 0,
  null <= 0,
]);
