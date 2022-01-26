import React from 'react';
import '../styles/Login.css';
import logo from '../img/elogo.png'

function Login() {
  return (
    <>
    <body>
        <div className='navbar'>
            <div className='logo1'>
              <img src={logo} alt='logo'/>
            </div>
        </div>

        <div className="sign-in">
            <h1>Sign In</h1>

            <form action="#" method="post">
                <input type="text" name="email" placeholder="Email or phone number"/>
                <input type="password" name="password" placeholder="Password"/>
                <input type="submit" value="Sign In" className="btn-sign-in" />
            </form>
        </div>
    </body>
    </>
  );
}

export default Login;
