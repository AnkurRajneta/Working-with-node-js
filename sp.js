 function logResponebody(jsonBody){
    console.log(jsonBody);
 }
 
 function callbackFn(result){
    console.log(result) 
 } 
 var sendObj = {
      method: "GET"
    };

 fetch("http://localhost:3000/handleSum?counter=10",sendObj).then(callbackFn);//fetch is a function which is used to send the request to the server 