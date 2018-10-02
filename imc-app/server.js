require('./models/Users.js');
require('./models/Doctors.js');
var cors = require('cors');
const express = require('express'); //express library is needed to call essentail functions like get,post,listen.
const bodyParser = require('body-parser'); //node module for our body parser function. 
const mongoose = require('mongoose'); //node module for mongoDB
const session = require('express-session'); //node module for session middleware. 

const Users = mongoose.model('Users');
const Doctors = mongoose.model('Doctors');

var app = express();

app.use(bodyParser.json()); //use function ensures the use middleware between the reuest recieved by our server and the data sent. 
app.use(bodyParser.urlencoded({extended: false}));  //urlencoded() ensures that non standardised data is rejected.  (important)
app.use(session({
    secret: 'imc web app',
    resave: true,
    saveUninitialized: false
}));

app.use(cors());

mongoose.connect('mongodb://localhost/passport-tutorial');

var user = {
    "userName":"Ghous",
    "password":"Ali"
}




app.listen(3004, function(){

    console.log('server running on port: 3004');
});


app.get('/',function(request,response){

    response.send(user); //Argument should be a JSON object
    console.log('Request for users received');

});

app.get('/getdoctors',function(request,response){
    console.log('Request for doctors received');

    Doctors.find({}).then(function(doctors){
        
        return response.send(doctors);
        
    });
    
    
});


app.get('/logout', function(req, response) {
    if (req.session) {
        // delete session object
        req.session.destroy(function(err) {
            if(err) {
                response.status(400).send('Error');
            } else {
                 
                response.status(500).send('sucessfully logged out!');
            }
        });
    }
});





app.get('/admin', function(req,response) {
    console.log('Contact!');
    if (req.session && req.session.userId) {
        return response.status(500).send('You are logged in');
    } else {
        return response.status(432).send('You are Not logged in');       
    }
}
       );

//----------------------------------------------Session----------------------------------------------------------









//-----------------------------------------------Post Functions--------------------------------------------------
app.post('/login',function(req,response){
    const user = req.body;
    console.log('login called!');
    if(!user || user =="")
    {
       return response.status(423).send("login request can't be empty");
    }else{
        if(user.userId && user.password){

            Users.findOne({userId: user.userId}).then(function(existingUser){

                if(!existingUser){
                    response.status(422).send('User ID not registered');
                }
                else{

                    if(existingUser.validatePassword(user.password)){
                        req.session.userId = existingUser._id; //add to session middleware. 
                        console.log(existingUser);
                        return response.status(500).send('Logged In successfully');

                    }else{
                        return response.status(422).send('Incorrect password or User ID');
                    }
                }

            });


        }
        else{

          return  response.status(422).send('You must provide your password and userid/email');
        }

    }

});


app.post('/adduser', function(req,response) {
    const data = req.body;
    if(!data || data == "")
    {
        response.status(422).send('Empty datafields');
    }
    else {

        if(!data.email || data.email == "" || !data.password || data.password == "" || !data.userId || data.userId == "" )
        {
            response.status(422).send('Email,UserId and Password must be set!');

        }
        else {
            const finalUser = new Users(data);
            if(!finalUser)
            {
                response.status(422).send('Error');
            }
            else{
                Users.findOne({ userId: finalUser.userId}).then(function(existingUser){
                    if(existingUser) 
                    {response.status(422).send('User: ' + existingUser.userId + ' already exists in the system.');
                    }
                    else{
                        finalUser.setPassword(data.password);
                        finalUser.save();
                        response.status(500).send('User added!');

                    }

                });
            }
        }

    }



});

app.post('/adddoctor',function(req,response){
    const doctor = req.body;

    if(!doctor || doctor == "")
    {
        response.status(422).send("/adddoctor request can't be empty");
    }
    else{
        if( doctor.name && doctor.type && doctor.availibility && doctor.days)
        {   
            const finalDoctor = new Doctors(doctor);
            Doctors.findOne({ name: finalDoctor.name}).then(function(existingDoctor){
                if(existingDoctor) 
                {response.status(500).send('Doctor ' + existingDoctor.name + ' already exists in the system.');
                }
                else{
                    finalDoctor.save(); 
                    response.status(500).send('Doctor added!');

                }

            });


        }
        else{
            response.status(422).send("name,type,availibility and days are all needed to add a doctor");
        }

    }


});