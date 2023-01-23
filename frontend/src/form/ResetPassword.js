import React , {useState, Component} from 'react';
import './login.css';
import {Link} from 'react-router-dom'


function ResetPassword() {
    const [password,setPassword]=useState('')
    const [otp,setOtp]=useState('')

    const handleAPI=(e)=>
    {
        e.preventDefault();
    };

    const handlePassword =(e)=>
    {
        setPassword(e.target.value)
    };

        const handleOTP =(e)=>{
            console.log({otp});
        };
  return (
    <div>
    <>

    <div className="text-center m-5-auto">
        <h2 className="signin_tit">Reset Password</h2>
        <form className="login_f" onSubmit={handleAPI}>
            <p>
                <label>Enter OTP Code</label><br/>
                <input type="text"  name="otp" required  onChange={handleOTP}/>
            </p>
            <p>
                <label >Enter New Password</label>
                <br/>
                <input type="password" name="password" required onChange={handlePassword}/>
            </p>
            <p>
                <label >Confirm New Password</label>
                <br/>
                <input type="password" name="password" required onChange={handlePassword}/>
            </p>

      <button id="sub_btn" type="submit" className="btn_login" >Submit</button> 

        </form>
        
    </div>

    </>
    </div>
  )
}

export default ResetPassword
