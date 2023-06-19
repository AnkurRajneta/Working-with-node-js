// const fs = require("fs");//To inclue file system module in your application, use the require() method

 
// function callbackFn(err,data){
//     console.log(data)
// }
// fs.readFile("a.txt","utf-8",callbackFn);


const express = require('express')
const app = express()
const port = 3000;

function calculateSum(counter){
     var sum = 0;
     for(var i = 0; i < counter; i++){
         sum = sum + i;

     }
     return sum;
    }
function handleFirstRequest(req,res){
    var calculatedSum = calculateSum(100);
    console.log(calculatedSum);
     var answer = "the sum is" + calculatedSum;
     res.send(answer);
}
app.get('/', handleFirstRequest) 


function started(){
    
        console.log(`Example app listening on port ${port}`)    
    }

app.listen(port,started)

// function calculateSum(counter){
//     var sum = 0;
//     for(var i = 0; i < counter; i++){
//         sum = sum + i;

//     }
//     return sum;
// }
// var calculatedSum = calculateSum(100);
// console.log(calculatedSum);