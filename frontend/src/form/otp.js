import React , {useState, Component} from 'react';
import './login.css';
import {Link, useNavigate} from 'react-router-dom'


function OTP() {
    const navigate=useNavigate();
      const [otp,setOtp]=useState('')
      
      const changeOTP =(e)=>{
            setOtp(e.target.value);
            e.preventDefault();
            console.log(otp);
        };


      const handleOTP = async (e) =>{
        e.preventDefault();
        const userId = localStorage.getItem('_id');
        const values = {userId, otp}
        const result = await fetch('http://localhost:5000/verifyOTP', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'Content-Type':'application/json',
            }
      });

      navigate('/login');
      }
  return (
    <div>
    <>

    <div className="text-center m-5-auto">
        <h2 className="signin_tit">Confirm Registration</h2>
        <form className="login_f" onSubmit={handleOTP}>
            <p>
                <label>Enter OTP Code</label><br/>
                <input type="text"  name="otp" required  onChange={changeOTP}/>
            </p>



      <button id="sub_btn" type="submit" className="btn_login" >Submit</button> 

        </form>

    </div>

    </>
    </div>
  )
}

export default OTP