import axios from 'axios';
import React, { useState } from 'react';
import Validator from "validator"
const Register = () => {
    const [mail, setMail] = useState("")
    const [color, setColor] = useState(false)
    const [emailError, setEmailError] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const sendData = {
                uname: username,
                email: mail,
                password
            }
            // console.log(username)
            // console.log(mail)
            // console.log(password)
            await axios.post("/user/register", sendData)
        } catch (error) {
            console.log("" + error)
        }
    }
    const handleRegisterMessage = () => {
        console.log("register clicked")
    }
    return (
        <div>
            <div>
                <form onSubmit={handleSubmit}>
                    <h2>Register Form</h2>
                    <p>UserName</p>
                    <input type="text" name="uname" onChange={(e) => setUsername(e.target.value)} placeholder="Enter username" required />
                    {console.log(username)}
                    <p>Email ID </p>
                    <input type="text" name="email" onChange={(e) => { validateEmail(e.target.value) }} placeholder="Enter Email" required />
                    <br />
                    <span style={{
                        fontWeight: 'bold',
                        color: color ? ("green") : ("red"),
                    }}>{emailError}</span>
                    <p>Password</p>
                    {console.log(mail)}
                    <input type="text" name="pass" onChange={(e) => { setPassword(e.target.value) }} placeholder="Enter password" required />
                    <hr />
                    {console.log(password)}
                    <button type="submit" onClick={handleRegisterMessage}>Register</button>
                    <hr />
                </form>

            </div>
        </div>
    );
};

export default Register;