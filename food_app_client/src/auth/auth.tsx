import React, { useState } from 'react';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import './auth.css';
import Login from "./Login/Login"
import Register from "./Register/Register"
const Auth = () => {

    const [toggle  , setToggle] = useState(false)
    const setCliclk = () =>{
      setToggle(!toggle)
    }
  return (
    <div  className="auth">
      <div className="auth__div1">
            <h1>Hungry Want Something...?</h1>
            <h3>Take a Look at Amazing Food App.</h3>
      </div>
      <div className="auth__div2">
        {
          toggle === true ?
          (<Login />)
          :(<Register/>)
        }
            {console.log(toggle)}
          <button onClick={setCliclk} className={toggle?"btn":"element"}>Want to Register ..?</button>

      </div>
    </div>
  );
}

export default Auth;