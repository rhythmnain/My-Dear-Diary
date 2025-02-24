import React from "react";

const Login = () => {
    return (
        <div>
            <h1>Login</h1>
            <form>
                <input typr="email" placeholder="Email" required />
                <input typr="password" placeholder="Password" required />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;