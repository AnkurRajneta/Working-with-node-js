// const fs = require("fs");//To inclue file system module in your application, use the require() method

 
// function callbackFn(err,data){
//     console.log(data)
// }
// fs.readFile("a.txt","utf-8",callbackFn);


const express = require('express')
var bodyParser = require('body-parser')
const app = express()
const port = 3000;
// let numberOfRequests = 0;

// function midlewar1(req,res,next){
//     numberOfRequests = numberOfRequests + 1;
//     console.log(numberOfRequests);
//     next();
// }

//app.use(midlewar1)
app.use(bodyParser.json())
function calculateSum(counter){
     var sum = 0;
     for(var i = 0; i < counter; i++){
         sum = sum + i;

     }
     return sum;
    }
function handleFirstRequest(req,res){
    //var counter = req.query.counter; 
    console.log(req.body);
    console.log(req.headers) 
    var counter = req.headers.counter;
    console.log(req.query.counter2);
    console.log(req.query.counter3);
    var calculatedSum = calculateSum(counter);
    // console.log(calculatedSum);  
     var answer = "the sum is" + calculatedSum;
     res.send(answer);
}


// function createUser(req,res){
//     res.send('hello world');
// }
//app.get('/handleSum', handleFirstRequest)//app.get() method specifies a callback function that will be invoked whenever there is an HTTP GET request with a path ('/') relative to the site root. The callback function takes a request and a response object as arguments, and simply calls the send() method on the response to return the string "Hello World!".


// app.get('/handleSum2',handleFirstRequest)
// app.get('/handleSum3',handleFirstRequest)
app.post('/handleSum', handleFirstRequest)
//app.post('/createUser',createUser);
function started(){
    
        console.log(`Example app listening on port ${port}`)    
    }

app.listen(port,started)//app.listen() method to start a server on a port
