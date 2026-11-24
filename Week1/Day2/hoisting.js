/* 
Hoisting- is default behaviour JS,declaration part alone is getting hoisted tothe top but not
the value assigned to it.

1. memory creation phase
2. execution phase
 */

//var -> hoisting takes place

//var a=10
// console.log(a)
// var a=10  //var a+a=10


/* internally
 var a
 console.log(a)
 a=10
 */


 //let

 //let b=20
//  console.log(b)//ReferenceError: Cannot access 'b' before initialization
//  let b=20

 /* internally
 let b
 console.log(b)
 b=20
 */

 //const c=40
 //console.log(c)
 const c=40 //ReferenceError: Cannot access 'c' before initialization
console.log();



 /* TDZ(Temporal dead zone): time period between variable declaration and value assignment*/
 