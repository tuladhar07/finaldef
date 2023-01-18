const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');
var bcrypt= require ('bcryptjs');
var Jwt= require ('jsonwebtoken');
const userSchema = new mongoose.Schema({
  
    username:String,
    email: String,
  
    ContactNo: String,
    password: {
        type:String,
        select:false
    },
    confirmPassword:{
        type: String,
        select:false 
        
    },
    verified: Boolean
    
     
});


userSchema.pre ('save', function(next){
    var salt= bcrypt.genSaltSync(10);
    this.password= bcrypt.hashSync(this.password, salt);
    console.log(this.password)
    next();
})


module.exports = mongoose.model('users', userSchema);
