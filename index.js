const fs = require("fs");//To inclue file system module in your application, use the require() method

 
function callbackFn(err,data){
    console.log(data)
}
fs.readFile("a.txt","utf-8",callbackFn);



// function calculateSum(counter){
//     var sum = 0;
//     for(var i = 0; i < counter; i++){
//         sum = sum + i;

//     }
//     return sum;
// }
// var calculatedSum = calculateSum(100);
// console.log(calculatedSum);