const mongoose = require('mongoose');


const {Schema} = mongoose;


const DoctorsSchema = new Schema({
   name:{ type: String, required:true},
   type:{ type: String, required:true},
   availibility: String,
   days: [{type: String, required:true}],
    
});

mongoose.model('Doctors',DoctorsSchema);