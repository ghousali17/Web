const mongoose = require('mongoose');
const crypto = require('crypto');


const {Schema} = mongoose; 

const UsersSchema = new Schema({
    email: {type:String, required: true}, 
    hash: String,
    salt: String,
    userId: {type:String, required:true, unique:true},
});

UsersSchema.methods.setPassword = function (password){
    this.salt = crypto.randomBytes(16).toString('hex');
    this.hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');


}
UsersSchema.methods.validatePassword = function(password){
    const hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
    return this.hash == hash;

}



mongoose.model('Users',UsersSchema);