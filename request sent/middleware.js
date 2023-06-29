const express = require('express')
const app = express()
const port = 3000
let numberOfRequests = 0;

//everytime firstly the control will reach to the middleware

function middleware1(req,res,next){ 
  numberOfRequests = numberOfRequests + 1;  
  console.log(numberOfRequests);
//   res.send("Error from inside middleware");//if next is not there then we can show an error

   next();//it indicates that now the control can go to another functions also 
}

app.use(middleware1)//It is the way to register middleware so that we can use it


function calculatedSum(counter){
    var sum = 0;
    for(var i = 0; i <= counter; i++){
        sum = sum + i;
    }
    return sum
}

function handleFirstRequest(req,res){
    console.log(req.headers);
    var counter = req.headers.counter;
    
    var calculateSum = calculatedSum(counter);
       

    var answer = "the sum is " + calculateSum;
    res.send(answer);
}
app.post('/handleSum',handleFirstRequest)
//app.post('/handleSum',handleFirstRequest)


function started(){
    console.log(`Example app listening of port ${port}`)

}

app.listen(port,started)