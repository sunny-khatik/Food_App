import React from 'react';

const Login = () => {


    return (
        <div>
            <form>
                <h2>Login Form</h2>
                <p>UserName</p>
                <input type="text" name="uname" placeholder="Enter username" required />
                <p>Password</p>
                <input type="password" name="pass" placeholder="Enter password" required />
                <hr />
                <button style={{ width: "150px" }}>Login</button>
                <hr />
            </form>
        </div>
    );
};

export default Login;