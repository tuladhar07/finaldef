const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    bookname: String,
    author: String,
    bookname : String,
    author: String ,
    condition: String, 
    publicationyr:String,
    price: String,
    location: String


});
module.exports =mongoose.model('product', productSchema);