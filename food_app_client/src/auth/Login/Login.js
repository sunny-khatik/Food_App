import React, { useState } from 'react';
import axios from "axios"
import { Link } from "react-router-dom"
const Login = () => {
    const [uname, setUname] = useState("")
    const [pass, setPass] = useState("")
    const [flip, setFlip] = useState(false)
    const handelClick = async (e) => {
        console.log("clciked")
        e.preventDefault();
        try {
            const data = {
                uname,
                password: pass
            }
            await axios.post("/user/login", data)
            console.log(data)
            setFlip(true)
        } catch (error) {
            console.log("" + error)
        }
    }
    return (
        <div>
            <form onSubmit={handelClick}>
                <h2>Login Form</h2>
                <p>UserName</p>
                <input type="text" name="uname" placeholder="Enter username" onChange={(e) => setUname(e.target.value)} required />
                <p>Password</p>
                <input type="password" name="pass" placeholder="Enter password" onChange={(e) => setPass(e.target.value)} required />
                <hr />
                {console.log(flip)}
                <Link to={flip ? "/homepage" : "/"}>
                    <button style={{ width: "150px" }} >Login</button>
                </Link>
                {console.log(flip)}
                <hr />
            </form>
        </div>
    );
};

export default Login;