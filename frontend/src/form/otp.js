import React , {useState, Component} from 'react';
import './login.css';

import { Link, useNavigate } from 'react-router-dom'

function OTP() {
    const navigate=useNavigate();
    const [otp,setOtp]=useState('');
   



    const handleOTPchange =async (e) => { setOtp (e.target.value)
    console.log(otp)}
        const handleOTP =async (e) => {
           
           
            const userId= JSON.parse(localStorage.getItem('user'))[0].userID;
            let values= {userId, otp}


            e.preventDefault();
            const result = await fetch('http://localhost:5000/verifyOTP', {
      method: 'POST',
      body: JSON.stringify(values),
      headers: {
        'Content-Type':'application/json',
          }
    });
            console.log(otp);
            //navigate ('/login');
        };
  return (
    <div>
    <>

    <div className="text-center m-5-auto">
        <h2 className="signin_tit">Confirm Registration</h2>
        <form className="login_f" onSubmit={handleOTP}>
            <p>
                <label>Enter OTP Code</label><br/>
                <input id="otp" type="text"  name="otp" required  onChange={handleOTPchange} />
            </p>



      <button id="sub_btn" type="submit" className="btn_login" >Submit</button> 

        </form>

    </div>

    </>
    </div>
  )
}

export default OTP