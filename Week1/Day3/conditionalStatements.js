//conditional statements- used to check conditions and also ranges.
//ex: if, if_else, if_else if_else


//eligibility to vote

//if_else

// let age=16
// if(age>=18){
//     console.log("eligibile to vote");
// }else{
//     console.log("not eligibile to vote");
// }



//if_else if

// let marks=50
// if (marks>80){
//     console.log("Distinction");
// }else if(marks>60){
// console.log("first class");
// }else if(marks>40){
// console.log("second class");
// }else{
//    console.log("failed");
  
// }

//switch - used to compare multiple condition over common expression

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

function launchBrowser(browserType){
let browserType="opera"
switch (browserType){
case "Chrome":
    console.log("launch Chrome browser")
    break
case "Edge":
    console.log("launch Edge browser")
    break 
case "Firefox":
    console.log("launch Firefox browser")
    break
case "Webkit":
    console.log("launch Webkit browser")
    break
default:
    console.log("invalid browser")

}
}
launchBrowser("Firefox")
launchBrowser("Webkit")