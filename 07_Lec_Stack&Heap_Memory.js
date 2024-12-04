console.log("Lecture 7 : Stach and Heap Memory");
//   Permitive Data types have Stack Memory  Which mean it give us copy of the variable etc.
// For Example ------>

let name1 = "Sahil"

let name2 = name1

name2 = "Meo"   // Now value of "name2" will be change *** it will not change the valve of "name1"
console.log(name1);              // Value of "name1" will be --Sahil--
console.log(name2);       // Now value of "name2" will be change



// Non-Permitive have  Heap Memory which mean they raffer original value 
//  For Example -------> 
let name3 = {
    email: "sahilmeo@gmail.com",
    phone: "03017778048"
}

let name4 = name3
name4.email = "meosahil@gmail.com"   // it changed will be change the value of  "name3"
/*  it mean "name4 "    permanently change the value of name3 */
console.table([name3,  name4]);
