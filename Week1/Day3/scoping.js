/* scoping- accessibility or visibility of the variable in the code

1. Block scoped - let and const are block scoped 
2. Function scoped - var is function scoped
3. Global scoped -if variable is not present inside block {} ex: if{}, function{}, then it is Global scoped*/

//global varaibale
var globalVariable ="scoping"

function access(){

//function scoped varaible
var eid=1234
    
if (true){

//block scoped varaible
const ename="kalpana"
var eage=35
console.log("ename inside the if block",ename);
console.log("eage inside the if block",eage);
console.log("globalVariable inside the if block",globalVariable);
console.log("eid inside the if block",eid);
}
//console.log("ename outside the if block",ename);
console.log("eage outside the if block",eage);
console.log("eid outside the if block and inside function block",eid);
console.log("globalVariable outside the if block",globalVariable);
}
//console.log("eage outside the function block",eage)
console.log("eid outside the function block",eid);
console.log("globalVariable outside the function block",globalVariable);
access()
console.log("at the end",globalVariable);
