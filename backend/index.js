const express = require("express");
require('./config');
const {v4:uuidv4}= require ("uuid");
const mongoose = require("mongoose");
const cors = require("cors");
const User = require('./Users.js');
const Product = require ('./Product.js');
const Jwt = require("jsonwebtoken");
 const jwtKey="pustak";
const app = express();
const multiparty= require ("multiparty");
const IMAGE_UPLOAD_DIR="./uploads"
const IMAGE_BASE_URL= "http://localhost:5000/"
const { createBrotliCompress } = require("zlib");
const nodemailer= require("nodemailer");
const router=express.Router();
const UserOTPVerification= require ("./otpverify");                  //OTP verification Schema
const PasswordReset= require ("./PasswordReset");                   //Password reset schema

 //password handler
 const bcrypt= require ("bcrypt");
const { errorMonitor } = require("events");

app.use(cors());


app.use(express.json());
const connectDB = async() =>{
   
}



connectDB();
app.post("/register", async (req, resp)=>{
    // resp.send(req.body);
    let {username, email,  ContactNo, password, confirmPassword }= req.body;
   

    if (!username||!email||!ContactNo||!password||!confirmPassword){
         resp.json({
            status:"failed",
            message:"empty input fields",
         });
         return;
    }

    let result = await User.find({email})
    if(result.length){
        resp.json({
            status:"FAILED",
            message:"User already exists",
        }) ;
        return;
    }

    const salt = await bcrypt.genSalt(10);
    try{

        const hashedPassword = await bcrypt.hash(confirmPassword.trim(), salt);
        password = hashedPassword;
        const newUser = await new User({
            username, 
            email,
            ContactNo,
            password,
            confirmPassword,
            verified: false,

        });
        console.log(bcrypt.compareSync(confirmPassword,hashedPassword))
        console.log(password, hashedPassword);
        try{
            let isSaved = await newUser.save()
        sendOTPVerificationEmail(isSaved, resp)
    }
    catch(err){
        console.log(err);
        resp.json({
        status:"Failed",
        message:"ann error occured while saving user acc",
    });
    return;
}
}
catch(err){
    resp.json({
        status:"FAILED",
        message:"an error while hashing pw"
    });
}
});


//node mailer stuff
let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    auth : {

        user: "pustakhubb@gmail.com" ,
        pass: "yiuhpqvtjvgobbko",
    }
});

// send otp verification email
const sendOTPVerificationEmail= async ({_id, email}, resp)=>{
    try {
        const otp = `${Math.floor(1000+ Math.random()*9000)}`;


        //mail options 
        const mailOptions ={
            from : "pustakhubb@gmail.com",
            to: email,
            subject: "verify your email",
            html : `<p>enter <b> ${otp}</b> in the app to verify your email</p>
             <p> this code expires in 1 hr </p>`

        } ;

        //hash the otp
        const saltRounds= 10;
        const hashedOTP= await bcrypt.hash(otp, saltRounds);
        const newOTPVerification= await new UserOTPVerification({
            userId:_id,
        otp:hashedOTP,
            createdAt: Date.now(),
            expiresAt: Date.now()+3600000,
        });
        //save otp record
        await newOTPVerification.save();
        await transporter.sendMail(mailOptions);
        resp.json({
            status: "PENDING",
            message:"Verification OTP sent ",
            data:{
                userID:_id,
                email,
            },
        });


    }catch (error){
        resp.json({
            status:"FAILED",
            message:error.message,
        });
    }
}








app.post("/login",async(req,resp) => {
 console.log(req.body);

    if (!req.body.password || !req.body.username ){
        resp.send ({result:"no user found"})
        return;
    }
    const password = req.body.password.trim()
    const username = req.body.username.trim()
    let user1 = await User.find({username}).select("verified")
    if (!user1[0].verified){resp.send ({result :"USER NOT VERIFIED YET "})}
    let user = await User.find({username}).select("password")
    console.log(user);
    let checkValid = await bcrypt.compare(password, user[0].password)
    console.log(checkValid)
    if (checkValid){
        console.log (user);
        Jwt.sign({user}, jwtKey, {expiresIn: '2h'}, (err, token)=>{
            if (err){
                resp.send ({result :"smth went wrong "})
            }
            resp.send( {user,  auth: token})
        })
        
    } else{
        resp.send({result:"no user found"})
    }
})

//middle ware 
app.use (express.static ("uploads"));

app.post("/add-product", (req, resp)=>{
    // console.log(req);
    let form = new multiparty.Form({uploadDir: IMAGE_UPLOAD_DIR})
    // console.log(req['body']['data']);
    // req = req['body']['data'];
    form.parse(req, async function (err, fields, files){
        // console.log(fields);
        if(err) return resp.send({laudu: err.message});
        
        
        console.log (`fields = ${JSON.stringify(fields, null, 2)}`)
        console.log (`files = ${JSON.stringify(files, null, 2)}`)
        
        console.log("!");
        const imagePath= files.image [0].path;
        const imageFileName= imagePath.slice (imagePath.lastIndexOf("\\")+1);
        const imageURL= IMAGE_BASE_URL + imageFileName;
        console.log(imageURL);
        console.log(err, fields, files)
       
        const product= new Product({
            bookname: fields.bookname[0],
            author: fields.author[0],
            condition: fields.condition[0], 
            publicationyr:fields.publicationyr[0],
            prices:fields.prices[0],
            userId:fields.userId[0],
            image : imageURL
           
            

    })
    
    console.log(req, resp)
    try {
        const prod= await product.save();
        console.log(`Product= ${JSON.stringify(prod, null, 2)}`);
        resp.send(prod);
    }catch(err){
        console.log(err);
        resp.send ({error:err.message })
    }
})

});

//Verify otp email
app.post("/verifyOTP", async(req, res )=>{
console.log(res, req.body)
    try{
        let {userId, otp}= req.body;
        if (!userId||!otp){
            throw Error ("Empty otp details  are not allowed");

        }else {
            const USerOTPVerificationRecords= await UserOTPVerification.find ({
                userId, 
            });
            if (USerOTPVerificationRecords.length<= 0){
                // no record found 
               
                throw new Error(

                    "account record doesnt exist or has been verified. please sign in or login "
                );
            }  else {
                //user otp record exists
                const { expiresAt }= USerOTPVerificationRecords[0];
                const hashedOTP= USerOTPVerificationRecords[0].otp;
            
                if (expiresAt< Date.now()){
                    // user otp record has expired
                    await UserOTPVerification.deleteMany ({userId});
                    throw new Error ("Code has expired. Please request again");
                        
                }else { 
                    console.log("req, res");
                    console.log(otp, hashedOTP);
                    const validOTP= await bcrypt.compare (otp, hashedOTP);
                   

                    if (!validOTP){
                        //supplied otp is wrong 
                        throw new Error("Invalid code passed. Check your inbox .");
                    }else {
                        //success
                        await User.updateOne({_id: userId}, {verified: true});
                        await UserOTPVerification.deleteMany ({userId});
                        res.json({
                            status: "VERIFIED",
                            message:`USer email verified successfully`,
                        });
                    }
                }
            }

        }
    }catch (error) {
        res.json ({
            status:"laudu",
            message:error.message , 
        });

    }
});

app.post ("/requestPasswordReset", (req, res)=> {
    const {email, redirectUrl}= req.body;


    // check if email exists 
    User 
        .find ({email})
        .then ((data)=>{
            if (data.length ){
                //user exists 


                //check user is verified

                if (!data[0].verified){
                    res.json ({
                        status:"FAILED",
                        message :"Email hasn't been verified yet. Check your inbox ",

                    });
                }   else {
                    //proceed withg email to reset password 
                    sendResetEmail(data[0], redirectUrl, res );
                }
            }   else {
                res.json ({
                    status : "FAILED",
                    message:"No acount with the supplied email exists!",
                });
            }
        })
        .catch (error =>{
            console.log (error);
            res.json ({
                status:"FAILED",
                message : "An error occured while checking for existing user ", 
            });
        })

})

//send password reset email 
const sendResetEmail = ({_id, email}, redirectUrl, res)=>{
    const resetString= uuidv4+ _id; 

    // First, we clear all the existing resett records
    PasswordReset
    .deleteMany({ userId: _id})
    .then(result => {
        //Reset records deleted successfully
        //Now we send the email
        const otp = `${Math.floor(1000+ Math.random()*9000)}`;
        //mail options 
        const mailOptions ={
            from : "pustakhubb@gmail.com",
            to: email,
            subject: "Password Reset",
            html : `<p>Please Enter the given  OTP (  <b> ${otp}</b> ) to Reset your Password</p>
             <p> this code expires in 1 hr </p>`

        } ;

        //hash the reset string 
        const saltRounds= 10;
        bcrypt
        .hash(resetString, saltRounds)
        .then (hashedResetString =>{
            //set values in password reset collection 
            const newPasswordReset= new PasswordReset({
                userId:_id,
                resetString: hashedResetString,
                createdAt:Date.now(),
                expiresAt: Date.now()+3600000

            });
            
            newPasswordReset
            .save()
            .then (()=> {
                transporter
                    .sendMail(mailOptions)
                    .then (()=>{
                        //reset email sent and password reset record saved 
                        res.json ({
                            status: "PENDING ",
                            message :"Password reset email sent"
                        })
                    })
            })
            .catch(error=>{
                console.log(error);
                res.json ({
                    status:"FAILED",
                    message:"Couldnt save password reset detail",
                })

            })
        })
        .catch (error=>{
            console.log (error);
            res.json ({
                status:"FAILED",
            message :"An error occured while hasing the password reset data!"            })
        });

    })
    .catch (error=>{
        //error while clearing existing records 
        console.log (error);
        res.json ({
            status:"FAILED",
            message :"Clearing existing password reset records failed",
        });
    })
}


app.get("/products", async(req, resp)=>{
    let products= await Product. find ();
    if ( products.length>0){
        resp.send (products)
    }else {
        resp.send ({result:"No products found "})
    }
})

app.get("/userdetails", async(req, resp)=>{
    let users= await User. find ();
    if ( users.length>0){
        resp.send (users)
    }else {
        resp.send ({result:"No users found "})
    }
})

app.get("/search/:key", async (req,resp)=> {
let result=await Product.find ({
    "$or": [
        {bookname : {$regex: req.params.key}}
    ]
});
resp.send(result)
})

app.listen(5000);