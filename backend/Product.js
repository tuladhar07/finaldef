const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    bookname: String,
    author: String,
    condition: String, 
    publicationyr:String,
    
    userid:String,
    location: String,
    image: String,
    prices: String,


});
module.exports =mongoose.model('product', productSchema);