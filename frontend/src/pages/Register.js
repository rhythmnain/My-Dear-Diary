import React from "react";

const Register = () => {
    return (
    <div>
        <h1>Rehsiter</h1>
        <form>
        <input type="text" placeholder="Name" required />
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Sign up</button>
        </form>
    </div>
    );
};

export default Register;