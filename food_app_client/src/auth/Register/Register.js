import React, { useState } from 'react';
import Validator from "validator"
const Register = () => {
    const [mail, setMail] = useState("")
    const [color, setColor] = useState(false)
    const [emailError, setEmailError] = useState("")
    const validateEmail = (mail) => {
        if (Validator.isEmail(mail)) {
            setMail(mail)
            setColor(true)
            setEmailError('Valid Email :)')
        }
        else {
            setEmailError("Enter Valid Email :(")
        }
    }
    return (
        <div>
            <div>
                <form>
                    <h2>Register Form</h2>
                    <p>UserName</p>
                    <input type="text" name="uname" placeholder="Enter username" required />
                    <p>Email ID </p>
                    <input type="text" name="email" onChange={(e) => { validateEmail(e.target.value) }} placeholder="Enter Email" />
                    <br />
                    <span style={{
                        fontWeight: 'bold',
                        color: color ? ("green") : ("red"),
                    }}>{emailError}</span>
                    <p>Password</p>
                    {console.log(mail)}
                    <input type="text" name="pass" placeholder="Enter password" />
                    <hr />
                    <button>Register</button>
                    <hr />
                </form>

            </div>
        </div>
    );
};

export default Register;