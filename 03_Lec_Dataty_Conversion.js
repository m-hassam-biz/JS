let score = true;
let total = 7;
console.log(typeof (score));
console.log(score+total);

let valueInNumbers = Number(total); // there we convert the data type of "score" variable
console.log(typeof valueInNumbers);
console.log(valueInNumbers);

let x = 0; //asign value to the X
let y = 1; //asign value Y
console.log(x + y);

// Convert X, Y (number) into Boolean
// in Booolean the value of x=0 is false but the value of y = 1 will be true
let convert_of_x = Boolean(x); 
let convert_of_y = Boolean(y);

console.table([convert_of_x, convert_of_y,typeof convert_of_x, typeof convert_of_y]);

// print  data types of  x, y
console.table([typeof convert_of_x, typeof convert_of_y]);



let a = null
console.log(typeof a);
console.log(a);
let b = Number(a)
console.log(b);


