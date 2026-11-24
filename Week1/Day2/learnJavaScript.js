// Single line comment -> Ctrl+/

/* 
Paragraph comment-> ALT+SHIFT+A
console.log("Javascript Basics")
console.log("Welcome")) 
*/


/* DataTypes- specify the type of data the variable holds

types of DT
1. Primitive DT :

 built in/ predefined datatype 
 once value is assigned to the variable,it cannot be changed- hence immutable

 string
 number
 boolean
 undefined
 null
 bigint
 symbol


2. Non primitive DT-mutable, 

These are user defined DT
Elements in the array can be changed,hence mutable

arrays
objects

ex: let arr=[12,34,56]

//arr[0]=12, arr[1]=34, arr[2]=56  //stored as index

arr[2]=65
console.log(arr)=[[12,34,65]] //elements in the array can be changed,hence mutable

*/


//string- single,seq of character, alph, represent using " ",'',``(backtick-above the tab key)

//var, let and const->keywords used to declare the variable

var empName="gauthami@1234"
console.log(empName,typeof empName)//gauthami@1234 string
//connsole.log(typeof empName)


//number -all numbers like decimal, whole number
var phNumber=8976549876
phNumber="hello"
console.log(phNumber,typeof phNumber);//hello string


//boolean - returns either true or false
var isthisJavascriptlearning=true
console.log(isthisJavascriptlearning, typeof isthisJavascriptlearning)//true boolean

//undefined - variable is declared and value is not assigned, can be assigned at later stage.
var accountNumber//declaration
accountNumber=12344678//assignment
console.log(accountNumber, typeof accountNumber)//undefined undefined

//null - intentionally absence of the value, we create as null to say that variable has no value
var landLine=null
console.log(landLine, typeof landLine)//null object

//bigint - used to store large integer values that exceeds the safe integer range (2^53-1)

var transactionId=123456789101112345576909009999999999999999999999n
console.log(transactionId);//123456789101112345576909009999999999999999999999n
console.log(typeof transactionId);//bigint

//symbol- creates unique identifiers

var s1=Symbol('id')
var s2=Symbol('id')
console.log(s1===s2)//false
console.log(s1,s2);//Symbol(id) Symbol(id)
console.log(typeof s1)//symbol










