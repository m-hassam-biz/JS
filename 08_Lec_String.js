// in this lecture we will discused about "String"
// String Example ---->

let str = ["Sahil", "Meo", "20"];

//  console.log(str);

console.log(`My name is ${str[0]}.My cast is ${str[1]}.My age is ${str[2]} `);

console.log(str[0] )  // print String  using index number . Index are start with 0
console.log(str[0].toUpperCase()); // But it will not change the orignal value of str[0]
console.log(typeof str);

console.log(str.length);    // for printing Lenght of any string 

console.log(str[0].indexOf('l'));
console.log(str[0].charAt('3'));



const newstr = str.slice(0,2); // ******* Slice is used to print or get  values  in Sequences like 1 to 6
// console.log(newstr);

let a = "sahil"

// console.log(a.trimStart());
// console.log(a.trimEnd());
// ******************** Replace Method *************
console.log(a.replace('sahil' , 'Meo'));       // it is used to replace any value from string or variable

 let b = a;
 console.log(b.trim());  //   ****** Trim Method **** is used to remove spaces 




 /*  ************** Split   **************** */

 let sp = "Pakistan-Zindabad-Pakistan-Longlive"
let new_spt = sp.split('-')
console.log(new_spt[2]);

