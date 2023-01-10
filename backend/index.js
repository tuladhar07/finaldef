const express = require("express");
require('./config');
const mongoose = require("mongoose");
const cors = require("cors");
const User = require('./Users.js');
const Product = require ('./Product.js')
 
const app = express();
app.use(cors());

app.use(express.json());
const connectDB = async() =>{
   
}

connectDB();
app.post("/register", async (req, resp)=>{
    // resp.send(req.body);
    let user = new User(req.body);
    let result = await user.save();
    result=result.toObject();
    delete result.password
    resp.send(result);
});

app.post("/login",async(req,resp) => {
 console.log(req.body);
    if (req.body.password && req.body.username){
        let user = await User.findOne(req.body).select("-password");
        if (user){
            resp.send(user)
        } else{
            resp.send({result:"no user found"})
        }
    }else {resp.send ({result:"no user found"})}

})

app.post("/add-product", async(req, resp)=>
{
    let product= new Product(req.body);
    let result= await product.save();
    resp.send(result)
}
)





app.listen(5000);