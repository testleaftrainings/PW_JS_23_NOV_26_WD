//var,let and const- keywords to declare the variable

//declaration+Assignment= Initialization
//var course + course="Playwright"= var course="Playwright"

//var - allows both redeclaration or re-initialization and it can also be reassigned.

var course="Playwright"
var course="Playwright" //redeclaration or re-initialization
course=true//reassigning
console.log(course);

//let -redeclaration is not possible but can be reassigned

let empSalary=50000
//let empSalary=50000  //redeclaration or re-initialization is not possible
empSalary=20000 //can be reassigned
console.log(empSalary);

//const - fixed and final one

const Pan="AYJPG6420E"
//const Pan="AYJPG6420E" //redeclaration or re-initialization is not possible
Pan="ARUKHL123" //reassignment or assignment alone in new line is also not possible
console.log(Pan)//TypeError: Assignment to constant variable.





