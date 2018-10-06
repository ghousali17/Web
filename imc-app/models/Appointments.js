const mongoose = require('mongoose');


const {Schema} = mongoose;


const AppointmentsSchema = new Schema({
    doctorname:{ type: String, required:true},
    name:{type:String, reuired:true},
    address: {type:String, required:true},
    contact: {type:String, required:true},
    day: {type:String, required:true},
    branch: {type:String, required:true},

});

mongoose.model('Appointments',AppointmentsSchema);

