//Easiest way to write a function


const fs = require("fs");

function callback(err,data){
    console.log(data)
}

fs.readFile("a.txt","utf-8",callback)


//medium way to write a function 

fs.readFile("a.txt","utf-8",function(err,data){
    console.log(data);
})


//Arrow function method to write a function 

fs.readFile("a.txt","utf-8",(err,data) =>{
    console.log(data)
})


//These all three ways of writing will give the same output