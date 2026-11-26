//string -sequence of characters , represented using '',"",``


//string literal

let companyName="Testleaf"
//companyName="Testleaf solutions"
let firmName="testleaf"

// console.log(companyName===firmName)//false, data and memory also different
// console.log(companyName==firmName)//false


//string objects
// let companyName1=new String("Testleaf")
// let firmName1=new String("Testleaf")  

//object and object comparision using strict equality
// console.log(companyName1===firmName1)//false

//object and object comparision using loose equality
// console.log(companyName1==firmName1)//false

//literal and object comparision, where object is converted to string and compares
// console.log(companyName==firmName1)//true

//literal and object comparision with strict equality
// console.log(companyName===firmName1)//false



// let course="Playwright" //index starts from p->0, l-1......
                        //length starts from p->1, l-2......(index+1)

 //length
//  console.log(course.length)//10

 //escape sequences \,\t,\n 

// let data= 'it\'s \nregression \ntest\ting'
// console.log(data);

//concat the strings -> +, concat(), template literal `${}`

// let v1=50
// let v2="test cases"
// console.log("there are",v1+v2);
// console.log("there are",v1.toString().concat(v2));
// console.log(`there are ${v1} ${v2}`);

//charAt()-> character at a particular index
            //  4----9
let course="Playwrighty"
// console.log(course.charAt(7))//g

//indexof() -> retrieves the index of the particular character

// console.log(course.indexOf("y"))//3
// console.log(course.indexOf("y",4))//10 => index of 2nd matching character

//slice - extracting the portion of the string 

console.log(course.slice(4,11));//wrighty
// console.log(course.slice(4,9));//wrigh
// console.log(course.slice(4,10));//wright
// console.log(course.slice(10,4));//start index is greater than end index-> it will return empty
// console.log(course.slice(-11,-7,));//Play
// console.log(course.slice(-11,-7,));//length-11, (-11+11,-7+11)=>(0,4)//play

//substring()- extracting the portion of the string 
// console.log(course.substring(2))//aywrighty
// console.log(course.substring(2,5))//ayw
// console.log(course.substring(5,2))//swaps(2,5)=> same result
// console.log(course.substring(1,-3))//(1,0)=>swap(0,1)=>//p (negative values are converted to 0 )

//split()-converts string into an array

// let str="playwright Automation is interesting"
// console.log(str.split());//[ 'playwright Automation is interesting' ]
// console.log(str.split(""));
// /* [
//   'p', 'l', 'a', 'y', 'w', 'r', 'i',
//   'g', 'h', 't', ' ', 'A', 'u', 't',
//   'o', 'm', 'a', 't', 'i', 'o', 'n',
//   ' ', 'i', 's', ' ', 'i', 'n', 't',
//   'e', 'r', 'e', 's', 't', 'i', 'n',
//   'g'
// ] */

// console.log(str.split(" "))//[ 'playwright', 'Automation', 'is', 'interesting' ]
// console.log(str.split("a"))//[ 'pl', 'ywright Autom', 'tion is interesting' ]

/* 
split("").reverse().join("")--> reverse the string using inbuilt method
 */










