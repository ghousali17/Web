var express = require('express'); //express library is needed to call essentail functions like get,post,listen.
var bodyParser = require('body-parser'); //
var app = express();

app.use(bodyParser.json()); //use function ensures the use middleware between the reuest recieved by our server and the data sent. 
app.use(bodyParser.urlencoded({extended: false}));  //urlencoded() ensures that non standardised data is rejected.  (important)


var user = {
    "userName":"Ghous",
    "password":"Ali"
}




app.listen(3004, function(){

    console.log('server running on port: 3004');
});

app.get('/',function(request,response){

    response.send(user); //Argument should be a JSON object

});

app.post('/login', function(request,response){
    var user = request.body;
    if(user){
        
        console.log('Recieved Data');
        console.log(user.userName);
        console.log(user.password);
    }
    response.status(500).send('Put called');
    
});