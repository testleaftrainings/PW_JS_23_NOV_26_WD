//operators- special symbols to perform operation on variables

//Airthmetic operators

// let x=20,y=5

// console.log(x+y)//20+5=25
// console.log(x-y)//20-5=15
// console.log(x*y)//20*5=100
// console.log(x/y)//20/5=4(quotient)
// console.log(x%y)//20%5=0(reminder)


//1,3,5,7,9 if number is not divisible by 2, then it is odd numbers
//x%y===0, if 2/2=0, reminder is 0, so the number is even
//x%y!==0, if 3/2=1, reminder is 1, so the number is odd


//assignment operators

// console.log(y+=2)//y=y+2 = 5+2=7
// console.log(y-=5)//y=y-5= 7-5=2
// console.log(y*=4)//y=y*4=2*4=8
// console.log(y/=4)//y=y/4=8/4=2
// console.log(y%=2);//y=y%2=2%2=0

//comparision operator(>,<,==,===,!==)

// a=10, b=20

// console.log(a>b);//false
// console.log(a<b);//true
// console.log(a==b);//false

//strict equality(===) , compares both value and datatype
// console.log(1==='1')//false

//loose equality(==), compares only the value
//coerction- string is converted to number and then it compares
// console.log(1=='1')//true
// console.log(1==true) //true

//logical operators(&&, || and!)
//AND= true && true=> true
//OR= true || false =>true
//NOT= !true=> false


// console.log(10>8 && 5===5)//true && true=> true
// console.log(10>8 && 5!==5)//true && false=> false
// console.log(10>8 || 5!==5)//true || false=> true
//console.log((10>8))//true
//console.log(!(10>8))//false

//unary operators (increment and decrement operators)

let s=2

//pre-increment (increasing the value before assigning)

console.log(++s)//3

//post-increment(assign the value in next line)

console.log(s++)//3
console.log(s)//4

//pre-decrement
console.log(--s)//3


//post-decrement
console.log(s--)//3
console.log(s)//2

