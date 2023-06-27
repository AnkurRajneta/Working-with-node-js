const express = require('express')
const app = express()
const port = 3000

function calculatedSum(counter){
    var sum = 0;
    for(var i = 0; i <= counter; i++){
        sum = sum + i;
    }
    return sum
}

function handleFirstRequest(req,res){
    //var counter = req.query.counter;
    var calculateSum = calculatedSum(100);

    var answer = "the sum is " + calculateSum;
    res.send(answer);
}
app.get('/handleSum',handleFirstRequest)

function started(){
    console.log(`Example app listening of port ${port}`)

}

app.listen(port,started)