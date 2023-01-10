const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username:String,
    email: String,
    birthday: String,
    ContactNo: String,
    password: String,
    confirmPassword: String
});

module.exports = mongoose.model('users', userSchema);
