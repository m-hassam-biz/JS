 // Date and Time 
 /*   ********************** DATE ********************* */
 let  myDate  = new Date() 
 console.log(myDate);       //  2024-12-06T02:48:53.528Z
 console.log(myDate.toDateString());   //    Fri Dec 06 2024
console.log(myDate.toLocaleDateString())    //  12/6/2024
 console.log(myDate.toISOString());      //  2024-12-06T02:48:53.528Z
console.log(myDate.toJSON());           //   2024-12-06T02:48:53.528Z


// let myCreatedDate = new Date(2024,  11, 6)
let myCreatedDate = new Date(2024,  11, 6,  7, 59, 50)
console.log(myCreatedDate.toDateString());
console.log(myCreatedDate.toLocaleDateString());
console.log(myCreatedDate.toLocaleString());
console.log(myCreatedDate.getTime());


let   Mydate = Date.now()


