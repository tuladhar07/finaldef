import React ,{ useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import HeaderTwo from '../HeaderTwo'
import Footer from '../Footer'
import './login.css'


const SignInPage = () => {
    const navigate=useNavigate();
    const [values, setValues] = useState({
        username: "",
        password: ""
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
        if (result.username ){
            localStorage.setItem("user", JSON.stringify(result));
            navigate('/')
        }else{
            alert("pleease enter correct details")}
      }

      const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
      };

    return (
        <>

        <div className="text-center m-5-auto">
            <h2 className="signin_tit">Sign in</h2>
            <form className="login_f" onSubmit={handleLogin}>
                <p>
                    <label>Username or email address</label><br/>
                    <input type="text" name="username" required  onChange={onChange}/>
                </p>
                <p>
                    <label >Password</label>
                    <Link to="/forget-password"><label className="right-label">Forget password?</label></Link>
                    <br/>
                    <input type="password" name="password" required onChange={onChange}/>
                </p>

            <button id="sub_btn" type="submit" className="btn_login">Login</button> 

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