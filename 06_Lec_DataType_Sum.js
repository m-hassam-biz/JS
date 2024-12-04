// There are two types of Data Types
// 1--> Permitive
// Permitive have 7 types  ----> String, Number, Boolean, null , Undefined, Symbol,  BigInt

let a = "Sahil"; /// it is string
let b = 786; // it is number
let c = true; // it is boolean . it can be true or false
let d = null; // it show that variable is empty
let e = undefined; // it is undefined which mean variable exist ,
let f = Symbol("123"); // it is used to assign unique address  . in this case output values can be same but not  equal
 let g  = 1234567891011121314151617181920n // it is used to store big values in integers
console.log(g)
console.log(typeof g)  // Type is "bigint"


// 2-->Non-Permitive
//Non-Permitive have 3 types ----> Array, Object,  Function
//Array Example---->
let i = ["Sail", 786, true ,  null, undefined, (f)
]
console.log(i);  //' OutPut will be Sail', 786, true, null, undefined, Symbol(123)

// Object Example --->

let j = {
    Name: "Sahil",
    Age:  "20"
}
console.table([(j)]) 



//Function Example ----->  


function func_name() {
    console.table([(j)]) // we will printn "J"
    
}
func_name()
