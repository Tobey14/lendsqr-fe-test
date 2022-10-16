import React from 'react';
import loginImg from './img/login.png';
import logo from './img/logo.png';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

function Login() {
  
  
  return (
      <div className="App">
          <img src={logo} alt="" className='mt-5 logo'/>
          <div className="content">
            <img src={loginImg} alt="" className='content-image' />

            <div className="welcome">
              <h3>Welcome!</h3>
              <p className="desc pb-4">Enter details to login.</p>
              <input type="text" className='mt-3' placeholder='Email'/>
              <input type="text" className='mt-4' placeholder='Password'/>
              <p className="show">SHOW</p>
              <p className="forgot mt-5">FORGOT PASSWORD?</p>

              <Link to='/dashboard'>
                <input type="button" className='submit text-white mt-4' value="LOG IN" />
              </Link>
            </div>
          </div>
          
      </div>    
  );
}

export default Login;
