import React from 'react'
import "../Login/Login.css";
import { Link, useNavigate} from 'react-router-dom';
import { useState } from 'react';
import auth from '../../Firebase';




const Login = () => {
    const history = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const login =(event)=>{
        event.preventDefault();
        auth.signInWithEmailAndPassword(email,password).then((_)=>{
            history('/')
            
        }).catch((err)=>console.log(err));
    }
 

     const register = (event)=>{
        event.preventDefault();
        auth.createUserWithEmailAndPassword(email,password).then((authUser)=>{
            console.log(authUser);
            alert("User account created")
        }).catch((err)=>console.log(err))
        

     }
    
  return (
    
    <div className='login'>
        <Link to="/">
           <img src='http://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' className='login__logo'/>
        </Link>

        <div className='login__container'>
            <h1>Sign in</h1>
            <form>
                <h5>E-mail</h5>
                <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <h5>Password</h5>
                <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                <button  onClick={login} type='submit' className='login__signInButton'>Sign In</button>

            </form>
            <p>
                By signing-in you agree to Amazon's Conditions of Use & Sale. Please see our privacy Noticy, our Cookies Notice and our Internet-Based Ads Notice.
            </p>
            <button onClick={register} className='login__registerButton'>Create your Amazon Account</button>
        </div>

    </div>
  )
}

export  default Login;