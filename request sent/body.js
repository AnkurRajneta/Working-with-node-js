const express = require('express')
var bodyParser = require('body-parser')
const app = express()
const port = 3000
 


app.use(bodyParser.json())//it is used to parse the body of the request before it reaches to the respected handler function
function calculatedSum(counter){
    var sum = 0;
    for(var i = 0; i <= counter; i++){
        sum = sum + i;
    }
    return sum
}

function handleFirstRequest(req,res){
    console.log(req.body);
    var counter = req.headers.counter;
    
    var calculateSum = calculatedSum(counter);
       

    var answer = "the sum is " + calculateSum;
    res.send(answer);
}
//app.get('/handleSum',handleFirstReques  t)
app.post('/handleSum',handleFirstRequest)


function started(){
    console.log(`Example app listening of port ${port}`)

}

app.listen(port,started) 