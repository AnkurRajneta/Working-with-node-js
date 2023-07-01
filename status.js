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
function calculatedMul(counter){
    var answer = 1;
    for(var i = 1; i <=counter; i++){
        answer = answer * i;
    }
    return answer;
}

function handleFirstRequest(req,res){
    // console.log(req.body);
    var counter = req.body.counter;
    // if(counter < 1000){
        
        var calculateSum = calculatedSum(counter);
        var calculateMul = calculatedMul(counter)

        var answerObject = {
            sum: calculateSum,
            mul: calculateMul
        }
       

        // var answer = "the sum is " + calculateSum; 
        res.status(200).send(answerObject);
    }
// else{
//     res.status(411).send("You have sent very big number")
// }


//app.get('/handleSum',handleFirstReques  t)

function givePage(req,res){
    res.send(`<head>
    <title>
        Hello from page
    </title>
</head>
<body>
    <i>
        hi there
    </i>
</body>`)

//or
//res.sendFile(__dirname + 'index.html')

}
app.post('/handleSum',handleFirstRequest)
app.get('/', givePage)


function started(){
    console.log(`Example app listening of port ${port}`)

}

app.listen(port,started)
