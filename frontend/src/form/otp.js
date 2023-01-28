import React , {useState, Component} from 'react';
import './login.css';
import {Link} from 'react-router-dom'


function OTP() {

    const [otp,setOtp]=useState('')





        const handleOTP =(e)=>{
setOtp(e.target.value);


            e.preventDefault();
            console.log(otp);
        };
  return (
    <div>
    <>

    <div className="text-center m-5-auto">
        <h2 className="signin_tit">Confirm Registration</h2>
        <form className="login_f" onSubmit={handleOTP}>
            <p>
                <label>Enter OTP Code</label><br/>
                <input type="text"  name="otp" required  onChange={handleOTP}/>
            </p>



      <button id="sub_btn" type="submit" className="btn_login" >Submit</button> 

        </form>

    </div>

    </>
    </div>
  )
}

export default OTP