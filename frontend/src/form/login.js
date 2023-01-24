import React ,{ useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import HeaderTwo from '../HeaderTwo'
import Footer from '../Footer'
//import bycrpt from 'bcrypt.js'
import './login.css'
const SignInPage = () => {
    const navigate=useNavigate();
    const [values, setValues] = useState({
        username: "",
        password: "",
        verify:""
      });

    
      const handleLogin = async (e) => {
        e.preventDefault();
    
        console.log(values);
      
        let result=await fetch ('http://localhost:5000/login', {
            method:'post',
            body:JSON.stringify(values),
            headers:{
                'Content-Type':'application/json'
            }
        });
        result=await result.json();
        console.warn (result)
        if (result.auth  ){
            localStorage.setItem("user", JSON.stringify(result.user));
            localStorage.setItem("token", JSON.stringify(result.auth));
            navigate('/profile')
        }else{
            alert("pleease enter correct details")}
      }


      
       

    const handleEmail =(e)=>
    {
        setEmail(e.target.value)
    }
    const handlePassword =(e)=>
    {
        setPassword(e.target.value)
    }
const handleAPI=(e)=>
{   e.preventDefault();
    console.log({email,password})
    axios.post('https://63c173fb99c0a15d28ea36fc.mockapi.io/login',{
        email:email,
        password:password
    })
    .then (result=>{
        console.log(result)
    })
    .catch(err=>{
        console.log(err)
    })
}

    return (
        <>

        <div className="text-center m-5-auto">
            <h2 className="signin_tit">Sign in</h2>
            <form className="login_f" onSubmit={handleAPI}>
                <p>
                    <label>Username or email address</label><br/>
                    <input type="text" name="username" required  onChange={handleEmail}/>
                </p>
                <p>
                    <label >Password</label>
                    <Link to="/forget-password"><label className="right-label">Forget password?</label></Link>
                    <br/>
                    <input type="password" name="password" required onChange={handlePassword}/>
                </p>

            <button id="sub_btn" type="submit" className="btn_login" >Login</button> 

            </form>
            <footer>
                <p>Don't have account ?  <Link to="/signup">Create an account</Link>.</p>
                <p><Link to="/">Back to Homepage</Link>.</p>
            </footer>
        </div>

        </>
    )


    }
export default SignInPage;